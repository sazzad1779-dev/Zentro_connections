import React from 'react';
import { 
  ArrowRight,
  Quote
} from 'lucide-react';
import leadershipTeamImage from '../assets/images/leadership_execs_1787505009528.jpg';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-6 font-mono">
          ABOUT ZENTRO COMMUNICATIONS
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Editorial Headline Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Space_Grotesk']">
              We don't just communicate ideas. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#0878FF] to-blue-200">
                We build experiences around them.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-blue-100/80 leading-relaxed font-normal">
              <p>
                Founded on the conviction that branding, engineering, and growth must operate as a unified discipline, Zentro Communications partners with visionary companies to turn ambitious ideas into digital market leaders.
              </p>
              <p>
                Where traditional agencies silo designers from developers, our cross-functional teams collaborate seamlessly—ensuring every visual concept is technically feasible, performant, and conversion-optimized.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 group cursor-pointer"
              >
                <span>Discover What's Possible</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right: Leadership Image & Standalone Quote */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Image Container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 group aspect-video sm:aspect-16/10 bg-[#0B2854]">
              <img
                src={leadershipTeamImage}
                alt="Zentro Communications Leadership Team: Raju Ahmed Asif, Mir Showkat Hossain, Abu Sayed Hasan"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A36]/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Standalone Attractive Statement Card Styled As An Elegant Quote */}
            <div className="relative p-4 sm:p-5 rounded-2xl bg-[#0B2854]/85 border border-[#00B8E6]/30 shadow-xl backdrop-blur-md overflow-hidden">
              {/* Subtle Ambient Glow */}
              <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-[#0878FF]/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 relative z-10">
                <div className="p-2 rounded-xl bg-blue-500/15 border border-blue-500/30 text-[#00B8E6] shrink-0">
                  <Quote className="w-4 h-4" />
                </div>
                <p className="text-xs sm:text-sm font-medium text-blue-50/95 italic leading-relaxed tracking-wide font-['Space_Grotesk']">
                  “Bridging the gap between human intuition and technical capability.”
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
