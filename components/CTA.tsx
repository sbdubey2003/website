import React from 'react';
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from './Icons';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl p-8 sm:p-14 bg-gradient-to-r from-blue-700 via-primary-700 to-indigo-800 text-white shadow-2xl overflow-hidden text-center">
          
          {/* Subtle decorative glowing spots */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1 rounded-full bg-white/15 text-blue-100 border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">
              Accelerate Your Enterprise IT
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
              Ready For Hassle-Free, Zero-Downtime IT?
            </h2>
            <p className="text-base sm:text-lg text-blue-100 mb-8 leading-relaxed">
              Schedule a comprehensive on-site IT health check or request an immediate quote for hardware, network cabling, CCTV surveillance, or AMC contracts.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl text-base font-bold text-primary-900 bg-white hover:bg-blue-50 shadow-xl transform hover:-translate-y-0.5 transition duration-300 flex items-center space-x-2"
              >
                <span>Request Free Site Audit</span>
                <ArrowRightIcon className="w-5 h-5 text-primary-600" />
              </a>

              <a 
                href="tel:+917988678921"
                className="px-7 py-4 rounded-xl text-base font-semibold text-white bg-blue-900/60 hover:bg-blue-900/80 border border-white/20 transition duration-300 flex items-center space-x-2"
              >
                <PhoneIcon className="w-4 h-4 text-blue-200" />
                <span>Call: +91 7988678921</span>
              </a>

              <a 
                href="https://wa.me/message/PTHIABDDRPO4E1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition duration-300 flex items-center space-x-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            <div className="mt-8 text-xs text-blue-200 flex justify-center items-center space-x-6 font-medium">
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
