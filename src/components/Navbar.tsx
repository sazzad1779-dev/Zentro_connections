import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  ChevronDown, 
  ArrowRight, 
  Menu, 
  X, 
  Code2, 
  Palette, 
  TrendingUp, 
  Server, 
  Film, 
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

interface NavbarProps {
  onOpenContact: (prefilledService?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onSelectService }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active states
      const sections = ['about', 'services', 'work', 'why-us', 'process', 'team', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

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

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Capabilities', href: '#services', id: 'services', hasDropdown: true },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Why Zentro', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Team', href: '#team', id: 'team' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const serviceCategories = [
    {
      title: 'Digital Solutions',
      icon: Code2,
      desc: 'Web apps, enterprise platforms & SaaS architecture',
      items: SERVICES_DATA.filter(s => s.category === 'digital' || s.category === 'tech')
    },
    {
      title: 'Creative & Brand',
      icon: Palette,
      desc: 'Visual identities, design systems & 3D motion',
      items: SERVICES_DATA.filter(s => s.category === 'creative')
    },
    {
      title: 'Growth & Strategy',
      icon: TrendingUp,
      desc: 'Performance marketing & executive PR narratives',
      items: SERVICES_DATA.filter(s => s.category === 'marketing')
    }
  ];

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#071A36]/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Logo variant="light" size="md" />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.id} 
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={link.href}
                      id={`nav-link-${link.id}`}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors ${
                        activeSection === link.id
                          ? 'text-[#00B8E6] font-semibold bg-white/10'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 text-slate-400 group-hover:text-[#00B8E6]" />
                    </a>

                    {/* Services Mega Dropdown */}
                    <div 
                      className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[720px] bg-[#0B2854] rounded-2xl shadow-2xl border border-blue-800/60 p-6 grid grid-cols-3 gap-6 transition-all duration-200 origin-top text-white ${
                        servicesDropdownOpen ? 'opacity-100 scale-100 pointer-events-auto visible' : 'opacity-0 scale-95 pointer-events-none invisible'
                      }`}
                    >
                      {serviceCategories.map((cat, idx) => (
                        <div key={idx} className="flex flex-col">
                          <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10">
                            <div className="w-7 h-7 rounded-lg bg-blue-500/20 text-[#00B8E6] flex items-center justify-center">
                              <cat.icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-white uppercase tracking-wider">{cat.title}</div>
                            </div>
                          </div>
                          
                          <p className="text-[11px] text-blue-200/70 mb-3 leading-relaxed">{cat.desc}</p>
                          
                          <div className="flex flex-col gap-1.5">
                            {cat.items.map((svc) => (
                              <button
                                key={svc.id}
                                onClick={() => {
                                  onSelectService(svc);
                                  setServicesDropdownOpen(false);
                                }}
                                className="text-left px-2.5 py-2 rounded-lg text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center justify-between group/item"
                              >
                                <span className="truncate">{svc.title}</span>
                                <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-[#00B8E6]" />
                              </button>
                            ))}
                          </div>
                        </div>
                      ))}

                      {/* Dropdown bottom prompt */}
                      <div className="col-span-3 pt-3 border-t border-white/10 flex items-center justify-between bg-[#071A36]/80 -mx-6 -mb-6 p-4 rounded-b-2xl">
                        <div className="flex items-center gap-2 text-xs text-slate-300">
                          <Sparkles className="w-3.5 h-3.5 text-[#00B8E6]" />
                          <span>Need a custom multi-disciplinary solution?</span>
                        </div>
                        <button
                          onClick={() => {
                            setServicesDropdownOpen(false);
                            onOpenContact();
                          }}
                          className="text-xs font-semibold text-[#00B8E6] hover:text-white hover:underline flex items-center gap-1"
                        >
                          Request Custom Scope <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.id}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                  className={`px-3.5 py-2 text-[14px] font-medium rounded-lg transition-colors ${
                    activeSection === link.id
                      ? 'text-[#00B8E6] font-semibold bg-white/10'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a 
              href="tel:+18005559368" 
              className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-3 py-2"
              title="Direct Client Inquiries"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00B8E6]" />
              <span>+1 (800) ZENTRO-9</span>
            </a>

            <button
              onClick={() => onOpenContact()}
              id="header-start-project-btn"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95 group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3.5 py-2 rounded-full text-xs font-semibold bg-[#0878FF] text-white"
            >
              Let's Talk
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#0B2854] border-b border-blue-800/60 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto text-white"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                  activeSection === link.id ? 'bg-blue-500/20 text-[#00B8E6]' : 'text-slate-200 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-xs text-blue-200/70 py-2">
                Creativity × Technology • hello@zentrocomms.com
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
