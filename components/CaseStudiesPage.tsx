import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './Button';

interface CaseStudyData {
  id: string;
  client: string;
  title: string;
  category: string;
  year: string;
  description: string;
  images: string[];
  stats: { label: string; value: string }[];
}

const cases: CaseStudyData[] = [
  {
    id: '1',
    client: 'Kreckle',
    title: 'Kreckle Foods',
    category: 'Paid Social & Branding',
    year: '2024',
    description: 'We helped Kreckle establish a powerful digital presence through strategic social media campaigns and cohesive branding. Our high-impact visuals and targeted ads drove massive engagement and brand recognition.',
    images: [
      '/Kreckle/casestudy1.jpg',
      '/Kreckle/casestudy2.jpg',
      '/Kreckle/casestudy3.jpg',
      '/Kreckle/casestudy4.jpg',
      '/Kreckle/casestudy5.jpg',
      '/Kreckle/casestudy6.jpg',
      '/Kreckle/casestudy8.jpg',
    ],
    stats: [
      { label: 'Impressions', value: '10M+' },
      { label: 'Engagement', value: '350%' },
      { label: 'Brand Awareness', value: '2x' }
    ]
  },
  {
    id: '2',
    client: 'LG Plast',
    title: 'LG Plast',
    category: 'Strategy & Web Design',
    year: '2024',
    description: 'LG Plast needed a digital transformation to match their industry-leading products. We created a sleek, professional web experience and social presence that positions them as the go-to plastics manufacturer.',
    images: [
      '/LGplast/casestudy1.jpg',
      '/LGplast/casestudy2.jpg',
      '/LGplast/casestudy3.jpg',
      '/LGplast/casestudy4.jpg',
      '/LGplast/casestudy7.jpg',
    ],
    stats: [
      { label: 'Lead Generation', value: '180%' },
      { label: 'Website Traffic', value: '5x' },
      { label: 'Conversion Rate', value: '12%' }
    ]
  },
  {
    id: '3',
    client: 'RKtech',
    title: 'RKtech',
    category: 'Content Production',
    year: '2024',
    description: 'We positioned RKtech as innovators in the tech space through compelling content and strategic Meta campaigns. Our approach combined thought leadership with viral-worthy creative that resonated with their audience.',
    images: [
      '/RKtech/casestudy1.jpg',
      '/RKtech/casestudy2.jpg',
      '/RKtech/casestudy3.jpg',
      '/RKtech/casestudy4.jpg',
      '/RKtech/casestudy5.jpg',
    ],
    stats: [
      { label: 'Reach', value: '8M+' },
      { label: 'Leads', value: '5k+' },
      { label: 'ROAS', value: '4.5x' }
    ]
  },
  {
    id: '4',
    client: 'Tagonswa',
    title: 'Tagonswa Hardware',
    category: 'Paid Social & Community',
    year: '2024',
    description: 'Tagonswa Hardware came to us with a vision to expand their reach. We built a comprehensive social strategy that connected them with their community while scaling their message to a broader audience.',
    images: [
      '/Tagonswa/casestudy1.jpg',
      '/Tagonswa/casestudy2.jpg',
      '/Tagonswa/casestudy3.jpg',
      '/Tagonswa/casestudy5.jpg',
      '/Tagonswa/casestudy6.jpg',
    ],
    stats: [
      { label: 'Community Growth', value: '200%' },
      { label: 'Engagement', value: '450%' },
      { label: 'Event Signups', value: '3k+' }
    ]
  },
  {
    id: '5',
    client: 'TotalEnergies',
    title: 'Total Energies',
    category: 'Strategy & Branding',
    year: '2024',
    description: 'We partnered with TotalEnergies to amplify their sustainability message and brand presence across digital platforms. Our campaigns highlighted their commitment to a greener future while driving unprecedented engagement.',
    images: [
      '/TotalEnergies/casestudy1.jpg',
      '/TotalEnergies/casestudy2.jpg',
      '/TotalEnergies/casestudy3.jpg',
      '/TotalEnergies/casestudy4.jpg',
      '/TotalEnergies/casestudy5.jpg',
    ],
    stats: [
      { label: 'Impressions', value: '25M+' },
      { label: 'Brand Sentiment', value: '+85%' },
      { label: 'Campaign Reach', value: '10x' }
    ]
  }
];

