import React, { useEffect, useRef } from 'react';
import { TrendingUp, Shield, Zap, Sparkles } from 'lucide-react';

const CompanyStats = () => {
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
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-br from-white via-neutral-50/50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <TrendingUp className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Impact</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Trusted by <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Industry Leaders</span>
          </h2>
          
          <p className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Our commitment to excellence has earned the trust of organizations worldwide, 
            delivering measurable results across diverse industries and technologies.
          </p>
        </div>

        {/* Stats Grid - Mobile: 1 column, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="animate-on-scroll max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-large border border-neutral-200/50">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { number: '63+', label: 'Active Clients', icon: TrendingUp, color: 'primary', description: 'Enterprise clients trust our solutions' },
                { number: '40+', label: 'In-House Experts', icon: Shield, color: 'secondary', description: 'Certified professionals on our team' },
                { number: '20+', label: 'Operational Locations', icon: Zap, color: 'accent', description: 'Global presence and delivery' },
                { number: '1', label: 'Game-Changing SaaS', icon: Sparkles, color: 'primary', description: 'ConsultPro revolutionizing operations' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    stat.color === 'primary' ? 'bg-gradient-to-br from-primary-500 to-primary-600' :
                    stat.color === 'secondary' ? 'bg-gradient-to-br from-secondary-500 to-secondary-600' :
                    'bg-gradient-to-br from-accent-500 to-accent-600'
                  } text-white shadow-medium`}>
                    <stat.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                  </div>
                  <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300 ${
                    stat.color === 'primary' ? 'text-primary-600' :
                    stat.color === 'secondary' ? 'text-secondary-600' :
                    'text-accent-600'
                  }`}>
                    {stat.number}
                  </div>
                  <div className="text-neutral-900 font-bold text-base sm:text-xl mb-1 sm:mb-2">{stat.label}</div>
                  <div className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="animate-on-scroll text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-large">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Join Our <span className="font-serif-display font-normal italic">Success Stories</span>?
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover how we can help your organization achieve similar results with our proven 
              technology solutions and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group bg-white text-primary-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-neutral-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
              
              <a
                href="/services/paypilot"
                className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Explore Pay Pilot</span>
                  <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;