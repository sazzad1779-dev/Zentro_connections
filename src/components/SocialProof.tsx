import React from 'react';
import { PARTNER_LOGOS, STATS_DATA } from '../data/siteData';

export const SocialProof: React.FC = () => {
  return (
    <section id="trust" className="py-16 bg-[#071A36] border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow / Statement */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#00B8E6] font-mono">
            TRUSTED BY INDUSTRY LEADERS AND AMBITIOUS INNOVATORS
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 tracking-tight font-['Space_Grotesk']">
            Helping ambitious brands build, grow, and transform digitally.
          </h2>
        </div>

        {/* Client / Partner Logo Marquee / Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-center opacity-85 mb-14">
          {PARTNER_LOGOS.map((partner, idx) => (
            <div 
              key={idx}
              className="flex items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/5 transition-all duration-200 group cursor-default"
              title={partner.name}
            >
              <span className="text-lg text-slate-400 group-hover:text-[#00B8E6] transition-colors">{partner.symbol}</span>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-300 group-hover:text-white transition-colors font-['Space_Grotesk']">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Key Metrics Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="flex flex-col p-5 rounded-2xl bg-[#0B2854]/60 border border-white/10 hover:border-white/20 transition-colors">
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#00B8E6] mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-blue-200/70 mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
