import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const tiers = [
    {
      name: 'Starter Package',
      price: '$250–300',
      period: '/ month',
      description: 'Perfect for startups and small businesses getting serious about their online presence.',
      features: [
        { title: 'Social Media Page Management', desc: 'Facebook, Instagram, and other key platforms' },
        { title: 'Ad Account Setup', desc: 'Professional setup and configuration' },
        { title: 'Foundational Branding', desc: 'Logos, bios, highlights, and brand consistency' },
        { title: 'Regular Content Posts', desc: 'On-brand content creation and scheduling' },
        { title: 'Basic Graphic Design & Editing', desc: 'Professional visuals for your content' },
        { title: '1x Professional Photoshoot', desc: 'High-quality images for your brand' },
        { title: 'Monthly Check-ins', desc: 'Growth strategy and performance reviews' },
      ],
      highlight: false
    },
    {
      name: 'Stand-Out Package',
      price: '$400–750',
      period: '/ month',
      description: 'For brands ready to scale, with more firepower behind every post and ad.',
      features: [
        { title: 'Everything in Starter', desc: 'All features from the Starter package included' },
        { title: 'Advanced Content Strategy', desc: 'Strategic planning for maximum engagement' },
        { title: 'Weekly Progress Updates', desc: 'Regular performance reports and insights' },
        { title: 'Upgraded Design & Animations', desc: 'Premium graphics and animated content' },
        { title: 'Multi-Platform Management', desc: 'Facebook, Instagram, LinkedIn, and more' },
        { title: 'Targeted Ad Campaigns', desc: 'Initial optimization and audience targeting' },
        { title: 'Priority Support', desc: 'Faster response times and dedicated assistance' },
      ],
      highlight: true
    },
    {
      name: 'Domination Package',
      price: '$1,100–2,000',
      period: '/ month',
      description: 'For businesses ready to own the space. This is high-impact, full-funnel marketing.',
      features: [
        { title: 'Elite-Level Branding & Positioning', desc: 'Premium brand strategy and market positioning' },
        { title: 'Premium Social Media Design', desc: 'Professional page design and ad account setup' },
        { title: 'Conversion-Optimized Campaigns', desc: 'A/B testing and performance optimization' },
        { title: 'Sales Funnel Design & Retargeting', desc: 'Complete funnel strategy with ad retargeting' },
        { title: 'Monthly Marketing Plan', desc: 'Tailored strategy aligned with your goals' },
        { title: 'Bi-weekly Strategy Calls', desc: 'Regular strategy sessions and planning' },
        { title: 'Dedicated Campaign Manager', desc: 'Personal account manager for your campaigns' },
        { title: 'Full Analytics & Performance', desc: 'Comprehensive reporting and breakdowns' },
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
            Invest in <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Impact</span>
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
                <h3 className={`font-display text-lg md:text-xl uppercase tracking-widest font-bold mb-4 ${tier.highlight ? 'text-electric-blue' : 'text-white/50'}`}>
                  {tier.name}
                </h3>
                <div className="flex flex-col xl:flex-row xl:items-baseline gap-1">
                  <span className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-white/40 font-sans text-sm">{tier.period}</span>
                </div>
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
                variant={tier.highlight ? 'primary' : 'outline'} 
                className="w-full mt-auto"
              >
                Choose {tier.name.split(' ')[0]}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};