import { Publisher, CompetitorRank, Campaign, PRStrategy, NetworkNode, NetworkEdge } from './types';

export const publishersData: Publisher[] = [
  {
    id: 'pub-1',
    name: 'TechSpectrum',
    url: 'techspectrum.io',
    category: 'Tech',
    da: 84,
    traffic: '2.4M/mo',
    tat: '4 days',
    price: 450,
    trend: 'up',
    featuredReason: 'High organic engagement with software engineering demographics.'
  },
  {
    id: 'pub-2',
    name: 'VenturePulse',
    url: 'venturepulse.co',
    category: 'Finance',
    da: 78,
    traffic: '950K/mo',
    tat: '6 days',
    price: 600,
    trend: 'up',
    featuredReason: 'Premium investor network and startup analysis platform.'
  },
  {
    id: 'pub-3',
    name: 'SaaSJournal',
    url: 'saasjournal.net',
    category: 'SaaS',
    da: 72,
    traffic: '480K/mo',
    tat: '3 days',
    price: 320,
    trend: 'stable',
    featuredReason: 'Highly targeted for B2B executives and product managers.'
  },
  {
    id: 'pub-4',
    name: 'FinTech Ledger',
    url: 'fintechledger.org',
    category: 'Finance',
    da: 81,
    traffic: '1.2M/mo',
    tat: '5 days',
    price: 550,
    trend: 'up',
    featuredReason: 'Reputable reporting on decentralized finance and digital banking.'
  },
  {
    id: 'pub-5',
    name: 'CloudNative Insight',
    url: 'cloudnativeinsight.com',
    category: 'Enterprise',
    da: 69,
    traffic: '310K/mo',
    tat: '2 days',
    price: 280,
    trend: 'stable',
    featuredReason: 'Direct readership of DevOps and cloud architects.'
  },
  {
    id: 'pub-6',
    name: 'MacroGrowth',
    url: 'macrogrowth.com',
    category: 'Enterprise',
    da: 75,
    traffic: '820K/mo',
    tat: '7 days',
    price: 490,
    trend: 'up',
    featuredReason: 'Renowned for mid-market business consulting content.'
  },
  {
    id: 'pub-7',
    name: 'DevOps Standard',
    url: 'devopsstandard.org',
    category: 'Tech',
    da: 66,
    traffic: '220K/mo',
    tat: '3 days',
    price: 240,
    trend: 'stable',
    featuredReason: 'Technical community with high content retention rates.'
  },
  {
    id: 'pub-8',
    name: 'Digital Capital',
    url: 'digitalcapital.com',
    category: 'Finance',
    da: 86,
    traffic: '3.8M/mo',
    tat: '8 days',
    price: 850,
    trend: 'up',
    featuredReason: 'Global reach targeting private equity and growth stage innovators.'
  }
];

export const competitorsData: CompetitorRank[] = [
  {
    domain: 'competitor-alpha.com',
    da: 82,
    backlinksCount: 124500,
    organicKeywords: '94.2K',
    authorityGap: 16,
    topPerformingPage: '/solutions/enterprise-cloud',
    status: 'critical'
  },
  {
    domain: 'competitor-beta.io',
    da: 74,
    backlinksCount: 68100,
    organicKeywords: '41.5K',
    authorityGap: 8,
    topPerformingPage: '/pricing/compare-tools',
    status: 'alert'
  },
  {
    domain: 'competitor-gamma.co',
    da: 68,
    backlinksCount: 34200,
    organicKeywords: '28.9K',
    authorityGap: 2,
    topPerformingPage: '/guides/saas-scaling',
    status: 'monitored'
  },
  {
    domain: 'competitor-delta.net',
    da: 62,
    backlinksCount: 19800,
    organicKeywords: '14.2K',
    authorityGap: -4, // You are ahead
    topPerformingPage: '/blog/why-optimize-authority',
    status: 'monitored'
  }
];

export const initialCampaigns: Campaign[] = [
  {
    id: 'camp-1',
    name: 'Enterprise AI Launch Feature',
    publisherName: 'TechSpectrum',
    category: 'Tech',
    type: 'Editorial Link',
    status: 'Live',
    progress: 100,
    dateCreated: 'June 10, 2026',
    daUplift: 4.2
  },
  {
    id: 'camp-2',
    name: 'Q3 Cloud Scaling Op-Ed',
    publisherName: 'SaaSJournal',
    category: 'SaaS',
    type: 'Guest Post',
    status: 'In Review',
    progress: 85,
    dateCreated: 'June 15, 2026',
    daUplift: 2.8
  },
  {
    id: 'camp-3',
    name: 'Fintech Security Authority Pitch',
    publisherName: 'FinTech Ledger',
    category: 'Finance',
    type: 'Brand Feature',
    status: 'Drafting',
    progress: 40,
    dateCreated: 'June 20, 2026',
    daUplift: 3.5
  },
  {
    id: 'camp-4',
    name: 'Modern Devops Leadership Bylined Article',
    publisherName: 'CloudNative Insight',
    category: 'Enterprise',
    type: 'Editorial Link',
    status: 'Pitching',
    progress: 20,
    dateCreated: 'June 22, 2026',
    daUplift: 1.9
  }
];

