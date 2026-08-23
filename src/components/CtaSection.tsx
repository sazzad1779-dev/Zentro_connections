import React from 'react';
import { ArrowRight, Sparkles, Phone, Mail, MapPin, ShieldCheck, Clock } from 'lucide-react';

interface CtaSectionProps {
  onOpenContact: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="contact" className="py-24 bg-[#071A36] text-white relative overflow-hidden border-b border-white/10">
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0878FF]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#00B8E6]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-[#0B2854] to-[#071A36] rounded-3xl p-8 sm:p-16 border border-white/15 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Headline & Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-mono font-bold text-[#00B8E6] border border-white/15">
                <Sparkles className="w-3.5 h-3.5" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Space_Grotesk'] leading-[1.15] tracking-tight">
                Have an idea worth building? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00B8E6] via-[#0878FF] to-blue-200">
                  Let's turn your next idea into something people remember.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100/85 max-w-2xl leading-relaxed">
                Tell us about your project, challenge, or vision and let's explore what's possible. We review every brief within 24 hours with custom architectural insights.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <button
                  onClick={onOpenContact}
                  id="final-cta-start-project-btn"
                  className="px-8 py-4 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="mailto:hello@zentrocomms.com"
                  className="px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/15 transition-all text-center flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#00B8E6]" />
                  <span>hello@zentrocomms.com</span>
                </a>
              </div>

              {/* Guarantees */}
              <div className="flex flex-wrap items-center gap-6 pt-6 text-xs text-blue-200/70 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00B8E6]" />
                  <span>24-Hour Scoping Turnaround</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Standard Mutual NDA Included</span>
                </div>
              </div>
            </div>

            {/* Right: Quick Direct Contact Card */}
            <div className="lg:col-span-4 bg-[#071A36]/80 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-white/15 space-y-5 text-white shadow-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-200/70">
                DIRECT HQ CHANNELS
              </div>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-['Space_Grotesk']">Global Studios:</strong>
                    <span className="text-blue-100/80">San Francisco • London • Singapore</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-['Space_Grotesk']">Direct Phone:</strong>
                    <span className="text-blue-100/80">+1 (800) 936-8769 (ZENTRO)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00B8E6] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-['Space_Grotesk']">New Partnerships:</strong>
                    <span className="text-blue-100/80">proposals@zentrocomms.com</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-blue-200/70">
                Operating in Americas, EMEA & APAC time zones with round-the-clock developer support.
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
