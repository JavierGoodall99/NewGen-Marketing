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
            <span className="text-electric-blue font-mono text-xs md:text-sm tracking-[0.2em] uppercase">Why Choose Us</span>
            <div className="w-8 md:w-12 h-[1px] bg-electric-blue shadow-[0_0_10px_#00F0FF]"></div>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl md:text-7xl font-bold leading-[0.95] mb-10 tracking-tight">
            Most Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Looks Good.</span> <span className="italic font-serif text-electric-blue">Very Little Works.</span>
          </h2>

          {/* Body Copy */}
          <div className="max-w-3xl mx-auto space-y-8 text-white/60 text-lg md:text-xl leading-relaxed font-light">
            <p>
              Most marketing today is designed to look impressive, not to deliver results for the business behind it. It attracts attention, but without a clear path to action, <strong className="text-white font-medium">that attention rarely turns into enquiries, customers, or revenue</strong> - leaving businesses visible, but stagnant.
            </p>
            <p>
              At NewGen Marketing, your social media is built to deliver results. Every campaign, post, and decision is geared toward <strong className="text-white">generating enquiries, attracting the right customers, and driving real sales.</strong> We measure success by what matters to your business - growth, demand, and revenue - not vanity metrics.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:gap-16 mt-16 pt-10 border-t border-white/10 max-w-2xl mx-auto" role="list" aria-label="Company statistics">
            <div role="listitem">
              <div className="font-display text-4xl md:text-6xl font-bold text-white mb-2" aria-label="500 million plus impressions">10M+</div>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-widest font-mono">Views</p>
            </div>
            <div role="listitem">
              <div className="font-display text-4xl md:text-6xl font-bold text-white mb-2" aria-label="300 percent average ROI growth">1000%+</div>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-widest font-mono">Engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};