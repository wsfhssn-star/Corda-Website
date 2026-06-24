import { motion } from 'motion/react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';

export default function FinalCTA() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-100/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Large, spacious CTA layout block */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75 }}
          className="bg-slate-50 border border-slate-100 rounded-[40px] p-12 sm:p-20 text-center max-w-5xl mx-auto relative overflow-hidden shadow-2xl shadow-slate-100/50"
        >
          
          {/* Subtle logo vector background */}
          <div className="absolute -right-10 -bottom-10 w-80 h-80 text-orange-500/5 select-none pointer-events-none">
            <Compass className="w-full h-full stroke-[1.5]" />
          </div>

          <div className="max-w-3xl mx-auto space-y-8 relative z-10">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-brand-orange text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-3.5 h-3.5" />
              Get Started with Corda
            </div>

            <h2 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-dark leading-[1.1]">
              Ready to engineer your industry authority?
            </h2>

            <p className="text-lg text-brand-muted max-w-xl mx-auto font-sans leading-relaxed">
              Analyze competitors, discover placement opportunities, generate AI PR strategies, and launch secure campaigns from a single dashboard.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button 
                onClick={() => handleScrollTo('pricing-section')}
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white font-semibold rounded-xl shadow-lg shadow-brand-orange/20 transition-all duration-300 flex items-center justify-center gap-2 group text-[15px]"
                id="final-cta-primary-btn"
              >
                Start Building Authority
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button 
                onClick={() => handleScrollTo('pricing-section')}
                className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-brand-dark font-semibold rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2 text-[15px]"
                id="final-cta-secondary-btn"
              >
                Book A Demo
              </button>
            </div>

            <div className="pt-8 border-t border-slate-200/50 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-slate-400 font-mono font-semibold uppercase">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-500" /> Escrow Protected Payments</span>
              <span className="hidden sm:inline">•</span>
              <span>Fully Verified Publisher Network</span>
              <span className="hidden sm:inline">•</span>
              <span>100% Real-Time Telemetry</span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
