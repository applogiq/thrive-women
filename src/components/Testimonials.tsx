'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Entrepreneur',
    content: 'Through Thrive Women, I gained the confidence and skills to start my own business. The mentorship program connected me with incredible women who believed in my vision.',
    image: '/api/placeholder/80/80',
    company: 'Tech Innovations Inc.'
  },
  {
    id: 2,
    name: 'Maria Rodriguez',
    role: 'Software Developer',
    content: 'The coding bootcamp changed my life completely. From having no technical background to landing my dream job in just 6 months. The community support is unmatched.',
    image: '/api/placeholder/80/80',
    company: 'Digital Solutions'
  },
  {
    id: 3,
    name: 'Aisha Patel',
    role: 'Financial Advisor',
    content: 'The financial literacy courses and micro-funding program helped me establish my consultancy. Now I help other women achieve financial independence.',
    image: '/api/placeholder/80/80',
    company: 'Wealth Builders'
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-purple-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Your support is vital to help us reach and empower
          </h2>
          <h3 className="text-3xl font-bold text-purple-600 mb-6">
            more individuals like them.
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">&quot;</span>
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonials[currentTestimonial].content}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-purple-600 text-sm">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-purple-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Skill Development</h4>
                  <p className="text-gray-600 text-sm">Professional training and certification programs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Mentorship Network</h4>
                  <p className="text-gray-600 text-sm">Connect with industry leaders and successful women</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 6a2 2 0 114 0 2 2 0 01-4 0zm8 0a2 2 0 114 0 2 2 0 01-4 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Financial Support</h4>
                  <p className="text-gray-600 text-sm">Micro-loans and funding opportunities for entrepreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}