import React, { useState } from 'react';
import { Logo } from './Logo';
import { 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  Globe2, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2,
  Activity
} from 'lucide-react';
import { ServiceItem } from '../types';

interface FooterProps {
  onOpenContact: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onSelectService }) => {
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
    <footer id="footer" className="bg-[#071A36] text-white border-t border-white/10 pt-20 pb-12 relative overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand & Newsletter (Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo variant="light" size="md" />

            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-sm">
              Zentro Communications is a premier digital communications and technology agency. We fuse strategic thinking, world-class branding, 3D motion, and full-stack engineering to build scalable products for ambitious brands.
            </p>

            {/* Newsletter form */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#00B8E6] block mb-2 font-mono">
                THE ZENTRO DISPATCH
              </span>
              <p className="text-[11px] text-blue-200/60 mb-3">
                Bi-weekly strategic insights on creative tech, brand design, and growth.
              </p>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <CheckCircle2 className="w-4 h-4" />
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
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#0B2854] border border-white/10 text-xs text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#00B8E6] transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="px-4 py-2.5 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs transition-colors shrink-0 shadow-md shadow-blue-500/20"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Column 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#00B8E6]">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li><a href="#about" className="hover:text-[#00B8E6] transition-colors">About Zentro</a></li>
              <li><a href="#work" className="hover:text-[#00B8E6] transition-colors">Selected Work</a></li>
              <li><a href="#why-us" className="hover:text-[#00B8E6] transition-colors">Why Zentro</a></li>
              <li><a href="#process" className="hover:text-[#00B8E6] transition-colors">How We Work</a></li>
              <li><a href="#team" className="hover:text-[#00B8E6] transition-colors">Leadership & Squad</a></li>
              <li><a href="#vision-mission" className="hover:text-[#00B8E6] transition-colors">Vision & Mission</a></li>
              <li><a href="#testimonials" className="hover:text-[#00B8E6] transition-colors">Client Endorsements</a></li>
              <li><a href="#faq" className="hover:text-[#00B8E6] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Column 3: Capabilities Index (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#00B8E6]">
              CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-xs text-blue-100/80">
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  Digital Platforms & Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  Branding & Visual Design Systems
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  Full-Funnel Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  3D Motion & Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  Cloud Infrastructure & IT Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#00B8E6] transition-colors">
                  Strategic Communications & PR
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-[#00B8E6] transition-colors">
                  Client Engagement Models
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Global Studios (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold font-mono uppercase tracking-widest text-[#00B8E6]">
              GET IN TOUCH
            </h4>

            <div className="space-y-3 text-xs text-blue-100/80">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-blue-200/60">Direct Inquiries:</div>
                  <a href="mailto:hello@zentrocomms.com" className="font-semibold text-white hover:text-[#00B8E6]">
                    hello@zentrocomms.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-blue-200/60">Direct Line:</div>
                  <a href="tel:+18005559368" className="font-semibold text-white hover:text-[#00B8E6]">
                    +1 (800) ZENTRO-9
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-blue-200/60">Global Hubs:</div>
                  <span className="text-slate-300">San Francisco • London • Singapore</span>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-2">
              <div className="text-[10px] text-blue-200/60 font-mono mb-2">FOLLOW ZENTRO</div>
              <div className="flex items-center gap-2">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#0878FF] text-slate-300 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/60">
          <div>
            © 2026 Zentro Communications. All rights reserved. Where Creativity Meets Technology.
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onOpenContact('Privacy Policy Inquiry')} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => onOpenContact('Terms of Service Inquiry')} className="hover:text-white transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => onOpenContact('Security Assurance')} className="hover:text-white transition-colors">
              Security & Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
