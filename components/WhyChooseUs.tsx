
import React from 'react';
import { UserTieIcon, ShieldIcon, HeartIcon } from './Icons';

const WhyChooseUs: React.FC = () => {
    return (
        <section id="why-us" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold relative inline-block mb-3 after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1/4 after:h-1 after:bg-gradient-to-r after:from-primary after:to-secondary">
                        Why Choose N4T?
                    </h2>
                    <p className="text-lg text-slate-600 mt-4 max-w-2xl mx-auto">We deliver exceptional IT solutions with unmatched service quality</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl mb-6">
                            <UserTieIcon className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Expertise</h4>
                        <p className="text-slate-600">Highly skilled and certified IT professionals with years of experience in the industry.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl mb-6">
                            <ShieldIcon className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Reliability</h4>
                        <p className="text-slate-600">We are committed to providing reliable and timely IT solutions to meet your business needs.</p>
                    </div>
                    <div className="bg-slate-50 border border-slate-200/50 rounded-xl p-8 text-center h-full transition-all duration-300 hover:shadow-xl hover:border-primary/50">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl mb-6">
                            <HeartIcon className="w-10 h-10" />
                        </div>
                        <h4 className="text-2xl font-bold mb-3">Customer Focus</h4>
                        <p className="text-slate-600">We prioritize customer satisfaction and strive to exceed your expectations with every interaction.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
