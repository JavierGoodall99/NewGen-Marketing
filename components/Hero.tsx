import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onNavigate: (page: 'home' | 'case-studies') => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-20 md:pt-20 md:pb-40 overflow-hidden bg-deep-black">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px] animate-blob mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-electric-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-blob animation-delay-2000 mix-blend-screen" />

      {/* Grid Pattern Overlay for Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mt-10">
          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.95] md:leading-[0.9] tracking-tighter mb-8 md:mb-12 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
            WE MAKE BRANDS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">IMPOSSIBLE</span> <br />
            <span className="italic font-serif text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">TO IGNORE.</span>
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
            <Button onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }} className="w-full sm:w-auto">
              Start Project <ArrowRight size={18} />
            </Button>
            <Button variant="outline" onClick={() => onNavigate('case-studies')} className="w-full sm:w-auto">
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      {/* Marquee - Straight horizontal anchored to bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-electric-blue py-4 md:py-6 border-t border-black relative overflow-hidden shadow-[0_-20px_60px_rgba(0,240,255,0.15)]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-black font-display font-black text-3xl md:text-5xl mx-4 md:mx-8 uppercase flex items-center gap-4 md:gap-8">
                 Strategy <span className="text-white/60">•</span> 
                 Content <span className="text-white/60">•</span> 
                 Virality <span className="text-white/60">•</span> 
                 Growth <span className="text-white/60">•</span>
                 Community <span className="text-white/60">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};