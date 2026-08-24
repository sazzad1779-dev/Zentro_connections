import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  Play, 
  Pause, 
  Compass, 
  Target, 
  Palette, 
  Code2, 
  Rocket, 
  CheckCircle2
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProcessSectionProps {
  onOpenContact: (serviceName?: string) => void;
}

interface StepItem {
  number: string;
  stepName: string;
  description: string;
  icon: React.ElementType;
  tagline: string;
  deliverables: string[];
}

const STEPS: StepItem[] = [
  {
    number: '01',
    stepName: 'DISCOVERY',
    description: 'We listen to your vision and goals',
    icon: Compass,
    tagline: 'Deep dive into objectives, audience, and key performance indicators.',
    deliverables: ['Stakeholder Vision Brief', 'Needs & Goal Alignment', 'Project Scope & Roadmap']
  },
  {
    number: '02',
    stepName: 'PLANNING',
    description: 'We create a custom strategy for you',
    icon: Target,
    tagline: 'Architecting a strategic framework tailored for execution and scalability.',
    deliverables: ['Strategic Action Plan', 'Information Architecture', 'Sprint Schedule & Milestones']
  },
  {
    number: '03',
    stepName: 'DESIGN',
    description: 'We craft stunning visuals & concepts',
    icon: Palette,
    tagline: 'Translating brand identity into engaging, high-fidelity digital experiences.',
    deliverables: ['Interactive UI/UX Prototypes', 'Design System Tokens', 'Brand Visual Assets']
  },
  {
    number: '04',
    stepName: 'DEVELOPMENT',
    description: 'We bring designs to life',
    icon: Code2,
    tagline: 'Engineering clean, modern, and performant web applications.',
    deliverables: ['Production TypeScript Code', 'Responsive Implementations', 'Performance Optimization']
  },
  {
    number: '05',
    stepName: 'DELIVERY',
    description: 'We launch and support you',
    icon: Rocket,
    tagline: 'Seamless deployment, handoff, and ongoing partnership for continuous growth.',
    deliverables: ['Zero-Downtime Launch', 'Admin Knowledge Transfer', 'Dedicated Post-Launch Care']
  }
];

