import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Clock, 
  Layers, 
  ShieldCheck 
} from 'lucide-react';

interface ProjectEstimatorProps {
  onStartInquiry: (details: { projectType: string; timeline: string; estimatedBudget: string }) => void;
}

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onStartInquiry }) => {
  const [selectedType, setSelectedType] = useState('full-stack');
  const [timeline, setTimeline] = useState('standard');
  const [addons, setAddons] = useState<string[]>(['brand-identity', 'seo']);

  const projectTypes = [
    { id: 'web-platform', label: 'Web Platform & SaaS', basePrice: 15000, baseWeeks: 6, desc: 'Next.js, Tailwind, database & APIs' },
    { id: 'brand-system', label: 'Brand & Visual Identity', basePrice: 8000, baseWeeks: 4, desc: 'Logo, guidelines, typography & collateral' },
    { id: 'full-stack', label: 'Full Agency Transformation', basePrice: 24000, baseWeeks: 8, desc: 'Strategy + Brand + App + Growth marketing' },
    { id: 'motion-video', label: '3D Motion & Video Campaign', basePrice: 10000, baseWeeks: 4, desc: 'Cinema 4D, commercial film & Lottie' },
  ];

  const addonOptions = [
    { id: 'brand-identity', label: 'Complete Design System Tokens', price: 3500 },
    { id: 'seo', label: 'Technical SEO & Content Strategy', price: 2500 },
    { id: '3d-assets', label: '3D Interactive Model Visualizer', price: 4500 },
    { id: 'analytics', label: 'Executive Analytics & BI Dashboard', price: 2000 },
  ];

  const toggleAddon = (id: string) => {
    setAddons(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const currentType = projectTypes.find(t => t.id === selectedType) || projectTypes[0];
  const addonsTotal = addons.reduce((sum, id) => {
    const item = addonOptions.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const speedMultiplier = timeline === 'rush' ? 1.25 : timeline === 'flexible' ? 0.95 : 1.0;
  const estimatedCost = Math.round((currentType.basePrice + addonsTotal) * speedMultiplier);
  const estimatedDurationWeeks = timeline === 'rush' ? Math.max(3, currentType.baseWeeks - 2) : currentType.baseWeeks;

  const handleProceed = () => {
    onStartInquiry({
      projectType: currentType.label,
      timeline: `${estimatedDurationWeeks} Weeks (${timeline})`,
      estimatedBudget: `$${estimatedCost.toLocaleString()}`
    });
  };

  return (
    <section id="estimator" className="py-20 bg-[#071A36] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-[#0B2854] via-[#0B2854]/90 to-[#071A36] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/15">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Interactive Options */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#00B8E6] border border-white/15">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE SCOPE CALCULATOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
                Estimate Your Project Scope in Real Time
              </h3>

              <p className="text-xs sm:text-sm text-blue-100/80">
                Transparent ballpark budgets tailored to your project goals. Exact scopes are locked during our discovery session.
              </p>

              {/* Step 1: Select Project Type */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-200 block font-mono">
                  1. Select Primary Objective:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectTypes.map(t => (
                    <button
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        selectedType === t.id
                          ? 'bg-[#0878FF] border-[#00B8E6] text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                      }`}
                    >
                      <div className="text-xs font-bold font-['Space_Grotesk']">{t.label}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Addon modules */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-200 block font-mono">
                  2. Optional Add-On Modules:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {addonOptions.map(addon => {
                    const isChecked = addons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-lg text-left text-xs border flex items-center justify-between transition-all ${
                          isChecked ? 'bg-blue-500/20 border-[#00B8E6] text-white' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <span className="truncate pr-2">{addon.label}</span>
                        <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 ${isChecked ? 'bg-[#00B8E6] text-[#071A36]' : 'border border-white/20'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Timeline Velocity */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold uppercase tracking-wider text-blue-200 block font-mono">
                  3. Timeline Velocity:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'rush', label: 'Sprint (Fast Track)' },
                    { id: 'standard', label: 'Standard Cadence' },
                    { id: 'flexible', label: 'Flexible Window' },
                  ].map(vel => (
                    <button
                      key={vel.id}
                      onClick={() => setTimeline(vel.id)}
                      className={`py-2 px-2 rounded-lg text-xs font-semibold text-center border transition-all ${
                        timeline === vel.id ? 'bg-[#0878FF] border-white/40 text-white shadow-md' : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {vel.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Price Summary Box */}
            <div className="lg:col-span-5 bg-[#071A36]/90 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/15 text-center flex flex-col justify-between space-y-6 text-white">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-blue-200/70 mb-2">
                  ESTIMATED INVESTMENT RANGE
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white font-['Space_Grotesk'] tracking-tight">
                  ${estimatedCost.toLocaleString()}
                  <span className="text-xs text-blue-200/60 font-normal ml-1.5 font-mono">USD</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-[#00B8E6] bg-blue-500/10 px-3 py-1 rounded-full mt-3 border border-blue-500/20 font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Estimated Delivery: {estimatedDurationWeeks} Weeks</span>
                </div>
              </div>

              <div className="space-y-2 text-left bg-white/5 p-4 rounded-xl text-xs text-blue-100/90 border border-white/10">
                <div className="flex justify-between pb-1 border-b border-white/10">
                  <span>Core Architecture</span>
                  <span className="font-mono text-white">${currentType.basePrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between pb-1 border-b border-white/10">
                  <span>Selected Addons ({addons.length})</span>
                  <span className="font-mono text-white">${addonsTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-[#00B8E6] font-bold pt-1">
                  <span>Dedicated Senior Squad</span>
                  <span>Included</span>
                </div>
              </div>

              <button
                onClick={handleProceed}
                className="w-full py-4 px-6 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 group"
              >
                <span>Lock In This Scope & Schedule Call</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-blue-200/70">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>NDA Protected • 48hr Guaranteed Quote</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
