import { motion } from 'motion/react';
import { Compass, Sparkles, ArrowRight, ShieldCheck, Play, Users, BarChart3, TrendingUp } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-32 bg-white overflow-hidden min-h-screen flex items-center">
      
      {/* Stripe-style ambient visual grid structure */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      {/* Absolute colored light blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-orange-100/40 via-orange-50/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tr from-orange-50/30 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Hero Headline and Actions (Col Span 7) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Version Flag */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-brand-navy text-[12px] font-semibold tracking-wide uppercase mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-brand-orange" />
              <span>Corda Engine v3.4 Live</span>
              <span className="w-px h-3.5 bg-slate-200" />
              <span className="text-brand-orange font-bold font-mono">2026 Release</span>
            </motion.div>

            {/* Massive Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl sm:text-7xl font-extrabold tracking-tight text-brand-dark leading-[1.05] sm:leading-[1.02]"
            >
              Authority Isn't Built.<br />
              <span className="text-brand-orange bg-gradient-to-r from-brand-orange via-orange-600 to-amber-600 bg-clip-text text-transparent">
                It's Engineered.
              </span>
            </motion.h1>

            {/* Premium Subhead */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-brand-muted mt-8 max-w-2xl font-sans leading-relaxed"
            >
              Analyze competitors, discover publisher opportunities, generate AI-powered PR strategies, and launch campaigns from a single platform. The Operating System For Authority Growth.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mt-10 w-full sm:w-auto"
            >
              <button 
                onClick={() => handleScrollTo('pricing-section')}
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 transition-all duration-300 flex items-center justify-center gap-2 group text-[15px]"
                id="hero-cta-primary"
              >
                Start Building Authority
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => handleScrollTo('product-showcase')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-brand-dark font-semibold rounded-xl border border-slate-200/80 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 text-[15px]"
                id="hero-cta-secondary"
              >
                <Play className="w-4.5 h-4.5 text-brand-orange fill-brand-orange stroke-[3]" />
                Explore Platform
              </button>
            </motion.div>

            {/* Enterprise Logos Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16 sm:mt-20 border-t border-slate-100 pt-8 w-full"
            >
              <p className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-4">Empowering the search footprint of innovators</p>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-slate-400 opacity-80 font-display font-bold text-lg">
                <span className="hover:text-brand-dark transition-colors cursor-default">FintechOS</span>
                <span className="hover:text-brand-dark transition-colors cursor-default">SaaSflow</span>
                <span className="hover:text-brand-dark transition-colors cursor-default">ScaleAI</span>
                <span className="hover:text-brand-dark transition-colors cursor-default">PrismSec</span>
              </div>
            </motion.div>

          </div>

          {/* Layered Visual Composition / Interactive Floating Cards (Col Span 5) */}
          <div className="lg:col-span-5 relative w-full h-full min-h-[400px] flex items-center justify-center">
            
            {/* Visual core: Floating bento card layout mimicking an active server state */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="w-full bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-8 relative shadow-2xl shadow-slate-200/50"
            >
              
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-brand-orange animate-ping" />
                  <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Corda Engine Live Tracker</span>
                </div>
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                  +12.4 DA Projected
                </span>
              </div>

              {/* Central Authority Score metric */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm mb-5 relative overflow-hidden group hover:border-brand-orange/20 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Your Authority Score</span>
                    <div className="text-4xl sm:text-5xl font-display font-extrabold text-brand-dark mt-1">DA 66</div>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-xl text-brand-orange">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                </div>
                <div className="h-1 w-full bg-slate-100 rounded-full mt-4 overflow-hidden">
                  <div className="bg-brand-orange h-full rounded-full w-[66%]" />
                </div>
                <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 uppercase font-medium mt-2">
                  <span>Starting: DA 41</span>
                  <span>Target: DA 80</span>
                </div>
              </div>

              {/* Sub bento block: Competitor Gap Analysis */}
              <div className="grid grid-cols-2 gap-4">
                
                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Competitor Gap</span>
                  <div className="text-xl font-bold text-rose-500 font-mono mt-1">-16 points</div>
                  <p className="text-[9px] text-slate-400 mt-1 leading-snug">competitor-alpha.com is leading search space</p>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:border-brand-orange/20 transition-all duration-300 cursor-pointer" onClick={() => handleScrollTo('product-showcase')}>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Secured Nodes</span>
                  <div className="text-xl font-bold text-emerald-500 font-mono mt-1">12 verified</div>
                  <p className="text-[9px] text-brand-orange font-bold mt-1 flex items-center gap-0.5">
                    Launch new push <ArrowRight className="w-2.5 h-2.5" />
                  </p>
                </div>

              </div>

              {/* Embedded floating AI insight box */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-[-24px] left-[-20px] bg-slate-900 border border-slate-800 text-white p-4 rounded-2xl shadow-2xl flex items-start gap-3 max-w-xs hidden sm:flex"
              >
                <div className="p-1.5 bg-orange-500/20 rounded-lg text-brand-orange shrink-0">
                  <Sparkles className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold font-mono text-brand-orange uppercase tracking-wider">Corda AI Action Hook</h4>
                  <p className="text-[11px] text-slate-300 mt-1 leading-normal font-sans">
                    "Sustainable Enterprise AI Scaling" strategy drafted. Secured <strong>2 premium placements</strong>.
                  </p>
                </div>
              </motion.div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
