import React from 'react';
import { Quote } from 'lucide-react';
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
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12 md:mb-20 relative z-10">
        <h2 className="font-display text-4xl md:text-7xl font-bold uppercase mb-4 md:mb-6 text-center">
          Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Obsession</span>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient Masks for edges to create fade effect */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full z-20 bg-gradient-to-r from-deep-black to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full z-20 bg-gradient-to-l from-deep-black to-transparent pointer-events-none" />

        <div className="flex gap-6 md:gap-8 group">
           {/* First copy of the list */}
           <div className="flex shrink-0 gap-6 md:gap-8 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
             {testimonials.map((t) => (
               <div 
                key={`a-${t.id}`}
                className="w-[85vw] sm:w-[400px] md:w-[500px] flex-shrink-0 glass-card p-6 md:p-12 rounded-3xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 group/card"
               >
                  <Quote className="text-electric-blue mb-4 md:mb-6 opacity-50 group-hover/card:opacity-100 transition-opacity" size={32} />
                  <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8 text-white/90">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/10 group-hover/card:border-electric-blue/50 transition-colors"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base md:text-lg text-white">{t.author}</h4>
                      <p className="text-white/50 text-xs md:text-sm">{t.role}, {t.company}</p>
                    </div>
                  </div>
               </div>
             ))}
           </div>

           {/* Second copy for seamless loop */}
           <div className="flex shrink-0 gap-6 md:gap-8 animate-marquee group-hover:[animation-play-state:paused]" style={{ animationDuration: '30s' }}>
             {testimonials.map((t) => (
               <div 
                key={`b-${t.id}`}
                className="w-[85vw] sm:w-[400px] md:w-[500px] flex-shrink-0 glass-card p-6 md:p-12 rounded-3xl border border-white/5 hover:border-electric-blue/30 transition-all duration-300 group/card"
               >
                  <Quote className="text-electric-blue mb-4 md:mb-6 opacity-50 group-hover/card:opacity-100 transition-opacity" size={32} />
                  <p className="text-lg md:text-2xl font-medium leading-relaxed mb-6 md:mb-8 text-white/90">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={t.image} 
                      alt={t.author} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 border-white/10 group-hover/card:border-electric-blue/50 transition-colors"
                    />
                    <div>
                      <h4 className="font-display font-bold text-base md:text-lg text-white">{t.author}</h4>
                      <p className="text-white/50 text-xs md:text-sm">{t.role}, {t.company}</p>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </section>
  );
};