const STEP_DURATION = 9000; // 9000ms (9 seconds) per tab — 4s slower for comfortable reading

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();
  
  // Active step index: 0, 1, 2, 3, 4 (strictly 5 steps)
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  const handleNext = () => {
    setDirection(1);
    setCurrentStepIndex((prev) => (prev + 1) % STEPS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentStepIndex((prev) => (prev === 0 ? STEPS.length - 1 : prev - 1));
  };

  const handleJumpToStep = (index: number) => {
    setDirection(index >= currentStepIndex ? 1 : -1);
    setCurrentStepIndex(index);
  };

  // Robust 5-second interval timer per tab with zero race conditions
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setTimeout(() => {
      setDirection(1);
      setCurrentStepIndex((prev) => (prev + 1) % STEPS.length);
    }, STEP_DURATION);

    return () => clearTimeout(timer);
  }, [isAutoPlaying, currentStepIndex]);

  const currentStep = STEPS[currentStepIndex];

  // Motion variants for silky-smooth slide and fade transition
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      filter: 'blur(4px)'
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: 'blur(0px)'
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
      filter: 'blur(4px)'
    })
  };

  return (
    <section 
      id="process" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#F8FAFC] text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background Decorative Ambient Lighting */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-3xl rounded-full pointer-events-none opacity-40 ${
        isDay ? 'bg-blue-200/50' : 'bg-gradient-to-r from-[#0878FF]/20 via-[#00B8E6]/15 to-[#0878FF]/20'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-mono ${
            isDay ? 'bg-blue-100 border border-blue-200 text-[#0878FF]' : 'bg-[#0878FF]/15 border border-[#0878FF]/30 text-[#00B8E6]'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PROCESS</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            HOW WE WORK
          </h2>

          <p className={`text-base sm:text-lg font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/80'
          }`}>
            From idea to launch in 5 simple steps
          </p>
        </div>

        {/* Step Navigation Tabs Bar (Strictly the 5 steps) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 flex-wrap">
          {STEPS.map((step, idx) => {
            const isActive = currentStepIndex === idx;
            const isCompleted = currentStepIndex > idx;
            return (
              <button
                key={step.number}
                onClick={() => handleJumpToStep(idx)}
                className={`group flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? isDay
                      ? 'bg-white border-[#0878FF] text-[#0878FF] shadow-md shadow-blue-500/10 ring-2 ring-[#0878FF]/20'
                      : 'bg-[#0B2854] border-[#00B8E6] text-[#00B8E6] shadow-lg shadow-blue-500/20 ring-1 ring-[#00B8E6]/50'
                    : isCompleted
                    ? isDay
                      ? 'bg-slate-100/80 hover:bg-slate-200 border-slate-200 text-slate-700'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
                    : isDay
                    ? 'bg-slate-50 hover:bg-white border-slate-200 text-slate-400'
                    : 'bg-[#071A36]/80 hover:bg-white/5 border-white/5 text-slate-500'
                }`}
                title={`Step ${step.number}: ${step.stepName}`}
              >
                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] transition-colors ${
                  isActive
                    ? 'bg-[#0878FF] text-white'
                    : isCompleted
                    ? isDay ? 'bg-blue-100 text-[#0878FF]' : 'bg-[#0878FF]/30 text-[#00B8E6]'
                    : isDay ? 'bg-slate-200 text-slate-500' : 'bg-white/10 text-slate-400'
                }`}>
                  {step.number}
                </span>
                <span className="tracking-wider">{step.stepName}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Content Container with 4-Sided Perimeter Progress Line */}
        <div className={`relative min-h-[340px] sm:min-h-[360px] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md transition-colors ${
          isDay 
            ? 'bg-white text-slate-900 shadow-slate-200/60' 
            : 'bg-[#0B2854]/40 text-white shadow-blue-950/40'
        }`}>
          
          {/* 4-Sided Animated Perimeter Progress Border */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none rounded-3xl overflow-visible"
          >
            <defs>
              <linearGradient id="perimeterProgressGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0878FF" />
                <stop offset="50%" stopColor="#00B8E6" />
                <stop offset="100%" stopColor="#0878FF" />
              </linearGradient>
              <filter id="borderGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Static background border track on all 4 sides */}
            <rect
              x="1.5"
              y="1.5"
              width="calc(100% - 3px)"
              height="calc(100% - 3px)"
              rx="24"
              fill="none"
              stroke={isDay ? "rgba(15, 23, 42, 0.08)" : "rgba(255, 255, 255, 0.12)"}
              strokeWidth="2"
            />

            {/* Glowing 4-Sided Perimeter Progress Line Animation (Full 9s Loop) */}
            {isAutoPlaying && (
              <motion.rect
                key={`perimeter-${currentStepIndex}`}
                x="1.5"
                y="1.5"
                width="calc(100% - 3px)"
                height="calc(100% - 3px)"
                rx="24"
                fill="none"
                stroke="url(#perimeterProgressGrad)"
                strokeWidth="2.5"
                filter="url(#borderGlow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 9, ease: 'linear' }}
              />
            )}
          </svg>

          {/* Subtle Ambient Radial Glow inside Card */}
          <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
            isDay ? 'bg-blue-100/60' : 'bg-[#0878FF]/10'
          }`} />

          <div className="relative min-h-[220px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={`step-${currentStep.number}`}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.35 },
                  filter: { duration: 0.35 }
                }}
                className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10"
              >
                {/* Left Column: Icon & Heading */}
                <div className="lg:col-span-5 flex flex-col items-start space-y-4">
                  
                  {/* Icon & Heading Block */}
                  <div className="flex items-center gap-4">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg transition-transform duration-300 ${
                      isDay
                        ? 'bg-gradient-to-br from-blue-500 to-[#0878FF] text-white shadow-blue-500/25'
                        : 'bg-gradient-to-br from-[#0878FF] to-[#00B8E6] text-white shadow-blue-500/30'
                    }`}>
                      {React.createElement(currentStep.icon, { className: 'w-7 h-7 sm:w-8 sm:h-8' })}
                    </div>

                    <div>
                      <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Space_Grotesk'] tracking-tight ${
                        isDay ? 'text-slate-950' : 'text-white'
                      }`}>
                        {currentStep.stepName}
                      </h3>
                    </div>
                  </div>

                  {/* Brief Subtitle/Tagline */}
                  <p className={`text-sm leading-relaxed ${
                    isDay ? 'text-slate-600' : 'text-blue-100/70'
                  }`}>
                    {currentStep.tagline}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {currentStep.deliverables.map((item, idx) => (
                      <span 
                        key={idx}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border ${
                          isDay 
                            ? 'bg-slate-100 border-slate-200 text-slate-700' 
                            : 'bg-white/5 border-white/10 text-slate-300'
                        }`}
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#0878FF]" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>

                </div>

                {/* Right Column: Clean Description Statement */}
                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className={`p-6 sm:p-8 lg:p-10 rounded-2xl border relative overflow-hidden transition-all ${
                    isDay 
                      ? 'bg-gradient-to-br from-blue-50/60 to-white border-blue-100 text-slate-900 shadow-sm' 
                      : 'bg-gradient-to-br from-[#071A36] to-[#0B2854]/90 border-white/15 text-white shadow-xl'
                  }`}>
                    
                    {/* The Clean Description Text */}
                    <div className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight font-['Space_Grotesk'] tracking-tight mb-4 ${
                      isDay ? 'text-slate-900' : 'text-white'
                    }`}>
                      {currentStep.description}
                    </div>

                    <p className={`text-sm leading-relaxed ${
                      isDay ? 'text-slate-500' : 'text-blue-100/70'
                    }`}>
                      Collaborative, strategic, and transparent execution at every phase of your project.
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Interactive Controls Bar (Clean symmetrical arrow buttons) */}
          <div className="flex items-center justify-end pt-6 mt-6 border-t border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAutoPlaying(prev => !prev)}
                className={`p-2.5 rounded-xl border text-xs transition-colors cursor-pointer ${
                  isAutoPlaying
                    ? isDay ? 'bg-blue-50 border-blue-200 text-[#0878FF]' : 'bg-[#0878FF]/20 border-[#0878FF]/40 text-[#00B8E6]'
                    : isDay ? 'bg-slate-100 border-slate-200 text-slate-600' : 'bg-white/5 border-white/10 text-slate-400'
                }`}
                title={isAutoPlaying ? 'Pause Auto-Play (9s)' : 'Resume Auto-Play (9s)'}
              >
                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>

              <button
                onClick={handlePrev}
                className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                  isDay
                    ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs'
                    : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
                }`}
                title="Previous Step"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNext}
                className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                  isDay
                    ? 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-2xs'
                    : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
                }`}
                title="Next Step"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
