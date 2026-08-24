import React, { useState } from 'react';
import { 
  Check, 
  X, 
  Lightbulb, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  Handshake, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface WhyZentroProps {
  onOpenContact: () => void;
}

export const WhyZentro: React.FC<WhyZentroProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();
  const [activePrinciple, setActivePrinciple] = useState(0);

  const principles = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Strategic Thinking',
      statement: 'We start with the problem, not the technology.',
      description: 'Before proposing tools or design trends, we dissect your market mechanics, customer frictions, and revenue drivers to ensure every asset built serves a crystal-clear commercial purpose.',
      deliverableBadge: 'Outcome-First Strategy'
    },
    {
      icon: Sparkles,
      number: '02',
      title: 'Creative Excellence',
      statement: 'We turn ideas into memorable, emotional experiences.',
      description: 'In an internet saturated with template mediocrity, distinctive design is the ultimate moat. We create bespoke visual languages and kinetic 3D experiences that elevate brand prestige.',
      deliverableBadge: 'Distinctive Visual Identity'
    },
    {
      icon: Cpu,
      number: '03',
      title: 'Engineering Rigor',
      statement: 'We build scalable, resilient, future-proof software.',
      description: 'No brittle prototypes or messy dependencies. We write clean, strongly typed TypeScript with production-grade CI/CD and cloud scalability that your internal engineers will love.',
      deliverableBadge: 'Modern Tech Stack'
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Measurable Results',
      statement: 'We focus on quantifiable business acceleration.',
      description: 'Aesthetics without conversion is vanity. We instrument granular analytics, optimize speed benchmarks, and iterate rapidly to maximize conversions, revenue, and retention.',
      deliverableBadge: 'Data-Driven Growth'
    },
    {
      icon: Handshake,
      number: '05',
      title: 'True Partnership',
      statement: 'We work alongside clients, not simply for them.',
      description: 'You get direct access to senior designers and principal architects without bureaucratic account layers. We operate as an agile extension of your executive leadership.',
      deliverableBadge: 'High-Touch Collaboration'
    }
  ];

  const comparisonRows = [
    { feature: 'Core Focus', zentro: 'Unified Strategy, Design & Engineering', traditional: 'Siloed Design OR Outsourced Tech' },
    { feature: 'Senior Talent Access', zentro: 'Direct collaboration with Principal Leads', traditional: 'Delegated to Junior Account Reps' },
    { feature: 'Engineering Standards', zentro: 'Clean TypeScript, Cloud-Native, 99+ Speed', traditional: 'Generic CMS templates & slow plugins' },
    { feature: 'Brand Craft', zentro: 'Bespoke 3D motion & custom design systems', traditional: 'Cookie-cutter stock assets' },
    { feature: 'Accountability', zentro: 'Tied directly to conversion & growth KPIs', traditional: 'Static deliverables with no ROI guarantee' }
  ];

  return (
    <section 
      id="why-us" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay 
          ? 'bg-slate-50 text-slate-900 border-slate-200/80' 
          : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            THE ZENTRO ADVANTAGE
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Why Visionary Leaders Choose Zentro
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            Five core principles define how we elevate brands from ordinary competitors into undisputed industry category leaders.
          </p>
        </div>

        {/* Interactive Principles Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          
          {/* Left: Selectable Principles List */}
          <div className="lg:col-span-5 space-y-3">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = activePrinciple === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActivePrinciple(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-[#0878FF] text-white border-[#0878FF] shadow-lg shadow-blue-500/25'
                      : isDay
                        ? 'bg-white hover:bg-slate-100 text-slate-900 border-slate-200 shadow-xs'
                        : 'bg-[#0B2854]/60 hover:bg-[#0B2854] text-white border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected 
                        ? 'bg-white text-[#0878FF]' 
                        : isDay
                          ? 'bg-blue-50 text-[#0878FF] group-hover:bg-[#0878FF] group-hover:text-white'
                          : 'bg-white/10 text-slate-300 group-hover:text-[#00B8E6]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className={`text-xs font-mono font-semibold ${
                        isSelected ? 'text-blue-100' : isDay ? 'text-slate-500' : 'opacity-80'
                      }`}>
                        {item.number}
                      </div>
                      <div className="text-base font-bold font-['Space_Grotesk'] leading-tight">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : isDay ? 'text-slate-400 group-hover:translate-x-0.5' : 'text-slate-400 opacity-50 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Principle Detail View Card */}
          <div className={`lg:col-span-7 rounded-3xl p-8 sm:p-12 shadow-2xl border flex flex-col justify-between relative overflow-hidden transition-colors duration-300 ${
            isDay
              ? 'bg-gradient-to-br from-blue-50/80 via-white to-slate-50 text-slate-900 border-blue-200 shadow-blue-500/5'
              : 'bg-gradient-to-br from-[#071A36] to-[#0B2854] text-white border-white/15 shadow-2xl'
          }`}>
            <div className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${
              isDay ? 'bg-blue-200/40' : 'bg-[#0878FF]/20'
            }`} />

            <div className="relative z-10">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold border mb-6 ${
                isDay
                  ? 'bg-blue-50 text-[#0878FF] border-blue-200'
                  : 'bg-white/10 text-[#00B8E6] border-white/15'
              }`}>
                <span>PRINCIPLE {principles[activePrinciple].number}</span>
                <span>•</span>
                <span>{principles[activePrinciple].deliverableBadge}</span>
              </div>

              <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight mb-4 ${
                isDay ? 'text-slate-950' : 'text-white'
              }`}>
                "{principles[activePrinciple].statement}"
              </h3>

              <p className={`text-sm sm:text-base leading-relaxed max-w-xl font-normal ${
                isDay ? 'text-slate-600' : 'text-blue-100/80'
              }`}>
                {principles[activePrinciple].description}
              </p>
            </div>
          </div>

        </div>

        {/* Agency Comparison Table */}
        <div className={`mt-16 rounded-3xl p-6 sm:p-10 border shadow-xl transition-colors ${
          isDay 
            ? 'bg-white border-slate-200 text-slate-900' 
            : 'bg-[#0B2854]/60 border-white/10 text-white'
        }`}>
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className={`text-xl sm:text-2xl font-bold font-['Space_Grotesk'] ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              The Agency Landscape: A Clear Contrast
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${
              isDay ? 'text-slate-500' : 'text-blue-200/70'
            }`}>
              How Zentro's hybrid model compares to conventional outsourced shops.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className={`border-b ${isDay ? 'border-slate-200' : 'border-white/10'}`}>
                  <th className={`py-3 px-4 font-semibold uppercase tracking-wider text-[11px] ${
                    isDay ? 'text-slate-500' : 'text-slate-300'
                  }`}>Evaluation Area</th>
                  <th className={`py-3 px-4 font-bold uppercase tracking-wider text-[11px] rounded-t-xl ${
                    isDay ? 'text-[#0878FF] bg-blue-50/70' : 'text-[#00B8E6] bg-white/5'
                  }`}>Zentro Communications</th>
                  <th className={`py-3 px-4 font-semibold uppercase tracking-wider text-[11px] ${
                    isDay ? 'text-slate-400' : 'text-slate-400'
                  }`}>Traditional Marketing Agencies</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${isDay ? 'divide-slate-100' : 'divide-white/10'}`}>
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className={`transition-colors ${isDay ? 'hover:bg-slate-50' : 'hover:bg-white/5'}`}>
                    <td className={`py-3.5 px-4 font-semibold ${isDay ? 'text-slate-900' : 'text-white'}`}>{row.feature}</td>
                    <td className={`py-3.5 px-4 font-medium ${isDay ? 'text-slate-900 bg-blue-50/40' : 'text-white bg-white/5'}`}>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{row.zentro}</span>
                      </div>
                    </td>
                    <td className={`py-3.5 px-4 ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
