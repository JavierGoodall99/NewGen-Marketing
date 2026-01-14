import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'case-studies';
  onNavigate: (page: 'home' | 'case-studies', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'case-studies', id?: string) => {
    e.preventDefault();
    setIsMobileOpen(false);
    onNavigate(page, id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-deep-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'py-6 md:py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 group cursor-pointer"
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          <img 
            src="https://newgenmarketing.netlify.app/newgenlogoBG.png" 
            alt="NewGen Logo" 
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          />
          <span className="font-display font-bold text-lg md:text-2xl tracking-tighter">NEWGEN MARKETING<span className="text-electric-blue">.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
           <a 
              href="#work"
              onClick={(e) => handleLinkClick(e, 'case-studies')}
              className={`font-sans text-sm uppercase tracking-widest transition-colors relative group ${currentPage === 'case-studies' ? 'text-electric-blue' : 'text-white/70 hover:text-electric-blue'}`}
            >
              Work
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-electric-blue transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.8)] ${currentPage === 'case-studies' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
            
            <a 
              href="#services"
              onClick={(e) => handleLinkClick(e, 'home', 'services')}
              className="font-sans text-sm uppercase tracking-widest text-white/70 hover:text-electric-blue transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            </a>

            <a 
              href="#pricing"
              onClick={(e) => handleLinkClick(e, 'home', 'pricing')}
              className="font-sans text-sm uppercase tracking-widest text-white/70 hover:text-electric-blue transition-colors relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-blue transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(0,240,255,0.8)]" />
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2 hover:text-electric-blue transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-deep-black z-40 flex flex-col items-center justify-center gap-10 transition-transform duration-500 ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <a 
            href="#work"
            onClick={(e) => handleLinkClick(e, 'case-studies')}
            className="font-display text-4xl md:text-5xl font-bold text-white hover:text-electric-blue transition-colors"
          >
            Work
          </a>
          <a 
            href="#services"
            onClick={(e) => handleLinkClick(e, 'home', 'services')}
            className="font-display text-4xl md:text-5xl font-bold text-white hover:text-electric-blue transition-colors"
          >
            Services
          </a>
          <a 
            href="#pricing"
            onClick={(e) => handleLinkClick(e, 'home', 'pricing')}
            className="font-display text-4xl md:text-5xl font-bold text-white hover:text-electric-blue transition-colors"
          >
            Pricing
          </a>
      </div>
    </nav>
  );
};