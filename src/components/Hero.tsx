import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Play, 
  Activity, 
  Zap, 
  Globe2,
  Code,
  Palette,
  LineChart
} from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreWork }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'design' | 'growth'>('architecture');

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-40 md:pb-28 flex items-center overflow-hidden bg-gradient-to-b from-[#071A36] via-[#0B2854]/70 to-[#071A36]"
    >
      {/* Background Decorative Grid & Glow Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-[#0878FF]/20 to-[#00B8E6]/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#0878FF]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 shadow-xs mb-6 text-xs font-bold tracking-widest text-white uppercase">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B8E6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B8E6]"></span>
              </span>
              <span>CREATIVE × TECHNOLOGY</span>
              <span className="text-white/30">|</span>
              <span className="text-[#00B8E6] font-medium tracking-normal text-[11px]">Digital Solutions Agency</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 font-['Space_Grotesk']">
              We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00B8E6] to-[#0878FF]">Digital Experiences</span> That Move Brands Forward.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-blue-100/80 leading-relaxed max-w-2xl mb-8 font-normal">
              Zentro Communications unifies strategy, engineering, high-end branding, and digital marketing to help ambitious companies create meaningful connections and scalable products.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenContact}
                id="hero-primary-cta-btn"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreWork}
                id="hero-secondary-cta-btn"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 shadow-xs transition-all duration-200"
              >
                <span>Explore Our Work</span>
              </button>
            </div>

            {/* Trust Micro-Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 text-xs text-blue-200/70 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise SLA & Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00B8E6]" />
                <span>Sub-second Load Speeds</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#00B8E6]" />
                <span>Award-Winning Design</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Interactive Composition */}
          <div className="lg:col-span-5 relative">
            
            {/* Main Interactive Tech-Canvas Card */}
            <div className="relative mx-auto w-full max-w-[460px] bg-gradient-to-b from-[#0B2854] to-[#071A36] rounded-3xl p-6 sm:p-7 shadow-2xl border border-blue-800/60 text-white overflow-hidden group">
              
              {/* Internal ambient glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#0878FF]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00B8E6]/20 rounded-full blur-2xl pointer-events-none" />

              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-5 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-[11px] font-mono text-blue-200/70 ml-2">zentro.engine.v3.4</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-[10px] font-semibold text-[#00B8E6] border border-white/10">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE 99.98%</span>
                </div>
              </div>

              {/* Interactive Scope Switcher */}
              <div className="grid grid-cols-3 gap-1 bg-white/5 p-1 rounded-xl mb-5 text-xs font-semibold text-center border border-white/5 relative z-10">
                <button
                  onClick={() => setActiveTab('architecture')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'architecture' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Code className="w-3 h-3" />
                  <span>Tech</span>
                </button>
                <button
                  onClick={() => setActiveTab('design')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'design' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Palette className="w-3 h-3" />
                  <span>Brand</span>
                </button>
                <button
                  onClick={() => setActiveTab('growth')}
                  className={`py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                    activeTab === 'growth' ? 'bg-[#0878FF] text-white shadow-sm' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <LineChart className="w-3 h-3" />
                  <span>Growth</span>
                </button>
              </div>

              {/* Dynamic Preview Screen Content */}
              <div className="bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 border border-white/10 min-h-[220px] flex flex-col justify-between relative z-10">
                {activeTab === 'architecture' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Cloud Orchestration & Microservices</span>
                      <span className="text-[#00B8E6] font-mono">0.04s Latency</span>
                    </div>
                    {/* Simulated visual data streams */}
                    <div className="space-y-2">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#0878FF] to-[#00B8E6] w-[88%]" />
                      </div>
                      <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                        <span>React / TypeScript Engine</span>
                        <span className="text-emerald-400">OPTIMAL</span>
                      </div>
                    </div>

                    <div className="pt-2 grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">Security Tier</div>
                        <div className="font-bold text-white">SOC-2 Type II</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/5">
                        <div className="text-slate-400 text-[10px]">Global Edge</div>
                        <div className="font-bold text-[#00B8E6]">280+ POPs</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'design' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Design System & Dynamic Tokens</span>
                      <span className="text-[#00B8E6] font-mono">80+ Components</span>
                    </div>
                    {/* Color tokens preview */}
                    <div className="flex items-center gap-2 pt-1">
                      <div className="h-8 flex-1 rounded-lg bg-[#071A36] border border-white/20 flex items-center justify-center text-[10px] font-mono">#071A36</div>
                      <div className="h-8 flex-1 rounded-lg bg-[#0878FF] flex items-center justify-center text-[10px] font-mono text-white">#0878FF</div>
                      <div className="h-8 flex-1 rounded-lg bg-[#00B8E6] flex items-center justify-center text-[10px] font-mono text-[#071A36]">#00B8E6</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-slate-300">
                      Typography: <strong className="text-white">Space Grotesk</strong> + <strong className="text-white">Plus Jakarta Sans</strong>
                    </div>
                  </div>
                )}

                {activeTab === 'growth' && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Conversion & Search Velocity</span>
                      <span className="text-emerald-400 font-bold">+310% ARR</span>
                    </div>
                    <div className="h-16 flex items-end gap-1.5 pt-2">
                      <div className="flex-1 bg-blue-500/30 rounded-t h-[30%]" />
                      <div className="flex-1 bg-blue-500/40 rounded-t h-[45%]" />
                      <div className="flex-1 bg-blue-500/50 rounded-t h-[55%]" />
                      <div className="flex-1 bg-blue-500/70 rounded-t h-[70%]" />
                      <div className="flex-1 bg-[#0878FF] rounded-t h-[90%]" />
                      <div className="flex-1 bg-[#00B8E6] rounded-t h-[100%] animate-pulse" />
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>Organic Inbound Funnel</span>
                      <span className="text-[#00B8E6]">Continuous ROI</span>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Interactive Agency Protocol</span>
                  <span className="text-white font-medium flex items-center gap-1">
                    Verified by Zentro <Sparkles className="w-3 h-3 text-[#00B8E6]" />
                  </span>
                </div>
              </div>

            </div>

            {/* Floating Live Metric Card 1 (Bottom Left) */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#0B2854]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-white/15 items-center gap-3.5 animate-float-slow text-white">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                140+
              </div>
              <div>
                <div className="text-xs font-bold text-white">Digital Projects Shipped</div>
                <div className="text-[11px] text-blue-200/70">Across 16 Global Markets</div>
              </div>
            </div>

            {/* Floating Live Metric Card 2 (Top Right) */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-[#0B2854]/95 backdrop-blur-md rounded-2xl p-3.5 shadow-2xl border border-white/15 items-center gap-3 text-white">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-[#00B8E6] flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">4.9 / 5.0 Rating</div>
                <div className="text-[10px] text-blue-200/70">Verified Client Reviews</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
