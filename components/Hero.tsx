
import React from 'react';
import { BoltIcon, RupeeIcon } from './Icons';

const Hero: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-dark to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
            <span className="inline-block bg-white/10 border border-white/20 text-sm font-semibold px-5 py-2 rounded-full mb-4">
              Your Trusted IT Partner
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Comprehensive IT Solutions from <span className="bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text font-extrabold">N4T</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-xl">
              Providing complete technology solutions for hardware, networking, CCTV surveillance, and IT support across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                Get Started
              </a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-dark transition-all duration-300">
                Our Services
              </a>
            </div>
            <div className="flex flex-wrap mt-10 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-xl mr-4">
                  <BoltIcon className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Fast Response</h5>
                  <p className="text-slate-400">24x7 emergency support</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-xl mr-4">
                  <RupeeIcon className="w-7 h-7" />
                </div>
                <div>
                  <h5 className="font-bold text-lg">Cost Effective</h5>
                  <p className="text-slate-400">Budget-friendly solutions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img src="https://www.nathansaputra.com/wp-content/uploads/2016/05/managed_it_service.png" alt="IT Solutions Illustration" className="w-full h-auto rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
