
import React from 'react';
import { Code, Database, Globe, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Development",
      skills: ["Zoho Creator", "JavaScript", "HTML", "CSS", "API Integrations"]
    },
    {
      icon: Database,
      title: "Database & Analytics",
      skills: ["SQL", "Zoho Analytics", "Data Migration", "Reporting"]
    },
    {
      icon: Globe,
      title: "Web Technologies",
      skills: ["PHP", "MERN Stack", "RESTful APIs", "Web Integration"]
    },
    {
      icon: Layers,
      title: "Zoho Platform",
      skills: ["Deluge", "Zoho Flow", "Zoho Books", "Zoho CRM", "Zoho Desk"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Technical proficiency across multiple platforms and technologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-10 h-10 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-gray-50 px-3 py-2 rounded-lg text-sm text-gray-700">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
