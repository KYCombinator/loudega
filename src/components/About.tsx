
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="content-section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title reveal-on-scroll">About Loudega</h2>
          <p className="section-subtitle reveal-on-scroll">
            Building stronger neighborhoods through local ownership and food accessibility
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal-on-scroll">
            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-loudega-accent/20 to-transparent mix-blend-overlay"></div>
              {/* Replace with actual image */}
              <div className="w-full h-full bg-loudega-200"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="reveal-on-scroll">
              <h3 className="text-2xl font-medium mb-3">Our Mission</h3>
              <p className="text-loudega-700">
                Loudega is a community-driven initiative to establish neighborhood bodegas throughout Louisville, with a focus on areas experiencing food insecurity. We believe that everyone deserves access to fresh food and everyday essentials within walking distance of their homes.
              </p>
            </div>
            
            <div className="reveal-on-scroll">
              <h3 className="text-2xl font-medium mb-3">Community Ownership</h3>
              <p className="text-loudega-700">
                Our bodegas are more than just stores - they're community hubs owned and operated by local residents. This model creates sustainable jobs, builds neighborhood wealth, and ensures that stores truly serve the needs of the community.
              </p>
            </div>
            
            <div className="reveal-on-scroll">
              <h3 className="text-2xl font-medium mb-3">Addressing Food Deserts</h3>
              <p className="text-loudega-700">
                By strategically locating our stores in underserved neighborhoods, we're working to eliminate food deserts and provide equitable access to nutritious food options for all Louisville residents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