export const initialStrategies: PRStrategy[] = [
  {
    id: 'strat-1',
    topic: 'Sustainable Enterprise AI Scaling',
    coreHook: 'Why 82% of CTOs underestimate the compute tax of custom LLMs—and the sustainable cloud architectures resolving it.',
    targetPublications: ['TechSpectrum', 'CloudNative Insight'],
    suggestedTactics: [
      'Publish original benchmarking report with downloadable dataset.',
      'Schedule exclusive executive panels with Cloud Native foundation members.',
      'Distribute high-relevance backlink inserts via technical community newsletters.'
    ],
    estimatedReach: '120K technical buyers',
    projectedDaUplift: 5.5
  },
  {
    id: 'strat-2',
    topic: 'The Decentralized CFO Paradigm',
    coreHook: 'How treasury management is automating regulatory compliance using hybrid smart ledger APIs.',
    targetPublications: ['FinTech Ledger', 'VenturePulse'],
    suggestedTactics: [
      'Co-author research brief with leading fintech policy group.',
      'Execute continuous PR pitch campaign centering around CFO treasury trends.',
      'Acquire authority assets from premium corporate finance portals.'
    ],
    estimatedReach: '85K financial executives',
    projectedDaUplift: 4.8
  },
  {
    id: 'strat-3',
    topic: 'SaaS Churn Mitigation in High-Interest Climates',
    coreHook: 'Micro-retention engineering: The invisible UI tweaks saving mid-market SaaS companies millions in recurring revenue.',
    targetPublications: ['SaaSJournal', 'MacroGrowth'],
    suggestedTactics: [
      'Create high-relevance infographics displaying micro-interaction retention metrics.',
      'Place opinion leadership editorial bylines highlighting real customer case studies.',
      'Initiate podcast guest tours for founding engineering team.'
    ],
    estimatedReach: '200K B2B product owners',
    projectedDaUplift: 6.2
  }
];

// High fidelity mock network topology nodes representing links to client-domain (corda-site.com)
// Structured to display cleanly in a responsive, customizable SVG viewport
export const initialNetworkNodes: NetworkNode[] = [
  { id: 'target', label: 'Corda.co (You)', type: 'target', val: 28, da: 66, x: 300, y: 200, status: 'Active' },
  
  // Competitors
  { id: 'comp-1', label: 'competitor-alpha.com', type: 'competitor', val: 22, da: 82, x: 520, y: 110, status: 'Dominant' },
  { id: 'comp-2', label: 'competitor-beta.io', type: 'competitor', val: 18, da: 74, x: 500, y: 310, status: 'Scaling' },
  
  // Publishers (Corda partners delivering links)
  { id: 'pub-techspectrum', label: 'techspectrum.io', type: 'publisher', val: 16, da: 84, x: 120, y: 80, status: 'Linked' },
  { id: 'pub-venturepulse', label: 'venturepulse.co', type: 'publisher', val: 15, da: 78, x: 100, y: 220, status: 'Linked' },
  { id: 'pub-saasjournal', label: 'saasjournal.net', type: 'publisher', val: 14, da: 72, x: 140, y: 340, status: 'Linked' },
  { id: 'pub-fintech', label: 'fintechledger.org', type: 'publisher', val: 16, da: 81, x: 280, y: 60, status: 'Linked' },
  { id: 'pub-cloudnative', label: 'cloudnativeinsight.com', type: 'publisher', val: 13, da: 69, x: 320, y: 340, status: 'Linked' },
  { id: 'pub-macrogrowth', label: 'macrogrowth.com', type: 'publisher', val: 14, da: 75, x: 440, y: 200, status: 'Monitored' },
];

export const initialNetworkEdges: NetworkEdge[] = [
  // Links from publishers to Target (Active placements)
  { source: 'pub-techspectrum', target: 'target', weight: 4, animated: true },
  { source: 'pub-venturepulse', target: 'target', weight: 3, animated: true },
  { source: 'pub-saasjournal', target: 'target', weight: 2, animated: true },
  { source: 'pub-fintech', target: 'target', weight: 4, animated: true },
  { source: 'pub-cloudnative', target: 'target', weight: 1, animated: true },
  
  // Competitor link structure
  { source: 'pub-techspectrum', target: 'comp-1', weight: 2, animated: false },
  { source: 'pub-fintech', target: 'comp-1', weight: 3, animated: false },
  { source: 'pub-macrogrowth', target: 'comp-1', weight: 4, animated: false },
  { source: 'pub-macrogrowth', target: 'comp-2', weight: 2, animated: false },
  { source: 'pub-venturepulse', target: 'comp-2', weight: 3, animated: false },
];
