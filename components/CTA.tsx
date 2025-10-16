
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="bg-gradient-to-br from-dark to-slate-800 text-white rounded-2xl p-12 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get a free quote today!</h2>
                    <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
                        Contact us to discuss your IT needs and discover how N4T can help your business thrive with our comprehensive technology solutions.
                    </p>
                    <a href="#contact"
                       onClick={(e) => {
                           e.preventDefault();
                           document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                       }}
                       className="inline-block bg-white text-dark font-bold py-3 px-10 rounded-full hover:bg-light hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        Contact Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CTA;
