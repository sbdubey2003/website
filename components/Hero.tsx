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
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#060913] text-white overflow-hidden tech-grid-dark">
      {/* High-tech radial background glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Column: Hero Content */}
          <div className="w-full lg:w-7/12 text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-slate-300 mb-6 shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-slate-200">Certified Enterprise IT Infrastructure Partner</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-bold font-mono">PAN-INDIA</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6 font-display text-white">
              Enterprise IT Infrastructure <br className="hidden sm:inline" />
              Engineered For <br />
              <span className="gradient-text-blue">Zero Downtime.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-400 mb-8 max-w-2xl leading-relaxed">
              From corporate hardware provisioning and structured fiber networking to AI-driven CCTV surveillance and 24x7 AMC maintenance—N4T powers high-reliability digital operations for growing enterprises across India.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5 transition duration-300 border border-blue-400/40 group"
              >
                <span>Request Free IT Assessment</span>
                <ArrowRightIcon className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl text-sm font-bold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 shadow-md hover:border-slate-600 hover:text-white transition duration-300 backdrop-blur-md"
              >
                Explore Solutions
              </a>

              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent('open-n4t-chatbot'))}
                className="inline-flex items-center justify-center px-5 py-4 rounded-xl text-sm font-bold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-800/80 shadow-md hover:shadow-cyan-900/30 transition duration-300 group"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2.5 animate-ping"></span>
                <span>Ask N4T AI Bot</span>
                <span className="ml-2 text-lg">🤖</span>
              </button>
            </div>

            {/* Quick Metrics bar (Dark Glass Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800/80">
              <div className="p-3.5 rounded-2xl bg-[#0c1222]/80 border border-slate-800/90 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-display">500+</div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Corporate Clients</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0c1222]/80 border border-slate-800/90 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-display">99.98%</div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Network Uptime</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0c1222]/80 border border-slate-800/90 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-display">&lt; 2 Hrs</div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Emergency SLA</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#0c1222]/80 border border-slate-800/90 backdrop-blur-md">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-display">24x7</div>
                <div className="text-[11px] text-slate-400 font-semibold mt-0.5">Dedicated Support</div>
              </div>
            </div>
          </div>

          {/* Right Column: Operations Command Hub Terminal (High-Tech Frame) */}
          <div className="w-full lg:w-5/12">
            <div className="relative">
              {/* Decorative cyber gradient glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

              {/* Terminal Frame (Sleek Dark Glass) */}
              <div className="relative bg-[#0c1324]/90 border border-slate-700/80 rounded-3xl shadow-2xl shadow-black/80 p-6 backdrop-blur-2xl">
                
                {/* Window header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80 border border-rose-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400"></div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 font-semibold flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse"></span>
                    N4T Command Hub v4.2 • <span className="text-cyan-400 ml-1">18ms</span>
                  </div>
                  <div className="text-[10px] px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 font-mono font-bold">
                    ONLINE
                  </div>
                </div>

                {/* Dashboard Tab Selector */}
                <div className="flex space-x-2 mt-4 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
                  <button
                    onClick={() => setActiveTab('network')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'network' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    Networking
                  </button>
                  <button
                    onClick={() => setActiveTab('surveillance')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'surveillance' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    CCTV Feeds
                  </button>
                  <button
                    onClick={() => setActiveTab('amc')}
                    className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-bold transition ${activeTab === 'amc' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
                  >
                    AMC Health
                  </button>
                </div>

                {/* Dynamic Content based on selected tab */}
                <div className="mt-5 space-y-3">
                  {activeTab === 'network' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-950/80 text-cyan-400 border border-blue-800/60">
                            <NetworkWiredIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">Core Switch & 10G SFP+ Gateway</div>
                            <div className="text-[11px] text-slate-400 font-mono">10 Gbps Backbone • Low Latency</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                          10G ACTIVE
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                            <ShieldIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">Next-Gen Dual-WAN Firewall</div>
                            <div className="text-[11px] text-slate-400 font-mono">0 Threats • FortiGate Zero-Failover</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                          SHIELDED
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-indigo-950/80 text-indigo-400 border border-indigo-800/60">
                            <ServerIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">Server Rack Cluster (42U)</div>
                            <div className="text-[11px] text-slate-400 font-mono">Load: 24% | Temp: 21°C Optimal</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-blue-950/80 text-cyan-400 border border-blue-700/60">
                          OPTIMAL
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === 'surveillance' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                            <CctvIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">4K IP Dome & Bullet Array</div>
                            <div className="text-[11px] text-slate-400 font-mono">32/32 Cameras Active • H.265+</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-rose-950/80 text-rose-400 border border-rose-700/60 flex items-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1 animate-ping"></span>
                          REC 4K
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/60">
                            <ShieldIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">AI Perimeter Intrusion Engine</div>
                            <div className="text-[11px] text-slate-400 font-mono">Vehicle & Human Analytics Live</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                          ACTIVE
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-blue-950/80 text-blue-400 border border-blue-800/60">
                            <ServerIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">64-Channel NVR Storage RAID</div>
                            <div className="text-[11px] text-slate-400 font-mono">45 Days Retention • WD Purple</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-blue-950/80 text-cyan-400 border border-blue-700/60">
                          SYNCED
                        </span>
                      </div>
                    </>
                  )}

                  {activeTab === 'amc' && (
                    <>
                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-800/60">
                            <CheckCircleIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">Comprehensive AMC Contract</div>
                            <div className="text-[11px] text-slate-400 font-mono">Preventive Audit Verified</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                          PROTECTED
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                            <BoltIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">Rapid Emergency Dispatch SLA</div>
                            <div className="text-[11px] text-slate-400 font-mono">Engineer On-Site &lt; 45 Mins</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-blue-950/80 text-cyan-400 border border-blue-700/60">
                          STANDBY
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between hover:border-slate-700 transition">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 rounded-lg bg-amber-950/80 text-amber-400 border border-amber-800/60">
                            <RupeeIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-slate-200">100% Genuine OEM Spares</div>
                            <div className="text-[11px] text-slate-400 font-mono">Motherboard, SMPS & Drive Covered</div>
                          </div>
                        </div>
                        <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                          COVERED
                        </span>
                      </div>
                    </>
                  )}
                </div>

                {/* Footer callout in frame */}
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center font-mono text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-2"></span>
                    Avg Response: 14 mins
                  </span>
                  <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-cyan-400 font-bold hover:underline">
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
