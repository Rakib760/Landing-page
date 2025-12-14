import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Former Intern → Full Stack Developer",
      content: "The internship at Sammunat completely transformed my career. The hands-on React projects and mentorship helped me land my dream job.",
      rating: 5,
      avatar: "AJ"
    },
    {
      name: "Maria Chen",
      role: "UI/UX Designer",
      content: "Working with the design team at Sammunat gave me the confidence to lead projects. The portfolio I built here opened so many doors.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "David Park",
      role: "React Developer",
      content: "Best decision I ever made! The code reviews and pair programming sessions improved my skills faster than any course could.",
      rating: 5,
      avatar: "DP"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hear From Our Former Interns
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it. See what our alumni have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 relative border border-gray-100"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200" />
              
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
                <span className="ml-2 text-gray-600 font-semibold">{testimonial.rating}.0</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h3>
              <p className="text-blue-100">
                Submit your assignment early for priority review. Limited spots available for our upcoming cohort.
              </p>
            </div>
            <div className="lg:w-1/3 flex justify-center lg:justify-end">
              <button className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;