// Image Carousel Component with swipe support
interface ImageCarouselProps {
  images: string[];
  title: string;
  year: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, title, year }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50) {
      goToPrev();
    } else if (translateX < -50) {
      goToNext();
    }
    setTranslateX(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentX = e.clientX;
    const diff = currentX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50) {
      goToPrev();
    } else if (translateX < -50) {
      goToNext();
    }
    setTranslateX(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTranslateX(0);
    }
  };

  return (
    <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/10 bg-black/50 group max-h-[400px] md:max-h-[500px]">
      {/* Image Container */}
      <div
        ref={containerRef}
        className="relative cursor-grab active:cursor-grabbing select-none h-full"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex transition-transform duration-300 ease-out h-full"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${isDragging ? translateX : 0}px))`,
            transition: isDragging ? 'none' : 'transform 0.3s ease-out'
          }}
        >
          {images.map((image, idx) => (
            <div key={idx} className="w-full flex-shrink-0 flex items-center justify-center h-full">
              <img
                src={image}
                alt={`${title} - Image ${idx + 1}`}
                className="max-w-full max-h-[400px] md:max-h-[500px] w-auto h-auto object-contain pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-electric-blue/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 hover:bg-black/80 backdrop-blur-sm p-2 md:p-3 rounded-full border border-white/20 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 md:w-2.5 md:h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex
                ? 'bg-electric-blue scale-125'
                : 'bg-white/40 hover:bg-white/60'
                }`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      )}

      {/* Floating Badge */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20 bg-black/50 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10">
        <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{year}</span>
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-black/50 backdrop-blur-md px-3 py-1 md:px-4 md:py-2 rounded-full border border-white/10">
          <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
};


interface CaseStudiesPageProps {
  onBack: () => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 pb-12 md:pt-32 md:pb-20 min-h-screen bg-deep-black">
      {/* Header */}
      <div className="container mx-auto px-6 mb-12 md:mb-24">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-white/50 hover:text-electric-blue mb-8 md:mb-12 transition-colors uppercase tracking-widest text-xs font-bold"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>

        <h1 className="font-display text-5xl md:text-9xl font-bold uppercase tracking-tighter mb-6 md:mb-8">
          Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-teal-400">Works</span>
        </h1>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl leading-relaxed">
          We don't just make noise. We make history. Here is a curated selection of brands we've helped launch into the stratosphere using the power of Meta.
        </p>
      </div>

      {/* Case Studies List */}
      <div className="container mx-auto px-6 space-y-20 md:space-y-32">
        {cases.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col lg:flex-row gap-8 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Image Section */}
            <div className="w-full lg:w-3/5 cursor-none-target relative">
              <ImageCarousel
                images={project.images}
                title={project.title}
                year={project.year}
              />
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-2/5">
              <span className="text-electric-blue font-mono text-xs md:text-sm tracking-widest uppercase mb-3 md:mb-4 block">
                {project.category}
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-[0.95] group-hover:text-electric-blue transition-colors">
                {project.title}
              </h2>
              <div className="h-[2px] w-20 bg-white/20 mb-6 md:mb-8" />
              <p className="text-white/60 leading-relaxed mb-8 md:mb-10 text-base md:text-lg">
                {project.description}
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10 border-t border-white/10 pt-6 md:pt-8">
                {project.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display font-bold text-xl md:text-3xl text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] md:text-xs text-white/40 uppercase tracking-wider font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full md:w-auto">
                View Case Study <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-6 mt-20 md:mt-40 border-t border-white/10 pt-12 md:pt-20 text-center">
        <h3 className="font-display text-4xl md:text-6xl font-bold mb-6 md:mb-8">
          SEEN ENOUGH?
        </h3>
        <Button onClick={onBack} className="w-full md:w-auto">
          Work with us
        </Button>
      </div>
    </div>
  );
};