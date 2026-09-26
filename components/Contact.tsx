import React, { useState } from 'react';
import { 
  MapMarkerIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon, 
  WhatsAppIcon, 
  CheckCircleIcon,
  ArrowRightIcon
} from './Icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT AMC Support',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [needsKeyNotice, setNeedsKeyNotice] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setFeedbackMessage('');
    setNeedsKeyNotice(false);

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus('success');
        setFeedbackMessage(result.message || 'Quote inquiry dispatched to engineering desk!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: 'IT AMC Support',
          message: ''
        });
      } else {
        setStatus('error');
        setFeedbackMessage(result.error || 'Failed to dispatch quote request via Resend API.');
        if (result.needsConfig) {
          setNeedsKeyNotice(true);
        }
      }
    } catch (err: any) {
      setStatus('error');
      setFeedbackMessage(err.message || 'Unable to connect to the email server. Please check your network.');
    }
  };

  const serviceOptions = [
    'IT AMC Support',
    'Hardware Procurement (PCs/Laptops)',
    'Networking & Structured Cabling',
    'CCTV & Surveillance Setup',
    'Emergency IT Support / Repair',
    'Data Center / Server Rack Setup'
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#080d1a] text-white relative tech-grid-dark border-t border-slate-800/80">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/70 text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-4">
            // 04. DIRECT ENGINEERING DESK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Let's Discuss Your Technology Requirements
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Have an immediate hardware requirement or need ongoing IT maintenance? Our solution architects respond within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Form: Inquiries & Quotes (Dark Glass Card) */}
          <div className="lg:col-span-7 bg-[#0c1222]/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display">
              Request a Commercial Quote
            </h3>
            <p className="text-xs text-slate-400 mb-8 font-mono">
              // Fill in your organization's details below to receive a formal scope of work & estimate.
            </p>

            {/* Status Notifications */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 flex items-start space-x-3 animate-fadeIn">
                <CheckCircleIcon className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-emerald-300">Commercial Quote Request Dispatched!</div>
                  <div className="text-emerald-400/90 mt-0.5">
                    Your details have been successfully forwarded to our engineering inbox. Our solution architects will contact you within 30 minutes.
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-950/80 border border-amber-700/80 text-amber-200 space-y-2 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-400 text-base flex-shrink-0">⚠️</span>
                  <div className="text-xs">
                    <div className="font-bold text-amber-300">Inquiry Notice</div>
                    <div className="text-amber-400/90 text-xs mt-0.5">{feedbackMessage}</div>
                  </div>
                </div>

                {needsKeyNotice && (
                  <div className="text-[11px] bg-slate-900 p-3 rounded-xl border border-amber-800/80 text-slate-300 font-mono">
                    <strong>Quick Setup:</strong> Add your Resend API Key in <code className="text-cyan-400">.env</code>:
                    <div className="text-[10px] bg-black text-emerald-400 p-2 rounded mt-1.5 overflow-x-auto">
                      RESEND_API_KEY=re_your_api_key_here
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between border-t border-amber-800/50 text-xs">
                  <span className="text-slate-400">Need instant response?</span>
                  <a 
                    href="https://wa.me/message/PTHIABDDRPO4E1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-400 font-bold hover:underline"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowRightIcon className="w-3.5 h-3.5 ml-1" />
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs transition font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Official Email ID *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. rahul@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs transition font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    Service Required *
                  </label>
                  <select
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs transition"
                  >
                    {serviceOptions.map((s, idx) => (
                      <option key={idx} value={s} className="bg-slate-900 text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  Detailed Infrastructure Requirement *
                </label>
                <textarea
                  id="message-textarea"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify system quantities, current issues, or office locations..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-xs transition"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-primary-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-200 border border-blue-400/40 flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? (
                  <span>Sending Inquiry...</span>
                ) : (
                  <>
                    <span>Submit Request for Quotation</span>
                    <ArrowRightIcon className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Helpdesk Card (Dark Sapphire) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0c1222]/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                // CORPORATE HEADQUARTERS
              </span>
              <h3 className="text-xl font-bold text-white mt-1 mb-6 font-display">
                Network 4 Technologies
              </h3>

              <div className="space-y-4 text-xs text-slate-300">
                <div className="flex items-start">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 mr-3 flex-shrink-0">
                    <MapMarkerIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Operations & Lab Facility</div>
                    <div className="text-slate-400 mt-0.5">Faridabad, Haryana - 121003, NCR, India</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 mr-3 flex-shrink-0">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Phone Lines</div>
                    <a href="tel:+917988678921" className="text-cyan-400 block font-mono hover:underline mt-0.5">
                      +91 7988678921
                    </a>
                    <a href="tel:+918901996668" className="text-slate-400 block font-mono hover:text-cyan-400 mt-0.5">
                      +91 8901996668
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 mr-3 flex-shrink-0">
                    <EnvelopeIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Official Correspondence</div>
                    <a href="mailto:sbdubey@n4t.in" className="text-cyan-400 block hover:underline mt-0.5 font-mono">
                      sbdubey@n4t.in
                    </a>
                    <a href="mailto:support@n4t.in" className="text-slate-400 block hover:text-cyan-400 mt-0.5 font-mono">
                      support@n4t.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-emerald-400 mr-3 flex-shrink-0">
                    <ClockIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Engineering Support SLA</div>
                    <div className="text-emerald-400 font-semibold font-mono mt-0.5">
                      24x7 Emergency Helpdesk & Pan-India Dispatch
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">Need instant chat?</span>
                <a
                  href="https://wa.me/message/PTHIABDDRPO4E1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs font-bold text-emerald-300 bg-emerald-950/70 border border-emerald-800/80 hover:bg-emerald-900 transition"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
