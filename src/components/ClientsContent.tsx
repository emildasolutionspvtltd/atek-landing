import React, { useEffect, useRef } from 'react';
import { Heart, DollarSign, BookOpen, ShoppingBag, Settings, CheckCircle, Users, Lightbulb, Zap, Star, Target, TrendingUp, Network } from 'lucide-react';

const ClientsContent = () => {
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


  const industries = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Healthcare & Life Sciences",
      description: "EMR/EHR systems, HIPAA-compliant infrastructure, data analytics, and automation for medical workflows.",
      color: "primary"
    },
    {
      icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Finance & Professional Services",
      description: "Secure cloud transformation, payroll automation, client management systems, and consulting operations through platforms like ConsultPro.",
      color: "secondary"
    },
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Education & Training",
      description: "Learning platforms, student analytics, digital infrastructure, and AI-powered tools for academic institutions and training providers.",
      color: "accent"
    },
    {
      icon: <ShoppingBag className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Retail & E-Commerce",
      description: "Custom-built commerce platforms, inventory tracking, DevOps CI/CD, and data-driven user engagement strategies.",
      color: "primary"
    },
    {
      icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Manufacturing & Engineering",
      description: "Specialized tools like Pay Pilot to streamline backend operations for consulting and staffing firms.",
      features: ["Pay Pilot Platform", "Backend Operations", "Workflow Automation", "Performance Analytics"]
    }
  ];

  const clientValues = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Consulting That Aligns with Strategy",
      description: "We invest time to understand your goals, processes, and pain points before offering a solution.",
      color: "primary"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Tailored Technology Implementation",
      description: "Every system we build—whether SaaS, mobile app, or backend platform—is designed to fit your unique context.",
      color: "secondary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Transparent, Collaborative Engagement",
      description: "Clients enjoy real-time visibility into project timelines, sprint progress, and deliverables. No surprises.",
      color: "accent"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Post-Launch Support & Optimization",
      description: "Beyond deployment, we remain active partners in growth, offering support, scaling services, and continuous improvement.",
      color: "primary"
    }
  ];

  const caseStudies = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "National Healthcare Network (USA)",
      description: "Migrated legacy systems to AWS with secure EMR integration and 99.99% uptime.",
      color: "primary"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Tech Staffing Firm (India & US)",
      description: "Deployed ConsultPro across 75+ consultants and automated payroll and invoicing processes.",
      color: "secondary"
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Global EdTech Platform",
      description: "Built AI-enhanced student tracking dashboard with real-time reporting and export tools.",
      color: "accent"
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Our Client Story Section - MOVED TO FIRST */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Star className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Client Story</span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Trusted by <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Forward-Thinking</span>
              <br />
              <span className="text-neutral-700 text-3xl md:text-4xl lg:text-5xl font-medium">
                Organizations Around the World
              </span>
            </h2>

            <div className="animate-on-scroll max-w-5xl mx-auto mb-14 space-y-8">
              {/* Icon-based content breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Star className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Client Success</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We measure our success by the success of our clients, from high-growth startups to established enterprises.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Proven Solutions</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Delivering technology solutions that drive business transformation and competitive advantage.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Global Impact</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Working across the U.S., India, and beyond to help organizations scale efficiently and innovate confidently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A Legacy of Trust and Performance */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Star className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Industry Leadership</span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              A Legacy of <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Trust and Performance</span>
            </h2>

            <p className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              We don't just build software—we build partnerships. Every project we take on is guided by our
              commitment to deliver outcomes, not just deliverables. This approach has earned us long-term
              relationships with clients in:
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {industries.map((industry, index, arr) => {
              const remainder = arr.length % 3;
              const isSecondLast = index === arr.length - 2;
              const isLast = index === arr.length - 1;

              // ✅ Handle last 2 cards
              if (remainder === 2 && isSecondLast) {
                const lastTwo = [arr[arr.length - 2], arr[arr.length - 1]];
                return (
                  <div key="last-two" className="lg:col-span-3 hidden lg:block">
                    <div className="flex justify-center gap-6">
                      {lastTwo.map((item, i) => (
                        <div
                          key={i}
                          className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50 w-full max-w-sm"
                          style={{ animationDelay: `${(arr.length - 2 + i) * 0.1}s` }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br from-${item.color}-500/20 to-${item.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                          ></div>

                          <div
                            className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
                          >
                            {item.icon}
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                            {item.title}
                          </h3>

                          <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // Skip rendering the last card (since it was included above)
              if (remainder === 2 && isLast) return null;

              // ✅ Handle single leftover card
              if (remainder === 1 && isLast) {
                return (
                  <div key="last-one" className="lg:col-span-3 flex justify-center">
                    <div
                      className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50 w-full max-w-sm"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-${industry.color}-500/20 to-${industry.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                      ></div>

                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${industry.color}-500 to-${industry.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
                      >
                        {industry.icon}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                        {industry.title}
                      </h3>

                      <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                );
              }

              // ✅ Normal items
              return (
                <div
                  key={index}
                  className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-${industry.color}-500/20 to-${industry.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
                  ></div>

                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${industry.color}-500 to-${industry.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}
                  >
                    {industry.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                    {industry.title}
                  </h3>

                  <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* What Our Clients Value Most */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <CheckCircle className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Client Value</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              What Our Clients <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Value Most</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {clientValues.map((value, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${value.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className={`text-${value.color}-600`}>
                      {value.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <TrendingUp className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Success Stories</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Featured <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Case Studies</span>
            </h2>
            <p className="animate-on-scroll text-lg text-gray-600 mb-8">
              Real names, logos, and testimonials can be added here when available
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${study.color}-500/20 to-${study.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>

                <div className={`w-16 h-16 bg-gradient-to-br from-${study.color}-500 to-${study.color}-600 rounded-xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 mb-6`}>
                  {study.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors duration-300 mb-4">
                  {study.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {study.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* You're in Good Company */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <Users className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Client Relationships</span>
          </div>

          <h2 className="animate-on-scroll text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            You're in <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Good Company</span>
          </h2>

          <div className="animate-on-scroll max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 leading-relaxed">
              Our client relationships are built on trust, performance, and mutual growth. Many of our clients
              return to us for multiple engagements, spanning new product launches, digital transformation
              projects, and long-term support.
            </p>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft">
              <p className="text-lg text-gray-600">
                If you're ready to modernize your systems, optimize your workflows, or launch something
                new—<span className="font-serif-display font-semibold">ATEK IT</span> is ready to help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientsContent;