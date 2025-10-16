
import React from 'react';
import { DesktopIcon, LaptopIcon, PrinterIcon, ToolsIcon, HeadsetIcon } from './Icons';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary">
        {children}
    </h2>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="bg-white rounded-xl shadow-lg p-6 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div className="text-4xl mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
            {icon}
        </div>
        <h4 className="text-xl font-bold mb-2">{title}</h4>
        <p className="text-slate-600">{text}</p>
    </div>
);

const ServiceFeature: React.FC<{ num: number; title: string; text: string }> = ({ num, title, text }) => (
    <div className="flex items-start mb-6">
        <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full mr-4">
            {num}
        </div>
        <div>
            <h4 className="text-xl font-bold">{title}</h4>
            <p className="text-slate-600">{text}</p>
        </div>
    </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        
        {/* IT Hardware Sales */}
        <div id="hardware-sales" className="scroll-mt-24">
          <div className="text-center mb-16">
            <SectionTitle>IT Hardware Sales</SectionTitle>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">High-quality hardware solutions for business and personal use</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <ServiceCard icon={<DesktopIcon className="w-10 h-10" />} title="Desktops" text="High-performance desktops for business and personal use. We offer a range of brands and configurations to meet your specific needs." />
            <ServiceCard icon={<LaptopIcon className="w-10 h-10" />} title="Laptops" text="Portable and powerful laptops for on-the-go productivity. Our selection includes top brands with various screen sizes and features." />
            <ServiceCard icon={<PrinterIcon className="w-10 h-10" />} title="Printers" text="Reliable printers for all your printing needs, from basic home use to high-volume office printing. Choose from inkjet, laser, and multifunction models." />
          </div>
        </div>

        {/* Networking Solutions */}
        <div id="networking-solutions" className="flex flex-wrap items-center -mx-4 mb-20 scroll-mt-24">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                <div className="text-left mb-8">
                    <SectionTitle>Networking Solutions</SectionTitle>
                    <p className="text-lg text-slate-600 mt-4">Secure and reliable network infrastructure for your business</p>
                </div>
                <ServiceFeature num={1} title="Secure Connectivity" text="We provide secure and reliable network solutions to keep your business connected and protected from cyber threats." />
                <ServiceFeature num={2} title="Wireless Solutions" text="Implement robust Wi-Fi networks for seamless connectivity throughout your office or business premises." />
                <ServiceFeature num={3} title="Network Design" text="Our experts design and implement network infrastructures tailored to your specific requirements, ensuring optimal performance and scalability." />
            </div>
            <div className="w-full lg:w-1/2 px-4">
                <img src="https://img.freepik.com/premium-photo/network-engineers-working-server-room-with-laptop_23-2148323444.jpg?w=996" alt="Networking Solutions" className="w-full h-auto rounded-2xl shadow-xl" />
            </div>
        </div>

        {/* CCTV Surveillance */}
        <div id="cctv-surveillance" className="bg-slate-100 rounded-2xl p-8 md:p-12 mb-20 scroll-mt-24">
             <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
                    <img src="https://images.unsplash.com/photo-1581094271901-8022df4466f9" alt="CCTV Surveillance" className="w-full h-auto rounded-2xl shadow-xl"/>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                    <div className="text-left mb-8">
                       <SectionTitle>CCTV Surveillance</SectionTitle>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <h4 className="text-xl font-bold">Advanced Security</h4>
                            <p className="text-slate-600">Protect your premises with our advanced CCTV surveillance systems, providing monitoring and peace of mind.</p>
                        </div>
                        <div>
                            <h4 className="text-xl font-bold">Remote Access</h4>
                            <p className="text-slate-600">Monitor your property remotely from anywhere in the world via your smartphone or computer.</p>
                        </div>
                         <div>
                            <h4 className="text-xl font-bold">Real-Time Alerts</h4>
                            <p className="text-slate-600">Receive instant alerts and notifications when suspicious activity is detected, enabling rapid response and prevention.</p>
                        </div>
                    </div>
                     <a href="#contact" className="mt-6 inline-block bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">Get Your CCTV System</a>
                </div>
             </div>
        </div>

        {/* IT Support */}
        <div id="it-support" className="scroll-mt-24">
          <div className="text-center mb-16">
            <SectionTitle>Comprehensive IT Support</SectionTitle>
            <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">Professional technical support for all your IT needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <ServiceCard icon={<ToolsIcon className="w-10 h-10" />} title="CCTV Setup & Maintenance" text="Professional installation and ongoing maintenance of your surveillance systems." />
            <ServiceCard icon={<DesktopIcon className="w-10 h-10" />} title="Hardware Troubleshooting" text="Diagnose and repair hardware issues to keep your systems running smoothly." />
            <ServiceCard icon={<HeadsetIcon className="w-10 h-10" />} title="Remote Support" text="Quick resolution of technical issues through our remote support services." />
          </div>
        </div>

        {/* AMC Services */}
        <div id="amc-services" className="bg-slate-100 rounded-2xl p-8 md:p-12 scroll-mt-24">
            <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0 lg:order-2">
                     <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="AMC Services" className="w-full h-auto rounded-2xl shadow-xl" />
                </div>
                <div className="w-full lg:w-1/2 px-4 lg:order-1">
                    <div className="text-left mb-8">
                        <SectionTitle>AMC Services</SectionTitle>
                    </div>
                    <ServiceFeature num={1} title="Proactive Maintenance" text="We provide proactive maintenance to prevent potential issues and ensure your systems are always running smoothly." />
                    <ServiceFeature num={2} title="Regular Checkups" text="Our AMC services include regular system checkups, software updates, and hardware maintenance to optimize performance." />
                    <ServiceFeature num={3} title="Peace of Mind" text="With our AMC services, you can enjoy peace of mind knowing that your IT infrastructure is in expert hands." />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
