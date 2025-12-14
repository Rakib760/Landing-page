import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const features = [
    'No setup fees',
    'Flexible pricing',
    '24/7 Support',
    'Free 30-day trial'
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column */}
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                ✨ Internship Opportunity Open
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Digital Presence with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {' '}Sammunat
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Join our innovative team and build amazing digital experiences. 
                We're looking for passionate React developers for our internship program.
              </p>
              
              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex items-center justify-center">
                  Apply for Internship
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 px-6 rounded-lg border border-gray-300 transition duration-300">
                  View Projects
                </button>
              </div>
            </div>
            
            {/* Right Column - Stats Card */}
            <div className="lg:w-2/5">
              <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">98%</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Success Rate</h3>
                  <p className="text-gray-600 mt-2">Of our interns receive job offers</p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">React.js Projects</span>
                    <span className="font-bold text-gray-900">50+</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b">
                    <span className="text-gray-600">Interns Hired</span>
                    <span className="font-bold text-gray-900">120+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Satisfaction Rate</span>
                    <span className="font-bold text-gray-900">4.9/5</span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <p className="text-sm text-gray-500 text-center">
                    Early submissions receive priority review
                  </p>
                  <div className="mt-4 bg-gray-100 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-3/4"></div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    74% of positions filled
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;