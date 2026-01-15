import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Preloader } from './components/Preloader';
import { CaseStudiesPage } from './components/CaseStudiesPage';
import { PrivacyPolicyPage } from './components/PrivacyPolicyPage';
import { TermsOfServicePage } from './components/TermsOfServicePage';
import { About } from './components/About';

export type Page = 'home' | 'case-studies' | 'privacy-policy' | 'terms-of-service';

function App() {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page, sectionId?: string) => {
    setCurrentPage(page);
    
    // Handle scrolling
    setTimeout(() => {
      if (page === 'home') {
        if (sectionId) {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  const isLegalPage = currentPage === 'privacy-policy' || currentPage === 'terms-of-service';

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <main className="bg-deep-black min-h-screen text-white selection:bg-electric-blue selection:text-black">
        {!isLegalPage && (
          <Navbar 
            currentPage={currentPage === 'home' || currentPage === 'case-studies' ? currentPage : 'home'} 
            onNavigate={(page, id) => handleNavigate(page as Page, id)} 
          />
        )}
        
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <Services />
            <Testimonials />
            <Pricing />
            
            {/* Call to Action Section */}
            <section id="contact" className="py-32 bg-gradient-to-r from-cyan-400 to-blue-600 text-black relative overflow-hidden">
              <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="font-display text-5xl md:text-8xl font-black mb-8 tracking-tighter">
                  READY TO <br/> GET CUSTOMERS?
                </h2>
                <p className="text-xl md:text-2xl font-sans mb-12 max-w-2xl mx-auto font-medium opacity-90">
                  Stop posting into the void. Let's build a strategy that actually converts.
                </p>
                <a 
                  href="https://wa.me/263777084934"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block px-12 py-5 bg-black text-white rounded-full font-bold text-lg uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-2xl hover:shadow-cyan-500/50"
                >
                  Skip the Wait - Message Us
                </a>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 text-9xl font-black rotate-12 mix-blend-overlay">#</div>
                <div className="absolute bottom-10 right-10 text-9xl font-black -rotate-12 mix-blend-overlay">@</div>
              </div>
            </section>
          </>
        ) : currentPage === 'case-studies' ? (
          <CaseStudiesPage onBack={() => handleNavigate('home')} />
        ) : currentPage === 'privacy-policy' ? (
          <PrivacyPolicyPage onBack={() => handleNavigate('home')} />
        ) : (
          <TermsOfServicePage onBack={() => handleNavigate('home')} />
        )}

        <Footer onNavigate={handleNavigate} />
      </main>
    </>
  );
}

export default App;