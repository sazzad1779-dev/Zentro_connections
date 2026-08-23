import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Layers, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

interface ProcessSectionProps {
  onOpenContact: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="py-24 bg-[#071A36] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            PREDICTABLE DELIVERY FRAMEWORK
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            How We Work
          </h2>
          <p className="text-base sm:text-lg text-blue-100/80 mt-3">
            A disciplined, transparent 5-stage sprint methodology that removes guesswork and guarantees on-time, high-fidelity execution.
          </p>
        </div>

        {/* Horizontal Process Nav Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3 mb-10">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 relative ${
                  isActive
                    ? 'bg-[#0878FF] border-[#0878FF] shadow-lg shadow-blue-500/25 ring-2 ring-blue-400/30 text-white'
                    : 'bg-[#0B2854]/60 hover:bg-[#0B2854] border-white/10 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-white' : 'text-[#00B8E6]'}`}>
                    {step.step}
                  </span>
                  <span className={`text-[10px] font-mono hidden sm:inline ${isActive ? 'text-blue-100' : 'text-slate-400'}`}>
                    {step.duration}
                  </span>
                </div>
                <div className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-200'}`}>
                  {step.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Dashboard Card */}
        <div className="bg-[#0B2854]/60 rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-white">
          
          {/* Left Column: Stage Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-[#0878FF] text-white text-xs font-mono font-bold">
                STAGE {activeStep.step}
              </span>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#00B8E6] bg-white/10 px-3 py-1 rounded-full border border-white/10">
                <Clock className="w-3.5 h-3.5" />
                <span>Estimated Duration: {activeStep.duration}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
              {activeStep.title}
            </h3>

            <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed">
              {activeStep.description}
            </p>

            {/* Key Deliverables Output Box */}
            <div className="p-6 rounded-2xl bg-[#071A36]/80 border border-white/10 space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#00B8E6] flex items-center gap-2 font-mono">
                <Layers className="w-4 h-4 text-[#00B8E6]" />
                <span>Guaranteed Stage Deliverables & Milestones:</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {activeStep.keyOutputs.map((out, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all group"
              >
                <span>Initiate Stage {activeStep.step}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>

              {activeStepIndex < PROCESS_STEPS.length - 1 && (
                <button
                  onClick={() => setActiveStepIndex(activeStepIndex + 1)}
                  className="text-xs font-semibold text-slate-300 hover:text-[#00B8E6] flex items-center gap-1"
                >
                  <span>Next: {PROCESS_STEPS[activeStepIndex + 1].title.split('&')[0]}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Process Metaphor */}
          <div className="lg:col-span-5 bg-[#071A36] rounded-2xl p-7 text-white shadow-lg border border-white/15 space-y-4">
            <div className="flex items-center justify-between text-xs text-blue-200/80 pb-3 border-b border-white/10">
              <span className="font-mono">PROJECT TELEMETRY</span>
              <span className="text-[#00B8E6] font-bold">ACTIVE PROTOCOL</span>
            </div>

            <div className="space-y-3">
              {PROCESS_STEPS.map((s, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 rounded-xl transition-all cursor-pointer flex items-center justify-between ${
                    activeStepIndex === idx ? 'bg-white/15 border border-[#00B8E6]/40' : 'hover:bg-white/5 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                      activeStepIndex >= idx ? 'bg-[#00B8E6] text-[#071A36]' : 'bg-white/10 text-white'
                    }`}>
                      {s.step}
                    </div>
                    <span className="text-xs font-semibold">{s.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-blue-200/70">{s.duration}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 text-[11px] text-blue-200/70 flex items-center justify-between">
              <span>Weekly Syncs + Loom Async Updates</span>
              <span className="text-[#00B8E6] font-semibold">Live JIRA/Figma Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
