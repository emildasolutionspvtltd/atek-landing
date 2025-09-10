import React, { useEffect, useRef } from 'react';
import {
  Target, Heart, Zap, Users, Globe, Award,
  CheckCircle, Star, TrendingUp, Lightbulb,
  MapPin, Phone, Mail, ArrowRight, Settings,
  Code, Cloud, Network, BarChart3, Sparkles,
  Shield
} from 'lucide-react';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const AboutContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(sectionRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  const capabilities = [
    {
      imageSrc: "https://img.freepik.com/free-photo/modern-business-people-working-office_23-2147704577.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "PayPilot – Consultant Operations Management SaaS",
      description: "Our proprietary SaaS product built for IT consulting and staffing firms, PayPilot streamlines time tracking, invoicing, payroll, and client management. With role-based access, real-time reporting, smart reminders, and seamless integration with QuickBooks, Zoho, and banking systems, it automates core business operations from end to end.",
      color: "primary",
      icon: <Sparkles className="h-6 w-6" />
    },
    {
      imageSrc: "https://img.freepik.com/premium-photo/senior-businesswoman-young-business-people-work-modern-office_52137-28330.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "Managed IT Services",
      description: "We provide end-to-end management of IT infrastructure with proactive monitoring, 24/7 support, and performance optimization—ensuring uptime, security, and scalability.",
      color: "secondary",
      icon: <Settings className="h-6 w-6" />
    },
    {
      imageSrc: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Custom Software Development",
      description: "From enterprise platforms to agile MVPs, our development teams create high-performance software tailored to your specific business requirements—across web, mobile, and SaaS.",
      color: "accent",
      icon: <Code className="h-6 w-6" />
    },
    {
      imageSrc: "https://img.freepik.com/premium-photo/creative-visual-technology-network-creative-visual-technology-network_31965-16789.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "Cloud Services",
      description: "We design and manage secure, scalable cloud environments across AWS, Azure, and Google Cloud, with automated provisioning, backup, and cost-effective resource allocation.",
      color: "primary",
      icon: <Cloud className="h-6 w-6" />
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/team-programmers-using-computer-data-center-integrating-ai-tools_482257-123350.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "DevOps & Automation",
      description: "Accelerate software delivery through robust CI/CD pipelines, infrastructure-as-code, containerization, and automated deployment workflows designed for agility and control.",
      color: "secondary",
      icon: <Zap className="h-6 w-6" />
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/young-man-working-ethernet-switch_23-2148323494.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "Networking & Infrastructure",
      description: "We plan, configure, and optimize secure, high-availability networks for enterprise environments—integrating automation and analytics to support uninterrupted business operations.",
      color: "accent",
      icon: <Network className="h-6 w-6" />
    },
    {
      imageSrc: "https://img.freepik.com/premium-photo/focused-millennial-business-man-analyzing-marketing-reports-desktop-monitor-reviewing-paper-graphs-financial-stats-startup-project-infographics-marketer-working-from-home-office-back-view_656932-4083.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "Data Analytics & Insights",
      description: "Leverage data to make informed decisions with our analytics and visualization solutions—featuring real-time dashboards, reporting tools, and predictive analytics aligned with business KPIs.",
      color: "primary",
      icon: <BarChart3 className="h-6 w-6" />
    }
  ];

  const coreValues = [
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Collective Effort",
      description: "We operate as a unified team. Open communication and collaborative problem-solving are central to our project delivery.",
      color: "primary"
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Integrity",
      description: "We honor our commitments, speak with transparency, and uphold ethical practices in every engagement.",
      color: "secondary"
    },
    {
      icon: <Zap className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Empowerment",
      description: "We foster a culture of learning, growth, and autonomy—ensuring our team and clients are always equipped to lead.",
      color: "accent"
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Competitiveness",
      description: "In a fast-moving tech world, we continuously refine our strategies and capabilities to stay ahead of the curve.",
      color: "primary"
    },
    {
      icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Mutual Trust",
      description: "We earn trust through consistency, clear communication, and delivering on our promises.",
      color: "secondary"
    },
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Responsibility",
      description: "We treat every project as a mission-critical initiative—owned with accountability and delivered with care.",
      color: "accent"
    }
  ];

  const teamStats = [
    { number: '63+', label: 'Active Clients', description: 'Organizations trusting us with their digital transformation' },
    { number: '40+', label: 'In-House Experts', description: 'Certified professionals across multiple technologies' },
    { number: '20+', label: 'Delivery Locations', description: 'Global presence and operational reach' },
    { number: '1', label: 'Powerful SaaS Product: Pay Pilot', description: 'Revolutionary consulting operations management platform' }
  ];

  return (
    <div ref={sectionRef}>
      {/* Our Story */}
      <section id="our-story" className="py-12 sm:py-16 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Star className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">About ATEK IT</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Innovating with <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Purpose</span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-700">Delivering with Precision</span>
            </h2>
            
            <div className="animate-on-scroll max-w-4xl mx-auto space-y-6">
              {/* Icon-based content breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Innovation with Purpose</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    <span className="font-serif-display font-semibold">ATEK IT</span> is a dynamic technology consulting company headquartered in Frisco, Texas, committed to enabling businesses across industries to thrive digitally.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Technical Excellence</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Our expertise spans enterprise-grade software development, cloud infrastructure, DevOps, networking, and managed IT services with measurable impact.
                  </p>
                </div>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-neutral-200/50 shadow-soft text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white shadow-medium mx-auto mb-4">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">Strategic Approach</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    We deliver tailored, high-performance solutions that address real business challenges, blending technical excellence with industry insight for long-term value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Capabilities at a Glance */}
      <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Lightbulb className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Our Capabilities</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Our Capabilities <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">at a Glance</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:gap-16">
            {capabilities.map((capability, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                {/* Removed card styling, so no need for this overlay */}
                
                <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 sm:gap-12">
                  {/* Conditional rendering of image and text order (reversed for user's request) */}
                  {index % 2 === 0 ? ( // Odd-numbered item (1st, 3rd, etc.): Image Left, Text Right
                    <>
                      {/* Image Container */}
                      <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
                        <img
                          src={capability.imageSrc}
                          alt={capability.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* Text Content Container */}
                      <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-soft border border-neutral-200/50">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${capability.color}-500 to-${capability.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium mb-6`}>
                          {capability.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                          {capability.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                          {capability.description}
                        </p>
                      </div>
                    </>
                  ) : ( // Even-numbered item (2nd, 4th, etc.): Image Right, Text Left
                    <>
                      {/* Text Content Container */}
                      <div className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-soft border border-neutral-200/50 lg:order-2">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${capability.color}-500 to-${capability.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium mb-6`}>
                          {capability.icon}
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                          {capability.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                          {capability.description}
                        </p>
                      </div>
                      {/* Image Container */}
                      <div className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105 lg:order-1">
                        <img
                          src={capability.imageSrc}
                          alt={capability.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Heart className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Our Foundation</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Our Core <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Values</span>
            </h2>
            
            <p className="animate-on-scroll text-lg text-gray-600 max-w-3xl mx-auto">
              At ATEK IT, we believe that strong partnerships are built on shared values. These principles 
              shape our culture, our processes, and the outcomes we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${value.color}-500/20 to-${value.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {value.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Stats */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <TrendingUp className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Impact</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Our <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Impact</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamStats.map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll text-center group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 group-hover:scale-105 transition-transform duration-300 text-primary-600">
                  {stat.number}
                </div>
                <div className="text-neutral-900 font-bold text-base sm:text-lg mb-1 sm:mb-2">{stat.label}</div>
                <div className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Mission */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 py-2 mb-6">
                <Target className="h-4 w-4 text-primary-600" />
                <span className="text-xs sm:text-sm font-semibold text-primary-700">Our Mission</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Empowering Organizations Through <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Technology</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                To help organizations across industries unlock their full digital potential by delivering technology 
                solutions that are strategic, reliable, and scalable.
              </p>
            </div>

            {/* Vision */}
            <div className="animate-on-scroll">
              <div className="inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 py-2 mb-6">
                <Globe className="h-4 w-4 text-secondary-600" />
                <span className="text-xs sm:text-sm font-semibold text-secondary-700">Our Vision</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Leading the Future of <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Digital Innovation</span>
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                To be a globally trusted IT consulting and product innovation partner that empowers businesses 
                through transformative technology and inspired execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's <span className="font-serif-display font-normal italic">Collaborate</span>
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're seeking a consulting partner, a development team, or a reliable managed 
            services provider—ATEK IT is ready to engage. Let's work together to transform your vision into 
            scalable, intelligent outcomes.
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
                  +1 (469)-269-2345
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <a href="mailto:info@atekit.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  info@atekit.com
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#contact-section"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
            <a
              href="/contact#contact-section"
              className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Schedule a Discovery Call</span>
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutContent;