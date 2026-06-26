import { useState } from 'react';
import { motion } from 'motion/react';
import { Check, ShieldCheck, HelpCircle, ArrowRight, Sparkles, TrendingUp, DollarSign, ChevronDown } from 'lucide-react';

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'annual'>('annual');
  const [budgetSlider, setBudgetSlider] = useState<number>(2000); // Default $2000/mo budget calculator
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Corda's direct placement model differ from traditional agencies?",
      answer: "Legacy agencies operate as expensive middlemen, marking up placement costs by 200–500% with zero transparency. Corda is a decoupled direct platform that connects you directly to verified publisher networks. You get real-time price matching, direct editorial access, and automated status telemetry with zero agency markup."
    },
    {
      question: "What is the secure escrow protection layer?",
      answer: "When you fund a campaign, your budget is held securely in our protected ledger. Funds are only authorized and released to publishers automatically after our platform crawlers verify that your content has been successfully published with the exact parameters and anchor text you approved."
    },
    {
      question: "Can I adjust my monthly placement budget or pause at any time?",
      answer: "Absolutely. Corda has no lock-in contracts or agency retainers. You can scale your direct placement budget up or down dynamically using our campaign configurer, change plans, or pause your execution at any moment with a single click."
    },
    {
      question: "How are the publisher metrics (DA, Traffic, and TAT) verified?",
      answer: "We pull live domain authority metrics and traffic indices directly from leading enterprise search intelligence APIs daily. Additionally, our system calculates actual average turnaround times (TAT) based on active publisher response metrics to guarantee completely accurate marketplace data."
    },
    {
      question: "How does the AI PR Strategy Insights generator work?",
      answer: "Corda's proprietary LLM engine analyzes your brand domain, active competitor authority gaps, and publisher guidelines. It then instantly drafts high-converting editorial pitches, custom hook angles, and optimal anchor text selections to maximize the domain authority transfer."
    }
  ];

  const discountFactor = billingPeriod === 'annual' ? 0.8 : 1.0;

  // Calculators based on budget selection
  const calculatePlacementsCount = (budget: number) => {
    return Math.max(1, Math.floor(budget / 350));
  };

  const calculateProjectedUplift = (budget: number) => {
    const base = budget / 400;
    return parseFloat((base * 1.2).toFixed(1));
  };

  const getSuggestedChannels = (budget: number) => {
    if (budget < 1000) return 'SaaSJournal, DevOps Standard';
    if (budget < 3000) return 'VenturePulse, SaaSJournal, CloudNative Insight';
    return 'TechSpectrum, Digital Capital, VenturePulse';
  };

  const plans = [
    {
      name: 'Startup Authority',
      price: 290,
      desc: 'Escalate search footprint for early stage innovators.',
      features: [
        'Continuous tracking of 2 competitor domains',
        'Corda Opportunity Discovery search scanner',
        'Standard Publisher Marketplace access',
        '$200 direct monthly placement credit included',
        '2 days delivery turnaround time (TAT)',
        'Standard security escrow protection'
      ],
      cta: 'Secure Startup Plan',
      popular: false
    },
    {
      name: 'Growth Scale',
      price: 890,
      desc: 'Dominant category share engineering for expanding brands.',
      features: [
        'Continuous tracking of 6 competitor domains',
        'Engineered AI PR Strategy generator (Unlimited)',
        'Full Publisher Marketplace catalog & ratings',
        '$700 direct monthly placement credit included',
        'Priority publisher queue & 1-day turnaround',
        'Advanced Network Topology Map tracking',
        'Dedicated Corda campaign engineer'
      ],
      cta: 'Launch Growth Strategy',
      popular: true
    },
    {
      name: 'Enterprise Authority',
      price: 2490,
      desc: 'Omnipresent authority structures for market leaders.',
      features: [
        'Continuous tracking of unlimited competitor domains',
        'Custom interactive Network Topology Map integrations',
        'Pre-negotiated Tier-1 publication exclusive access',
        '$2,000 direct monthly placement credit included',
        'Instant-on editorial approval pipeline',
        'Bi-weekly custom PR strategy analysis briefs',
        'Platform-level multi-user workspace access'
      ],
      cta: 'Contact Authority Board',
      popular: false
    }
  ];

  return (
    <section id="pricing-section" className="py-24 sm:py-32 bg-slate-50/30 border-t border-slate-100 relative overflow-hidden">
      
      {/* Decorative gradient shadows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-orange-100/10 via-orange-50/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/80 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-5">
            <DollarSign className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark leading-[1.12]">
            Engineered packages. Transparent costs.
          </h2>
          <p className="text-lg text-brand-muted mt-5 font-sans leading-relaxed">
            Choose a plan to match your domain escalation metrics. Save 20% when billing annually.
          </p>

          {/* Billing Switcher Toggle */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className={`text-sm font-semibold transition-colors duration-200 ${billingPeriod === 'monthly' ? 'text-brand-dark' : 'text-slate-400'}`}>Monthly</span>
            <button 
              onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'annual' : 'monthly')}
              className="relative w-14 h-8 bg-brand-dark rounded-full p-1 transition-colors focus:outline-none"
            >
              <motion.div 
                layout 
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className={`w-6 h-6 bg-brand-orange rounded-full ${billingPeriod === 'annual' ? 'translate-x-6' : 'translate-x-0'}`}
              />
            </button>
            <span className={`text-sm font-semibold transition-colors duration-200 ${billingPeriod === 'annual' ? 'text-brand-orange' : 'text-slate-400'}`}>
              Annually <span className="bg-orange-100 text-brand-orange text-[10px] font-bold px-2 py-0.5 rounded-full ml-1">SAVE 20%</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan, index) => {
            const calculatedPrice = Math.floor(plan.price * discountFactor);
            return (
              <motion.div 
                key={plan.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className={`bg-white border rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular 
                    ? 'border-brand-orange shadow-2xl shadow-orange-500/5' 
                    : 'border-slate-100 shadow-xl shadow-slate-100/50 hover:border-slate-300'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                    MOST POPULAR ENGINE
                  </span>
                )}

                <div>
                  <h3 className="font-display font-bold text-xl text-brand-dark mb-2">{plan.name}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-6">{plan.desc}</p>
                  
                  <div className="flex items-baseline gap-1.5 mb-8">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-brand-dark font-mono">${calculatedPrice}</span>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">/ month</span>
                  </div>

                  <div className="h-px bg-slate-100 mb-8" />

                  {/* Feature Checklist */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  className={`w-full py-4 text-center font-semibold rounded-xl text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-1.5 ${
                    plan.popular 
                      ? 'bg-brand-orange hover:bg-orange-600 text-white shadow-lg shadow-brand-orange/20' 
                      : 'bg-slate-900 hover:bg-brand-orange text-white'
                  }`}
                  id={`pricing-${plan.name.toLowerCase().replace(' ', '-')}-btn`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Dynamic Authority Escalation Projection Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="bg-white rounded-3xl border border-slate-100 p-8 sm:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Slider Parameters (Col Span 7) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span className="text-xs font-bold text-brand-orange uppercase font-mono tracking-wider">Corda Authority Forecaster</span>
              </div>
              
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-dark">Calculate your authority climb velocity</h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                Drag the budget slider below to simulate monthly campaign linkages. Visualize estimated premium placements acquired, domain ratings progression, and suggested placement channels.
              </p>

              {/* Slider Input */}
              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Monthly Placement Budget</span>
                  <span className="text-3xl font-display font-extrabold text-brand-orange font-mono">${budgetSlider}</span>
                </div>
                
                <input
                  type="range"
                  min="500"
                  max="10000"
                  step="500"
                  value={budgetSlider}
                  onChange={(e) => setBudgetSlider(parseInt(e.target.value))}
                  className="w-full accent-brand-orange h-2 bg-slate-100 rounded-lg cursor-ew-resize focus:outline-none"
                  id="budget-escalation-slider"
                />

                <div className="flex justify-between text-[10px] font-mono font-semibold text-slate-400">
                  <span>$500/MO</span>
                  <span>$5,000/MO</span>
                  <span>$10,000/MO</span>
                </div>
              </div>
            </div>

            {/* Simulated Outputs Dashboard (Col Span 5) */}
            <div className="lg:col-span-5 bg-brand-dark text-white rounded-2xl p-6 sm:p-8 space-y-6 border border-slate-800">
              <div className="flex justify-between items-center pb-4 border-b border-slate-800">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Simulated Projection</span>
                <span className="text-[9px] font-mono text-emerald-400 font-bold uppercase tracking-widest">90-Day Escalate Timeline</span>
              </div>

              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Projected DA Uplift</span>
                  <span className="text-xl font-bold font-mono text-brand-orange">+{calculateProjectedUplift(budgetSlider)} DA</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">Premium placements acquired</span>
                  <span className="text-sm font-semibold font-mono text-slate-200">{calculatePlacementsCount(budgetSlider)} Tier-1 Links</span>
                </div>

                <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Target Publisher Network</span>
                  <span className="text-xs text-brand-orange font-bold font-mono">{getSuggestedChannels(budgetSlider)}</span>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-800">
                <button 
                  onClick={() => {
                    const el = document.getElementById('product-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full bg-slate-900 hover:bg-brand-orange text-white text-xs font-semibold py-3 rounded-xl transition-colors duration-300 flex items-center justify-center gap-1.5"
                >
                  Configure Campaigns
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Elegant Animated FAQ Accordion Section */}
        <div className="mt-24 sm:mt-32 border-t border-slate-100 pt-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-5"
            >
              <HelpCircle className="w-3.5 h-3.5 text-brand-orange" />
              Common Queries
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-sm text-brand-muted mt-4 font-sans max-w-2xl mx-auto leading-relaxed"
            >
              Everything you need to know about Corda's direct placement ecosystem, escrow ledger protection, and scaling mechanics.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`border rounded-2xl bg-white transition-all duration-300 ${
                    isOpen 
                      ? 'border-brand-orange/40 shadow-xl shadow-orange-500/5 ring-1 ring-brand-orange/10' 
                      : 'border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/50'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between text-left px-6 py-5 focus:outline-none group cursor-pointer"
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-brand-dark group-hover:text-brand-orange transition-colors pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className={`p-1.5 rounded-lg shrink-0 ${
                        isOpen ? 'bg-orange-50 text-brand-orange' : 'bg-slate-50 text-slate-400 group-hover:text-brand-dark group-hover:bg-slate-100'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-xs sm:text-sm text-brand-muted leading-relaxed font-sans border-t border-slate-50 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
