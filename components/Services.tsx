import React from 'react';
import { Zap, Globe, TrendingUp, Camera, Palette, Users } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Social Media Page Creation & Management',
    icon: 'globe'
  },
  {
    id: '2',
    title: 'Lead Generation for Your Sales Teams',
    icon: 'users'
  },
  {
    id: '3',
    title: 'Professional Graphic Design & Content Creation',
    icon: 'palette'
  },
  {
    id: '4',
    title: 'Professional Photography & Videography',
    icon: 'camera'
  },
  {
    id: '5',
    title: 'Brand Strategy & Market Positioning',
    icon: 'trend'
  },
  {
    id: '6',
    title: 'Sales-Driven Paid Advertising',
    icon: 'zap'
  }
];

const IconMap = {
  trend: TrendingUp,
  camera: Camera,
  globe: Globe,
  zap: Zap,
  palette: Palette,
  users: Users
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-deep-black relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="font-display text-4xl md:text-7xl font-bold uppercase">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = IconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative p-6 md:p-8 border border-white/10 hover:border-electric-blue/50 bg-neutral-900/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col justify-center h-full min-h-[200px] md:min-h-[250px]"
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    <div className="p-3 md:p-4 bg-white/5 rounded-full text-electric-blue group-hover:bg-electric-blue group-hover:text-black transition-colors duration-300">
                      <Icon size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="font-mono text-white/60 text-lg md:text-xl" aria-hidden="true">0{index + 1}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight group-hover:text-electric-blue transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};