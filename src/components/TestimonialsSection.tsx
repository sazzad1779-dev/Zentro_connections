import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Activity
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

export const TestimonialsSection: React.FC = () => {
  const { isDay } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="testimonials" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-slate-50 text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background Lighting */}
      <div className={`absolute top-1/2 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-1/2 ${
        isDay ? 'bg-blue-100/40' : 'bg-[#0878FF]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>CLIENT ENDORSEMENTS & VERIFIED PROOF</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Trusted by Leaders Who Value Craft
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            Direct feedback from venture-backed founders, CTOs, and product executives who trust Zentro to execute mission-critical brand and digital transformations.
          </p>
        </div>

        {/* Featured Testimonial Showcase */}
        <div className={`rounded-2xl sm:rounded-3xl border p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xs transition-colors ${
          isDay
            ? 'bg-white border-slate-200 text-slate-900 shadow-blue-500/5'
            : 'bg-[#0B2854]/45 border-white/15 text-white'
        }`}>
          
          {/* Watermark Quote */}
          <div className={`absolute top-6 right-6 sm:top-8 sm:right-8 pointer-events-none ${
            isDay ? 'text-slate-200/50 fill-slate-200/50' : 'text-white/5 fill-white/5'
          }`}>
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 stroke-1" />
          </div>

          <div className="relative z-10">
            
            {/* Top Bar: Stars, Verified Status & Metric Chip */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
                <span className={`text-xs font-bold ml-2 font-mono ${
                  isDay ? 'text-slate-600' : 'text-slate-300'
                }`}>5.0 Verified Executive Review</span>
              </div>

              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold ${
                isDay
                  ? 'bg-blue-50 border border-blue-200 text-[#0878FF]'
                  : 'bg-white/5 border border-white/10 text-[#00B8E6]'
              }`}>
                <span className="text-sm sm:text-base font-extrabold">{current.metric}</span>
                <span className={`font-normal ${isDay ? 'text-slate-600' : 'text-blue-100/70'}`}>{current.metricLabel}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className={`text-lg sm:text-2xl lg:text-3xl font-medium leading-relaxed mb-10 font-['Space_Grotesk'] ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              "{current.quote}"
            </blockquote>

            {/* Author & Controls Row */}
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t ${
              isDay ? 'border-slate-100' : 'border-white/10'
            }`}>
              
              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 shadow-xs ${
                    isDay ? 'border-blue-200' : 'border-[#00B8E6]/40'
                  }`}
                />
                <div>
                  <div className={`text-base sm:text-lg font-bold flex items-center gap-1.5 font-['Space_Grotesk'] ${
                    isDay ? 'text-slate-900' : 'text-white'
                  }`}>
                    <span>{current.author}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#0878FF]" />
                  </div>
                  <div className={`text-xs sm:text-sm ${isDay ? 'text-slate-600' : 'text-blue-200/70'}`}>
                    {current.role} • <strong className={`font-semibold ${isDay ? 'text-slate-950' : 'text-white'}`}>{current.company}</strong>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors border cursor-pointer ${
                    isDay 
                      ? 'bg-slate-100 hover:bg-[#0878FF] hover:text-white text-slate-700 border-slate-200' 
                      : 'bg-white/5 hover:bg-[#0878FF] text-white border-white/10'
                  }`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className={`text-xs font-mono px-3 ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                  0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center transition-colors border cursor-pointer ${
                    isDay 
                      ? 'bg-slate-100 hover:bg-[#0878FF] hover:text-white text-slate-700 border-slate-200' 
                      : 'bg-white/5 hover:bg-[#0878FF] text-white border-white/10'
                  }`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Thumbnail Selector Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                activeIndex === idx
                  ? isDay
                    ? 'bg-white border-[#0878FF] ring-2 ring-[#0878FF] shadow-sm text-slate-900'
                    : 'bg-[#0B2854] border-[#00B8E6] ring-1 ring-[#00B8E6]/60 text-white'
                  : isDay
                    ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.author}
                className="w-9 h-9 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className={`text-xs font-bold font-['Space_Grotesk'] truncate ${
                  isDay ? 'text-slate-900' : 'text-white'
                }`}>{item.author}</div>
                <div className={`text-[11px] truncate ${
                  isDay ? 'text-slate-500' : 'text-blue-200/60'
                }`}>{item.company}</div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
