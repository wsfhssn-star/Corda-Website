import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Globe, 
  ShieldAlert, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  Layers, 
  Coins, 
  CheckCircle2, 
  ExternalLink,
  Zap,
  Maximize2,
  ChevronRight,
  ArrowRight
} from 'lucide-react';

// Steps representing the 6 chapters of the product film
interface VideoStep {
  id: 'analyze' | 'discover' | 'generate' | 'launch' | 'verify' | 'grow';
  label: string;
  duration: number; // in seconds
  caption: string;
  badge: string;
}

const STEPS: VideoStep[] = [
  {
    id: 'analyze',
    label: 'Analyze',
    duration: 10,
    caption: 'Corda DeepScan analyzes your target domain and cross-references your main competitors to uncover real authority deficits.',
    badge: '01 / SYSTEM INGEST'
  },
  {
    id: 'discover',
    label: 'Discover',
    duration: 12,
    caption: 'Corda reveals high-fidelity backlink gaps, identifying specific top-tier publishers where competitors hold organic advantages.',
    badge: '02 / OPPORTUNITY MAPPING'
  },
  {
    id: 'generate',
    label: 'Generate',
    duration: 12,
    caption: 'Our generative campaign engine designs contextual PR strategies, matching keywords with tailored multi-tone pitch drafts.',
    badge: '03 / STRATEGY SYNTHESIS'
  },
  {
    id: 'launch',
    label: 'Launch',
    duration: 10,
    caption: 'Submit your campaign. Corda processes transactions through a secure wallet-based ledger to instantly queue outreaches.',
    badge: '04 / SECURE LEDGER ROUTING'
  },
  {
    id: 'verify',
    label: 'Verify',
    duration: 12,
    caption: 'Corda’s real-time consensus web crawler verifies organic, permanent placements, validating exact anchor text match.',
    badge: '05 / LIVE VERIFICATION'
  },
  {
    id: 'grow',
    label: 'Grow',
    duration: 14,
    caption: 'Watch your authority scale dynamically as target domain index equity flows, driving explosive organic growth.',
    badge: '06 / MEASURE EXPONENTIAL ROI'
  }
];

