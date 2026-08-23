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
  Layers,
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact, onSelectService }) => {
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
    <section id="services" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Full width description, no filter buttons) */}
        <div className="mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>CORE ARCHITECTURAL DISCIPLINES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Our Capabilities
          </h2>

          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed max-w-4xl font-normal">
            We partner with venture-backed startups and ambitious enterprises to design, engineer, and scale market-defining digital products. From high-performance cloud architectures to distinctive visual languages and conversion-driven growth engines, we build what moves businesses forward.
          </p>
        </div>

        {/* Startup Capabilities Grid: Professional, Clean & Simple */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES_DATA.map((service) => {
            return (
              <div
                key={service.id}
                id={`capability-card-${service.id}`}
                onClick={() => onSelectService(service)}
                className="group relative rounded-2xl bg-[#0B2854]/40 hover:bg-[#0B2854]/85 border border-white/10 hover:border-[#00B8E6]/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer overflow-hidden backdrop-blur-xs"
              >
                {/* Subtle top card gradient highlight on hover */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00B8E6]/0 group-hover:via-[#00B8E6]/70 to-transparent transition-all duration-500" />

                {/* Top Section: Icon, Number & Category */}
                <div>
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white group-hover:border-[#00B8E6] group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                      {getIcon(service.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-blue-200/60 group-hover:text-[#00B8E6] transition-colors">
                        {service.categoryLabel}
                      </span>
                      <span className="text-xs font-mono font-bold text-white/30 group-hover:text-white/60 transition-colors">
                        /{service.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] tracking-tight group-hover:text-[#00B8E6] transition-colors mb-2.5 leading-snug">
                    {service.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm text-blue-100/75 leading-relaxed mb-6 font-normal">
                    {service.tagline}
                  </p>

                  {/* Key Focus Deliverables (3 core bullets) */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-blue-100/90 font-medium">
                        <Check className="w-3.5 h-3.5 text-[#00B8E6] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Tech Stack & Action Arrow */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 mt-auto">
                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 overflow-hidden">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-white/5 border border-white/5 text-[10px] sm:text-[11px] font-mono text-blue-200/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Explore arrow */}
                  <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#0878FF] border border-white/10 group-hover:border-[#00B8E6] flex items-center justify-center text-blue-200/60 group-hover:text-white transition-all duration-200 shrink-0">
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Clean Startup Multi-Disciplinary Pod Banner */}
        <div className="mt-14 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0B2854] to-[#071A36] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8E6] font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM CROSS-FUNCTIONAL SQUADS</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
              Need a unified sprint across multiple disciplines?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80">
              We frequently assemble dedicated pods combining brand strategists, full-stack engineers, and growth directors for seamless, high-velocity execution.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Multi-Disciplinary Scope')}
            className="shrink-0 px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 group flex items-center gap-2 cursor-pointer"
          >
            <span>Request Custom Squad</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
