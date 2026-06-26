import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  Globe, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  Copy, 
  Check, 
  Send, 
  Sliders, 
  TrendingUp, 
  FileText, 
  RefreshCw, 
  ChevronRight, 
  Layers, 
  BarChart3, 
  Loader2,
  AlertCircle
} from 'lucide-react';

interface CampaignPreset {
  domain: string;
  brandName: string;
  focus: string;
  traffic: string;
  da: number;
  competitorGap: string;
  campaigns: Array<{
    id: string;
    title: string;
    hook: string;
    audience: string;
    outlets: string[];
    anchorText: string;
    keywords: string[];
    predictedUplift: string;
    pitches: Record<string, string>; // Record of tone -> pitch text
  }>;
}

const PRESETS: Record<string, CampaignPreset> = {
  'notion.so': {
    domain: 'notion.so',
    brandName: 'Notion',
    focus: 'Connected Workspaces & Wiki Docs',
    traffic: '35M/mo',
    da: 89,
    competitorGap: 'Atlassian Confluence (Enterprise Share)',
    campaigns: [
      {
        id: 'notion-intercept',
        title: 'Confluence Intercept: Moving Heavy Wikis to the Edge',
        hook: 'Why fast-moving engineering hubs are migrating from Confluence silos to centralized docs.',
        audience: 'VP of Engineering, CTOs, Tech Leads',
        outlets: ['TechCrunch', 'Hacker News', 'InfoQ'],
        anchorText: 'Confluence to Notion migration kit',
        keywords: ['wiki software', 'connected workspace', 'engineering docs'],
        predictedUplift: '+4.5 DA Uplift',
        pitches: {
          analytical: `Subject: Data: Why engineering teams are abandoning Confluence\n\nHi [Editor_Name],\n\nI've been tracking software workspace migrations and put together a data-backed study showing that engineering teams are experiencing a 35% velocity drag due to traditional wiki silos.\n\nWe analyzed over 400 modern teams who completed a Confluence to Notion migration, showing a 3x increase in cross-department search speeds and doc updates.\n\nI'd love to write a technical editorial on how modern, connected workspace models are changing developer onboarding velocities for your readers. Let me know if you are open to reviewing the draft.\n\nBest,\n[Your Name]`,
          bold: `Subject: The death of the traditional company wiki\n\nHi [Editor_Name],\n\nTraditional company wikis are where documents go to die. Heavy, siloed platforms like Confluence are slowing down high-growth engineering teams in an era where software speed is everything.\n\nWe are launching a new blueprint showing how modern startups are treating documentation as live code—centralizing everything in collaborative workspaces.\n\nWould your readers be interested in an exclusive piece exploring why leading tech companies are migrating their entire knowledge hubs to unified, markdown-first workspaces?\n\nCheers,\n[Your Name]`,
          expert: `Subject: Technical Analysis: Optimizing knowledge sharing in high-throughput dev teams\n\nHi [Editor_Name],\n\nIn engineering organizations, developer velocity is often throttled by documentation friction. Traditional enterprise wikis introduce context-switching costs that directly impact sprint cycles.\n\nOur latest engineering study evaluates the developer experience of unified knowledge portals, detailing the architecture of a seamless Confluence-to-Notion migration and its effect on systemic knowledge retention.\n\nI’d love to submit this deep dive as a guest editorial for your engineering leadership segment. Let me know your thoughts.\n\nRegards,\n[Your Name]`
        }
      },
      {
        id: 'notion-category',
        title: 'Document-as-Code: The Rise of Markdown-first Engineering',
        hook: 'Bridging the divide between code repositories and live product wikis.',
        audience: 'Product Managers, Engineering Directors',
        outlets: ['Smashing Magazine', 'The New Stack'],
        anchorText: 'markdown-first product documentation',
        keywords: ['markdown wiki', 'docs as code', 'product specs'],
        predictedUplift: '+3.2 DA Uplift',
        pitches: {
          analytical: `Subject: Case Study: Restructuring product specs to match Git workflows\n\nHi [Editor_Name],\n\nEngineering efficiency drops when product specifications live in disconnected Word docs or heavy portals. We recently mapped a new trend: Markdown-first documentation linked directly to development pipelines.\n\nOur analysis outlines how top teams use light, agile doc systems to align developers and non-technical staff seamlessly.\n\nI'd like to share a case study on this topic. Let me know if this aligns with your editorial calendar.\n\nBest,\n[Your Name]`,
          bold: `Subject: Why Word docs are killing developer alignment\n\nHi [Editor_Name],\n\nLet's face it: standard product specification documents are outdated. Developers refuse to read lengthy, stale manuals that don't match their coding reality.\n\nStartups are shifting to a 'Document-as-Code' philosophy—treating documentation with the same agility as software.\n\nI want to write a provocative piece on why treating your company wiki like a live repository is the ultimate competitive advantage. Let's talk.\n\nCheers,\n[Your Name]`,
          expert: `Subject: Guest Article: Aligning development sprints with documentation versioning\n\nHi [Editor_Name],\n\nMaintaining parity between product requirements and shipped code is a classic engineering coordination problem.\n\nThis piece explores how high-velocity software teams implement a 'Document-as-Code' pipeline—translating real-time specs into structured development guides without introducing administrative overhead.\n\nLet me know if this technical analysis would interest your dev manager audience.\n\nRegards,\n[Your Name]`
        }
      }
    ]
  },
  'stripe.com': {
    domain: 'stripe.com',
    brandName: 'Stripe',
    focus: 'Global Payment Infrastructure & Billing API',
    traffic: '52M/mo',
    da: 92,
    competitorGap: 'Adyen & Legacy Merchant Processors',
    campaigns: [
      {
        id: 'stripe-intercept',
        title: 'The Hidden Fees of Merchant Processing: Adyen vs API Billing',
        hook: 'An architectural and cost comparison of legacy processing networks vs API-first global billing engines.',
        audience: 'CFOs, Fintech Founders, VP of Finance',
        outlets: ['Forbes Fintech', 'VentureBeat', 'PYMNTS'],
        anchorText: 'global api payments cost analysis',
        keywords: ['payment gateway fees', 'multi-currency billing api', 'merchant accounts'],
        predictedUplift: '+5.1 DA Uplift',
        pitches: {
          analytical: `Subject: Data Study: The real cost of legacy merchant accounts\n\nHi [Editor_Name],\n\nMany expanding SaaS businesses lose up to 2.4% of top-line revenue to unoptimized merchant routing and hidden processing fees.\n\nWe completed an exhaustive billing analysis comparing traditional merchant processors like Adyen with developer-focused API billing models. The data reveals that dynamic payment routing saves enterprise startups an average of $42K per million processed.\n\nI'd love to write a data-driven breakdown of these hidden fees for your financial tech column.\n\nBest,\n[Your Name]`,
          bold: `Subject: The payment gateway fee racket\n\nHi [Editor_Name],\n\nMost software companies have no idea how much money they're throwing away on transaction routing. Legacy merchant processors hide complicated fees in confusing contracts, draining revenue.\n\nIt's time to expose these hidden tolls. We've built an open ledger showing how modern billing APIs are bypassing standard clearinghouse fees to put money back in founders' pockets.\n\nCan I write an exclusive piece exposing these legacy tolls for your readers?\n\nCheers,\n[Your Name]`,
          expert: `Subject: Technical Paper: Mitigating transaction churn with multi-clearinghouse routing\n\nHi [Editor_Name],\n\nFor enterprise platforms, payment failures represent a major source of involuntary user churn. Legacy billing systems lack the granular API control needed to dynamically reroute failed authorizations.\n\nThis editorial breaks down the mechanics of ledger routing APIs, showing how real-time, multi-clearinghouse fallbacks boost transaction success rates by up to 4.2% globally.\n\nWould your finance engineering audience appreciate a deep dive into these transaction routing mechanics?\n\nRegards,\n[Your Name]`
        }
      }
    ]
  },
  'linear.app': {
    domain: 'linear.app',
    brandName: 'Linear',
    focus: 'Keyboard-first Issue Tracking & Developer Velocity',
    traffic: '2.8M/mo',
    da: 71,
    competitorGap: 'Atlassian Jira (Enterprise Issue Tracking)',
    campaigns: [
      {
        id: 'linear-intercept',
        title: 'Bypassing Jira Bloat: How to Reclaim Sub-100ms Sprint Cycles',
        hook: 'How heavy, slow issue trackers are actively damaging engineering morale and sprint performance.',
        audience: 'CTOs, Engineering Managers, Product Leaders',
        outlets: ['The New Stack', 'Hacker News', 'InfoQ'],
        anchorText: 'sub-100ms issue tracking software',
        keywords: ['jira alternative', 'keyboard-first tracker', 'developer velocity'],
        predictedUplift: '+3.8 DA Uplift',
        pitches: {
          analytical: `Subject: Research: How issue tracker load times impact developer focus\n\nHi [Editor_Name],\n\nOur engineering study monitored 300 software developers and discovered that slow, heavy issue-tracking interfaces like Jira introduce an average of 42 minutes of context-switching focus drain per developer, weekly.\n\nBy moving to lightweight, sub-100ms keyboard-driven interfaces, team velocity improved by 14% with significantly fewer ticket bottlenecks.\n\nI'd love to share these findings and velocity charts with your developer audience. Let me know if you are interested.\n\nBest,\n[Your Name]`,
          bold: `Subject: Your issue tracker is making your developers slow and angry\n\nHi [Editor_Name],\n\nDevelopers hate Jira. It's slow, bloated, and forces engineers to spend hours playing project manager rather than writing actual code.\n\nWe are starting a movement to reclaim developer velocity. High-performance teams are dropping heavy enterprise legacy trackers in favor of hyper-fast, keyboard-driven software.\n\nLet’s write an article showing how bloated tools are destroying developer morale and what the future of fast tracking looks like.\n\nCheers,\n[Your Name]`,
          expert: `Subject: Article Proposal: Reducing transaction latency in team task databases\n\nHi [Editor_Name],\n\nDeveloper focus is easily disrupted by latency. In task management, database load times directly affect how engineers document their progress.\n\nThis article outlines the engineering architecture of keyboard-first task systems—highlighting how caching, optimistic UI updates, and local-first syncing are replacing heavy relational databases.\n\nI'd love to share this technical analysis with your system architecture readers.\n\nRegards,\n[Your Name]`
        }
      }
    ]
  },
  'figma.com': {
    domain: 'figma.com',
    brandName: 'Figma',
    focus: 'Collaborative Browser-Based Design Systems',
    traffic: '40M/mo',
    da: 91,
    competitorGap: 'Sketch & Legacy Desktop Layout Software',
    campaigns: [
      {
        id: 'figma-intercept',
        title: 'The Browser Advantage: Moving Layout Systems out of Desktop Silos',
        hook: 'Why traditional desktop layout programs lost to real-time multiplayer WebGL editors.',
        audience: 'Design Directors, Frontend Engineers, Founders',
        outlets: ['Smashing Magazine', 'UX Collective', 'Co.Design'],
        anchorText: 'browser multiplayer design software',
        keywords: ['collaborative layout tool', 'webgl design system', 'sketch to figma'],
        predictedUplift: '+4.8 DA Uplift',
        pitches: {
          analytical: `Subject: Report: The financial ROI of collaborative design systems\n\nHi [Editor_Name],\n\nDisconnected design files cause massive friction during developer handoffs. We analyzed over 200 design organizations and found that teams using browser-first, real-time collaborative design systems experience a 50% decrease in front-end styling revision cycles.\n\nI'd love to share a data-driven report on how browser-native workflows save digital agencies up to $80K per product cycle.\n\nBest,\n[Your Name]`,
          bold: `Subject: Desktop design files are dead\n\nHi [Editor_Name],\n\nSaving designs as '.sketch' or '.psd' files on a local desktop is a relic of the 2010s. Static files create friction, isolate designers, and ruin engineering alignment.\n\nStartups have shifted entirely to browser-based multiplayer canvasses, establishing design as a live, collaborative process.\n\nI want to write an article detailing why companies that still use static desktop files are losing the speed race. Let’s collaborate.\n\nCheers,\n[Your Name]`,
          expert: `Subject: Guest Post: Deep dive into web-native design token pipelines\n\nHi [Editor_Name],\n\nBridging the gap between static layout mockups and responsive React components is a perpetual workflow bottleneck.\n\nThis article details the technical pipeline for exporting cloud-native design tokens directly into CSS custom properties, automating developer handoffs and maintaining 100% design fidelity across devices.\n\nLet me know if this would be a fit for your engineering design section.\n\nRegards,\n[Your Name]`
        }
      }
    ]
  },
  'vercel.com': {
    domain: 'vercel.com',
    brandName: 'Vercel',
    focus: 'Frontend Cloud & Next.js Serverless Deployment',
    traffic: '18M/mo',
    da: 85,
    competitorGap: 'AWS Amplify & Legacy Devops Infrastructure',
    campaigns: [
      {
        id: 'vercel-intercept',
        title: 'Bypassing AWS Fatigue: Headless Git Deployments vs CloudFormation',
        hook: 'Why modern frontend teams are ditching raw cloud templates for serverless global edge networks.',
        audience: 'VP of Engineering, DevOps Leads, Headless Web Founders',
        outlets: ['InfoQ', 'Hacker News', 'The New Stack'],
        anchorText: 'serverless global edge cloud deployment',
        keywords: ['aws amplify alternative', 'git deployment pipeline', 'edge rendering'],
        predictedUplift: '+4.6 DA Uplift',
        pitches: {
          analytical: `Subject: Comparative Analysis: Developer hours spent on AWS vs Vercel\n\nHi [Editor_Name],\n\nTraditional DevOps pipelines require significant engineering hours just to maintain staging and preview environments. Our latest study shows startups spend an average of 18 hours per developer per month configuring AWS templates.\n\nMoving to headless, Git-triggered edge environments reduces this setup to zero, accelerating feature releases by up to 22%.\n\nI'd like to share these comparison models with your readers.\n\nBest,\n[Your Name]`,
          bold: `Subject: DevOps is dead for frontend developers\n\nHi [Editor_Name],\n\nNo frontend engineer should have to write complex YAML templates or manage secure virtual servers just to ship a landing page.\n\nThe future is serverless global edge rendering. We are entering an era where git push is the only DevOps command a frontend developer ever needs to know.\n\nCan I write an exclusive piece discussing how cloud-native edge architectures are dismantling traditional operations departments?\n\nCheers,\n[Your Name]`,
          expert: `Subject: Article: Streamlining preview deployments via Edge Middleware\n\nHi [Editor_Name],\n\nAs applications migrate to edge runtime models, managing secure testing environments on traditional cloud hosts becomes highly complex.\n\nThis article outlines the deployment architecture of edge-native preview environments—specifically how Edge Middleware can handle token validation and dynamic feature flags natively without server-side database bottlenecks.\n\nWould this analysis fit your advanced backend architectures queue?\n\nRegards,\n[Your Name]`
        }
      }
    ]
  }
};

