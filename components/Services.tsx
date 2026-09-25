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
      title: 'Commercial Desktops & All-in-Ones',
      desc: 'Enterprise-grade desktop computers, custom performance CAD/rendering rigs, and sleek all-in-one workstations built for durability and productivity.',
      icon: <DesktopIcon className="w-7 h-7 text-blue-600" />,
      features: ['Intel Core i3/i5/i7/i9 & AMD Ryzen', 'SSD NVMe high-speed storage', 'Bulk business procurement pricing', 'Pre-configured OS & company software'],
      brands: ['Dell', 'HP', 'Lenovo', 'Asus'],
      tag: 'Best Seller'
    },
    {
      category: 'hardware',
      id: 'hardware-sales',
      title: 'Enterprise Laptops & Mobile Workstations',
      desc: 'Lightweight business laptops and heavy-duty mobile workstations designed for executive leadership, field staff, and technical developers.',
      icon: <LaptopIcon className="w-7 h-7 text-cyan-600" />,
      features: ['Military-spec durability tested', 'Long-lasting battery with rapid charge', 'Hardware TPM 2.0 data security', 'Comprehensive warranty with on-site care'],
      brands: ['Lenovo ThinkPad', 'Dell Latitude', 'HP EliteBook', 'Apple'],
      tag: 'Mobility'
    },
    {
      category: 'hardware',
      id: 'hardware-sales',
      title: 'Industrial & Office Printers',
      desc: 'High-speed laser printers, multifunction heavy-duty copier machines, and network barcode/label printers with lowest cost per page.',
      icon: <PrinterIcon className="w-7 h-7 text-indigo-600" />,
      features: ['Duplex auto double-sided printing', 'High-speed wireless & LAN connectivity', 'Low-maintenance toner cartridge systems', 'Heavy duty duty cycle for large offices'],
      brands: ['HP LaserJet', 'Canon', 'Epson', 'Brother'],
      tag: 'Office Essential'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      title: 'Structured LAN & Fiber Optic Cabling',
      desc: 'Turnkey structured network design, CAT6/CAT6A high-speed cabling, optical fiber splicing, patch panel termination, and neat cable management.',
      icon: <NetworkWiredIcon className="w-7 h-7 text-emerald-600" />,
      features: ['Gigabit & 10G high-bandwidth backbone', 'Fluke certification testing', 'Rack organization & neat labelling', 'Zero packet drop guarantee'],
      brands: ['D-Link', 'Schneider', 'CommScope', 'Molex'],
      tag: 'Infrastructure'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      title: 'Enterprise Wi-Fi & Firewall Security',
      desc: 'Seamless mesh Wi-Fi 6 coverage for multi-story offices and industrial warehouses, coupled with hardware UTM Firewalls preventing cyber attacks.',
      icon: <WifiIcon className="w-7 h-7 text-sky-600" />,
      features: ['Zero dead-zone coverage mapping', 'VLAN guest network isolation', 'Intrusion prevention & content filtering', 'Bandwidth management & QoS'],
      brands: ['Cisco', 'Fortinet', 'Sophos', 'Ubiquiti UniFi'],
      tag: 'Security & Wi-Fi'
    },
    {
      category: 'networking',
      id: 'networking-solutions',
      title: 'Server Racks & Data Center Setup',
      desc: 'Supply and installation of floor-standing server racks, PDU power distribution units, KVM switches, and intelligent cable trays.',
      icon: <ServerIcon className="w-7 h-7 text-blue-600" />,
      features: ['4U up to 42U standardized racks', 'Controlled cooling & perforated ventilation', 'High-capacity redundant power PDUs', 'Lockable tamper-resistant glass doors'],
      brands: ['Netrack', 'Valrack', 'APC Schneider', 'D-Link'],
      tag: 'Data Center'
    },
    {
      category: 'cctv',
      id: 'cctv-surveillance',
      title: 'High-Definition IP CCTV Surveillance',
      desc: 'Full HD & 4K Ultra HD IP surveillance cameras with crystal-clear color night vision, optical zoom, and weather-proof metal enclosures.',
      icon: <CctvIcon className="w-7 h-7 text-emerald-600" />,
      features: ['Starlight color night vision up to 50m', 'Waterproof IP67 for outdoor use', 'Audio recording & two-way talk', 'Wide angle 120° FOV lens'],
      brands: ['Hikvision', 'CP Plus', 'Dahua', 'Honeywell'],
      tag: 'Security Essential'
    },
    {
      category: 'cctv',
      id: 'cctv-surveillance',
      title: 'AI Smart Surveillance & Biometrics',
      desc: 'AI-driven intrusion alerts, facial recognition, license plate recognition, and fingerprint/face biometric attendance machines.',
      icon: <ShieldIcon className="w-7 h-7 text-cyan-600" />,
      features: ['Instant mobile alert notifications', 'Biometric employee attendance sync', 'Access control door lock integration', 'Human/Vehicle AI filtering'],
      brands: ['Hikvision AI', 'eSSL', 'ZKTeco', 'CP Plus'],
      tag: 'AI Smart'
    },
    {
      category: 'amc',
      id: 'amc-services',
      title: 'Comprehensive IT AMC (Annual Maintenance)',
      desc: 'Complete all-in-one protection contract covering regular preventive maintenance, unlimited on-site emergency callouts, and hardware repairs.',
      icon: <ServerIcon className="w-7 h-7 text-primary-600" />,
      features: ['Both Comprehensive & Non-Comprehensive plans', 'SLA under 2-4 hours response time', 'Monthly health check & cleaning', 'Spare parts replacement assistance'],
      brands: ['Multi-brand Support', 'Windows & Linux', 'Desktops/Servers'],
      tag: 'Most Popular'
    },
    {
      category: 'amc',
      id: 'it-support',
      title: '24x7 Helpdesk & On-Site IT Support',
      desc: 'Experienced resident engineers and remote desktop assistance for instant bug fixes, printer issues, software installation, and virus elimination.',
      icon: <HeadsetIcon className="w-7 h-7 text-amber-600" />,
      features: ['Remote instant screen sharing support', 'Fast on-site engineer dispatch in NCR & India', 'OS reinstallation & data recovery', 'Antivirus & ransomware defense'],
      brands: ['Microsoft Certified', 'Cisco Certified', 'Hardware Specialists'],
      tag: '24/7 Hotline'
    },
    {
      category: 'amc',
      id: 'it-support',
      title: 'Hardware Troubleshooting & Component Repair',
      desc: 'Chip-level diagnosis and component-level repair of logic boards, SMPS power supplies, server RAM, screen replacements, and thermal overhauls.',
      icon: <ToolsIcon className="w-7 h-7 text-rose-600" />,
      features: ['Chip-level BGA machine repair', 'Original OEM replacement parts', 'Diagnostic testing before dispatch', 'Cost-effective repair over replacement'],
      brands: ['All OEM Brands', 'Intel/AMD Platforms', 'Server Hardware'],
      tag: 'Expert Lab'
    }
  ];

  const filteredServices = filter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === filter);

  return (
    <section id="services" className="py-24 md:py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-primary-700 uppercase tracking-widest mb-4">
            End-To-End Enterprise Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
            Comprehensive IT Solutions & Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Delivering robust hardware procurement, high-speed network infrastructure, precision surveillance, and SLA-guaranteed maintenance tailored to your business needs.
          </p>

          {/* Filter Pills (Clean Light Styling) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-white border border-slate-200 rounded-2xl max-w-2xl mx-auto shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'all' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setFilter('hardware')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'hardware' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Hardware & PC
            </button>
            <button
              onClick={() => setFilter('networking')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'networking' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Networking & Racks
            </button>
            <button
              onClick={() => setFilter('cctv')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'cctv' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              CCTV Surveillance
            </button>
            <button
              onClick={() => setFilter('amc')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition ${filter === 'amc' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              AMC & Support
            </button>
          </div>
        </div>

        {/* Services Grid (Crisp White Cards with Soft Shadow) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div 
              key={index}
              id={service.id}
              className="scroll-mt-28 bg-white border border-slate-200/90 rounded-3xl p-7 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-400/60 transition-all duration-300 group"
            >
              <div>
                {/* Card Top: Icon & Tag */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                    <span className="group-hover:brightness-200 transition">
                      {service.icon}
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-blue-50 text-blue-700 border border-blue-200">
                    {service.tag}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors font-display">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                  {service.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-start text-xs text-slate-700 font-medium">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom: Partner Brands & Action */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.brands.map((brand, bIndex) => (
                    <span key={bIndex} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {brand}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => handleServiceSelect(service.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-slate-700 bg-slate-50 hover:bg-primary-600 hover:text-white border border-slate-200 hover:border-primary-600 transition duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Request Solution Details</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Feature Spotlight Banner: Turnkey AMC Advantage (Light Gradient with Rich Accents) */}
        <div className="mt-20 rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="text-cyan-300 text-xs font-extrabold uppercase tracking-widest">
                Comprehensive Office Coverage
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2 mb-4 font-display">
                Need A Reliable AMC Partner For Your Entire IT Infrastructure?
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Protect your business from unpredictable hardware crashes, network slowdowns, and security vulnerabilities with N4T's structured Annual Maintenance Contracts. We offer dedicated resident engineers, guaranteed SLAs, and OEM spare part supply.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <a
                href="#amc-calculator"
                className="px-8 py-3.5 rounded-xl text-center text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 shadow-lg transition duration-200"
              >
                Estimate AMC Cost
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-xl text-center text-sm font-semibold text-white bg-blue-950/60 hover:bg-blue-950/80 border border-blue-400/40 transition duration-200"
              >
                Consult an Engineer
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
