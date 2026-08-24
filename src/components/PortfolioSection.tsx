import React, { useState } from 'react';
import { 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/siteData';
import { ProjectItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface PortfolioSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject, onOpenContact }) => {
  const { isDay } = useTheme();
  const [filter, setFilter] = useState<'all' | 'digital' | 'brand' | 'motion' | 'growth'>('all');

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(p => p.categorySlug === filter);

  const featuredProject = PORTFOLIO_DATA.find(p => p.featured) || PORTFOLIO_DATA[0];
  const gridProjects = filteredProjects.filter(p => p.id !== (filter === 'all' ? featuredProject.id : ''));

  return (
    <section 
      id="work" 
      className={`py-24 relative transition-colors duration-300 ${
        isDay 
          ? 'bg-white text-slate-900 border-b border-slate-200/80' 
          : 'bg-[#071A36] text-white border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b ${
          isDay ? 'border-slate-200' : 'border-white/10'
        }`}>
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
              isDay 
                ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' 
                : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
            }`}>
              CASE STUDIES & PORTFOLIO
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              Selected Work
            </h2>
            <p className={`text-base sm:text-lg mt-2 max-w-xl ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              Ideas transformed into meaningful, high-converting digital experiences.
            </p>
          </div>

          {/* Filter Pills */}
          <div className={`flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 p-1.5 rounded-2xl border self-start md:self-auto ${
            isDay ? 'bg-slate-100 border-slate-200' : 'bg-[#0B2854] border-white/10'
          }`}>
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'digital', label: 'Digital Apps' },
              { id: 'brand', label: 'Brand Systems' },
              { id: 'motion', label: '3D & Motion' },
              { id: 'growth', label: 'Growth Campaigns' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#0878FF] text-white shadow-xs'
                    : isDay
                      ? 'text-slate-600 hover:text-slate-950 hover:bg-slate-200/60'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Case Study */}
        {filter === 'all' && (
          <div 
            onClick={() => onSelectProject(featuredProject)}
            className={`mb-12 group rounded-3xl overflow-hidden border shadow-2xl transition-all duration-300 cursor-pointer grid grid-cols-1 lg:grid-cols-12 ${
              isDay
                ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-blue-500/10'
                : 'bg-[#0B2854]/80 border-white/15 hover:border-[#00B8E6]/50'
            }`}
          >
            {/* Image Column */}
            <div className="lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] overflow-hidden bg-slate-900">
              <img
                src={featuredProject.image}
                alt={featuredProject.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
              <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#071A36]/90 backdrop-blur-md text-white text-[11px] font-bold tracking-wider uppercase border border-white/20">
                <Sparkles className="w-3 h-3 text-[#00B8E6]" />
                <span>Featured Flagship Project</span>
              </div>
              <div className="absolute bottom-5 right-5 w-11 h-11 rounded-full bg-[#0878FF] text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-medium mb-3">
                  <span className={`font-bold uppercase tracking-wider font-mono ${
                    isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                  }`}>
                    {featuredProject.category}
                  </span>
                  <span className={`font-mono px-2.5 py-0.5 rounded-full ${
                    isDay ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-slate-300'
                  }`}>
                    {featuredProject.year}
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-extrabold leading-tight font-['Space_Grotesk'] mb-3 transition-colors ${
                  isDay 
                    ? 'text-slate-900 group-hover:text-[#0878FF]' 
                    : 'text-white group-hover:text-[#00B8E6]'
                }`}>
                  {featuredProject.title}
                </h3>

                <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                  isDay ? 'text-slate-600' : 'text-blue-100/80'
                }`}>
                  {featuredProject.tagline}
                </p>

                {/* Key Metrics row */}
                <div className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border mb-6 ${
                  isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071A36]/80 border-white/10'
                }`}>
                  {featuredProject.results.map((res, idx) => (
                    <div key={idx}>
                      <div className={`text-lg sm:text-xl font-bold font-['Space_Grotesk'] ${
                        isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                      }`}>{res.value}</div>
                      <div className={`text-[10px] leading-tight mt-0.5 ${
                        isDay ? 'text-slate-500' : 'text-blue-200/70'
                      }`}>{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {featuredProject.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2.5 py-1 rounded-md text-[11px] font-medium ${
                      isDay ? 'bg-slate-100 text-slate-700' : 'bg-white/10 text-slate-300'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={`pt-6 mt-6 border-t flex items-center justify-between ${
                isDay ? 'border-slate-100' : 'border-white/10'
              }`}>
                <span className={`text-xs font-semibold ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Client: {featuredProject.client}</span>
                <span className={`text-xs font-bold transition-all flex items-center gap-1 ${
                  isDay ? 'text-[#0878FF] group-hover:translate-x-1' : 'text-[#00B8E6] group-hover:text-white group-hover:translate-x-1'
                }`}>
                  View Full Case Study <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Asymmetric Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className={`group rounded-3xl overflow-hidden border shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                isDay
                  ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:shadow-blue-500/10'
                  : 'bg-[#0B2854]/60 hover:bg-[#0B2854] border-white/10 hover:border-[#00B8E6]/50'
              }`}
            >
              <div>
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071A36]/90 backdrop-blur-md text-[#00B8E6] text-[11px] font-bold uppercase tracking-wider border border-white/20 font-mono">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white group-hover:bg-[#0878FF] flex items-center justify-center shadow-md transition-all group-hover:rotate-45">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className={`font-semibold ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>{project.client}</span>
                    <span className={`font-mono px-2 py-0.5 rounded text-[11px] ${
                      isDay ? 'bg-slate-100 text-slate-600' : 'bg-white/10 text-slate-300'
                    }`}>{project.year}</span>
                  </div>

                  <h3 className={`text-xl font-bold leading-snug font-['Space_Grotesk'] mb-2 transition-colors ${
                    isDay ? 'text-slate-900 group-hover:text-[#0878FF]' : 'text-white group-hover:text-[#00B8E6]'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed ${
                    isDay ? 'text-slate-600' : 'text-blue-100/80'
                  }`}>
                    {project.tagline}
                  </p>

                  {/* Impact Results Pills */}
                  <div className={`flex flex-wrap gap-2 pt-2 border-t ${
                    isDay ? 'border-slate-100' : 'border-white/10'
                  }`}>
                    {project.results.map((res, idx) => (
                      <div key={idx} className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium flex items-center gap-1.5 ${
                        isDay 
                          ? 'bg-slate-50 border-slate-200 text-slate-700' 
                          : 'bg-white/5 border-white/10 text-slate-200'
                      }`}>
                        <strong className={`font-mono ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`}>{res.value}</strong>
                        <span className={`text-[10px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>{res.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom footer bar */}
              <div className={`px-7 py-4 border-t flex items-center justify-between text-xs font-semibold ${
                isDay ? 'bg-slate-50 border-slate-100 text-slate-600' : 'bg-[#071A36]/80 border-white/10 text-slate-300'
              }`}>
                <span>Inspect Architecture & ROI</span>
                <span className={`flex items-center gap-1 transition-all ${
                  isDay ? 'text-[#0878FF] group-hover:translate-x-1' : 'text-[#00B8E6] group-hover:text-white group-hover:translate-x-1'
                }`}>
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
