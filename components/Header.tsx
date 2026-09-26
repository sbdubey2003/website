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
      setIsScrolled(window.scrollY > 25);
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
      icon: <DesktopIcon className="w-4 h-4 text-blue-400" />,
      badge: 'OEM Direct'
    },
    {
      id: 'networking-solutions',
      title: 'Networking & Cabling',
      desc: 'Firewalls, Routers, Racks & Enterprise Wi-Fi',
      icon: <NetworkWiredIcon className="w-4 h-4 text-cyan-400" />,
      badge: '10 Gbps'
    },
    {
      id: 'cctv-surveillance',
      title: 'CCTV Surveillance',
      desc: 'AI IP Cameras, NVR/DVR & Remote Monitoring',
      icon: <CctvIcon className="w-4 h-4 text-emerald-400" />,
      badge: '24/7 AI'
    },
    {
      id: 'it-support',
      title: 'On-Demand IT Support',
      desc: 'Hardware repair, OS, troubleshooting & SLA',
      icon: <ToolsIcon className="w-4 h-4 text-amber-400" />,
      badge: '< 2 Hr SLA'
    },
    {
      id: 'amc-services',
      title: 'Enterprise AMC Support',
      desc: 'Comprehensive annual maintenance contracts',
      icon: <ServerIcon className="w-4 h-4 text-indigo-400" />,
      badge: 'Zero Downtime'
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top emergency hotline bar (Dark Tech) */}
      <div className={`hidden md:block bg-[#080d1a] text-slate-300 text-[11px] py-1.5 px-4 border-b border-slate-800/80 transition-all duration-300 ${isScrolled ? 'opacity-0 -translate-y-full h-0 overflow-hidden py-0' : 'opacity-100'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <span className="flex items-center text-emerald-400 font-semibold tracking-wide">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              24x7 Pan-India IT Support & Emergency Service Desk
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400 font-mono text-[10px]">ISO 9001:2015 Process Standards • SLA Guaranteed</span>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href="tel:+917988678921" className="flex items-center text-slate-300 hover:text-cyan-400 transition">
              <PhoneIcon className="w-3 h-3 mr-1.5 text-cyan-400" />
              <span className="font-mono">+91 7988678921</span>
            </a>
            <a href="https://wa.me/message/PTHIABDDRPO4E1" target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-400 hover:text-emerald-300 transition">
              <WhatsAppIcon className="w-3 h-3 mr-1.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#060913]/95 backdrop-blur-2xl shadow-2xl shadow-black/60 border-b border-slate-800/90 py-2' : 'bg-[#060913]/80 backdrop-blur-md border-b border-slate-800/50 py-3'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className="flex items-center group py-0.5"
            >
              <div className="p-1 rounded-xl bg-white/95 border border-white/20 shadow-lg shadow-blue-500/10 transition-transform duration-200 group-hover:scale-105">
                <img 
                  src="/logo.jpeg" 
                  alt="N4T - Network 4 Technologies" 
                  className="w-32 sm:w-40 md:w-44 h-auto max-h-10 sm:max-h-11 object-contain"
                  onError={(e: any) => { e.currentTarget.src = '/logo.png'; }}
                />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
                className="px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition"
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
                  className="flex items-center px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition"
                >
                  <span>Solutions</span>
                  <svg 
                    className={`w-3.5 h-3.5 ml-1 text-slate-400 transform transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180 text-cyan-400' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu (Glassmorphism Dark) */}
                <div className={`absolute top-full left-0 w-88 bg-[#0b1120]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-700/70 p-3 mt-2 transition-all duration-200 ${isServicesMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none'}`}>
                  <div className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 mb-1 flex items-center justify-between">
                    <span>// Enterprise Capabilities</span>
                    <span className="text-[9px] text-slate-500 font-mono">PAN-INDIA</span>
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
                        className="flex items-start p-2.5 rounded-xl hover:bg-slate-800/80 transition group border border-transparent hover:border-slate-700/60"
                      >
                        <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 group-hover:bg-cyan-950/40 mr-3 transition">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition">
                              {item.title}
                            </span>
                            <span className="text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-800 px-3 flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Custom business requirement?</span>
                    <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-cyan-400 font-bold hover:underline">
                      Consult Architect →
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="#amc-calculator"
                onClick={(e) => handleNavClick(e, 'amc-calculator')}
                className="px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition"
              >
                AMC Calculator
              </a>

              <a
                href="#why-us"
                onClick={(e) => handleNavClick(e, 'why-us')}
                className="px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition"
              >
                Why N4T
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="px-3.5 py-2 text-xs font-bold text-slate-300 hover:text-white rounded-xl hover:bg-slate-800/60 transition"
              >
                Contact
              </a>
            </nav>

            {/* Right Quick Action Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-n4t-chatbot'))}
                className="inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/60 shadow-sm transition hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>🤖 AI Assistant</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex items-center justify-center px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-200 border border-blue-400/30 transform hover:-translate-y-0.5"
              >
                <span>Request Free Audit</span>
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white bg-slate-900 border border-slate-800"
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

          {/* Mobile Drawer Menu (Dark Theme) */}
          {isMenuOpen && (
            <div className="lg:hidden mt-3 p-4 bg-[#0a0f1d] border border-slate-800 rounded-2xl shadow-2xl">
              <nav className="flex flex-col space-y-1">
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="px-4 py-2.5 text-xs font-bold text-slate-200 rounded-lg hover:bg-slate-800"
                >
                  Home
                </a>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="w-full flex justify-between items-center px-4 py-2.5 text-xs font-bold text-slate-200 rounded-lg hover:bg-slate-800"
                  >
                    <span>Enterprise Solutions</span>
                    <svg className={`w-4 h-4 transform transition-transform ${isMobileServicesOpen ? 'rotate-180 text-cyan-400' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {isMobileServicesOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-slate-800 space-y-1 py-1">
                      {serviceItems.map(item => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          onClick={(e) => handleNavClick(e, item.id)}
                          className="block px-3 py-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 rounded-md hover:bg-slate-900"
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
                  className="px-4 py-2.5 text-xs font-bold text-slate-200 rounded-lg hover:bg-slate-800"
                >
                  AMC Estimator
                </a>

                <a
                  href="#why-us"
                  onClick={(e) => handleNavClick(e, 'why-us')}
                  className="px-4 py-2.5 text-xs font-bold text-slate-200 rounded-lg hover:bg-slate-800"
                >
                  Why Choose N4T
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="px-4 py-2.5 text-xs font-bold text-slate-200 rounded-lg hover:bg-slate-800"
                >
                  Contact & Support
                </a>

                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsMenuOpen(false);
                      window.dispatchEvent(new CustomEvent('open-n4t-chatbot'));
                    }}
                    className="w-full flex items-center justify-center space-x-2 bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 font-bold py-2.5 px-4 rounded-xl shadow-sm text-xs"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>🤖 Open N4T AI IT Assistant</span>
                  </button>

                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className="w-full text-center block bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3 px-6 rounded-xl shadow-lg text-xs"
                  >
                    Request Free Site Audit
                  </a>
                  <div className="flex justify-around items-center mt-3 text-xs text-slate-400">
                    <a href="tel:+917988678921" className="flex items-center text-cyan-400 font-semibold font-mono">
                      <PhoneIcon className="w-3.5 h-3.5 mr-1" />
                      +91 7988678921
                    </a>
                    <a href="https://wa.me/message/PTHIABDDRPO4E1" target="_blank" rel="noopener noreferrer" className="flex items-center text-emerald-400 font-semibold">
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
