import React from 'react';
import { 
  UserTieIcon, 
  ShieldIcon, 
  BoltIcon, 
  RupeeIcon, 
  CheckCircleIcon,
  StarIcon
} from './Icons';

const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Certified OEM Engineers',
      desc: 'Our technical team holds certifications across Microsoft, Cisco, Linux, and major CCTV manufacturers with 15+ years hands-on field experience.',
      icon: <UserTieIcon className="w-8 h-8 text-blue-600" />,
      badge: 'Certified Experts'
    },
    {
      title: 'Guaranteed Emergency SLA',
      desc: 'Rapid on-site arrival within 2-4 hours for critical server down, network failure, or CCTV blackouts to protect your business continuity.',
      icon: <BoltIcon className="w-8 h-8 text-amber-600" />,
      badge: '< 2 Hr Response'
    },
    {
      title: '100% Genuine OEM Spares',
      desc: 'We never compromise on component quality. All replacement parts, optical fiber, cables, and hard drives are authentic, covered by manufacturer warranty.',
      icon: <ShieldIcon className="w-8 h-8 text-emerald-600" />,
      badge: 'OEM Genuine'
    },
    {
      title: 'Cost-Effective ROI',
      desc: 'Budget-friendly maintenance contracts and competitive hardware wholesale pricing with zero hidden charges or surprise callout fees.',
      icon: <RupeeIcon className="w-8 h-8 text-indigo-600" />,
      badge: 'Transparent'
    }
  ];

  const brandPartners = [
    'Dell Technologies', 'HP Enterprise', 'Lenovo Think', 'Cisco Systems', 
    'Hikvision', 'CP Plus', 'D-Link Networks', 'Schneider APC', 
    'Microsoft', 'Intel', 'Western Digital', 'Seagate'
  ];

  return (
    <section id="why-us" className="py-24 md:py-32 bg-slate-50 text-slate-900 relative tech-grid-light">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 uppercase tracking-widest mb-4">
            Proven Industry Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
            Why Businesses Across India Trust N4T
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We bridge the gap between complex hardware technology and reliable day-to-day operations with enterprise precision.
          </p>
        </div>

        {/* 4 Pillars Grid (Crisp White Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 group-hover:bg-blue-50 transition duration-300">
                    {pillar.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors font-display">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs text-emerald-700 font-semibold">
                <CheckCircleIcon className="w-4 h-4 mr-1.5 flex-shrink-0 text-emerald-600" />
                <span>Verified Quality Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Ecosystem Ticker (Light Card) */}
        <div className="rounded-3xl p-8 bg-white border border-slate-200 shadow-md text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Authorized Hardware & Enterprise Solution Partners
          </div>
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-6">
            {brandPartners.map((brand, bIndex) => (
              <div 
                key={bIndex} 
                className="px-4 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-slate-700 hover:text-primary-600 hover:border-blue-300 transition"
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
