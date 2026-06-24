import { Compass, Mail, Phone, MapPin, Linkedin, Twitter, Github, Globe } from 'lucide-react';

export default function Footer() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const productLinks = [
    { name: 'Authority Intelligence', hash: 'product-showcase' },
    { name: 'Opportunity Discovery', hash: 'product-showcase' },
    { name: 'Publisher Marketplace', hash: 'product-showcase' },
    { name: 'AI PR Strategy', hash: 'product-showcase' },
    { name: 'Network Topology Map', hash: 'network-section' },
  ];

  const resourceLinks = [
    { name: 'Forecasting Calculator', hash: 'pricing-section' },
    { name: 'Enterprise Pricing', hash: 'pricing-section' },
    { name: 'Documentation', hash: 'pricing-section' },
    { name: 'Security & Escrow', hash: 'pricing-section' },
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-100/80 pt-20 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Grid split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-200/60">
          
          {/* Brand Col (Col span 5) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="w-9 h-9 bg-brand-orange rounded-lg flex items-center justify-center shadow-md shadow-brand-orange/20 transition-all group-hover:scale-105">
                <Compass className="w-5 h-5 text-white stroke-[2.5]" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-brand-dark">
                Corda<span className="text-brand-orange">.</span>
              </span>
            </div>

            <p className="text-sm text-brand-muted max-w-sm leading-relaxed">
              Corda is the operating system for authority growth, engineering sovereign search power for modern SaaS, enterprise cloud innovators, and venture scale portfolios.
            </p>

            <div className="flex items-center gap-3.5">
              <a href="#" className="p-2 bg-white hover:bg-orange-50 border border-slate-100 rounded-xl text-slate-400 hover:text-brand-orange transition-all shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-orange-50 border border-slate-100 rounded-xl text-slate-400 hover:text-brand-orange transition-all shadow-sm">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white hover:bg-orange-50 border border-slate-100 rounded-xl text-slate-400 hover:text-brand-orange transition-all shadow-sm">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 (Col span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">Platform Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleScrollTo(link.hash)}
                    className="text-sm text-brand-navy/80 hover:text-brand-orange transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 (Col span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">Resources</h4>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleScrollTo(link.hash)}
                    className="text-sm text-brand-navy/80 hover:text-brand-orange transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details Col (Col span 2) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">Corporate</h4>
            <ul className="space-y-3.5 text-xs text-slate-500">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <span>One Ferry Building, Suite 300<br />San Francisco, CA 94111</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <a href="mailto:growth@corda.co" className="hover:text-brand-orange transition-colors">growth@corda.co</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="font-medium">Sovereign Cloud Host</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Corda Technologies, Inc. All rights reserved. Escrow protected by Corda Ledger Systems.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-dark transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-brand-dark transition-colors">Escrow Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
