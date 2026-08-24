import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Building2, Globe2, ShieldCheck, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

interface PartnerCompany {
  name: string;
  category: 'all' | 'enterprise' | 'fintech' | 'deeptech' | 'health';
  sector: string;
  tag: string;
  location: string;
  solution: string;
  renderIcon: (color: string) => React.ReactNode;
}

export const SocialProof: React.FC = () => {
  const { isDay } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const partnerCompanies: PartnerCompany[] = [
    {
      name: 'APEX CLOUD',
      category: 'enterprise',
      sector: 'Enterprise Cloud Infrastructure',
      tag: 'Series B • $45M',
      location: 'San Francisco, CA',
      solution: 'Cloud Data Architecture & Multi-Tenant Portal',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 3L20 18H4L12 3Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 9L16 18H8L12 9Z" fill={color} fillOpacity="0.25" />
          <circle cx="12" cy="14" r="1.5" fill={color} />
        </svg>
      )
    },
    {
      name: 'VANGUARD LABS',
      category: 'fintech',
      sector: 'FinTech & Capital Protocol',
      tag: 'Enterprise Tier',
      location: 'London / New York',
      solution: 'Institutional Settlement Engine & UI',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L4 7V13C4 18 7.5 21.5 12 22C16.5 21.5 20 18 20 13V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 11L12 14L15 8" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      name: 'HYPERION BIO',
      category: 'health',
      sector: 'Precision Genomics & AI',
      tag: 'NASDAQ Listed',
      location: 'Boston / Basel',
      solution: 'Clinical Trial Analytics & Visualizer',
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
      name: 'STRATA SYSTEMS',
      category: 'enterprise',
      sector: 'Asset Intelligence & Wealth',
      tag: '$1.4B AUM',
      location: 'Singapore / Zurich',
      solution: 'Ultra-Secure Client Wealth Portal',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L21 7V17L12 22L3 17V7L12 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 22V12M21 7L12 12M3 7L12 12" stroke={color} strokeWidth="1.5" />
        </svg>
      )
    },
    {
      name: 'AETHER SPATIAL',
      category: 'deeptech',
      sector: 'Spatial Computing & Audio',
      tag: 'Design Award 2025',
      location: 'Berlin / Tokyo',
      solution: 'Interactive 3D WebGL Configurator',
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
      category: 'enterprise',
      sector: 'Autonomous Fleet Logistics',
      tag: 'Series C • $110M',
      location: 'Austin / Munich',
      solution: 'Real-Time Telemetry & Dispatch Web App',
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
      category: 'deeptech',
      sector: 'Autonomous Agent Engine',
      tag: 'YC S24 Alum',
      location: 'San Francisco, CA',
      solution: 'Low-Latency AI Dashboard & Tooling',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
          <polyline points="12 6 12 12 16 14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="3" r="1.5" fill={color} />
        </svg>
      )
    },
    {
      name: 'QUANTUM PULSE',
      category: 'fintech',
      sector: 'High-Frequency Trading Tech',
      tag: '99.999% SLA',
      location: 'Chicago / London',
      solution: 'Sub-Millisecond Monitoring UI System',
      renderIcon: (color: string) => (
        <svg className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  const filterTabs = [
    { id: 'all', label: 'All Global Partners' },
    { id: 'enterprise', label: 'Enterprise & Cloud' },
    { id: 'fintech', label: 'FinTech & Capital' },
    { id: 'deeptech', label: 'DeepTech & AI' },
    { id: 'health', label: 'Life Sciences & Health' },
  ];

  const filteredCompanies = selectedFilter === 'all'
    ? partnerCompanies
    : partnerCompanies.filter(c => c.category === selectedFilter);

  return (
    <section id="trust" className={`py-16 sm:py-24 transition-colors duration-300 relative overflow-hidden ${
      isDay 
        ? 'bg-slate-50/90 border-y border-slate-200/80' 
        : 'bg-[#071A36] border-y border-white/10'
    }`}>
      {/* Background ambient lighting */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-48 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/40' : 'bg-[#0878FF]/15'
      }`} />
      <div className={`absolute bottom-0 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-cyan-100/40' : 'bg-[#00B8E6]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4 border shadow-2xs ${
            isDay 
              ? 'bg-blue-50 border-blue-200 text-[#0878FF]' 
              : 'bg-white/5 border-white/15 text-[#00B8E6]'
          }`}>
            <Building2 className="w-3.5 h-3.5" />
            <span>TRUSTED BY HIGH-GROWTH STARTUPS & ENTERPRISES WORLDWIDE</span>
          </div>

          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight font-['Space_Grotesk'] leading-tight ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Powering Market-Leading Brands <br className="hidden sm:block" />
            <span className={`text-transparent bg-clip-text ${
              isDay 
                ? 'bg-gradient-to-r from-[#0878FF] via-blue-600 to-[#00B8E6]' 
                : 'bg-gradient-to-r from-[#00B8E6] via-[#0878FF] to-blue-200'
            }`}>
              Across 16 Countries
            </span>
          </h2>

          <p className={`text-xs sm:text-base mt-4 font-normal max-w-2xl mx-auto leading-relaxed ${
            isDay ? 'text-slate-600' : 'text-blue-100/80'
          }`}>
            From venture-backed disruptors to global enterprises, we architect high-performance platforms, brand systems, and engineering engines that define categories.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => {
              const isActive = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                    isActive
                      ? isDay
                        ? 'bg-[#0878FF] text-white shadow-sm font-semibold'
                        : 'bg-[#00B8E6] text-[#071A36] shadow-sm font-bold'
                      : isDay
                        ? 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                        : 'bg-white/5 text-blue-200/70 hover:bg-white/10 hover:text-white border border-white/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Partner Brand Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
          {filteredCompanies.map((company, idx) => {
            const iconColor = isDay ? '#0878FF' : '#00B8E6';
            return (
              <div 
                key={idx}
                className={`p-5 sm:p-6 rounded-2xl border transition-all duration-300 group flex flex-col justify-between shadow-xs hover:-translate-y-1 ${
                  isDay 
                    ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/5' 
                    : 'bg-[#0B2854]/50 border-white/10 hover:border-[#00B8E6]/50 hover:bg-[#0B2854]/80 hover:shadow-xl hover:shadow-cyan-500/10'
                }`}
              >
                <div>
                  {/* Card Header: Icon + Tag */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                      isDay 
                        ? 'bg-blue-50 group-hover:bg-blue-100/70' 
                        : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                      {company.renderIcon(iconColor)}
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-semibold ${
                      isDay
                        ? 'bg-blue-50 text-[#0878FF] border-blue-200'
                        : 'bg-[#0878FF]/20 text-[#00B8E6] border-[#0878FF]/30'
                    }`}>
                      {company.tag}
                    </span>
                  </div>

                  {/* Brand Name */}
                  <h3 className={`text-base sm:text-lg font-bold font-['Space_Grotesk'] tracking-wide leading-tight transition-colors flex items-center justify-between ${
                    isDay 
                      ? 'text-slate-900 group-hover:text-[#0878FF]' 
                      : 'text-white group-hover:text-[#00B8E6]'
                  }`}>
                    <span>{company.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Sector */}
                  <p className={`text-xs mt-1 font-medium ${
                    isDay ? 'text-slate-500' : 'text-blue-200/70'
                  }`}>
                    {company.sector}
                  </p>

                  {/* Solution Delivered */}
                  <div className={`mt-3 pt-3 border-t text-xs leading-relaxed ${
                    isDay ? 'border-slate-100 text-slate-600' : 'border-white/10 text-blue-100/80'
                  }`}>
                    <span className="font-mono text-[10px] uppercase block text-slate-400 mb-0.5">Focus:</span>
                    {company.solution}
                  </div>
                </div>

                {/* Location Footer */}
                <div className={`mt-4 pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                  isDay ? 'border-slate-100 text-slate-400' : 'border-white/5 text-blue-200/50'
                }`}>
                  <span className="flex items-center gap-1">
                    <Globe2 className="w-3 h-3 text-[#00B8E6]" />
                    {company.location}
                  </span>
                  <span className="text-emerald-500 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Active Partner
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Delivery & Standards Feature Strip */}
        <div className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
          isDay 
            ? 'bg-white/80 border-slate-200 text-slate-800 shadow-2xs' 
            : 'bg-[#0B2854]/40 border-white/10 text-blue-100 shadow-md'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10 text-center md:text-left">
            <div className="flex items-center gap-3.5 px-2 py-1">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isDay ? 'bg-blue-50 text-[#0878FF]' : 'bg-white/5 text-[#00B8E6]'
              }`}>
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <strong className={`block text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>
                  16 Global Markets Served
                </strong>
                <span className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                  Americas, EMEA, and APAC cross-border operations
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 px-2 md:px-6 py-1">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isDay ? 'bg-blue-50 text-[#0878FF]' : 'bg-white/5 text-[#00B8E6]'
              }`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <strong className={`block text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>
                  Enterprise Security & SOC2 Ready
                </strong>
                <span className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                  Airtight governance, NDAs, and data isolation protocols
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3.5 px-2 md:px-6 py-1">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                isDay ? 'bg-blue-50 text-[#0878FF]' : 'bg-white/5 text-[#00B8E6]'
              }`}>
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <strong className={`block text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>
                  Dedicated Engineering Pods
                </strong>
                <span className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                  Full-stack squads aligned to sprint milestones & guaranteed SLAs
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

