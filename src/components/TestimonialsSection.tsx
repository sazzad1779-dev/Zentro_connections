import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Activity,
  ShieldCheck,
  Building,
  TrendingUp
} from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = TESTIMONIALS_DATA[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Consistently aligned with Capabilities, Process, Vision & About) */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>CLIENT ENDORSEMENTS & VERIFIED PROOF</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Trusted by Leaders Who Value Craft
          </h2>

          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
            Direct feedback from venture-backed founders, CTOs, and product executives who trust Zentro to execute mission-critical brand and digital transformations.
          </p>
        </div>

        {/* Featured Testimonial Showcase */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#0B2854]/45 border border-white/15 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xs">
          
          {/* Watermark Quote */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white/5 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 stroke-1 fill-white/5" />
          </div>

          <div className="relative z-10">
            
            {/* Top Bar: Stars, Verified Status & Metric Chip */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2 font-mono">5.0 Verified Executive Review</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#00B8E6] text-xs font-mono font-bold">
                <span className="text-sm sm:text-base font-extrabold">{current.metric}</span>
                <span className="text-blue-100/70 font-normal">{current.metricLabel}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-lg sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-10 font-['Space_Grotesk']">
              "{current.quote}"
            </blockquote>

            {/* Author & Controls Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
              
              {/* Author Profile */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-[#00B8E6]/40 shadow-xs"
                />
                <div>
                  <div className="text-base sm:text-lg font-bold text-white flex items-center gap-1.5 font-['Space_Grotesk']">
                    <span>{current.author}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#00B8E6]" />
                  </div>
                  <div className="text-xs sm:text-sm text-blue-200/70">
                    {current.role} • <strong className="text-white font-semibold">{current.company}</strong>
                  </div>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 hover:bg-[#0878FF] text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="text-xs font-mono text-blue-200/70 px-3">
                  0{activeIndex + 1} / 0{TESTIMONIALS_DATA.length}
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 hover:bg-[#0878FF] text-white flex items-center justify-center transition-colors border border-white/10 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Thumbnail Selector Strip for direct navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 mt-6">
          {TESTIMONIALS_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIndex(idx)}
              className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                activeIndex === idx
                  ? 'bg-[#0B2854] border-[#00B8E6] ring-1 ring-[#00B8E6]/60 text-white'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
              }`}
            >
              <img
                src={item.avatar}
                alt={item.author}
                className="w-9 h-9 rounded-lg object-cover shrink-0"
              />
              <div className="min-w-0">
                <div className="text-xs font-bold font-['Space_Grotesk'] truncate">{item.author}</div>
                <div className="text-[11px] text-blue-200/60 truncate">{item.company}</div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
