import React, { useState } from 'react';
import { 
  Search, 
  Compass, 
  Code2, 
  Rocket, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  ShieldCheck, 
  Zap, 
  MessageSquareCode, 
  Sparkles, 
  GitBranch, 
  Terminal, 
  Activity, 
  Layers 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

interface ProcessSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const stageMeta = [
    {
      icon: Search,
      phaseTag: 'PHASE 01 // IMMERSION',
      tools: ['Miro', 'Hotjar', 'Google Analytics', 'Notion'],
      highlightMetric: '100% Alignment',
      metricSub: 'On business goals & KPIs'
    },
    {
      icon: Compass,
      phaseTag: 'PHASE 02 // ARCHITECTURE',
      tools: ['Figma', 'FigJam', 'Whimsical', 'Linear'],
      highlightMetric: 'Interactive Wireframes',
      metricSub: 'Before writing any code'
    },
    {
      icon: Code2,
      phaseTag: 'PHASE 03 // VELOCITY BUILD',
      tools: ['React/Next.js', 'Tailwind', 'Node.js', 'GitHub'],
      highlightMetric: 'Bi-Weekly Demos',
      metricSub: 'Live staging environments'
    },
    {
      icon: Rocket,
      phaseTag: 'PHASE 04 // HARDENING',
      tools: ['Lighthouse', 'Vercel', 'AWS/Cloud', 'Sentry'],
      highlightMetric: '99+ Lighthouse',
      metricSub: 'Zero-downtime deployment'
    },
    {
      icon: TrendingUp,
      phaseTag: 'PHASE 05 // COMPOUND GROWTH',
      tools: ['Mixpanel', 'PostHog', 'Segment', 'Datadog'],
      highlightMetric: 'Continuous CRO',
      metricSub: 'Iterative sprint releases'
    }
  ];

  const currentStep = PROCESS_STEPS[activeStepIndex];
  const currentMeta = stageMeta[activeStepIndex];
  const CurrentIcon = currentMeta.icon;

  return (
    <section 
      id="process" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-white text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background Decorative Lighting */}
      <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] blur-3xl rounded-full pointer-events-none ${
        isDay ? 'bg-blue-100/40' : 'bg-gradient-to-r from-[#0878FF]/10 to-[#00B8E6]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>SPRINT METHODOLOGY & EXECUTION</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            How We Work
          </h2>

          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            A transparent, sprint-based delivery lifecycle engineered for velocity and precision. No bureaucratic bloat or black boxes—just continuous milestones, direct engineer access, and demonstrable weekly progress.
          </p>
        </div>

        {/* Interactive Milestone Stepper Bar */}
        <div className="relative mb-8 sm:mb-12">
          {/* Progress Connection Line Behind Icons */}
          <div className={`hidden lg:block absolute top-7 left-[8%] right-[8%] h-0.5 z-0 ${
            isDay ? 'bg-slate-200' : 'bg-white/10'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-[#0878FF] to-[#00B8E6] transition-all duration-500 ease-out"
              style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
            />
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const meta = stageMeta[idx];
              const StepIcon = meta.icon;
              const isActive = activeStepIndex === idx;
              const isPast = activeStepIndex > idx;

              return (
                <button
                  key={step.step}
                  id={`process-tab-${step.step}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-300 relative group cursor-pointer flex flex-col justify-between ${
                    isActive
                      ? isDay
                        ? 'bg-blue-50/80 border-[#0878FF] shadow-lg shadow-blue-500/15 ring-2 ring-[#0878FF]'
                        : 'bg-[#0B2854] border-[#00B8E6] shadow-xl shadow-blue-500/20 ring-1 ring-[#00B8E6]/60'
                      : isPast
                      ? isDay
                        ? 'bg-white hover:bg-slate-50 border-slate-300 text-slate-700'
                        : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/70 border-white/15 text-slate-300'
                      : isDay
                      ? 'bg-slate-50/80 hover:bg-white border-slate-200 text-slate-500'
                      : 'bg-[#071A36]/80 hover:bg-[#0B2854]/50 border-white/10 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center transition-all ${
                      isActive 
                        ? 'bg-[#0878FF] text-white shadow-md' 
                        : isPast 
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-600'
                        : isDay
                        ? 'bg-slate-100 border border-slate-200 text-slate-500 group-hover:text-slate-900'
                        : 'bg-white/5 border border-white/10 text-slate-400 group-hover:text-white'
                    }`}>
                      <StepIcon className="w-4 h-4" />
                    </div>

                    <span className={`text-xs font-mono font-bold ${
                      isActive ? (isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]') : (isDay ? 'text-slate-400' : 'text-slate-400')
                    }`}>
                      0{idx + 1}
                    </span>
                  </div>

                  <div>
                    <div className={`text-[10px] font-mono uppercase tracking-wider mb-0.5 ${
                      isDay ? 'text-slate-500' : 'text-blue-200/60'
                    }`}>
                      {step.duration}
                    </div>
                    <div className={`text-xs sm:text-sm font-bold font-['Space_Grotesk'] leading-snug ${
                      isActive 
                        ? isDay ? 'text-slate-950' : 'text-white' 
                        : isDay ? 'text-slate-800' : 'text-slate-200 group-hover:text-white'
                    }`}>
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage Deep-Dive Showcase */}
        <div className={`rounded-3xl border p-6 sm:p-8 lg:p-10 backdrop-blur-xs relative overflow-hidden shadow-2xl transition-colors ${
          isDay 
            ? 'bg-slate-50 border-slate-200/90 text-slate-900' 
            : 'bg-[#0B2854]/50 border-white/15 text-white'
        }`}>
          <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
            isDay ? 'bg-blue-100/50' : 'bg-[#0878FF]/10'
          }`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Col: Detailed Narrative & Outputs */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                  isDay ? 'bg-blue-100 border border-blue-200 text-[#0878FF]' : 'bg-[#0878FF]/20 border border-[#0878FF]/40 text-[#00B8E6]'
                }`}>
                  {currentMeta.phaseTag}
                </span>
                <span className={`px-3 py-1 rounded-md text-xs font-mono border ${
                  isDay ? 'bg-white border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-300'
                }`}>
                  TIMELINE: {currentStep.duration}
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <h3 className={`text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] tracking-tight mb-3 ${
                  isDay ? 'text-slate-950' : 'text-white'
                }`}>
                  {currentStep.title}
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed font-normal ${
                  isDay ? 'text-slate-600' : 'text-blue-100/85'
                }`}>
                  {currentStep.description}
                </p>
              </div>

              {/* Key Deliverables Matrix */}
              <div className="pt-2">
                <div className={`text-xs font-bold uppercase tracking-wider font-mono mb-3 flex items-center gap-2 ${
                  isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                }`}>
                  <Layers className="w-3.5 h-3.5" />
                  <span>Key Phase Deliverables & Milestones:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentStep.keyOutputs.map((output, idx) => (
                    <div 
                      key={idx} 
                      className={`flex items-start gap-2.5 p-3 rounded-xl border text-xs font-medium ${
                        isDay 
                          ? 'bg-white border-slate-200 text-slate-800 shadow-2xs' 
                          : 'bg-[#071A36]/60 border-white/10 text-slate-200'
                      }`}
                    >
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${
                        isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                      }`} />
                      <span className="leading-snug">{output}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button & Next Stage Trigger */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenContact(`Inquiry: ${currentStep.title}`)}
                  id="process-initiate-stage-btn"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 group cursor-pointer"
                >
                  <span>Start Phase 0{activeStepIndex + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                {activeStepIndex < PROCESS_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex(prev => prev + 1)}
                    className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isDay ? 'text-slate-600 hover:text-slate-900' : 'text-blue-200/80 hover:text-white'
                    }`}
                  >
                    <span>Next: {PROCESS_STEPS[activeStepIndex + 1].title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveStepIndex(0)}
                    className={`text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isDay ? 'text-slate-600 hover:text-slate-900' : 'text-blue-200/80 hover:text-white'
                    }`}
                  >
                    <span>Review Full Lifecycle From Start</span>
                  </button>
                )}
              </div>

            </div>

            {/* Right Col: Stage Operational Card & Tooling */}
            <div className={`rounded-2xl p-6 sm:p-7 space-y-6 shadow-xl border ${
              isDay ? 'bg-white border-slate-200 text-slate-900' : 'bg-[#071A36]/90 border-white/15 text-white'
            }`}>
              
              {/* Highlight Metric */}
              <div className={`p-4 rounded-xl border ${
                isDay ? 'bg-slate-50 border-slate-200' : 'bg-gradient-to-br from-white/5 to-white/0 border-white/10'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isDay ? 'bg-blue-100 text-[#0878FF]' : 'bg-[#00B8E6]/15 text-[#00B8E6]'
                  }`}>
                    <CurrentIcon className="w-4 h-4" />
                  </div>
                  <span className={`text-xs font-mono font-bold uppercase tracking-wider ${
                    isDay ? 'text-slate-500' : 'text-blue-200/70'
                  }`}>
                    STAGE STANDARD
                  </span>
                </div>
                <div className={`text-xl sm:text-2xl font-extrabold font-['Space_Grotesk'] ${
                  isDay ? 'text-slate-900' : 'text-white'
                }`}>
                  {currentMeta.highlightMetric}
                </div>
                <p className={`text-xs mt-0.5 ${
                  isDay ? 'text-slate-500' : 'text-blue-100/75'
                }`}>
                  {currentMeta.metricSub}
                </p>
              </div>

              {/* Tooling & Platforms */}
              <div>
                <div className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                  isDay ? 'text-slate-500' : 'text-blue-200/70'
                }`}>
                  <Terminal className={`w-3 h-3 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Platforms & Collaboration Stack</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {currentMeta.tools.map((tool, idx) => (
                    <span 
                      key={idx}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono border ${
                        isDay 
                          ? 'bg-slate-100 border-slate-200 text-slate-700' 
                          : 'bg-white/5 border-white/10 text-slate-200'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Real-time Collaboration Guarantee */}
              <div className={`pt-4 border-t space-y-2.5 text-xs ${
                isDay ? 'border-slate-100 text-slate-600' : 'border-white/10 text-slate-300'
              }`}>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dedicated Shared Slack / Discord Channel</span>
                </div>
                <div className="flex items-center gap-2">
                  <GitBranch className={`w-4 h-4 shrink-0 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Full Git Repository & Figma File Ownership</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className={`w-4 h-4 shrink-0 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>Async Video Walkthroughs with Every Milestone</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Agency Transparency Standards Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
          <div className={`p-4 rounded-xl border flex items-center gap-3.5 transition-colors ${
            isDay ? 'bg-white border-slate-200 shadow-xs' : 'bg-white/5 border-white/10'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              isDay ? 'bg-blue-50 text-[#0878FF]' : 'bg-blue-500/20 text-[#00B8E6]'
            }`}>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className={`text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>Zero Lock-In Guarantee</div>
              <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-100/70'}`}>Complete IP and asset transfer upon signoff.</div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3.5 transition-colors ${
            isDay ? 'bg-white border-slate-200 shadow-xs' : 'bg-white/5 border-white/10'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              isDay ? 'bg-cyan-50 text-[#0284C7]' : 'bg-cyan-500/20 text-[#00B8E6]'
            }`}>
              <MessageSquareCode className="w-4 h-4" />
            </div>
            <div>
              <div className={`text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>Direct Engineer Access</div>
              <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-100/70'}`}>Speak directly with builders, not account managers.</div>
            </div>
          </div>

          <div className={`p-4 rounded-xl border flex items-center gap-3.5 transition-colors ${
            isDay ? 'bg-white border-slate-200 shadow-xs' : 'bg-white/5 border-white/10'
          }`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
              isDay ? 'bg-indigo-50 text-indigo-600' : 'bg-indigo-500/20 text-indigo-400'
            }`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className={`text-xs font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-900' : 'text-white'}`}>Fixed Scope or Retainer</div>
              <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-blue-100/70'}`}>Transparent pricing with no surprise invoices.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
