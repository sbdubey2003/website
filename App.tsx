import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AMCCalculator from './components/AMCCalculator';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#060913] text-slate-100 antialiased selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <AMCCalculator />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <AIChatBot />
    </div>
  );
};

export default App;
