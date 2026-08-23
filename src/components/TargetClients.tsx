import React from 'react';
import { 
  Rocket, 
  Building2, 
  ShieldCheck, 
  ShoppingBag, 
  Cpu, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import { CLIENT_SECTORS } from '../data/siteData';

interface TargetClientsProps {
  onOpenContact: (sectorName?: string) => void;
}

export const TargetClients: React.FC<TargetClientsProps> = ({ onOpenContact }) => {
  const getSectorIcon = (iconName: string) => {
    switch (iconName) {
      case 'Rocket': return <Rocket className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      default: return <Rocket className="w-6 h-6" />;
    }
  };

  return (
    <section id="clients" className="py-24 bg-[#071A36] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            TAILORED ENGAGEMENT MODELS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Built for Ambitious Businesses
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 mt-3">
            Whether you are raising a Series A or modernizing a multi-national enterprise portfolio, we adapt our squads to your exact growth stage.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLIENT_SECTORS.map((sector) => (
            <div
              key={sector.id}
              className="bg-[#0B2854]/60 hover:bg-[#0B2854] rounded-3xl p-8 border border-white/10 hover:border-[#00B8E6]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-white"
            >
              <div>
                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white flex items-center justify-center shadow-xs border border-white/10 transition-colors">
                    {getSectorIcon(sector.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-mono font-bold text-[#00B8E6]">
                    {sector.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#00B8E6] transition-colors font-['Space_Grotesk'] mb-3">
                  {sector.title}
                </h3>

                <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-6">
                  {sector.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  {sector.keyBenefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                      <Check className="w-4 h-4 text-[#00B8E6] shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenContact(`Partner for ${sector.title}`)}
                className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-[#0878FF] text-white hover:text-white border border-white/15 font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-2xs group/btn"
              >
                <span>Explore {sector.title.split(' ')[0]} Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}

          {/* Custom Venture Partnership Card */}
          <div className="bg-gradient-to-br from-[#0B2854] to-[#071A36] rounded-3xl p-8 text-white shadow-2xl border border-blue-800/60 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#00B8E6] border border-white/10 mb-6">
                <span>VENTURE STUDIO MODEL</span>
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-3">
                Co-Building Next-Gen Tech Ventures
              </h3>
              <p className="text-xs sm:text-sm text-blue-200/80 leading-relaxed mb-6">
                For selected early-stage startups and internal spinouts, Zentro offers sweat-equity and shared-risk incubation models.
              </p>
            </div>

            <button
              onClick={() => onOpenContact('Venture Studio Incubation')}
              className="w-full py-3 px-4 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25"
            >
              <span>Apply for Venture Incubation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
