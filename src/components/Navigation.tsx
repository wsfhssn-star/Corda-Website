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
  ShieldCheck 
} from 'lucide-react';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navProducts = [
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
          
          {/* Logo */}
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

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors">
                Products
                <ChevronDown className="w-4 h-4 opacity-50 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'products' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                    className="absolute left-1/2 -translate-x-1/2 top-full w-[480px] bg-white rounded-2xl shadow-2xl border border-slate-100/80 p-6 mt-1 grid grid-cols-1 gap-1"
                  >
                    <div className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3 px-3">Authority Suite</div>
                    {navProducts.map((item) => {
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
              <button className="flex items-center gap-1 text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4 opacity-50" />
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

            <button 
              onClick={() => handleScrollTo('network-section')} 
              className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors"
            >
              Network Map
            </button>

            <button 
              onClick={() => handleScrollTo('pricing-section')} 
              className="text-[15px] font-medium text-brand-navy/80 hover:text-brand-dark py-2 transition-colors"
            >
              Pricing
            </button>
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-5">
            <button 
              onClick={() => handleScrollTo('pricing-section')} 
              className="text-[15px] font-medium text-slate-600 hover:text-brand-dark transition-colors px-4 py-2"
              id="cta-demo-btn"
            >
              Book A Demo
            </button>
            <button 
              onClick={() => handleScrollTo('pricing-section')}
              className="px-5 py-2.5 bg-brand-dark hover:bg-brand-orange text-white text-[15px] font-medium rounded-xl shadow-md shadow-brand-dark/10 hover:shadow-brand-orange/20 transition-all duration-300"
              id="cta-start-btn"
            >
              Start Building Authority
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2 text-brand-navy hover:text-brand-orange transition-colors"
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
            <div className="px-6 py-6 flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Suite Products</div>
                {navProducts.map((p) => (
                  <button 
                    key={p.name} 
                    onClick={() => handleScrollTo('product-showcase')}
                    className="flex items-center gap-3 text-left py-2 hover:text-brand-orange transition-colors"
                  >
                    <p.icon className="w-4 h-4 text-brand-orange" />
                    <span className="text-[15px] font-medium text-brand-navy">{p.name}</span>
                  </button>
                ))}
              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex flex-col gap-3">
                <button 
                  onClick={() => handleScrollTo('network-section')} 
                  className="flex items-center gap-3 text-left py-2 hover:text-brand-orange transition-colors"
                >
                  <Network className="w-4 h-4 text-brand-orange" />
                  <span className="text-[15px] font-medium text-brand-navy">Network Map</span>
                </button>
                <button 
                  onClick={() => handleScrollTo('pricing-section')} 
                  className="flex items-center gap-3 text-left py-2 hover:text-brand-orange transition-colors"
                >
                  <DollarSign className="w-4 h-4 text-brand-orange" />
                  <span className="text-[15px] font-medium text-brand-navy">Pricing</span>
                </button>
              </div>

              <div className="h-px bg-slate-100" />

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="w-full py-3 text-center font-medium text-brand-navy bg-slate-50 hover:bg-slate-100 transition-colors rounded-xl"
                >
                  Book A Demo
                </button>
                <button 
                  onClick={() => handleScrollTo('pricing-section')}
                  className="w-full py-3 text-center font-medium text-white bg-brand-orange hover:bg-brand-orange/90 transition-colors rounded-xl shadow-lg shadow-brand-orange/20"
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
