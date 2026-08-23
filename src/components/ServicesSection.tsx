import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  TrendingUp, 
  Film, 
  Server, 
  Compass, 
  ArrowRight, 
  Check, 
  Sparkles,
  Plus,
  Layers,
  ExternalLink,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Sliders
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData';
import { ServiceItem } from '../types';
import { CapabilityWidget } from './capabilities/CapabilityWidget';

interface ServicesSectionProps {
  onOpenContact: (serviceName?: string) => void;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContact, onSelectService }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'digital' | 'creative' | 'marketing' | 'tech'>('all');
  
  // Exclusive expansion state: Only one capability expands at a time
  const [expandedId, setExpandedId] = useState<string | null>('digital-solutions');
  
  // Active inner tab per card: 'interactive' | 'deliverables' | 'tech'
  const [cardTab, setCardTab] = useState<Record<string, 'interactive' | 'deliverables' | 'tech'>>({
    'digital-solutions': 'interactive',
    'creative-branding': 'interactive',
    'digital-marketing': 'interactive',
    'video-animation': 'interactive',
    'it-cloud-solutions': 'interactive',
    'strategic-communication': 'interactive',
  });

  const filteredServices = activeFilter === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(s => s.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  const setTabForCard = (id: string, tab: 'interactive' | 'deliverables' | 'tech') => {
    setCardTab(prev => ({ ...prev, [id]: tab }));
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Palette': return <Palette className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Film': return <Film className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Server': return <Server className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 'Compass': return <Compass className="w-5 h-5 sm:w-6 sm:h-6" />;
      default: return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />;
    }
  };

  const categories = [
    { id: 'all', label: 'All Disciplines', count: SERVICES_DATA.length },
    { id: 'digital', label: 'Digital Platforms', count: SERVICES_DATA.filter(s => s.category === 'digital').length },
    { id: 'creative', label: 'Brand & 3D Motion', count: SERVICES_DATA.filter(s => s.category === 'creative').length },
    { id: 'marketing', label: 'Growth & PR', count: SERVICES_DATA.filter(s => s.category === 'marketing').length },
    { id: 'tech', label: 'Cloud & Systems', count: SERVICES_DATA.filter(s => s.category === 'tech').length },
  ];

  return (
    <section id="services" className="py-24 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0878FF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00B8E6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 pb-8 border-b border-white/10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
              <Activity className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURAL DISCIPLINES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight">
              Our Capabilities
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 mt-3 leading-relaxed">
              We engineer comprehensive digital transformations — fusing strategic positioning, high-impact branding, cinematic 3D motion, and robust full-stack engineering. Click any capability card to explore its live interactive architecture sandbox.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0B2854] rounded-2xl border border-white/10 self-start lg:self-auto shadow-lg">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  activeFilter === tab.id
                    ? 'bg-[#0878FF] text-white shadow-md shadow-blue-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                  activeFilter === tab.id ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-400'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Capabilities List: Expandable Headings with Interactive Sandbox */}
        <div className="space-y-4 sm:space-y-5">
          {filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;
            const currentTab = cardTab[service.id] || 'interactive';

            return (
              <div
                key={service.id}
                id={`capability-card-${service.id}`}
                className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0B2854] border-[#00B8E6]/60 shadow-2xl shadow-blue-950/60 ring-1 ring-[#00B8E6]/30'
                    : 'bg-[#0B2854]/60 hover:bg-[#0B2854]/90 border-white/10 hover:border-white/25 shadow-lg'
                }`}
              >
                {/* Collapsible Header Row (Click to toggle expansion) */}
                <div
                  onClick={() => toggleExpand(service.id)}
                  className="p-5 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-5 select-none group"
                  role="button"
                  tabIndex={0}
                  aria-expanded={isExpanded}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(service.id);
                    }
                  }}
                >
                  {/* Left: Number, Icon, Title & Domain Badge */}
                  <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                    {/* Index Number */}
                    <span className={`text-base sm:text-xl font-mono font-bold shrink-0 transition-colors ${
                      isExpanded ? 'text-[#00B8E6]' : 'text-blue-200/40 group-hover:text-blue-200'
                    }`}>
                      {service.number}
                    </span>

                    {/* Icon with glowing backdrop */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isExpanded 
                        ? 'bg-[#0878FF] text-white border-[#00B8E6] shadow-lg shadow-blue-500/30' 
                        : 'bg-white/10 text-[#00B8E6] border-white/10 group-hover:border-[#00B8E6]/40 group-hover:bg-white/15'
                    }`}>
                      {getIcon(service.iconName)}
                    </div>

                    {/* Titles */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap mb-1">
                        <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#00B8E6] px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                          {service.categoryLabel}
                        </span>
                        <span className="text-xs text-blue-200/60 font-mono hidden sm:inline">
                          • {service.deliverables.length} Key Deliverables
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white font-['Space_Grotesk'] tracking-tight group-hover:text-[#00B8E6] transition-colors leading-snug">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-blue-100/70 line-clamp-1 mt-1 font-normal max-w-3xl">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Key Metric & Interactive Plus Button */}
                  <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                    {/* Impact Metric Pill */}
                    <div className="hidden xl:flex flex-col items-end text-right">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200/60">Verified Benchmark</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">{service.impactMetric.split('&')[0]}</span>
                    </div>

                    {/* Expand/Collapse Plus Button */}
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-mono font-semibold text-blue-200/70 hidden sm:inline">
                        {isExpanded ? 'Close Tray' : 'Explore Capability'}
                      </span>
                      
                      <div 
                        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
                          isExpanded
                            ? 'bg-[#0878FF] text-white border-[#00B8E6] shadow-lg shadow-blue-500/40 rotate-45'
                            : 'bg-white/10 text-white border-white/15 group-hover:bg-[#0878FF] group-hover:border-[#00B8E6] group-hover:text-white'
                        }`}
                        title={isExpanded ? "Collapse capability" : "Expand capability"}
                      >
                        <Plus className="w-5 h-5 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Tray (Visible ONLY on the clicked card) */}
                {isExpanded && (
                  <div className="px-5 pb-7 sm:px-8 sm:pb-8 pt-2 border-t border-white/10 animate-fadeIn">
                    
                    {/* Inner Navigation Tabs */}
                    <div className="flex items-center gap-2 pb-4 border-b border-white/10 my-3">
                      <button
                        onClick={() => setTabForCard(service.id, 'interactive')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                          currentTab === 'interactive'
                            ? 'bg-[#0878FF] text-white shadow-md shadow-blue-500/25'
                            : 'bg-white/5 hover:bg-white/10 text-blue-200/80'
                        }`}
                      >
                        <Sliders className="w-3.5 h-3.5" />
                        <span>Interactive Sandbox</span>
                      </button>

                      <button
                        onClick={() => setTabForCard(service.id, 'deliverables')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                          currentTab === 'deliverables'
                            ? 'bg-[#0878FF] text-white shadow-md shadow-blue-500/25'
                            : 'bg-white/5 hover:bg-white/10 text-blue-200/80'
                        }`}
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Deliverables & Scope ({service.deliverables.length})</span>
                      </button>

                      <button
                        onClick={() => setTabForCard(service.id, 'tech')}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all flex items-center gap-1.5 ${
                          currentTab === 'tech'
                            ? 'bg-[#0878FF] text-white shadow-md shadow-blue-500/25'
                            : 'bg-white/5 hover:bg-white/10 text-blue-200/80'
                        }`}
                      >
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Tech Stack & Governance</span>
                      </button>
                    </div>

                    {/* Tab 1: Interactive Live Sandbox */}
                    {currentTab === 'interactive' && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2">
                        {/* Left Sandbox Widget */}
                        <div className="lg:col-span-7">
                          <CapabilityWidget serviceId={service.id} />
                        </div>

                        {/* Right Strategic Description & Action Trigger */}
                        <div className="lg:col-span-5 space-y-4">
                          <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-3">
                            <div className="text-xs font-bold uppercase tracking-wider text-blue-200/70 font-mono flex items-center gap-2">
                              <Compass className="w-4 h-4 text-[#00B8E6]" />
                              <span>STRATEGIC BLUEPRINT</span>
                            </div>
                            <p className="text-xs sm:text-sm text-blue-100/90 leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          <div className="p-4 rounded-2xl bg-[#071A36] border border-white/10 space-y-2">
                            <div className="text-xs font-mono text-blue-200/60 uppercase">
                              VERIFIED IMPACT METRIC
                            </div>
                            <div className="text-base sm:text-lg font-bold text-[#00B8E6] font-['Space_Grotesk']">
                              {service.impactMetric}
                            </div>
                            <div className="text-[11px] text-blue-200/70">
                              Directly measured across previous Zentro partner deployments.
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onOpenContact(service.title);
                              }}
                              className="px-5 py-2.5 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 group/btn"
                            >
                              <span>Inquire for this Scope</span>
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectService(service);
                              }}
                              className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold transition-colors flex items-center gap-1.5"
                            >
                              <span>Full Spec Sheet</span>
                              <ExternalLink className="w-3.5 h-3.5 text-blue-200/80" />
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 2: Scope & Deliverables */}
                    {currentTab === 'deliverables' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                        <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2 pb-2 border-b border-white/10">
                            <Layers className="w-4 h-4 text-[#00B8E6]" />
                            <span>PRIMARY DELIVERABLES SPRINT</span>
                          </div>
                          <ul className="space-y-3 text-xs text-blue-100">
                            {service.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <div className="w-5 h-5 rounded-full bg-blue-500/20 text-[#00B8E6] flex items-center justify-center shrink-0 mt-0.5 border border-blue-400/20 font-mono text-[10px] font-bold">
                                  0{idx + 1}
                                </div>
                                <span className="leading-snug pt-0.5">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-4 flex flex-col justify-between">
                          <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2 pb-2 border-b border-white/10">
                              <ShieldCheck className="w-4 h-4 text-emerald-400" />
                              <span>QUALITY ASSURANCE & TIMELINES</span>
                            </div>
                            <p className="text-xs text-blue-100/90 leading-relaxed mt-3">
                              Every deliverable goes through a dual-director code and design review before deployment. We guarantee complete handover documentation, design tokens, and modular source files.
                            </p>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-xs font-mono text-blue-200/70">Estimated Sprint Velocity:</span>
                            <span className="text-xs font-bold text-white font-mono bg-white/5 px-2.5 py-1 rounded-md border border-white/10">
                              2 – 6 Weeks Delivery
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Tech Stack & Governance */}
                    {currentTab === 'tech' && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                        <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-3">
                          <div className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
                            <Cpu className="w-4 h-4 text-[#00B8E6]" />
                            <span>APPROVED TOOLING</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {service.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-blue-100"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-emerald-400" />
                            <span>STAFFING ASSURANCE</span>
                          </div>
                          <p className="text-xs text-blue-100/80 leading-relaxed pt-1">
                            Staffed with dedicated Senior Leads. Zero junior handoffs. Direct Slack / Teams communication channel.
                          </p>
                        </div>

                        <div className="p-5 rounded-2xl bg-[#071A36] border border-white/10 space-y-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-white font-mono flex items-center gap-2">
                            <Zap className="w-4 h-4 text-[#00B8E6]" />
                            <span>INTELLECTUAL PROPERTY</span>
                          </div>
                          <p className="text-xs text-blue-100/80 leading-relaxed pt-1">
                            100% full commercial IP ownership transfer upon milestone sign-off. Comprehensive handover repos and design files.
                          </p>
                        </div>
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Multi-Disciplinary Squad Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0B2854] to-[#071A36] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl border border-white/15 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#0878FF]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center lg:text-left relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00B8E6] font-mono">
              <Sparkles className="w-4 h-4" />
              <span>BESPOKE MULTI-DISCIPLINARY SQUADS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk']">
              Need a tailored combination of capabilities?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/80 max-w-xl">
              We frequently assemble cross-functional pods uniting brand strategists, full-stack engineers, 3D motion artists, and growth directors for unified sprints.
            </p>
          </div>

          <button
            onClick={() => onOpenContact('Multi-Disciplinary Scope')}
            className="shrink-0 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all duration-200 group flex items-center gap-2.5 relative z-10"
          >
            <span>Request Custom Squad</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
