import React, { useState } from 'react';
import people from '../../assets/people.png'

const testimonials = [
  {
    id: 1,
    quote: "OMG! I cannot believe that I have got a brand new landing page after getting this template we are able to use our most used e-commerce template with modern and trending design.",
    author: {
      name: "Mariana Dickey",
      role: "UI Designer",
      avatar: "/placeholder.svg?height=40&width=40"
    }
  },
  {
    id: 2,
    author: {
      name: "Jonathan Taylor",
      role: "CEO at Creativex",
      avatar: "/placeholder.svg?height=40&width=40"
    },
    quote: "The template is exactly what we were looking for. The design is clean and modern, and it was very easy to customize to our needs."
  }
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-16 bg-[#FFF5EB]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Testimonial Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What people say about us
            </h2>
            
            <div className="relative">
              <span className="text-8xl font-serif text-blue-200 absolute -top-8 -left-4">
                66
              </span>
              <div className="relative">
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {testimonials[activeTestimonial].quote}
                </p>
                
                <div className="flex items-center gap-6">
                  {/* Current Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonials[activeTestimonial].author.avatar}
                      alt={testimonials[activeTestimonial].author.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonials[activeTestimonial].author.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[activeTestimonial].author.role}
                      </p>
                    </div>
                  </div>

                  {/* Navigation Dots */}
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          activeTestimonial === index
                            ? 'bg-blue-500 w-6'
                            : 'bg-gray-300'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Illustration */}
          <div className="relative h-[400px] lg:h-[500px]">
            <img
              src={people}
              alt="People discussing"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

