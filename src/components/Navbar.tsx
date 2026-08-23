import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Menu, 
  X, 
  ChevronDown
} from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefilledService?: string) => void;
  onSelectService?: (service: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active states across all page anchors
      const sections = [
        'about', 
        'services', 
        'work', 
        'why-us', 
        'vision-mission',
        'team', 
        'process', 
        'clients', 
        'testimonials', 
        'faq'
      ];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary Visible Navbar Tabs (Vision placed before Team, Process moved to More)
  const primaryNavLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Capabilities', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Why Zentro', href: '#why-us', id: 'why-us' },
    { label: 'Vision', href: '#vision-mission', id: 'vision-mission' },
    { label: 'Team', href: '#team', id: 'team' },
  ];

  // Missing sections curated neatly inside "More"
  const moreNavLinks = [
    { label: 'Process', href: '#process', id: 'process', desc: 'Sprint methodology & milestones' },
    { label: 'Client Models', href: '#clients', id: 'clients', desc: 'Custom enterprise & startup squads' },
    { label: 'Testimonials', href: '#testimonials', id: 'testimonials', desc: 'Executive client reviews' },
    { label: 'FAQ', href: '#faq', id: 'faq', desc: 'Terms, sprints & delivery answers' },
  ];

  const isMoreActive = moreNavLinks.some(sec => sec.id === activeSection);

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#071A36]/95 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5' 
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          
          {/* 1. Left: Brand Logo */}
          <div className="shrink-0">
            <Logo variant="light" size="md" />
          </div>

          {/* 2. Center: Primary Navbar Links + "More" Dropdown for Missing Sections */}
          <nav className="hidden md:flex items-center gap-1 xl:gap-1.5">
            {primaryNavLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3 py-2 xl:px-3.5 xl:py-2 text-xs lg:text-[13px] font-semibold tracking-wide rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-[#00B8E6] bg-white/10 shadow-xs'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* "More" Dropdown (Containing Process, Client Models, Testimonials, FAQ) */}
            <div className="relative">
              <button
                onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                onBlur={() => setTimeout(() => setMoreMenuOpen(false), 200)}
                id="nav-more-menu-btn"
                aria-expanded={moreMenuOpen}
                className={`flex items-center gap-1.5 px-3 py-2 xl:px-3.5 xl:py-2 text-xs lg:text-[13px] font-semibold rounded-xl transition-all duration-200 cursor-pointer ${
                  isMoreActive || moreMenuOpen 
                    ? 'bg-white/10 text-[#00B8E6]' 
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreMenuOpen && (
                <div className="absolute top-full right-0 lg:left-0 lg:right-auto mt-2 w-64 bg-[#0B2854] border border-white/15 rounded-2xl shadow-2xl p-2 z-50 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                  <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B8E6] px-3 py-1.5 border-b border-white/10 mb-1">
                    Additional Sections
                  </div>
                  <div className="space-y-1">
                    {moreNavLinks.map((sec) => (
                      <a
                        key={sec.id}
                        href={sec.href}
                        onClick={() => setMoreMenuOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs transition-colors ${
                          activeSection === sec.id
                            ? 'bg-[#0878FF]/20 text-[#00B8E6] font-bold'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-white">{sec.label}</div>
                          <div className="text-[10px] text-blue-200/60 font-normal">{sec.desc}</div>
                        </div>
                        {activeSection === sec.id && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00B8E6]" />
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* 3. Right: Clean High-Impact CTA Button */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenContact()}
              id="header-start-project-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Navigation Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3.5 py-1.5 rounded-lg text-xs font-bold bg-[#0878FF] text-white"
            >
              Start Project
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="md:hidden fixed inset-x-0 top-full bg-[#0B2854]/98 backdrop-blur-xl border-b border-blue-800/60 shadow-2xl p-6 transition-all duration-300 max-h-[80vh] overflow-y-auto text-white"
        >
          <div className="space-y-4">
            
            {/* Primary Links */}
            <div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B8E6] mb-2 px-2">
                Main Pillars
              </div>
              <div className="space-y-1">
                {primaryNavLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                      activeSection === link.id ? 'bg-blue-500/20 text-[#00B8E6]' : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </a>
                ))}
              </div>
            </div>

            {/* Missing Sections under More */}
            <div className="pt-2 border-t border-white/10">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#00B8E6] mb-2 px-2">
                More Sections
              </div>
              <div className="grid grid-cols-2 gap-2">
                {moreNavLinks.map((sec) => (
                  <a
                    key={sec.id}
                    href={sec.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`p-2.5 rounded-xl text-xs font-semibold flex flex-col gap-0.5 ${
                      activeSection === sec.id ? 'bg-blue-500/20 text-[#00B8E6]' : 'bg-white/5 hover:bg-white/10 text-slate-200'
                    }`}
                  >
                    <span>{sec.label}</span>
                    <span className="text-[10px] text-blue-200/50 font-normal">{sec.desc.split('&')[0]}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
