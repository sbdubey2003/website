import React from 'react';
import { 
  UserTieIcon, 
  ShieldIcon, 
  BoltIcon, 
  RupeeIcon, 
  CheckCircleIcon
} from './Icons';

const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Certified OEM Engineers',
      desc: 'Our technical team holds enterprise certifications across Microsoft, Cisco, Linux, and top surveillance OEMs with 15+ years of production experience.',
      icon: <UserTieIcon className="w-6 h-6 text-cyan-400" />,
      badge: 'Certified Experts'
    },
    {
      title: 'Guaranteed Emergency SLA',
      desc: 'Rapid on-site arrival within 2-4 hours for critical server down, fiber cuts, or CCTV blackouts to ensure business continuity.',
      icon: <BoltIcon className="w-6 h-6 text-amber-400" />,
      badge: '< 2 Hr Response'
    },
    {
      title: '100% Genuine OEM Spares',
      desc: 'Zero tolerance for counterfeit components. All replacement motherboards, power supplies, fiber patch cords, and hard drives carry OEM warranties.',
      icon: <ShieldIcon className="w-6 h-6 text-emerald-400" />,
      badge: 'OEM Genuine'
    },
    {
      title: 'Transparent Pricing & ROI',
      desc: 'Predictable maintenance contracts and competitive wholesale hardware pricing with zero hidden surcharges or surprise dispatch fees.',
      icon: <RupeeIcon className="w-6 h-6 text-indigo-400" />,
      badge: 'Zero Hidden Cost'
    }
  ];

  const comparisons = [
    {
      feature: 'Emergency Response Time',
      typical: '24 to 48 hours (or days)',
      n4t: '< 2-4 Hours Guaranteed SLA',
      highlight: true
    },
    {
      feature: 'Engineer Qualifications',
      typical: 'Unverified local freelancers',
      n4t: 'OEM-Certified Full-Time Engineers',
      highlight: false
    },
    {
      feature: 'Replacement Parts Quality',
      typical: 'Used / grey market components',
      n4t: '100% Genuine OEM Spares with Warranty',
      highlight: true
    },
    {
      feature: 'Maintenance Model',
      typical: 'Reactive only after complete crash',
      n4t: 'Monthly Scheduled Preventive Health Audits',
      highlight: false
    },
    {
      feature: 'Helpdesk & Remote Care',
      typical: 'Phone call goes to voicemail',
      n4t: '24x7 Dedicated NOC & Instant Screen Share',
      highlight: true
    }
  ];

  const brandPartners = [
    'Dell Technologies', 'HP Enterprise', 'Lenovo Think', 'Cisco Systems', 
    'Hikvision', 'CP Plus', 'D-Link Networks', 'Schneider APC', 
    'Fortinet', 'Sophos XGS', 'Western Digital', 'Microsoft 365'
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-[#080d1a] text-white relative tech-grid-dark border-t border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/70 text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-4">
            // 03. PROVEN INDUSTRY EXCELLENCE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Why Businesses Across India Trust N4T
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We bridge the gap between complex hardware technology and reliable day-to-day operations with enterprise precision.
          </p>
        </div>

        {/* 4 Pillars Grid (Dark Glass Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-[#0c1222]/85 border border-slate-800/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-slate-900 border border-slate-700/80 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 transition duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2.5 group-hover:text-cyan-400 transition-colors font-display">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center text-xs text-emerald-400 font-semibold font-mono">
                <CheckCircleIcon className="w-4 h-4 mr-1.5 flex-shrink-0 text-emerald-400" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* SLA Benchmark Matrix (High-Tech Enterprise Comparison) */}
        <div className="max-w-4xl mx-auto mb-16 rounded-3xl bg-[#0c1222]/90 border border-slate-800 overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="p-5 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                // ENTERPRISE BENCHMARK
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Traditional IT Vendor vs. N4T Partner Model
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1 rounded-full w-fit">
              99.98% Uptime Track Record
            </span>
          </div>

          <div className="divide-y divide-slate-800/80">
            {comparisons.map((row, rIdx) => (
              <div key={rIdx} className="grid grid-cols-1 md:grid-cols-12 p-4 text-xs items-center gap-2 hover:bg-slate-800/30 transition">
                <div className="md:col-span-4 font-bold text-slate-200">
                  {row.feature}
                </div>
                <div className="md:col-span-4 text-slate-500 line-through decoration-rose-500/50 flex items-center">
                  <span className="text-rose-400 mr-2 font-mono">✕</span>
                  {row.typical}
                </div>
                <div className="md:col-span-4 text-cyan-300 font-bold flex items-center">
                  <span className="text-emerald-400 mr-2 font-mono">✓</span>
                  {row.n4t}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Ecosystem Ticker (Dark Card) */}
        <div className="rounded-3xl p-8 bg-[#0c1222]/90 border border-slate-800 shadow-xl text-center backdrop-blur-xl">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">
            // AUTHORIZED HARDWARE & ENTERPRISE SOLUTION PARTNERS
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-4">
            {brandPartners.map((brand, bIndex) => (
              <div 
                key={bIndex} 
                className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800/90 text-xs font-bold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition font-mono shadow-sm"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
