import React, { useState } from 'react';
import { 
  ServerIcon, 
  DesktopIcon, 
  CctvIcon, 
  RupeeIcon, 
  CheckCircleIcon, 
  ShieldIcon,
  ArrowRightIcon
} from './Icons';

const AMCCalculator: React.FC = () => {
  const [pcs, setPcs] = useState(15);
  const [cctvs, setCctvs] = useState(8);
  const [servers, setServers] = useState(1);
  const [planType, setPlanType] = useState<'standard' | 'comprehensive'>('comprehensive');

  // Calculation formula for Indian enterprise AMC
  const baseRatePerPC = planType === 'comprehensive' ? 3200 : 1600;
  const baseRatePerCCTV = planType === 'comprehensive' ? 1200 : 750;
  const baseRatePerServer = planType === 'comprehensive' ? 8500 : 4500;

  const pcCost = pcs * baseRatePerPC;
  const cctvCost = cctvs * baseRatePerCCTV;
  const serverCost = servers * baseRatePerServer;
  const totalEstimate = pcCost + cctvCost + serverCost;

  const applyPreset = (pCount: number, cCount: number, sCount: number) => {
    setPcs(pCount);
    setCctvs(cCount);
    setServers(sCount);
  };

  const handleApplyEstimate = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
      const msgArea = document.getElementById('message-textarea') as HTMLTextAreaElement;
      if (msgArea) {
        msgArea.value = `Hi N4T Team, I generated an AMC estimate for: ${pcs} PCs, ${cctvs} CCTV Cameras, and ${servers} Servers under the ${planType.toUpperCase()} plan (Est: ₹${totalEstimate.toLocaleString('en-IN')}/yr). Please provide official commercial quotation.`;
      }
    }
  };

  return (
    <section id="amc-calculator" className="py-24 bg-[#060913] text-white border-y border-slate-800/80 relative overflow-hidden tech-grid-dark">
      {/* Glow lights */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-800/70 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
            // 02. INTERACTIVE COST ESTIMATOR
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Calculate Your IT AMC Investment
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Get an instant commercial estimate tailored to your company's computer workstations, surveillance feeds, and server infrastructure.
          </p>

          {/* Quick Presets */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <span className="text-xs font-mono text-slate-500 mr-1">PRESETS:</span>
            <button
              onClick={() => applyPreset(10, 4, 0)}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition"
            >
              Small Branch (10 PCs)
            </button>
            <button
              onClick={() => applyPreset(35, 16, 1)}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition"
            >
              Midsize Office (35 PCs + 1 Rack)
            </button>
            <button
              onClick={() => applyPreset(80, 32, 3)}
              className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 transition"
            >
              Enterprise HQ (80 PCs + 3 Racks)
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-[#0c1222]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (Sliders & Switches) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Plan Type Selector */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Select Coverage Model
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-900/90 border border-slate-800 rounded-2xl">
                  <button
                    onClick={() => setPlanType('standard')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition ${planType === 'standard' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                  >
                    Non-Comprehensive (Labor)
                  </button>
                  <button
                    onClick={() => setPlanType('comprehensive')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition ${planType === 'comprehensive' ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
                  >
                    Comprehensive (With Parts)
                  </button>
                </div>
              </div>

              {/* Slider 1: PCs / Laptops */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-xs font-bold text-slate-200">
                    <DesktopIcon className="w-4 h-4 mr-2 text-cyan-400" />
                    Desktops & Laptops Workstations
                  </span>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-cyan-400 font-mono">
                      {pcs} Units
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono ml-2">
                      (₹{pcCost.toLocaleString('en-IN')})
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={pcs}
                  onChange={(e) => setPcs(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                  <span>2 PCs</span>
                  <span>50 PCs</span>
                  <span>100+ PCs</span>
                </div>
              </div>

              {/* Slider 2: CCTV Cameras */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-xs font-bold text-slate-200">
                    <CctvIcon className="w-4 h-4 mr-2 text-emerald-400" />
                    CCTV Surveillance Cameras
                  </span>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-emerald-400 font-mono">
                      {cctvs} Cameras
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono ml-2">
                      (₹{cctvCost.toLocaleString('en-IN')})
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="64"
                  value={cctvs}
                  onChange={(e) => setCctvs(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                  <span>0 Cameras</span>
                  <span>32 Cameras</span>
                  <span>64 Cameras</span>
                </div>
              </div>

              {/* Slider 3: Servers / Racks */}
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-xs font-bold text-slate-200">
                    <ServerIcon className="w-4 h-4 mr-2 text-indigo-400" />
                    Server & Network Racks (4U-42U)
                  </span>
                  <div className="text-right">
                    <span className="text-base font-extrabold text-indigo-400 font-mono">
                      {servers} Racks
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono ml-2">
                      (₹{serverCost.toLocaleString('en-IN')})
                    </span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={servers}
                  onChange={(e) => setServers(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-400"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                  <span>0 Servers</span>
                  <span>5 Racks</span>
                  <span>10 Racks</span>
                </div>
              </div>

            </div>

            {/* Right Summary Card (Dark Sapphire High-Tech Card) */}
            <div className="lg:col-span-5 h-full">
              <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-[#0e172e] via-[#0b1328] to-[#070b16] text-white shadow-2xl border border-blue-700/50 flex flex-col justify-between h-full relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <span className="text-xs font-mono uppercase font-bold tracking-wider text-cyan-400">
                      // ESTIMATED PACKAGE
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/70">
                      Annual Contract
                    </span>
                  </div>

                  <div className="my-6">
                    <div className="text-xs text-slate-400 mb-1">Starting from approx.</div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                        ₹{totalEstimate.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">/ year</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      *Taxes extra. Final quote varies based on hardware age & on-site SLA requirements.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>Monthly scheduled preventive health checkups</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>Guaranteed &lt; 2-4 hours response time SLA</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>Unlimited emergency on-site engineer visits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      <span>24x7 remote helpdesk & instant screen sharing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800">
                  <button
                    onClick={handleApplyEstimate}
                    className="group w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-200 flex items-center justify-center space-x-2 border border-blue-400/40"
                  >
                    <span>Request Official Quotation</span>
                    <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-all" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AMCCalculator;
