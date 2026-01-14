import React from 'react';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'case-studies' | 'privacy-policy' | 'terms-of-service', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-black pt-32 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter mb-6 block">NEWGEN MARKETING<span className="text-electric-blue">.</span></span>
            <p className="text-white/50 text-sm leading-relaxed">
              The social agency for brands that refuse to be boring. We build culture, not just campaigns.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Sitemap</h4>
            <ul className="space-y-4 text-white/50 text-sm">
              <li 
                onClick={() => onNavigate('home')}
                className="hover:text-electric-blue cursor-pointer transition-colors"
              >
                Home
              </li>
              <li 
                onClick={() => onNavigate('case-studies')}
                className="hover:text-electric-blue cursor-pointer transition-colors"
              >
                Work
              </li>
              <li 
                onClick={() => onNavigate('home', 'services')}
                className="hover:text-electric-blue cursor-pointer transition-colors"
              >
                Services
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Socials</h4>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/newgenmarketing.zw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://www.facebook.com/share/1C2aPEHKPS/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://wa.me/263777084934" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Newsletter</h4>
            <div className="flex border-b border-white/20 pb-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-white/30"
              />
              <button className="text-electric-blue font-bold text-sm uppercase">Join</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/30 text-xs">
          <p>&copy; {new Date().getFullYear()} NewGen Marketing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span 
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy Policy
            </span>
            <span 
              onClick={() => onNavigate('terms-of-service')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms of Service
            </span>
          </div>
        </div>

        <div className="mt-20">
          <h1 className="text-[8vw] leading-none font-display font-black text-white/5 text-center select-none pointer-events-none">
            NEWGEN MARKETING
          </h1>
        </div>
      </div>
    </footer>
  );
};