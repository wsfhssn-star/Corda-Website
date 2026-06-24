import { motion } from 'motion/react';
import { 
  BarChart3, 
  Search, 
  Globe, 
  Cpu, 
  Rocket, 
  Wallet, 
  Layers, 
  ShieldCheck, 
  ArrowUpRight,
  Sparkles,
  Check,
  Lock,
  Activity,
  TrendingUp
} from 'lucide-react';

// ==========================================
// 1. Competitor Analysis Graphic (Line Chart & Stats)
// ==========================================
function CompetitorAnalysisVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex flex-col justify-between select-none">
      {/* Top status bar */}
      <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
        <span className="flex items-center gap-1 font-semibold"><TrendingUp className="w-3 h-3 text-brand-orange" /> AUTHORITY GAP ANALYSIS</span>
        <span className="bg-orange-100 text-brand-orange px-1.5 py-0.5 rounded text-[9px] font-bold">+24% OVERLAP</span>
      </div>

      {/* Mini Chart */}
      <div className="relative h-20 w-full mt-2 flex items-end">
        {/* Horizontal gridlines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
          <div className="border-b border-slate-200 w-full h-0"></div>
          <div className="border-b border-slate-200 w-full h-0"></div>
          <div className="border-b border-slate-200 w-full h-0"></div>
        </div>

        {/* Chart Line drawing */}
        <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 200 80">
          <motion.path
            d="M 0 65 Q 30 55, 60 40 T 120 45 T 180 15 T 200 10"
            fill="none"
            stroke="#f25c05"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Shaded area underneath */}
          <motion.path
            d="M 0 65 Q 30 55, 60 40 T 120 45 T 180 15 T 200 10 L 200 80 L 0 80 Z"
            fill="url(#orange-gradient)"
            opacity="0.08"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.08 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          
          <defs>
            <linearGradient id="orange-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f25c05" />
              <stop offset="100%" stopColor="#f25c05" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Glowing node at current position */}
          <motion.circle
            cx="200"
            cy="10"
            r="4"
            fill="#f25c05"
            initial={{ scale: 0 }}
            whileInView={{ scale: [0, 1.5, 1] }}
            viewport={{ once: true }}
            transition={{ delay: 1.5, duration: 0.4 }}
          />
        </svg>

        {/* Floating Stat card */}
        <motion.div 
          initial={{ opacity: 0, y: 10, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="absolute left-6 bottom-6 bg-white border border-slate-100 p-2 rounded-xl shadow-lg shadow-slate-100/80 flex items-center gap-2 z-20"
        >
          <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center">
            <span className="text-[10px] font-bold text-brand-orange">DA</span>
          </div>
          <div>
            <div className="text-[9px] text-slate-400 font-bold leading-none uppercase">Competitor Peak</div>
            <div className="text-xs font-bold text-brand-dark leading-none mt-0.5">DA 74 (Linked)</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom info row */}
      <div className="flex justify-between items-center text-[9px] font-mono font-semibold text-slate-400/80 pt-1 border-t border-slate-100">
        <span>SOVEREIGN DELTA</span>
        <span>AUDITED SECURELY</span>
      </div>
    </div>
  );
}

// ==========================================
// 2. Opportunity Discovery Graphic (Floating Nodes & Pulsating Star)
// ==========================================
function OpportunityDiscoveryVisual() {
  const nodes = [
    { text: 'TechCrunch Hub', y: -40, x: -65, delay: 0 },
    { text: 'Forbes Niche Node', y: 32, x: -55, delay: 0.3 },
    { text: 'VentureBeat Network', y: -35, x: 60, delay: 0.6 },
    { text: 'Wired Index', y: 38, x: 55, delay: 0.9 },
  ];

  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex items-center justify-center select-none">
      {/* Absolute grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:12px_12px] opacity-60" />
      
      {/* Central Sparkle Sphere */}
      <div className="relative z-10 flex items-center justify-center">
        {/* Multiple pulsating halos */}
        <motion.div 
          animate={{ scale: [1, 1.25, 1], opacity: [0.15, 0.05, 0.15] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 rounded-full bg-orange-200/40 blur-md"
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.1, 0.25] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute w-16 h-16 rounded-full bg-orange-100/60 blur-sm"
        />
        
        {/* Core circle */}
        <div className="w-10 h-10 rounded-full bg-white border border-orange-100 shadow-md shadow-orange-500/10 flex items-center justify-center relative z-10">
          <Sparkles className="w-5 h-5 text-brand-orange animate-pulse" />
        </div>
      </div>

      {/* Floating capsule pills */}
      {nodes.map((n, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{ y: [n.y, n.y - 4, n.y] }}
          transition={{
            y: {
              duration: 2.5 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: n.delay
            },
            default: {
              duration: 0.5,
              delay: i * 0.15
            }
          }}
          style={{ x: n.x, y: n.y }}
          className="absolute bg-white hover:bg-orange-50 border border-slate-100 hover:border-orange-200 px-2.5 py-1 rounded-full shadow-sm text-[9px] font-semibold text-brand-dark flex items-center gap-1 cursor-pointer transition-colors z-20"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
          {n.text}
        </motion.div>
      ))}
    </div>
  );
}

// ==========================================
// 3. Publisher Details Graphic (Sleek rows & progress bars)
// ==========================================
function PublisherDetailsVisual() {
  const pubs = [
    { title: 'SaaS Insights Mag', da: 86, tat: '2d', color: 'from-orange-400 to-brand-orange' },
    { title: 'Developer Network', da: 74, tat: '3d', color: 'from-amber-400 to-orange-500' },
    { title: 'Fintech Daily Portal', da: 91, tat: '1d', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex flex-col justify-between select-none">
      <div className="text-[10px] font-mono text-slate-400 flex justify-between items-center">
        <span>MARKETPLACE VERIFIED DATA</span>
        <span className="text-[9px] bg-emerald-50 text-emerald-500 px-1.5 py-0.5 rounded font-bold">100% REAL</span>
      </div>

      {/* List items */}
      <div className="space-y-2 mt-1">
        {pubs.map((p, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="bg-white border border-slate-100 rounded-xl p-2 shadow-sm flex items-center justify-between gap-3 hover:border-orange-100/80 transition-colors"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-orange-50 flex items-center justify-center font-bold text-[10px] text-brand-orange uppercase">
                {p.title.charAt(0)}
              </div>
              <div>
                <div className="text-[10px] font-bold text-brand-dark leading-tight">{p.title}</div>
                <div className="text-[8px] text-slate-400 mt-0.5 font-mono">TAT: {p.tat} • ACTIVE INDEX</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-right">
                <span className="text-[10px] font-bold font-mono text-brand-dark">DA {p.da}</span>
              </div>
              <div className="w-12 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${p.da}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + idx * 0.15 }}
                  className={`h-full rounded-full bg-gradient-to-r ${p.color}`}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// 4. AI PR Strategy Insights Graphic (Layered prompt bubble & response card)
// ==========================================
function AIPRStrategyVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex flex-col justify-between select-none">
      <div className="text-[10px] font-mono text-slate-400 flex justify-between items-center z-10">
        <span>CORDA LLM ENGINE</span>
        <span className="flex items-center gap-1 text-[9px] text-brand-orange font-bold"><Sparkles className="w-3 h-3 animate-spin-slow" /> SYNTHESIS ACTIVE</span>
      </div>

      {/* Layered floating speech/prompt cards */}
      <div className="relative h-24 mt-2">
        {/* Bottom prompt bubble */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.95 }}
          whileInView={{ opacity: 0.6, y: 0, scale: 0.95 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-[85%] bg-white border border-slate-100 rounded-2xl p-2.5 shadow-sm"
        >
          <div className="text-[8px] font-mono text-slate-400 font-bold uppercase leading-none">Campaign Goal Input</div>
          <p className="text-[9px] text-slate-500 mt-1 truncate">Establish technical SaaS authority on serverless storage...</p>
        </motion.div>

        {/* Top engineered response bubble */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="absolute top-2 right-0 w-[92%] bg-brand-dark border border-slate-800 rounded-2xl p-3 shadow-xl shadow-slate-900/10 text-white z-10"
        >
          <div className="flex justify-between items-center">
            <span className="text-[8px] font-mono text-orange-400 font-bold uppercase leading-none">Engineered Article Pitch Angle</span>
            <span className="text-[8px] bg-orange-500/10 text-brand-orange font-bold px-1.5 py-0.5 rounded leading-none">98% SCORE</span>
          </div>
          <p className="text-[10px] font-sans font-medium text-slate-100 mt-1.5 leading-tight">
            "Why the future of headless SaaS architectures is completely decoupling authority."
          </p>
          <div className="flex gap-2 mt-2">
            <span className="text-[7px] font-mono bg-slate-800 text-slate-400 px-1 py-0.5 rounded font-semibold uppercase">Cloud Tech</span>
            <span className="text-[7px] font-mono bg-slate-800 text-slate-400 px-1 py-0.5 rounded font-semibold uppercase">Decoupled</span>
          </div>
        </motion.div>
      </div>

      <div className="h-2" />
    </div>
  );
}

// ==========================================
// 5. Campaign Execution Graphic (Sleek timeline stepper)
// ==========================================
function CampaignExecutionVisual() {
  const steps = [
    { label: 'Outreach', active: true, checked: true },
    { label: 'Pitching', active: true, checked: true },
    { label: 'Drafting', active: true, checked: false, pulsing: true },
    { label: 'Verify', active: false, checked: false }
  ];

  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex flex-col justify-between select-none">
      <div className="text-[10px] font-mono text-slate-400 flex justify-between items-center">
        <span>CAMPAIGN STATUS TELEMETRY</span>
        <span className="flex items-center gap-1.5 text-orange-500 font-mono text-[9px] font-bold">
          <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-ping"></span>
          REAL-TIME
        </span>
      </div>

      {/* Steps Visual Interface */}
      <div className="relative flex items-center justify-between w-full px-2 mt-2">
        {/* Track Line behind */}
        <div className="absolute left-6 right-6 top-[18px] h-0.5 bg-slate-200 z-0">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '66%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="h-full bg-brand-orange"
          />
        </div>

        {steps.map((st, i) => (
          <div key={i} className="flex flex-col items-center relative z-10 w-16">
            {/* Step circle */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
              className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                st.checked 
                  ? 'bg-brand-orange border-brand-orange text-white shadow-md shadow-orange-500/15'
                  : st.pulsing
                  ? 'bg-white border-brand-orange text-brand-orange ring-4 ring-orange-100'
                  : 'bg-white border-slate-200 text-slate-400'
              }`}
            >
              {st.checked ? (
                <Check className="w-4 h-4 stroke-[3]" />
              ) : st.pulsing ? (
                <motion.span 
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-[10px] font-bold font-mono"
                >
                  3/4
                </motion.span>
              ) : (
                <span className="text-[10px] font-bold font-mono">4</span>
              )}
            </motion.div>

            {/* Step label */}
            <span className={`text-[9px] font-bold mt-2.5 whitespace-nowrap leading-none ${
              st.active ? 'text-brand-dark' : 'text-slate-400 font-medium'
            }`}>
              {st.label}
            </span>
          </div>
        ))}
      </div>

      {/* Floating alert/detail row at bottom */}
      <div className="bg-white border border-slate-100 rounded-xl px-2.5 py-1.5 flex items-center justify-between text-[9px] font-mono text-slate-400">
        <span className="flex items-center gap-1 text-slate-500 font-semibold">
          <Activity className="w-3 h-3 text-brand-orange" /> Anchor Text Approved
        </span>
        <span className="text-slate-400">TAT 48h SLA</span>
      </div>
    </div>
  );
}

// ==========================================
// 6. Wallet & Budgeting Ledger Graphic (Escrow ledger layout)
// ==========================================
function WalletLedgerVisual() {
  return (
    <div className="w-full h-44 bg-gradient-to-br from-slate-50 to-slate-100/80 rounded-2xl border border-slate-100/80 overflow-hidden relative p-4 flex flex-col justify-between select-none">
      <div className="text-[10px] font-mono text-slate-400 flex justify-between items-center z-10">
        <span>TRANSPARENT LEDGER</span>
        <span className="flex items-center gap-1 text-[9px] text-emerald-500 font-bold"><Lock className="w-3 h-3 text-emerald-500" /> ESCROW SECURE</span>
      </div>

      {/* Circular target and orbits overlay */}
      <div className="relative h-24 mt-1 flex items-center justify-between">
        {/* Left Side: Ledger details */}
        <div className="space-y-1.5 z-10 w-[55%]">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-white border border-slate-100 rounded-lg p-1.5 shadow-sm"
          >
            <div className="text-[7px] text-slate-400 font-mono font-bold leading-none">ESCROW INBOUND</div>
            <div className="text-xs font-bold text-brand-dark mt-0.5 font-mono">$4,500.00</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="bg-slate-900 border border-slate-800 text-white rounded-lg p-1.5 shadow-md"
          >
            <div className="text-[7px] text-orange-400 font-mono font-bold leading-none">AUTO RELEASE CLAUSE</div>
            <div className="text-[9px] font-medium mt-0.5 text-slate-200 leading-tight">On Live URL Verify</div>
          </motion.div>
        </div>

        {/* Right Side: Escrow Lock badge & radar rings */}
        <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.05, 0.15] }}
            transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute w-16 h-16 rounded-full bg-emerald-200/40 blur-sm"
          />
          <div className="w-11 h-11 rounded-full bg-white border border-emerald-100 shadow-md flex items-center justify-center relative z-10">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
          </div>
        </div>
      </div>

      <div className="text-[8px] font-mono text-slate-400 text-right">
        LEDGER TRANSACTION ID: #TX-90284A
      </div>
    </div>
  );
}

export default function PillarsDetails() {
  const pillars = [
    {
      title: 'Competitor Analysis',
      desc: 'Inject competitor domains to map authority structures, organic visibility footprints, and specific backlinks indices instantly.',
      icon: BarChart3,
      metric: 'Real-time delta tracking',
      visual: <CompetitorAnalysisVisual />
    },
    {
      title: 'Opportunity Discovery',
      desc: 'Scan the search index continuously to identify high-potential publisher nodes in your niche before your competitors do.',
      icon: Search,
      metric: 'Over 4,800 active publishers',
      visual: <OpportunityDiscoveryVisual />
    },
    {
      title: 'Publisher Details',
      desc: 'Examine detailed metrics for every publication, including verified organic traffic profiles, Turnaround Time (TAT), and category tags.',
      icon: Globe,
      metric: '100% transparent metadata',
      visual: <PublisherDetailsVisual />
    },
    {
      title: 'AI PR Strategy Insights',
      desc: 'Synthesize engineered article pitches, core hook angles, and continuous communication strategies custom tailored for your target audience.',
      icon: Cpu,
      metric: 'Corda LLM Engine enabled',
      visual: <AIPRStrategyVisual />
    },
    {
      title: 'Campaign Execution',
      desc: 'Track direct placement status at every step, from outreach pitching through draft creation, communication review, and live publication verification.',
      icon: Rocket,
      metric: 'Live step-by-step telemetry',
      visual: <CampaignExecutionVisual />
    },
    {
      title: 'Wallet & Budgeting Ledger',
      desc: 'Fund campaigns safely with our secure escrow protection layer. Authorize releases only when links are fully verified and published.',
      icon: Wallet,
      metric: 'Escrow protected ledger',
      visual: <WalletLedgerVisual />
    }
  ];

  return (
    <section id="features-section" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-100 text-brand-dark text-xs font-semibold tracking-wider uppercase mb-5">
            <Layers className="w-3.5 h-3.5 text-brand-orange" />
            Suite Architecture
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-brand-dark leading-[1.12]">
            Every authority engine,<br />
            decoupled and supercharged.
          </h2>
          <p className="text-lg text-brand-muted mt-5 leading-relaxed font-sans">
            Corda decouples authority acquisition from legacy agency overhead. Run targeted campaigns with sovereign metrics tracking and direct marketplace execution.
          </p>
        </motion.div>

        {/* 3x2 Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-slate-50/50 border border-slate-100 rounded-3xl p-6 hover:bg-white hover:border-orange-200/50 hover:shadow-2xl hover:shadow-slate-100/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Premium mock-up visual at the top */}
                  <div className="mb-6">
                    {pil.visual}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 text-brand-orange flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-brand-dark">{pil.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">{pil.desc}</p>
                </div>

                <div className="border-t border-slate-100 pt-5 mt-auto flex items-center justify-between text-[11px] font-mono font-semibold text-slate-400">
                  <span className="uppercase tracking-wider">{pil.metric}</span>
                  <span className="text-brand-orange group-hover:translate-x-1 transition-transform flex items-center gap-0.5 cursor-pointer" onClick={() => {
                    const el = document.getElementById('product-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}>
                    Learn suite <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
