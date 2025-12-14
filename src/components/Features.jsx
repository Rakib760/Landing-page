import React from 'react';
import { Target, Users, Award, Clock, TrendingUp, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-world Projects",
      description: "Work on actual client projects and build your portfolio.",
      stat: "100+"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Mentorship",
      description: "Get guidance from senior developers and industry experts.",
      stat: "1:1"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Certification",
      description: "Receive official certification upon successful completion.",
      stat: "100%"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Hours",
      description: "Work remotely with flexible scheduling options.",
      stat: "24/7"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Growth",
      description: "High potential for full-time employment after internship.",
      stat: "85%"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Remote Work",
      description: "Work from anywhere in the world with our global team.",
      stat: "100%"
    }
  ];

  return (
    <section id="features" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Why Choose Sammunat
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Perfect Launchpad for Your Career
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our internship program is designed to provide you with the skills, 
              experience, and connections needed to kickstart your career in tech.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Hands-on Experience</h4>
                  <p className="text-gray-600">Work on real projects that matter, not just tutorials.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Portfolio Building</h4>
                  <p className="text-gray-600">Build an impressive portfolio that gets you hired.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${
                      index % 3 === 0 ? 'bg-blue-100 text-blue-600' :
                      index % 3 === 1 ? 'bg-purple-100 text-purple-600' :
                      'bg-amber-100 text-amber-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{feature.stat}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;