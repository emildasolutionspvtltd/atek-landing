import React, { useEffect, useRef } from 'react';
import { BookOpen, Target, BarChart3, TrendingUp } from 'lucide-react';

const InsightsMainIntro = () => {
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
    <section ref={sectionRef} className="py-32 sm:py-40 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 sm:mb-24">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <BookOpen className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Insights, Resources & Industry Trends</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Actionable Intelligence for the <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Tech-Driven Enterprise</span>
          </h2>
          
          <div className="animate-on-scroll max-w-5xl mx-auto mb-14 space-y-8">
            {/* Icon-based content breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Expert Perspectives</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Welcome to the <span className="font-serif-display font-semibold">ATEK IT</span> Blog & Resource Center—your destination for expert perspectives and thought leadership.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                  <BarChart3 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Practical Insights</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Practical insights into the evolving world of technology consulting, SaaS innovation, DevOps, and cloud transformation.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-3">Stay Ahead</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  Whether you're a CTO exploring infrastructure automation or a consulting firm looking for operational efficiency, our content helps you stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsMainIntro;