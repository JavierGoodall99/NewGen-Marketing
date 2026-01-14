import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-deep-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-electric-blue/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] bg-teal-500/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
            {/* Label */}
            <div className="flex items-center justify-center gap-2 mb-8">
                <div className="w-8 md:w-12 h-[1px] bg-electric-blue shadow-[0_0_10px_#00F0FF]"></div>
                <span className="text-electric-blue font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Who We Are</span>
                <div className="w-8 md:w-12 h-[1px] bg-electric-blue shadow-[0_0_10px_#00F0FF]"></div>
            </div>
            
            {/* Headline */}
            <h2 className="font-display text-4xl md:text-7xl font-bold leading-[0.95] mb-10 tracking-tight">
                We turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">noise</span> into <span className="italic font-serif text-electric-blue">narrative.</span>
            </h2>
            
            {/* Body Copy */}
            <div className="max-w-3xl mx-auto space-y-8 text-white/60 text-lg md:text-xl leading-relaxed font-light">
              <p>
                  NewGen Marketing isn't just another agency. We are a collective of digital natives, strategists, and creative rebels who understand that in the attention economy, <strong className="text-white font-medium">being boring is the only sin.</strong>
              </p>
              <p>
                  We bridge the gap between creative chaos and strategic precision. From <strong className="text-white">Facebook campaigns that dominate the feed</strong> to full-funnel acquisition strategies that break revenue records, we engineer digital ecosystems that force algorithms to pay attention.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 md:gap-16 mt-16 pt-10 border-t border-white/10 max-w-2xl mx-auto">
                <div>
                    <h4 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">500M+</h4>
                    <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-mono">Impressions</p>
                </div>
                <div>
                    <h4 className="font-display text-4xl md:text-6xl font-bold text-white mb-2">300%</h4>
                    <p className="text-white/40 text-xs md:text-sm uppercase tracking-widest font-mono">Avg. ROI Growth</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};