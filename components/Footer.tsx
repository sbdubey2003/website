
import React from 'react';
import { FacebookIcon, TwitterIcon, YoutubeIcon, InstagramIcon, MapMarkerIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gradient-to-tr from-dark to-slate-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* About N4T */}
                    <div className="lg:col-span-1">
                         <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-600 text-transparent bg-clip-text">N4T - NETWORK 4 TECHNOLOGIES</h4>
                        <p className="text-slate-400 mb-4">Your trusted partner for innovative IT solutions and services. We're committed to helping businesses thrive through technology with nationwide support.</p>
                        <div className="flex space-x-2">
                           <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"><FacebookIcon className="w-5 h-5" /></a>
                           <a href="#" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"><TwitterIcon className="w-5 h-5" /></a>
                           <a href="https://youtube.com/@itsupportengineer?si=h9cWjnim1r2gCXVT" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"><YoutubeIcon className="w-5 h-5" /></a>
                           <a href="https://www.instagram.com/shribhagwan_dubey?igsh=MWJ4MXJueHRqM3lrdg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300"><InstagramIcon className="w-5 h-5" /></a>
                        </div>
                    </div>
                    {/* Services Links */}
                    <div>
                        <h5 className="font-bold text-lg mb-4">Services</h5>
                        <ul className="space-y-2">
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">Hardware Services</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">Networking Services</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">CCTV</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">IT Support</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">AMC Support</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">IT Consultant</a></li>
                            <li><a href="#services" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300"><Parts Requred /a></li>
                        </ul>
                    </div>
                     {/* Company Links */}
                    <div>
                        <h5 className="font-bold text-lg mb-4">Company</h5>
                        <ul className="space-y-2">
                            <li><a href="#home" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">Home</a></li>
                            <li><a href="#why-us" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">About Us</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">Our Team</a></li>
                            <li><a href="#" className="text-slate-400 hover:text-white hover:pl-2 transition-all duration-300">Careers</a></li>
                        </ul>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <h5 className="font-bold text-lg mb-4">Contact Info</h5>
                        <ul className="space-y-3 text-slate-400">
                            <li className="flex items-start"><MapMarkerIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" /> Faridabad, Haryana - 121003</li>
                            <li className="flex items-start"><PhoneIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" /> +91 7988678921, +91 8901996668</li>
                            <li className="flex items-start"><EnvelopeIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" /> sbdubey@n4t.in, support@n4t.in</li>
                            <li className="flex items-start"><ClockIcon className="w-5 h-5 mr-3 mt-1 flex-shrink-0" /> 24x7 We Provide PAN India IT Service</li>
                        </ul>
                    </div>
                </div>

                <hr className="border-slate-700 my-6" />

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} N4T - NETWORK 4 TECHNOLOGIES. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
