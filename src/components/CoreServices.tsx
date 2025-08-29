import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, Target, TrendingUp } from 'lucide-react';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const CoreServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(sectionRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  const services = [
    {
      imageSrc: "https://img.freepik.com/free-photo/business-colleagues-reviewing-discussing-report_1262-20984.jpg?t=st=1755497836~exp=1755501436~hmac=dc0b53c93e30b8beba45a34688ac42b5ab84a548364676593652d67010adbe1a&w=1480",
      title: "IT Consulting & Advisory",
      description: "We help enterprises modernize, streamline, and digitally transform with tailored consulting services that drive measurable results and sustainable growth.",
      features: ["Digital Transformation", "Technology Strategy", "Process Optimization"],
      link: "/services/consulting",
      color: "primary"
    },
    {
      imageSrc: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Custom Software Development",
      description: "From web platforms to mobile apps and enterprise solutions, we architect software that performs, scales, and delights users with cutting-edge technology.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Solutions"],
      link: "/services/development",
      color: "secondary"
    },
    {
      imageSrc: "https://img.freepik.com/free-photo/person-working-html-computer_23-2150038840.jpg?t=st=1755498237~exp=1755501837~hmac=b43d113d5288891548b0d51de83be6a54fa35d4d426f01b80a670fdf1c7d95f2&w=740",
      title: "Powerful SaaS Products",
      description: "Pay Pilot allows consulting agencies and businesses to track every aspect of their business, leveraging automation and technology for maximum efficiency.",
      features: ["Pay Pilot Platform", "Automation Tools", "Business Intelligence"],
      link: "/services/paypilot",
      color: "accent"
    },
    {
      imageSrc: "https://img.freepik.com/premium-photo/glasses-young-man-is-working-with-internet-equipment-wires-server-room_146671-113905.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80",
      title: "Managed IT Services",
      description: "Comprehensive management of your cloud, infrastructure, and software environments with proactive monitoring, security, and 24/7 support.",
      features: ["24/7 Monitoring", "Security Management", "Infrastructure Support"],
      link: "/services/managed-it",
      color: "primary"
    },
    {
      imageSrc: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "DevOps & Cloud Engineering",
      description: "Accelerate deployment, improve CI/CD pipelines, and build resilient cloud infrastructure with our DevOps automation and engineering services.",
      features: ["CI/CD Pipelines", "Cloud Migration", "Infrastructure as Code"],
      link: "/services/devops",
      color: "secondary"
    },
    {
      imageSrc: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Networking & Infrastructure",
      description: "High-availability networking solutions, secure systems architecture, and optimized infrastructure designed to support business continuity and growth.",
      features: ["Network Design", "Security Architecture", "Performance Optimization"],
      link: "/services/networking",
      color: "accent"
    },
    {
      imageSrc: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Data Analytics & Visualization",
      description: "Transform raw data into strategic insights with our comprehensive analytics solutions that bring clarity to business performance and decision-making.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics"],
      link: "/services/analytics",
      color: "primary"
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
            <Star className="h-4 w-4 text-primary-600" />
            <span className="text-xs sm:text-sm font-semibold text-primary-700">Comprehensive Solutions</span>
          </div>
          
          <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
            Core <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Services</span>
          </h2>
          
          <p className="animate-on-scroll text-lg sm:text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            Comprehensive technology solutions designed to accelerate your digital transformation 
            and drive sustainable growth across all aspects of your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-16 sm:space-y-20 mb-12 sm:mb-16">
          {/* IT Consulting & Advisory - Image Left, Text Right, No Card Background */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
              <img 
                src={services[0].imageSrc} 
                alt={services[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                {services[0].title}
              </h3>
              
              <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-light">
                {services[0].description}
              </p>
              
              <div className="space-y-4">
                {services[0].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Software Development - Text Left, Image Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight">
                {services[1].title}
              </h3>
              
              <p className="text-xl sm:text-2xl text-neutral-600 leading-relaxed font-light">
                {services[1].description}
              </p>
              
              <div className="space-y-4">
                {services[1].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-secondary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105 lg:order-2">
              <img 
                src={services[1].imageSrc} 
                alt={services[1].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Powerful SaaS Products - Image Left, Text Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
              <img 
                src={services[2].imageSrc} 
                alt={services[2].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                {services[2].title}
              </h3>
              
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Pay Pilot streamlines consulting operations with automated time tracking, invoicing, and payroll management. Built specifically for IT consulting and staffing firms.
              </p>
              
              <div className="space-y-4">
                {services[2].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Managed IT Services - Text Left, Image Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                {services[3].title}
              </h3>
              
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Comprehensive IT infrastructure management with 24/7 monitoring, security, and support. Keep your systems running smoothly while you focus on business growth.
              </p>
              
              <div className="space-y-4">
                {services[3].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105 lg:order-2">
              <img 
                src={services[3].imageSrc} 
                alt={services[3].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* DevOps & Cloud Engineering - Image Left, Text Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
              <img 
                src={services[4].imageSrc} 
                alt={services[4].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                {services[4].title}
              </h3>
              
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Accelerate deployment and improve system reliability with automated CI/CD pipelines and cloud infrastructure. Build resilient, scalable environments that support rapid growth.
              </p>
              
              <div className="space-y-4">
                {services[4].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-secondary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Networking & Infrastructure - Text Left, Image Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content - Left Side */}
            <div className="space-y-6 lg:order-1">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                {services[5].title}
              </h3>
              
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Design and deploy secure, high-performance networking solutions that ensure continuous connectivity. Optimize infrastructure to support business continuity and growth.
              </p>
              
              <div className="space-y-4">
                {services[5].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-accent-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105 lg:order-2">
              <img 
                src={services[5].imageSrc} 
                alt={services[5].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Data Analytics & Visualization - Image Left, Text Right */}
          <div className="animate-on-scroll grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image - Left Side */}
            <div className="w-full h-80 lg:h-96 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large hover:shadow-glow transition-all duration-500 hover:scale-105">
              <img 
                src={services[6].imageSrc} 
                alt={services[6].title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content - Right Side */}
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                {services[6].title}
              </h3>
              
              <p className="text-lg sm:text-xl text-neutral-600 leading-relaxed">
                Transform raw data into strategic insights with comprehensive analytics solutions. Create intuitive dashboards that drive better business decisions and performance.
              </p>
              
              <div className="space-y-4">
                {services[6].features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-neutral-700 font-medium text-lg sm:text-xl">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom CTA */}
        <div className="animate-on-scroll text-center">
          <div className="bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-large">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your <span className="font-serif-display font-normal italic">Business</span>?
            </h3>
            <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto">
              Discover how our comprehensive services can accelerate your digital transformation 
              and drive sustainable growth for your organization.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="group bg-white text-primary-700 px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-neutral-50 transition-all duration-300 font-semibold text-sm sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </a>
              
              <a
                href="/contact"
                className="group border-2 border-white/30 text-white px-4 sm:px-8 py-2 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-sm sm:text-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Get Started Today</span>
                  <Star className="h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;