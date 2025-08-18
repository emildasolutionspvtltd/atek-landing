import React, { useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

const ConsultPro = () => {
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
    "Automated Invoicing & Payment Reconciliation",
    "Payroll Calculations & Advance Deductions", 
    "Role-Based Access for Admins, Clients, and Consultants Real-Time Reporting & Exportable Data (CSV/Excel)",
    "Seamless integrations with Zoho, QuickBooks, and bank systems (manual or webhook-based)"
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-gradient-to-br from-primary-50/50 via-white to-secondary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-30"></div>
      <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-secondary-100 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <Sparkles className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent">
              Flagship SaaS Product
            </span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            <img 
              src="/PAY PILOT 2nd Variation-05-05.png" 
              alt="PayPilot" 
              className="inline-block h-12 sm:h-20 md:h-44 w-auto mx-auto"
            />
            <br />
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-700">Your Consulting Operations Hub</span>
          </h2>
          
          <p className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-5xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2 sm:px-0">
            Pay Pilot is our flagship SaaS product designed to help IT consulting firms, staffing 
            companies, and professional services businesses manage their operations with unprecedented efficiency.
          </p>

          {/* Dashboard Image - Hidden on Mobile */}
          <div className="animate-on-scroll mb-8 sm:mb-12 hidden md:block">
            <img 
              src="/Screenshot 2025-08-08 094954.png" 
              alt="ConsultPro Dashboard Interface"
              className="rounded-2xl sm:rounded-3xl shadow-large w-full h-auto max-w-4xl mx-auto"
            />
          </div>

          {/* Two Column Layout: Mobile App Image + Features - Mobile Optimized */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-center">
              {/* Left Column - Mobile App Image - Mobile Optimized */}
              <div className="animate-on-scroll bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80">
                <img 
                  src="/Macbook Mockup Front View UV (3).png" 
                  alt="Pay Pilot Mobile Application"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Right Column - Features List */}
              <div className="animate-on-scroll p-4 sm:p-6 lg:p-8">
                <ul className="space-y-3 sm:space-y-4 text-left">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 mt-1">
                        <circle cx="11" cy="11" r="11" fill="#6D3AED"/>
                        <path d="M17.707 7.70703L8.5 16.9141L3.79297 12.207L5.20703 10.793L8.5 14.0859L16.293 6.29297L17.707 7.70703Z" fill="white"/>
                      </svg>
                      <span className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultPro;