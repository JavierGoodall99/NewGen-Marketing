import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'case-studies';
  onNavigate: (page: 'home' | 'case-studies', sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent, page: 'home' | 'case-studies', id?: string) => {
    e.preventDefault();
    onNavigate(page, id);
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'Work', page: 'case-studies' as const, id: undefined },
    { label: 'Services', page: 'home' as const, id: 'services' },
    { label: 'Pricing', page: 'home' as const, id: 'pricing' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
            ? 'bg-deep-black/80 backdrop-blur-md py-4 border-b border-white/5'
            : 'py-6 md:py-8'
          }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className="flex items-center gap-3 group cursor-pointer relative z-50"
            onClick={(e) => handleLinkClick(e, 'home')}
          >
            <img
              src="https://newgenmarketing.netlify.app/newgenlogoBG.png"
              alt="NewGen Logo"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,240,255,0.5)]"
            />
            <span className="font-display font-bold text-lg md:text-2xl tracking-tighter">
              NEWGEN MARKETING<span className="text-electric-blue">.</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.id ? `#${link.id}` : '#'}
                onClick={(e) => handleLinkClick(e, link.page, link.id)}
                className={`font-sans text-sm uppercase tracking-widest transition-colors relative group ${currentPage === link.page && !link.id ? 'text-electric-blue' : 'text-white/70 hover:text-electric-blue'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-[1px] bg-electric-blue transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.8)] ${(currentPage === link.page && !link.id) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white hover:text-electric-blue transition-colors relative z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-deep-black/95 backdrop-blur-xl md:hidden transition-all duration-300 flex items-center justify-center ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.id ? `#${link.id}` : '#'}
              onClick={(e) => handleLinkClick(e, link.page, link.id)}
              className={`font-display text-4xl font-bold tracking-tight transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                } ${currentPage === link.page && !link.id ? 'text-electric-blue' : 'text-white hover:text-electric-blue'
                }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};