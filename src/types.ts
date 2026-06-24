export interface Publisher {
  id: string;
  name: string;
  url: string;
  category: 'Tech' | 'Finance' | 'SaaS' | 'Health' | 'Lifestyle' | 'Enterprise';
  da: number; // Domain Authority
  traffic: string; // Monthly traffic
  tat: string; // Turnaround time
  price: number; // Placement cost
  trend: 'up' | 'stable' | 'down';
  featuredReason: string;
}

export interface CompetitorRank {
  domain: string;
  da: number;
  backlinksCount: number;
  organicKeywords: string;
  authorityGap: number;
  topPerformingPage: string;
  status: 'critical' | 'alert' | 'monitored';
}

export interface Campaign {
  id: string;
  name: string;
  publisherName: string;
  category: string;
  type: 'Guest Post' | 'Editorial Link' | 'Niche Edit' | 'Brand Feature';
  status: 'Analyzing' | 'Pitching' | 'Drafting' | 'In Review' | 'Scheduled' | 'Live';
  progress: number; // Percentage
  dateCreated: string;
  daUplift: number;
}

export interface PRStrategy {
  id: string;
  topic: string;
  coreHook: string;
  targetPublications: string[];
  suggestedTactics: string[];
  estimatedReach: string;
  projectedDaUplift: number;
}

export interface NetworkNode {
  id: string;
  label: string;
  type: 'root' | 'publisher' | 'competitor' | 'target';
  val: number; // visual size weight
  da: number;
  x: number;
  y: number;
  status?: string;
}

export interface NetworkEdge {
  source: string;
  target: string;
  weight: number; // thickness or link strength
  animated?: boolean;
}
