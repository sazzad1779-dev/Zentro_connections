import React from 'react';
import { Target, Compass, Sparkles, Zap, ShieldCheck } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="vision-mission" className="py-24 bg-[#071A36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0878FF]/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B8E6]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#00B8E6] border border-white/15 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR NORTH STAR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Guiding Principles & Global Vision
          </h2>
          <p className="text-base sm:text-lg text-blue-200/80 mt-3">
            Every digital platform, brand identity, and line of code we craft is anchored in long-term purpose.
          </p>
        </div>

        {/* Dual Monolith Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0B2854]/90 to-[#071A36] border border-blue-800/40 shadow-2xl flex flex-col justify-between group hover:border-[#0878FF]/80 transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-32 h-32 text-[#0878FF]" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-[#00B8E6] border border-blue-400/30 flex items-center justify-center mb-8">
                <Target className="w-7 h-7" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B8E6] block mb-2">
                OUR MISSION
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight mb-6">
                Helping brands grow through strategic communication, creative thinking, and meaningful digital experiences.
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
                We exist to demystify emerging technologies and make high-end creative execution accessible to ambitious companies worldwide. We measure our success by the tangible market share, user love, and valuation growth our partners achieve.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/70 relative z-10">
              <span>Human-Centered • Data-Backed</span>
              <span className="text-[#00B8E6] font-semibold">Strategic Execution</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-[#0878FF]/20 via-[#0B2854]/90 to-[#071A36] border border-[#0878FF]/40 shadow-2xl flex flex-col justify-between group hover:border-[#00B8E6] transition-all duration-300">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Compass className="w-32 h-32 text-[#00B8E6]" />
            </div>

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#0878FF]/30 text-white border border-[#0878FF]/50 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
                <Compass className="w-7 h-7 text-[#00B8E6]" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B8E6] block mb-2">
                OUR VISION
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight mb-6">
                Becoming the global benchmark for creative technology partnerships, empowering businesses to lead with purpose and precision.
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
                We envision a digital economy where software is not just functional, but genuinely inspiring to interact with. By breaking down the traditional divide between design agencies and tech consultancies, we set a new global standard for digital craft.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/70 relative z-10">
              <span>Global Reach • Enduring Craft</span>
              <span className="text-[#00B8E6] font-semibold">Next-Gen Benchmark</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
