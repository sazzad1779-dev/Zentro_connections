import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { STATS_DATA } from '../data/siteData';
import { ShieldCheck } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const { isDay } = useTheme();

  // Premium partner brands with custom precision vector marks & industry tags
  const partnerBrands = [
    {
      name: 'APEX CLOUD',
      sector: 'Enterprise Cloud & SaaS',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L20 18H4L12 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 9L16 18H8L12 9Z" fill={color} fillOpacity="0.25" />
          <circle cx="12" cy="14" r="1.5" fill={color} />
        </svg>
      )
    },
    {
      name: 'VANGUARD',
      sector: 'FinTech & Capital Systems',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7V13C4 18 7.5 21.5 12 22C16.5 21.5 20 18 20 13V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 11L12 14L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'HYPERION BIO',
      sector: 'Next-Gen Life Sciences',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
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
      name: 'STRATA WEALTH',
      sector: 'Institutional Asset Portal',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 22V12M21 7L12 12M3 7L12 12" stroke={color} strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: 'AETHER SOUND',
      sector: 'Spatial Audio Hardware',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="2" />
          <circle cx="12" cy="12" r="2" fill={color} />
        </svg>
      )
    },
    {
      name: 'ZENITH GLOBAL',
      sector: 'Autonomous EV Fleet',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
          <path d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeDasharray="2 2" />
          <polygon points="12,7 15,14 9,14" fill={color} />
        </svg>
      )
    },
    {
      name: 'CHRONOS AI',
      sector: 'Agentic Workflows & Data',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
          <polyline points="12 6 12 12 16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="3" r="1.5" fill={color} />
        </svg>
      )
    }
  ];

  return (
    <section id="trust" className={`py-16 sm:py-20 transition-colors duration-300 relative overflow-hidden ${
      isDay 
        ? 'bg-slate-50/90 border-y border-slate-200/80' 
        : 'bg-[#071A36] border-y border-white/10'
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/30' : 'bg-[#0878FF]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow Statement Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-3 border ${
            isDay 
              ? 'bg-blue-50 border-blue-200/80 text-[#0878FF]' 
              : 'bg-white/5 border-white/10 text-[#00B8E6]'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>TRUSTED BY INDUSTRY LEADERS AND AMBITIOUS INNOVATORS</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
            isDay ? 'text-slate-900' : 'text-white'
          }`}>
            Powering Market-Leading Brands Across 16 Countries
          </h2>
          <p className={`text-xs sm:text-sm mt-2 font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/75'
          }`}>
            From venture-backed disruptors to Fortune 500 enterprises, we build the digital engines that define categories.
          </p>
        </div>

        {/* Redesigned Partner Brand Cards Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-stretch mb-14">
          {partnerBrands.map((brand, idx) => {
            const iconColor = isDay ? '#0878FF' : '#00B8E6';
            return (
              <div 
                key={idx}
                className={`flex flex-col items-center justify-center text-center p-4 sm:p-5 rounded-2xl border transition-all duration-300 group cursor-default shadow-xs hover:-translate-y-1 ${
                  isDay 
                    ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-md hover:shadow-blue-500/10' 
                    : 'bg-[#0B2854]/50 border-white/10 hover:border-[#00B8E6]/60 hover:bg-[#0B2854]/90 hover:shadow-lg hover:shadow-cyan-500/10'
                }`}
                title={`${brand.name} — ${brand.sector}`}
              >
                {/* Brand Vector Icon Mark */}
                <div className={`mb-3 p-2.5 rounded-xl transition-all duration-300 ${
                  isDay 
                    ? 'bg-slate-50 group-hover:bg-blue-50/80' 
                    : 'bg-white/5 group-hover:bg-white/10'
                }`}>
                  {brand.renderIcon(iconColor)}
                </div>

                {/* Brand Name */}
                <span className={`text-xs font-extrabold tracking-wider uppercase font-['Space_Grotesk'] leading-tight transition-colors ${
                  isDay 
                    ? 'text-slate-900 group-hover:text-[#0878FF]' 
                    : 'text-white group-hover:text-[#00B8E6]'
                }`}>
                  {brand.name}
                </span>

                {/* Industry Sector Tag */}
                <span className={`text-[10px] mt-1 font-mono leading-snug transition-colors line-clamp-1 ${
                  isDay ? 'text-slate-500 group-hover:text-slate-700' : 'text-blue-200/60 group-hover:text-blue-100'
                }`}>
                  {brand.sector}
                </span>
              </div>
            );
          })}
        </div>

        {/* Key Metrics Stats Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t ${
          isDay ? 'border-slate-200' : 'border-white/10'
        }`}>
          {STATS_DATA.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col p-5 sm:p-6 rounded-2xl border transition-all duration-300 shadow-xs hover:-translate-y-0.5 ${
                isDay 
                  ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-sm' 
                  : 'bg-[#0B2854]/60 border-white/10 hover:border-[#00B8E6]/40 hover:bg-[#0B2854]/90'
              }`}
            >
              <div className={`text-3xl sm:text-4xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
                isDay ? 'text-slate-950' : 'text-white'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm font-bold mt-1.5 font-['Space_Grotesk'] ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                {stat.label}
              </div>
              <div className={`text-[11px] mt-0.5 ${
                isDay ? 'text-slate-500' : 'text-blue-200/70'
              }`}>
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
