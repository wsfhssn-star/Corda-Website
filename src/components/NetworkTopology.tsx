import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  Info, 
  Zap, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Cpu,
  Globe,
  Loader2,
  RefreshCw
} from 'lucide-react';

interface BeautifulNode {
  id: string;
  label: string;
  sublabel: string;
  type: 'target' | 'publisher' | 'competitor';
  da: number;
  traffic: string;
  x: number;
  y: number;
  status: string;
  color: string;
  glowColor: string;
  description: string;
  actionTip: string;
  difficulty: 'Easy' | 'Medium' | 'Core';
}

export default function NetworkTopology() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('target');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);
  
  // Interactive Simulator States
  const [isBoosting, setIsBoosting] = useState(false);
  const [boostProgress, setBoostProgress] = useState(0);
  const [boostCompleted, setBoostCompleted] = useState(false);
  const [simulatedScore, setSimulatedScore] = useState<number>(66);

  // Core set of 5 highly curated, beautifully balanced nodes
  const nodes: BeautifulNode[] = [
    {
      id: 'target',
      label: 'Corda.co (You)',
      sublabel: 'Authority Core',
      type: 'target',
      da: simulatedScore,
      traffic: '142K/mo',
      x: 320,
      y: 200,
      status: 'ACTIVE CORE',
      color: '#F26A1B',
      glowColor: 'rgba(242, 106, 27, 0.4)',
      description: 'Your primary authority domain. Serves as the central sink for all authoritative high-DA link equity.',
      actionTip: 'Ready for expansion. Intercept Competitor-Alpha links to boost baseline rating directly.',
      difficulty: 'Core'
    },
    {
      id: 'pub-tech',
      label: 'TechSpectrum.io',
      sublabel: 'Tech & SaaS Publisher',
      type: 'publisher',
      da: 84,
      traffic: '2.4M/mo',
      x: 120,
      y: 90,
      status: 'ACTIVE LINK',
      color: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      description: 'Premier tier-1 engineering and tech newsletter publisher. Delivering massive organic traffic and authority transfer.',
      actionTip: 'Link is indexed and active. Crawled 2 hours ago.',
      difficulty: 'Medium'
    },
    {
      id: 'pub-finance',
      label: 'VenturePulse.co',
      sublabel: 'Enterprise Media',
      type: 'publisher',
      da: 78,
      traffic: '950K/mo',
      x: 120,
      y: 310,
      status: 'ACTIVE LINK',
      color: '#10B981',
      glowColor: 'rgba(16, 185, 129, 0.4)',
      description: 'Highly authoritative venture capital and enterprise growth directory. Transmits excellent financial keyword rank juice.',
      actionTip: 'Link verified. Solid placement delivering 4.8 PR value.',
      difficulty: 'Easy'
    },
    {
      id: 'comp-alpha',
      label: 'competitor-alpha.com',
      sublabel: 'Dominant Competitor',
      type: 'competitor',
      da: 82,
      traffic: '450K/mo',
      x: 520,
      y: 90,
      status: 'INTERCEPT AVAILABLE',
      color: '#EF4444',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      description: 'Top organic ranking rival. Possesses high-DA connections that you can intercept with custom Corda PR strategies.',
      actionTip: 'High interceptability. Launch a PR campaign matching their exact link profiles.',
      difficulty: 'Medium'
    },
    {
      id: 'comp-beta',
      label: 'competitor-beta.io',
      sublabel: 'Rising Competitor',
      type: 'competitor',
      da: 74,
      traffic: '210K/mo',
      x: 520,
      y: 310,
      status: 'INTERCEPT AVAILABLE',
      color: '#EF4444',
      glowColor: 'rgba(239, 68, 68, 0.4)',
      description: 'Emerging software competitor focusing on mid-market SEO profiles. Highly vulnerable to authority interception.',
      actionTip: 'Medium difficulty. Counter their backlink growth by acquiring tech journal placements.',
      difficulty: 'Easy'
    }
  ];

  // Symmetric Parabolic Curved Paths connecting satellites to the target
  const connections = [
    {
      id: 'conn-tech',
      source: 'pub-tech',
      target: 'target',
      cx: 200,
      cy: 110,
      color: '#10B981',
      isIncoming: true,
    },
    {
      id: 'conn-finance',
      source: 'pub-finance',
      target: 'target',
      cx: 200,
      cy: 290,
      color: '#10B981',
      isIncoming: true,
    },
    {
      id: 'conn-alpha',
      source: 'comp-alpha',
      target: 'target',
      cx: 440,
      cy: 110,
      color: '#EF4444',
      isIncoming: false,
    },
    {
      id: 'conn-beta',
      source: 'comp-beta',
      target: 'target',
      cx: 440,
      cy: 290,
      color: '#EF4444',
      isIncoming: false,
    }
  ];

  const selectedNode = nodes.find(n => n.id === selectedNodeId) || nodes[0];

  // Simulated Authority Boost Trigger
  const triggerBoostSimulation = () => {
    setIsBoosting(true);
    setBoostProgress(0);
    setBoostCompleted(false);

    const interval = setInterval(() => {
      setBoostProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsBoosting(false);
          setBoostCompleted(true);
          // Payoff: Boost target domain authority rating
          setSimulatedScore(69);
          return 100;
        }
        return prev + 8;
      });
    }, 120);
  };

  // Reset Simulator when selected node changes
  useEffect(() => {
    setBoostProgress(0);
    setBoostCompleted(false);
    setIsBoosting(false);
  }, [selectedNodeId]);

  return (
    <section id="network-section" className="py-24 sm:py-32 bg-[#FCFAF7] border-y border-slate-200/60 relative overflow-hidden">
      
      {/* Background elegant coordinates blueprint pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.25] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(242, 106, 27, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(242, 106, 27, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px',
        }}
      />
      
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Simplified and Premium Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 text-[#F26A1B] text-xs font-semibold tracking-wide uppercase mb-5">
            <Network className="w-3.5 h-3.5" />
            Infrastructure Visualizer
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
            Interactive Topology
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-sans">
            Visualize backlink flow in real-time. Direct authority from trusted publishers, identify competitor gaps, and run simulated optimization sequences.
          </p>
        </motion.div>

        {/* Main Command Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* SVG Canvas Area (Col Span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/60 shadow-[0_10px_40px_rgba(0,0,0,0.02)] p-6 sm:p-8 flex flex-col justify-between relative min-h-[460px]"
          >
            
            {/* Toolbar status banner */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Live Sync status: Optimal (14ms)
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400">
                5 Active Nodes Mapped
              </span>
            </div>

            {/* Main Interactive SVG Workspace */}
            <div className="relative flex-1 flex items-center justify-center min-h-[340px]">
              <svg 
                viewBox="0 0 640 400" 
                className="w-full h-full max-w-full select-none overflow-visible"
              >
                {/* SVG Definitions for premium glows */}
                <defs>
                  <filter id="premium-glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Draw Curved Bezier Connection Lines */}
                {connections.map((conn) => {
                  const source = nodes.find(n => n.id === conn.source);
                  const target = nodes.find(n => n.id === conn.target);
                  if (!source || !target) return null;

                  const isSelectedConnection = selectedNodeId === source.id || selectedNodeId === target.id;
                  const isHoveredConnection = hoveredNodeId === source.id || hoveredNodeId === target.id;

                  // Curved parabolic path definition
                  const pathData = `M ${source.x} ${source.y} Q ${conn.cx} ${conn.cy} ${target.x} ${target.y}`;

                  return (
                    <g key={conn.id} className="transition-all duration-300">
                      
                      {/* Translucent ambient background glow path */}
                      <path 
                        d={pathData} 
                        fill="none" 
                        stroke={conn.color} 
                        strokeWidth="5" 
                        opacity={isSelectedConnection ? 0.35 : isHoveredConnection ? 0.25 : 0.08} 
                        className="transition-all duration-300"
                      />

                      {/* Main sharp pathway line */}
                      <path 
                        d={pathData} 
                        fill="none" 
                        stroke={conn.color} 
                        strokeWidth={isSelectedConnection ? "2.5" : "1.8"} 
                        strokeDasharray={conn.isIncoming ? "none" : "5 5"} 
                        opacity={isSelectedConnection ? 1 : isHoveredConnection ? 0.8 : 0.35} 
                        className="transition-all duration-300"
                      />

                      {/* Moving glowing energy beads */}
                      {conn.isIncoming ? (
                        // Incoming pulses from publishers flow to center target
                        <circle r="3.5" fill={conn.color} className="filter drop-shadow-[0_0_3px_rgba(16,185,129,0.8)]">
                          <animateMotion
                            path={pathData}
                            dur="4.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      ) : (
                        // Outcoming dashed signals flow towards competitors
                        <circle r="3.5" fill={conn.color} className="filter drop-shadow-[0_0_3px_rgba(239,68,68,0.8)]">
                          <animateMotion
                            path={pathData}
                            dur="5.5s"
                            repeatCount="indefinite"
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}

                {/* Draw Node Elements */}
                {nodes.map((node) => {
                  const isSelected = selectedNodeId === node.id;
                  const isHovered = hoveredNodeId === node.id;

                  return (
                    <g 
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="cursor-pointer"
                      onClick={() => setSelectedNodeId(node.id)}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Spinning outer dash ring */}
                      <circle
                        r={node.type === 'target' ? 36 : 28}
                        fill="transparent"
                        stroke={isSelected ? node.color : 'transparent'}
                        strokeWidth="1.5"
                        strokeDasharray="4 3"
                        className="animate-spin"
                        style={{ animationDuration: '14s' }}
                      />
                      
                      {/* Inner clean node base */}
                      <circle
                        r={node.type === 'target' ? 30 : 22}
                        fill="#ffffff"
                        stroke={isSelected ? node.color : isHovered ? `${node.color}cc` : '#E2E8F0'}
                        strokeWidth={isSelected ? 3.5 : 2}
                        className="transition-all duration-300 shadow-sm"
                      />

                      {/* Translucent Core Glow */}
                      <circle
                        r={node.type === 'target' ? 22 : 15}
                        fill={node.color}
                        className="opacity-[0.08] transition-opacity duration-300"
                      />

                      {/* Vibrant Solid Core */}
                      <circle
                        r={node.type === 'target' ? 12 : 7}
                        fill={node.color}
                        className="transition-all duration-300 group-hover:scale-110"
                      />

                      {/* Node Label Text */}
                      <text
                        y={node.type === 'target' ? 52 : 42}
                        textAnchor="middle"
                        className={`font-sans text-[11px] font-bold transition-colors ${
                          isSelected ? 'fill-slate-900 font-extrabold' : 'fill-slate-500'
                        }`}
                      >
                        {node.label}
                      </text>

                      {/* Modern Floating DA Badge Above Node */}
                      <g transform={`translate(0, ${node.type === 'target' ? -46 : -36})`}>
                        <rect
                          x="-18"
                          y="-8"
                          width="36"
                          height="16"
                          rx="8"
                          fill={isSelected ? node.color : '#F1F5F9'}
                          className="transition-all duration-300"
                        />
                        <text
                          y="3"
                          textAnchor="middle"
                          className={`font-sans text-[9px] font-extrabold transition-colors ${
                            isSelected ? 'fill-white' : 'fill-slate-600'
                          }`}
                        >
                          DA {node.da}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>

              {/* Floating Instruction Banner */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-800 text-white flex items-center gap-2 pointer-events-none shadow-xl">
                <Info className="w-3.5 h-3.5 text-[#F26A1B]" />
                <span className="text-[10px] font-mono font-medium text-slate-200 uppercase tracking-wider">
                  Select satellites to inspect link dynamics
                </span>
              </div>
            </div>

            {/* Footnote Legend bar */}
            <div className="border-t border-slate-100 pt-4 mt-2 flex flex-wrap gap-4 items-center justify-between text-[10px] font-mono text-slate-400 font-medium uppercase tracking-wider">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F26A1B]" />
                  <span>Corda Core</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  <span>Publisher (Ingress)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                  <span>Competitor (Gap)</span>
                </div>
              </div>
              <span>Click a node to inspect</span>
            </div>

          </motion.div>

          {/* Glassmorphic Node Inspector (Col Span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between bg-[#0A0F1D] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            
            {/* Top decorative gradient blur */}
            <div className="absolute -top-12 -right-12 w-44 h-44 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                  Platform Node Scanner v2.0
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider border ${
                  selectedNode.type === 'target' ? 'bg-orange-500/10 text-[#F26A1B] border-orange-500/25' :
                  selectedNode.type === 'competitor' ? 'bg-red-500/10 text-red-400 border-red-500/25' :
                  'bg-emerald-500/10 text-emerald-400 border-emerald-500/25'
                }`}>
                  {selectedNode.type}
                </span>
              </div>

              {/* Node Title */}
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                {selectedNode.label}
              </h3>
              <p className="text-xs font-mono text-[#F26A1B] mt-1 font-bold">
                {selectedNode.sublabel}
              </p>

              {/* Authority Progress Gauge block */}
              <div className="mt-6 border-y border-slate-800/80 py-5 space-y-4">
                
                {/* Visual Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      Domain Authority (DA)
                    </span>
                    <span className="text-sm font-mono font-extrabold text-[#F26A1B]">
                      {selectedNode.da} / 100
                    </span>
                  </div>
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${selectedNode.da}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="bg-gradient-to-r from-[#F26A1B] to-amber-500 h-full rounded-full"
                    />
                  </div>
                </div>

                {/* Grid Parameters */}
                <div className="grid grid-cols-2 gap-4 pt-1">
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Est. Monthly Traffic</span>
                    <div className="text-sm font-sans font-bold text-slate-200 mt-0.5">{selectedNode.traffic}</div>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-slate-400 uppercase">Index Priority</span>
                    <div className="text-sm font-sans font-bold text-slate-200 mt-0.5">{selectedNode.difficulty}</div>
                  </div>
                </div>

              </div>

              {/* Node Long Description */}
              <p className="text-xs text-slate-300 leading-relaxed font-sans mt-5">
                {selectedNode.description}
              </p>

              {/* Custom AI generated advice badge */}
              <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-800/80 mt-5 relative overflow-hidden">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[#F26A1B]" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-orange-400">
                    Corda AI Insight
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedNode.actionTip}
                </p>
              </div>

            </div>

            {/* Dynamic Interactive Action Simulator Panel */}
            <div className="mt-8 pt-5 border-t border-slate-800/80">
              <AnimatePresence mode="wait">
                {!isBoosting && !boostCompleted && (
                  <motion.button 
                    key="action-idle"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    onClick={triggerBoostSimulation}
                    className="w-full bg-[#F26A1B] hover:bg-orange-600 text-white font-sans font-semibold text-xs sm:text-sm py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/10 cursor-pointer"
                  >
                    <span>
                      {selectedNode.type === 'target' ? 'Boost Domain Integrity' :
                       selectedNode.type === 'publisher' ? 'Verify Direct Backlink' :
                       'Simulate Intercept Strategy'}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white/95" />
                  </motion.button>
                )}

                {isBoosting && (
                  <motion.div 
                    key="action-boosting"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-2 font-mono"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <div className="flex items-center gap-1.5">
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#F26A1B]" />
                        <span>Running active authority calculations...</span>
                      </div>
                      <span>{boostProgress}%</span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                      <div 
                        style={{ width: `${boostProgress}%` }}
                        className="bg-[#F26A1B] h-full rounded-full transition-all duration-100"
                      />
                    </div>
                  </motion.div>
                )}

                {boostCompleted && (
                  <motion.div 
                    key="action-completed"
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-mono">
                        Sequence Synchronized
                      </h4>
                      <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                        {selectedNode.type === 'target' ? 'Primary core credentials maximized. Projected Domain Authority boosted +3!' :
                         selectedNode.type === 'publisher' ? 'Backlink synchronization completed. Safe search crawl path validated.' :
                         'Competitor link nodes successfully intercepted. Outbound indexing vector established!'}
                      </p>
                      <button
                        onClick={() => setBoostCompleted(false)}
                        className="mt-3 text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer hover:underline"
                      >
                        <RefreshCw className="w-3 h-3" />
                        <span>Run sync again</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
