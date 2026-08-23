import React from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Film, 
  Server, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Activity
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact, onSelectService }) => {
  const { isDay } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 sm:w-5 sm:h-5" />;
      case 'Palette': return <Palette className="w-5 h-5 sm:w-5 sm:h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 sm:w-5 sm:h-5" />;
      case 'Film': return <Film className="w-5 h-5 sm:w-5 sm:h-5" />;
      case 'Server': return <Server className="w-5 h-5 sm:w-5 sm:h-5" />;
      case 'Compass': return <Compass className="w-5 h-5 sm:w-5 sm:h-5" />;
      default: return <Sparkles className="w-5 h-5 sm:w-5 sm:h-5" />;
    }
  };

  return (
    <section 
      id="services" 
      className={`py-20 sm:py-24 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay 
          ? 'bg-slate-50 text-slate-900 border-b border-slate-200/80' 
          : 'bg-[#071A36] text-white border-b border-white/10'
      }`}
    >
      {/* Dynamic Background Glows */}
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/20' : 'bg-[#0878FF]/10'
      }`} />
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-cyan-200/20' : 'bg-[#00B8E6]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay 
              ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' 
              : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL DISCIPLINES</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Our Capabilities
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed max-w-4xl font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            We partner with venture-backed startups and ambitious enterprises to design, engineer, and scale market-defining digital products. From high-performance cloud architectures to distinctive visual languages and conversion-driven growth engines, we build what moves businesses forward.
          </p>
        </div>

        {/* Startup Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            return (
              <div
                key={service.id}
                id={`capability-card-${service.id}`}
                onClick={() => onSelectService(service)}
                className={`group relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden backdrop-blur-xs ${
                  isDay
                    ? 'bg-white hover:bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10'
                    : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/85 border border-white/10 hover:border-[#00B8E6]/50 hover:shadow-2xl hover:shadow-blue-500/10'
                }`}
              >
                {/* Subtle top card gradient highlight on hover */}
                <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-[#0878FF]/0 group-hover:via-[#0878FF]/80 to-transparent transition-all duration-500" />

                {/* Top Section: Icon, Number & Category */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isDay
                        ? 'bg-blue-50 border border-blue-200 text-[#0878FF] group-hover:bg-[#0878FF] group-hover:text-white group-hover:shadow-md'
                        : 'bg-white/5 border border-white/10 text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white group-hover:border-[#00B8E6] group-hover:shadow-lg group-hover:shadow-blue-500/30'
                    }`}>
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-mono font-semibold uppercase tracking-wider transition-colors ${
                        isDay 
                          ? 'text-slate-500 group-hover:text-[#0878FF]'
                          : 'text-blue-200/60 group-hover:text-[#00B8E6]'
                      }`}>
                        {service.categoryLabel}
                      </span>
                      <span className={`text-xs font-mono font-bold transition-colors ${
                        isDay ? 'text-slate-300 group-hover:text-slate-500' : 'text-white/30 group-hover:text-white/60'
                      }`}>
                        /{service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold font-['Space_Grotesk'] tracking-tight transition-colors mb-2.5 leading-snug ${
                    isDay
                      ? 'text-slate-900 group-hover:text-[#0878FF]'
                      : 'text-white group-hover:text-[#00B8E6]'
                  }`}>
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className={`text-sm leading-relaxed mb-6 font-normal ${
                    isDay ? 'text-slate-600' : 'text-blue-100/75'
                  }`}>
                    {service.tagline}
                  </p>

                  {/* Key Focus Deliverables */}
                  <div className={`space-y-2.5 mb-6 pt-4 border-t ${
                    isDay ? 'border-slate-100' : 'border-white/10'
                  }`}>
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className={`flex items-start gap-2 text-xs font-medium ${
                        isDay ? 'text-slate-700' : 'text-blue-100/90'
                      }`}>
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                        }`} />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Action Arrow */}
                <div className={`pt-4 border-t flex items-center justify-between gap-3 mt-auto ${
                  isDay ? 'border-slate-100' : 'border-white/10'
                }`}>
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 overflow-hidden">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-mono ${
                          isDay
                            ? 'bg-slate-100 border border-slate-200/80 text-slate-600'
                            : 'bg-white/5 border border-white/5 text-blue-200/70'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Explore arrow */}
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0 ${
                    isDay
                      ? 'bg-slate-100 border border-slate-200 text-slate-500 group-hover:bg-[#0878FF] group-hover:text-white group-hover:border-[#0878FF]'
                      : 'bg-white/5 group-hover:bg-[#0878FF] border border-white/10 group-hover:border-[#00B8E6] text-blue-200/60 group-hover:text-white'
                  }`}>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Clean Multi-Disciplinary Pod Banner */}
        <div className={`mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden transition-colors ${
          isDay
            ? 'bg-gradient-to-r from-blue-50/90 via-slate-50 to-white text-slate-900 border border-blue-200 shadow-blue-500/5'
            : 'bg-gradient-to-r from-[#0B2854] to-[#071A36] text-white border border-white/10 shadow-2xl'
        }`}>
          {/* Ambient Glow */}
          <div className={`absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
            isDay ? 'bg-blue-200/40' : 'bg-[#0878FF]/20'
          }`} />

          <div className="space-y-1.5 text-center md:text-left relative z-10 max-w-2xl">
            <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider font-mono ${
              isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM CROSS-FUNCTIONAL SQUADS</span>
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk'] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              Need a unified sprint across multiple disciplines?
            </h3>
            <p className={`text-xs sm:text-sm ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              We frequently assemble dedicated pods combining brand strategists, full-stack engineers, and growth directors for seamless, high-velocity execution.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Multi-Disciplinary Scope')}
            className="shrink-0 w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 group flex items-center justify-center gap-2 cursor-pointer relative z-10"
          >
            <span>Request Custom Squad</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
