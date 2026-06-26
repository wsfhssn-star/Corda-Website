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
            <div className="flex-1 flex items-center justify-center relative my-4 sm:my-6 z-10">
              <AnimatePresence mode="wait">
                
                {/* STAGE 1: ANALYZE */}
                {activeStep.id === 'analyze' && (
                  <motion.div
                    key="analyze"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative"
                  >
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg animate-bounce">
                      <Cpu className="w-4 h-4" />
                    </div>

                    <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-100">
                      <div className="w-10 h-10 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-500">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">Scanning Asset</span>
                        <h4 className="text-sm font-display font-extrabold text-brand-navy">my-brand-startup.io</h4>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Scanning Ring Simulation */}
                      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100 relative overflow-hidden">
                        <div className="absolute top-0 bottom-0 left-0 bg-orange-500/5 animate-[pulse_1.5s_infinite] w-full" />
                        <span className="text-xs font-mono font-bold text-slate-500">Live Domain Authority</span>
                        <span className="text-sm font-mono font-extrabold text-orange-600">{daScore}/100</span>
                      </div>

                      {/* Competitor List */}
                      <div className="space-y-2">
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-wider block">Identified Competitors:</span>
                        
                        <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-red-50/50 border border-red-100">
                          <span className="font-mono text-slate-700">market-leader.com</span>
                          <span className="font-mono font-bold text-red-500">DA 82 (Gap: -70)</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-red-50/50 border border-red-100">
                          <span className="font-mono text-slate-700">heavy-enterprise.co</span>
                          <span className="font-mono font-bold text-red-500">DA 74 (Gap: -62)</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 2: DISCOVER */}
                {activeStep.id === 'discover' && (
                  <motion.div
                    key="discover"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-lg grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {/* Left: Backlink authority gap chart */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-red-500 font-bold uppercase tracking-wider block mb-1">Gap Detected</span>
                        <h4 className="text-xs font-display font-extrabold text-brand-navy">Competitive Deficit</h4>
                      </div>
                      
                      <div className="my-4 h-24 flex items-end justify-between px-4">
                        <div className="w-8 flex flex-col items-center gap-1">
                          <div className="w-full bg-slate-100 rounded-md h-8" />
                          <span className="text-[9px] font-mono text-slate-400 font-bold">Us</span>
                        </div>
                        <div className="w-8 flex flex-col items-center gap-1">
                          <div className="w-full bg-red-400 rounded-md h-24 animate-[pulse_2s_infinite]" />
                          <span className="text-[9px] font-mono text-red-500 font-bold">L1</span>
                        </div>
                        <div className="w-8 flex flex-col items-center gap-1">
                          <div className="w-full bg-red-300 rounded-md h-16" />
                          <span className="text-[9px] font-mono text-slate-400 font-bold">L2</span>
                        </div>
                      </div>

                      <div className="text-center">
                        <span className="text-xl font-mono font-extrabold text-red-500">{competitorGapPercent}%</span>
                        <span className="text-[10px] text-slate-400 block font-mono">Competitor Index Advantage</span>
                      </div>
                    </div>

                    {/* Right: Specific high value targets */}
                    <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-emerald-500 font-bold uppercase tracking-wider block mb-1">Recommendation</span>
                        <h4 className="text-xs font-display font-extrabold text-brand-navy">High-Value Intercepts</h4>
                      </div>

                      <div className="space-y-2 my-3">
                        <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between text-[11px]">
                          <span className="font-mono text-slate-700">techcrunch.com</span>
                          <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-600 font-mono font-bold text-[9px]">DA 92</span>
                        </div>
                        <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between text-[11px]">
                          <span className="font-mono text-slate-700">venturebeat.com</span>
                          <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-600 font-mono font-bold text-[9px]">DA 89</span>
                        </div>
                        <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-between text-[11px]">
                          <span className="font-mono text-slate-700">thenextstack.io</span>
                          <span className="px-2 py-0.5 rounded bg-orange-100 text-orange-600 font-mono font-bold text-[9px]">DA 83</span>
                        </div>
                      </div>

                      <div className="text-xs text-slate-400 italic">
                        Targeting matching semantic nodes.
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 3: GENERATE */}
                {activeStep.id === 'generate' && (
                  <motion.div
                    key="generate"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-xl bg-white border border-slate-200 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-orange-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-brand-navy">PR Outreach Pitch Draft Generator</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-[10px] font-mono text-slate-500 font-bold">
                        TONE: ANALYTICAL
                      </span>
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-4 font-mono text-[11px] text-slate-600 leading-relaxed border border-slate-100 space-y-3 relative">
                      {/* Ghostly morphing cursor simulation */}
                      <div className="absolute right-4 bottom-4 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-orange-500 text-white text-[9px] font-bold tracking-wider">
                        <Zap className="w-3 h-3 animate-bounce" />
                        <span>SYNTHESIZING...</span>
                      </div>

                      <p className="text-slate-900 font-bold border-b border-slate-200/60 pb-2">
                        Subject: Data Study: Why modern startups are shifting away from Confluence silos
                      </p>
                      
                      <p>
                        Hi Editor,
                      </p>
                      <p>
                        We recently finished a software workflow study tracking developer velocity. The data shows engineering hubs experience an average <span className="text-orange-600 font-bold">35% productivity drag</span> due to traditional doc silos.
                      </p>
                      <p>
                        I'd love to write a data-driven guest column about bridging the developer-wiki gap...
                      </p>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-[10px] font-mono font-bold">
                        Anchor: "collaborative software wiki"
                      </div>
                      <div className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-600 text-[10px] font-mono font-bold">
                        Flow Equity: HIGH
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 4: LAUNCH */}
                {activeStep.id === 'launch' && (
                  <motion.div
                    key="launch"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                        <Coins className="w-8 h-8 animate-spin" />
                      </div>

                      <div>
                        <span className="text-[9px] font-mono text-slate-400 font-bold uppercase tracking-widest block mb-1">
                          Consensus Settlement Gateway
                        </span>
                        <h4 className="text-lg font-display font-extrabold text-brand-navy">
                          Processing Campaign Order
                        </h4>
                      </div>

                      {/* Receipt ledger details */}
                      <div className="w-full bg-slate-50 border border-slate-100 rounded-2xl p-4 text-left space-y-2.5 font-mono text-[11px]">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Campaign ID:</span>
                          <span className="font-bold text-slate-800">C-409A_0x981</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Pitches Enqueued:</span>
                          <span className="font-bold text-slate-800">45 Active Outlets</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-200/60 pt-2">
                          <span className="text-slate-400">Settlement Ledger:</span>
                          <span className="font-bold text-orange-600">Secure Wallet Balance</span>
                        </div>
                      </div>

                      <div className="w-full flex items-center gap-2 p-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-xs font-mono font-bold justify-center">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Ledger Confirmed, Queuing Outbox</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 5: VERIFY */}
                {activeStep.id === 'verify' && (
                  <motion.div
                    key="verify"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-lg bg-white border border-slate-200 rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 animate-pulse" />
                        <span className="text-xs font-mono font-bold text-brand-navy">Corda Web Crawler Verification</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-500 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                        SCANNING LIVE HTML
                      </span>
                    </div>

                    <div className="space-y-4">
                      {/* Simulating active HTML scan */}
                      <div className="bg-slate-950 rounded-2xl p-4 font-mono text-[11px] text-slate-300 leading-relaxed border border-slate-800 relative">
                        <div className="absolute top-2 right-2 text-slate-500 text-[9px]">
                          Crawled: {crawledPages} pages
                        </div>
                        <span className="text-slate-500 block">{'<!-- Scanned on TechCrunch Article ID #91823 -->'}</span>
                        <p>
                          {`<p>When scaling developer environments, engineering leaders often cite `}
                          <span className="bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 px-1 rounded">
                            {`<a href="https://my-brand-startup.io" rel="dofollow">collaborative software wiki</a>`}
                          </span>
                          {` platforms as their primary velocity multiplier.</p>`}
                        </p>
                      </div>

                      {/* Target status feedback */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <div>
                          <span className="text-[9px] font-mono text-slate-400 block font-bold">CONFIRMED INJECT</span>
                          <span className="text-xs font-mono font-extrabold text-brand-navy">Rel: dofollow | Index Status: Validated</span>
                        </div>
                        <a 
                          href="#verify" 
                          onClick={(e) => e.preventDefault()}
                          className="text-[10px] text-orange-600 font-mono font-bold flex items-center gap-1 hover:underline"
                        >
                          <span>View on TechCrunch</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STAGE 6: GROW */}
                {activeStep.id === 'grow' && (
                  <motion.div
                    key="grow"
                    initial={{ opacity: 0, scale: 0.95, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full max-w-xl grid grid-cols-1 md:grid-cols-3 gap-4"
                  >
                    {/* DA growth */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[9px] font-mono text-orange-500 font-bold uppercase tracking-wider block">Authority Lift</span>
                      <div className="my-3">
                        <span className="text-3xl font-display font-extrabold text-brand-navy">{daScore}</span>
                        <span className="text-xs font-mono font-bold text-slate-400">/100</span>
                      </div>
                      <div className="text-[10px] text-emerald-500 font-mono font-bold flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>DA +540% EXPONENTIAL</span>
                      </div>
                    </div>

                    {/* Traffic growth */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[9px] font-mono text-orange-500 font-bold uppercase tracking-wider block">Monthly Traffic</span>
                      <div className="my-3">
                        <span className="text-xl font-mono font-bold text-brand-navy">
                          {organicTraffic.toLocaleString()}
                        </span>
                        <span className="text-xs text-slate-400 block font-mono">visits/mo</span>
                      </div>
                      <div className="text-[10px] text-emerald-500 font-mono font-bold">
                        +1,190% organic search
                      </div>
                    </div>

                    {/* ROI growth */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-[0_15px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between relative overflow-hidden">
                      <span className="text-[9px] font-mono text-orange-500 font-bold uppercase tracking-wider block">Calculated ROI</span>
                      <div className="my-3">
                        <span className="text-3xl font-display font-extrabold text-emerald-600">+{roiPercent}%</span>
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono">
                        vs legacy PPC spending
                      </div>
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
