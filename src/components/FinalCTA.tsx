import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Compass, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Globe, 
  TrendingUp, 
  Lock, 
  Coins, 
  Flame,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function FinalCTA() {
  // Tabs for the interactive widget
  const [activeWidgetTab, setActiveWidgetTab] = useState<'scan' | 'roi'>('scan');
  
  // Tab 1: Scanner state
  const [scanUrl, setScanUrl] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [scanProgress, setScanProgress] = useState(0);
  const [detectedGap, setDetectedGap] = useState(0);
  const [detectedPlacements, setDetectedPlacements] = useState(0);

  // Tab 2: ROI Estimator state
  const [currentDA, setCurrentDA] = useState(25);
  const [selectedIndustry, setSelectedIndustry] = useState<'saas' | 'fintech' | 'ai' | 'ecommerce'>('saas');

  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle mock URL scanning
  const startScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!scanUrl) return;
    
    setScanState('scanning');
    setScanProgress(0);
    
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    progressIntervalRef.current = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
          setScanState('complete');
          // Deterministic values based on length of domain
          const lengthFactor = (scanUrl.length * 7) % 35;
          setDetectedGap(45 + lengthFactor);
          setDetectedPlacements(Math.round(18 + (scanUrl.length % 5) * 4));
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, []);

  // Calculate dynamic ROI estimates based on slider and industry
  const getROIEstimates = () => {
    const industryMultipliers = {
      saas: { traffic: 3.2, placements: 24, label: 'SaaS / DevTools' },
      fintech: { traffic: 2.8, placements: 18, label: 'FinTech / Web3' },
      ai: { traffic: 4.5, placements: 35, label: 'Artificial Intelligence' },
      ecommerce: { traffic: 2.5, placements: 22, label: 'E-commerce & Brands' },
    };

    const multiplier = industryMultipliers[selectedIndustry];
    const difficultyFactor = (100 - currentDA) / 100;
    
    const potentialDALift = Math.max(5, Math.round(35 * difficultyFactor));
    const targetPlacements = Math.max(6, Math.round(multiplier.placements * difficultyFactor * 1.4));
    const estimatedTrafficBoost = (1 + (difficultyFactor * multiplier.traffic)).toFixed(1);

    return {
      potentialDALift,
      targetPlacements,
      estimatedTrafficBoost,
      industryLabel: multiplier.label
    };
  };

  const roi = getROIEstimates();

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" id="final-cta-section">
      
      {/* Background ambient mesh glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-orange-500/5 to-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Large dual-column bento split card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-slate-950 border border-slate-800 rounded-[40px] p-8 sm:p-14 lg:p-18 max-w-6xl mx-auto relative overflow-hidden shadow-2xl"
        >
          {/* Subtle geometric background vectors */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 text-orange-500/[0.02] select-none pointer-events-none">
            <Compass className="w-full h-full stroke-[1]" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
            
            {/* COLUMN 1: EDITORIAL PERSUASION & CTA (Left Side) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold tracking-wider uppercase">
                <Compass className="w-3.5 h-3.5 text-orange-400" />
                Corda Engine Authority Dispatch
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
                Ready to engineer your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500">industry authority?</span>
              </h2>

              <p className="text-base sm:text-lg text-slate-400 max-w-xl font-sans leading-relaxed">
                Connect your brand to the decentralized Corda ledger, discover hidden competitor placements, and launch high-impact authority campaigns with full settlement protection.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/20 transition-all duration-300 flex items-center justify-center gap-2 group text-sm tracking-wide uppercase"
                  id="final-cta-primary-btn"
                >
                  Start Building Authority
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
                </button>

                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl border border-slate-800 hover:border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-wide"
                  id="final-cta-secondary-btn"
                >
                  Book A Demo
                </button>
              </div>

              {/* Verified badges */}
              <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] text-slate-500 font-mono font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" /> Escrow Protected
                </span>
                <span>•</span>
                <span>Verified Outlets Only</span>
                <span>•</span>
                <span>Real-Time Audit Trails</span>
              </div>
            </div>

            {/* COLUMN 2: HIGHLY INTERACTIVE WIDGET (Right Side) */}
            <div className="lg:col-span-6">
              <div className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-inner relative overflow-hidden backdrop-blur-sm">
                
                {/* Tabs for interactive modes */}
                <div className="flex border-b border-slate-800/80 pb-4 mb-6">
                  <button
                    onClick={() => setActiveWidgetTab('scan')}
                    className={`flex-1 pb-3 text-center text-xs font-mono font-black uppercase tracking-wider border-b-2 transition-all ${
                      activeWidgetTab === 'scan'
                        ? 'border-orange-500 text-white'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Globe className="w-3.5 h-3.5" />
                      1. Brand Scanner
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveWidgetTab('roi')}
                    className={`flex-1 pb-3 text-center text-xs font-mono font-black uppercase tracking-wider border-b-2 transition-all ${
                      activeWidgetTab === 'roi'
                        ? 'border-orange-500 text-white'
                        : 'border-transparent text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Sliders className="w-3.5 h-3.5" />
                      2. ROI Estimator
                    </span>
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  
                  {/* TAB 1: WEBSITE SCANNER */}
                  {activeWidgetTab === 'scan' && (
                    <motion.div
                      key="scan-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div>
                        <h4 className="text-sm font-display font-black text-white flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-orange-400" />
                          Authority Deficit Analysis
                        </h4>
                        <p className="text-xs text-slate-400 mt-1">
                          Test your URL to calculate your competitor's link index gap and active placement deficits.
                        </p>
                      </div>

                      <form onSubmit={startScan} className="space-y-3">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <div className="relative flex-1">
                            <span className="absolute inset-y-0 left-3.5 flex items-center text-slate-500 text-xs font-mono">
                              https://
                            </span>
                            <input
                              type="text"
                              value={scanUrl}
                              onChange={(e) => setScanUrl(e.target.value)}
                              placeholder="mybrand.com"
                              disabled={scanState === 'scanning'}
                              className="w-full bg-slate-950 border border-slate-800 focus:border-orange-500 rounded-xl py-3 pl-18 pr-4 text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all"
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={!scanUrl || scanState === 'scanning'}
                            className="bg-orange-500 hover:bg-orange-600 disabled:bg-slate-800 disabled:text-slate-600 text-white text-xs font-mono font-bold uppercase tracking-wider py-3 px-5 rounded-xl transition-all flex items-center justify-center gap-1.5 shrink-0"
                          >
                            {scanState === 'scanning' ? 'Running...' : 'Run Scan'}
                          </button>
                        </div>
                      </form>

                      {/* Scanning animation & results */}
                      <div className="min-h-[140px] bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-center relative overflow-hidden">
                        
                        {scanState === 'idle' && (
                          <div className="text-center py-4 space-y-2">
                            <AlertCircle className="w-8 h-8 text-slate-600 mx-auto" />
                            <p className="text-xs font-mono text-slate-500">Enter your domain above to execute telemetry mapping</p>
                          </div>
                        )}

                        {scanState === 'scanning' && (
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
                                Analyzing competitor nodes...
                              </span>
                              <span>{scanProgress}%</span>
                            </div>
                            {/* Scanning progress bar */}
                            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                              <motion.div 
                                className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${scanProgress}%` }}
                                transition={{ ease: "easeInOut" }}
                              />
                            </div>
                            <div className="text-[10px] font-mono text-slate-600">
                              Searching: Google News API, G2 Semantic indexes, LinkedIn authority graphs...
                            </div>
                          </div>
                        )}

                        {scanState === 'complete' && (
                          <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-4"
                          >
                            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                              <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1">
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                Analysis Complete
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">{scanUrl}</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                                <span className="text-[9px] font-mono text-slate-500 uppercase font-black block">Authority Deficit</span>
                                <span className="text-2xl font-mono font-extrabold text-red-500">-{detectedGap}%</span>
                              </div>
                              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3">
                                <span className="text-[9px] font-mono text-slate-500 uppercase font-black block">High Value Targets</span>
                                <span className="text-2xl font-mono font-extrabold text-orange-400">+{detectedPlacements}</span>
                              </div>
                            </div>

                            <button 
                              onClick={() => handleScrollTo('pricing-section')}
                              className="w-full py-2 bg-orange-500/10 hover:bg-orange-500/20 text-orange-400 text-xs font-mono font-bold rounded-xl border border-orange-500/20 transition-all flex items-center justify-center gap-1.5"
                            >
                              Unlock placement blueprint <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                            </button>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* TAB 2: ROI ESTIMATOR */}
                  {activeWidgetTab === 'roi' && (
                    <motion.div
                      key="roi-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-5"
                    >
                      <div className="space-y-1">
                        <h4 className="text-sm font-display font-black text-white flex items-center gap-1.5">
                          <Sliders className="w-4 h-4 text-orange-400" />
                          Corda Authority Estimator
                        </h4>
                        <p className="text-xs text-slate-400">
                          Estimate domain authority growth and prospective organic search traffic increase.
                        </p>
                      </div>

                      {/* Range Slider for current Domain Authority */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-mono text-slate-400">
                          <span>Your Current Domain Authority:</span>
                          <span className="font-extrabold text-orange-400">DA {currentDA}</span>
                        </div>
                        <input
                          type="range"
                          min="10"
                          max="80"
                          value={currentDA}
                          onChange={(e) => setCurrentDA(parseInt(e.target.value))}
                          className="w-full accent-orange-500 cursor-pointer bg-slate-850 h-2 rounded-lg"
                        />
                        <div className="flex justify-between text-[10px] font-mono text-slate-600">
                          <span>10 (Startup)</span>
                          <span>45 (Growth)</span>
                          <span>80 (Enterprise)</span>
                        </div>
                      </div>

                      {/* Industry Selector */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block">Target Industry:</span>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {(['saas', 'fintech', 'ai', 'ecommerce'] as const).map((industry) => {
                            const labels = { saas: 'SaaS', fintech: 'FinTech', ai: 'AI Tech', ecommerce: 'Retail' };
                            return (
                              <button
                                key={industry}
                                type="button"
                                onClick={() => setSelectedIndustry(industry)}
                                className={`py-2 px-3 text-[10px] font-mono font-bold rounded-xl border text-center transition-all ${
                                  selectedIndustry === industry
                                    ? 'bg-orange-500/10 border-orange-500 text-orange-400'
                                    : 'bg-slate-950 border-slate-800 text-slate-500 hover:text-slate-300'
                                }`}
                              >
                                {labels[industry]}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Live Computed Stats */}
                      <div className="grid grid-cols-3 gap-3 bg-slate-950 border border-slate-800/80 rounded-2xl p-4">
                        <div className="text-center">
                          <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none mb-1">Target DA Lift</span>
                          <span className="text-xl font-mono font-black text-emerald-400">+{roi.potentialDALift} pts</span>
                        </div>
                        <div className="text-center border-x border-slate-800/80">
                          <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none mb-1">Corda Nodes</span>
                          <span className="text-xl font-mono font-black text-orange-400">{roi.targetPlacements}</span>
                        </div>
                        <div className="text-center">
                          <span className="text-[9px] font-mono text-slate-500 uppercase block leading-none mb-1">Est. Traffic</span>
                          <span className="text-xl font-mono font-black text-blue-400">{roi.estimatedTrafficBoost}x</span>
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-slate-500 flex items-center justify-center gap-1.5">
                        <Lock className="w-3 h-3 text-slate-600" />
                        <span>Estimates derived from actual ledger indexing performance in {roi.industryLabel}.</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
