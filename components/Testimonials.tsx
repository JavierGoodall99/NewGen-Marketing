import React, { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Lara Hair',
    role: 'Founder',
    company: 'Silver Creations',
    quote: "NewGen’s marketing expertise has definitely made an impact on our business. Working with them has led to increased sales and a stronger brand presence. We recommend NewGen to anyone looking to elevate their business.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '2',
    author: 'Executive Team',
    role: 'COO',
    company: 'LG Plast',
    quote: "NewGen Marketing has greatly exceeded our expectations. The level of brand awareness we've achieved in such a short time was actually surprising. That shift has translated directly into our sales. Thank you to Hamza and the team for the great work.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '3',
    author: 'Fungai Moyo',
    role: 'Director',
    company: 'Excel Auto Parts',
    quote: "We are very happy to be working with NewGen Marketing. Because of their marketing strategy, we've had a congestion of customers enquiring about our products. They are doing a very good job for us. We would highly recommend their business.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '4',
    author: 'Abdullah Siam',
    role: 'Owner',
    company: 'Ace of Shawarma',
    quote: "NewGen Marketing taught me the importance of social media marketing. Through them, and public opinion, I was able to better my business. I learnt a long term marketing strategy I can use for my business.",
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  {
    id: '5',
    author: 'Tagonswa',
    role: 'Board of Directors',
    company: 'LG Plast',
    quote: "We've really enjoyed working with NewGen Marketing. They're flexible, easy to deal with, and the whole process has been fun and straightforward. The quality of their images and videos is excellent, and the content has helped attract customers and send real inquiries directly to our sales team.",
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 md:py-32 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-display text-4xl md:text-7xl font-bold uppercase mb-20 text-center">
          What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Clients Say</span>
        </h2>

        <div className="max-w-6xl mx-auto relative px-4 md:px-20">
          
          {/* Navigation Buttons - Absolute positioning outside content */}
          <button 
            onClick={prev}
            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-electric-blue transition-all backdrop-blur-sm group z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          
          <button 
            onClick={next}
            className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-electric-blue transition-all backdrop-blur-sm group z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center text-center" key={currentIndex}>
            
            {/* Image */}
            <div className="mb-6 relative animate-fade-in-up">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-1 bg-gradient-to-br from-electric-blue to-teal-400 mx-auto relative z-10">
                <img
                  src={current.image}
                  alt={current.author}
                  className="w-full h-full rounded-full object-cover border-2 border-black"
                />
              </div>
            </div>
            
            {/* Quote */}
            <div className="max-w-4xl mx-auto mb-8 min-h-[300px] md:min-h-[200px] flex items-center justify-center">
              <p className="text-lg md:text-2xl md:leading-relaxed font-medium text-white font-display">
                "{current.quote}"
              </p>
            </div>
            
            {/* Author Info */}
            <div className="bg-white/5 px-6 py-3 rounded-full border border-white/10 backdrop-blur-sm">
              <h3 className="font-display font-bold text-base md:text-lg text-white mb-0.5">{current.author}</h3>
              <p className="text-electric-blue font-mono text-xs tracking-widest uppercase">
                {current.role}, {current.company}
              </p>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center gap-6 mt-12 md:hidden">
            <button onClick={prev} className="p-3 rounded-full bg-white/10 text-white">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 rounded-full bg-white/10 text-white">
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-16">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentIndex 
                    ? 'w-12 bg-gradient-to-r from-electric-blue to-teal-400 shadow-[0_0_15px_rgba(0,240,255,0.5)]' 
                    : 'w-2 bg-white/10 hover:bg-white/30'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};