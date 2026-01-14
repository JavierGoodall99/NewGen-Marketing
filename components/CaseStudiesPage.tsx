import React, { useEffect } from 'react';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Button } from './Button';
import { CaseStudy } from '../types';

const cases: CaseStudy[] = [
  {
    id: '1',
    client: 'Neon Pulse',
    title: 'Redefining Energy Drinks',
    category: 'Paid Social & Branding',
    year: '2024',
    description: 'We took a generic energy drink and turned it into a lifestyle icon. Through a series of high-energy, meme-centric Facebook campaigns and retargeting flows, we dominated the feed for 3 months straight.',
    image: 'https://images.unsplash.com/photo-1626307416562-ee839676ac5e?q=80&w=2670&auto=format&fit=crop',
    stats: [
      { label: 'Impressions', value: '45M+' },
      { label: 'Sales Increase', value: '230%' },
      { label: 'Community Growth', value: '150k' }
    ]
  },
  {
    id: '2',
    client: 'Velvet AI',
    title: 'The Future of Fashion Tech',
    category: 'Strategy & Web Design',
    year: '2023',
    description: 'Velvet needed to bridge the gap between high fashion and cold code. We created a visually stunning, immersive digital experience that feels less like a tool and more like an art gallery.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    stats: [
      { label: 'Waitlist Signups', value: '12k' },
      { label: 'Conversion Rate', value: '8.5%' },
      { label: 'Awards Won', value: '3' }
    ]
  },
  {
    id: '3',
    client: 'Urban Drift',
    title: 'Streetwear Launch Campaign',
    category: 'Content Production',
    year: '2024',
    description: 'A gritty, underground campaign optimized for Meta platforms. We bypassed traditional ads and went straight for culture hacking, organizing events that went viral across Facebook Groups.',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2670&auto=format&fit=crop',
    stats: [
      { label: 'Sold Out In', value: '48 Hrs' },
      { label: 'Shares', value: '85k' },
      { label: 'ROAS', value: '5.0x' }
    ]
  },
  {
    id: '4',
    client: 'Krypto Go',
    title: 'Simplifying Web3 for the Masses',
    category: 'UX/UI & Education',
    year: '2023',
    description: 'Crypto is confusing. We fixed that. By breaking down complex topics into bite-sized, colorful content for Facebook and Instagram, we built a community of educated investors from scratch.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2670&auto=format&fit=crop',
    stats: [
      { label: 'Community Size', value: '50k+' },
      { label: 'App Downloads', value: '200k' },
      { label: 'Retention', value: 'High' }
    ]
  }
];

interface CaseStudiesPageProps {
  onBack: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-deep-black">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 md:mb-24">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-white/50 hover:text-electric-blue mb-8 md:mb-12 transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        
        <h1 className="font-display text-5xl md:text-9xl font-bold uppercase tracking-tighter mb-6 md:mb-8">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Works</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          We don't just make noise. We make history. Here is a curated selection of brands we've helped launch into the stratosphere using the power of Meta.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="container mx-auto px-6 space-y-20 md:space-y-32">
        {cases.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-3/5 group cursor-none-target relative">
              <div className="relative overflow-hidden rounded-2xl md:rounded-3xl aspect-video md:aspect-[4/3] border border-white/10">
                 <div className="absolute inset-0 bg-electric-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                 />
                 
                 {/* Floating Badge */}
                 <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/50 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10">
                   <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{project.year}</span>
                 </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5">
              <span className="text-electric-blue font-mono text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                {project.category}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[0.95] group-hover:text-electric-blue transition-colors">
                {project.title}
              </h2>
              <div className="h-[2px] w-20 bg-white/20 mb-6 md:mb-8" />
              <p className="text-white/60 leading-relaxed mb-8 md:mb-10 text-base md:text-lg">
                {project.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 border-t border-white/10 pt-6 md:pt-8">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-xl md:text-3xl text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full md:w-auto">
                View Case Study <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 mt-20 md:mt-40 border-t border-white/10 pt-12 md:pt-20 text-center">
          <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 md:mb-8">
             SEEN ENOUGH?
          </h3>
          <Button onClick={onBack} className="w-full md:w-auto">
            Work with us
          </Button>
      </div>
    </div>
  );
};