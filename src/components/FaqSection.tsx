import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  ArrowRight,
  MessageSquare,
  Activity
} from 'lucide-react';
import { FAQ_DATA } from '../data/siteData';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            <Activity className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
            Everything you need to know about our partnership terms, sprint cadences, and technical deliverables.
          </p>

          {/* Quick Search Input */}
          <div className="mt-8 relative max-w-md mx-auto">
            <Search className="w-4 h-4 text-blue-200/60 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. timelines, startups, tech)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#0B2854] border border-white/10 text-xs sm:text-sm text-white placeholder:text-blue-200/40 focus:outline-none focus:border-[#00B8E6] focus:ring-1 focus:ring-[#00B8E6] transition-all"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0B2854] border-[#00B8E6]/50 shadow-lg' 
                    : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/70 border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-['Space_Grotesk'] text-white">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#00B8E6] text-[#071A36] rotate-180' : 'bg-white/5 text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-blue-100/80 leading-relaxed border-t border-white/5 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No matching questions found. Ask us directly below!
            </div>
          )}
        </div>

        {/* Direct Question Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white font-['Space_Grotesk']">Have a specific question not covered here?</div>
            <div className="text-xs text-blue-100/70">Our principals respond directly within 24 hours.</div>
          </div>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
