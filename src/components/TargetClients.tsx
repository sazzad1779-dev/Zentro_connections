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
import { useTheme } from '../context/ThemeContext';

interface TargetClientsProps {
  onOpenContact: (sectorName?: string) => void;
}

export const TargetClients: React.FC<TargetClientsProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();

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
    <section 
      id="clients" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-white text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Dynamic Background Glows */}
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/20' : 'bg-[#0878FF]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>TAILORED ENGAGEMENT MODELS</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Built for Ambitious Businesses
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            Whether you are raising a Series A or modernizing a multi-national enterprise portfolio, we adapt our cross-functional squads to your exact growth stage and velocity demands.
          </p>
        </div>

        {/* Sectors 3x2 Grid - All 6 cards strictly aligned with equal heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className={`rounded-2xl p-6 sm:p-7 border shadow-xl transition-all duration-300 flex flex-col h-full justify-between group backdrop-blur-xs hover:-translate-y-1 ${
                isDay
                  ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-blue-500/10 text-slate-900'
                  : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/85 border-white/10 hover:border-[#00B8E6]/50 text-white'
              }`}
            >
              <div className="flex-1 flex flex-col">
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                    isDay
                      ? 'bg-blue-50 border border-blue-200 text-[#0878FF] group-hover:bg-[#0878FF] group-hover:text-white'
                      : 'bg-white/5 border border-white/10 text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white'
                  }`}>
                    {getSectorIcon(sector.icon)}
                  </div>
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold ${
                    isDay 
                      ? 'bg-blue-50 border border-blue-200 text-[#0878FF]'
                      : 'bg-white/5 border border-white/10 text-[#00B8E6]'
                  }`}>
                    {sector.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold font-['Space_Grotesk'] mb-2.5 transition-colors ${
                  isDay ? 'text-slate-900 group-hover:text-[#0878FF]' : 'text-white group-hover:text-[#00B8E6]'
                }`}>
                  {sector.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                  isDay ? 'text-slate-600' : 'text-blue-100/75'
                }`}>
                  {sector.description}
                </p>

                {/* Key Benefits - Pushed to bottom of content area */}
                <div className={`space-y-2 mb-6 pt-4 border-t mt-auto ${
                  isDay ? 'border-slate-100' : 'border-white/10'
                }`}>
                  {sector.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className={`flex items-center gap-2 text-xs font-medium ${
                      isDay ? 'text-slate-700' : 'text-blue-100/90'
                    }`}>
                      <Check className={`w-3.5 h-3.5 shrink-0 ${
                        isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                      }`} />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button - Strictly aligned at bottom */}
              <button
                onClick={() => onOpenContact(`Partner for ${sector.title}`)}
                className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 group/btn cursor-pointer mt-auto shrink-0 ${
                  isDay
                    ? 'bg-slate-50 hover:bg-[#0878FF] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0878FF] shadow-xs'
                    : 'bg-white/5 hover:bg-[#0878FF] text-slate-200 hover:text-white border border-white/10'
                }`}
              >
                <span>Explore {sector.title.split(' ')[0]} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}

          {/* 6th Card: Custom Venture Studio Model - Strictly identical structure and button alignment */}
          <div className={`rounded-2xl p-6 sm:p-7 shadow-xl flex flex-col h-full justify-between group backdrop-blur-xs hover:-translate-y-1 transition-all duration-300 ${
            isDay
              ? 'bg-gradient-to-br from-blue-50/90 via-white to-slate-50 border border-blue-200 hover:border-blue-400 text-slate-900'
              : 'bg-gradient-to-br from-[#0878FF]/20 via-[#0B2854]/60 to-[#071A36] text-white border border-white/10 hover:border-[#00B8E6]/60'
          }`}>
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                  isDay 
                    ? 'bg-blue-100 text-[#0878FF] border border-blue-200' 
                    : 'bg-[#0878FF]/30 text-[#00B8E6] border border-[#0878FF]/40'
                }`}>
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-bold ${
                  isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-[#00B8E6]/10 border border-[#00B8E6]/30 text-[#00B8E6]'
                }`}>
                  SWEAT EQUITY & CO-BUILD
                </span>
              </div>

              <h3 className={`text-xl font-bold font-['Space_Grotesk'] mb-2.5 transition-colors ${
                isDay ? 'text-slate-900 group-hover:text-[#0878FF]' : 'text-white group-hover:text-[#00B8E6]'
              }`}>
                Venture Studio & Incubation
              </h3>

              <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-normal ${
                isDay ? 'text-slate-600' : 'text-blue-100/75'
              }`}>
                For select high-conviction early-stage startups and corporate spinouts, Zentro invests senior engineering, design leadership, and shared-risk incubation.
              </p>

              {/* Key Benefits - Pushed to bottom of content area */}
              <div className={`space-y-2 mb-6 pt-4 border-t mt-auto ${
                isDay ? 'border-slate-100' : 'border-white/10'
              }`}>
                <div className={`flex items-center gap-2 text-xs font-medium ${isDay ? 'text-slate-700' : 'text-blue-100/90'}`}>
                  <Check className={`w-3.5 h-3.5 shrink-0 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Equity & shared-risk partnership models</span>
                </div>
                <div className={`flex items-center gap-2 text-xs font-medium ${isDay ? 'text-slate-700' : 'text-blue-100/90'}`}>
                  <Check className={`w-3.5 h-3.5 shrink-0 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Full product launch & fundraising decks</span>
                </div>
                <div className={`flex items-center gap-2 text-xs font-medium ${isDay ? 'text-slate-700' : 'text-blue-100/90'}`}>
                  <Check className={`w-3.5 h-3.5 shrink-0 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Direct founder-to-principal access</span>
                </div>
              </div>
            </div>

            {/* Action Button - Identical height & alignment with all other cards */}
            <button
              onClick={() => onOpenContact('Venture Studio Incubation')}
              className={`w-full py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer mt-auto shrink-0 shadow-lg ${
                isDay
                  ? 'bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-blue-500/25'
                  : 'bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-blue-500/25'
              }`}
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
