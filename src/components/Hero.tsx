
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const button = buttonRef.current;
    
    if (title) {
      setTimeout(() => {
        title.classList.add('is-revealed');
      }, 100);
    }
    
    if (subtitle) {
      setTimeout(() => {
        subtitle.classList.add('is-revealed');
      }, 300);
    }
    
    if (button) {
      setTimeout(() => {
        button.classList.add('is-revealed');
      }, 500);
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-[#f8f9fa] z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>
      
      {/* Gradient Accent */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-loudega-accent opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-loudega-accent opacity-10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 reveal-on-scroll"
          >
            Empowering Communities with <span className="text-loudega-accent">Local Bodegas</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-loudega-700 mb-8 max-w-2xl mx-auto reveal-on-scroll"
          >
            Loudega creates accessible, community-owned corner stores that strengthen neighborhoods and build economic resilience in Louisville.
          </p>
          
          <div ref={buttonRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal-on-scroll">
            <Button
              className="bg-loudega-accent hover:bg-loudega-accent/90 text-white px-8 py-6 text-lg rounded-lg"
              onClick={() => window.open('https://kycombinator.typeform.com/loudega', '_blank')}
            >
              Apply to the Program
            </Button>
            <Button variant="outline" className="border-loudega-300 text-loudega-800 hover:bg-loudega-50 px-8 py-6 text-lg rounded-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