export default function AICampaignGenerator() {
  const [urlInput, setUrlInput] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanLogs, setScanLogs] = useState<string[]>([]);
  const [scanProgress, setScanProgress] = useState(0);
  
  // Results State
  const [activePreset, setActivePreset] = useState<CampaignPreset | null>(null);
  const [activeTab, setActiveTab] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<'analytical' | 'bold' | 'expert'>('analytical');
  const [customKeywords, setCustomKeywords] = useState<string[]>([]);
  const [newKeyword, setNewKeyword] = useState('');
  const [editablePitch, setEditablePitch] = useState('');
  const [editableAnchor, setEditableAnchor] = useState('');

  // Interactive UI Simulation Feedback
  const [copied, setCopied] = useState(false);
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployStep, setDeployStep] = useState(0);
  const [deployLogs, setDeployLogs] = useState<string[]>([]);
  const [deployCompleted, setDeployCompleted] = useState(false);
  
  const resultsRef = useRef<HTMLDivElement>(null);

  const scanSteps = [
    { title: 'Connecting to target host...', log: 'Resolving DNS and establishing handshakes with secure edge servers...' },
    { title: 'Parsing brand copy & meta trees...', log: 'Extracting meta descriptions, H1 headings, and semantic keyword densities...' },
    { title: 'Mapping competitive authority gaps...', log: 'Scanning organic index performance against industry-leading rivals...' },
    { title: 'Synthesizing PR outreach profiles...', log: 'Matching high-traffic tech publishers with contextual anchor angles...' },
    { title: 'Generating AI pitches & structures...', log: 'Drafting multi-tone outreaches based on selected domain positioning...' }
  ];

  const handlePresetClick = (domain: string) => {
    setUrlInput(domain);
    startScanSequence(PRESETS[domain]);
  };

  const handleCustomGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput) return;

    // Clean URL input
    let cleanUrl = urlInput.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    if (!cleanUrl) return;

    // Check if it matches preset
    const lowerUrl = cleanUrl.toLowerCase();
    if (PRESETS[lowerUrl]) {
      startScanSequence(PRESETS[lowerUrl]);
      return;
    }

    // Generate custom dynamic campaign package
    const namePart = cleanUrl.split('.')[0];
    const brandName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    
    const customPackage: CampaignPreset = {
      domain: cleanUrl,
      brandName: brandName,
      focus: 'Enterprise Web Optimization & SaaS Automation',
      traffic: '240K - 500K/mo',
      da: 58,
      competitorGap: `${brandName} Competitor Hubs (SEO Traffic Share)`,
      campaigns: [
        {
          id: 'custom-intercept',
          title: `Interception Campaign: Bypassing Legacy ${brandName} Bottlenecks`,
          hook: `How modern SaaS networks are moving past traditional ${brandName} setups for higher cloud velocity.`,
          audience: 'IT Decision Makers, Engineering Leads, Founders',
          outlets: ['TechCrunch', 'The Next Stack', 'SaaS Journal'],
          anchorText: `${brandName} high-efficiency workflows`,
          keywords: [`${brandName.toLowerCase()} alternative`, `enterprise ${brandName.toLowerCase()}`, 'saas integration tools'],
          predictedUplift: '+4.2 DA Uplift',
          pitches: {
            analytical: `Subject: Data Study: Reclaiming lost hours in traditional ${brandName} structures\n\nHi [Editor_Name],\n\nWe recently completed a data study monitoring over 150 software engineering groups using standard ${brandName} setups.\n\nOur research shows that teams lose up to 14 engineering hours per month on manual sync configurations and legacy database latency. By automating these pathways, velocity increased by 18%.\n\nI would love to send over the full report and charts to see if you would consider publishing it for your readers.\n\nBest,\n[Your Name]`,
            bold: `Subject: Why legacy ${brandName} setups are holding back your engineering speed\n\nHi [Editor_Name],\n\nMost modern companies are wasting countless developer hours maintaining slow, legacy systems that don't scale. It's the ultimate productivity tax.\n\nWe are building a new standard showing how cloud-native developer pipelines are bypassing traditional database setups entirely.\n\nI’d love to write a guest piece on why your readers need to ditch manual pipelines to survive the speed race.\n\nCheers,\n[Your Name]`,
            expert: `Subject: Guest Article: Optimization architectures for high-throughput ${brandName} pipelines\n\nHi [Editor_Name],\n\nFor enterprise systems, operational friction inside database structures represents a major systemic barrier to delivery.\n\nThis paper discusses the core architectures of high-efficiency ${brandName} data pipelines, exploring how to eliminate synchronization latency without sacrificing data consistency.\n\nLet me know if this would be a relevant addition to your technical systems column.\n\nRegards,\n[Your Name]`
          }
        }
      ]
    };

    startScanSequence(customPackage);
  };

  const startScanSequence = (preset: CampaignPreset) => {
    // Reset previous states
    setIsScanning(true);
    setScanStep(0);
    setScanProgress(0);
    setScanLogs([]);
    setActivePreset(null);
    setDeployCompleted(false);
    setDeployLogs([]);

    // Step-by-step progress animation simulation
    let currentStep = 0;
    
    // Add logs periodically
    const logInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(logInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    const stepTimer = setInterval(() => {
      if (currentStep < scanSteps.length) {
        const stepIndex = currentStep;
        setScanStep(stepIndex);
        setScanLogs(prev => [...prev, `[Corda AI] ${scanSteps[stepIndex].title} - Done`, `  > ${scanSteps[stepIndex].log}`]);
        currentStep++;
      } else {
        clearInterval(stepTimer);
        setIsScanning(false);
        setActivePreset(preset);
        setActiveTab(preset.campaigns[0].id);
        setSelectedTone('analytical');
        setEditablePitch(preset.campaigns[0].pitches.analytical);
        setEditableAnchor(preset.campaigns[0].anchorText);
        setCustomKeywords(preset.campaigns[0].keywords);
        
        // Scroll to results seamlessly
        setTimeout(() => {
          resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
      }
    }, 900);
  };

  // Switch campaign tabs inside report
  const handleTabChange = (campaignId: string) => {
    if (!activePreset) return;
    const camp = activePreset.campaigns.find(c => c.id === campaignId);
    if (!camp) return;

    setActiveTab(campaignId);
    setEditablePitch(camp.pitches[selectedTone]);
    setEditableAnchor(camp.anchorText);
    setCustomKeywords(camp.keywords);
  };

  // Switch tone of draft
  const handleToneChange = (tone: 'analytical' | 'bold' | 'expert') => {
    if (!activePreset) return;
    const camp = activePreset.campaigns.find(c => c.id === activeTab);
    if (!camp) return;

    setSelectedTone(tone);
    
    // Quick flash/loader effect for "AI generation"
    const originalText = camp.pitches[tone];
    setEditablePitch('Generative engine loading revised tone...');
    setTimeout(() => {
      setEditablePitch(originalText);
    }, 300);
  };

  // Edit pitch text
  const handlePitchEdit = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditablePitch(e.target.value);
  };

  // Handle Clipboard Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(editablePitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Handle Add Keyword
  const handleAddKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyword.trim()) return;
    setCustomKeywords([...customKeywords, newKeyword.trim()]);
    setNewKeyword('');
  };

  // Handle Remove Keyword
  const handleRemoveKeyword = (index: number) => {
    setCustomKeywords(customKeywords.filter((_, i) => i !== index));
  };

  // Trigger Deployment Simulator
  const handleDeploy = () => {
    setIsDeploying(true);
    setDeployStep(0);
    setDeployCompleted(false);
    setDeployLogs(['[Outreach Core] Connecting securely to Corda Mailer servers...', '[Outreach Core] Parsing pitch data and verifying publisher domain settings...']);

    const steps = [
      'Authenticating target email accounts and security keys...',
      'Injecting dynamic anchor phrase and verifying canonical web paths...',
      'Calibrating drip frequency to meet publisher guidelines...',
      'Campaign registered. Enqueueing pitches for active outreach sequence!'
    ];

    let current = 0;
    const interval = setInterval(() => {
      if (current < steps.length) {
        const logIndex = current;
        setDeployLogs(prev => [...prev, `[Outreach Core] ${steps[logIndex]}`]);
        setDeployStep(logIndex + 1);
        current++;
      } else {
        clearInterval(interval);
        setIsDeploying(false);
        setDeployCompleted(true);
      }
    }, 1000);
  };

  const activeCampaignObj = activePreset?.campaigns.find(c => c.id === activeTab);

  return (
    <section id="ai-generator-section" className="py-24 sm:py-32 bg-[#06060A] border-y border-white/5 relative overflow-hidden text-white">
      
      {/* Decorative Radial AI Gradients */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none z-0" />
      
      {/* Elegant Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(249, 115, 22, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(249, 115, 22, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Core Segment Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-400 text-xs font-semibold tracking-wide uppercase mb-5"
          >
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            <span>Corda Labs AI Feature</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            AI Campaign Generator
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-slate-300 mt-4 leading-relaxed font-sans"
          >
            Instantly map structural domain gaps and reveal organic authority deficits. Input any live website or use a pre-scanned model to build customized, high-converting PR outreach sequences.
          </motion.p>
        </div>

        {/* Input Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#0A0F1D] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl relative"
        >
          {/* Accent glow corner */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-tr-3xl pointer-events-none" />

          <form onSubmit={handleCustomGenerate} className="space-y-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                Target Domain URL
              </label>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono text-sm">
                    https://
                  </span>
                  <input 
                    type="text" 
                    placeholder="yourstartup.com" 
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    disabled={isScanning}
                    className="w-full pl-20 pr-4 py-4 bg-slate-950/80 border border-white/15 focus:border-orange-500/60 focus:ring-1 focus:ring-orange-500/40 rounded-2xl text-white font-sans text-sm outline-none transition-all duration-200"
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
                    <Globe className="w-4 h-4 text-slate-500" />
                  </div>
                </div>
                
                <button 
                  type="submit"
                  disabled={isScanning || !urlInput}
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:from-slate-800 disabled:to-slate-900 disabled:text-slate-500 text-white font-display font-semibold text-sm rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/10 cursor-pointer shrink-0"
                >
                  {isScanning ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <span>Generate Campaign</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Presets Section */}
            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                Select a high-growth pre-scanned model for demonstration:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {Object.keys(PRESETS).map((key) => {
                  const preset = PRESETS[key];
                  const isCurrentlyPreset = activePreset?.domain === preset.domain;
                  return (
                    <button
                      key={preset.domain}
                      type="button"
                      disabled={isScanning}
                      onClick={() => handlePresetClick(preset.domain)}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-1.5 border cursor-pointer ${
                        isCurrentlyPreset 
                        ? 'bg-orange-500/20 border-orange-500 text-orange-400 shadow-inner' 
                        : 'bg-slate-900 hover:bg-slate-800/80 border-white/5 text-slate-300 hover:text-white'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {preset.domain}
                    </button>
                  );
                })}
              </div>
            </div>
          </form>

          {/* Active Scanning Terminal Interface */}
          <AnimatePresence>
            {isScanning && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-8 border-t border-white/10 pt-6 overflow-hidden"
              >
                <div className="bg-slate-950 rounded-2xl border border-white/10 p-5 space-y-4">
                  {/* Progress Header */}
                  <div className="flex justify-between items-center text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-4 h-4 text-orange-500 animate-pulse" />
                      <span className="font-bold text-slate-300">Corda DeepScan Engine Active</span>
                    </div>
                    <span className="text-orange-400 font-extrabold">{scanProgress}%</span>
                  </div>

                  {/* Progress Line */}
                  <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
                    <div 
                      style={{ width: `${scanProgress}%` }}
                      className="h-full bg-gradient-to-r from-orange-500 via-amber-500 to-emerald-400 rounded-full transition-all duration-100"
                    />
                  </div>

                  {/* Terminal Outputs */}
                  <div className="bg-slate-900/40 rounded-xl p-4 font-mono text-[11px] text-slate-400 space-y-1.5 min-h-[140px] max-h-[180px] overflow-y-auto">
                    {scanLogs.map((log, idx) => (
                      <div 
                        key={idx} 
                        className={`${
                          log.startsWith('  >') ? 'text-slate-500 italic pl-3' : 'text-emerald-400 font-semibold'
                        }`}
                      >
                        {log}
                      </div>
                    ))}
                    <div className="flex items-center gap-1.5 text-slate-500 italic">
                      <span className="animate-pulse">_</span>
                      <span>Crawling indices and preparing target metrics...</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

        {/* Generated Campaign Reports Area (Visible only when a preset or custom domain is loaded) */}
        <div ref={resultsRef} className="scroll-mt-12">
          <AnimatePresence>
            {activePreset && !isScanning && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-16 sm:mt-24 space-y-10"
              >
                
                {/* 1. Website Audit Overview Strip */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {/* Domain Authority card */}
                  <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/5 rounded-bl-full pointer-events-none" />
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      Domain Authority
                    </span>
                    <div className="flex items-baseline gap-2 mt-4">
                      <span className="text-4xl font-display font-extrabold text-white">
                        {activePreset.da}
                      </span>
                      <span className="text-xs font-mono text-emerald-400 font-bold">
                        /100 (Projected)
                      </span>
                    </div>
                    <div className="w-full bg-slate-900 h-1.5 rounded-full mt-3 overflow-hidden">
                      <div 
                        style={{ width: `${activePreset.da}%` }}
                        className="bg-orange-500 h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Monthly Organic Traffic */}
                  <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      Est. Monthly Traffic
                    </span>
                    <div className="flex items-baseline gap-1 mt-4">
                      <span className="text-3xl font-display font-extrabold text-white">
                        {activePreset.traffic}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] text-emerald-400 font-mono font-bold mt-3">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>STABLE RISING IN MARGINS</span>
                    </div>
                  </div>

                  {/* Focus Topic Category */}
                  <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      Semantic Core Focus
                    </span>
                    <div className="text-base font-sans font-extrabold text-white mt-4 line-clamp-1">
                      {activePreset.focus}
                    </div>
                    <div className="text-[9px] font-mono text-orange-400 font-bold mt-3 uppercase tracking-wider">
                      Targeting High Search Value
                    </div>
                  </div>

                  {/* Primary Competitor Deficit */}
                  <div className="bg-[#0A0F1D] border border-white/5 rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden">
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      Target Interception Rival
                    </span>
                    <div className="text-sm font-mono font-bold text-red-400 mt-4 line-clamp-1">
                      {activePreset.competitorGap}
                    </div>
                    <div className="text-[9px] font-mono text-slate-500 font-bold mt-3 uppercase">
                      Authority Deficit Gap Detected
                    </div>
                  </div>
                </div>

                {/* 2. Main Tabbed Campaign Builder */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  
                  {/* Left Sidebar Campaign Selectors (Col Span 4) */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="p-1">
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">
                        AI-Synthesized Campaigns:
                      </span>
                    </div>
                    
                    {activePreset.campaigns.map((camp) => {
                      const isSelected = activeTab === camp.id;
                      return (
                        <button
                          key={camp.id}
                          onClick={() => handleTabChange(camp.id)}
                          className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer flex flex-col ${
                            isSelected 
                            ? 'bg-gradient-to-br from-slate-900 to-slate-950 border-orange-500/50 shadow-xl' 
                            : 'bg-[#0A0F1D] border-white/5 hover:border-white/10'
                          }`}
                        >
                          {isSelected && (
                            <div className="absolute top-0 right-0 w-2 h-full bg-orange-500" />
                          )}
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <span className="text-xs font-mono font-bold text-orange-400 uppercase">
                              {camp.predictedUplift}
                            </span>
                            <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-orange-500 translate-x-1' : 'text-slate-600'}`} />
                          </div>
                          <h4 className="font-display font-bold text-sm text-white leading-snug">
                            {camp.title}
                          </h4>
                          <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                            {camp.hook}
                          </p>
                        </button>
                      );
                    })}

                    <div className="bg-slate-950 border border-white/5 p-5 rounded-2xl">
                      <div className="flex gap-2 items-center text-xs font-mono font-bold text-orange-400 uppercase tracking-wider mb-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Campaign Health Status</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Corda models target publishers using active DA metrics and verified outreach responsiveness. Calculated probability of response: <span className="text-emerald-400 font-bold">78%</span>.
                      </p>
                    </div>
                  </div>

                  {/* Right Main Customizer panel (Col Span 8) */}
                  {activeCampaignObj && (
                    <div className="lg:col-span-8 bg-[#0A0F1D] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl">
                      
                      {/* Interactive Section Top Banner */}
                      <div className="flex flex-wrap gap-4 items-center justify-between border-b border-white/10 pb-5 mb-6">
                        <div>
                          <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest font-bold">
                            Active Campaign Template Builder
                          </span>
                          <h3 className="font-display text-xl font-bold text-white mt-1">
                            {activeCampaignObj.title}
                          </h3>
                        </div>

                        {/* Tone Selector */}
                        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-white/10">
                          <span className="text-[10px] font-mono text-slate-400 px-2 font-bold uppercase">
                            Outreach Tone:
                          </span>
                          {(['analytical', 'bold', 'expert'] as const).map((tone) => (
                            <button
                              key={tone}
                              onClick={() => handleToneChange(tone)}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                                selectedTone === tone 
                                ? 'bg-orange-500 text-white shadow-md' 
                                : 'text-slate-400 hover:text-white hover:bg-white/5'
                              }`}
                            >
                              {tone}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Pitch Draft & Anchor text customization */}
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                        
                        {/* Custom Pitch Code Box (Col 7) */}
                        <div className="md:col-span-7 flex flex-col gap-2">
                          <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                            <span>Interactive Outreach Draft</span>
                            <button 
                              onClick={handleCopy}
                              className="text-xs text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-colors cursor-pointer"
                            >
                              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                              <span>{copied ? 'Copied' : 'Copy Pitch'}</span>
                            </button>
                          </div>
                          
                          <textarea
                            value={editablePitch}
                            onChange={handlePitchEdit}
                            rows={11}
                            className="w-full bg-slate-950/90 border border-white/10 focus:border-orange-500/30 rounded-2xl p-4 font-mono text-xs text-slate-300 outline-none leading-relaxed resize-none focus:ring-1 focus:ring-orange-500/20 transition-all"
                          />
                        </div>

                        {/* Custom Parameter Adjustment (Col 5) */}
                        <div className="md:col-span-5 space-y-6">
                          
                          {/* Anchor keyword edit */}
                          <div className="space-y-2">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                              Target Anchor Text Phrase
                            </span>
                            <input
                              type="text"
                              value={editableAnchor}
                              onChange={(e) => setEditableAnchor(e.target.value)}
                              className="w-full bg-slate-950 border border-white/5 rounded-xl px-3 py-2.5 text-xs font-mono text-orange-400 outline-none focus:border-orange-500/40"
                            />
                            <p className="text-[9px] text-slate-500 italic leading-snug">
                              This precise anchor will transfer maximum domain index equity from target publishers.
                            </p>
                          </div>

                          {/* Target Keywords list */}
                          <div className="space-y-3">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                              Associated Semantics (Keywords)
                            </span>
                            
                            <form onSubmit={handleAddKeyword} className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Add keyword..."
                                value={newKeyword}
                                onChange={(e) => setNewKeyword(e.target.value)}
                                className="flex-1 bg-slate-950 border border-white/5 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 outline-none focus:border-orange-500/40"
                              />
                              <button 
                                type="submit"
                                className="bg-orange-500/20 text-orange-400 border border-orange-500/20 px-2.5 rounded-lg text-xs font-mono font-bold hover:bg-orange-500/30 transition-all cursor-pointer"
                              >
                                Add
                              </button>
                            </form>

                            <div className="flex flex-wrap gap-1.5">
                              {customKeywords.map((kw, i) => (
                                <span 
                                  key={i} 
                                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-slate-950 border border-white/5 text-[10px] font-mono text-slate-300"
                                >
                                  {kw}
                                  <button 
                                    type="button" 
                                    onClick={() => handleRemoveKeyword(i)}
                                    className="text-red-400 hover:text-red-300 cursor-pointer text-[9px] font-bold"
                                  >
                                    ×
                                  </button>
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Target Publishers Match Box */}
                          <div className="bg-slate-950 border border-white/5 rounded-2xl p-4">
                            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2">
                              Target Press Outlets
                            </span>
                            <div className="flex flex-wrap gap-2">
                              {activeCampaignObj.outlets.map((outlet, i) => (
                                <span 
                                  key={i} 
                                  className="px-2.5 py-1 rounded bg-orange-500/5 border border-orange-500/10 text-[10px] font-sans font-bold text-orange-400"
                                >
                                  {outlet}
                                </span>
                              ))}
                            </div>
                          </div>

                        </div>

                      </div>

                      {/* Action trigger deck */}
                      <div className="border-t border-white/10 pt-6 mt-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-emerald-400 w-4.5 h-4.5" />
                          <span className="text-xs font-mono text-slate-300">
                            Pre-configured for direct execution via Corda Outreach Core.
                          </span>
                        </div>

                        <div className="flex gap-3 w-full sm:w-auto">
                          <button 
                            onClick={handleDeploy}
                            disabled={isDeploying || deployCompleted}
                            className="flex-1 sm:flex-initial px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 disabled:from-slate-800 disabled:to-slate-900 text-white font-display font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-orange-500/15 cursor-pointer"
                          >
                            {isDeploying ? (
                              <>
                                <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
                                <span>Deploying...</span>
                              </>
                            ) : deployCompleted ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-white" />
                                <span>Enqueued</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-3.5 h-3.5" />
                                <span>Deploy Outreach Queue</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                </div>

                {/* 3. Outreach Deployment Live Terminal Panel */}
                <AnimatePresence>
                  {(isDeploying || deployCompleted) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="bg-slate-950 border border-white/10 rounded-2xl p-5 space-y-4"
                    >
                      <div className="flex justify-between items-center text-xs font-mono">
                        <div className="flex items-center gap-2">
                          <Sliders className="w-4 h-4 text-orange-500 animate-pulse" />
                          <span className="font-bold text-slate-200">Active Queue Synchronization Pipeline</span>
                        </div>
                        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${deployCompleted ? 'bg-emerald-500/10 text-emerald-400' : 'bg-orange-500/10 text-orange-400'}`}>
                          {deployCompleted ? 'SEQUENCE ACTIVE' : 'PREPARING OUTREACH'}
                        </span>
                      </div>

                      <div className="font-mono text-[11px] text-slate-400 space-y-1 bg-slate-900/50 p-4 rounded-xl max-h-[140px] overflow-y-auto">
                        {deployLogs.map((log, idx) => (
                          <div 
                            key={idx} 
                            className={`${
                              idx === deployLogs.length - 1 && !deployCompleted ? 'text-orange-400 animate-pulse' : 'text-slate-300'
                            }`}
                          >
                            {log}
                          </div>
                        ))}
                        {deployCompleted && (
                          <div className="text-emerald-400 font-bold mt-2 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Outreach sequence established successfully. Dynamic link crawler tracking active!</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
