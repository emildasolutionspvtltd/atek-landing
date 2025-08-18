import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Zap, Settings, BarChart, Shield, Star, Target, TrendingUp, Cloud, Code, Lightbulb, Network, Heart, Wrench, Briefcase, MapPin, Phone, Mail } from 'lucide-react';
import { Handshake } from 'lucide-react';

const PartnersContent = () => {
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


  const partnershipFeatures = [
    {
      icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Co-Innovation",
      description: "We work side-by-side with our partners to co-create digital products, SaaS platforms, and business automation solutions. From prototyping to production, our teams collaborate to ensure shared success.",
      color: "primary"
    },
    {
      icon: <Settings className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Technical Enablement",
      description: "Our team provides strategic input and technical horsepower to strengthen product offerings—whether through DevOps modernization, cloud scalability, or API-based integration with platforms like Zoho, QuickBooks, and third-party banking systems.",
      color: "secondary"
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Joint Go-to-Market Opportunities",
      description: "As a services-led company, we help our partners reach broader audiences by jointly delivering consulting, implementation, and support services. Our reputation in the U.S. and India enables powerful cross-regional GTM potential.",
      color: "accent"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Industry Integration",
      description: "We understand sector-specific compliance, workflows, and operational nuances. From HIPAA-aligned healthcare implementations to secure financial systems, we help our partners build vertical-specific credibility.",
      color: "primary"
    }
  ];

  const partnerTypes = [
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Providers",
      description: "AWS, Azure, GCP ecosystem partnerships for deployment and managed service delivery.",
      color: "primary"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "SaaS Platforms",
      description: "Integration and white-label implementation partners for platforms like Zoho, QuickBooks, and HR/Payroll tools.",
      color: "secondary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Consulting & Strategy Firms",
      description: "Collaboration on digital transformation projects and technical implementation services.",
      color: "accent"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Tech Startups & Product Firms",
      description: "MVP development, SaaS enablement, and backend engineering partnerships.",
      color: "primary"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Educational Institutions & NGOs",
      description: "Technology enablement, training systems, analytics, and infrastructure consulting.",
      color: "secondary"
    }
  ];

  const whyPartnerReasons = [
    "15+ Years of Technology Consulting Experience",
    "Proven Expertise in SaaS Product Development and Integration",
    "Deep Bench of Certified Engineers and Product Managers",
    "Established Presence in the U.S. and India",
    "Track Record of High-Impact B2B & B2E Implementations",
    "Scalable Team Structure and Flexible Engagement Models"
  ];

  return (
    <div ref={sectionRef}>
      {/* Our Partnership Vision */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Handshake className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Vision</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Collaborating for Innovation</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-700">Partnering for Progress</span>
            </h2>
            
            <div className="animate-on-scroll max-w-5xl mx-auto mb-14 space-y-8">
              {/* Icon-based content breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Handshake className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Purposeful Partnerships</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    At <span className="font-serif-display font-semibold">ATEK IT</span>, we believe the future of technology is built through strong, purposeful partnerships rooted in collaboration.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Shared Vision</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We work with businesses, platforms, and service providers who share our vision of driving digital transformation through innovation and operational excellence.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Cross-Industry Solutions</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We partner across industries—finance, healthcare, education, logistics, and professional services—to build software and solve real business problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* What Makes a Great ATEK Partner */}
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
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Partnership Excellence</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              What Makes a Great <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">ATEK Partner</span>?
            </h2>
            
            <p className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
              Our ideal partnerships are built on shared values: innovation, accountability, transparency, and 
              growth. We believe in long-term collaboration, not one-off transactions.
            </p>
          </div>

          {/* Partnership Features Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {partnershipFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
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
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Network className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Partnership Ecosystem</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Who We <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Partner With</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
  {partnerTypes.map((partner, index, arr) => {
    const remainder = arr.length % 3;
    const isSecondLast = index === arr.length - 2;
    const isLast = index === arr.length - 1;

    // ✅ Handle last 2 items → center them
    if (remainder === 2 && isSecondLast) {
      const lastTwo = [arr[arr.length - 2], arr[arr.length - 1]];
      return (
        <div key="last-two" className="lg:col-span-3 hidden lg:block">
          <div className="flex justify-center gap-6">
            {lastTwo.map((p, i) => (
              <div
                key={i}
                className="animate-on-scroll bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 w-full max-w-sm"
                style={{ animationDelay: `${(arr.length - 2 + i) * 0.1}s` }}
              >
                <div className={`w-12 h-12 bg-${p.color}-100 rounded-lg flex items-center justify-center mb-6`}>
                  <div className={`text-${p.color}-600`}>{p.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{p.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    // Skip rendering the last card (since it was included above)
    if (remainder === 2 && isLast) return null;

    // ✅ Handle single leftover item → center it
    if (remainder === 1 && isLast) {
      return (
        <div key="last-one" className="lg:col-span-3 flex justify-center">
          <div
            className="animate-on-scroll bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 w-full max-w-sm"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`w-12 h-12 bg-${partner.color}-100 rounded-lg flex items-center justify-center mb-6`}>
              <div className={`text-${partner.color}-600`}>{partner.icon}</div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{partner.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
          </div>
        </div>
      );
    }

    // ✅ Normal items
    return (
      <div
        key={index}
        className="animate-on-scroll bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className={`w-12 h-12 bg-${partner.color}-100 rounded-lg flex items-center justify-center mb-6`}>
          <div className={`text-${partner.color}-600`}>{partner.icon}</div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{partner.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{partner.description}</p>
      </div>
    );
  })}
</div>

        </div>
      </section>

      {/* Why Partner with ATEK IT */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <CheckCircle className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Partnership Benefits</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Why <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Partner With</span> <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">ATEK IT</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPartnerReasons.map((reason, index) => (
              <div 
                key={index} 
                className="animate-on-scroll flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-lg shadow-soft hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-3 h-3 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">{reason}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Build Together CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Build <span className="font-serif-display font-normal italic">Together</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            If you are a technology firm, consulting agency, platform owner, or systems provider looking to 
            co-develop, integrate, or scale your services, we'd love to explore partnership possibilities with 
            you.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">
                  7460 Warren Pkwy, Suite 100-148, Frisco, TX 75034
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <a href="tel:+14692692345" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  +1 (469) 269-2345
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <a href="mailto:info@atekit.com" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  info@atekit.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Start a Conversation</span>
                <Users className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
            <a
              href="/contact"
              className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Explore Strategic Alliances</span>
                <Target className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersContent;