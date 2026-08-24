import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2
} from 'lucide-react';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface FooterProps {
  onOpenContact: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onSelectService }) => {
  const { isDay } = useTheme();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <footer 
      id="footer" 
      className={`pt-20 pb-12 relative overflow-hidden transition-colors duration-300 ${
        isDay 
          ? 'bg-[#F8FAFC] text-slate-700 border-t border-slate-200/80' 
          : 'bg-[#071A36] text-white border-t border-white/10'
      }`}
    >
      {/* Background glow */}
      <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/40' : 'bg-[#0878FF]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b ${
          isDay ? 'border-slate-200' : 'border-white/10'
        }`}>
          
          {/* Column 1: Brand & Newsletter (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant={isDay ? 'dark' : 'light'} size="md" />

            <p className={`text-xs sm:text-sm leading-relaxed max-w-sm ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              Zentro Communications is a premier digital communications and technology agency. We fuse strategic thinking, world-class branding, 3D motion, and full-stack engineering to build scalable products for ambitious brands.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className={`text-xs font-bold uppercase tracking-wider block mb-2 font-mono ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                THE ZENTRO DISPATCH
              </span>
              <p className={`text-[11px] mb-3 ${
                isDay ? 'text-slate-500' : 'text-blue-200/60'
              }`}>
                Bi-weekly strategic insights on creative tech, brand design, and growth.
              </p>

              {newsletterSubscribed ? (
                <div className={`flex items-center gap-2 text-xs font-semibold p-2.5 rounded-xl border ${
                  isDay 
                    ? 'text-emerald-700 bg-emerald-50 border-emerald-200' 
                    : 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
                }`}>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Subscribed! Check your inbox for our latest brief.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work email..."
                    className={`w-full px-3.5 py-2.5 rounded-xl text-xs transition-colors focus:outline-none ${
                      isDay
                        ? 'bg-white border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-[#0878FF] shadow-2xs'
                        : 'bg-white/5 border border-white/15 text-white placeholder:text-blue-200/40 focus:border-[#00B8E6]'
                    }`}
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-4 py-2.5 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs transition-colors shrink-0 shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className={`text-xs font-bold font-mono uppercase tracking-widest ${
              isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
            }`}>
              COMPANY
            </h4>
            <ul className={`space-y-2.5 text-xs ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              <li><a href="#about" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>About Zentro</a></li>
              <li><a href="#work" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Selected Work</a></li>
              <li><a href="#why-us" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Why Zentro</a></li>
              <li><a href="#vision-mission" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Vision & Mission</a></li>
              <li><a href="#team" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Leadership & Squad</a></li>
              <li><a href="#process" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>How We Work</a></li>
              <li><a href="#clients" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Client Models</a></li>
              <li><a href="#testimonials" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>Testimonials</a></li>
              <li><a href="#faq" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Capabilities Index (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-bold font-mono uppercase tracking-widest ${
              isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
            }`}>
              CAPABILITIES
            </h4>
            <ul className={`space-y-2.5 text-xs ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  Digital Platforms & Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  Branding & Visual Design Systems
                </a>
              </li>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  Full-Funnel Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  3D Motion & Video Production
                </a>
              </li>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  Cloud Infrastructure & IT Solutions
                </a>
              </li>
              <li>
                <a href="#services" className={`transition-colors ${isDay ? 'hover:text-[#0878FF]' : 'hover:text-[#00B8E6]'}`}>
                  Strategic Communications & PR
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Studios (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className={`text-xs font-bold font-mono uppercase tracking-widest ${
              isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                }`}>
              GET IN TOUCH
            </h4>

            <div className={`space-y-3 text-xs ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              <div className="flex items-start gap-2.5">
                <Mail className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                <div>
                  <div className={`text-[10px] ${isDay ? 'text-slate-500' : 'text-blue-200/60'}`}>Direct Inquiries:</div>
                  <a href="mailto:hello@zentrocomms.com" className={`font-semibold transition-colors ${
                    isDay ? 'text-slate-900 hover:text-[#0878FF]' : 'text-white hover:text-[#00B8E6]'
                  }`}>
                    hello@zentrocomms.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                <div>
                  <div className={`text-[10px] ${isDay ? 'text-slate-500' : 'text-blue-200/60'}`}>Direct Line:</div>
                  <a href="tel:+18005559368" className={`font-semibold transition-colors ${
                    isDay ? 'text-slate-900 hover:text-[#0878FF]' : 'text-white hover:text-[#00B8E6]'
                  }`}>
                    +1 (800) ZENTRO-9
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                <div>
                  <div className={`text-[10px] ${isDay ? 'text-slate-500' : 'text-blue-200/60'}`}>Global Hubs:</div>
                  <span className={isDay ? 'text-slate-800 font-medium' : 'text-slate-300'}>
                    San Francisco • London • Singapore
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <div className={`text-[10px] font-mono mb-2 ${
                isDay ? 'text-slate-500' : 'text-blue-200/60'
              }`}>
                FOLLOW ZENTRO
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                    isDay
                      ? 'bg-white hover:bg-[#0878FF] text-slate-700 hover:text-white border-slate-200 shadow-2xs'
                      : 'bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white border-white/10'
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                    isDay
                      ? 'bg-white hover:bg-[#0878FF] text-slate-700 hover:text-white border-slate-200 shadow-2xs'
                      : 'bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white border-white/10'
                  }`}
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                    isDay
                      ? 'bg-white hover:bg-[#0878FF] text-slate-700 hover:text-white border-slate-200 shadow-2xs'
                      : 'bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white border-white/10'
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors border ${
                    isDay
                      ? 'bg-white hover:bg-[#0878FF] text-slate-700 hover:text-white border-slate-200 shadow-2xs'
                      : 'bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white border-white/10'
                  }`}
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
          isDay ? 'text-slate-500' : 'text-blue-200/60'
        }`}>
          <div>
            © 2026 Zentro Communications. All rights reserved. Where Creativity Meets Technology.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onOpenContact('Privacy Policy Inquiry')} className={`transition-colors cursor-pointer ${
              isDay ? 'hover:text-slate-950' : 'hover:text-white'
            }`}>
              Privacy Policy
            </button>
            <button onClick={() => onOpenContact('Terms of Service Inquiry')} className={`transition-colors cursor-pointer ${
              isDay ? 'hover:text-slate-950' : 'hover:text-white'
            }`}>
              Terms & Conditions
            </button>
            <button onClick={() => onOpenContact('Security Assurance')} className={`transition-colors cursor-pointer ${
              isDay ? 'hover:text-slate-950' : 'hover:text-white'
            }`}>
              Security & Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
