import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Zap, Settings, BarChart, Shield, Star, Target, TrendingUp } from 'lucide-react';

const WhyAtekIT = () => {
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

  const features = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Proven Consulting Expertise",
      description: "Decades of experience guiding clients through digital transformation across healthcare, tech, education, logistics, and professional services.",
      color: "primary"
    },
    {
      icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "SaaS Products with Real-World Impact",
      description: "Our proprietary platform PayPilot is built to solve real consulting operations pain points—time tracking, payroll, billing, and reporting—under one intelligent roof.",
      color: "secondary"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Agile Delivery Excellence",
      description: "We use Scrum & Agile frameworks to ensure adaptability and efficiency in every engagement, delivering results 40% faster than industry standards.",
      color: "accent"
    },
    {
      icon: <BarChart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Integrated Technology Stack",
      description: "From Zoho Books to QuickBooks to CSV-based bank reconciliation, our solutions are compatible and scalable across your entire ecosystem.",
      color: "primary"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Transparent Collaboration",
      description: "Real-time project management, milestone tracking, and client-access dashboards for full visibility into every aspect of your project.",
      color: "secondary"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-gradient-to-br from-white via-neutral-50/50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <Star className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Why Industry Leaders Choose Us</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Why Choose <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">ATEK IT</span>?
          </h2>
          
          {/* Enhanced paragraph with inline 3D-style icons - FIXED */}
          <div className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            <p className="flex flex-wrap items-center justify-center gap-2 mb-4">
              <span>We deliver impact-driven technology solutions that align with your</span>
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-primary-200 px-3 py-1 rounded-full border border-primary-300/50 shadow-sm">
                <Target className="h-4 w-4 sm:h-5 sm:w-5 text-primary-600 drop-shadow-sm" />
                <span className="font-semibold text-primary-700">goals</span>
              </span>
              <span> & </span>
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary-100 to-secondary-200 px-3 py-1 rounded-full border border-secondary-300/50 shadow-sm">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-600 drop-shadow-sm" />
                <span className="font-semibold text-secondary-700">streamline operations</span>
              </span>
              <span> & </span>
              <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-100 to-accent-200 px-3 py-1 rounded-full border border-accent-300/50 shadow-sm">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-accent-600 drop-shadow-sm" />
                <span className="font-semibold text-accent-700">drive growth</span>
              </span>
            </p>
            <p>
              Our deep domain knowledge, agile execution, and cutting-edge 
              innovations empower organizations to scale confidently.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
  {features.map((feature, index) => (
    <div
      key={index}
      className={`animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50 
        ${features.length % 2 !== 0 && index === features.length - 1 ? "lg:col-span-2 lg:mx-auto lg:w-1/2" : ""}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Gradient Border Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
      ></div>

      <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
        <div
          className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
        >
          {feature.icon}
        </div>

        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
            {feature.title}
          </h3>

          <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Bottom CTA Section */}
        <div className="animate-on-scroll text-center bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-large">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience the <span className="font-serif-display font-normal italic">ATEK IT</span> Difference?
          </h3>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join 63+ enterprise clients who trust us to deliver exceptional technology solutions that drive real business results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/about"
              className="group bg-white text-primary-700 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-neutral-50 transition-all duration-300 font-semibold text-sm sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Learn About Our Approach</span>
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            
            <a
              href="/contact#contact-section"
              className="group border-2 border-white/30 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAtekIT;