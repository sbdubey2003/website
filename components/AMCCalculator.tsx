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

  const totalEstimate = (pcs * baseRatePerPC) + (cctvs * baseRatePerCCTV) + (servers * baseRatePerServer);

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
    <section id="amc-calculator" className="py-24 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-xs font-bold text-cyan-800 uppercase tracking-widest mb-4">
            Interactive Cost Estimator
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
            Calculate Your IT AMC Investment
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Get an instant commercial estimate tailored to your company's computer workstations, surveillance feeds, and server infrastructure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls (Sliders & Switches) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Plan Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-3">
                  Select Coverage Model
                </label>
                <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-200/70 border border-slate-300/80 rounded-2xl">
                  <button
                    onClick={() => setPlanType('standard')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition ${planType === 'standard' ? 'bg-white text-primary-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Non-Comprehensive (Labor)
                  </button>
                  <button
                    onClick={() => setPlanType('comprehensive')}
                    className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition ${planType === 'comprehensive' ? 'bg-primary-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Comprehensive (With Parts)
                  </button>
                </div>
              </div>

              {/* Slider 1: PCs / Laptops */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-sm font-bold text-slate-800">
                    <DesktopIcon className="w-4 h-4 mr-2 text-primary-600" />
                    Desktops & Laptops Count
                  </span>
                  <span className="text-lg font-black text-primary-600 font-mono">
                    {pcs} Units
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  value={pcs}
                  onChange={(e) => setPcs(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>2 PCs</span>
                  <span>50 PCs</span>
                  <span>100+ PCs</span>
                </div>
              </div>

              {/* Slider 2: CCTV Cameras */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-sm font-bold text-slate-800">
                    <CctvIcon className="w-4 h-4 mr-2 text-emerald-600" />
                    CCTV Surveillance Cameras
                  </span>
                  <span className="text-lg font-black text-emerald-600 font-mono">
                    {cctvs} Cameras
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="64"
                  value={cctvs}
                  onChange={(e) => setCctvs(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>0 Cameras</span>
                  <span>32 Cameras</span>
                  <span>64 Cameras</span>
                </div>
              </div>

              {/* Slider 3: Servers / Racks */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <span className="flex items-center text-sm font-bold text-slate-800">
                    <ServerIcon className="w-4 h-4 mr-2 text-indigo-600" />
                    Server & Network Racks
                  </span>
                  <span className="text-lg font-black text-indigo-600 font-mono">
                    {servers} Racks
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={servers}
                  onChange={(e) => setServers(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-2 font-mono">
                  <span>0 Servers</span>
                  <span>5 Racks</span>
                  <span>10 Racks</span>
                </div>
              </div>

            </div>

            {/* Right Summary Card (Stunning Royal Card) */}
            <div className="lg:col-span-5 h-full">
              <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-blue-700 via-primary-700 to-indigo-800 text-white shadow-xl flex flex-col justify-between h-full relative overflow-hidden">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/15">
                    <span className="text-xs uppercase font-extrabold tracking-wider text-blue-100">
                      Estimated AMC Package
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white border border-white/30">
                      Annual Contract
                    </span>
                  </div>

                  <div className="my-6">
                    <div className="text-xs text-blue-100 mb-1">Starting from approx.</div>
                    <div className="flex items-baseline space-x-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
                        ₹{totalEstimate.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-blue-100 font-medium">/ year</span>
                    </div>
                    <p className="text-[11px] text-blue-100 mt-2">
                      *Taxes extra. Final quote varies based on hardware age & on-site SLA requirements.
                    </p>
                  </div>

                  <div className="space-y-2.5 pt-4 border-t border-white/15 text-xs text-blue-50">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-300 mr-2 flex-shrink-0" />
                      <span>Monthly scheduled preventive health checkups</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-300 mr-2 flex-shrink-0" />
                      <span>Guaranteed &lt; 2-4 hours response time SLA</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-300 mr-2 flex-shrink-0" />
                      <span>Unlimited emergency on-site engineer visits</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-emerald-300 mr-2 flex-shrink-0" />
                      <span>24x7 remote helpdesk & instant screen sharing</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/15">
                  <button
                    onClick={handleApplyEstimate}
                    className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-primary-900 bg-white hover:bg-blue-50 shadow-lg transition duration-200 flex items-center justify-center space-x-2"
                  >
                    <span>Request Official Quotation</span>
                    <ArrowRightIcon className="w-4 h-4" />
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
