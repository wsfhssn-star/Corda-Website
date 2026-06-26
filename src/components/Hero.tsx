import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import NeatGradientCanvas from './NeatGradientCanvas';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Smooth scroll parallax transforms
  const yContent = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacityContent = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-black overflow-hidden min-h-screen flex items-center"
    >
      
      {/* Premium WebGL Neat-style liquid fluid gradient background */}
      <NeatGradientCanvas />

      {/* Atmospheric overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06060A]/20 to-[#06060A] pointer-events-none z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-20 w-full">
        
        {/* Main centered content area */}
        <motion.div 
          style={{ y: yContent, opacity: opacityContent }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          
          {/* Centered Top Series A Banner Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wide cursor-pointer hover:bg-orange-500/20 transition-all mb-10 shadow-lg shadow-orange-500/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>Corda raises $11.5M Series A</span>
            <span className="text-orange-500/50">›</span>
          </motion.div>

          {/* Majestic Hero Header text */}
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            The AI platform for <br />
            <span className="bg-gradient-to-r from-orange-400 via-brand-orange to-amber-500 bg-clip-text text-transparent">
              enterprise authority & growth
            </span>
          </motion.h1>

          {/* Premium descriptive subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 mt-8 max-w-2xl font-sans leading-relaxed opacity-90"
          >
            Purpose-built operating system for enterprise PR and authority growth leaders to move faster, work smarter, and automate search presence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 w-full max-w-md"
          >
            <button 
              onClick={() => handleScrollTo('pricing-section')}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#06060A] hover:bg-orange-50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-display font-semibold text-sm rounded-xl shadow-2xl shadow-white/5 cursor-pointer"
              id="hero-cta-primary"
            >
              Request a demo
            </button>
            
            <button 
              onClick={() => handleScrollTo('product-showcase')}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
              id="hero-cta-secondary"
            >
              See how it works
              <span className="text-white/40">›</span>
            </button>
          </motion.div>

          {/* Grayscale Client Logos Banner at the bottom */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-28 sm:mt-36 border-t border-white/5 pt-12 w-full"
          >
            <p className="text-[11px] font-mono font-semibold text-slate-500 uppercase tracking-widest mb-8">
              Trusted by modern enterprise teams running complex global authority programs
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-slate-400/50 font-display font-extrabold text-base sm:text-lg max-w-5xl mx-auto">
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">FintechOS</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">SaaSflow</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">ScaleAI</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">PrismSec</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">HubSpot</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">Milliman</span>
              <span className="hover:text-white transition-colors duration-200 cursor-default tracking-tight">WHITE & CASE</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
