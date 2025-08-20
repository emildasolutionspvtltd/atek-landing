import React, { useEffect, useRef } from 'react';
import { Users, Target, Heart } from 'lucide-react';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const AboutHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(heroRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  return (
    <div
      className="relative overflow-hidden min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/about professionals.jpg')" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <section ref={heroRef} className="relative z-10 pt-32 pb-16">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full text-center">
            {/* Trust Badge */}
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-soft">
              <Heart className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Driven by Innovation & Excellence</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Main Headline - Updated to use text-7xl for largest size */}
            <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight text-center mx-auto">
              About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-300 font-serif-display font-normal italic">
                ATEK IT
              </span>
            </h1>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHero;