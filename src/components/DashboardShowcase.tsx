import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  publishersData, 
  competitorsData, 
  initialCampaigns, 
  initialStrategies 
} from '../mockData';
import { 
  Publisher, 
  CompetitorRank, 
  Campaign, 
  PRStrategy 
} from '../types';
import { 
  BarChart3, 
  Compass, 
  Search, 
  Globe, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Wallet, 
  Layers, 
  CheckCircle2, 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  DollarSign, 
  FileText, 
  Clock, 
  Info,
  Calendar,
  AlertTriangle,
  Send,
  RefreshCw
} from 'lucide-react';

type TabType = 'intelligence' | 'discovery' | 'marketplace' | 'ai-strategy' | 'campaigns' | 'reports';

const createStaggerFloatVariants = (index: number) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: [0, -4, 0],
    transition: {
      y: {
        repeat: Infinity,
        duration: 4 + (index % 3) * 0.6,
        ease: "easeInOut",
        delay: index * 0.12 + 0.5,
      },
      opacity: {
        duration: 0.4,
        delay: index * 0.08
      }
    }
  }
});

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('intelligence');
  
  // States for interactive simulations
  const [competitors, setCompetitors] = useState<CompetitorRank[]>(competitorsData);
  const [newCompetitorInput, setNewCompetitorInput] = useState('');
  
  const [campaigns, setCampaigns] = useState<Campaign[]>(initialCampaigns);
  const [cart, setCart] = useState<Publisher[]>([]);
  
  // AI Strategy States
  const [aiDomain, setAiDomain] = useState('cloudsecure-infra.io');
  const [aiNiche, setAiNiche] = useState('Enterprise Cloud Security');
  const [isGeneratingStrategy, setIsGeneratingStrategy] = useState(false);
  const [generatedStrategy, setGeneratedStrategy] = useState<PRStrategy | null>(initialStrategies[0]);

  // System Health live monitoring states
  const [isHealthOpen, setIsHealthOpen] = useState(false);
  const [isReverifying, setIsReverifying] = useState(false);
  const [nodes, setNodes] = useState([
    { name: 'AI Core-Alpha', status: 'Optimal', latency: 12, load: '24%' },
    { name: 'AI Synapse-Beta', status: 'Optimal', latency: 15, load: '18%' },
    { name: 'PR Newswire API', status: 'Connected', latency: 45, load: 'Active' },
    { name: 'Media Intercept Gateway', status: 'Connected', latency: 32, load: 'Idle' },
  ]);

  // Handle adding competitor
  const handleAddCompetitor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompetitorInput || !newCompetitorInput.includes('.')) return;
    
    const newComp: CompetitorRank = {
      domain: newCompetitorInput.toLowerCase().trim(),
      da: Math.floor(Math.random() * 25) + 55,
      backlinksCount: Math.floor(Math.random() * 50000) + 15000,
      organicKeywords: `${(Math.random() * 40 + 10).toFixed(1)}K`,
      authorityGap: Math.floor(Math.random() * 15) - 5,
      topPerformingPage: '/solutions/secure-endpoints',
      status: 'monitored'
    };
    
    setCompetitors([newComp, ...competitors]);
    setNewCompetitorInput('');
  };

  // Handle Buy/Secure Publisher placement
  const handleAddToCart = (pub: Publisher) => {
    if (cart.find(item => item.id === pub.id)) {
      // Already in cart, execute simulated checkout
      alert(`Placement on ${pub.url} is already queued for checkout!`);
      return;
    }
    setCart([...cart, pub]);
    
    // Auto simulate converting cart items to a live Campaign in 1.5 seconds!
    setTimeout(() => {
      const newCamp: Campaign = {
        id: `camp-${Date.now()}`,
        name: `Authority push: ${pub.name}`,
        publisherName: pub.name,
        category: pub.category,
        type: 'Editorial Link',
        status: 'Analyzing',
        progress: 10,
        dateCreated: 'Today',
        daUplift: parseFloat((pub.da / 20).toFixed(1))
      };
      setCampaigns(prev => [newCamp, ...prev]);
      setCart(prev => prev.filter(item => item.id !== pub.id));
    }, 1200);
  };

  // Generate simulated Custom AI PR strategy
  const handleGenerateStrategy = (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiDomain || !aiNiche) return;
    
    setIsGeneratingStrategy(true);
    
    setTimeout(() => {
      const ideas = [
        {
          topic: `The Cost of Zero Trust in ${aiNiche}`,
          hook: `Why modern security paradigms are introducing latency bottlenecks—and how decoupled decryption pathways solve the performance gap.`,
          publications: ['TechSpectrum', 'DevOps Standard'],
          tactics: ['Release whitepaper outlining raw latency metrics.', 'Pitch specialized bylined posts about container firewall scaling.'],
          reach: '95K Devops Engineers'
        },
        {
          topic: `Autonomic Defenses in ${aiNiche}`,
          hook: `The shift from reactive logging to autonomous remediation engines in containerized network routing.`,
          publications: ['VenturePulse', 'SaaSJournal'],
          tactics: ['Coordinate guest expert appearances on top cybersecurity podcasts.', 'Distribute comprehensive benchmarking report.'],
          reach: '150K CTOs and Security Leaders'
        }
      ];
      
      const selectedIdea = ideas[Math.floor(Math.random() * ideas.length)];
      
      const newStrategy: PRStrategy = {
        id: `strat-${Date.now()}`,
        topic: selectedIdea.topic,
        coreHook: selectedIdea.hook,
        targetPublications: selectedIdea.publications,
        suggestedTactics: selectedIdea.tactics,
        estimatedReach: selectedIdea.reach,
        projectedDaUplift: parseFloat((Math.random() * 3 + 4).toFixed(1))
      };
      
      setGeneratedStrategy(newStrategy);
      setIsGeneratingStrategy(false);
    }, 1500);
  };

  // Live telemetry updater for System Health Nodes
  React.useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        const delta = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const newLatency = Math.max(8, node.latency + delta);
        let newLoad = node.load;
        if (node.load.endsWith('%')) {
          const currentPercent = parseInt(node.load);
          const loadDelta = Math.floor(Math.random() * 7) - 3;
          newLoad = `${Math.min(95, Math.max(10, currentPercent + loadDelta))}%`;
        }
        return { ...node, latency: newLatency, load: newLoad };
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleReverify = () => {
    setIsReverifying(true);
    setTimeout(() => {
      setIsReverifying(false);
      // Slightly improve latencies on re-verify to show live effect
      setNodes(prev => prev.map(node => ({
        ...node,
        latency: Math.max(6, Math.floor(node.latency * 0.85))
      })));
    }, 1200);
  };

  const tabsList = [
    { id: 'intelligence', name: 'Authority Intelligence', icon: BarChart3, desc: 'Competitor Tracking' },
    { id: 'discovery', name: 'Opportunity Discovery', icon: Search, desc: 'Search Scanning' },
    { id: 'marketplace', name: 'Publisher Marketplace', icon: Globe, desc: 'Secure Placements' },
    { id: 'ai-strategy', name: 'AI PR Strategy', icon: Cpu, desc: 'Engineered Angles' },
    { id: 'campaigns', name: 'Campaign Execution', icon: Rocket, desc: 'Active Tracking' },
    { id: 'reports', name: 'Authority Growth', icon: TrendingUp, desc: 'Metrics & Ledger' },
  ];

  return (
    <section id="product-showcase" className="py-24 sm:py-32 bg-white relative">
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/80 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            The Product Ecosystem
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark leading-[1.12]">
            One platform. Every authority engine.
          </h2>
          <p className="text-lg text-brand-muted mt-5 font-sans leading-relaxed">
            From deep competitive discovery to direct placement orchestration and AI-powered strategy generation. Experience Corda's complete operational suite below.
          </p>
        </motion.div>

        {/* Live Interactive Sandbox Dashboard Container */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="border border-slate-100 rounded-3xl shadow-2xl bg-slate-50/30 overflow-hidden"
        >
          
          {/* Dashboard Header Bar - Mocking Premium SaaS Shell */}
          <div className="bg-brand-dark border-b border-slate-800 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* Top Left Window Controls */}
            <div className="flex items-center gap-6">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
                <span className="w-3 h-3 rounded-full bg-slate-700" />
              </div>
              <div className="h-4 w-px bg-slate-800" />
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-brand-orange rounded flex items-center justify-center">
                  <Compass className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-xs font-mono font-semibold tracking-wider text-slate-300">Corda.OS // WORKSPACE</span>
              </div>
            </div>

            {/* Quick Metrics display */}
            <div className="flex items-center gap-6 text-[11px] font-mono font-medium text-slate-400">
              <div>
                <span>Authority Score: </span>
                <span className="text-white font-bold text-xs">DA 66</span>
              </div>
              <div className="hidden sm:block">
                <span>Direct Placements: </span>
                <span className="text-brand-orange font-bold text-xs">{campaigns.filter(c => c.status === 'Live').length}</span>
              </div>
              <div className="hidden md:block">
                <span>Active Budget: </span>
                <span className="text-emerald-400 font-bold text-xs">$12,850.00</span>
              </div>
            </div>

          </div>

          {/* Tab Navigation Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[580px]">
            
            {/* Left Column Sidebar - Tabs Selector (Col Span 3) */}
            <div className="lg:col-span-3 bg-white border-r border-slate-100 p-4 sm:p-5 flex flex-col gap-1.5">
              <div className="text-[10px] font-mono text-slate-400 font-semibold uppercase tracking-wider px-3 mb-3">Authority OS Suite</div>
              
              {tabsList.map((tab) => {
                const Icon = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as TabType)}
                    className={`flex items-center justify-between px-3 py-3 rounded-xl text-left transition-all ${
                      isSelected 
                        ? 'bg-orange-50 text-brand-orange font-semibold shadow-sm shadow-orange-500/5' 
                        : 'text-brand-navy hover:bg-slate-50 hover:text-brand-dark'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-1.5 rounded-lg transition-all ${isSelected ? 'bg-brand-orange text-white' : 'text-slate-400 bg-slate-50'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[13px] tracking-tight">{tab.name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5 font-normal">{tab.desc}</div>
                      </div>
                    </div>
                    {isSelected && <ChevronRight className="w-4 h-4 opacity-70" />}
                  </button>
                );
              })}

              {/* Dynamic Bottom Box - Simulated Cart Notification */}
              {cart.length > 0 && (
                <div className="mt-auto bg-orange-50/80 border border-orange-100 rounded-2xl p-4 animate-pulse">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-brand-orange animate-spin" />
                    <span className="text-xs font-semibold text-brand-dark">Processing Placement...</span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2">Checking placement credentials for {cart[0].url}. Link project live in 1s.</p>
                </div>
              )}
            </div>

            {/* Right Column Workspace - Rich Panels Area (Col Span 9) */}
            <div className="lg:col-span-9 bg-slate-50/30 p-6 sm:p-8 flex flex-col relative">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.18 }}
                  className="flex-1 flex flex-col justify-between"
                >

                  {/* TAB 1: Authority Intelligence (Competitor tracking) */}
                  {activeTab === 'intelligence' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">Competitor Tracking Network</h3>
                          <p className="text-xs text-brand-muted mt-1">Add domains to map backlink profiles, domain rating variances, and organic search gaps.</p>
                        </div>
                        
                        <form onSubmit={handleAddCompetitor} className="flex gap-2">
                          <input
                            type="text"
                            placeholder="competitor-domain.com"
                            value={newCompetitorInput}
                            onChange={(e) => setNewCompetitorInput(e.target.value)}
                            className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange text-brand-dark font-mono"
                          />
                          <button
                            type="submit"
                            className="bg-brand-dark hover:bg-brand-orange text-white text-xs font-medium px-4 py-2 rounded-xl transition-colors duration-300 flex items-center gap-1.5"
                          >
                            <TrendingUp className="w-3.5 h-3.5" />
                            Track Domain
                          </button>
                        </form>
                      </div>

                      {/* Competitor Listings Grid */}
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full text-left border-collapse">
                            <thead>
                              <tr className="bg-slate-50 border-b border-slate-100 font-mono text-[10px] uppercase font-bold text-slate-500">
                                <th className="p-4 pl-6">Domain Profile</th>
                                <th className="p-4">Domain Authority (DA)</th>
                                <th className="p-4">Backlink Count</th>
                                <th className="p-4">Organic Keywords</th>
                                <th className="p-4">Authority Gap</th>
                                <th className="p-4 pr-6 text-right">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                              {competitors.map((comp) => (
                                <tr key={comp.domain} className="hover:bg-slate-50/50 transition-colors">
                                  <td className="p-4 pl-6 font-semibold text-brand-dark font-mono">{comp.domain}</td>
                                  <td className="p-4">
                                    <span className="font-semibold text-brand-dark font-mono">{comp.da}</span>
                                    <span className="text-[10px] text-slate-400 font-normal ml-1">/100</span>
                                  </td>
                                  <td className="p-4 font-mono">{(comp.backlinksCount / 1000).toFixed(1)}K</td>
                                  <td className="p-4 font-mono">{comp.organicKeywords}</td>
                                  <td className="p-4">
                                    <span className={`font-mono font-bold ${comp.authorityGap > 0 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                      {comp.authorityGap > 0 ? `+${comp.authorityGap}` : comp.authorityGap}
                                    </span>
                                  </td>
                                  <td className="p-4 pr-6 text-right">
                                    <span className={`inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                                      comp.status === 'critical' ? 'bg-red-50 text-red-500 border border-red-100' :
                                      comp.status === 'alert' ? 'bg-amber-50 text-amber-600 border border-amber-100' :
                                      'bg-slate-100 text-slate-500'
                                    }`}>
                                      {comp.status}
                                    </span>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      {/* Micro interaction card advising customer */}
                      <div className="bg-orange-50/40 border border-orange-100/50 rounded-2xl p-4 flex items-start gap-3">
                        <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                        <div className="text-xs leading-relaxed text-brand-navy">
                          <strong>Competitive Link Intercept Queue:</strong> competitor-alpha.com is leading with 16 Domain Authority points. Corda OS discovered they obtained high-relevance citations on <strong>TechSpectrum</strong> and <strong>VenturePulse</strong>. Securing placements there can instantly reduce the gap by <strong>35%</strong>.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: Opportunity Discovery (Scan channels) */}
                  {activeTab === 'discovery' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">Opportunity Discovery Scan</h3>
                          <p className="text-xs text-brand-muted mt-1">Real-time scan indexing authoritative publisher channels with verified traffic indices.</p>
                        </div>
                        <div className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          <span>4,812 High-Value Outbound Channels Indexed</span>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                        <div className="p-4 bg-slate-50 border-b border-slate-100 flex flex-wrap gap-2 items-center justify-between">
                          <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">Live Opportunity Stream</div>
                          <div className="text-xs text-slate-500">Filter Category: <strong>All Tech &amp; Fin</strong></div>
                        </div>

                        <div className="divide-y divide-slate-100">
                          {publishersData.slice(0, 4).map((pub, idx) => (
                            <motion.div 
                              key={pub.id} 
                              variants={createStaggerFloatVariants(idx)}
                              initial="hidden"
                              animate="visible"
                              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                              className="p-5 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-50/50 transition-colors"
                            >
                              <div className="flex items-start gap-4">
                                <div className="p-2.5 rounded-xl bg-orange-50 text-brand-orange">
                                  <Globe className="w-4.5 h-4.5" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-brand-dark font-mono text-[14px]">{pub.url}</span>
                                    <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-semibold text-slate-600">{pub.category}</span>
                                  </div>
                                  <p className="text-xs text-slate-500 mt-1">{pub.featuredReason}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-8">
                                <div className="text-center">
                                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Domain Auth</div>
                                  <div className="text-sm font-semibold text-brand-dark font-mono mt-0.5">{pub.da}</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Organic Traffic</div>
                                  <div className="text-sm font-semibold text-brand-dark font-mono mt-0.5">{pub.traffic}</div>
                                </div>
                                <div className="text-right">
                                  <button
                                    onClick={() => handleAddToCart(pub)}
                                    className="bg-brand-dark hover:bg-brand-orange text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-1 group"
                                  >
                                    Secure Placement
                                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: Publisher Marketplace (Verify details and checkout) */}
                  {activeTab === 'marketplace' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">Publisher Placement Marketplace</h3>
                          <p className="text-xs text-brand-muted mt-1">Browse our verified enterprise publications list with fixed transparent placement costs.</p>
                        </div>
                        <div className="text-xs text-slate-500 font-semibold font-mono">
                          Escrow protected payments system
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {publishersData.map((pub, idx) => (
                          <motion.div 
                            key={pub.id} 
                            variants={createStaggerFloatVariants(idx)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                            className="bg-white border border-slate-100 rounded-2xl p-5 hover:border-brand-orange/40 transition-all duration-300 shadow-sm flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-mono text-[14px] font-bold text-brand-dark">{pub.url}</span>
                                <span className="px-2 py-0.5 rounded-md bg-orange-50 text-brand-orange text-[10px] font-bold uppercase tracking-wider">{pub.category}</span>
                              </div>
                              <p className="text-xs text-slate-500 leading-relaxed mb-4">{pub.featuredReason}</p>
                            </div>

                            <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
                              <div>
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Placement Cost</span>
                                <div className="text-lg font-bold text-brand-dark font-mono">${pub.price}</div>
                              </div>
                              <div className="text-right">
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">TAT: {pub.tat}</span>
                                <div className="mt-1">
                                  <button
                                    onClick={() => handleAddToCart(pub)}
                                    className="bg-slate-900 hover:bg-brand-orange text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 ml-auto"
                                  >
                                    Secure link
                                    <ArrowUpRight className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 4: AI PR Strategy (AI Strategy generator playground) */}
                  {activeTab === 'ai-strategy' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">AI-Powered Authority &amp; PR Strategy</h3>
                          <p className="text-xs text-brand-muted mt-1">Corda LLM Engine analyzes your niche keyword density to construct hook angles and syndication layouts.</p>
                        </div>
                      </div>

                      {/* Interactive form to simulate generation */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        
                        {/* Input form */}
                        <form onSubmit={handleGenerateStrategy} className="md:col-span-5 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4">
                          <div className="text-xs font-mono font-bold text-slate-400 uppercase">Strategy Inputs</div>
                          
                          <div>
                            <label className="block text-xs font-semibold text-brand-navy mb-1.5">Your Domain Profile</label>
                            <input
                              type="text"
                              value={aiDomain}
                              onChange={(e) => setAiDomain(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-brand-dark font-mono focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-brand-navy mb-1.5">Industry Vertical / Core Niche</label>
                            <input
                              type="text"
                              value={aiNiche}
                              onChange={(e) => setAiNiche(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={isGeneratingStrategy}
                            className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-slate-300 text-white font-semibold text-xs py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-1.5"
                          >
                            {isGeneratingStrategy ? (
                              <>
                                <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                Mapping Authority Graph...
                              </>
                            ) : (
                              <>
                                <Sparkles className="w-3.5 h-3.5" />
                                Engineered PR Pitch strategy
                              </>
                            )}
                          </button>
                        </form>

                        {/* Outputs display */}
                        <div className="md:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm min-h-[280px] flex flex-col justify-between">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-xs font-mono font-bold text-slate-400 uppercase">Engineered Strategy Blueprint</span>
                            <span className="text-[10px] font-mono text-slate-400">STATUS: READY TO PITCH</span>
                          </div>

                          {generatedStrategy ? (
                            <div className="space-y-4">
                              <div>
                                <span className="text-[10px] font-mono text-brand-orange uppercase font-bold">Recommended Hook Angle</span>
                                <h4 className="text-[15px] font-bold text-brand-dark font-display leading-snug mt-1">{generatedStrategy.topic}</h4>
                                <p className="text-xs text-slate-500 italic mt-1.5">"{generatedStrategy.coreHook}"</p>
                              </div>

                              <div className="h-px bg-slate-100" />

                              <div>
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Suggested Syndications</span>
                                <div className="flex flex-wrap gap-2 mt-2">
                                  {generatedStrategy.targetPublications.map((pub) => (
                                    <span key={pub} className="px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-100 text-xs font-medium font-mono">{pub}</span>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Tactic Checklist</span>
                                <ul className="space-y-1.5 mt-2 text-xs text-slate-600">
                                  {generatedStrategy.suggestedTactics.map((tac, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                                      <span>{tac}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-4">
                                <div className="text-[11px] font-mono text-slate-400">
                                  Est. Reach: <strong className="text-slate-700">{generatedStrategy.estimatedReach}</strong>
                                </div>
                                <div className="text-[11px] font-mono text-slate-400">
                                  Proj. Authority Growth: <strong className="text-brand-orange">+{generatedStrategy.projectedDaUplift} DA</strong>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center py-12 text-slate-400">
                              <Sparkles className="w-8 h-8 opacity-40 text-brand-orange mb-2" />
                              <p className="text-xs">Submit your domain parameters on the left to synthesize custom hook blueprints and backlink vectors.</p>
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}

                  {/* TAB 5: Campaign Execution (Timeline tracker) */}
                  {activeTab === 'campaigns' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">Active Campaigns Tracker</h3>
                          <p className="text-xs text-brand-muted mt-1">Real-time placement development workflow from initial outreach pitching to final link verification.</p>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
                        {campaigns.map((camp, idx) => (
                          <motion.div 
                            key={camp.id} 
                            variants={createStaggerFloatVariants(idx)}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                            className="p-5 flex flex-wrap items-center justify-between gap-6 hover:bg-slate-50/50 transition-colors"
                          >
                            <div className="space-y-1.5 max-w-sm">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-brand-dark text-xs sm:text-sm">{camp.name}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 font-mono text-slate-500 uppercase">{camp.type}</span>
                              </div>
                              <div className="text-xs text-slate-500">
                                Placement Domain: <strong className="text-slate-700 font-mono">{camp.publisherName}</strong>
                              </div>
                            </div>

                            {/* Center status slider */}
                            <div className="w-48 space-y-1.5">
                              <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase font-semibold">
                                <span>Progress</span>
                                <span>{camp.progress}%</span>
                              </div>
                              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                <div 
                                  className="bg-brand-orange h-full rounded-full transition-all duration-500"
                                  style={{ width: `${camp.progress}%` }}
                                />
                              </div>
                            </div>

                            {/* Right hand side status badge */}
                            <div className="flex items-center gap-6">
                              <div className="text-center hidden sm:block">
                                <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Proj. Growth</span>
                                <div className="text-xs font-bold text-emerald-500 font-mono mt-0.5">+{camp.daUplift} DA</div>
                              </div>
                              
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono tracking-wide ${
                                camp.status === 'Live' ? 'bg-emerald-50 text-emerald-500 border border-emerald-100' :
                                camp.status === 'In Review' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100 animate-pulse' :
                                'bg-slate-100 text-slate-500'
                              }`}>
                                <span className={`w-1.5 h-1.5 rounded-full ${camp.status === 'Live' ? 'bg-emerald-500' : 'bg-brand-orange animate-ping'}`} />
                                {camp.status}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* TAB 6: Reports & Authority Growth Curve */}
                  {activeTab === 'reports' && (
                    <div className="space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold text-brand-dark font-display">Authority Growth Analytics</h3>
                          <p className="text-xs text-brand-muted mt-1">Documented Domain Authority (DA) escalation trend over active campaign timeline.</p>
                        </div>
                      </div>

                      {/* Custom styled SVG graph representation representing rapid climb */}
                      <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 relative">
                        <div className="flex items-center justify-between mb-6">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold">Corda.OS Analytics Platform</span>
                            <div className="text-lg font-bold text-brand-dark">Authority Progression Curve</div>
                          </div>
                          
                          <div className="flex gap-4">
                            <div className="text-right">
                              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Starting score</span>
                              <div className="text-sm font-bold font-mono text-slate-500">DA 41</div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Current score</span>
                              <div className="text-sm font-bold font-mono text-brand-orange">DA 66</div>
                            </div>
                            <div className="text-right">
                              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Authority Net Uplift</span>
                              <div className="text-sm font-bold font-mono text-emerald-500">+60.9%</div>
                            </div>
                          </div>
                        </div>

                        {/* Interactive Graph Display */}
                        <div className="relative h-60 w-full flex items-end">
                          
                          {/* Grid Y-axis background helper */}
                          <div className="absolute inset-y-0 left-0 right-0 flex flex-col justify-between pointer-events-none opacity-40">
                            <div className="border-b border-slate-100 w-full h-px" />
                            <div className="border-b border-slate-100 w-full h-px" />
                            <div className="border-b border-slate-100 w-full h-px" />
                            <div className="border-b border-slate-100 w-full h-px" />
                          </div>

                          {/* SVG Plot path representing DA Climb */}
                          <svg className="w-full h-full z-10" viewBox="0 0 600 240" preserveAspectRatio="none">
                            <defs>
                              <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#f25c05" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#f25c05" stopOpacity="0" />
                              </linearGradient>
                            </defs>

                            {/* Fill Area */}
                            <path
                              d="M 0 200 L 100 180 L 200 140 L 300 150 L 400 90 L 500 80 L 600 40 L 600 240 L 0 240 Z"
                              fill="url(#chart-grad)"
                            />

                            {/* Strike/Line */}
                            <path
                              d="M 0 200 L 100 180 L 200 140 L 300 150 L 400 90 L 500 80 L 600 40"
                              fill="none"
                              stroke="#f25c05"
                              strokeWidth="3"
                              strokeLinecap="round"
                            />

                            {/* Coordinate Circles */}
                            <circle cx="0" cy="200" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="100" cy="180" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="200" cy="140" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="300" cy="150" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="400" cy="90" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="500" cy="80" r="5" fill="#f25c05" stroke="#ffffff" strokeWidth="2" />
                            <circle cx="600" cy="40" r="6" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" />
                          </svg>

                          {/* floating badge at tip */}
                          <div className="absolute top-[35px] right-[10px] z-20 bg-slate-900 text-white font-mono font-bold text-[10px] rounded px-1.5 py-0.5 shadow">
                            DA 66 (NOW)
                          </div>
                        </div>

                        {/* Graph X-axis helper label timeline */}
                        <div className="flex justify-between text-[10px] font-mono text-slate-400 uppercase font-semibold mt-4 border-t border-slate-100 pt-3">
                          <span>Jan 2026</span>
                          <span>Feb 2026</span>
                          <span>Mar 2026</span>
                          <span>Apr 2026</span>
                          <span>May 2026</span>
                          <span>Jun 2026</span>
                        </div>
                      </div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>

              {/* Floating System Health status widget */}
              <div className="absolute bottom-4 right-4 z-40">
                <AnimatePresence mode="wait">
                  {!isHealthOpen ? (
                    <motion.button
                      key="closed-health"
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 10 }}
                      onClick={() => setIsHealthOpen(true)}
                      className="bg-[#0f172a] hover:bg-[#1e293b] border border-slate-800 text-white rounded-full px-4 py-2.5 shadow-xl flex items-center gap-2.5 cursor-pointer hover:border-orange-500/30 transition-all duration-300 group font-mono"
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span className="text-[11px] font-mono font-bold tracking-wider uppercase">System Health: Optimal</span>
                      <span className="text-[10px] text-slate-400 font-mono bg-slate-800 px-1.5 py-0.5 rounded group-hover:text-brand-orange transition-colors">
                        12ms
                      </span>
                    </motion.button>
                  ) : (
                    <motion.div
                      key="opened-health"
                      initial={{ opacity: 0, scale: 0.95, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 15 }}
                      className="bg-[#0f172a]/95 backdrop-blur-md border border-slate-800 text-white rounded-2xl p-4 shadow-2xl w-72 sm:w-80 flex flex-col gap-3 font-mono"
                    >
                      {/* Widget Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                          </span>
                          <span className="text-xs font-mono font-bold uppercase tracking-wider">Corda Core Health</span>
                        </div>
                        <button
                          onClick={() => setIsHealthOpen(false)}
                          className="text-slate-400 hover:text-white text-[10px] font-mono hover:bg-slate-800 px-1.5 py-0.5 rounded transition-all cursor-pointer"
                        >
                          Minimize
                        </button>
                      </div>

                      {/* Nodes List */}
                      <div className="space-y-2">
                        {nodes.map((node) => (
                          <div key={node.name} className="flex items-center justify-between text-xs font-mono">
                            <div className="flex items-center gap-2 text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span>{node.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <span className="text-[10px] text-brand-orange">{node.latency}ms</span>
                              <span className="text-[10px] text-slate-500 bg-slate-900/50 px-1.5 py-0.5 rounded w-12 text-right">
                                {node.load}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Network integrity */}
                      <div className="border-t border-slate-800 pt-2.5 mt-1">
                        <div className="flex justify-between text-[9px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                          <span>Network Integrity</span>
                          <span className="text-emerald-400 font-bold">99.98%</span>
                        </div>
                        <div className="w-full bg-slate-950 h-1 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-brand-orange to-emerald-400 h-full rounded-full w-[99.98%]" />
                        </div>
                      </div>

                      {/* Action trigger */}
                      <div className="flex items-center justify-between mt-2 pt-1 border-t border-slate-800/50">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">RSA-256 SECURED</span>
                        <button
                          type="button"
                          onClick={handleReverify}
                          disabled={isReverifying}
                          className="text-[10px] font-mono text-slate-300 hover:text-white hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-800 flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
                        >
                          <RefreshCw className={`w-3 h-3 ${isReverifying ? 'animate-spin text-brand-orange' : ''}`} />
                          <span>{isReverifying ? 'Syncing...' : 'Re-verify API'}</span>
                        </button>
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
