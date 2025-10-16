
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-light text-dark">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
