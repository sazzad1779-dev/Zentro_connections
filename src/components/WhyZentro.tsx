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
  Shield,
  Clock,
  Zap
} from 'lucide-react';

interface WhyZentroProps {
  onOpenContact: () => void;
}

export const WhyZentro: React.FC<WhyZentroProps> = ({ onOpenContact }) => {
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
    <section id="why-us" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            THE ZENTRO ADVANTAGE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Why Visionary Leaders Choose Zentro
          </h2>
          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
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
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-[#0878FF] text-white border-[#0878FF] shadow-lg shadow-blue-500/25'
                      : 'bg-[#0B2854]/60 hover:bg-[#0B2854] text-white border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-white text-[#0878FF]' : 'bg-white/10 text-slate-300 group-hover:text-[#00B8E6]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-semibold opacity-80">
                        {item.number}
                      </div>
                      <div className="text-base font-bold font-['Space_Grotesk'] leading-tight">
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isSelected ? 'translate-x-1 text-white' : 'text-slate-400 opacity-50 group-hover:opacity-100'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Principle Detail View Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#0B2854] to-[#071A36] rounded-3xl p-8 sm:p-12 text-white shadow-2xl border border-white/15 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0878FF]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono font-bold text-[#00B8E6] border border-white/15 mb-6">
                <span>PRINCIPLE {principles[activePrinciple].number}</span>
                <span>•</span>
                <span>{principles[activePrinciple].deliverableBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] text-white leading-tight mb-4">
                "{principles[activePrinciple].statement}"
              </h3>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed max-w-xl">
                {principles[activePrinciple].description}
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
              <div className="flex items-center gap-2 text-xs text-blue-200/70">
                <Shield className="w-4 h-4 text-[#00B8E6]" />
                <span>Zero Compromises on Speed, Security, or Brand Craft</span>
              </div>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8E6] hover:text-white transition-colors"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Agency Comparison Table */}
        <div className="mt-16 bg-[#0B2854]/60 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-xl text-white">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-['Space_Grotesk']">
              The Agency Landscape: A Clear Contrast
            </h3>
            <p className="text-xs sm:text-sm text-blue-200/70 mt-1">
              How Zentro's hybrid model compares to conventional outsourced shops.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 font-semibold text-slate-300 uppercase tracking-wider text-[11px]">Evaluation Area</th>
                  <th className="py-3 px-4 font-bold text-[#00B8E6] uppercase tracking-wider text-[11px] bg-white/5 rounded-t-xl">Zentro Communications</th>
                  <th className="py-3 px-4 font-semibold text-slate-400 uppercase tracking-wider text-[11px]">Traditional Marketing Agencies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">{row.feature}</td>
                    <td className="py-3.5 px-4 font-medium text-white bg-white/5">
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{row.zentro}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-400">
                      <div className="flex items-center gap-2">
                        <X className="w-4 h-4 text-rose-400 shrink-0" />
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
