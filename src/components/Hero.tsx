import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { ZentroNetwork } from './network/ZentroNetwork';
import { FallingStars } from './FallingStars';
import { useTheme } from '../context/ThemeContext';

interface HeroProps {
  onOpenContact: (serviceName?: string) => void;
  onExploreWork: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork, onSelectService }) => {
  const { isDay } = useTheme();

  return (
    <section 
      id="hero" 
      className={`relative min-h-[90vh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 flex items-center overflow-hidden transition-colors duration-300 ${
        isDay
          ? 'bg-gradient-to-b from-slate-50 via-white to-blue-50/30 text-slate-900 border-b border-slate-200/80'
          : 'bg-gradient-to-b from-[#071A36] via-[#0B2854]/75 to-[#071A36] text-white'
      }`}
    >
      {/* Falling Stars Canvas (subtle in day, vibrant in night) */}
      <FallingStars className={isDay ? 'opacity-30' : 'opacity-90'} />

      {/* Background Decorative Grid & Glow Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] blur-3xl rounded-full pointer-events-none ${
        isDay 
          ? 'bg-gradient-to-tr from-blue-200/30 to-cyan-200/30' 
          : 'bg-gradient-to-tr from-[#0878FF]/20 to-[#00B8E6]/20'
      }`} />
      <div className={`absolute -top-24 right-0 w-[500px] h-[500px] blur-3xl rounded-full pointer-events-none ${
        isDay ? 'bg-blue-100/40' : 'bg-[#0878FF]/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Brand Statement & CTA (Approx 50% width) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            
            {/* Eyebrow Badge */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full shadow-xs mb-5 sm:mb-6 text-[11px] sm:text-xs font-bold tracking-widest uppercase backdrop-blur-xs transition-colors ${
              isDay
                ? 'bg-blue-50 border border-blue-200 text-blue-700'
                : 'bg-white/10 border border-white/15 text-white'
            }`}>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0878FF] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0878FF]"></span>
              </span>
              <span>CREATIVITY × TECHNOLOGY</span>
              <span className={isDay ? 'text-slate-300' : 'text-white/30'}>|</span>
              <span className={`font-medium tracking-normal text-[10px] sm:text-[11px] ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                Intelligent Ecosystem
              </span>
            </div>

            {/* Main Headline */}
            <h1 className={`text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.14] mb-4 sm:mb-6 font-['Space_Grotesk'] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0878FF] via-[#0284C7] to-cyan-500">Digital Experiences</span> That Move Brands Forward.
            </h1>

            {/* Supporting Text */}
            <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal ${
              isDay ? 'text-slate-600' : 'text-blue-100/85'
            }`}>
              Zentro connects creativity, technology, strategy, and digital services into one intelligent ecosystem—helping ambitious brands create meaningful connections and scalable products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={() => onOpenContact()}
                id="hero-primary-cta-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl font-semibold text-sm bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                id="hero-secondary-cta-btn"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-semibold text-sm shadow-xs transition-all duration-200 cursor-pointer ${
                  isDay
                    ? 'text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 hover:border-slate-400'
                    : 'text-white bg-white/10 hover:bg-white/20 border border-white/20'
                }`}
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className={`flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t text-xs font-medium ${
              isDay ? 'border-slate-200 text-slate-500' : 'border-white/10 text-blue-200/75'
            }`}>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Enterprise SLA & Security</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 text-[#0878FF] shrink-0" />
                <span>Sub-second Load Speeds</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 text-[#0878FF] shrink-0" />
                <span>Award-Winning Design</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Animated Constellation Graph */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center mt-6 lg:mt-0 w-full overflow-visible">
            <div className="w-full flex justify-center items-center overflow-visible">
              <ZentroNetwork 
                onSelectService={onSelectService}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
