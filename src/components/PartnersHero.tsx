import React, { useEffect, useRef } from 'react';
import { Users, Handshake, Target } from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';
import { Marquee } from './Marquee';

const PartnersHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Partner logos array - moved from PartnersContent
  const partnerLogos = [
    { 
      src: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png', 
      alt: 'Oracle',
      name: 'Oracle'
    },
    { 
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png', 
      alt: 'AWS',
      name: 'AWS'
    },
    { 
      src: 'https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png', 
      alt: 'Microsoft',
      name: 'Microsoft'
    },
    { 
      src: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png', 
      alt: 'Google',
      name: 'Google'
    },
    { 
      src: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg', 
      alt: 'Cisco',
      name: 'Cisco'
    },
    { 
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/2048px-Microsoft_Azure.svg.png', 
      alt: 'Azure',
      name: 'Azure'
    },
  ];
  return (
    <AuroraBackground className="relative overflow-hidden bg-gradient-to-br from-white to-neutral-100 min-h-screen">
      <section ref={heroRef} className="relative z-10 pt-24 pb-16">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-8 shadow-soft">
              <Handshake className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Strategic Technology Partnerships</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Main Headline - Updated to use text-7xl for largest size */}
            <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-10 leading-tight">
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-300 font-serif-display font-normal italic">
                Partners
              </span>
            </h1>
            
            {/* Partner Logos Marquee - Moved from Technology Partners section */}
            <div className="animate-on-scroll mb-16">
              <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light mb-8">
                We collaborate with industry-leading technology companies to deliver exceptional solutions for our clients.
              </p>
              
              {/* Marquee Container */}
              <div className="relative">
                <Marquee pauseOnHover className="[--duration:30s] [--gap:2rem]">
                  {partnerLogos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-56 h-28 bg-white/80 backdrop-blur-sm rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 w-auto max-w-[200px] object-contain transition-all duration-300"
                        onError={(e) => {
                          console.log(`Failed to load image: ${logo.src}`);
                          // Fallback to text if image fails
                          e.currentTarget.style.display = 'none';
                          const parent = e.currentTarget.parentElement;
                          if (parent && !parent.querySelector('.fallback-text')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-text text-lg font-semibold text-gray-700';
                            fallback.textContent = logo.name;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default PartnersHero;