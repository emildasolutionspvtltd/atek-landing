import React, { useEffect, useRef } from 'react';
import { Lightbulb, BarChart3, TrendingUp, Target, Users, Zap } from 'lucide-react';

const InsightsIntroContent = () => {
  const sectionRef = useRef<HTMLElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
      <section ref={sectionRef} className="py-24 sm:py-32 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/person-working-html-computer.jpg')] bg-cover bg-center bg-no-repeat opacity-30"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <Target className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Expert Technology Insights</span>
          </div>
          
          <h1 className="animate-on-scroll text-4xl sm:text-5xl md:text-7xl font-bold text-neutral-900 mb-8 sm:mb-10 leading-tight px-2 sm:px-0">
            Transform Your Business with 
            <br />
            <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 bg-clip-text text-transparent font-serif-display font-normal italic animate-gradient-shift bg-300% bg-size-300">Expert Insights</span>
          </h1>
          
          <div className="animate-on-scroll max-w-4xl mx-auto mb-12 sm:mb-16">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/30 shadow-soft mb-8">
              <p className="text-xl sm:text-2xl md:text-3xl text-neutral-800 leading-relaxed font-light">
                Discover actionable intelligence, proven strategies, and cutting-edge solutions from ATEK IT's technology experts. 
                Stay ahead of the curve with insights that drive real business results.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10">
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                <Lightbulb className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Expert Perspectives</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                <BarChart3 className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Practical Solutions</span>
              </div>
              <div className="flex items-center justify-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                <TrendingUp className="h-5 w-5 text-accent-600 flex-shrink-0" />
                <span className="text-neutral-800 font-medium">Industry Trends</span>
              </div>
            </div>
            
            {/* Primary and Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#featured-topics"
                className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg shadow-large hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <span>Explore Latest Insights</span>
                  <TrendingUp className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
              
              <a
                href="#resource-library"
                className="group bg-white/80 backdrop-blur-sm border-2 border-primary-300 text-primary-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg shadow-medium hover:shadow-large hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                  <span>Download Resources</span>
                </div>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Scroll Indicator - Moved outside main content container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle group cursor-pointer z-10">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center transition-all duration-300 ease-in-out group-hover:border-primary-600 group-hover:shadow-lg group-hover:shadow-primary-200/50 group-hover:scale-110">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse transition-all duration-300 ease-in-out group-hover:bg-primary-600 group-hover:h-4 group-hover:animate-none"></div>
        </div>
        {/* Tooltip on hover */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">
          Scroll to explore insights
        </div>
      </div>
    </section>
  );
};

export default InsightsIntroContent;