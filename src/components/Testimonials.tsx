import { motion } from 'motion/react';
import { Star, ShieldCheck, Quote, BarChart3, TrendingUp, Sparkles } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  metricDesc: string;
}

export default function Testimonials() {
  const list: Testimonial[] = [
    {
      quote: "Before Corda, authority building was a black box. We spent six figures on agencies with zero visibility. Within 45 days of migrating to Corda, we engineered backlinks on Tier-1 publications and scaled our Domain Authority from 42 to 68.",
      author: "Sarah Jenkins",
      role: "VP of Growth",
      company: "PrismSec SaaS",
      metric: "+26 DA Points",
      metricDesc: "In less than 2 months"
    },
    {
      quote: "The Opportunity Discovery engine is magic. It scanned our search landscape and identified precisely which publisher nodes our top competitor was utilizing. We intercepted those placements at a fraction of the cost.",
      author: "Marcus Chen",
      role: "Head of SEO & PR",
      company: "ScaleAI Platform",
      metric: "62% Cost Saved",
      metricDesc: "Compared to typical agencies"
    },
    {
      quote: "Generating engineered PR hooks with Corda’s LLM strategies was a game changer for our Q2 campaign. The journalists actually responded, and we secured a key featured editorial piece on TechSpectrum organically.",
      author: "Elena Rostova",
      role: "Director of Communications",
      company: "FintechOS",
      metric: "14x Reach Lift",
      metricDesc: "In organic search space"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden border-t border-slate-100">
      
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-5">
            <Quote className="w-3.5 h-3.5 text-brand-orange" />
            Proven Outcomes
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark leading-[1.12]">
            What engineering authority feels like
          </h2>
          <p className="text-lg text-brand-muted mt-5 font-sans leading-relaxed">
            See how high-growth enterprises are replacing legacy SEO agencies with the Corda Operating System.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {list.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-slate-50/50 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between hover:bg-white hover:border-orange-200/50 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 relative group"
            >
              
              {/* Card top elements */}
              <div>
                <div className="flex items-center gap-1 text-brand-orange mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current stroke-none" />
                  ))}
                </div>
                
                <p className="text-brand-dark font-sans text-[15px] leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Card bottom elements: Author profile & Performance metric */}
              <div className="border-t border-slate-100/80 pt-6 mt-auto">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-dark">{item.author}</h4>
                    <p className="text-xs text-brand-muted mt-0.5">{item.role}, <span className="font-semibold text-brand-dark">{item.company}</span></p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[11px] font-mono text-brand-orange font-bold uppercase tracking-wider block">{item.metric}</span>
                    <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{item.metricDesc}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Global summary stats bar at the bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 sm:mt-24 bg-brand-dark text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left items-center">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-orange uppercase font-bold tracking-widest block">Aggregate Platform Performance</span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">Corda Platform Benchmarks</h3>
              <p className="text-xs text-slate-400 font-sans max-w-xs mt-2">Verified metrics audited across active enterprise scale client profiles.</p>
            </div>

            <div className="space-y-1 md:border-l md:border-slate-800 md:pl-10">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-white font-mono block">DA 68</span>
              <span className="text-xs font-semibold text-slate-400 block mt-1">Average client authority reached in 90 days</span>
            </div>

            <div className="space-y-1 md:border-l md:border-slate-800 md:pl-10">
              <span className="text-3xl sm:text-4xl font-display font-extrabold text-brand-orange font-mono block">&lt; 4 days</span>
              <span className="text-xs font-semibold text-slate-400 block mt-1">Average placement delivery Turnaround Time</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
