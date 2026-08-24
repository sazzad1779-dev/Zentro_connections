import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Phone, Mail, MapPin, ShieldCheck, Clock, Building2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CtaSectionProps {
  onOpenContact: () => void;
}

interface CompanyBox {
  name: string;
  category: string;
  tag: string;
  location: string;
  renderIcon: (color: string) => React.ReactNode;
}

const PARTNER_COMPANIES: CompanyBox[] = [
  {
    name: 'APEX CLOUD',
    category: 'Enterprise Cloud Infra',
    tag: 'Series B • $45M',
    location: 'San Francisco',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L20 18H4L12 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 9L16 18H8L12 9Z" fill={color} fillOpacity="0.25" />
        <circle cx="12" cy="14" r="1.5" fill={color} />
      </svg>
    )
  },
  {
    name: 'VANGUARD LABS',
    category: 'FinTech Protocol & Pay',
    tag: 'Enterprise Tier',
    location: 'London / NYC',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L4 7V13C4 18 7.5 21.5 12 22C16.5 21.5 20 18 20 13V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 11L12 14L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: 'HYPERION BIO',
    category: 'Precision Genomics AI',
    tag: 'NASDAQ Listed',
    location: 'Boston / Basel',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="2" />
        <circle cx="12" cy="4" r="2" fill={color} />
        <circle cx="12" cy="20" r="2" fill={color} />
        <circle cx="4" cy="12" r="2" fill={color} />
        <circle cx="20" cy="12" r="2" fill={color} />
        <line x1="12" y1="6" x2="12" y2="9" stroke={color} strokeWidth="1.5" />
        <line x1="12" y1="15" x2="12" y2="18" stroke={color} strokeWidth="1.5" />
        <line x1="6" y1="12" x2="9" y2="12" stroke={color} strokeWidth="1.5" />
        <line x1="15" y1="12" x2="18" y2="12" stroke={color} strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'STRATA SYSTEMS',
    category: 'Asset Intelligence Core',
    tag: '$1.4B AUM',
    location: 'Singapore / Zurich',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 22V12M21 7L12 12M3 7L12 12" stroke={color} strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: 'AETHER SPATIAL',
    category: '3D Audio & Haptics',
    tag: 'Design Award 2025',
    location: 'Berlin / Tokyo',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
        <circle cx="12" cy="12" r="2" fill={color} />
      </svg>
    )
  },
  {
    name: 'ZENITH GLOBAL',
    category: 'Autonomous Fleet Grid',
    tag: 'Series C • $110M',
    location: 'Austin / Munich',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
        <polygon points="12,7 15,14 9,14" fill={color} />
      </svg>
    )
  },
  {
    name: 'CHRONOS AI',
    category: 'Autonomous Agent Engine',
    tag: 'YC S24 Alum',
    location: 'San Francisco',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
        <polyline points="12 6 12 12 16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="3" r="1.5" fill={color} />
      </svg>
    )
  },
  {
    name: 'QUANTUM PULSE',
    category: 'Ultra-Low Latency Ops',
    tag: '99.999% SLA',
    location: 'Chicago / London',
    renderIcon: (color: string) => (
      <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      </svg>
    )
  }
];

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();

  return (
    <section 
      id="contact" 
      className={`py-20 sm:py-24 relative overflow-hidden border-b transition-colors duration-300 ${
        isDay ? 'bg-[#F8FAFC] text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/50' : 'bg-[#0878FF]/20'
      }`} />
      <div className={`absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-cyan-200/40' : 'bg-[#00B8E6]/20'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-14 lg:p-16 border shadow-2xl relative overflow-hidden transition-colors duration-300 ${
          isDay
            ? 'bg-gradient-to-br from-white via-blue-50/40 to-slate-50 border-blue-200/80 text-slate-900 shadow-blue-500/5'
            : 'bg-gradient-to-br from-[#0B2854] to-[#071A36] border-white/15 text-white shadow-2xl'
        }`}>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold border ${
                isDay
                  ? 'bg-blue-100 text-[#0878FF] border-blue-200'
                  : 'bg-white/10 text-[#00B8E6] border-white/15'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] leading-[1.15] tracking-tight ${
                isDay ? 'text-slate-950' : 'text-white'
              }`}>
                Have an idea worth building? <br />
                <span className={`text-transparent bg-clip-text ${
                  isDay 
                    ? 'bg-gradient-to-r from-[#0878FF] via-blue-600 to-[#00B8E6]' 
                    : 'bg-gradient-to-r from-[#00B8E6] via-[#0878FF] to-blue-200'
                }`}>
                  Let's turn your next idea into something people remember.
                </span>
              </h2>

              <p className={`text-base sm:text-lg max-w-2xl leading-relaxed ${
                isDay ? 'text-slate-600' : 'text-blue-100/85'
              }`}>
                Tell us about your project, challenge, or vision and let's explore what's possible. We review every brief within 24 hours with custom architectural insights.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  id="final-cta-start-project-btn"
                  className="px-8 py-4 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="mailto:hello@zentrocomms.com"
                  className={`px-7 py-4 rounded-xl font-semibold text-sm border transition-all text-center flex items-center justify-center gap-2 ${
                    isDay
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-2xs'
                      : 'bg-white/10 hover:bg-white/20 text-white border-white/15'
                  }`}
                >
                  <Mail className={`w-4 h-4 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>hello@zentrocomms.com</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className={`flex flex-wrap items-center gap-6 pt-6 text-xs border-t ${
                isDay ? 'text-slate-600 border-slate-200' : 'text-blue-200/70 border-white/10'
              }`}>
                <div className="flex items-center gap-1.5">
                  <Clock className={`w-3.5 h-3.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Standard Mutual NDA Included</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Direct Contact Card */}
            <div className={`lg:col-span-4 rounded-2xl p-6 sm:p-7 border space-y-5 shadow-xl backdrop-blur-md transition-colors ${
              isDay
                ? 'bg-white/90 border-slate-200 text-slate-800 shadow-slate-200/80'
                : 'bg-[#071A36]/80 border-white/15 text-white shadow-xl'
            }`}>
              <div className={`text-xs font-mono uppercase tracking-wider ${
                isDay ? 'text-[#0878FF] font-bold' : 'text-blue-200/70'
              }`}>
                DIRECT HQ CHANNELS
              </div>

              <div className={`space-y-4 text-xs ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                <div className="flex items-start gap-3">
                  <MapPin className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <div>
                    <strong className={`block text-sm font-['Space_Grotesk'] ${isDay ? 'text-slate-950' : 'text-white'}`}>
                      Global Studios:
                    </strong>
                    <span className={isDay ? 'text-slate-600' : 'text-blue-100/80'}>
                      San Francisco • London • Singapore
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <div>
                    <strong className={`block text-sm font-['Space_Grotesk'] ${isDay ? 'text-slate-950' : 'text-white'}`}>
                      Direct Phone:
                    </strong>
                    <span className={isDay ? 'text-slate-600' : 'text-blue-100/80'}>
                      +1 (800) 936-8769 (ZENTRO)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <div>
                    <strong className={`block text-sm font-['Space_Grotesk'] ${isDay ? 'text-slate-950' : 'text-white'}`}>
                      New Partnerships:
                    </strong>
                    <span className={isDay ? 'text-slate-600' : 'text-blue-100/80'}>
                      proposals@zentrocomms.com
                    </span>
                  </div>
                </div>
              </div>

              <div className={`pt-4 border-t text-[11px] ${
                isDay ? 'border-slate-200 text-slate-500' : 'border-white/10 text-blue-200/70'
              }`}>
                Operating in Americas, EMEA & APAC time zones with round-the-clock developer support.
              </div>
            </div>

          </div>

          {/* Animated Right-to-Left Continuous Scrolling Company Boxes */}
          <div className={`mt-14 pt-10 border-t relative overflow-hidden ${
            isDay ? 'border-slate-200' : 'border-white/10'
          }`}>
            {/* Header with Badges & Title */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
              <div>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-2.5 border ${
                  isDay 
                    ? 'bg-blue-50 border-blue-200 text-[#0878FF]' 
                    : 'bg-white/5 border-white/15 text-[#00B8E6]'
                }`}>
                  <Building2 className="w-3.5 h-3.5" />
                  <span>TRUSTED BY HIGH-GROWTH STARTUPS & ENTERPRISES WORLDWIDE</span>
                </div>
                <h3 className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk'] tracking-tight ${
                  isDay ? 'text-slate-900' : 'text-white'
                }`}>
                  Powering Market-Leading Brands <span className={isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}>Across 16 Countries</span>
                </h3>
              </div>

              <div className={`hidden sm:flex items-center gap-2 text-[11px] font-mono ${
                isDay ? 'text-slate-500' : 'text-blue-200/60'
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Continuous Sprint Pipeline • 99.9% Uptime</span>
              </div>
            </div>

            {/* Carousel track with left & right gradient fade masks */}
            <div className="relative w-full overflow-hidden py-2">
              
              {/* Left Screen Edge Fade Gradient (Disappearing into left screen) */}
              <div className={`absolute top-0 bottom-0 left-0 w-16 sm:w-28 z-10 pointer-events-none ${
                isDay
                  ? 'bg-gradient-to-r from-white via-white/80 to-transparent'
                  : 'bg-gradient-to-r from-[#0B2854] via-[#0B2854]/80 to-transparent'
              }`} />

              {/* Right Screen Edge Fade Gradient (Entering from right screen) */}
              <div className={`absolute top-0 bottom-0 right-0 w-16 sm:w-28 z-10 pointer-events-none ${
                isDay
                  ? 'bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent'
                  : 'bg-gradient-to-l from-[#071A36] via-[#071A36]/80 to-transparent'
              }`} />

              {/* Infinite Continuous Motion Marquee Track (Right to Left) */}
              <motion.div
                className="flex items-center gap-4 w-max"
                animate={{ x: ['0%', '-50%'] }}
                transition={{
                  ease: 'linear',
                  duration: 26,
                  repeat: Infinity,
                }}
              >
                {/* Render duplicate sets of company boxes for seamless infinite scrolling loop */}
                {[...PARTNER_COMPANIES, ...PARTNER_COMPANIES].map((company, index) => {
                  const iconColor = isDay ? '#0878FF' : '#00B8E6';
                  return (
                    <div
                      key={`company-box-${index}`}
                      className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl border shrink-0 transition-all duration-300 group cursor-pointer ${
                        isDay
                          ? 'bg-white/90 hover:bg-white border-slate-200 shadow-2xs hover:border-[#0878FF]/50 hover:shadow-md hover:shadow-blue-500/10'
                          : 'bg-[#071A36]/90 hover:bg-[#071A36] border-white/10 hover:border-[#00B8E6]/50 shadow-md hover:shadow-lg hover:shadow-cyan-500/10'
                      }`}
                    >
                      {/* Company Vector Logo Icon */}
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isDay
                          ? 'bg-blue-50/90 group-hover:bg-blue-100/80'
                          : 'bg-white/5 group-hover:bg-white/10'
                      }`}>
                        {company.renderIcon(iconColor)}
                      </div>

                      {/* Info block */}
                      <div className="flex flex-col text-left">
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase leading-tight ${
                            isDay ? 'text-slate-900 group-hover:text-[#0878FF]' : 'text-white group-hover:text-[#00B8E6]'
                          }`}>
                            {company.name}
                          </span>
                          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded-full border ${
                            isDay
                              ? 'bg-blue-50 text-[#0878FF] border-blue-200/80'
                              : 'bg-[#0878FF]/15 text-[#00B8E6] border-[#0878FF]/30'
                          }`}>
                            {company.tag}
                          </span>
                        </div>
                        <span className={`text-[11px] leading-tight mt-0.5 ${
                          isDay ? 'text-slate-500' : 'text-blue-100/70'
                        }`}>
                          {company.category} • <span className="font-mono">{company.location}</span>
                        </span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

