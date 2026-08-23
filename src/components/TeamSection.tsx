import React, { useState } from 'react';
import { 
  Linkedin, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Users2 
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/siteData';

interface TeamSectionProps {
  onOpenContact: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenContact }) => {
  const [departmentFilter, setDepartmentFilter] = useState<'all' | 'leadership' | 'tech' | 'creative' | 'marketing' | 'animation'>('all');

  const filteredTeam = departmentFilter === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.department === departmentFilter);

  return (
    <section id="team" className="py-24 bg-[#071A36] text-white relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
              LEADERSHIP & SPECIALISTS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              The People Behind Zentro
            </h2>
            <p className="text-base sm:text-lg text-blue-100/80 mt-2 max-w-xl">
              An interdisciplinary squad of world-class designers, systems engineers, motion artists, and growth directors.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 mt-6 md:mt-0 p-1.5 bg-[#0B2854] rounded-2xl border border-white/10 self-start md:self-auto">
            {[
              { id: 'all', label: 'All Minds' },
              { id: 'leadership', label: 'Leadership' },
              { id: 'tech', label: 'Tech & Cloud' },
              { id: 'creative', label: 'Creative & UX' },
              { id: 'marketing', label: 'Growth & PR' },
              { id: 'animation', label: '3D Motion' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setDepartmentFilter(tab.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  departmentFilter === tab.id
                    ? 'bg-[#0878FF] text-white shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTeam.map((member) => (
            <div 
              key={member.id}
              className="group bg-[#0B2854]/60 hover:bg-[#0B2854] rounded-3xl overflow-hidden border border-white/10 hover:border-[#00B8E6]/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-white"
            >
              <div>
                {/* Member Portrait Image */}
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#071A36]/90 backdrop-blur-md text-[#00B8E6] text-[10px] font-bold uppercase tracking-wider border border-white/20 font-mono">
                    {member.departmentLabel}
                  </div>
                  
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-[#0878FF] flex items-center justify-center shadow-md transition-all border border-white/20"
                      aria-label={`${member.name} LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Info */}
                <div className="p-7">
                  <h3 className="text-xl font-bold text-white font-['Space_Grotesk'] leading-tight mb-1">
                    {member.name}
                  </h3>
                  <div className="text-xs font-semibold text-[#00B8E6] mb-3">
                    {member.role}
                  </div>
                  <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-5">
                    {member.bio}
                  </p>

                  {/* Specialization Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                    {member.specialization.map((spec, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-[10px] font-medium text-slate-300">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="px-7 py-3.5 bg-[#071A36]/80 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300">
                <span>Direct Squad Collaboration</span>
                <span className="text-[#00B8E6] font-mono text-[11px]">Active Lead</span>
              </div>
            </div>
          ))}
        </div>

        {/* Join our team / Squad callout */}
        <div className="mt-14 p-8 rounded-3xl bg-[#0B2854]/80 border border-white/10 text-center max-w-2xl mx-auto space-y-3 text-white shadow-xl">
          <h4 className="text-lg font-bold text-white font-['Space_Grotesk']">
            Want to work with our creative technology squad?
          </h4>
          <p className="text-xs sm:text-sm text-blue-100/80">
            We are always scouting for senior product designers, creative technologists, 3D animators, and growth strategists worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all"
            >
              <span>Explore Open Roles & Inquiries</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
