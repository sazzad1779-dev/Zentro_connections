import React, { useState } from 'react';
import { 
  ArrowRight, 
  Lightbulb, 
  Cpu, 
  Sparkles, 
  Target, 
  Play, 
  X, 
  CheckCircle2 
} from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const pillars = [
    {
      icon: Lightbulb,
      title: 'Strategic Rigor',
      desc: 'We start by diagnosing core market challenges and user desires before proposing any design or engineering.'
    },
    {
      icon: Sparkles,
      title: 'Creative Mastery',
      desc: 'World-class visual aesthetics, motion systems, and editorial storytelling that elevate brands above competitor noise.'
    },
    {
      icon: Cpu,
      title: 'Full-Stack Technology',
      desc: 'Modern TypeScript, cloud-native scalability, resilient architectures, and sub-second performance out of the box.'
    },
    {
      icon: Target,
      title: 'Measurable Outcomes',
      desc: 'Every deliverable is calibrated against real-world conversion, customer lifetime value, and business acceleration.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#071A36] text-white relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-6 font-mono">
          ABOUT ZENTRO COMMUNICATIONS
        </div>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left: Prominent Editorial Headline Statement */}
          <div className="lg:col-span-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-['Space_Grotesk']">
              We don't just communicate ideas. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#0878FF] to-blue-200">
                We build experiences around them.
              </span>
            </h2>

            <div className="mt-8 space-y-4 text-base sm:text-lg text-blue-100/80 leading-relaxed">
              <p>
                Founded on the conviction that branding, engineering, and growth must operate as a unified discipline, Zentro Communications partners with visionary companies to turn ambitious ideas into digital market leaders.
              </p>
              <p>
                Where traditional agencies silo designers from developers, our cross-functional teams collaborate seamlessly—ensuring every visual concept is technically feasible, performant, and conversion-optimized.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all group"
              >
                <span>Discover What's Possible</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setVideoModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors shadow-2xs"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/20 text-[#00B8E6] flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Agency Reel (1:45)</span>
              </button>
            </div>
          </div>

          {/* Right: Visual Showcase & Brand Highlights */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Visual Image Card with Overlay */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 group aspect-video sm:aspect-16/10">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Zentro Communications Collaborative Strategy Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071A36]/95 via-[#071A36]/50 to-transparent p-6 sm:p-8 flex flex-col justify-end text-white">
                <div className="text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-1 font-mono">
                  HUMAN-CENTERED INNOVATION
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-['Space_Grotesk']">
                  Bridging the gap between human intuition and technical capability.
                </h3>
                <div className="flex items-center gap-4 mt-3 text-xs text-blue-200/90">
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#00B8E6]" /> Dedicated Senior Leads</span>
                  <span className="flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5 text-[#00B8E6]" /> Full Transparency</span>
                </div>
              </div>

              {/* Reel Trigger Button on Image */}
              <button
                onClick={() => setVideoModalOpen(true)}
                aria-label="Play agency showreel"
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:text-[#00B8E6] hover:scale-110 flex items-center justify-center shadow-lg transition-all border border-white/20"
              >
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#0B2854]/80 border border-white/10 shadow-2xs">
                <div className="text-2xl font-extrabold text-white font-['Space_Grotesk']">100%</div>
                <div className="text-xs font-bold text-slate-200 mt-1">In-House Specialists</div>
                <div className="text-[11px] text-blue-200/70">Zero outsourced cut corners</div>
              </div>
              <div className="p-5 rounded-2xl bg-[#0B2854]/80 border border-white/10 shadow-2xs">
                <div className="text-2xl font-extrabold text-[#00B8E6] font-['Space_Grotesk']">&lt; 48 Hours</div>
                <div className="text-xs font-bold text-slate-200 mt-1">Proposal Turnaround</div>
                <div className="text-[11px] text-blue-200/70">Fast, transparent scoping</div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/10">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-2xl bg-[#0B2854]/60 border border-white/10 hover:border-[#00B8E6]/50 hover:bg-[#0B2854] shadow-xs hover:shadow-xl transition-all duration-300 group text-white"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 text-[#00B8E6] group-hover:bg-[#0878FF] group-hover:text-white flex items-center justify-center transition-colors mb-4">
                <pillar.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-[#00B8E6] transition-colors font-['Space_Grotesk']">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Video Showreel Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A36]/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-slate-800/80 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <span className="text-xs font-semibold">Zentro Communications — 2026 Agency Showcase Reel</span>
              </div>
              <button 
                onClick={() => setVideoModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Mockup / Simulation with Interactive Showcase */}
            <div className="relative aspect-video bg-gradient-to-tr from-[#071A36] via-[#0B2854] to-slate-900 p-8 flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono px-2 py-1 rounded bg-[#0878FF]/30 text-[#00B8E6] border border-[#00B8E6]/30">4K Ultra HD • 60 FPS</span>
                <span className="text-xs font-mono text-slate-400">01:45 / 01:45</span>
              </div>

              <div className="text-center max-w-lg mx-auto space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#0878FF]/30 border border-[#00B8E6] text-[#00B8E6] mx-auto flex items-center justify-center shadow-lg shadow-blue-500/30 animate-pulse">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <h4 className="text-2xl font-bold font-['Space_Grotesk']">Where Creativity Meets Technology</h4>
                <p className="text-xs text-blue-200/80">A curated tour of our award-winning projects, motion graphics, and full-stack digital architectures.</p>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-white/10">
                <span>Featured Clients: Lumina Cloud • Zenith Mobility • Strata Wealth</span>
                <button 
                  onClick={() => {
                    setVideoModalOpen(false);
                    onOpenContact();
                  }}
                  className="text-xs font-bold text-[#00B8E6] hover:underline"
                >
                  Book Private Presentation →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
