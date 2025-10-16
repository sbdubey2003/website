
import React from 'react';
import { MapMarkerIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from './Icons';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary">
                        Contact Us
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Get in touch with our team for all your IT needs</p>
                </div>
                
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                        <div className="bg-slate-50 p-8 rounded-xl shadow-lg h-full">
                            <h4 className="text-2xl font-bold mb-6">Send us a message</h4>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <div className="mb-4">
                                    <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none transition" required />
                                </div>
                                <div className="mb-4">
                                    <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none transition" required />
                                </div>
                                <div className="mb-4">
                                    <input type="tel" placeholder="Your Phone" className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none transition" />
                                </div>
                                <div className="mb-4">
                                    <select className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none transition bg-white">
                                        <option>Select Service</option>
                                        <option>IT Hardware</option>
                                        <option>Networking</option>
                                        <option>CCTV Solutions</option>
                                        <option>IT Support</option>
                                        <option>AMC Services</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <textarea rows={5} placeholder="Your Message" className="w-full p-3 rounded-md border border-slate-300 focus:ring-2 focus:ring-primary focus:outline-none transition" required></textarea>
                                </div>
                                <button type="submit" className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-4">
                        <div className="bg-slate-50 p-8 rounded-xl shadow-lg h-full">
                            <h4 className="text-2xl font-bold mb-6">Contact Information</h4>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-full mr-4">
                                        <MapMarkerIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">Address</h5>
                                        <p className="text-slate-600">Faridabad, Haryana - 121003</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-full mr-4">
                                        <PhoneIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">Phone</h5>
                                        <p className="text-slate-600">+91 7988678921<br />+91 8901996668</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-full mr-4">
                                        <EnvelopeIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">Email</h5>
                                        <p className="text-slate-600">sbdubey@outlook.in</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white rounded-full mr-4">
                                        <ClockIcon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h5 className="font-bold text-lg">Service Hours</h5>
                                        <p className="text-slate-600">24x7 All India Service</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
