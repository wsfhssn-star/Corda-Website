import { useState } from 'react';
import { motion } from 'motion/react';
import { initialNetworkNodes, initialNetworkEdges } from '../mockData';
import { NetworkNode } from '../types';
import { 
  Network, 
  Info, 
  Zap, 
  Link2, 
  ArrowUpRight, 
  Layers, 
  ShieldCheck, 
  Sparkles,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

export default function NetworkTopology() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('target');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const selectedNode = initialNetworkNodes.find(n => n.id === selectedNodeId) || initialNetworkNodes[0];

  // Helper to check if node or edge should be highlighted
  const isNodeHighlighted = (nodeId: string) => {
    if (hoveredNodeId) {
      if (nodeId === hoveredNodeId) return true;
      // Check if there's an edge between hovered node and this node
      return initialNetworkEdges.some(e => 
        (e.source === hoveredNodeId && e.target === nodeId) || 
        (e.source === nodeId && e.target === hoveredNodeId)
      );
    }
    return nodeId === selectedNodeId;
  };

  const getEdgeStyle = (edge: typeof initialNetworkEdges[0]) => {
    const isRelatedToHover = hoveredNodeId && (edge.source === hoveredNodeId || edge.target === hoveredNodeId);
    const isRelatedToSelect = !hoveredNodeId && (edge.source === selectedNodeId || edge.target === selectedNodeId);
    
    if (isRelatedToHover || isRelatedToSelect) {
      return {
        stroke: edge.animated ? '#f25c05' : '#0f172a',
        strokeWidth: edge.weight + 1.5,
        opacity: 1
      };
    }
    
    return {
      stroke: '#cbd5e1',
      strokeWidth: edge.weight,
      opacity: hoveredNodeId || selectedNodeId ? 0.35 : 0.6
    };
  };

  const getNodeColor = (type: string, isHighlighted: boolean) => {
    if (type === 'target') {
      return isHighlighted ? 'fill-brand-orange stroke-brand-orange/30' : 'fill-brand-dark stroke-slate-200';
    }
    if (type === 'competitor') {
      return isHighlighted ? 'fill-rose-500 stroke-rose-200' : 'fill-slate-400 stroke-slate-200';
    }
    return isHighlighted ? 'fill-brand-orange stroke-brand-orange/20' : 'fill-emerald-500 stroke-slate-100';
  };

  return (
    <section id="network-section" className="py-24 sm:py-32 bg-slate-50/50 border-y border-slate-100 relative overflow-hidden">
      
      {/* Background visual accents */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-100/80 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-5">
            <Network className="w-3.5 h-3.5" />
            Enterprise Infrastructure
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-brand-dark leading-[1.15]">
            Interactive Network Topology
          </h2>
          <p className="text-lg text-brand-muted mt-5 font-sans leading-relaxed">
            Visualize structural authority flow in real-time. Map the competitive search ecosystem, isolate high-DA nodes, and intercept high-impact link pathing.
          </p>
        </motion.div>

        {/* Main Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Interactive Topology Graph Area (Col Span 7) */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 flex flex-col justify-between relative overflow-hidden min-h-[480px]"
          >
            
            {/* Top Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 z-10 border-b border-slate-100 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-mono font-medium text-slate-500 uppercase tracking-wider">Live Pathing State: ACTIVE</span>
              </div>
              
              <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-100">
                <button 
                  onClick={() => setCategoryFilter('all')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${categoryFilter === 'all' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-500 hover:text-brand-dark'}`}
                >
                  All Nodes
                </button>
                <button 
                  onClick={() => setCategoryFilter('high-da')}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${categoryFilter === 'high-da' ? 'bg-white text-brand-dark shadow-sm' : 'text-slate-500 hover:text-brand-dark'}`}
                >
                  High Authority (DA &gt; 75)
                </button>
              </div>
            </div>

            {/* Actual SVG Interactive Vector Field */}
            <div className="relative flex-1 flex items-center justify-center min-h-[360px] cursor-crosshair">
              
              {/* Responsive SVG Container */}
              <svg 
                viewBox="0 0 640 400" 
                className="w-full h-full max-w-full select-none"
              >
                <defs>
                  {/* Glowing Orange Pulse Gradient */}
                  <radialGradient id="glow-orange" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#f25c05" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#f25c05" stopOpacity="0" />
                  </radialGradient>
                  
                  {/* Shadow Filters for premium depth */}
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="4" stdDeviation="5" floodColor="#0f172a" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* Draw Connection Edges */}
                {initialNetworkEdges.map((edge, index) => {
                  const sourceNode = initialNetworkNodes.find(n => n.id === edge.source);
                  const targetNode = initialNetworkNodes.find(n => n.id === edge.target);
                  
                  if (!sourceNode || !targetNode) return null;
                  
                  const isFiltered = categoryFilter === 'high-da' && 
                    (sourceNode.da <= 75 || targetNode.da <= 75) && 
                    sourceNode.type !== 'target' && targetNode.type !== 'target';
                    
                  if (isFiltered) return null;

                  const edgeProps = getEdgeStyle(edge);

                  return (
                    <g key={`edge-${index}`}>
                      {/* Base connection line */}
                      <line
                        x1={sourceNode.x}
                        y1={sourceNode.y}
                        x2={targetNode.x}
                        y2={targetNode.y}
                        stroke={edgeProps.stroke}
                        strokeWidth={edgeProps.strokeWidth}
                        opacity={edgeProps.opacity}
                        className="transition-all duration-300"
                      />
                      
                      {/* Animated Authority Pulses sliding towards target */}
                      {edge.animated && (
                        <circle
                          r="3.5"
                          fill="#f25c05"
                          className="animate-pulse"
                        >
                          <animateMotion
                            dur={`${8 - edge.weight * 1.5}s`}
                            repeatCount="indefinite"
                            path={`M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`}
                          />
                        </circle>
                      )}
                    </g>
                  );
                })}

                {/* Draw Node Elements */}
                {initialNetworkNodes.map((node) => {
                  const isFiltered = categoryFilter === 'high-da' && node.da <= 75 && node.type !== 'target';
                  if (isFiltered) return null;

                  const isHighlighted = isNodeHighlighted(node.id);
                  const isSelected = node.id === selectedNodeId;

                  return (
                    <g 
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      className="cursor-pointer group"
                      onClick={() => setSelectedNodeId(node.id)}
                      onMouseEnter={() => setHoveredNodeId(node.id)}
                      onMouseLeave={() => setHoveredNodeId(null)}
                    >
                      {/* Glow Outer Shell on hover/selection */}
                      {isHighlighted && (
                        <circle
                          r={node.val + 20}
                          className="fill-orange-100/40 stroke-none animate-pulse-slow"
                        />
                      )}

                      {/* Base Circle Node */}
                      <circle
                        r={node.val}
                        className={`${getNodeColor(node.type, isHighlighted)} transition-all duration-300 stroke-2`}
                        filter="url(#shadow)"
                      />

                      {/* Visual core for Target/Corda node */}
                      {node.type === 'target' && (
                        <circle
                          r="5"
                          className="fill-white"
                        />
                      )}

                      {/* Text Label */}
                      <text
                        y={node.val + 16}
                        textAnchor="middle"
                        className={`font-mono text-[10px] font-semibold transition-colors duration-200 ${
                          isSelected ? 'fill-brand-orange font-bold text-xs' : 'fill-slate-600 group-hover:fill-brand-dark'
                        }`}
                      >
                        {node.label}
                      </text>

                      {/* Tiny DA indicator floating next to it */}
                      <rect
                        x={node.val - 4}
                        y={-node.val - 12}
                        width="24"
                        height="12"
                        rx="3"
                        className={`${isSelected ? 'fill-brand-orange text-white' : 'fill-slate-100 text-slate-500'} stroke-none`}
                      />
                      <text
                        x={node.val + 8}
                        y={-node.val - 3}
                        textAnchor="middle"
                        className="font-mono text-[8px] font-bold fill-current"
                      >
                        {node.da}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Float Tutorial Tooltip */}
              <div className="absolute bottom-4 left-4 bg-slate-900/95 backdrop-blur-md rounded-xl py-2 px-3 border border-slate-800 text-white flex items-center gap-2 pointer-events-none">
                <Info className="w-3.5 h-3.5 text-brand-orange" />
                <span className="text-[11px] font-medium text-slate-200">Click any node to inspect authority characteristics</span>
              </div>
            </div>

            {/* Bottom Status Legend */}
            <div className="border-t border-slate-100 pt-4 flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-brand-dark border border-slate-200" />
                  <span className="text-[11px] font-semibold text-slate-600 uppercase">Corda Client</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-semibold text-slate-600 uppercase">Publisher (Link Source)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-slate-400" />
                  <span className="text-[11px] font-semibold text-slate-600 uppercase">Competitor Asset</span>
                </div>
              </div>
              
              <div className="text-[11px] font-mono text-slate-400 font-medium">6,410 Pathing Coordinates calculated</div>
            </div>

          </motion.div>

          {/* Node Inspector Sidebar (Col Span 5) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col justify-between bg-brand-dark text-white rounded-3xl p-8 border border-slate-800 shadow-2xl relative overflow-hidden"
          >
            
            {/* Top decorative texture */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Segment Indicator */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-mono tracking-wider text-slate-400 uppercase font-bold">Node Inspector v1.02</span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  selectedNode.type === 'target' ? 'bg-orange-500/20 text-brand-orange border border-orange-500/30' :
                  selectedNode.type === 'competitor' ? 'bg-red-500/20 text-red-400 border border-red-500/30' :
                  'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {selectedNode.type}
                </span>
              </div>

              {/* Big Domain Name & DA */}
              <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                {selectedNode.label}
              </h3>
              
              <div className="flex items-center gap-6 mt-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Domain Authority</div>
                  <div className="text-3xl font-display font-bold text-brand-orange mt-1">{selectedNode.da}</div>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Link Strength</div>
                  <div className="text-3xl font-display font-bold text-white mt-1">
                    {selectedNode.type === 'target' ? '66.4 (Core)' : 
                     selectedNode.type === 'competitor' ? 'High Impact' : 'Premium'}
                  </div>
                </div>
              </div>

              {/* Parameters details */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-xs text-slate-400 font-medium">Link Status</span>
                  <span className="text-xs text-slate-200 font-mono font-bold">{selectedNode.status || 'Monitored'}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-xs text-slate-400 font-medium">Flow Direction</span>
                  <span className="text-xs text-slate-200 font-mono font-bold">
                    {selectedNode.type === 'target' ? 'Ingress flow only' : 
                     selectedNode.type === 'competitor' ? 'Egress (Interceptable)' : 'Outbound link inject'}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-800/50">
                  <span className="text-xs text-slate-400 font-medium">Syndication Velocity</span>
                  <span className="text-xs text-slate-200 font-mono font-bold">12.4x baseline</span>
                </div>
              </div>

              {/* Smart AI Action Hook advice */}
              <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800/80 mt-8">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-brand-orange" />
                  <span className="text-xs font-semibold uppercase text-brand-orange font-mono tracking-wider">Corda Strategy Recommendation</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {selectedNode.type === 'target' ? 
                    'Optimize domain footprint further by securing references on techspectrum.io and venturepulse.co. This is projected to close your organic authority gap with competitor-alpha.com by 42%.' :
                   selectedNode.type === 'competitor' ? 
                    `This competitor has secured authoritative linkages from macrogrowth.com. Intercept this link placement by launching an AI-targeted PR strategy outlining a similar SaaS scaling angle.` :
                    `Fully verified link node. Ideal for B2B search visibility. Purchase a placement immediately on SaaSJournal or similar Tech domains to increase target domain velocity.`
                  }
                </p>
              </div>
            </div>

            {/* CTA action button inside Sidebar */}
            <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between">
              <button 
                onClick={() => {
                  const element = document.getElementById('pricing-section');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full bg-brand-orange hover:bg-orange-600 text-white font-medium text-xs sm:text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 transition-colors duration-300"
              >
                {selectedNode.type === 'competitor' ? 'Intercept Competitor Link' : 'Secure Placement Node'}
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
