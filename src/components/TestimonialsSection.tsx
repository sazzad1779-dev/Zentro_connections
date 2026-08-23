import React, { useState } from 'react';
import { 
  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles 
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
    <section id="testimonials" className="py-24 bg-[#071A36] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            CLIENT ENDORSEMENTS & PROOF
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Trusted by Leaders Who Value Craft
          </h2>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-5xl mx-auto bg-[#0B2854]/70 rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/10 relative text-white">
          
          {/* Subtle Quote Watermark */}
          <div className="absolute top-8 right-8 text-white/5 pointer-events-none">
            <Quote className="w-24 h-24 stroke-1 fill-white/5" />
          </div>

          <div className="relative z-10">
            {/* Stars & Metric Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
                <span className="text-xs font-bold text-slate-300 ml-2 font-mono">5.0 Verified Review</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#00B8E6] text-xs font-bold font-mono">
                <span className="text-base font-extrabold">{current.metric}</span>
                <span className="text-blue-100/70 font-normal">{current.metricLabel}</span>
              </div>
            </div>

            {/* Quote Body */}
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-relaxed mb-10 font-['Space_Grotesk']">
              "{current.quote}"
            </blockquote>

            {/* Author & Controls Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
              
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-[#00B8E6]/40 shadow-xs"
                />
                <div>
                  <div className="text-base font-bold text-white flex items-center gap-1.5 font-['Space_Grotesk']">
                    <span>{current.author}</span>
                    <CheckCircle2 className="w-4 h-4 text-[#00B8E6]" />
                  </div>
                  <div className="text-xs text-blue-200/70">
                    {current.role} • <strong className="text-white font-semibold">{current.company}</strong>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#0878FF] text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-mono text-blue-200/60 px-2">
                  {activeIndex + 1} / {TESTIMONIALS_DATA.length}
                </div>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-xl bg-white/10 hover:bg-[#0878FF] text-white flex items-center justify-center transition-colors border border-white/10"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
