import React from 'react';
import { 
  X, 
  ArrowRight, 
  TrendingUp
} from 'lucide-react';
import { ProjectItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: (projectTitle: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenContact,
}) => {
  const { isDay } = useTheme();
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-4xl rounded-3xl shadow-2xl border overflow-hidden my-8 max-h-[90vh] flex flex-col transition-colors ${
        isDay 
          ? 'bg-white text-slate-900 border-slate-200' 
          : 'bg-[#0B2854] text-white border-white/15'
      }`}>
        
        {/* Modal Top Bar */}
        <div className={`flex items-center justify-between p-6 border-b shrink-0 ${
          isDay 
            ? 'bg-slate-50 text-slate-900 border-slate-200' 
            : 'bg-[#071A36] text-white border-white/10'
        }`}>
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${
              isDay 
                ? 'bg-blue-50 text-[#0878FF] border-blue-200' 
                : 'bg-blue-500/20 text-[#00B8E6] border-blue-400/20'
            }`}>
              {project.category}
            </span>
            <span className={`text-xs font-mono hidden sm:inline ${
              isDay ? 'text-slate-500' : 'text-blue-200/60'
            }`}>Year: {project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
              isDay 
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' 
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Header */}
          <div>
            <div className={`text-xs font-bold uppercase tracking-wider mb-1 font-mono ${
              isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
            }`}>
              CLIENT: {project.client}
            </div>
            <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Space_Grotesk'] leading-tight ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              {project.title}
            </h2>
            <p className={`text-sm sm:text-base mt-3 leading-relaxed ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              {project.summary}
            </p>
          </div>

          {/* High-res Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-slate-900 shadow-md border border-slate-200/20">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Results Metric Grid */}
          <div className={`p-6 rounded-2xl border ${
            isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071A36] border-white/10'
          }`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 font-mono ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              <TrendingUp className={`w-4 h-4 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
              <span>Key Verified Performance Metrics</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className={`p-4 rounded-xl border ${
                  isDay 
                    ? 'bg-white border-slate-200 shadow-xs' 
                    : 'bg-white/5 border-white/10'
                }`}>
                  <div className={`text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] ${
                    isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                  }`}>
                    {res.value}
                  </div>
                  <div className={`text-xs font-semibold mt-0.5 font-['Space_Grotesk'] ${
                    isDay ? 'text-slate-700' : 'text-white'
                  }`}>
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-2xl border ${
              isDay ? 'bg-rose-50/60 border-rose-200' : 'bg-[#071A36] border-white/10'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 font-mono ${
                isDay ? 'text-rose-700' : 'text-rose-400'
              }`}>
                The Challenge
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDay ? 'text-slate-700' : 'text-blue-100/80'
              }`}>
                {project.challenge}
              </p>
            </div>

            <div className={`p-6 rounded-2xl border ${
              isDay ? 'bg-emerald-50/60 border-emerald-200' : 'bg-[#071A36] border-white/10'
            }`}>
              <h4 className={`text-xs font-bold uppercase tracking-wider mb-2 font-mono ${
                isDay ? 'text-emerald-700' : 'text-emerald-400'
              }`}>
                Zentro's Solution
              </h4>
              <p className={`text-xs sm:text-sm leading-relaxed ${
                isDay ? 'text-slate-700' : 'text-blue-100/80'
              }`}>
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech & Disciplines Tags */}
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider mb-2.5 font-mono ${
              isDay ? 'text-slate-500' : 'text-blue-200/70'
            }`}>
              Disciplines & Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className={`px-3 py-1.5 rounded-lg border text-xs font-mono ${
                  isDay 
                    ? 'bg-slate-100 border-slate-200 text-slate-700' 
                    : 'bg-white/5 border-white/10 text-blue-100'
                }`}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className={`p-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 ${
          isDay 
            ? 'bg-slate-50 border-slate-200 text-slate-900' 
            : 'bg-[#071A36] border-white/10 text-white'
        }`}>
          <span className={`text-xs font-medium ${isDay ? 'text-slate-600' : 'text-blue-200/70'}`}>
            Want similar architecture and business results for your company?
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenContact(`Project similar to ${project.title}`);
            }}
            className="px-6 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
