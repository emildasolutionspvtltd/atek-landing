import React, { useEffect, useRef } from 'react';
import { Users, Zap, Target } from 'lucide-react';

const CareersHero = () => {
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

  return (
    <div className="relative overflow-hidden min-h-screen bg-[url('/asia-women.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      <section ref={heroRef} className="relative z-10 pt-24 pb-16">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
          <div className="w-full text-center mx-auto">
            {/* Trust Badge */}
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-12 shadow-soft">
              <Users className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Join Our Growing Team</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Main Headline - Centered with enhanced gradient */}
            <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 leading-tight max-w-6xl mx-auto text-center">
              Real Challenges. Real Growth.
              <br />
              Join the <span className="relative">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-serif-display font-normal italic text-shadow-lg">ATEK IT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-serif-display font-normal italic blur-sm opacity-50 -z-10">ATEK IT</span>
              </span> Team
            </h1>
            
            {/* Description text with proper centering */}
            <div className="animate-on-scroll max-w-4xl mx-auto mb-12 text-center">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                Build your career with cutting-edge technology projects and a team that values innovation, growth, and excellence.
              </p>
            </div>
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

export default CareersHero;