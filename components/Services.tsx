import React, { useState } from 'react';
import { 
  DesktopIcon, 
  LaptopIcon, 
  PrinterIcon, 
  ToolsIcon, 
  HeadsetIcon, 
  NetworkWiredIcon, 
  WifiIcon, 
  ServerIcon, 
  CctvIcon, 
  ShieldIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from './Icons';

const Services: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'hardware' | 'networking' | 'cctv' | 'amc'>('all');

  const handleServiceSelect = (serviceName: string) => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      const select = document.getElementById('service-select') as HTMLSelectElement;
      if (select) {
        select.value = serviceName;
      }
    }
  };

  const servicesData = [
    {
      category: 'hardware',
      id: 'hardware-sales',
      number: '01',
      title: 'Commercial Desktops & All-in-Ones',
      desc: 'Enterprise-grade desktop computers, custom performance CAD/rendering rigs, and sleek all-in-one workstations built for durability and productivity.',
      icon: <DesktopIcon className="w-6 h-6 text-blue-400" />,
      features: ['Intel Core i3/i5/i7/i9 & AMD Ryzen', 'SSD NVMe high-speed storage', 'Bulk business procurement pricing', 'Pre-configured OS & company software'],
      brands: ['Dell', 'HP', 'Lenovo', 'Asus'],
      tag: 'Best Seller'
    },
    {
      category: 'hardware',
      id: 'hardware-sales',
      number: '02',
      title: 'Enterprise Laptops & Mobile Workstations',
      desc: 'Lightweight business laptops and heavy-duty mobile workstations designed for executive leadership, field staff, and technical developers.',
      icon: <LaptopIcon className="w-6 h-6 text-cyan-400" />,
      features: ['Military-spec durability tested', 'Long-lasting battery with rapid charge', 'Hardware TPM 2.0 data security', 'Comprehensive warranty with on-site care'],
      brands: ['Lenovo ThinkPad', 'Dell Latitude', 'HP EliteBook', 'Apple'],
      tag: 'Mobility'
    },
    {
      category: 'hardware',
      id: 'hardware-sales',
      number: '03',
      title: 'Industrial & Office Printers',
      desc: 'High-speed laser printers, multifunction heavy-duty copier machines, and network barcode/label printers with lowest cost per page.',
      icon: <PrinterIcon className="w-6 h-6 text-indigo-400" />,
      features: ['Duplex auto double-sided printing', 'High-speed wireless & LAN connectivity', 'Low-maintenance toner cartridge systems', 'Heavy duty duty cycle for large offices'],
      brands: ['HP LaserJet', 'Canon', 'Epson', 'Brother'],
      tag: 'Office Essential'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      number: '04',
      title: 'Structured LAN & Fiber Optic Cabling',
      desc: 'Turnkey structured network design, CAT6/CAT6A high-speed cabling, optical fiber splicing, patch panel termination, and neat cable management.',
      icon: <NetworkWiredIcon className="w-6 h-6 text-emerald-400" />,
      features: ['Gigabit & 10G high-bandwidth backbone', 'Fluke certification testing', 'Rack organization & neat labelling', 'Zero packet drop guarantee'],
      brands: ['D-Link', 'Schneider', 'CommScope', 'Molex'],
      tag: 'Infrastructure'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      number: '05',
      title: 'Enterprise Wi-Fi & Firewall Security',
      desc: 'Seamless mesh Wi-Fi 6 coverage for multi-story offices and industrial warehouses, coupled with hardware UTM Firewalls preventing cyber attacks.',
      icon: <WifiIcon className="w-6 h-6 text-sky-400" />,
      features: ['Zero dead-zone coverage mapping', 'VLAN guest network isolation', 'Intrusion prevention & content filtering', 'Bandwidth management & QoS'],
      brands: ['Cisco', 'Fortinet', 'Sophos', 'Ubiquiti UniFi'],
      tag: 'Security & Wi-Fi'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      number: '06',
      title: 'Server Racks & Data Center Setup',
      desc: 'Supply and installation of floor-standing server racks, PDU power distribution units, KVM switches, and intelligent cable trays.',
      icon: <ServerIcon className="w-6 h-6 text-blue-400" />,
      features: ['4U up to 42U standardized racks', 'Controlled cooling & perforated ventilation', 'High-capacity redundant power PDUs', 'Lockable tamper-resistant glass doors'],
      brands: ['Netrack', 'Valrack', 'APC Schneider', 'D-Link'],
      tag: 'Data Center'
    },
    {
      category: 'cctv',
      id: 'cctv-surveillance',
      number: '07',
      title: 'High-Definition IP CCTV Surveillance',
      desc: 'Full HD & 4K Ultra HD IP surveillance cameras with crystal-clear color night vision, optical zoom, and weather-proof metal enclosures.',
      icon: <CctvIcon className="w-6 h-6 text-emerald-400" />,
      features: ['Starlight color night vision up to 50m', 'Waterproof IP67 for outdoor use', 'Audio recording & two-way talk', 'Wide angle 120° FOV lens'],
      brands: ['Hikvision', 'CP Plus', 'Dahua', 'Honeywell'],
      tag: 'Security Essential'
    },
    {
      category: 'cctv',
      id: 'cctv-surveillance',
      number: '08',
      title: 'AI Smart Surveillance & Biometrics',
      desc: 'AI-driven intrusion alerts, facial recognition, license plate recognition, and fingerprint/face biometric attendance machines.',
      icon: <ShieldIcon className="w-6 h-6 text-cyan-400" />,
      features: ['Instant mobile alert notifications', 'Biometric employee attendance sync', 'Access control door lock integration', 'Human/Vehicle AI filtering'],
      brands: ['Hikvision AI', 'eSSL', 'ZKTeco', 'CP Plus'],
      tag: 'AI Smart'
    },
    {
      category: 'amc',
      id: 'amc-services',
      number: '09',
      title: 'Comprehensive IT AMC (Annual Maintenance)',
      desc: 'Complete all-in-one protection contract covering regular preventive maintenance, unlimited on-site emergency callouts, and hardware repairs.',
      icon: <ServerIcon className="w-6 h-6 text-primary-400" />,
      features: ['Both Comprehensive & Non-Comprehensive plans', 'SLA under 2-4 hours response time', 'Monthly health check & cleaning', 'Spare parts replacement assistance'],
      brands: ['Multi-brand Support', 'Windows & Linux', 'Desktops/Servers'],
      tag: 'Most Popular'
    },
    {
      category: 'amc',
      id: 'it-support',
      number: '10',
      title: '24x7 Helpdesk & On-Site IT Support',
      desc: 'Experienced resident engineers and remote desktop assistance for instant bug fixes, printer issues, software installation, and virus elimination.',
      icon: <HeadsetIcon className="w-6 h-6 text-amber-400" />,
      features: ['Remote instant screen sharing support', 'Fast on-site engineer dispatch in NCR & India', 'OS reinstallation & data recovery', 'Antivirus & ransomware defense'],
      brands: ['Microsoft Certified', 'Cisco Certified', 'Hardware Specialists'],
      tag: '24/7 Hotline'
    },
    {
      category: 'amc',
      id: 'it-support',
      number: '11',
      title: 'Hardware Troubleshooting & Component Repair',
      desc: 'Chip-level diagnosis and component-level repair of logic boards, SMPS power supplies, server RAM, screen replacements, and thermal overhauls.',
      icon: <ToolsIcon className="w-6 h-6 text-rose-400" />,
      features: ['Chip-level BGA machine repair', 'Original OEM replacement parts', 'Diagnostic testing before dispatch', 'Cost-effective repair over replacement'],
      brands: ['All OEM Brands', 'Intel/AMD Platforms', 'Server Hardware'],
      tag: 'Expert Lab'
    }
  ];

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#080d1a] text-white relative tech-grid-dark border-t border-slate-800/80">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/70 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
            // 01. ENTERPRISE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Comprehensive IT Solutions & Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Delivering robust hardware procurement, high-speed network infrastructure, precision surveillance, and SLA-guaranteed maintenance tailored to your business needs.
          </p>

          {/* Filter Pills (Sleek Dark Glass) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-[#0b1220]/90 border border-slate-800 rounded-2xl max-w-2xl mx-auto shadow-xl backdrop-blur-md">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'all' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'hardware' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Hardware & PC
            </button>
            <button
              onClick={() => setFilter('networking')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'networking' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              Networking & Racks
            </button>
            <button
              onClick={() => setFilter('cctv')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'cctv' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              CCTV Surveillance
            </button>
            <button
              onClick={() => setFilter('amc')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'amc' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}
            >
              AMC & Support
            </button>
          </div>
        </div>

        {/* Services Grid (Dark Glass Cards with Glowing Accents) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={index}
              id={service.id}
              className="scroll-mt-28 bg-[#0c1324]/85 border border-slate-800/90 rounded-3xl p-7 flex flex-col justify-between shadow-xl hover:shadow-2xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle number watermark */}
              <div className="absolute top-4 right-5 text-4xl font-mono font-black text-slate-800/40 pointer-events-none select-none group-hover:text-cyan-500/10 transition-colors">
                {service.number}
              </div>

              <div>
                {/* Card Top: Icon & Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-700/80 group-hover:border-cyan-400/50 group-hover:bg-cyan-950/40 transition duration-300">
                    {service.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-cyan-950/70 text-cyan-300 border border-cyan-800/70">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-800/80">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start text-xs text-slate-300 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Partner Brands & Action */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.brands.map((brand, bIndex) => (
                    <span key={bIndex} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                      {brand}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-300 bg-slate-900/90 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white border border-slate-700/80 hover:border-transparent transition duration-200 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Request Solution Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Feature Spotlight Banner: Turnkey AMC Advantage (High-Tech Mesh) */}
        <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-950 via-[#0e172e] to-indigo-950 text-white shadow-2xl border border-blue-800/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest">
                // 360° INFRASTRUCTURE PROTECTION
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4 font-display">
                Need A Reliable AMC Partner For Your Entire IT Infrastructure?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Protect your business from unpredictable hardware crashes, network slowdowns, and security vulnerabilities with N4T's structured Annual Maintenance Contracts. We offer dedicated resident engineers, guaranteed SLAs, and OEM spare part supply.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="#amc-calculator"
                className="px-8 py-3.5 rounded-xl text-center text-xs font-bold text-slate-900 bg-white hover:bg-cyan-100 shadow-lg shadow-white/10 transition duration-200 transform hover:-translate-y-0.5"
              >
                Estimate AMC Cost
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl text-center text-xs font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition duration-200"
              >
                Consult Architect
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
