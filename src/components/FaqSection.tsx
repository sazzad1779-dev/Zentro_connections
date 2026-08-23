import React, { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  ArrowRight,
  MessageSquare
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
    <section id="faq" className="py-24 bg-[#071A36] text-white relative border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
            GOT QUESTIONS?
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-blue-100/80 mt-2">
            Everything you need to know about our partnership terms, timelines, and technical deliverables.
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
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-[#0B2854] border-[#00B8E6]/40 shadow-lg' 
                    : 'bg-[#0B2854]/60 hover:bg-[#0B2854] border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-white font-['Space_Grotesk']"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0878FF] text-white rotate-180' : 'bg-white/10 text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-blue-100/80 leading-relaxed pt-1 border-t border-white/10">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-blue-200/70 text-sm">
              No questions found matching "{searchQuery}". Have a specific question?
              <div className="mt-3">
                <button
                  onClick={onOpenContact}
                  className="text-[#00B8E6] font-bold hover:underline"
                >
                  Ask our team directly →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0B2854]/80 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-[#00B8E6] flex items-center justify-center shadow-xs border border-white/10">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white font-['Space_Grotesk']">Still have questions?</div>
              <div className="text-[11px] text-blue-200/70">Our leadership team is available for direct 1-on-1 consultations.</div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/25 transition-all shrink-0"
          >
            Ask a Partner
          </button>
        </div>

      </div>
    </section>
  );
};
