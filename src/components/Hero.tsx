
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            src="/lovable-uploads/e0b2217f-751d-4886-926c-7c7ef93022de.png"
            alt="Abdul Kader"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover shadow-xl"
          />
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            ABDUL KADER
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-orange-500 font-semibold mb-6">
            ZOHO EXPERT & CONSULTANT
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I am a Zoho expert specializing in Zoho development, customization, integrations, 
            consulting, and custom app building since 2015. My expertise lies in streamlining 
            workflows, adapting Zoho to unique needs, and system integrations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              View Services
            </a>
          </div>
          
          <div className="mt-12">
            <a href="#about" className="inline-block animate-bounce">
              <ArrowDown className="w-6 h-6 text-gray-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
