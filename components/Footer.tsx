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
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-slate-200 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4">
            <div className="mb-5">
              <img 
                src="/N4T.png" 
                alt="N4T - Network 4 Technologies" 
                className="w-48 sm:w-56 h-auto max-h-16 md:max-h-20 object-contain"
                onError={(e: any) => { e.target.style.display = 'none'; }}
              />
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Your dependable technology partner for mission-critical IT infrastructure, enterprise hardware sales, fiber networking, high-definition CCTV security, and comprehensive AMC contracts nationwide.
            </p>

            <div className="flex items-center space-x-3">
              <a 
                href="https://www.facebook.com/share/18TkvtUrdH/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-blue-600 border border-slate-200 text-slate-600 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://youtube.com/@n4t_sbdubey?si=SdEoRMF7ooqNMeEt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-rose-600 border border-slate-200 text-slate-600 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/network4technologies?stkn=MWQ4ajNjMGZoZWMzZw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 border border-slate-200 text-slate-600 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/message/PTHIABDDRPO4E1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-emerald-50 hover:bg-emerald-600 border border-emerald-200 text-emerald-600 hover:text-white flex items-center justify-center transition duration-200 shadow-sm"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Services (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5 font-display">
              Enterprise Solutions
            </h5>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#hardware-sales" onClick={(e) => handleNavClick(e, 'hardware-sales')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> Commercial Desktops & Laptops
                </a>
              </li>
              <li>
                <a href="#networking-solutions" onClick={(e) => handleNavClick(e, 'networking-solutions')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> LAN, WAN & Fiber Optic Cabling
                </a>
              </li>
              <li>
                <a href="#cctv-surveillance" onClick={(e) => handleNavClick(e, 'cctv-surveillance')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> CCTV Security & Biometrics
                </a>
              </li>
              <li>
                <a href="#amc-services" onClick={(e) => handleNavClick(e, 'amc-services')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> Comprehensive IT AMC Contracts
                </a>
              </li>
              <li>
                <a href="#it-support" onClick={(e) => handleNavClick(e, 'it-support')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> 24x7 On-Site Emergency Support
                </a>
              </li>
              <li>
                <a href="#hardware-sales" onClick={(e) => handleNavClick(e, 'hardware-sales')} className="hover:text-primary-600 transition flex items-center">
                  <span className="text-primary-600 mr-2 font-bold">›</span> OEM Genuine Spare Parts
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2">
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5 font-display">
              Company
            </h5>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="hover:text-primary-600 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-primary-600 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#amc-calculator" onClick={(e) => handleNavClick(e, 'amc-calculator')} className="hover:text-primary-600 transition">
                  AMC Cost Calculator
                </a>
              </li>
              <li>
                <a href="#why-us" onClick={(e) => handleNavClick(e, 'why-us')} className="hover:text-primary-600 transition">
                  Why Choose N4T
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-primary-600 transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Summary (3 cols) */}
          <div className="lg:col-span-3">
            <h5 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-5 font-display">
              Support Desk
            </h5>
            <div className="space-y-3.5 text-sm text-slate-600">
              <div className="flex items-start">
                <MapMarkerIcon className="w-4 h-4 text-primary-600 mr-2.5 mt-0.5 flex-shrink-0" />
                <span>Faridabad, Haryana - 121003, India</span>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="w-4 h-4 text-primary-600 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+917988678921" className="hover:text-primary-600 block font-mono font-medium">
                    +91 7988678921
                  </a>
                  <a href="tel:+918901996668" className="hover:text-primary-600 block font-mono font-medium">
                    +91 8901996668
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon className="w-4 h-4 text-primary-600 mr-2.5 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="mailto:sbdubey@n4t.in" className="hover:text-primary-600 block font-medium">
                    sbdubey@n4t.in
                  </a>
                  <a href="mailto:support@n4t.in" className="hover:text-primary-600 block font-medium">
                    support@n4t.in
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <ClockIcon className="w-4 h-4 text-emerald-600 mr-2.5 mt-0.5 flex-shrink-0" />
                <span className="text-emerald-700 font-semibold">24x7 PAN India IT Support</span>
              </div>
            </div>
          </div>

        </div>

        <hr className="border-slate-200 my-8" />

        {/* Bottom Sub-footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-slate-800 font-bold">N4T - NETWORK 4 TECHNOLOGIES</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-slate-500 font-medium">
            <a href="#privacy" className="hover:text-primary-600 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-primary-600 transition">Terms of Service</a>
            <a href="#sitemap" className="hover:text-primary-600 transition">SLA Guarantee</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
