import React from 'react';

interface LogoProps {
  className?: string;
  isCompact?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", isCompact = false }) => {
  return (
    <div className={`flex items-center space-x-3 select-none group ${className}`}>
      {/* High-Tech Vector Emblem */}
      <div className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <svg 
          className="w-10 h-10 sm:w-11 sm:h-11" 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="n4t-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1d4ed8" />
              <stop offset="50%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
            <linearGradient id="n4t-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="n4t-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Outer Orbital Digital Ring 1 */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="42" 
            ry="20" 
            transform="rotate(-30 50 50)" 
            stroke="url(#n4t-grad-1)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            className="opacity-90"
          />

          {/* Outer Orbital Digital Ring 2 */}
          <ellipse 
            cx="50" 
            cy="50" 
            rx="42" 
            ry="20" 
            transform="rotate(35 50 50)" 
            stroke="url(#n4t-grad-2)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            className="opacity-80"
          />

          {/* Center Orbital Loop */}
          <circle 
            cx="50" 
            cy="50" 
            r="28" 
            stroke="url(#n4t-grad-1)" 
            strokeWidth="2.5" 
            strokeDasharray="4 3" 
            className="opacity-60"
          />

          {/* Glowing Network Nodes (Cyber Circuit Dots) */}
          <circle cx="20" cy="35" r="4.5" fill="#06b6d4" filter="drop-shadow(0 0 4px #06b6d4)" />
          <circle cx="80" cy="65" r="4.5" fill="#2563eb" filter="drop-shadow(0 0 4px #2563eb)" />
          <circle cx="76" cy="30" r="4" fill="#38bdf8" />
          <circle cx="24" cy="70" r="4" fill="#1d4ed8" />
          <circle cx="50" cy="14" r="3.5" fill="#06b6d4" />

          {/* Bold Futuristic Stylized 'N' in Center */}
          <path 
            d="M38 65 L38 35 L62 65 L62 35" 
            stroke="#0f172a" 
            strokeWidth="6.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M38 65 L38 35 L62 65 L62 35" 
            stroke="url(#n4t-grad-1)" 
            strokeWidth="4" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-slate-900 font-display leading-none">
            N
          </span>
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500 font-display leading-none">
            4
          </span>
          <span className="text-2xl sm:text-[26px] font-black tracking-tight text-slate-900 font-display leading-none">
            T
          </span>
          {!isCompact && (
            <span className="ml-2 px-1.5 py-0.5 text-[9px] font-extrabold uppercase tracking-widest rounded bg-blue-50 text-primary-700 border border-blue-200">
              IT
            </span>
          )}
        </div>
        <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.2em] uppercase text-slate-500 leading-tight mt-0.5">
          NETWORK 4 TECHNOLOGIES
        </span>
      </div>
    </div>
  );
};

export default Logo;
