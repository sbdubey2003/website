
import React, { useState, useEffect } from 'react';
import { NetworkWiredIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  const navLinks = [
    { href: '#home', label: 'Home' },
    { 
      href: '#services',
      label: 'Services',
      sublinks: [
        { href: '#hardware-sales', label: 'Hardware Sales' },
        { href: '#networking-solutions', label: 'Networking Solutions' },
        { href: '#cctv-surveillance', label: 'CCTV Surveillance' },
        { href: '#it-support', label: 'IT Support' },
        { href: '#amc-services', label: 'AMC Services' },
      ]
    },
    { href: '#why-us', label: 'Why Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg py-3' : 'bg-dark/80 backdrop-blur-sm py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center text-white text-lg font-semibold">
            <NetworkWiredIcon className="w-6 h-6 mr-2" />
            <span><span className="font-bold">N4T</span> - Network 4 Technologies</span>
          </a>
          
          <nav className="hidden lg:flex items-center space-x-2">
            {navLinks.map(link => (
              link.sublinks ? (
                <div 
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsServicesMenuOpen(true)}
                  onMouseLeave={() => setIsServicesMenuOpen(false)}
                >
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full flex items-center cursor-pointer">
                    {link.label}
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isServicesMenuOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
                  <div className={`absolute top-full left-0 mt-2 w-56 rounded-md shadow-lg bg-dark/95 backdrop-blur-sm ring-1 ring-black ring-opacity-5 transition-opacity duration-200 ${isServicesMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {link.sublinks.map(sublink => (
                        <a
                          key={sublink.href}
                          href={sublink.href}
                          onClick={(e) => {
                            handleNavClick(e, sublink.href.substring(1));
                            setIsServicesMenuOpen(false);
                          }}
                          className="block px-4 py-2 text-sm text-white hover:bg-white/10"
                          role="menuitem"
                        >
                          {sublink.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-white px-3 py-2 rounded-md hover:bg-white/10 transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gradient-to-r after:from-primary after:to-secondary after:transition-all after:duration-300 hover:after:w-full">{link.label}</a>
              )
            ))}
             <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="ml-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-5 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">Get Quote</a>
          </nav>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <nav className="flex flex-col items-center pt-4 pb-2 space-y-1">
           {navLinks.map(link => (
              link.sublinks ? (
                <div key={link.label} className="w-full text-center">
                  <button onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)} className="text-white py-2 w-full text-center hover:bg-white/10 rounded-md transition-colors flex justify-center items-center">
                      {link.label}
                      <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMobileServicesOpen ? 'max-h-96' : 'max-h-0'}`}>
                      <div className="flex flex-col items-center bg-white/5 pt-1 pb-2 mt-1 mx-4 rounded-md">
                          {link.sublinks.map(sublink => (
                              <a
                                  key={sublink.href}
                                  href={sublink.href}
                                  onClick={(e) => handleNavClick(e, sublink.href.substring(1))}
                                  className="text-slate-200 py-2 w-full text-center hover:bg-white/10 rounded-md transition-colors"
                              >
                                  {sublink.label}
                              </a>
                          ))}
                      </div>
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link.href.substring(1))} className="text-white py-2 w-full text-center hover:bg-white/10 rounded-md transition-colors">{link.label}</a>
              )
            ))}
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="mt-2 w-4/5 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 px-5 rounded-full hover:shadow-lg transition-all duration-300">Get Quote</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
