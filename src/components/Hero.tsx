import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, PlayCircle, Sparkles } from 'lucide-react';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Configurable image positioning - adjust these percentages as needed
  const imagePositionX = '50%'; // Horizontal position (0% = left, 50% = center, 100% = right)
  const imagePositionY = '30%'; // Vertical position (0% = top, 50% = center, 100% = bottom)

  const slides = [
    { image: '/slide1.jpg', alt: 'Slide 1' },
    { image: '/slide2.jpg', alt: 'Slide 2' },
    { image: '/slide3.jpg', alt: 'Slide 3' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  // Initialize smooth animations
  useEffect(() => {
    const observer = initSmoothAnimations(heroRef.current);
    return () => cleanupAnimations(observer);
  }, []);



  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: `${imagePositionX} ${imagePositionY}` }}
            />
          </div>
        ))}
      </div>

      {/* Vignette overlay for content visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>



      <section ref={heroRef} className="relative z-10 min-h-screen flex items-center pt-20">
        <div className="relative max-w-8xl mx-auto px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Trust Badge - Moved down to prevent header overlap */}
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-soft mt-8">
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

        {/* Scroll Indicator - Moved to bottom where pagination used to be */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce-gentle z-20">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;