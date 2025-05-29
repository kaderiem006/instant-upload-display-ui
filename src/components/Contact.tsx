
import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageSquare, User, Linkedin, Facebook } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: User,
      label: "Name",
      value: "Abdul Kader"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dhaka, Bangladesh"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+8801733687284"
    },
    {
      icon: Mail,
      label: "Email",
      value: "akader@infitarit.com"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.infitarit.com"
    }
  ];

  const socialLinks = [
    {
      icon: Phone,
      label: "Phone",
      value: "+8801733687284",
      href: "tel:+8801733687284"
    },
    {
      icon: MessageSquare,
      label: "Skype",
      value: "mdkaderjohn",
      href: "skype:mdkaderjohn?chat"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "itabdulkader",
      href: "https://linkedin.com/in/itabdulkader"
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "kaderjohn3",
      href: "https://facebook.com/kaderjohn3"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Info</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with Zoho? Let's discuss your project
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-semibold mb-8">Connect With Me</h3>
              <div className="space-y-6">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="flex items-center space-x-4 hover:text-orange-400 transition-colors"
                    >
                      <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{social.label}</p>
                        <p className="text-white font-medium">{social.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © 2024 Abdul Kader. All rights reserved. | Zoho Expert & Consultant
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
