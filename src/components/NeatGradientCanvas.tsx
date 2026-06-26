import React, { useRef, useEffect } from 'react';

export default function NeatGradientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl') as WebGLRenderingContext | null;
    if (!gl) {
      console.warn('WebGL not supported');
      return;
    }

    let animationFrameId: number;
    let scrollY = window.scrollY;

    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Vertex shader source
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // High fidelity fluid gradient shader simulating NeatGradient with domain warping,
    // custom flow distortion, scroll reactive yOffset, and color blending.
    const fsSource = `
      precision mediump float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_scrollY;

      // Noise utilities for organic flowing distortion
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(hash(i + vec2(0.0,0.0)), hash(i + vec2(1.0,0.0)), u.x),
          mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), u.x), 
          u.y
        );
      }

      // Domain Warp based on multiple noise octaves to mimic Neat's flow distortion
      vec2 domainWarp(vec2 p, float time) {
        float d1 = noise(p * 1.6 + vec2(time * 0.15, time * 0.12));
        float d2 = noise(p * 2.4 + vec2(-time * 0.1, time * 0.2) + vec2(d1 * 1.8));
        return vec2(d1, d2);
      }

      void main() {
        // Normalized screen coordinates
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        
        // Convert to proportional aspect ratio space
        vec2 p = uv;
        p.x *= u_resolution.x / u_resolution.y;

        // Apply scroll offset factor to flow pattern (simulating gradient.yOffset)
        float scrollFactor = u_scrollY * 0.00065;
        p.y -= scrollFactor;

        // NeatGradient configuration variables mapped to shader math:
        // speed = 2.5, horizontalPressure = 5, verticalPressure = 5
        // waveFrequencyX = 2, waveFrequencyY = 3, waveAmplitude = 6
        float time = u_time * 0.35; // neat speed scale factor

        // Primary flowing wave coordinate warping
        vec2 warpCoord = p * 1.5;
        warpCoord.x += sin(p.y * 3.0 + time) * 0.28;
        warpCoord.y += cos(p.x * 2.0 + time) * 0.22;

        // Nested flow distortions (flowDistortionA = 3.7, flowDistortionB = 0.8, flowScale = 1.6)
        vec2 flowWarp = domainWarp(warpCoord * 1.6, time);
        p += flowWarp * 0.38;

        // Evaluate noise maps to isolate blending weights
        float n1 = noise(p * 1.8 + vec2(time * 0.2, time * 0.1));
        float n2 = noise(p * 2.8 - vec2(time * 0.15, -time * 0.25));
        float n3 = noise(p * 3.5 + vec2(time * 0.1, time * 0.35));

        // Enabled Neat Colors:
        // Color 1: #331818 (0.20, 0.094, 0.094) - Dark Warm Red-Brown
        // Color 2: #FF8F00 (1.0, 0.56, 0.0) - Bold Amber-Orange
        // Color 3: #5E4242 (0.368, 0.258, 0.258) - Rich Chocolate Gray-Brown
        // Background: #000000 (Pure Black)
        vec3 bg_color = vec3(0.0, 0.0, 0.0);
        vec3 col1 = vec3(0.20, 0.094, 0.094);
        vec3 col2 = vec3(1.0, 0.56, 0.0);
        vec3 col3 = vec3(0.368, 0.258, 0.258);

        // Blending & Multipliers (colorBlending = 5, colorBrightness = 0.9)
        vec3 final_color = bg_color;
        
        // Layering standard Neat liquid elements
        float w1 = smoothstep(0.15, 0.85, n1);
        float w2 = smoothstep(0.2, 0.9, n2);
        float w3 = smoothstep(0.25, 0.95, n3);

        final_color = mix(final_color, col1, w1 * 0.75);
        final_color = mix(final_color, col2, w2 * 0.65);
        final_color = mix(final_color, col3, w3 * 0.55);

        // Color brightness adjustment
        final_color *= 1.15;

        // Dynamic fine-grained matte finish
        float grain = (hash(gl_FragCoord.xy + vec2(u_time)) - 0.5) * 0.022;
        final_color += vec3(grain);

        // Vignette intensity = 0.45, vignetteRadius = 0.55
        float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y) * 16.0;
        vignette = pow(vignette, 0.45);
        final_color *= mix(0.55, 1.0, vignette);

        gl_FragColor = vec4(final_color, 1.0);
      }
    `;

    // Compile helper
    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      if (!glContext.getShaderParameter(shader, glContext.COMPILE_STATUS)) {
        console.error('Shader error:', glContext.getShaderInfoLog(shader));
        glContext.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Setup full-screen quad vertices
    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
      -1.0,  1.0,
       1.0, -1.0,
       1.0,  1.0
    ]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resLoc = gl.getUniformLocation(program, 'u_resolution');
    const timeLoc = gl.getUniformLocation(program, 'u_time');
    const scrollLoc = gl.getUniformLocation(program, 'u_scrollY');

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5); // high fidelity optimized scaling
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let start: number | null = null;
    const render = (now: number) => {
      if (start === null) start = now;
      const elapsed = (now - start) * 0.001;

      gl.useProgram(program);

      // Pass values
      gl.uniform2f(resLoc, canvas.width, canvas.height);
      gl.uniform1f(timeLoc, elapsed);
      gl.uniform1f(scrollLoc, scrollY);

      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (gl) {
        gl.deleteBuffer(vertexBuffer);
        gl.deleteShader(vs);
        gl.deleteShader(fs);
        gl.deleteProgram(program);
      }
    };
  }, []);

  return (
    <canvas
      id="gradient"
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: 'normal', backgroundColor: '#000000' }}
    />
  );
}
