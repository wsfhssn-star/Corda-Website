import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { 
  Compass, 
  Search, 
  BarChart3, 
  Cpu, 
  Rocket, 
  TrendingUp, 
  Menu, 
  X, 
  ChevronDown, 
  Sparkles, 
  DollarSign, 
  Network, 
  Globe, 
  Layers, 
  BookOpen, 
  ShieldCheck,
  Calendar,
  Zap
} from 'lucide-react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<'platform' | 'solutions' | 'resources' | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mobile sub-menus state
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navPlatform = [
    { name: 'Authority Intelligence', desc: 'Continuous competitor tracking & gap analysis', icon: BarChart3 },
    { name: 'Opportunity Discovery', desc: 'Scan search space for placement opportunities', icon: Search },
    { name: 'Publisher Marketplace', desc: 'Verify, browse and secure placements safely', icon: Globe },
    { name: 'AI PR Strategy', desc: 'Engineered angles and custom content hooks', icon: Cpu },
  ];

  const navSolutions = [
    { name: 'For Enterprise SaaS', desc: 'Capture dominant category share & brand authority', icon: Layers },
    { name: 'For High-Growth Brands', desc: 'Rapid domain authority escalation frameworks', icon: Rocket },
    { name: 'For Venture Portfolios', desc: 'Platform-level authority management', icon: Network },
  ];

  const navResources = [
    { name: 'Corda Ledger Docs', desc: 'Protocol specs & secure node settlement API', icon: BookOpen },
    { name: 'Case Studies', desc: 'How venture-backed startups scaled Domain Authority', icon: TrendingUp },
    { name: 'Brand Blog', desc: 'Expert guides on publisher outreach and PR strategy', icon: Sparkles },
    { name: 'Ledger Audit Logs', desc: 'Real-time cryptographic audit telemetry', icon: ShieldCheck },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      {/* Slim, elegant scroll-progress indicator */}
      <motion.div 
        id="scroll-progress-indicator"
        className="absolute bottom-[-1.5px] left-0 right-0 h-[2.5px] bg-gradient-to-r from-brand-orange to-orange-400 origin-[0%] z-50"
        style={{ scaleX }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo (Left) */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-btn"
          >
            <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center shadow-md shadow-brand-orange/20 transition-all group-hover:scale-105">
              <Compass className="w-5 h-5 text-white stroke-[2.5]" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">
              Corda<span className="text-brand-orange">.</span>
            </span>
          </div>

          {/* Center Navigation Links (Center) */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Platform Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('platform')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors cursor-pointer">
                Platform
                <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${activeDropdown === 'platform' ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'platform' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 mt-1 grid grid-cols-1 gap-1"
                  >
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 px-3 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-brand-orange" />
                      Authority Engine Platform
                    </div>
                    {navPlatform.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={item.name}
                          onClick={() => handleScrollTo('product-showcase')}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 cursor-pointer transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">{item.name}</h4>
                            <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors cursor-pointer">
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${activeDropdown === 'solutions' ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[420px] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 mt-1 grid grid-cols-1 gap-1"
                  >
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 px-3">Enterprise Frameworks</div>
                    {navSolutions.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={item.name}
                          onClick={() => handleScrollTo('product-showcase')}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 cursor-pointer transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">{item.name}</h4>
                            <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Publishers link */}
            <button 
              onClick={() => handleScrollTo('network-section')} 
              className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors cursor-pointer"
            >
              Publishers
            </button>

            {/* Pricing link */}
            <button 
              onClick={() => handleScrollTo('pricing-section')} 
              className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors cursor-pointer"
            >
              Pricing
            </button>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors cursor-pointer">
                Resources
                <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${activeDropdown === 'resources' ? 'rotate-180 text-brand-orange' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[440px] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 mt-1 grid grid-cols-1 gap-1"
                  >
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 px-3">Knowledge Base & Audits</div>
                    {navResources.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={item.name}
                          onClick={() => handleScrollTo('explainer-video-section')}
                          className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50/80 cursor-pointer transition-colors group"
                        >
                          <div className="p-2 rounded-lg bg-orange-50 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="text-[14px] font-semibold text-brand-dark group-hover:text-brand-orange transition-colors">{item.name}</h4>
                            <p className="text-xs text-brand-muted mt-0.5">{item.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* Right CTAs (Right) */}
          <div className="hidden lg:flex items-center gap-5">
            <button 
              onClick={() => handleScrollTo('pricing-section')} 
              className="text-[15px] font-medium text-slate-600 hover:text-brand-dark transition-colors px-4 py-2 cursor-pointer"
              id="cta-demo-btn"
            >
              Book Demo
            </button>
            <button 
              onClick={() => handleScrollTo('pricing-section')}
              className="px-5 py-2.5 bg-brand-dark hover:bg-brand-orange text-white text-[15px] font-medium rounded-xl shadow-md shadow-brand-dark/10 hover:shadow-brand-orange/20 transition-all duration-300 cursor-pointer"
              id="cta-start-btn"
            >
              Start Building Authority
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-brand-navy hover:text-brand-orange transition-colors cursor-pointer"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
              
              {/* Platform Mobile Dropdown */}
              <div className="flex flex-col gap-1">
                <button 
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between py-2 text-left text-[15px] font-semibold text-brand-dark hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>Platform</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobilePlatformOpen ? 'rotate-180 text-brand-orange' : 'opacity-60'}`} />
                </button>
                {mobilePlatformOpen && (
                  <div className="pl-4 border-l border-slate-100 flex flex-col gap-2 mt-1">
                    {navPlatform.map((p) => (
                      <button 
                        key={p.name} 
                        onClick={() => handleScrollTo('product-showcase')}
                        className="flex items-start gap-2 text-left py-1.5 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <p.icon className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[13px] font-medium text-brand-navy block">{p.name}</span>
                          <span className="text-[10px] text-brand-muted block">{p.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Mobile Dropdown */}
              <div className="flex flex-col gap-1">
                <button 
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between py-2 text-left text-[15px] font-semibold text-brand-dark hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180 text-brand-orange' : 'opacity-60'}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="pl-4 border-l border-slate-100 flex flex-col gap-2 mt-1">
                    {navSolutions.map((s) => (
                      <button 
                        key={s.name} 
                        onClick={() => handleScrollTo('product-showcase')}
                        className="flex items-start gap-2 text-left py-1.5 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <s.icon className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[13px] font-medium text-brand-navy block">{s.name}</span>
                          <span className="text-[10px] text-brand-muted block">{s.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Publishers mobile link */}
              <button 
                onClick={() => handleScrollTo('network-section')} 
                className="flex items-center gap-3 text-left py-2 hover:text-brand-orange transition-colors cursor-pointer"
              >
                <Network className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-[15px] font-semibold text-brand-navy">Publishers</span>
              </button>

              {/* Pricing mobile link */}
              <button 
                onClick={() => handleScrollTo('pricing-section')} 
                className="flex items-center gap-3 text-left py-2 hover:text-brand-orange transition-colors cursor-pointer"
              >
                <DollarSign className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-[15px] font-semibold text-brand-navy">Pricing</span>
              </button>

              {/* Resources Mobile Dropdown */}
              <div className="flex flex-col gap-1">
                <button 
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between py-2 text-left text-[15px] font-semibold text-brand-dark hover:text-brand-orange transition-colors cursor-pointer"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? 'rotate-180 text-brand-orange' : 'opacity-60'}`} />
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-4 border-l border-slate-100 flex flex-col gap-2 mt-1">
                    {navResources.map((r) => (
                      <button 
                        key={r.name} 
                        onClick={() => handleScrollTo('explainer-video-section')}
                        className="flex items-start gap-2 text-left py-1.5 hover:text-brand-orange transition-colors cursor-pointer"
                      >
                        <r.icon className="w-4 h-4 text-brand-orange mt-0.5 shrink-0" />
                        <div>
                          <span className="text-[13px] font-medium text-brand-navy block">{r.name}</span>
                          <span className="text-[10px] text-brand-muted block">{r.desc}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="h-px bg-slate-100 my-2" />

              {/* Mobile CTA actions */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="w-full py-3 text-center font-medium text-brand-navy bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl cursor-pointer"
                >
                  Book Demo
                </button>
                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="w-full py-3 text-center font-medium text-white bg-brand-orange hover:bg-brand-orange/90 transition-colors rounded-xl shadow-lg shadow-brand-orange/20 cursor-pointer"
                >
                  Start Building Authority
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

