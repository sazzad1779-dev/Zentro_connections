import React from 'react';
import { Target, Compass, Activity, ShieldCheck, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const MissionVision: React.FC = () => {
  const { isDay } = useTheme();

  return (
    <section 
      id="vision-mission" 
      className={`py-20 sm:py-24 md:py-28 relative overflow-hidden border-b transition-colors duration-300 ${
        isDay ? 'bg-white text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background glow effects */}
      <div className={`absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-1/2 ${
        isDay ? 'bg-blue-100/50' : 'bg-[#0878FF]/15'
      }`} />
      <div className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-cyan-100/50' : 'bg-[#00B8E6]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>OUR NORTH STAR & LONG-TERM VISION</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Guiding Principles & Global Vision
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            Every digital platform, brand architecture, and line of code we ship is anchored in enduring craft. We bridge the gap between abstract creative vision and high-velocity engineering rigor.
          </p>
        </div>

        {/* Dual Monolith Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          
          {/* Mission Card */}
          <div className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 border shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs ${
            isDay
              ? 'bg-slate-50 hover:bg-white border-slate-200/90 hover:border-blue-300 hover:shadow-blue-500/10'
              : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/75 border-white/10 hover:border-[#00B8E6]/50'
          }`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Target className="w-36 h-36 text-[#0878FF]" />
            </div>

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                isDay ? 'bg-blue-50 text-[#0878FF] border border-blue-200' : 'bg-blue-500/20 text-[#00B8E6] border border-blue-400/30'
              }`}>
                <Target className="w-6 h-6" />
              </div>

              <span className={`text-xs font-mono font-bold uppercase tracking-widest block mb-2 ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                MISSION STATEMENT
              </span>

              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Space_Grotesk'] leading-tight mb-4 ${
                isDay ? 'text-slate-900' : 'text-white'
              }`}>
                Empowering visionary brands through strategic clarity, relentless craft, and scalable digital architectures.
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                isDay ? 'text-slate-600' : 'text-blue-100/80'
              }`}>
                We exist to eliminate the friction between creative ambition and technical reality. By building lean, multi-disciplinary pods of senior specialists, we give growing companies the velocity of an in-house SWAT team with the breadth of a global consultancy.
              </p>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs relative z-10 font-mono ${
              isDay ? 'border-slate-200 text-slate-500' : 'border-white/10 text-blue-200/70'
            }`}>
              <span className={`flex items-center gap-1.5 ${isDay ? 'text-slate-700' : 'text-slate-300'}`}>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>Human-Centered • Data-Backed</span>
              </span>
              <span className={`font-semibold ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`}>Strategic Execution</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-10 border shadow-xl transition-all duration-300 flex flex-col justify-between group backdrop-blur-xs ${
            isDay
              ? 'bg-gradient-to-br from-blue-50/80 via-white to-slate-50 border-blue-200 hover:border-blue-400 hover:shadow-blue-500/10'
              : 'bg-gradient-to-br from-[#0878FF]/15 via-[#0B2854]/40 to-[#071A36] border-white/10 hover:border-[#00B8E6]/60'
          }`}>
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <Compass className="w-36 h-36 text-[#00B8E6]" />
            </div>

            <div className="relative z-10">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-md ${
                isDay 
                  ? 'bg-[#0878FF] text-white border border-[#0878FF]'
                  : 'bg-[#0878FF]/30 text-white border border-[#0878FF]/50 shadow-blue-500/20'
              }`}>
                <Compass className={`w-6 h-6 ${isDay ? 'text-white' : 'text-[#00B8E6]'}`} />
              </div>

              <span className={`text-xs font-mono font-bold uppercase tracking-widest block mb-2 ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                GLOBAL VISION
              </span>

              <h3 className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-['Space_Grotesk'] leading-tight mb-4 ${
                isDay ? 'text-slate-900' : 'text-white'
              }`}>
                Becoming the global benchmark for creative technology partnerships, defining how modern software is felt and experienced.
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                isDay ? 'text-slate-600' : 'text-blue-100/80'
              }`}>
                We envision a digital ecosystem where enterprise software is as inspiring to use as high-end consumer products. We continually push the boundaries of real-time web interactivity, 3D spatial systems, and AI-accelerated development.
              </p>
            </div>

            <div className={`pt-6 mt-6 border-t flex items-center justify-between text-xs relative z-10 font-mono ${
              isDay ? 'border-slate-200 text-slate-500' : 'border-white/10 text-blue-200/70'
            }`}>
              <span className={`flex items-center gap-1.5 ${isDay ? 'text-slate-700' : 'text-slate-300'}`}>
                <Zap className="w-3.5 h-3.5 text-[#0878FF]" />
                <span>Global Reach • Enduring Craft</span>
              </span>
              <span className={`font-semibold ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`}>Next-Gen Benchmark</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
