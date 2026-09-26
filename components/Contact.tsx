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
    <section id="contact" className="py-24 md:py-32 bg-slate-50 text-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-primary-700 uppercase tracking-widest mb-4">
            Connect With Our Engineers
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 font-display">
            Let's Discuss Your Technology Requirements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Have an immediate hardware requirement or need ongoing IT maintenance? Our solution architects respond within 30 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: Inquiries & Quotes (Crisp White Card) */}
          <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 font-display">
              Request a Commercial Quote
            </h3>
            <p className="text-sm text-slate-500 mb-8">
              Fill in your organization's details below to receive a formal scope of work & estimate.
            </p>

            {/* Status Notifications */}
            {status === 'success' && (
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start space-x-3 animate-fadeIn">
                <CheckCircleIcon className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <div className="font-bold text-emerald-900">Commercial Quote Request Dispatched!</div>
                  <div className="text-emerald-700 mt-0.5">
                    Your details have been successfully forwarded to our engineering inbox via Resend. Our solution architects will contact you within 30 minutes.
                  </div>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-2 animate-fadeIn">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-600 text-lg flex-shrink-0">⚠️</span>
                  <div className="text-sm">
                    <div className="font-bold">Inquiry Notice</div>
                    <div className="text-amber-800 text-xs mt-0.5">{feedbackMessage}</div>
                  </div>
                </div>

                {needsKeyNotice && (
                  <div className="text-xs bg-white/70 p-3 rounded-xl border border-amber-200 text-slate-700">
                    <strong>Quick Setup:</strong> Open your <code className="bg-amber-100 px-1 py-0.5 rounded font-mono text-amber-900">.env</code> file and add your Resend API Key:
                    <div className="font-mono text-[11px] bg-slate-900 text-emerald-400 p-2 rounded mt-1.5 overflow-x-auto">
                      RESEND_API_KEY=re_your_api_key_here
                    </div>
                  </div>
                )}

                <div className="pt-2 flex items-center justify-between border-t border-amber-200/60 text-xs">
                  <span className="text-slate-600">Need instant response?</span>
                  <a 
                    href="https://wa.me/message/PTHIABDDRPO4E1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-emerald-700 font-bold hover:underline"
                  >
                    Send directly on WhatsApp &rarr;
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Your Full Name *
                  </label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. Rahul Sharma" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Company / Work Email *
                  </label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="name@company.com" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition text-sm" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Contact Phone Number *
                  </label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+91 98765 43210" 
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition text-sm" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Primary Service Needed
                  </label>
                  <select 
                    id="service-select"
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition text-sm"
                  >
                    {serviceOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-white text-slate-900">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Requirement Scope & Details *
                </label>
                <textarea 
                  id="message-textarea"
                  rows={4} 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about the number of computers, office locations, timeline, or current technical challenges..." 
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition text-sm" 
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className={`w-full py-4 px-8 rounded-xl font-bold text-white transition duration-300 flex items-center justify-center space-x-2 text-base shadow-xl shadow-blue-500/20 ${
                  status === 'loading' 
                    ? 'bg-primary-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 active:scale-[0.99]'
                }`}
              >
                {status === 'loading' ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending to Engineering Desk...</span>
                  </>
                ) : (
                  <>
                    <span>Request Commercial Quote</span>
                    <ArrowRightIcon className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info & Quick Hotline */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card (Clean White) */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h4 className="text-xl font-bold text-slate-900 mb-6 font-display">
                Headquarters & Contact
              </h4>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-blue-50 text-primary-600 border border-blue-100 flex items-center justify-center mr-4">
                    <MapMarkerIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Registered Address</h5>
                    <p className="text-sm text-slate-600 mt-0.5">
                      Faridabad, Haryana - 121003, India
                    </p>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Serving Faridabad, Gurugram, Delhi NCR & All Major Cities
                    </span>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center mr-4">
                    <PhoneIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Direct Phone Hotlines</h5>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+917988678921" className="block text-sm text-slate-700 hover:text-primary-600 font-mono font-medium transition">
                        +91 7988678921 (Primary Support)
                      </a>
                      <a href="tel:+918901996668" className="block text-sm text-slate-700 hover:text-primary-600 font-mono font-medium transition">
                        +91 8901996668 (Sales & AMC)
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mr-4">
                    <EnvelopeIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Email Addresses</h5>
                    <div className="mt-1 space-y-1">
                      <a href="mailto:sbdubey@n4t.in" className="block text-sm text-slate-700 hover:text-emerald-600 font-medium transition">
                        sbdubey@n4t.in
                      </a>
                      <a href="mailto:support@n4t.in" className="block text-sm text-slate-700 hover:text-emerald-600 font-medium transition">
                        support@n4t.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center mr-4">
                    <ClockIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Operation Hours</h5>
                    <p className="text-sm text-slate-600 mt-0.5">
                      24 Hours / 7 Days a Week
                    </p>
                    <span className="text-[11px] text-emerald-600 font-semibold block mt-0.5">
                      ● Active Emergency Response Available
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Quick Chat Banner (Light Mode) */}
            <div className="rounded-3xl p-6 bg-emerald-50 border border-emerald-200/80 shadow-md flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-2xl bg-emerald-600 text-white shadow-md">
                  <WhatsAppIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Instant WhatsApp Chat</div>
                  <div className="text-xs text-slate-600">Directly message our IT Support Desk</div>
                </div>
              </div>
              <a 
                href="https://wa.me/message/PTHIABDDRPO4E1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow transition"
              >
                Chat Now
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
