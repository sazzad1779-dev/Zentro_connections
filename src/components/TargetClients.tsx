import React from 'react';
import { 
  Rocket, 
  Building2, 
  ShieldCheck, 
  ShoppingBag, 
  Cpu, 
  ArrowRight, 
  Check,
  Activity,
  Sparkles
} from 'lucide-react';
import { CLIENT_SECTORS } from '../data/siteData';

interface TargetClientsProps {
  onOpenContact: (sectorName?: string) => void;
}

export const TargetClients: React.FC<TargetClientsProps> = ({ onOpenContact }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Rocket className="w-5 h-5" />;
    }
  };

  return (
    <section id="clients" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Consistently aligned with Capabilities, Process & About) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>TAILORED ENGAGEMENT MODELS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Built for Ambitious Businesses
          </h2>

          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
            Whether you are raising a Series A or modernizing a multi-national enterprise portfolio, we adapt our cross-functional squads to your exact growth stage and velocity demands.
          </p>
        </div>

        {/* Sectors 3x2 Grid: Balanced, Crisp & Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-[#0B2854]/40 hover:bg-[#0B2854]/85 rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-[#00B8E6]/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-white backdrop-blur-xs hover:-translate-y-1"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white flex items-center justify-center transition-colors">
                    {getSectorIcon(sector.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-semibold text-[#00B8E6]">
                    {sector.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B8E6] transition-colors font-['Space_Grotesk'] mb-2.5">
                  {sector.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100/75 leading-relaxed mb-6 font-normal">
                  {sector.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                  {sector.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-blue-100/90">
                      <Check className="w-3.5 h-3.5 text-[#00B8E6] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenContact(`Partner for ${sector.title}`)}
                className="w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-[#0878FF] text-slate-200 hover:text-white border border-white/10 font-semibold text-xs transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Explore {sector.title.split(' ')[0]} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}

          {/* 6th Card: Custom Venture Studio Model */}
          <div className="bg-gradient-to-br from-[#0878FF]/20 via-[#0B2854]/60 to-[#071A36] rounded-2xl p-6 sm:p-7 text-white shadow-xl border border-white/10 hover:border-[#00B8E6]/60 flex flex-col justify-between group backdrop-blur-xs hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-[#0878FF]/30 text-[#00B8E6] border border-[#0878FF]/40 flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="px-2.5 py-1 rounded-md bg-[#00B8E6]/10 border border-[#00B8E6]/30 text-[11px] font-mono font-bold text-[#00B8E6]">
                  SWEAT EQUITY & CO-BUILD
                </span>
              </div>

              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white group-hover:text-[#00B8E6] transition-colors mb-2.5">
                Venture Studio & Incubation
              </h3>

              <p className="text-xs sm:text-sm text-blue-100/75 leading-relaxed mb-6 font-normal">
                For select high-conviction early-stage startups and corporate spinouts, Zentro invests senior engineering, design leadership, and shared-risk incubation.
              </p>

              <div className="space-y-2 mb-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/90">
                  <Check className="w-3.5 h-3.5 text-[#00B8E6] shrink-0" />
                  <span>Equity / shared-risk partnership models</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/90">
                  <Check className="w-3.5 h-3.5 text-[#00B8E6] shrink-0" />
                  <span>Full product launch & fundraising decks</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-blue-100/90">
                  <Check className="w-3.5 h-3.5 text-[#00B8E6] shrink-0" />
                  <span>Direct founder-to-principal access</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onOpenContact('Venture Studio Incubation')}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 cursor-pointer"
            >
              <span>Apply for Incubation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
