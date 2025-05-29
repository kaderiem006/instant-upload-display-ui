
import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  const highlights = [
    "8+ years of Zoho expertise since 2015",
    "Strategic consulting for business growth",
    "Custom application development",
    "System integration specialist",
    "Cost-effective, high-quality solutions"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Zoho Expert & Business Consultant
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I provide strategic consulting to help businesses maximize Zoho's potential and 
                build custom applications tailored to specific requirements. With in-depth knowledge 
                of Zoho CRM, Books, Inventory, Billing, Desk, Analytics, Flow, and Creator.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                I deliver cost-effective, high-quality solutions that enhance automation, efficiency, 
                and business growth across various industries.
              </p>
              
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-700">Location:</span>
                  <span className="text-gray-600 ml-2">Dhaka, Bangladesh</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Experience:</span>
                  <span className="text-gray-600 ml-2">8+ Years in Zoho</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Specialization:</span>
                  <span className="text-gray-600 ml-2">Zoho Development & Integration</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Engagement:</span>
                  <span className="text-gray-600 ml-2">Hourly or Project-based</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
