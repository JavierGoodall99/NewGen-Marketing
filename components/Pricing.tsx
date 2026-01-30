import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Business Growth Partnership',
      description: 'For businesses that want their social media to look credible and intentional. We take responsibility for giving your brand a clear social media direction and a professional, consistent presence.',
      features: [
        { title: 'Consistent Market Visibility', desc: 'Reach approximately 20,000 – 70,000 people per month across Zimbabwe' },
        { title: 'Strategic Foundation', desc: 'We establish a clear social media strategy to communicate your business messages' },
        { title: 'Professional Page Management', desc: 'Your social media is shaped to reflect a serious, trustworthy business' },
        { title: 'Audience Alignment', desc: 'Your content is positioned in front of people relevant to your business, not just anyone' },
      ],
      highlight: false
    },
    {
      name: 'Market Domination Partnership',
      description: 'For businesses that want to dominate attention in their space',
      features: [
        { title: 'Nationwide Market Penetration', desc: 'Your brand reaches 150,000 - 500,000 people per month across Zimbabwe' },
        { title: 'Premium Content Creation', desc: 'Content is created to the highest standard so your brand looks professional, premium, and credible' },
        { title: 'Customer Acquisition Focus', desc: 'Social media is structured to attract potential customers, not just followers' },
        { title: 'Enquiry Path Creation', desc: 'Your page is intentionally shaped to move viewers toward messaging, enquiries, and conversations' },
        { title: 'Performance-Based Optimisation', desc: 'Decisions are refined based on what drives real responses' },
      ],
      highlight: true
    },
    {
      name: 'Stand Alone Partnership',
      description: 'For businesses that want to dominate their entire market',
      features: [
        { title: 'Market-Wide Visibility', desc: 'Your brand reaches 1,000,000 – 3,000,000 people per month across Zimbabwe, creating unavoidable presence' },
        { title: 'Industry Ownership', desc: 'We shape your messaging so your business becomes the obvious choice within your category' },
        { title: 'Competitive Saturation', desc: 'Your brand is placed consistently in front of your market, making competitors feel invisible by comparison' },
        { title: 'High-Impact Creative Direction', desc: 'All creative decisions are guided to command attention, authority, and memorability at scale' },
      ],
      highlight: false
    }
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-deep-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] md:w-[1000px] h-[300px] md:h-[600px] bg-electric-blue/5 rounded-full blur-[100px] md:blur-[150px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-7xl font-bold uppercase mb-4 md:mb-6">
            Choose your level of <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">growth</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative p-6 md:p-8 rounded-3xl backdrop-blur-sm border transition-all duration-500 group flex flex-col h-full
                ${tier.highlight
                  ? 'bg-white/5 border-electric-blue shadow-[0_0_50px_rgba(0,240,255,0.15)] z-10 md:scale-110'
                  : 'bg-neutral-900/20 border-white/10 hover:border-white/30 hover:-translate-y-2'
                }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-electric-blue text-black text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_10px_#00F0FF]">
                  Most Popular
                </div>
              )}

              <div className="mb-6 md:mb-8 text-center md:text-left">
                <h3 className={`font-display text-xl md:text-2xl uppercase tracking-widest font-bold mb-4 ${tier.highlight ? 'text-electric-blue' : 'text-white/50'}`}>
                  {tier.name}
                </h3>
                <p className="text-white/60 text-sm mt-4 leading-relaxed min-h-[3rem]">
                  {tier.description}
                </p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8 md:mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className={`mt-1 min-w-[1.25rem] h-5 rounded-full flex items-center justify-center ${tier.highlight ? 'bg-electric-blue text-black' : 'bg-white/10 text-white'}`}>
                        <Check size={10} strokeWidth={4} />
                      </div>
                      <div>
                        <strong className="block text-white/90 font-medium">{feature.title}</strong>
                        <span className="text-white/50 text-xs block mt-0.5">{feature.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => {
                  const message = `I'm interested in the ${tier.name}`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(`https://wa.me/263777084934?text=${encodedMessage}`, '_blank');
                }}
                variant={tier.highlight ? 'primary' : 'outline'}
                className="w-full mt-auto"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};