import React from 'react';
import { IconBrandWhatsapp, IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";

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
            <h3 className="font-bold text-lg mb-6 text-white">Sitemap</h3>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-electric-blue cursor-pointer transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('case-studies')}
                  className="hover:text-electric-blue cursor-pointer transition-colors text-left"
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'services')}
                  className="hover:text-electric-blue cursor-pointer transition-colors text-left"
                >
                  Services
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Socials</h3>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/newgenmarketing.zw/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={18} />
              </a>
              <a
                href="https://www.facebook.com/share/1C2aPEHKPS/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={18} />
              </a>
              <a
                href="https://wa.me/263777084934"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-electric-blue hover:text-black hover:border-electric-blue transition-all"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Newsletter</h3>
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

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/60 text-xs">
          <p>&copy; {new Date().getFullYear()} NewGen Marketing. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button
              onClick={() => onNavigate('privacy-policy')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('terms-of-service')}
              className="hover:text-white cursor-pointer transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};