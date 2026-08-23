import React, { useState } from 'react';
import { 
  Linkedin, 
  Activity,
  ArrowRight
} from 'lucide-react';
import { TEAM_MEMBERS } from '../data/siteData';
import { useTheme } from '../context/ThemeContext';

interface TeamSectionProps {
  onOpenContact: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenContact }) => {
  const { isDay } = useTheme();
  const [departmentFilter, setDepartmentFilter] = useState<'all' | 'leadership' | 'tech' | 'creative' | 'marketing' | 'animation'>('all');

  const filteredTeam = departmentFilter === 'all'
    ? TEAM_MEMBERS
    : TEAM_MEMBERS.filter(m => m.department === departmentFilter);

  return (
    <section 
      id="team" 
      className={`py-20 sm:py-24 md:py-28 relative border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-slate-50 text-slate-900 border-slate-200/80' : 'bg-[#071A36] text-white border-white/10'
      }`}
    >
      {/* Dynamic Background Glow */}
      <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none ${
        isDay ? 'bg-blue-200/20' : 'bg-[#0878FF]/10'
      }`} />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-3 font-mono ${
              isDay ? 'bg-blue-50 border border-blue-200 text-[#0878FF]' : 'bg-blue-500/15 border border-blue-500/30 text-[#00B8E6]'
            }`}>
              <Activity className="w-3.5 h-3.5" />
              <span>LEADERSHIP & SQUAD PRINCIPALS</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Space_Grotesk'] leading-tight mb-4 ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              The People Behind Zentro
            </h2>
            <p className={`text-base sm:text-lg leading-relaxed font-normal ${
              isDay ? 'text-slate-600' : 'text-blue-100/85'
            }`}>
              An interdisciplinary squad of world-class designers, systems engineers, motion artists, and growth directors.
            </p>
          </div>

          {/* Department Filter Pills */}
          <div className={`flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl border self-start md:self-auto shrink-0 ${
            isDay ? 'bg-slate-100 border-slate-200' : 'bg-[#0B2854] border-white/10'
          }`}>
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

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className={`rounded-2xl overflow-hidden transition-all duration-300 shadow-xl group flex flex-col justify-between backdrop-blur-xs hover:-translate-y-1 ${
                isDay
                  ? 'bg-white border border-slate-200/90 hover:border-blue-400 hover:shadow-blue-500/10'
                  : 'bg-[#0B2854]/40 hover:bg-[#0B2854]/85 border border-white/10 hover:border-[#00B8E6]/50'
              }`}
            >
              <div className="p-6 sm:p-7">
                {/* Photo & Role */}
                <div className="flex items-start gap-4 mb-5">
                  <div className="relative shrink-0">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-16 h-16 rounded-2xl object-cover border-2 transition-colors shadow-md ${
                        isDay 
                          ? 'border-slate-200 group-hover:border-[#0878FF]' 
                          : 'border-white/10 group-hover:border-[#00B8E6]'
                      }`}
                    />
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 flex items-center justify-center ${
                      isDay ? 'border-white' : 'border-[#071A36]'
                    }`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className={`text-lg font-bold font-['Space_Grotesk'] truncate transition-colors ${
                        isDay ? 'text-slate-900 group-hover:text-[#0878FF]' : 'text-white group-hover:text-[#00B8E6]'
                      }`}>
                        {member.name}
                      </h3>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`transition-colors p-1 ${
                            isDay ? 'text-slate-400 hover:text-[#0878FF]' : 'text-slate-400 hover:text-[#00B8E6]'
                          }`}
                          aria-label={`${member.name} LinkedIn Profile`}
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    <p className={`text-xs font-semibold mt-0.5 ${
                      isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'
                    }`}>
                      {member.role}
                    </p>
                    <span className={`text-[11px] font-mono block mt-0.5 ${
                      isDay ? 'text-slate-500' : 'text-blue-200/60'
                    }`}>
                      {member.departmentLabel}
                    </span>
                  </div>
                </div>

                {/* Bio */}
                <p className={`text-xs sm:text-sm leading-relaxed mb-5 font-normal ${
                  isDay ? 'text-slate-600' : 'text-blue-100/80'
                }`}>
                  {member.bio}
                </p>

                {/* Specialization Tags */}
                <div className={`flex flex-wrap gap-1.5 pt-4 border-t ${
                  isDay ? 'border-slate-100' : 'border-white/10'
                }`}>
                  {member.specialization.map((spec, idx) => (
                    <span 
                      key={idx} 
                      className={`px-2.5 py-1 rounded-md text-[11px] font-mono ${
                        isDay 
                          ? 'bg-slate-100 border border-slate-200/80 text-slate-700' 
                          : 'bg-white/5 border border-white/10 text-slate-300'
                      }`}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className={`px-6 py-3 border-t flex items-center justify-between text-xs font-semibold font-mono ${
                isDay ? 'bg-slate-50 border-slate-100 text-slate-600' : 'bg-[#071A36]/80 border-white/10 text-slate-300'
              }`}>
                <span className={isDay ? 'text-slate-500' : 'text-slate-400'}>Squad Access</span>
                <span className={isDay ? 'text-[#0878FF]' : 'text-[#00B8E6]'}>Active Principal Lead</span>
              </div>
            </div>
          ))}
        </div>

        {/* Squad collaboration callout */}
        <div className={`mt-12 p-6 sm:p-8 rounded-2xl sm:rounded-3xl text-center max-w-2xl mx-auto space-y-3 shadow-xl backdrop-blur-xs border transition-colors ${
          isDay
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#0B2854]/60 border-white/10 text-white'
        }`}>
          <h4 className={`text-lg sm:text-xl font-bold font-['Space_Grotesk'] ${
            isDay ? 'text-slate-900' : 'text-white'
          }`}>
            Want to work with our creative technology squad?
          </h4>
          <p className={`text-xs sm:text-sm ${
            isDay ? 'text-slate-600' : 'text-blue-100/80'
          }`}>
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
