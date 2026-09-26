import React from 'react';
import { 
  FacebookIcon, 
  YoutubeIcon, 
  InstagramIcon, 
  MapMarkerIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  WhatsAppIcon
} from './Icons';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070e] text-slate-400 pt-20 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5 inline-block p-1.5 rounded-xl bg-white/95 border border-white/20 shadow-md">
              <img 
                src="/logo.jpeg" 
                alt="N4T - Network 4 Technologies" 
                className="w-40 sm:w-48 h-auto max-h-12 object-contain"
                onError={(e: any) => { e.currentTarget.src = '/logo.png'; }}
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
              Your dependable technology partner for mission-critical IT infrastructure, enterprise hardware sales, fiber networking, high-definition CCTV security, and comprehensive AMC contracts nationwide.
            </p>

            <div className="flex items-center space-x-3">
              <a 
                href="https://www.facebook.com/share/18TkvtUrdH/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-blue-600 border border-slate-800 hover:border-blue-500 text-slate-400 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@n4t_sbdubey?si=SdEoRMF7ooqNMeEt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-rose-600 border border-slate-800 hover:border-rose-500 text-slate-400 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/network4technologies?stkn=MWQ4ajNjMGZoZWMzZw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/message/PTHIABDDRPO4E1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-xl bg-slate-900 hover:bg-emerald-600 border border-slate-800 hover:border-emerald-500 text-slate-400 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Services (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-5 font-display">
              // ENTERPRISE SOLUTIONS
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#hardware-sales" onClick={(e) => handleNavClick(e, 'hardware-sales')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> Commercial Desktops & Laptops
                </a>
              </li>
              <li>
                <a href="#networking-solutions" onClick={(e) => handleNavClick(e, 'networking-solutions')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> LAN, WAN & Fiber Optic Cabling
                </a>
              </li>
              <li>
                <a href="#cctv-surveillance" onClick={(e) => handleNavClick(e, 'cctv-surveillance')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> CCTV Security & Biometrics
                </a>
              </li>
              <li>
                <a href="#amc-services" onClick={(e) => handleNavClick(e, 'amc-services')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> Comprehensive IT AMC Contracts
                </a>
              </li>
              <li>
                <a href="#it-support" onClick={(e) => handleNavClick(e, 'it-support')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> 24x7 On-Site Emergency Support
                </a>
              </li>
              <li>
                <a href="#hardware-sales" onClick={(e) => handleNavClick(e, 'hardware-sales')} className="hover:text-cyan-400 transition flex items-center">
                  <span className="text-cyan-500 mr-2 font-mono">›</span> OEM Genuine Spare Parts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-5 font-display">
              // QUICK LINKS
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-cyan-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-cyan-400 transition">
                  Services Directory
                </a>
              </li>
              <li>
                <a href="#amc-calculator" onClick={(e) => handleNavClick(e, 'amc-calculator')} className="hover:text-cyan-400 transition">
                  AMC Cost Estimator
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="hover:text-cyan-400 transition">
                  Why Choose N4T
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-cyan-400 transition">
                  Commercial Quotes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-5 font-display">
              // 24X7 SUPPORT DESK
            </h5>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start">
                <MapMarkerIcon className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <span>Faridabad, Haryana - 121003, India</span>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+917988678921" className="hover:text-cyan-400 block font-mono font-medium">
                    +91 7988678921
                  </a>
                  <a href="tel:+918901996668" className="hover:text-cyan-400 block font-mono font-medium">
                    +91 8901996668
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="w-4 h-4 text-cyan-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:sbdubey@n4t.in" className="hover:text-cyan-400 block font-mono">
                    sbdubey@n4t.in
                  </a>
                  <a href="mailto:support@n4t.in" className="hover:text-cyan-400 block font-mono">
                    support@n4t.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-4 h-4 text-emerald-400 mr-2.5 mt-0.5 flex-shrink-0" />
                <span className="text-emerald-400 font-mono font-semibold">24x7 PAN India IT Support</span>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-slate-800 my-8" />

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0 font-mono">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-300 font-bold">N4T - NETWORK 4 TECHNOLOGIES</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-400">
            <a href="#privacy" className="hover:text-cyan-400 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-cyan-400 transition">Terms of Service</a>
            <a href="#sitemap" className="hover:text-cyan-400 transition">SLA Guarantee</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
