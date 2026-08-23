import React from 'react';

interface LogoProps {
  variant?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', className = '' }) => {
  const isLight = variant === 'light';
  
  const sizeClasses = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px] tracking-[0.24em]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px] tracking-[0.26em]' },
    lg: { icon: 'w-11 h-11', text: 'text-2xl', sub: 'text-[11px] tracking-[0.28em]' },
  }[size];

  return (
    <a href="#" className={`flex items-center gap-3 group select-none ${className}`} id="zentro-logo-brand">
      {/* Dynamic Geometric 'Z' Mark */}
      <div className={`relative ${sizeClasses.icon} flex items-center justify-center rounded-xl overflow-hidden shadow-sm transition-transform duration-300 group-hover:scale-105 ${
        isLight ? 'bg-gradient-to-br from-white/15 to-white/5 border border-white/20' : 'bg-gradient-to-br from-[#071A36] to-[#0B2854] border border-[#0878FF]/30'
      }`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5">
          {/* Top Bar of Z */}
          <path d="M8 11H32L28 17H14L8 11Z" fill="#00B8E6" />
          {/* Diagonal Stem with Glow */}
          <path d="M28 17L14 29H8L22 17H28Z" fill="#0878FF" />
          {/* Bottom Bar of Z */}
          <path d="M14 29H32L26 35H8L14 29Z" fill={isLight ? '#FFFFFF' : '#0B2854'} />
          {/* Signal Pulse Dot */}
          <circle cx="31" cy="11" r="2.5" fill="#00B8E6" className="animate-pulse" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold font-['Space_Grotesk'] ${sizeClasses.text} tracking-tight transition-colors ${
          isLight ? 'text-white' : 'text-[#071A36] group-hover:text-[#0878FF]'
        }`}>
          ZENTRO
        </span>
        <span className={`font-semibold uppercase ${sizeClasses.sub} mt-0.5 ${
          isLight ? 'text-blue-200/80' : 'text-[#64748B]'
        }`}>
          COMMUNICATIONS
        </span>
      </div>
    </a>
  );
};
