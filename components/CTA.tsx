import React from 'react';
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#060913] text-white relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-950 via-[#0e172e] to-indigo-950 text-white shadow-2xl border border-blue-800/40 overflow-hidden text-center">
          
          {/* Subtle decorative glowing spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950/70 text-cyan-300 border border-cyan-800/80 text-xs font-mono font-bold uppercase tracking-wider mb-4">
              // ACCELERATE YOUR ENTERPRISE IT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
              Ready For Hassle-Free, Zero-Downtime IT?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-8 leading-relaxed">
              Schedule a comprehensive on-site IT health check or request an immediate quote for hardware, network cabling, CCTV surveillance, or AMC contracts.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group px-8 py-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition duration-300 flex items-center space-x-2.5 border border-blue-400/40 cursor-pointer"
              >
                <span>Request Free Site Audit</span>
                <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="tel:+917988678921"
                className="px-7 py-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 transition duration-300 flex items-center space-x-2 font-mono"
              >
                <PhoneIcon className="w-4 h-4 text-cyan-400" />
                <span>+91 7988678921</span>
              </a>

              <a 
                href="https://wa.me/message/PTHIABDDRPO4E1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-emerald-700/90 hover:bg-emerald-600 border border-emerald-500/40 shadow-lg shadow-emerald-950 transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="mt-8 text-xs text-slate-400 flex flex-wrap justify-center items-center gap-6 font-mono">
              <span>✓ No Obligation Quote</span>
              <span>✓ 2-Hour Rapid Response</span>
              <span>✓ 100% Data Confidentiality</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
