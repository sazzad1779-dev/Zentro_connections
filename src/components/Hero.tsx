import React from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import { ZentroNetwork } from './network/ZentroNetwork';
import { FallingStars } from './FallingStars';

interface HeroProps {
  onOpenContact: (serviceName?: string) => void;
  onExploreWork: () => void;
  onSelectService?: (serviceName: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork, onSelectService }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 flex items-center overflow-hidden bg-gradient-to-b from-[#071A36] via-[#0B2854]/75 to-[#071A36]"
    >
      {/* Falling Stars & Twinkling Cosmos Background Canvas */}
      <FallingStars className="opacity-90" />

      {/* Background Decorative Grid & Glow Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#0878FF]/20 to-[#00B8E6]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#0878FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Brand Statement & CTA (Approx 50% width) */}
          <div className="lg:col-span-6 flex flex-col items-start text-left relative z-20">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/10 border border-white/15 shadow-xs mb-5 sm:mb-6 text-[11px] sm:text-xs font-bold tracking-widest text-white uppercase backdrop-blur-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B8E6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B8E6]"></span>
              </span>
              <span>CREATIVITY × TECHNOLOGY</span>
              <span className="text-white/30">|</span>
              <span className="text-[#00B8E6] font-medium tracking-normal text-[10px] sm:text-[11px]">Intelligent Ecosystem</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-4 sm:mb-6 font-['Space_Grotesk']">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00B8E6] to-[#0878FF]">Digital Experiences</span> That Move Brands Forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-blue-100/85 leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-xs transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10 text-xs text-blue-200/75 font-medium">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise SLA & Security</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Zap className="w-4 h-4 text-[#00B8E6] shrink-0" />
                <span>Sub-second Load Speeds</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-4 h-4 text-[#00B8E6] shrink-0" />
                <span>Award-Winning Design</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Interactive Animated Constellation Graph (Approx 50% width) */}
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
