import React from 'react';
import { Target, Compass, Sparkles, Activity, ShieldCheck, Zap } from 'lucide-react';

export const MissionVision: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0878FF]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Aligned consistently with Capabilities, Process & About) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>OUR NORTH STAR & LONG-TERM VISION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Guiding Principles & Global Vision
          </h2>

          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
            Every digital platform, brand architecture, and line of code we ship is anchored in enduring craft. We bridge the gap between abstract creative vision and high-velocity engineering rigor.
          </p>
        </div>

        {/* Dual Monolith Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Mission Card */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-[#0B2854]/40 hover:bg-[#0B2854]/75 border border-white/10 hover:border-[#00B8E6]/50 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Target className="w-36 h-36 text-[#0878FF]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 text-[#00B8E6] border border-blue-400/30 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B8E6] block mb-2">
                MISSION STATEMENT
              </span>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight mb-4">
                Empowering visionary brands through strategic clarity, relentless craft, and scalable digital architectures.
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-normal">
                We exist to eliminate the friction between creative ambition and technical reality. By building lean, multi-disciplinary pods of senior specialists, we give growing companies the velocity of an in-house SWAT team with the breadth of a global consultancy.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/70 relative z-10 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Human-Centered • Data-Backed</span>
              </span>
              <span className="text-[#00B8E6] font-semibold">Strategic Execution</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0878FF]/15 via-[#0B2854]/40 to-[#071A36] border border-white/10 hover:border-[#00B8E6]/60 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Compass className="w-36 h-36 text-[#00B8E6]" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-[#0878FF]/30 text-white border border-[#0878FF]/50 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20">
                <Compass className="w-6 h-6 text-[#00B8E6]" />
              </div>

              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00B8E6] block mb-2">
                GLOBAL VISION
              </span>

              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight mb-4">
                Becoming the global benchmark for creative technology partnerships, defining how modern software is felt and experienced.
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed font-normal">
                We envision a digital ecosystem where enterprise software is as inspiring to use as high-end consumer products. We continually push the boundaries of real-time web interactivity, 3D spatial systems, and AI-accelerated development.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-blue-200/70 relative z-10 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Zap className="w-3.5 h-3.5 text-[#00B8E6]" />
                <span>Global Reach • Enduring Craft</span>
              </span>
              <span className="text-[#00B8E6] font-semibold">Next-Gen Benchmark</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
