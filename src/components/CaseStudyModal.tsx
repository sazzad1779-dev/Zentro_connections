import React from 'react';
import { 
  X, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp,
  Layers
} from 'lucide-react';
import { ProjectItem } from '../types';

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
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071A36]/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0B2854] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-6 bg-[#071A36] text-white border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-[#00B8E6] text-xs font-mono font-bold border border-blue-400/20">
              {project.category}
            </span>
            <span className="text-xs text-blue-200/60 font-mono hidden sm:inline">Year: {project.year}</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8">
          
          {/* Header */}
          <div>
            <div className="text-xs font-bold text-[#00B8E6] uppercase tracking-wider mb-1 font-mono">
              CLIENT: {project.client}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white font-['Space_Grotesk'] leading-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base text-blue-100/80 mt-3 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* High-res Image */}
          <div className="relative rounded-2xl overflow-hidden aspect-16/9 bg-slate-900 shadow-md border border-white/10">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Results Metric Grid */}
          <div className="p-6 rounded-2xl bg-[#071A36] border border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2 font-mono">
              <TrendingUp className="w-4 h-4 text-[#00B8E6]" />
              <span>Key Verified Performance Metrics</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.results.map((res, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 shadow-2xs">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#00B8E6] font-['Space_Grotesk']">
                    {res.value}
                  </div>
                  <div className="text-xs font-semibold text-white mt-0.5 font-['Space_Grotesk']">
                    {res.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#071A36] border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2 font-mono">
                The Challenge
              </h4>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#071A36] border border-white/10">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2 font-mono">
                Zentro's Solution
              </h4>
              <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech & Disciplines Tags */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-blue-200/70 mb-2.5 font-mono">
              Disciplines & Technologies Deployed
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-blue-100">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-[#071A36] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 text-white">
          <span className="text-xs font-medium text-blue-200/70">
            Want similar architecture and business results for your company?
          </span>

          <button
            onClick={() => {
              onClose();
              onOpenContact(`Project similar to ${project.title}`);
            }}
            className="px-6 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Start Similar Project</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </div>
  );
};
