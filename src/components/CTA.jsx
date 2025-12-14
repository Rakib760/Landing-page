import React, { useState } from 'react';
import { Send, Calendar, Clock, CheckCircle } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setEmail('');
  };

  const deadlines = [
    { label: "Early Decision", date: "Within 48 hours", color: "text-green-600" },
    { label: "Regular Deadline", date: "1 week", color: "text-amber-600" },
    { label: "Final Deadline", date: "2 weeks", color: "text-red-600" }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              {/* Left Side - Application Form */}
              <div className="md:w-1/2 p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                  Apply Now
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Submit Your Application
                </h2>
                <p className="text-gray-600 mb-8">
                  Complete the form below and we'll get back to you within 24 hours.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      GitHub Profile
                    </label>
                    <input
                      type="url"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                      placeholder="https://github.com/username"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Assignment Submission
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                      <div className="flex flex-col items-center justify-center">
                        <Send className="w-8 h-8 text-gray-400 mb-2" />
                        <p className="text-gray-600">Drag & drop your assignment files here</p>
                        <p className="text-sm text-gray-500 mt-1">or click to browse</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Application Submitted!
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
              
              {/* Right Side - Info */}
              <div className="md:w-1/2 bg-gradient-to-br from-primary to-secondary p-8 md:p-12 text-white">
                <div className="h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-8">
                      <Calendar className="w-6 h-6 mr-3" />
                      <h3 className="text-2xl font-bold">Important Deadlines</h3>
                    </div>
                    
                    <div className="space-y-6 mb-8">
                      {deadlines.map((deadline, index) => (
                        <div key={index} className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">{deadline.label}</span>
                            <span className={`font-bold ${deadline.color}`}>{deadline.date}</span>
                          </div>
                          <div className="mt-2 bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-white h-2 rounded-full"
                              style={{ width: `${100 - (index * 30)}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start mb-4">
                      <Clock className="w-6 h-6 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Application Tips</h4>
                        <ul className="space-y-2 text-blue-100">
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            Submit your assignment as soon as possible
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            Include clear documentation in your code
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            Deploy your project for easy access
                          </li>
                          <li className="flex items-center">
                            <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                            Make sure your design is responsive
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;