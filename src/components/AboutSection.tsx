import React from 'react';
import { 
  ArrowRight,
  Quote
} from 'lucide-react';
import leadershipTeamImage from '../assets/images/leadership_execs_1787505009528.jpg';
import { useTheme } from '../context/ThemeContext';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 sm:py-24 md:py-28 relative overflow-hidden transition-colors duration-300 ${
        isDay 
          ? 'bg-white text-slate-900 border-b border-slate-200/80' 
          : 'bg-[#071A36] text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-6 font-mono ${
          isDay
            ? 'bg-blue-50 border border-blue-200 text-[#0878FF]'
            : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
        }`}>
          ABOUT ZENTRO COMMUNICATIONS
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Editorial Headline Statement */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] font-['Space_Grotesk'] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              We don't just communicate ideas. <br className="hidden sm:inline" />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                isDay 
                  ? 'from-[#0878FF] via-[#0284C7] to-blue-600'
                  : 'from-[#00B8E6] via-[#0878FF] to-blue-200'
              }`}>
                We build experiences around them.
              </span>
            </h2>

            <div className={`space-y-4 text-base sm:text-lg leading-relaxed font-normal ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
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
            <div className={`relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group aspect-video sm:aspect-16/10 ${
              isDay ? 'border border-slate-200 bg-slate-100' : 'border border-white/15 bg-[#0B2854]'
            }`}>
              <img
                src={leadershipTeamImage}
                alt="Zentro Communications Leadership Team: Raju Ahmed Asif, Mir Showkat Hossain, Abu Sayed Hasan"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className={`absolute inset-0 pointer-events-none ${
                isDay 
                  ? 'bg-gradient-to-t from-slate-900/40 via-transparent to-transparent'
                  : 'bg-gradient-to-t from-[#071A36]/60 via-transparent to-transparent'
              }`} />
            </div>

            {/* Standalone Attractive Statement Card Styled As An Elegant Quote */}
            <div className={`relative p-4 sm:p-5 rounded-2xl shadow-xl backdrop-blur-md overflow-hidden transition-colors ${
              isDay 
                ? 'bg-white/90 border border-blue-200 shadow-blue-500/5'
                : 'bg-[#0B2854]/85 border border-[#00B8E6]/30'
            }`}>
              {/* Subtle Ambient Glow */}
              <div className={`absolute -right-8 -bottom-8 w-28 h-28 rounded-full blur-2xl pointer-events-none ${
                isDay ? 'bg-blue-100/60' : 'bg-[#0878FF]/20'
              }`} />
              
              <div className="flex items-center gap-3.5 relative z-10">
                <div className={`p-2 rounded-xl shrink-0 ${
                  isDay
                    ? 'bg-blue-50 border border-blue-200 text-[#0878FF]'
                    : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
                }`}>
                  <Quote className="w-4 h-4" />
                </div>
                <p className={`text-xs sm:text-sm font-medium italic leading-relaxed tracking-wide font-['Space_Grotesk'] ${
                  isDay ? 'text-slate-800' : 'text-blue-50/95'
                }`}>
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
