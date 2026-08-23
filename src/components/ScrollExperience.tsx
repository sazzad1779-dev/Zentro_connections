import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Network } from 'lucide-react';

export const ScrollExperience: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
        setIsVisible(window.scrollY > 300);
      }

      // Check current section
      const sections = ['hero', 'about', 'services', 'capabilities', 'work', 'why-zentro', 'process', 'team', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.2) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* 1. Top Cyber Progress Bar with Glowing Particle Head */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-900/40 z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-[#0878FF] via-[#00B8E6] to-white relative transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        >
          {/* Glowing particle head */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#00B8E6] blur-[0.5px]" />
        </div>
      </div>

      {/* 2. Floating Cyber Scroll HUD (Bottom Right) */}
      <div 
        className={`fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
      >
        {/* Quick Back to Top with Circular Percentage Arc */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="relative w-12 h-12 rounded-2xl bg-[#0B2854]/90 hover:bg-[#0878FF] text-white border border-white/20 shadow-2xl backdrop-blur-md flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 group cursor-pointer"
        >
          {/* Radial SVG Track */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 p-1" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="18"
              fill="none"
              stroke="#00B8E6"
              strokeWidth="2.5"
              strokeDasharray={113}
              strokeDashoffset={113 - (113 * scrollProgress) / 100}
              strokeLinecap="round"
              className="transition-all duration-150"
            />
          </svg>
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5 relative z-10 text-white" />
        </button>
      </div>
    </>
  );
};
