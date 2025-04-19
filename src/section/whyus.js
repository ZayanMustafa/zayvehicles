'use client';

import { useEffect, useRef, useState } from 'react';
import { FiCheckCircle, FiDollarSign, FiAward } from 'react-icons/fi';

const WhyUs = () => {
  const [isWhyUsActive, setIsWhyUsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const whyUsRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  const sections = [
    {
      icon: <FiCheckCircle className="w-16 h-16 mb-6 text-amber-500" />,
      title: "Premium Quality",
      content: "Every vehicle in our collection undergoes a rigorous 200-point inspection process."
    },
    {
      icon: <FiDollarSign className="w-16 h-16 mb-6 text-amber-500" />,
      title: "Competitive Pricing",
      content: "We offer the best value in the market with transparent pricing options."
    },
    {
      icon: <FiAward className="w-16 h-16 mb-6 text-amber-500" />,
      title: "Award-Winning Service",
      content: "Recognized industry-wide for our exceptional customer service."
    }
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => console.log('Autoplay prevented:', error));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsWhyUsActive(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const currentWhyUsRef = whyUsRef.current;
    if (currentWhyUsRef) {
      observer.observe(currentWhyUsRef);
    }

    return () => {
      if (currentWhyUsRef) {
        observer.unobserve(currentWhyUsRef);
      }
    };
  });

  useEffect(() => {
    const content = contentRef.current;
    if (!content || !isWhyUsActive) return;
  
    const handleScroll = () => {
      if (!content) return;
  
      const { scrollTop, clientHeight } = content;
      const sectionHeight = clientHeight / sections.length;
      const newIndex = Math.floor(scrollTop / sectionHeight);
  
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
  
      if (scrollTop + clientHeight >= content.scrollHeight - 10) {
        setIsWhyUsActive(false);
      }
    };
  
    content.addEventListener('scroll', handleScroll);
    
    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll);
      }
    };
  }, [isWhyUsActive, activeIndex, sections.length]); 
  
  useEffect(() => {
    document.body.style.overflow = isWhyUsActive ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isWhyUsActive]);

  return (
    <section 
      ref={whyUsRef}
      className="relative min-h-[200vh] bg-white"
    >
      {/* Sticky container */}
      <div className={`sticky top-0 h-screen w-full ${isWhyUsActive ? 'pointer-events-none' : ''}`}>
        <div className="h-full flex flex-col lg:flex-row">
          {/* Video section (left) */}
          <div className="lg:w-1/2 h-full flex items-center justify-center p-8 bg-gray-50">
            <div className="relative w-full max-w-2xl h-3/4 rounded-xl overflow-hidden shadow-2xl">
              <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay
              >
                <source src="/promo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Content section (right) */}
          <div 
            ref={contentRef}
            className={`lg:w-1/2 h-full overflow-y-auto transition-opacity duration-300 ${isWhyUsActive ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="h-full flex flex-col justify-center px-8 py-12 lg:py-24">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
                Why Choose <span className="text-amber-500">ZayVehicles</span>?
              </h2>
              
              <div className="space-y-24">
                {sections.map((section, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  >
                    <div className="flex flex-col items-start">
                      {section.icon}
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                        {section.title}
                      </h3>
                      <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Empty space for normal scrolling */}
      <div className="h-screen w-full"></div>
    </section>
  );
};

export default WhyUs;