export default function ExplainerVideo() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentStepIdx, setCurrentStepIdx] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0); // 0 to 100 within the current step
  const [speed, setSpeed] = useState<number>(1); // 1x, 1.5x, 2x
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  // Specific interactive mock values that increment/count up
  const [daScore, setDaScore] = useState<number>(12);
  const [competitorGapPercent, setCompetitorGapPercent] = useState<number>(84);
  const [crawledPages, setCrawledPages] = useState<number>(0);
  const [roiPercent, setRoiPercent] = useState<number>(0);
  const [organicTraffic, setOrganicTraffic] = useState<number>(12400);

  const activeStep = STEPS[currentStepIdx];

  // Particle Generation
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);
  
  useEffect(() => {
    // Generate simple light data particles
    const pts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5
    }));
    setParticles(pts);
  }, []);

  // Main playback timer hook
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 100; // update every 100ms
    const stepDurationMs = activeStep.duration * 1000;
    const increment = (intervalTime / stepDurationMs) * 100 * speed;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          // Go to next step
          if (currentStepIdx < STEPS.length - 1) {
            setCurrentStepIdx(currentStepIdx + 1);
            return 0;
          } else {
            // Loop back to start
            setCurrentStepIdx(0);
            return 0;
          }
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentStepIdx, speed, activeStep]);

  // Hook to simulate dynamic count-ups corresponding to different active steps
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (activeStep.id === 'analyze') {
      // DA counts up from 12 to 24 in step 1
      setDaScore(12);
      interval = setInterval(() => {
        setDaScore((prev) => (prev < 24 ? prev + 1 : 24));
      }, 300);
    } else if (activeStep.id === 'discover') {
      // Competitor gap fluctuates
      setCompetitorGapPercent(84);
      interval = setInterval(() => {
        setCompetitorGapPercent((prev) => (prev > 68 ? prev - 1 : 68));
      }, 200);
    } else if (activeStep.id === 'verify') {
      // Crawling pages count up
      setCrawledPages(0);
      interval = setInterval(() => {
        setCrawledPages((prev) => (prev < 420 ? prev + 12 : 420));
      }, 150);
    } else if (activeStep.id === 'grow') {
      // Growth metrics rocket up
      setDaScore(24);
      setOrganicTraffic(12400);
      setRoiPercent(0);
      interval = setInterval(() => {
        setDaScore((prev) => (prev < 78 ? prev + 1 : 78));
        setOrganicTraffic((prev) => (prev < 148500 ? prev + 3100 : 148500));
        setRoiPercent((prev) => (prev < 380 ? prev + 8 : 380));
      }, 80);
    }

    return () => clearInterval(interval);
  }, [activeStep.id]);

  const handleStepSelect = (index: number) => {
    setCurrentStepIdx(index);
    setProgress(0);
  };

  const handleRestart = () => {
    setCurrentStepIdx(0);
    setProgress(0);
    setIsPlaying(true);
  };

  // Human-formatted audio simulator trigger
  const [audioOscillator, setAudioOscillator] = useState<boolean>(false);
  const handleToggleMute = () => {
    setIsMuted(!isMuted);
    setAudioOscillator(true);
    setTimeout(() => setAudioOscillator(false), 800);
  };

  return (
    <section id="explainer-video-section" className="py-24 sm:py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      
      {/* Dynamic Background Grid Pattern (Evoking Linear & Stripe) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #F97316 1px, transparent 1px),
            linear-gradient(to bottom, #F97316 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Radiant Glow Spots */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/25 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Floating Sparkles Vector background decor */}
      <div className="absolute top-12 right-12 text-orange-200 pointer-events-none animate-pulse">
        <Sparkles className="w-16 h-16" />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header Block with high craftsmanship typography */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-600 text-[11px] font-mono font-bold tracking-wider uppercase mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
            <span>Product Showcase Film</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-navy leading-tight"
          >
            The Corda System in Motion
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed font-sans"
          >
            A cohesive motion graphics overview showing exactly how Corda intercepts authority gaps, generates optimized outreach campaigns, and fuels real organic revenue.
          </motion.p>
        </div>

        {/* Video Player Shell - High polish, soft shadows, clean white viewport */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.07)] relative"
        >
          {/* Top Bar simulating Premium OS Desktop frame */}
          <div className="bg-slate-50 border-b border-slate-200/80 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] opacity-70" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] opacity-70" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] opacity-70" />
              <span className="ml-3 text-xs font-mono font-bold tracking-wider text-slate-400 uppercase">
                Corda_Authority_Walkthrough_x264.mp4
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 border border-orange-100 text-[10px] font-mono text-orange-600 font-bold">
                <Sparkles className="w-3 h-3" />
                <span>AI-RENDERED</span>
              </span>
            </div>
          </div>

          {/* Interactive Cinematic Stage Container (White canvas) */}
          <div className="aspect-[16/10] w-full bg-white relative flex flex-col justify-between overflow-hidden p-8 sm:p-12">
            
            {/* Background Subtle Sparkle Particles */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
              {particles.map((pt) => (
                <motion.div
                  key={pt.id}
                  className="absolute rounded-full bg-orange-400/20"
                  style={{
                    left: `${pt.x}%`,
                    top: `${pt.y}%`,
                    width: pt.size,
                    height: pt.size,
                  }}
                  animate={{
                    y: [0, -35, 0],
                    opacity: [0.2, 0.7, 0.2]
                  }}
                  transition={{
                    duration: 6,
                    delay: pt.delay,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            {/* Top Stage Metadata */}
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono font-bold text-orange-500 uppercase tracking-widest block mb-1">
                  {activeStep.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-navy tracking-tight uppercase">
                  {activeStep.label}
                </h3>
              </div>

              {/* Connected Stage Loop Timeline indicator on right */}
              <div className="flex items-center gap-1">
                {STEPS.map((step, idx) => (
                  <div 
                    key={step.id} 
                    className={`h-1 rounded-full transition-all duration-300 ${
                      idx < currentStepIdx 
                        ? 'w-6 bg-orange-500' 
                        : idx === currentStepIdx 
                          ? 'w-10 bg-orange-500' 
                          : 'w-2 bg-slate-200'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ── CHAPTER VISUAL STAGES WITH CONNECTED MORPHING MOTION ── */}
            <div className="flex-1 flex items-center justify-center relative my-4 sm:my-6 z-10 min-h-[300px]">
              <AnimatePresence mode="wait">
                
                {/* STAGE 1: ANALYZE */}
                {activeStep.id === 'analyze' && (
                  <motion.div
                    key="analyze"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-lg bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 shadow-[0_32px_64px_rgba(15,23,42,0.04)] relative overflow-hidden"
                  >
                    {/* Glowing background halo */}
                    <div className="absolute -top-12 -left-12 w-40 h-40 bg-orange-200/20 rounded-full blur-2xl pointer-events-none" />

                    <div className="absolute top-4 right-4 flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500 animate-ping" />
                      <span className="text-[10px] font-mono font-bold text-orange-600 uppercase bg-orange-50 px-2 py-0.5 rounded-full">
                        Scan Active
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-100/80">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-500 relative shrink-0">
                        <Globe className="w-6 h-6 animate-spin" style={{ animationDuration: '15s' }} />
                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 text-white rounded-full flex items-center justify-center text-[8px] font-bold">
                          1
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest font-extrabold">System Target Ingestion</span>
                        <h4 className="text-base font-display font-extrabold text-brand-navy flex items-center gap-2">
                          <span>my-brand-startup.io</span>
                          <span className="text-xs font-mono font-medium text-slate-400">(Your Domain)</span>
                        </h4>
                      </div>
                    </div>

                    {/* Animated Scanning Network Node Graph */}
                    <div className="relative h-44 border border-slate-100 rounded-2xl bg-slate-50/50 flex items-center justify-center overflow-hidden mb-6">
                      
                      {/* Radar sweep lines */}
                      <motion.div 
                        className="absolute inset-0 border-r border-orange-500/20 origin-center"
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                        style={{
                          background: 'conic-gradient(from 0deg, transparent 70%, rgba(249,115,22,0.06) 100%)'
                        }}
                      />

                      {/* Concentric scan circles */}
                      <div className="absolute w-24 h-24 rounded-full border border-orange-500/10 flex items-center justify-center">
                        <div className="absolute w-12 h-12 rounded-full border border-orange-500/15" />
                      </div>

                      {/* Network nodes with SVG connections */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none">
                        <motion.line 
                          x1="50%" y1="50%" x2="22%" y2="28%" 
                          stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 4"
                        />
                        <motion.line 
                          x1="50%" y1="50%" x2="78%" y2="30%" 
                          stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 4"
                        />
                        {/* Core beam animation */}
                        <motion.circle r="3" fill="#F97316">
                          <animateMotion 
                            path="M 120 70 L 220 88" 
                            dur="1.8s" repeatCount="indefinite"
                          />
                        </motion.circle>
                        <motion.circle r="3" fill="#F97316">
                          <animateMotion 
                            path="M 320 60 L 220 88" 
                            dur="2.2s" repeatCount="indefinite"
                          />
                        </motion.circle>
                      </svg>

                      {/* Us Node in the center */}
                      <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.95, 1.05, 0.95] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute z-10 w-14 h-14 bg-orange-500 text-white rounded-full flex flex-col items-center justify-center shadow-lg border-2 border-white"
                      >
                        <span className="text-[9px] font-mono font-bold leading-none uppercase">DA</span>
                        <span className="text-sm font-mono font-black">{daScore}</span>
                      </motion.div>

                      {/* Competitor Node Left */}
                      <motion.div 
                        className="absolute left-[16%] top-[20%] z-10 bg-white border-2 border-red-200 p-2 rounded-xl shadow-sm text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-[8px] font-mono text-slate-400 font-bold uppercase">competitor-1.com</p>
                        <p className="text-[11px] font-mono font-black text-red-500">DA 82</p>
                      </motion.div>

                      {/* Competitor Node Right */}
                      <motion.div 
                        className="absolute right-[16%] top-[22%] z-10 bg-white border-2 border-red-200 p-2 rounded-xl shadow-sm text-center"
                        whileHover={{ scale: 1.05 }}
                      >
                        <p className="text-[8px] font-mono text-slate-400 font-bold uppercase">competitor-2.co</p>
                        <p className="text-[11px] font-mono font-black text-red-500">DA 74</p>
                      </motion.div>
                    </div>

                    {/* Target status rows */}
                    <div className="space-y-2.5">
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-red-50/50 border border-red-100 text-xs font-mono"
                      >
                        <span className="text-slate-600 font-medium">Competitor-1 Backlink Lead</span>
                        <span className="text-red-600 font-black">238 Linking Domains</span>
                      </motion.div>

                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-between p-3.5 rounded-xl bg-orange-50/40 border border-orange-100/60 text-xs font-mono"
                      >
                        <span className="text-slate-600 font-medium">Uncovered Authority Gap</span>
                        <span className="text-orange-600 font-black flex items-center gap-1">
                          <ShieldAlert className="w-3.5 h-3.5 text-orange-500" /> Critical Deficit
                        </span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 2: DISCOVER */}
                {activeStep.id === 'discover' && (
                  <motion.div
                    key="discover"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    {/* Left Panel: Domain Gap comparison visualizer with bounce charts */}
                    <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 shadow-[0_32px_64px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-red-100/30 rounded-full blur-xl pointer-events-none" />
                      
                      <div>
                        <span className="text-[10px] font-mono text-red-500 font-black uppercase tracking-wider block mb-1">Live competitive delta</span>
                        <h4 className="text-sm font-display font-extrabold text-brand-navy">Authority Deficit Index</h4>
                      </div>
                      
                      {/* Spring animation column chart */}
                      <div className="my-6 h-32 flex items-end justify-between px-6 pb-2 border-b border-slate-100">
                        <div className="w-12 flex flex-col items-center gap-2">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "35%" }}
                            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
                            className="w-full bg-slate-100 border border-slate-200 rounded-t-lg relative"
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-slate-500">DA {daScore}</span>
                          </motion.div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Us</span>
                        </div>

                        <div className="w-12 flex flex-col items-center gap-2">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "92%" }}
                            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.2 }}
                            className="w-full bg-gradient-to-t from-red-400 to-rose-400 border border-red-300 rounded-t-lg relative shadow-md"
                          >
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:12px_12px] animate-[pulse_2s_infinite]" />
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-red-500">DA 82</span>
                          </motion.div>
                          <span className="text-[10px] font-mono text-red-400 font-bold uppercase">L1</span>
                        </div>

                        <div className="w-12 flex flex-col items-center gap-2">
                          <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: "78%" }}
                            transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.3 }}
                            className="w-full bg-gradient-to-t from-red-300 to-rose-300 border border-red-200 rounded-t-lg relative shadow-sm"
                          >
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono font-bold text-slate-500">DA 74</span>
                          </motion.div>
                          <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">L2</span>
                        </div>
                      </div>

                      <div className="text-center pt-2">
                        <motion.span 
                          className="text-2xl font-mono font-extrabold text-red-500 tracking-tight block"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          {competitorGapPercent}%
                        </motion.span>
                        <span className="text-[10px] text-slate-400 font-mono font-medium block">Competitor Domain Index Advantage</span>
                      </div>
                    </div>

                    {/* Right Panel: Intercept list with staggered items and glow effects */}
                    <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 shadow-[0_32px_64px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute -top-12 -right-12 w-28 h-28 bg-emerald-50 rounded-full blur-xl pointer-events-none" />
                      
                      <div>
                        <span className="text-[10px] font-mono text-emerald-500 font-black uppercase tracking-wider block mb-1">Corda Matchmaker</span>
                        <h4 className="text-sm font-display font-extrabold text-brand-navy">High-Value Intercept Nodes</h4>
                      </div>

                      <div className="space-y-2.5 my-4">
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="p-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl flex items-center justify-between text-xs transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="font-mono text-slate-800 font-semibold">techcrunch.com</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-orange-100 border border-orange-200 text-orange-600 font-mono font-bold text-[9px]">
                            DA 92 | INDEX GAP
                          </span>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="p-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl flex items-center justify-between text-xs transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="font-mono text-slate-800 font-semibold">venturebeat.com</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-orange-100 border border-orange-200 text-orange-600 font-mono font-bold text-[9px]">
                            DA 89 | SEMANTIC GAP
                          </span>
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="p-3 bg-slate-50 hover:bg-slate-100/70 border border-slate-100 rounded-xl flex items-center justify-between text-xs transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                            <span className="font-mono text-slate-800 font-semibold">thenextstack.io</span>
                          </div>
                          <span className="px-2 py-0.5 rounded-md bg-orange-100 border border-orange-200 text-orange-600 font-mono font-bold text-[9px]">
                            DA 83 | KEYWORD GAP
                          </span>
                        </motion.div>
                      </div>

                      <div className="text-[10px] text-slate-400 italic font-mono flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Semantic network mapping complete.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 3: GENERATE */}
                {activeStep.id === 'generate' && (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-xl bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 shadow-[0_32px_64px_rgba(15,23,42,0.04)] relative overflow-hidden"
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <div className="relative">
                          <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                          <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                        </div>
                        <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">Corda PR Synth Module</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-100 text-[10px] font-mono text-orange-600 font-black">
                        TONE: ANALYTICAL | HIGH RELEVANCE
                      </span>
                    </div>

                    {/* Simulated live typewriter pitch generator with sweeping light mask */}
                    <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 font-mono text-[11px] sm:text-xs text-slate-600 leading-relaxed border border-slate-100 relative overflow-hidden min-h-[180px]">
                      
                      {/* Sweeping metallic glare across the writer */}
                      <motion.div 
                        className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
                        animate={{ x: ['-100%', '300%'] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                      />

                      <div className="absolute right-4 top-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500 text-white text-[9px] font-bold tracking-wider shadow-sm animate-[pulse_1s_infinite]">
                        <Zap className="w-3 h-3" />
                        <span>SYNTHESIZING...</span>
                      </div>

                      <div className="space-y-3.5 pr-12">
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4 }}
                          className="text-slate-900 font-bold border-b border-slate-200/60 pb-2 flex items-center gap-1"
                        >
                          <span className="text-slate-400">Subject:</span> Data Study: Why modern startups are shifting away from Confluence silos
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                        >
                          Hi Editor,
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          We recently finished a software workflow study tracking developer velocity. The data shows engineering hubs experience an average <span className="text-orange-600 font-bold bg-orange-50 px-1 py-0.5 rounded border border-orange-100">35% productivity drag</span> due to traditional document silos.
                        </motion.p>
                        
                        <motion.p 
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 1.2 }}
                          className="text-slate-400 italic"
                        >
                          [Analyzing techcrunch.com semantic nodes... drafting anchor links...]
                        </motion.p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2.5">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-mono font-bold flex items-center gap-1.5"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Anchor: "collaborative software wiki"</span>
                      </motion.div>
                      
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="px-3 py-1.5 rounded-lg bg-orange-50 border border-orange-100/60 text-orange-600 text-[10px] font-mono font-black"
                      >
                        Index flow: HIGH QUALITY
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 4: LAUNCH */}
                {activeStep.id === 'launch' && (
                  <motion.div
                    key="launch"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-md bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 shadow-[0_32px_64px_rgba(15,23,42,0.04)] relative overflow-hidden"
                  >
                    <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl pointer-events-none" />

                    <div className="flex flex-col items-center text-center space-y-5">
                      
                      {/* Orbital dispatch visualizer */}
                      <div className="relative w-28 h-28 flex items-center justify-center">
                        {/* Rippling circle rings */}
                        <motion.div 
                          className="absolute inset-0 rounded-full border-2 border-orange-500/10"
                          animate={{ scale: [0.8, 1.3], opacity: [1, 0] }}
                          transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                        />
                        <motion.div 
                          className="absolute inset-2 rounded-full border border-orange-500/20"
                          animate={{ scale: [0.8, 1.2], opacity: [0.8, 0] }}
                          transition={{ repeat: Infinity, duration: 1.8, delay: 0.6, ease: "easeOut" }}
                        />

                        {/* Rotating orbital core */}
                        <motion.div 
                          className="absolute inset-4 rounded-full border border-dashed border-slate-300"
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                        />

                        {/* Flying data packets along the ring */}
                        <motion.div 
                          className="absolute w-2 h-2 rounded-full bg-orange-500"
                          animate={{
                            x: [0, 36, 0, -36, 0],
                            y: [-36, 0, 36, 0, -36]
                          }}
                          transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                        />

                        {/* Central Wallet/Settlement Icon with elegant spring lift */}
                        <motion.div 
                          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-white flex items-center justify-center shadow-md relative z-10"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Coins className="w-8 h-8" />
                        </motion.div>
                      </div>

                      <div>
                        <span className="text-[10px] font-mono text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
                          Consensus Settlement Gateway
                        </span>
                        <h4 className="text-base font-display font-extrabold text-brand-navy">
                          Ledger Secured & Dispatched
                        </h4>
                      </div>

                      {/* Simulated printed ledger slip details */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2.5 font-mono text-[11px] text-slate-600"
                      >
                        <div className="flex justify-between">
                          <span className="text-slate-400">Transaction hash:</span>
                          <span className="font-bold text-slate-800">Corda_0x7e2...9a12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Smart Contract:</span>
                          <span className="font-bold text-slate-800">Outbox_Handler_v1</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200/60 pt-2 text-xs">
                          <span className="text-slate-400">Pitches Settled:</span>
                          <span className="font-black text-orange-600">45 Curated Outlets</span>
                        </div>
                      </motion.div>

                      <motion.div 
                        className="w-full flex items-center gap-2.5 p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-xs font-mono font-bold justify-center"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Secure Ledger Settled, Outbox Released</span>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 5: VERIFY */}
                {activeStep.id === 'verify' && (
                  <motion.div
                    key="verify"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-xl bg-white border border-slate-200/80 rounded-[32px] p-6 sm:p-8 shadow-[0_32px_64px_rgba(15,23,42,0.04)]"
                  >
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-brand-navy uppercase tracking-wider">Corda Web Crawler Verification</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-500 font-extrabold bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                        <span>LIVE CRAWLER ACTIVE</span>
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Simulating live parsing console */}
                      <div className="bg-slate-950 rounded-2xl p-4 sm:p-5 font-mono text-[11px] text-slate-300 leading-relaxed border border-slate-800 relative overflow-hidden">
                        
                        {/* Scanning green line that slides up and down */}
                        <motion.div 
                          className="absolute inset-x-0 h-0.5 bg-emerald-500/30 z-10"
                          animate={{ top: ['0%', '100%', '0%'] }}
                          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        />

                        <div className="flex justify-between text-[10px] text-slate-500 mb-2 pb-1.5 border-b border-slate-800">
                          <span>Target: techcrunch.com</span>
                          <span className="text-emerald-400 font-bold">Processed: {crawledPages}/420 nodes</span>
                        </div>
                        
                        <p className="text-slate-500 text-[10px]">{'<!-- Verifying matching semantic anchor nodes -->'}</p>
                        <p className="mt-2 text-slate-400">
                          {`<p>When scaling developer environments, engineering leaders often cite `}
                          <motion.span 
                            className="bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 px-1 py-0.5 rounded mx-1 inline-block"
                            animate={{ scale: [1, 1.05, 1], backgroundColor: ['rgba(16,185,129,0.1)', 'rgba(16,185,129,0.3)', 'rgba(16,185,129,0.1)'] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          >
                            {`<a href="https://my-brand-startup.io" rel="dofollow">collaborative software wiki</a>`}
                          </motion.span>
                          {` platforms as their primary velocity multiplier.</p>`}
                        </p>
                      </div>

                      {/* Link attributes validation panel */}
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100"
                      >
                        <div>
                          <span className="text-[9px] font-mono text-emerald-500 block font-black uppercase tracking-widest">PLACED & AUDITED</span>
                          <span className="text-xs font-mono font-black text-brand-navy flex items-center gap-1.5 mt-0.5">
                            Rel: dofollow | Index status: VALIDATED
                          </span>
                        </div>
                        <a 
                          href="#verify" 
                          onClick={(e) => e.preventDefault()}
                          className="text-xs text-orange-600 font-mono font-extrabold flex items-center gap-1 hover:underline bg-white border border-slate-150 px-3 py-1.5 rounded-xl shadow-sm hover:bg-slate-50/50"
                        >
                          <span>Verify Live Outlet</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </motion.div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 6: GROW */}
                {activeStep.id === 'grow' && (
                  <motion.div
                    key="grow"
                    initial={{ opacity: 0, scale: 0.94, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.94, y: -20 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="w-full max-w-2xl flex flex-col gap-6"
                  >
                    {/* Glowing background rays */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />

                    {/* Top Layer: Dynamic Growing line-graph SVG representation */}
                    <div className="bg-white border border-slate-200/80 rounded-[32px] p-6 shadow-[0_32px_64px_rgba(15,23,42,0.04)] relative overflow-hidden">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <span className="text-[10px] font-mono text-emerald-500 font-black uppercase tracking-wider block">Authority trajectory</span>
                          <h4 className="text-sm font-display font-extrabold text-brand-navy">Search Equity Accumulation</h4>
                        </div>
                        <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-md">
                          Exponential ROI
                        </span>
                      </div>

                      {/* Smooth animated SVG Line chart */}
                      <div className="h-28 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id="chartGlow" x1="0" y1="1" x2="0" y2="0">
                              <stop offset="0%" stopColor="#10B981" stopOpacity="0"/>
                              <stop offset="100%" stopColor="#10B981" stopOpacity="0.12"/>
                            </linearGradient>
                          </defs>

                          {/* Area block under curve */}
                          <motion.path 
                            d="M 0 30 L 0 26 Q 20 25 40 18 T 80 8 T 100 2 L 100 30 Z" 
                            fill="url(#chartGlow)"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                          />

                          {/* Floating glowing curve */}
                          <motion.path 
                            d="M 0 26 Q 20 25 40 18 T 80 8 T 100 2" 
                            fill="none" 
                            stroke="#10B981" 
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 1.8, ease: "easeOut" }}
                          />

                          {/* Glowing tip point */}
                          <motion.circle 
                            cx="100" cy="2" r="2" 
                            fill="#10B981"
                            animate={{ r: [2, 3.5, 2] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                          />
                        </svg>
                        
                        <div className="absolute left-0 bottom-0 text-[9px] font-mono text-slate-400 font-bold">Month 1</div>
                        <div className="absolute right-0 bottom-0 text-[9px] font-mono text-slate-400 font-bold">Month 6</div>
                      </div>
                    </div>

                    {/* Bottom Layer: Staggered metric cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      
                      {/* Metric 1: DA Lift */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white border border-slate-200/80 rounded-[24px] p-5 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        <span className="text-[9px] font-mono text-orange-500 font-black uppercase tracking-wider block">Authority Lift</span>
                        <div className="my-3.5 flex items-baseline gap-1">
                          <span className="text-3.5xl font-display font-black text-brand-navy tracking-tight">{daScore}</span>
                          <span className="text-xs font-mono font-bold text-slate-400">/100</span>
                        </div>
                        <div className="text-[10px] text-emerald-500 font-mono font-bold flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>DA +540% TRAJECTORY</span>
                        </div>
                      </motion.div>

                      {/* Metric 2: Traffic */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-slate-200/80 rounded-[24px] p-5 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        <span className="text-[9px] font-mono text-orange-500 font-black uppercase tracking-wider block">Monthly Traffic</span>
                        <div className="my-3.5">
                          <span className="text-2xl font-mono font-black text-brand-navy">
                            {organicTraffic.toLocaleString()}
                          </span>
                          <span className="text-[10px] text-slate-400 block font-mono font-bold">visits/mo</span>
                        </div>
                        <div className="text-[10px] text-emerald-500 font-mono font-bold">
                          +1,190% organic search
                        </div>
                      </motion.div>

                      {/* Metric 3: ROI */}
                      <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-white border border-slate-200/80 rounded-[24px] p-5 shadow-sm flex flex-col justify-between relative overflow-hidden"
                      >
                        <span className="text-[9px] font-mono text-orange-500 font-black uppercase tracking-wider block">Calculated ROI</span>
                        <div className="my-3.5">
                          <span className="text-3.5xl font-display font-black text-emerald-600">+{roiPercent}%</span>
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono font-bold">
                          vs organic PPC spends
                        </div>
                      </motion.div>

                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Bottom Subtitles & Descriptive Narration Text (Apple/Raycast Style) */}
            <div className="relative z-10 border-t border-slate-100 pt-6 mt-4">
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
                  <Play className="w-4 h-4 animate-pulse" />
                </div>
                <div className="flex-1">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {activeStep.caption}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Player Media Controls Strip */}
          <div className="bg-slate-50 border-t border-slate-200 px-6 py-4 flex flex-wrap gap-4 items-center justify-between relative z-10">
            
            {/* Playback Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white flex items-center justify-center transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500/40 cursor-pointer"
                title={isPlaying ? 'Pause film' : 'Play film'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
              </button>

              <button
                onClick={handleRestart}
                className="w-9 h-9 rounded-full bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                title="Restart walkthrough from beginning"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* Mute Audio Simulation Accent */}
              <button
                onClick={handleToggleMute}
                className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                  isMuted 
                    ? 'bg-white border-slate-200 text-slate-400 hover:text-slate-600' 
                    : 'bg-orange-50 border-orange-200 text-orange-600 font-bold'
                }`}
                title={isMuted ? 'Unmute simulator ambient' : 'Mute simulator ambient'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>

              {audioOscillator && !isMuted && (
                <span className="text-[10px] font-mono text-emerald-500 font-bold animate-ping">
                  Beats Active
                </span>
              )}
            </div>

            {/* Playback Step Selectors bar */}
            <div className="flex flex-wrap items-center gap-1.5 bg-white border border-slate-200 p-1 rounded-2xl shadow-inner">
              {STEPS.map((step, idx) => {
                const isCurrent = idx === currentStepIdx;
                return (
                  <button
                    key={step.id}
                    onClick={() => handleStepSelect(idx)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold uppercase transition-all duration-300 cursor-pointer ${
                      isCurrent 
                        ? 'bg-orange-500 text-white shadow-md' 
                        : 'text-slate-400 hover:text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    {step.label}
                  </button>
                );
              })}
            </div>

            {/* Playback speed multiplier Selector */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Speed:</span>
              <div className="flex gap-1">
                {([1, 1.5, 2] as const).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSpeed(s)}
                    className={`px-2 py-1 rounded text-[10px] font-mono font-bold cursor-pointer ${
                      speed === s 
                        ? 'bg-slate-800 text-white font-extrabold' 
                        : 'bg-slate-200/60 text-slate-500 hover:bg-slate-200'
                    }`}
                  >
                    {s}x
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Player Timeline Progress bar (fills representing global position) */}
          <div className="w-full bg-slate-200 h-1.5 relative overflow-hidden">
            <div 
              style={{ width: `${progress}%` }}
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-orange-500 to-amber-500 transition-all duration-100"
            />
            {/* Step boundary dots on timeline */}
            <div className="absolute inset-x-0 top-0 bottom-0 flex justify-between pointer-events-none px-[16%]">
              <span className="w-1.5 h-full bg-slate-300/60" />
              <span className="w-1.5 h-full bg-slate-300/60" />
              <span className="w-1.5 h-full bg-slate-300/60" />
              <span className="w-1.5 h-full bg-slate-300/60" />
            </div>
          </div>

        </motion.div>

        {/* Dynamic workflow roadmap cards under the video player */}
        <div className="max-w-5xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-6 gap-4">
          {STEPS.map((step, idx) => {
            const isCompleted = idx <= currentStepIdx;
            const isCurrent = idx === currentStepIdx;
            return (
              <motion.div
                key={step.id}
                onClick={() => handleStepSelect(idx)}
                whileHover={{ y: -4 }}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  isCurrent 
                    ? 'bg-white border-orange-500 shadow-[0_10px_25px_rgba(249,115,22,0.08)]' 
                    : isCompleted 
                      ? 'bg-white border-slate-300 text-slate-800' 
                      : 'bg-slate-100/60 border-slate-200 text-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-extrabold text-orange-500">
                    0{idx + 1}
                  </span>
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    isCurrent 
                      ? 'bg-orange-500 animate-ping' 
                      : isCompleted 
                        ? 'bg-orange-500' 
                        : 'bg-slate-300'
                  }`} />
                </div>
                <h4 className="font-display font-extrabold text-xs uppercase tracking-tight">
                  {step.label}
                </h4>
                <p className="text-[10px] text-slate-500 line-clamp-2 mt-1 leading-normal font-sans">
                  {step.caption}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
