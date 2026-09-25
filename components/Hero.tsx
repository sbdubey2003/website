import React, { useState } from 'react';
import { 
  BoltIcon, 
  RupeeIcon, 
  ShieldIcon, 
  ServerIcon, 
  NetworkWiredIcon, 
  CctvIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from './Icons';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'network' | 'surveillance' | 'amc'>('network');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white via-blue-50/30 to-slate-50 text-slate-900 overflow-hidden tech-grid-light">
      {/* Soft ambient background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-400/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Hero Content */}
          <div className="w-full lg:w-7/12 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200/80 text-xs font-semibold text-slate-700 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-800">Certified Enterprise IT Infrastructure Partner</span>
              <span className="text-slate-300">•</span>
              <span className="text-primary-600 font-bold font-mono">PAN-INDIA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-display text-slate-900">
              Enterprise IT Solutions <br className="hidden sm:inline" />
              Engineered For <br />
              <span className="gradient-text-blue">Zero Downtime.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
              From corporate hardware provisioning and structured fiber networking to AI-driven CCTV surveillance and 24x7 AMC maintenance—N4T powers seamless digital infrastructure for growing enterprises across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 shadow-xl shadow-blue-500/25 transform hover:-translate-y-0.5 transition duration-300 group"
              >
                <span>Request Free IT Assessment</span>
                <ArrowRightIcon className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-base font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:border-slate-400 hover:text-primary-600 transition duration-300"
              >
                Explore Solutions
              </a>
            </div>

            {/* Quick Metrics bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">500+</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Corporate Clients</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-primary-600 font-display">99.9%</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Network Uptime</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">&lt; 2 Hrs</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Emergency SLA</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-display">24x7</div>
                <div className="text-xs text-slate-500 font-semibold mt-0.5">Dedicated Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Operations Dashboard (Light Mode Frame) */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              {/* Soft decorative shadow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur-xl opacity-20"></div>

              {/* Terminal Frame (Clean White Glass) */}
              <div className="relative bg-white border border-slate-200/90 rounded-3xl shadow-2xl shadow-blue-500/10 p-6 backdrop-blur-xl">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 font-semibold flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
                    N4T Command Hub v4.2
                  </div>
                  <div className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono font-bold">
                    LIVE
                  </div>
                </div>

                {/* Dashboard Tab Selector */}
                <div className="flex space-x-2 mt-4 p-1.5 bg-slate-100/80 rounded-xl border border-slate-200/60">
                  <button
                    onClick={() => setActiveTab('network')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'network' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Networking
                  </button>
                  <button
                    onClick={() => setActiveTab('surveillance')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'surveillance' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    CCTV Feeds
                  </button>
                  <button
                    onClick={() => setActiveTab('amc')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'amc' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    AMC Status
                  </button>
                </div>

                {/* Dynamic Content based on selected tab (Clean Light Panels) */}
                <div className="mt-5 space-y-3">
                  {activeTab === 'network' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-100 text-primary-600">
                            <NetworkWiredIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Core Switch & Gateway</div>
                            <div className="text-xs text-slate-500">10 Gbps SFP+ Uplink Active</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          ONLINE
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700">
                            <ShieldIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Next-Gen UTM Firewall</div>
                            <div className="text-xs text-slate-500">0 Threat Incursions | 100% Protected</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          ARMED
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-indigo-100 text-indigo-700">
                            <ServerIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Server Rack Cluster</div>
                            <div className="text-xs text-slate-500">Load: 24% | Temp: 21°C Optimal</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          OPTIMAL
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === 'surveillance' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                            <CctvIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">4K IP Dome & Bullet Array</div>
                            <div className="text-xs text-slate-500">32/32 Cameras Recording in 4K</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          REC
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                            <ShieldIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">AI Perimeter Intrusion</div>
                            <div className="text-xs text-slate-500">Smart Vehicle & Human Detection</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          ACTIVE
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-100 text-blue-700">
                            <ServerIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">64-Channel NVR Storage</div>
                            <div className="text-xs text-slate-500">45 Days RAID Cloud & Local Backup</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          SYNCED
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === 'amc' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-emerald-100 text-emerald-700">
                            <CheckCircleIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Comprehensive AMC Plan</div>
                            <div className="text-xs text-slate-500">Monthly Preventive Audit Done</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          ACTIVE
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-cyan-100 text-cyan-700">
                            <BoltIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Rapid On-Site Support</div>
                            <div className="text-xs text-slate-500">Engineer Dispatched within 45 mins</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                          READY
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-amber-100 text-amber-700">
                            <RupeeIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-sm font-bold text-slate-800">Parts Replacement Coverage</div>
                            <div className="text-xs text-slate-500">100% Genuine OEM Spares Guaranteed</div>
                          </div>
                        </div>
                        <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                          COVERED
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer callout in frame */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-2"></span>
                    SLA Response: 14 mins avg
                  </span>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-primary-600 font-bold hover:underline">
                    Deploy for your office →
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
