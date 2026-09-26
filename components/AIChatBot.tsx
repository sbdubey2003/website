import React, { useState, useEffect, useRef } from 'react';

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  actions?: Array<{
    label: string;
    actionType: 'whatsapp' | 'call' | 'scroll' | 'prompt';
    payload: string;
  }>;
}

export const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    return [
      {
        id: 'welcome',
        sender: 'bot',
        text: `**Namaste & Welcome to Network 4 Technologies (N4T)!** 👋🤖\n\nI am your **N4T AI Assistant**, here 24x7 to help you with:\n\n• 💻 **Laptops, Desktops & Workstation Procurement**\n• 🌐 **LAN Cabling, Wi-Fi 6 & Enterprise Firewalls**\n• 📹 **IP CCTV Cameras & Biometric Attendance**\n• ⚙️ **IT AMC Contracts (Instant Cost Estimation)**\n• 🚨 **30-Min Rapid On-Site IT Breakdown Support**\n\nHow can I assist your business today?`,
        timestamp: 'Just now',
        actions: [
          { label: '💻 Laptops & PCs', actionType: 'prompt', payload: 'What laptops and PCs do you supply and what are the brands?' },
          { label: '⚙️ IT AMC Rates', actionType: 'prompt', payload: 'What are your IT AMC rates and plans?' },
          { label: '📹 CCTV & Security', actionType: 'prompt', payload: 'Tell me about IP CCTV camera installation and brands' },
          { label: '🌐 Office Wi-Fi / LAN', actionType: 'prompt', payload: 'Do you do office networking, CAT6 cabling and Wi-Fi setup?' },
          { label: '📞 Contact / WhatsApp', actionType: 'whatsapp', payload: 'Hi N4T, I need assistance regarding IT solutions for my company.' }
        ]
      }
    ];
  });

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isVoiceMuted, setIsVoiceMuted] = useState(true);
  const [isListening, setIsListening] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasUnread, setHasUnread] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      setShowTooltip(false);
      setTimeout(() => inputRef.current?.focus(), 250);
    }
  }, [isOpen]);

  // Hide initial welcome bubble after 12 seconds if not clicked
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  // Listen for open-n4t-chatbot custom events from Header, Hero, etc.
  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('open-n4t-chatbot', handleOpenChat);
    return () => window.removeEventListener('open-n4t-chatbot', handleOpenChat);
  }, []);

  // Web Speech Synthesis (Text to Speech)
  const speakText = (text: string) => {
    if (isVoiceMuted || !('speechSynthesis' in window)) return;
    try {
      window.speechSynthesis.cancel();
      // Clean markdown tags for speech
      const cleanText = text
        .replace(/[*_#`~[\]]/g, '')
        .replace(/•/g, '')
        .replace(/\n+/g, '. ');
      const utterance = new SpeechSynthesisUtterance(cleanText);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = 'en-IN';
      window.speechSynthesis.speak(utterance);
    } catch (e) {
      console.error('Speech synthesis error:', e);
    }
  };

  // Play subtle futuristic chime
  const playChime = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // AudioContext ignored if blocked
    }
  };

  // Speech-to-Text Setup
  const toggleSpeechRecognition = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return;
    }

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      return;
    }

    try {
      const recognition = new SpeechRecognition();
      recognition.lang = 'en-IN';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInput(prev => (prev ? prev + ' ' + transcript : transcript));
        }
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
      recognition.start();
    } catch (err) {
      console.error('Speech recognition error:', err);
      setIsListening(false);
    }
  };

  // Intelligent Knowledge & NLP Engine for N4T
  const generateBotReply = (userQuery: string): { text: string; actions?: ChatMessage['actions'] } => {
    const query = userQuery.toLowerCase().trim();

    // Check for interactive AMC calculation: e.g. "amc for 15 pcs", "10 pc 5 cctv", "calculate amc"
    const pcMatch = query.match(/(\d+)\s*(?:pcs?|computers?|desktops?|systems?|laptops?)/);
    const cctvMatch = query.match(/(\d+)\s*(?:cctvs?|cameras?)/);
    const serverMatch = query.match(/(\d+)\s*(?:servers?|racks?)/);

    if (pcMatch || cctvMatch || serverMatch) {
      const pcCount = pcMatch ? parseInt(pcMatch[1], 10) : 0;
      const cctvCount = cctvMatch ? parseInt(cctvMatch[1], 10) : 0;
      const serverCount = serverMatch ? parseInt(serverMatch[1], 10) : 0;

      if (pcCount > 0 || cctvCount > 0 || serverCount > 0) {
        // Standard (Labor): PC 1600, CCTV 750, Server 4500
        const stdPC = pcCount * 1600;
        const stdCCTV = cctvCount * 750;
        const stdServer = serverCount * 4500;
        const stdTotal = stdPC + stdCCTV + stdServer;

        // Comprehensive (Parts + Labor): PC 3200, CCTV 1200, Server 8500
        const compPC = pcCount * 3200;
        const compCCTV = cctvCount * 1200;
        const compServer = serverCount * 8500;
        const compTotal = compPC + compCCTV + compServer;

        const summaryItems = [];
        if (pcCount > 0) summaryItems.push(`${pcCount} Computer Workstations`);
        if (cctvCount > 0) summaryItems.push(`${cctvCount} CCTV Cameras`);
        if (serverCount > 0) summaryItems.push(`${serverCount} Server Racks`);

        return {
          text: `📊 **Instant AMC Cost Estimation for:**\n${summaryItems.map(item => `• ${item}`).join('\n')}\n\n` +
            `💼 **1. Non-Comprehensive Plan (Labor & Preventive Visits):**\n` +
            `• Annual Investment: **₹${stdTotal.toLocaleString('en-IN')}/year**\n` +
            `• Includes: Monthly preventive maintenance, 30-min SLA, OS/Software troubleshooting. Faulty parts billed at cost.\n\n` +
            `🛡️ **2. Comprehensive Plan (All Parts + Labor Covered):**\n` +
            `• Annual Investment: **₹${compTotal.toLocaleString('en-IN')}/year**\n` +
            `• Includes: 100% parts replacement warranty, standby systems, zero repair bills.\n\n` +
            `Would you like our engineering head to share a customized formal commercial quote?`,
          actions: [
            {
              label: '💬 Get Formal Quote on WhatsApp',
              actionType: 'whatsapp',
              payload: `Hi N4T, I calculated an AMC for ${summaryItems.join(', ')}. Est: ₹${compTotal.toLocaleString('en-IN')}/yr. Please provide formal quotation.`
            },
            {
              label: '🧮 Open Interactive AMC Tool',
              actionType: 'scroll',
              payload: 'amc-calculator'
            },
            {
              label: '📞 Call IT Specialist',
              actionType: 'call',
              payload: '+917988678921'
            }
          ]
        };
      }
    }

    // 1. Hardware, Laptops, PCs, Desktops, Workstations, Procurement
    if (
      query.includes('laptop') ||
      query.includes('desktop') ||
      query.includes('pc') ||
      query.includes('computer') ||
      query.includes('workstation') ||
      query.includes('hardware') ||
      query.includes('dell') ||
      query.includes('hp') ||
      query.includes('lenovo') ||
      query.includes('thinkpad') ||
      query.includes('macbook') ||
      query.includes('kharidna') ||
      query.includes('chahiye')
    ) {
      return {
        text: `💻 **N4T Hardware & Enterprise Workstation Supply:**\n\n` +
          `We provide bulk and commercial hardware procurement with enterprise warranty & pre-configured deployment:\n\n` +
          `• **Business Laptops**: Lenovo ThinkPad, Dell Latitude / XPS, HP EliteBook, Apple MacBook.\n` +
          `• **Commercial Desktops**: Dell OptiPlex, HP ProDesk, Lenovo ThinkCentre, All-in-One PCs.\n` +
          `• **Engineering CAD & Render Rigs**: Multi-core Intel Core i7/i9, AMD Ryzen, Nvidia RTX GPUs.\n` +
          `• **Industrial Printers**: HP LaserJet duplex, Canon & Epson network high-volume multifunction copiers.\n` +
          `• **Enterprise Pricing**: Direct OEM distributor pricing with GST invoice & on-site warranty support.\n\n` +
          `Tell me your required quantity and specifications, and we will send a tailored proposal!`,
        actions: [
          { label: '💬 Inquire on WhatsApp', actionType: 'whatsapp', payload: 'Hi N4T, I need a bulk quote for commercial laptops and desktops.' },
          { label: '📝 Request Formal Quote', actionType: 'scroll', payload: 'contact' },
          { label: '📞 Speak with Sales: +91 7988678921', actionType: 'call', payload: '+917988678921' }
        ]
      };
    }

    // 2. Networking, Cabling, LAN, Wi-Fi, Fiber, Switch, Server Rack
    if (
      query.includes('network') ||
      query.includes('cable') ||
      query.includes('cabling') ||
      query.includes('lan') ||
      query.includes('wi-fi') ||
      query.includes('wifi') ||
      query.includes('router') ||
      query.includes('switch') ||
      query.includes('fiber') ||
      query.includes('cat6') ||
      query.includes('rack') ||
      query.includes('firewall') ||
      query.includes('fortinet') ||
      query.includes('sophos') ||
      query.includes('cisco')
    ) {
      return {
        text: `🌐 **N4T Structured Networking & Enterprise Connectivity:**\n\n` +
          `We design and install resilient high-speed infrastructure for modern offices, factories, and campuses:\n\n` +
          `• **Structured Cabling**: Turnkey CAT6 & CAT6A gigabit copper termination, patch cords, Fluke testing.\n` +
          `• **Optical Fiber**: Splicing, OTDR testing, low-latency backbone for multi-building facilities.\n` +
          `• **Seamless Wi-Fi 6**: High-density mesh access points (UniFi, Cisco, Aruba) with zero dead-zones.\n` +
          `• **Cyber Security Firewalls**: Fortinet FortiGate, Sophos UTM, Cisco Meraki (VPN, web filtering, anti-intrusion).\n` +
          `• **Server Racks**: 4U to 42U organized cabinets with cable management trays and PDUs.\n\n` +
          `Need an on-site survey or office layout design?`,
        actions: [
          { label: '💬 Book Site Survey via WhatsApp', actionType: 'whatsapp', payload: 'Hi N4T, I would like to schedule an on-site network cabling & Wi-Fi inspection.' },
          { label: '📝 Submit Requirements', actionType: 'scroll', payload: 'contact' }
        ]
      };
    }

    // 3. CCTV, Cameras, Surveillance, Biometric, Attendance, Access Control
    if (
      query.includes('cctv') ||
      query.includes('camera') ||
      query.includes('surveillance') ||
      query.includes('nvr') ||
      query.includes('dvr') ||
      query.includes('hikvision') ||
      query.includes('cp plus') ||
      query.includes('dahua') ||
      query.includes('biometric') ||
      query.includes('attendance') ||
      query.includes('access control') ||
      query.includes('fingerprint') ||
      query.includes('face')
    ) {
      return {
        text: `📹 **Enterprise CCTV Surveillance & Smart Access Control:**\n\n` +
          `Keep your workplace and assets safe with our high-definition optical security solutions:\n\n` +
          `• **IP CCTV Cameras**: 2MP, 4MP, 5MP & 4K Ultra-HD with Starlight full-color night vision.\n` +
          `• **Top Brands**: Authorized installation of Hikvision, CP Plus, Dahua, Honeywell.\n` +
          `• **Network Video Recorders (NVR)**: Scalable multi-terabyte storage with secure mobile app live stream.\n` +
          `• **Biometric Attendance**: Face recognition, contactless card, and fingerprint readers (Matrix, eSSL, Realtime).\n` +
          `• **Automated Access Locks**: Electromagnetic door locks, turnstile gates, and visitor logs.\n\n` +
          `How many cameras or access points do you require?`,
        actions: [
          { label: '💬 Inquire on WhatsApp', actionType: 'whatsapp', payload: 'Hi N4T, I need a quotation for CCTV cameras and biometric attendance system.' },
          { label: '📝 Fill Contact Form', actionType: 'scroll', payload: 'contact' }
        ]
      };
    }

    // 4. AMC, Annual Maintenance Contract, Pricing, Charges, Maintenance
    if (
      query.includes('amc') ||
      query.includes('contract') ||
      query.includes('maintain') ||
      query.includes('maintenance') ||
      query.includes('cost') ||
      query.includes('rate') ||
      query.includes('price') ||
      query.includes('pricing') ||
      query.includes('charge') ||
      query.includes('kitna') ||
      query.includes('kharcha')
    ) {
      return {
        text: `⚙️ **N4T IT Annual Maintenance Contract (AMC) Solutions:**\n\n` +
          `Prevent expensive operational downtimes with our certified IT care programs:\n\n` +
          `📋 **Standard Non-Comprehensive AMC (Labor Only):**\n` +
          `• **PC / Laptop**: ₹1,600 / machine / year\n` +
          `• **CCTV Camera**: ₹750 / camera / year\n` +
          `• **Server**: ₹4,500 / server / year\n` +
          `• Includes unlimited breakdowns, 30-min SLA, monthly health audits.\n\n` +
          `🛡️ **Comprehensive AMC (Parts + Labor Included):**\n` +
          `• **PC / Laptop**: ₹3,200 / machine / year\n` +
          `• **CCTV Camera**: ₹1,200 / camera / year\n` +
          `• **Server**: ₹8,500 / server / year\n` +
          `• 100% parts covered with instant standby machine replacement.\n\n` +
          `💡 *Tip: You can test our interactive AMC Calculator on this page!*`,
        actions: [
          { label: '🧮 Use AMC Calculator', actionType: 'scroll', payload: 'amc-calculator' },
          { label: '💬 Chat with AMC Head', actionType: 'whatsapp', payload: 'Hi N4T, I am interested in an Annual Maintenance Contract for our office IT infrastructure.' },
          { label: '📞 Call Direct: +91 7988678921', actionType: 'call', payload: '+917988678921' }
        ]
      };
    }

    // 5. Emergency, Breakdown, Urgent, Down, Virus, Crash, Visit, Repair
    if (
      query.includes('emergency') ||
      query.includes('urgent') ||
      query.includes('down') ||
      query.includes('crash') ||
      query.includes('virus') ||
      query.includes('repair') ||
      query.includes('broken') ||
      query.includes('kharab') ||
      query.includes('kharaab') ||
      query.includes('problem') ||
      query.includes('help') ||
      query.includes('engineer') ||
      query.includes('visit')
    ) {
      return {
        text: `🚨 **Emergency IT Breakdown Assistance (30-Min SLA):**\n\n` +
          `Facing critical IT failure, server crash, ransom threat, or network down?\n\n` +
          `• **Guaranteed Response**: Within 30 minutes, an engineer connects remotely or dispatches on-site.\n` +
          `• **Active Coverage**: Faridabad, Gurugram, Noida, Delhi NCR, and surrounding industrial clusters.\n` +
          `• **Hotline Available 24x7**: Call our rapid response engineering desk immediately!\n\n` +
          `Click below to call or send immediate WhatsApp alert:`,
        actions: [
          { label: '📞 Call Emergency Hotline Now', actionType: 'call', payload: '+917988678921' },
          { label: '🚨 Dispatch WhatsApp SOS Alert', actionType: 'whatsapp', payload: 'URGENT: I need emergency IT support for my office system/network down immediately.' }
        ]
      };
    }

    // 6. Location, Address, Where, Office, Faridabad, NCR, City, Map
    if (
      query.includes('location') ||
      query.includes('address') ||
      query.includes('office') ||
      query.includes('where') ||
      query.includes('kahan') ||
      query.includes('faridabad') ||
      query.includes('delhi') ||
      query.includes('noida') ||
      query.includes('gurgaon') ||
      query.includes('haryana')
    ) {
      return {
        text: `📍 **N4T (Network 4 Technologies) Location & Coverage:**\n\n` +
          `• **Headquarters**: Faridabad, Haryana - 121003, India\n` +
          `• **Service Coverage**: Faridabad, Gurugram, Noida, Greater Noida, Delhi NCR, and Pan-India enterprise deployments.\n` +
          `• **Support Desks**: On-site engineer dispatch & 24x7 remote technical assistance across India.\n\n` +
          `Would you like to schedule an office visit or have our representative visit your premises?`,
        actions: [
          { label: '💬 Message on WhatsApp', actionType: 'whatsapp', payload: 'Hi N4T, I would like to schedule a meeting at your Faridabad office or our facility.' },
          { label: '📞 Call +91 8901996668', actionType: 'call', payload: '+918901996668' }
        ]
      };
    }

    // 7. Contact, Phone, Number, Email, WhatsApp, Owner, Dubey
    if (
      query.includes('contact') ||
      query.includes('phone') ||
      query.includes('number') ||
      query.includes('mobile') ||
      query.includes('call') ||
      query.includes('email') ||
      query.includes('whatsapp') ||
      query.includes('dubey') ||
      query.includes('shailendra')
    ) {
      return {
        text: `📞 **N4T Direct Contact Information:**\n\n` +
          `• **Primary Phone / WhatsApp**: +91 7988678921\n` +
          `• **Alternate Hotline**: +91 8901996668\n` +
          `• **Official Email**: sbdubey@n4t.in / support@n4t.in\n` +
          `• **WhatsApp Quick Link**: [Click here to chat](https://wa.me/message/PTHIABDDRPO4E1)\n` +
          `• **Office**: Faridabad, Haryana - 121003\n` +
          `• **Operating Hours**: 24 Hours / 7 Days a week active support desk.\n\n` +
          `You can reach out anytime, we respond promptly!`,
        actions: [
          { label: '💬 Open WhatsApp Direct', actionType: 'whatsapp', payload: 'Hi N4T, I would like to speak with your IT team.' },
          { label: '📞 Call +91 7988678921', actionType: 'call', payload: '+917988678921' },
          { label: '📝 Fill Inquiries Form', actionType: 'scroll', payload: 'contact' }
        ]
      };
    }

    // 8. Hindi / Hinglish Greetings & General Inquiries
    if (
      query.includes('namaste') ||
      query.includes('hello') ||
      query.includes('hi') ||
      query.includes('hey') ||
      query.includes('kya hal') ||
      query.includes('kaise ho') ||
      query.includes('kya karte ho') ||
      query.includes('services')
    ) {
      return {
        text: `Hello! 👋 Main **N4T AI Assistant** hoon. \n\nNetwork 4 Technologies companies ko complete IT Solutions provide karti hai:\n\n` +
          `1. 🖥️ **Computer, Laptop & Printer Supply** (Dell, HP, Lenovo)\n` +
          `2. ⚙️ **IT AMC Contracts** (Har mahine regular maintenance & breakdown support)\n` +
          `3. 🌐 **Networking & Wi-Fi** (CAT6 LAN Cabling, Fiber, Firewall)\n` +
          `4. 📹 **CCTV & Biometric Attendance Systems**\n` +
          `5. 🚨 **Emergency 30-Minute IT Support**\n\n` +
          `Aapko kis service ki jaankari chahiye?`,
        actions: [
          { label: '💻 Hardware Quote', actionType: 'prompt', payload: 'I want quotation for office computers and laptops' },
          { label: '⚙️ AMC Rates', actionType: 'prompt', payload: 'What are the AMC contract charges for office computers?' },
          { label: '📹 CCTV Setup', actionType: 'prompt', payload: 'Tell me about CCTV camera installation' },
          { label: '💬 WhatsApp Chat', actionType: 'whatsapp', payload: 'Hi N4T, I want to know more about your IT services.' }
        ]
      };
    }

    // 9. Default Fallback with Comprehensive Options
    return {
      text: `Thank you for your inquiry! 🤝\n\n` +
        `**Network 4 Technologies (N4T)** is an ISO-certified enterprise IT infrastructure provider. We specialize in:\n\n` +
        `• **Hardware**: Corporate Laptops, Workstations, High-Speed Printers, Server Racks.\n` +
        `• **Networking**: Structured LAN, Fiber Splicing, Mesh Wi-Fi 6, Fortinet/Cisco Firewalls.\n` +
        `• **Security**: HD IP CCTV, Biometric Attendance, Access Control Systems.\n` +
        `• **Maintenance**: Comprehensive & Non-Comprehensive Annual IT AMC.\n` +
        `• **Emergency**: 30-minute rapid on-site technician response across Delhi NCR.\n\n` +
        `Would you like to speak directly with our senior engineer or receive a custom quote?`,
      actions: [
        { label: '💬 Connect on WhatsApp', actionType: 'whatsapp', payload: `Hi N4T, I have a requirement regarding: ${userQuery}` },
        { label: '📞 Call +91 7988678921', actionType: 'call', payload: '+917988678921' },
        { label: '📝 Request Formal Quote', actionType: 'scroll', payload: 'contact' }
      ]
    };
  };

  const handleSendMessage = (textToSend?: string) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMessage: ChatMessage = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: messageText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate natural AI thinking & response
    setTimeout(() => {
      const botResponse = generateBotReply(messageText);
      const botMessage: ChatMessage = {
        id: 'bot_' + Date.now(),
        sender: 'bot',
        text: botResponse.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: botResponse.actions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
      playChime();
      speakText(botResponse.text);

      if (!isOpen) {
        setHasUnread(true);
      }
    }, 600);
  };

  const handleActionClick = (action: { actionType: string; payload: string }) => {
    if (action.actionType === 'whatsapp') {
      const url = `https://wa.me/message/PTHIABDDRPO4E1?text=${encodeURIComponent(action.payload)}`;
      window.open(url, '_blank');
    } else if (action.actionType === 'call') {
      window.location.href = `tel:${action.payload}`;
    } else if (action.actionType === 'scroll') {
      const element = document.getElementById(action.payload);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (action.actionType === 'prompt') {
      handleSendMessage(action.payload);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: 'welcome_cleared',
        sender: 'bot',
        text: `**Chat reset.** How else can N4T IT Assistant help your organization today?`,
        timestamp: 'Just now',
        actions: [
          { label: '💻 Hardware Quote', actionType: 'prompt', payload: 'What laptops and PCs do you supply?' },
          { label: '⚙️ IT AMC Rates', actionType: 'prompt', payload: 'What are your AMC contract plans?' },
          { label: '📞 WhatsApp Live', actionType: 'whatsapp', payload: 'Hi N4T, I need assistance.' }
        ]
      }
    ]);
  };

  // Simple Markdown renderer for bold, bullet points, and links
  const renderFormattedText = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Check for bullet point
      const isBullet = line.trim().startsWith('•');
      // Format bold text **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);

      const parsedParts = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <div key={idx} className={`${isBullet ? 'pl-2 my-0.5' : 'my-1'} leading-relaxed`}>
          {parsedParts}
        </div>
      );
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Welcome Speech Bubble Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 text-xs text-slate-700 animate-bounce duration-1000">
          <div className="flex items-start space-x-2">
            <span className="text-xl">🤖</span>
            <div className="flex-1">
              <p className="font-bold text-primary-700">Need instant IT support or pricing?</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Chat with our 24x7 AI Assistant for quick quotes & assistance!</p>
            </div>
            <button 
              onClick={(e) => { e.stopPropagation(); setShowTooltip(false); }}
              className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              aria-label="Dismiss tooltip"
            >
              ×
            </button>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-blue-100 transform rotate-45"></div>
        </div>
      )}

      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative group flex items-center space-x-2.5 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white shadow-2xl hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none border border-white/20"
          aria-label="Open N4T AI Chatbot"
        >
          {/* Outer Pulsing Glow */}
          <span className="absolute -inset-1 rounded-full bg-blue-500 opacity-40 group-hover:opacity-75 animate-ping duration-1000 pointer-events-none"></span>

          {/* Robot / AI Icon */}
          <span className="relative z-10 flex items-center justify-center text-2xl">
            🤖
          </span>

          <div className="relative z-10 text-left">
            <div className="font-bold text-xs sm:text-sm tracking-wide flex items-center space-x-1.5 leading-tight">
              <span>Ask N4T AI</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <div className="text-[10px] text-cyan-200 font-medium leading-tight">
              24x7 IT Quotes & Help
            </div>
          </div>

          {/* Unread indicator badge */}
          {hasUnread && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 border-2 border-white animate-pulse"></span>
          )}
        </button>
      )}

      {/* Main Chatbot Window */}
      {isOpen && (
        <div className="flex flex-col w-[92vw] sm:w-[390px] md:w-[410px] h-[580px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden transform transition-all duration-300 ease-out animate-in fade-in zoom-in-95">
          
          {/* Top Bar Header */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 text-white p-4 flex items-center justify-between shadow-md">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                  <svg className="w-6 h-6 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="16" height="12" x="4" y="8" rx="2" />
                    <path d="M2 14h2" />
                    <path d="M20 14h2" />
                    <path d="M15 13v2" />
                    <path d="M9 13v2" />
                    <path d="M12 4v4" />
                    <circle cx="12" cy="3" r="1" />
                  </svg>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-blue-700"></span>
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base leading-tight font-display flex items-center">
                  N4T AI Assistant
                  <span className="ml-2 px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    24x7
                  </span>
                </h3>
                <p className="text-[11px] text-blue-100/90">Smart Enterprise IT Advisor</p>
              </div>
            </div>

            {/* Header Control Buttons */}
            <div className="flex items-center space-x-1.5">
              {/* Voice Readout Toggle */}
              <button
                onClick={() => setIsVoiceMuted(!isVoiceMuted)}
                className={`p-1.5 rounded-xl transition ${isVoiceMuted ? 'text-white/60 hover:text-white hover:bg-white/10' : 'text-emerald-300 bg-white/10'}`}
                title={isVoiceMuted ? 'Voice muted (Click to unmute)' : 'Voice active (Click to mute)'}
                aria-label="Toggle voice readout"
              >
                {isVoiceMuted ? (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M11 5L6 9H2v6h4l5 4V5z" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                )}
              </button>

              {/* Reset Chat */}
              <button
                onClick={handleClearChat}
                className="p-1.5 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition"
                title="Restart chat"
                aria-label="Restart chat"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition"
                aria-label="Close Chat"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/70 text-xs sm:text-sm">
            {messages.map(msg => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-none'
                  }`}
                >
                  {renderFormattedText(msg.text)}

                  {/* Message Action Chips / Buttons */}
                  {msg.actions && msg.actions.length > 0 && (
                    <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {msg.actions.map((act, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleActionClick(act)}
                          className="px-2.5 py-1.5 rounded-xl text-[11px] font-semibold bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white border border-blue-200/80 transition-all duration-150 flex items-center space-x-1"
                        >
                          <span>{act.label}</span>
                          <span className="text-[10px] opacity-70">&rarr;</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-slate-400 mt-1 px-1">
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center space-x-2 bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 w-24 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-100/90 border-t border-slate-200 overflow-x-auto no-scrollbar flex items-center space-x-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 flex-shrink-0">
              Quick:
            </span>
            <button
              onClick={() => handleSendMessage('Give me a quote for commercial laptops and desktops')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition whitespace-nowrap flex-shrink-0"
            >
              💻 Laptop & PC Quote
            </button>
            <button
              onClick={() => handleSendMessage('Calculate AMC for 15 PCs and 8 CCTVs')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition whitespace-nowrap flex-shrink-0"
            >
              ⚙️ Calculate AMC
            </button>
            <button
              onClick={() => handleSendMessage('What are your CCTV camera installation rates and brands?')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition whitespace-nowrap flex-shrink-0"
            >
              📹 CCTV Setup
            </button>
            <button
              onClick={() => handleSendMessage('We need urgent on-site engineer support')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 transition whitespace-nowrap flex-shrink-0"
            >
              🚨 Emergency Visit
            </button>
            <button
              onClick={() => handleSendMessage('Where is your Faridabad office located?')}
              className="text-[11px] px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 transition whitespace-nowrap flex-shrink-0"
            >
              📍 Office Location
            </button>
          </div>

          {/* Input & Send Bar */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
            {/* Speech to text microphone button */}
            <button
              type="button"
              onClick={toggleSpeechRecognition}
              className={`p-2.5 rounded-xl transition ${
                isListening
                  ? 'bg-rose-500 text-white animate-pulse'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
              title={isListening ? 'Listening... click to stop' : 'Speak your question (Voice input)'}
              aria-label="Voice input"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                <line x1="12" y1="19" x2="12" y2="22" />
              </svg>
            </button>

            {/* Text Input */}
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isListening ? 'Listening to your voice...' : 'Ask about laptops, AMC, CCTV, Wi-Fi...'}
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition"
            />

            {/* Send Button */}
            <button
              type="button"
              onClick={() => handleSendMessage()}
              disabled={!input.trim()}
              className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed shadow-md transition"
              aria-label="Send message"
            >
              <svg className="w-4 h-4 transform rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>

          {/* Footer branding */}
          <div className="bg-slate-50 px-3 py-1.5 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
            <span>Network 4 Technologies • 24x7 IT Hub</span>
            <span className="flex items-center text-emerald-600 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1"></span>
              Faridabad & Pan-India
            </span>
          </div>

        </div>
      )}
    </div>
  );
};

export default AIChatBot;
