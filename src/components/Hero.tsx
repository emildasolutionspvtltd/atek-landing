import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';

const Hero = () => {
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
    <div className="relative overflow-hidden min-h-screen bg-[url('/try-check-this-intelligent-handsome-brunette-man-sitting-with-his-colleagues-front-computer-pointing-it-while-working-together.jpg')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <section ref={heroRef} className="relative z-10 pt-24 pb-16">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-soft">
              <Sparkles className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-700">Trusted by 63+ Enterprise Clients</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
              </div>
            </div>

            {/* Main Headline - Updated to use text-7xl for largest size */}
            <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
              Empowering Digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-300 font-serif-display font-normal italic">
                Transformation
              </span>
              <br />
              <span className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-medium">
                with Technology, Talent & Innovation
              </span>
            </h1>
            
            {/* Concise Description - Better Spacing */}
            <div className="animate-on-scroll max-w-5xl mx-auto mb-14 space-y-8">
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                ATEK IT delivers intelligent technology solutions across cloud, DevOps, networking, 
                and enterprise software development.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-soft">
                <p className="text-lg md:text-xl text-neutral-800 leading-relaxed">
                  Our flagship SaaS product, <strong className="text-primary-700 font-semibold">Pay Pilot</strong>: one SaaS platform that automates time tracking, invoicing, payroll, and client management for IT staffing—complete with live reports, smart reminders, and QuickBooks/Zoho sync.
                </p>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="animate-on-scroll flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <a
                href="/services/paypilot"
                className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-large hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore Pay Pilot</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </a>
              
              <a
                href="/contact"
                className="group bg-white/80 backdrop-blur-sm border-2 border-primary-300 text-primary-700 px-10 py-5 rounded-2xl font-semibold text-lg shadow-medium hover:shadow-large hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-3">
                  <PlayCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
                  <span>Book Free Consultation</span>
                </div>
              </a>
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

export default Hero;