import React, { useState, useEffect } from 'react';
import { 
  NetworkWiredIcon, 
  DesktopIcon, 
  CctvIcon, 
  ServerIcon, 
  ToolsIcon, 
  PhoneIcon,
  WhatsAppIcon
} from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const serviceItems = [
    {
      id: 'hardware-sales',
      title: 'IT Hardware Sales',
      desc: 'Desktops, Laptops, Workstations & Printers',
      icon: <DesktopIcon className="w-5 h-5 text-blue-600" />,
      badge: 'Genuine OEM'
    },
    {
      id: 'networking-solutions',
      title: 'Networking & Cabling',
      desc: 'Firewalls, Routers, Racks & Enterprise Wi-Fi',
      icon: <NetworkWiredIcon className="w-5 h-5 text-cyan-600" />,
      badge: 'High Speed'
    },
    {
      id: 'cctv-surveillance',
      title: 'CCTV Surveillance',
      desc: 'AI IP Cameras, NVR/DVR & Remote Monitoring',
      icon: <CctvIcon className="w-5 h-5 text-emerald-600" />,
      badge: '24/7 Security'
    },
    {
      id: 'it-support',
      title: 'On-Demand IT Support',
      desc: 'Hardware repair, OS, troubleshooting & SLA',
      icon: <ToolsIcon className="w-5 h-5 text-amber-600" />,
      badge: 'Fast SLA'
    },
    {
      id: 'amc-services',
      title: 'Enterprise AMC Support',
      desc: 'Comprehensive annual maintenance contracts',
      icon: <ServerIcon className="w-5 h-5 text-indigo-600" />,
      badge: 'Proactive'
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top emergency hotline bar (Compact Light Mode) */}
      <div className={`hidden md:block bg-slate-100/95 text-slate-600 text-[11px] py-1 px-4 border-b border-slate-200 transition-opacity duration-300 ${isScrolled ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-700 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
              24x7 Pan-India IT Support & Emergency Service
            </span>
            <span className="text-slate-300">|</span>
            <span className="text-slate-500 font-medium">Faridabad, Delhi NCR & Across India</span>
          </div>
          <div className="flex items-center space-x-5 font-medium">
            <a href="tel:+917988678921" className="flex items-center text-slate-700 hover:text-primary-600 transition">
              <PhoneIcon className="w-3 h-3 mr-1 text-primary-600" />
              <span>+91 7988678921</span>
            </a>
            <a href="https://wa.me/message/PTHIABDDRPO4E1" target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-600 hover:text-emerald-700 transition">
              <WhatsAppIcon className="w-3 h-3 mr-1" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-slate-200/90 py-1' : 'bg-white/90 backdrop-blur-md border-b border-slate-200/60 py-1.5'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className="flex items-center group py-0.5"
            >
              <img 
                src="/logo.jpeg" 
                alt="N4T - Network 4 Technologies" 
                className="w-36 sm:w-44 md:w-52 h-auto max-h-12 sm:max-h-13 md:max-h-14 object-contain transition-transform duration-200 group-hover:scale-105"
                onError={(e: any) => { e.currentTarget.src = '/logo.png'; }}
              />
            </a>

            {/* Desktop Navigation Links (Light Theme) */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-slate-100 transition"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsServicesMenuOpen(true)}
                onMouseLeave={() => setIsServicesMenuOpen(false)}
              >
                <button
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="flex items-center px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-slate-100 transition"
                >
                  <span>Services</span>
                  <svg 
                    className={`w-4 h-4 ml-1.5 text-slate-400 transform transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180 text-primary-600' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu (Clean White Shadow) */}
                <div className={`absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 mt-2 transition-all duration-200 ${isServicesMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1 mb-1">
                    Enterprise Capabilities
                  </div>
                  <div className="space-y-1">
                    {serviceItems.map(item => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          handleNavClick(e, item.id);
                          setIsServicesMenuOpen(false);
                        }}
                        className="flex items-start p-2.5 rounded-xl hover:bg-blue-50/70 transition group"
                      >
                        <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-blue-100 mr-3 transition">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-800 group-hover:text-primary-600 transition">
                              {item.title}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 px-3 flex justify-between items-center text-xs">
                    <span className="text-slate-500">Custom business setups?</span>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-primary-600 font-bold hover:underline">
                      Inquire now →
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#amc-calculator"
                onClick={(e) => handleNavClick(e, 'amc-calculator')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-slate-100 transition"
              >
                AMC Estimator
              </a>

              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, 'why-us')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-slate-100 transition"
              >
                Why N4T
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary-600 rounded-lg hover:bg-slate-100 transition"
              >
                Contact
              </a>
            </nav>

            {/* Right Quick Action Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-md shadow-blue-500/20 hover:shadow-lg transition duration-200"
              >
                <span>Get Instant Quote</span>
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200"
              aria-label="Toggle Navigation"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Drawer Menu (Light Mode) */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-xl">
              <nav className="flex flex-col space-y-1">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="px-4 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  Home
                </a>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex justify-between items-center px-4 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-100"
                  >
                    <span>Our Services</span>
                    <svg className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180 text-primary-600' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileServicesOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-slate-200 space-y-1 py-1">
                      {serviceItems.map(item => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => handleNavClick(e, item.id)}
                          className="block px-3 py-2 text-xs font-semibold text-slate-600 hover:text-primary-600 rounded-md hover:bg-slate-50"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <a
                  href="#amc-calculator"
                  onClick={(e) => handleNavClick(e, 'amc-calculator')}
                  className="px-4 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  AMC Estimator
                </a>

                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, 'why-us')}
                  className="px-4 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  Why Choose N4T
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="px-4 py-2.5 text-sm font-bold text-slate-800 rounded-lg hover:bg-slate-100"
                >
                  Contact & Support
                </a>

                <div className="pt-3 border-t border-slate-100">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="w-full text-center block bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-bold py-3 px-6 rounded-xl shadow-md"
                  >
                    Get Free Quote
                  </a>
                  <div className="flex justify-around items-center mt-3 text-xs text-slate-500">
                    <a href="tel:+917988678921" className="flex items-center text-primary-600 font-semibold">
                      <PhoneIcon className="w-3.5 h-3.5 mr-1" />
                      +91 7988678921
                    </a>
                    <a href="https://wa.me/message/PTHIABDDRPO4E1" target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-600 font-semibold">
                      <WhatsAppIcon className="w-3.5 h-3.5 mr-1" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
