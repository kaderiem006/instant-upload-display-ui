
import React from 'react';
import { Settings, Zap, Link, MessageSquare, Code, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Zoho Development",
      description: "Customized development to streamline workflows and enhance productivity."
    },
    {
      icon: Zap,
      title: "Zoho Customization",
      description: "Adapting Zoho to fit specific business requirements and processes."
    },
    {
      icon: Link,
      title: "Zoho Integrations",
      description: "Integrating Zoho seamlessly with existing systems and third-party applications."
    },
    {
      icon: MessageSquare,
      title: "Zoho Consulting",
      description: "Strategic advice for maximizing Zoho's capabilities and business growth."
    },
    {
      icon: Code,
      title: "Custom App Building",
      description: "Creating targeted applications within Zoho to meet unique business needs."
    },
    {
      icon: Clock,
      title: "Flexible Engagement",
      description: "Hourly or project-based flexible engagement options to suit your needs."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive Zoho solutions to transform your business operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
