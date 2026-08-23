import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Menu, 
  X, 
  Mail,
  PhoneCall,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenContact: (prefilledService?: string) => void;
  onSelectService?: (service: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section tracking for active states
      const sections = ['about', 'services', 'work', 'why-us', 'process', 'team', 'vision-mission', 'clients', 'testimonials', 'faq'];
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
    { label: 'Capabilities', href: '#services', id: 'services' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Why Zentro', href: '#why-us', id: 'why-us' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Team', href: '#team', id: 'team' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  return (
    <header 
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#071A36]/92 backdrop-blur-md shadow-lg border-b border-white/10 py-3' 
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <div className="shrink-0">
            <Logo variant="light" size="md" />
          </div>

          {/* Desktop Navigation Links (No dropdown on Capabilities) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                id={`nav-link-${link.id}`}
                className={`px-3 py-1.5 xl:px-3.5 xl:py-2 text-[13px] xl:text-[14px] font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? 'text-[#00B8E6] font-semibold bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Agency Info Area */}
          <div className="hidden sm:flex items-center gap-3 xl:gap-4 shrink-0">
            {/* Direct Contact / Availability Info */}
            <div className="hidden md:flex items-center gap-3 pr-3 border-r border-white/10 text-xs">
              <a 
                href="mailto:hello@zentrocomms.com"
                className="flex items-center gap-1.5 text-blue-200/80 hover:text-white transition-colors"
                title="Direct Agency Email"
              >
                <Mail className="w-3.5 h-3.5 text-[#00B8E6]" />
                <span className="font-mono text-[11px] xl:text-xs">hello@zentrocomms.com</span>
              </a>

              <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Q3 Sprints Open</span>
              </div>
            </div>

            {/* Direct Call Link */}
            <a 
              href="tel:+18005559368" 
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white px-2 py-1.5"
              title="Direct Inquiries"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#00B8E6]" />
              <span className="font-mono text-xs">+1 (800) ZENTRO-9</span>
            </a>

            {/* Main CTA */}
            <button
              onClick={() => onOpenContact()}
              id="header-start-project-btn"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-md shadow-blue-500/20 transition-all duration-200 active:scale-95 group cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#0878FF] text-white"
            >
              Let's Talk
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

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#0B2854]/98 backdrop-blur-lg border-b border-blue-800/60 shadow-2xl p-6 transition-all duration-300 max-h-[85vh] overflow-y-auto text-white"
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

            {/* Mobile Contact Info */}
            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs text-blue-200/80 py-1 font-mono">
                <a href="mailto:hello@zentrocomms.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#00B8E6]" />
                  <span>hello@zentrocomms.com</span>
                </a>
                <span className="text-emerald-400">● Open for Sprints</span>
              </div>

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
