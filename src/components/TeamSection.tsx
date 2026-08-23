import React, { useState } from 'react';
import { 
  Linkedin, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  Users2,
  Activity,
  ArrowRight
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
    <section id="team" className="py-20 sm:py-24 md:py-28 bg-[#071A36] text-white relative border-b border-white/10 overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0878FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header (Aligned with site standard) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/15 border border-blue-500/30 text-xs font-bold uppercase tracking-wider text-[#00B8E6] mb-3 font-mono">
              <Activity className="w-3.5 h-3.5" />
              <span>LEADERSHIP & SQUAD PRINCIPALS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Space_Grotesk'] leading-tight mb-4">
              The People Behind Zentro
            </h2>
            <p className="text-base sm:text-lg text-blue-100/85 leading-relaxed font-normal">
              An interdisciplinary squad of world-class designers, systems engineers, motion artists, and growth directors.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#0B2854] rounded-2xl border border-white/10 self-start md:self-auto shrink-0">
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
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="bg-[#0B2854]/40 hover:bg-[#0B2854]/85 border border-white/10 hover:border-[#00B8E6]/50 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between backdrop-blur-xs hover:-translate-y-1"
            >
              <div className="p-6 sm:p-7">
                {/* Photo & Role */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover border-2 border-white/10 group-hover:border-[#00B8E6] transition-colors shadow-md"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-[#071A36] flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white truncate group-hover:text-[#00B8E6] transition-colors">
                        {member.name}
                      </h3>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-400 hover:text-[#00B8E6] transition-colors p-1"
                          aria-label={`${member.name} LinkedIn Profile`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#00B8E6] mt-0.5">
                      {member.role}
                    </p>
                    <span className="text-[11px] font-mono text-blue-200/60 block mt-0.5">
                      {member.departmentLabel}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-5 font-normal">
                  {member.bio}
                </p>

                {/* Specialization Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {member.specialization.map((spec, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="px-6 py-3 bg-[#071A36]/80 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-slate-300 font-mono">
                <span className="text-slate-400">Squad Access</span>
                <span className="text-[#00B8E6]">Active Principal Lead</span>
              </div>
            </div>
          ))}
        </div>

        {/* Squad collaboration callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0B2854]/60 border border-white/10 text-center max-w-2xl mx-auto space-y-3 text-white shadow-xl backdrop-blur-xs">
          <h4 className="text-lg sm:text-xl font-bold text-white font-['Space_Grotesk']">
            Want to work with our creative technology squad?
          </h4>
          <p className="text-xs sm:text-sm text-blue-100/80">
            We are always scouting for senior product designers, creative technologists, 3D animators, and growth strategists worldwide.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#0878FF] hover:bg-[#00B8E6] hover:text-[#071A36] text-white shadow-lg shadow-blue-500/25 transition-all cursor-pointer"
            >
              <span>Explore Roles & Squad Inquiries</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
