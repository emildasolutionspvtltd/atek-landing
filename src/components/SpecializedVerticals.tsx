import React from 'react';
import { Heart, Wrench, Briefcase } from 'lucide-react';

const SpecializedVerticals = () => {
  const verticals = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Healthcare IT Consulting",
      description: "EMR/EHR integration, compliance, and operational efficiency solutions for healthcare organizations.",
      features: ["HIPAA Compliance", "EMR/EHR Integration", "Operational Efficiency", "Data Security"]
    },
    {
      icon: <Wrench className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Mechanical Engineering Consulting",
      description: "Applied design, planning, and technology integration for engineering firms and manufacturing companies.",
      features: ["Applied Design", "Technology Integration", "Process Optimization", "Quality Assurance"]
    },
    {
      icon: <Briefcase className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Professional Services & Staffing",
      description: "Specialized tools like ConsultPro to streamline backend operations for consulting and staffing firms.",
      features: ["ConsultPro Platform", "Backend Operations", "Workflow Automation", "Performance Analytics"]
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-2 sm:px-0">
            Specialized Verticals
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-0">
            Deep industry expertise tailored to specific sector requirements and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {verticals.map((vertical, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-primary-600 mb-4 sm:mb-6">
                {vertical.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {vertical.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {vertical.description}
              </p>
              <div className="space-y-2">
                {vertical.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            Don't see your industry?
          </h3>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 opacity-90">
            We work with organizations across various sectors. Let's discuss how we can help your specific industry.
          </p>
          <a
            href="/contact#contact-section"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-sm sm:text-base"
          >
            <span>Contact Our Team</span>
            <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SpecializedVerticals;