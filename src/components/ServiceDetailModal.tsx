import React from 'react';
import { 
  X, 
  Check, 
  ArrowRight, 
  Layers, 
  Cpu, 
  TrendingUp, 
  ShieldCheck 
} from 'lucide-react';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenContact: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenContact,
}) => {
  const { isDay } = useTheme();
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md overflow-y-auto">
      <div className={`relative w-full max-w-3xl rounded-3xl shadow-2xl border overflow-hidden my-8 transition-colors ${
        isDay 
          ? 'bg-white text-slate-900 border-slate-200' 
          : 'bg-[#0B2854] text-white border-white/15'
      }`}>
        
        {/* Header */}
        <div className={`p-8 relative border-b ${
          isDay 
            ? 'bg-slate-50 text-slate-900 border-slate-200' 
            : 'bg-[#071A36] text-white border-white/10'
        }`}>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className={`absolute top-6 right-6 p-2 rounded-xl transition-colors cursor-pointer ${
              isDay 
                ? 'bg-slate-200 hover:bg-slate-300 text-slate-700' 
                : 'bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-5 h-5" />
          </button>

          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-3 border ${
            isDay 
              ? 'bg-blue-50 border-blue-200 text-[#0878FF]' 
              : 'bg-white/10 border-white/10 text-[#00B8E6]'
          }`}>
            <span>SERVICE {service.number}</span>
            <span>•</span>
            <span>{service.categoryLabel}</span>
          </div>

          <h2 className={`text-2xl sm:text-3xl font-extrabold font-['Space_Grotesk'] tracking-tight ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            {service.title}
          </h2>

          <p className={`text-xs sm:text-sm mt-2 max-w-xl ${
            isDay ? 'text-slate-600' : 'text-blue-100/90'
          }`}>
            {service.tagline}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h4 className={`text-xs font-bold uppercase tracking-wider font-mono mb-2 ${
              isDay ? 'text-slate-500' : 'text-blue-200/70'
            }`}>Overview</h4>
            <p className={`text-xs sm:text-sm leading-relaxed ${
              isDay ? 'text-slate-600' : 'text-blue-100/80'
            }`}>
              {service.description}
            </p>
          </div>

          {/* Deliverables */}
          <div className={`p-6 rounded-2xl border ${
            isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071A36] border-white/10'
          }`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 mb-4 font-mono ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              <Layers className={`w-4 h-4 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
              <span>Full Scope & Key Deliverables</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className={`flex items-start gap-2 text-xs font-medium ${
                  isDay ? 'text-slate-700' : 'text-blue-100'
                }`}>
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack & Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-5 rounded-2xl border ${
              isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071A36] border-white/10'
            }`}>
              <h5 className={`text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-1.5 font-mono ${
                isDay ? 'text-slate-900' : 'text-white'
              }`}>
                <Cpu className={`w-4 h-4 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                <span>Technologies & Tooling</span>
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {service.technologies.map((t, idx) => (
                  <span key={idx} className={`px-2.5 py-1 rounded-md text-[11px] font-mono border ${
                    isDay 
                      ? 'bg-white border-slate-200 text-slate-700' 
                      : 'bg-white/5 border-white/10 text-blue-100'
                  }`}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-5 rounded-2xl border ${
              isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071A36] border-white/10'
            }`}>
              <h5 className={`text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-1.5 font-mono ${
                isDay ? 'text-slate-900' : 'text-white'
              }`}>
                <TrendingUp className={`w-4 h-4 ${isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}`} />
                <span>Expected Client ROI Impact</span>
              </h5>
              <div className={`text-base sm:text-lg font-bold font-['Space_Grotesk'] mt-2 ${
                isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
              }`}>
                {service.impactMetric}
              </div>
              <p className={`text-[11px] mt-0.5 ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                Benchmarked across previous partner case studies.
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
            isDay ? 'border-slate-200' : 'border-white/10'
          }`}>
            <div className={`flex items-center gap-2 text-xs ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Dedicated senior squad assignment guaranteed</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact(service.title);
              }}
              className="px-6 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Inquire for this Capability</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
