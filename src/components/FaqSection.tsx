import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  ArrowRight,
  Activity,
  HelpCircle
} from 'lucide-react';
import { FAQ_DATA } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

interface FaqSectionProps {
  onOpenContact: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFaq = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  const filteredFaqs = FAQ_DATA.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section 
      id="faq" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-white text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Background Lighting */}
      <div className={`absolute top-1/2 left-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none -translate-y-1/2 ${
        isDay ? 'bg-blue-100/40' : 'bg-[#0878FF]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
            isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
          }`}>
            <Activity className="w-3.5 h-3.5" />
            <span>TRANSPARENCY & CLARITY</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed font-normal ${
            isDay ? 'text-slate-600' : 'text-blue-100/85'
          }`}>
            Everything you need to know about our partnership terms, sprint cadences, and technical deliverables.
          </p>

          {/* Quick Search Input */}
          <div className="mt-8 relative max-w-lg mx-auto">
            <Search className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 ${
              isDay ? 'text-slate-400' : 'text-blue-200/60'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. timelines, startups, tech)..."
              className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs sm:text-sm transition-all focus:outline-none ${
                isDay
                  ? 'bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-[#0878FF] focus:ring-1 focus:ring-[#0878FF]'
                  : 'bg-[#0B2854] border border-white/10 text-white placeholder:text-blue-200/40 focus:border-[#00B8E6] focus:ring-1 focus:ring-[#00B8E6]'
              }`}
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? isDay
                      ? 'bg-white border-blue-400 shadow-md shadow-blue-500/5'
                      : 'bg-[#0B2854] border-[#00B8E6]/50 shadow-lg' 
                    : isDay
                      ? 'bg-slate-50/80 hover:bg-slate-100/80 border-slate-200'
                      : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/70 border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <span className={`text-sm sm:text-base font-bold font-['Space_Grotesk'] ${
                    isDay ? (isOpen ? 'text-[#0878FF]' : 'text-slate-900') : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen 
                      ? isDay ? 'bg-[#0878FF] text-white rotate-180' : 'bg-[#00B8E6] text-[#071A36] rotate-180' 
                      : isDay ? 'bg-slate-200 text-slate-600' : 'bg-white/5 text-slate-300'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className={`px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t font-normal ${
                    isDay ? 'text-slate-600 border-slate-100' : 'text-blue-100/80 border-white/5'
                  }`}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className={`text-center py-12 ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
              No matching questions found. Ask us directly below!
            </div>
          )}
        </div>

        {/* Direct Question Callout - Perfectly Aligned Layout & Button */}
        <div className={`mt-12 p-6 sm:p-7 rounded-2xl border shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-5 transition-all ${
          isDay
            ? 'bg-slate-50/90 border-slate-200/90 text-slate-900 shadow-slate-200/50'
            : 'bg-[#0B2854]/70 border-white/15 text-white shadow-black/20'
        }`}>
          <div className="flex items-center gap-4">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
              isDay ? 'bg-blue-100 text-[#0878FF]' : 'bg-white/10 text-[#00B8E6]'
            }`}>
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className={`text-base font-bold font-['Space_Grotesk'] ${isDay ? 'text-slate-950' : 'text-white'}`}>
                Have a specific question not covered here?
              </div>
              <div className={`text-xs mt-0.5 ${isDay ? 'text-slate-500' : 'text-blue-200/70'}`}>
                Our technical and creative principals respond directly within 24 hours.
              </div>
            </div>
          </div>

          <button
            onClick={onOpenContact}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shrink-0 shadow-md shadow-blue-500/25 cursor-pointer group"
          >
            <span>Ask a Question</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};
