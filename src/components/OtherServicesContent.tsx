import React, { useEffect, useRef } from 'react';
import { 
  Lightbulb, Code, Layers, Shield, Cloud, Network, BarChart3, Cog, 
  CheckCircle, Star, Target, TrendingUp, Zap, Settings, 
  Calendar, CreditCard, Download, Mail, Phone, MapPin,
  ArrowRight, Sparkles, Database, Smartphone, Globe, Lock,
  Activity, PieChart, Users, FileText, Monitor, Server,
  Cpu, HardDrive, Wifi, Eye, AlertTriangle, Wrench
} from 'lucide-react';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const OtherServicesContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(sectionRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  const services = [
    {
      id: 'it-consulting',
      icon: <Lightbulb className="h-8 w-8" />,
      title: "IT Consulting & Strategy",
      subtitle: "Transform your technology. Empower your business.",
      description: "We partner with organizations to create and execute technology roadmaps aligned with business goals. Our consulting services go beyond recommendations—we co-create actionable strategies and guide implementation across cloud, DevOps, networking, and enterprise systems.",
      offerings: [
        "Digital Transformation Consulting",
        "IT Infrastructure Assessments", 
        "Cloud Migration Strategy",
        "SaaS Enablement Roadmaps",
        "Compliance & Risk Advisory"
      ],
      idealFor: "Enterprises scaling operations, startups planning tech stacks, organizations modernizing legacy infrastructure.",
      color: "primary",
      image: "https://img.freepik.com/premium-photo/people-meeting-tablet-screen-data-analytics-financial-presentation-meeting-advice-strategy-business-woman-manager-team-talking-planning-collaboration-digital-statistics_590464-271474.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'software-development',
      icon: <Code className="h-8 w-8" />,
      title: "Software Development",
      subtitle: "Custom applications engineered for performance, scalability, and security.",
      description: "Our full-cycle software development services cover ideation to deployment, including architecture, front-end/back-end development, API integration, testing, and post-launch support.",
      offerings: [
        "Web App Development",
        "Mobile App Development (iOS/Android/Hybrid)",
        "Enterprise Platforms & Portals",
        "API Design & Integration", 
        "Legacy System Modernization"
      ],
      technologies: "React, Angular, Node.js, Python, Java, .NET, SQL/NoSQL, GraphQL, REST",
      valueDelivered: "User-centric design, clean architecture, security-first code, performance optimization.",
      color: "secondary",
      image: "https://img.freepik.com/premium-photo/programming-background-with-person-working-with-codes-computer_23-2150010148.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'saas-development',
      icon: <Layers className="h-8 w-8" />,
      title: "SaaS Product Development",
      subtitle: "Build SaaS platforms that scale and deliver continuous value.",
      description: "We help businesses bring SaaS products to life—from MVPs to enterprise-grade platforms. Our team specializes in architecting multi-tenant systems, building scalable databases, and implementing integrations that enhance product stickiness.",
      flagshipProduct: {
        name: "PayPilot",
        description: "PayPilot is ATEK IT's proprietary SaaS platform designed for consulting and professional services firms. It simplifies time tracking, client billing, payroll processing, and real-time reporting with built-in integrations for:",
        integrations: [
          "Zoho Books",
          "QuickBooks", 
          "Payroll processing",
          "Manual and webhook-based bank reconciliation",
          "CSV/Excel data exports",
          "Role-based dashboards for Admins, Consultants, and Clients",
          "Visa Tracking"
        ]
      },
      color: "accent",
      image: "https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'managed-it',
      icon: <Shield className="h-8 w-8" />,
      title: "Managed IT Services",
      subtitle: "Secure, scalable, and always-on IT operations.",
      description: "From end-user support to infrastructure monitoring, our managed services ensure reliability, security, and optimal performance—freeing up your internal teams to focus on business innovation.",
      keyServices: [
        "24/7 IT Monitoring & Incident Response",
        "Endpoint & Server Management",
        "Patch Management & Compliance Audits",
        "Disaster Recovery & Backup",
        "Helpdesk & Remote Support"
      ],
      industriesSupported: "Healthcare, FinTech, Education, Logistics, Professional Services",
      color: "primary",
      image: "https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5210.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'devops',
      icon: <Cloud className="h-8 w-8" />,
      title: "DevOps & Automation",
      subtitle: "Faster releases. Fewer bottlenecks. Greater agility.",
      description: "We help organizations embrace automation and continuous delivery pipelines to accelerate release cycles and improve system resilience. Our DevOps consultants implement CI/CD strategies that reduce human error, increase deployment confidence, and minimize downtime.",
      servicesInclude: [
        "CI/CD Pipeline Setup (GitHub Actions, Jenkins, GitLab, etc.)",
        "Infrastructure as Code (Terraform, Ansible, CloudFormation)",
        "Containerization & Orchestration (Docker, Kubernetes)",
        "Observability, Logging & Alerting Setup",
        "DevSecOps Integrations"
      ],
      bestFitFor: "Product teams, SaaS companies, large enterprises, and cloud-native transformations.",
      color: "secondary",
      image: "/DevOps & Automation.jpg"
    },
    {
      id: 'cloud-services',
      icon: <Globe className="h-8 w-8" />,
      title: "Cloud Services",
      subtitle: "Secure, cost-effective cloud strategies built for scale.",
      description: "From strategy to deployment, we help businesses transition to the cloud with maximum flexibility and minimum disruption. Our certified engineers work across AWS, Azure, and Google Cloud to build scalable and resilient environments.",
      cloudSolutions: [
        "Cloud Architecture Design",
        "Cloud Migration & Modernization",
        "Hybrid Cloud & Multi-cloud Configurations",
        "Serverless Applications",
        "Cloud Security Hardening & Audit Readiness"
      ],
      includedTools: "AWS EC2, S3, Lambda, Azure DevOps, Google Firebase, Kubernetes, Helm",
      color: "accent",
      image: "https://img.freepik.com/premium-photo/cloud-computing-technology-online-data-storage-business-network-concept_31965-6612.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'networking',
      icon: <Network className="h-8 w-8" />,
      title: "Networking & Infrastructure",
      subtitle: "Design. Deploy. Maintain. Secure.",
      description: "We architect and support robust networking solutions to ensure continuous connectivity, high performance, and security across your digital operations. Whether you need a ground-up network or are optimizing an existing setup, we're ready to help.",
      coreAreas: [
        "Network Design & Security",
        "Firewall, VPN, and Endpoint Protection",
        "SD-WAN Deployment",
        "Network Monitoring & Analytics",
        "Data Center Setup & Maintenance"
      ],
      compliance: "HIPAA, ISO 27001, PCI-DSS",
      color: "primary",
      image: "https://img.freepik.com/premium-photo/network-cables-connected-network-switches_91566-359.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'data-analytics',
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analytics & Visualization",
      subtitle: "Turn raw data into real business decisions.",
      description: "Our analytics solutions empower organizations to capture, analyze, and act on insights in real time. We create intuitive dashboards and reporting tools that help stakeholders make better, faster, and data-backed decisions.",
      capabilities: [
        "Data Warehousing & ETL",
        "Dashboard Development (Power BI, Tableau, Google Looker)",
        "Predictive & Prescriptive Analytics",
        "Custom KPIs & Metrics Modeling",
        "Business Intelligence Tools Integration"
      ],
      results: "Higher data trust, improved forecasting, and strategic alignment across departments.",
      color: "secondary",
      image: "https://img.freepik.com/free-photo/paper-analysis_1098-15678.jpg?ga=GA1.1.210687937.1755497834&semt=ais_hybrid&w=740&q=80"
    },
    {
      id: 'rpa',
      icon: <Cog className="h-8 w-8" />,
      title: "Robotic Process Automation (RPA)",
      subtitle: "Automate manual workflows and free your workforce for strategic work.",
      description: "Using RPA tools like UiPath, Automation Anywhere, and Power Automate, we help clients streamline repetitive tasks such as data entry, compliance checks, invoice processing, and employee onboarding.",
      businessBenefits: [
        "Cost Reduction & Operational Efficiency",
        "24/7 Task Execution",
        "Lower Error Rates",
        "Improved SLA Compliance",
        "Rapid ROI"
      ],
      color: "accent",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services & Insurance", 
    "Logistics & Supply Chain",
    "Education & EdTech",
    "Engineering & Manufacturing",
    "Consulting & Staffing"
  ];

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <section
        className="py-24 sm:py-32 bg-cover bg-no-repeat relative overflow-hidden min-h-screen"
        style={{
          backgroundImage: "url('/other services bg.jpg')",
          backgroundPosition: 'center 5%'
        }}
      >
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-gray-800/80 to-primary-900/85"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 min-h-screen flex flex-col justify-center">
            <h1 className="animate-on-scroll text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Transform Your Business with <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-300 font-serif-display font-normal italic">Comprehensive IT Solutions</span>
            </h1>
            
            <h2 className="animate-on-scroll text-xl sm:text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-medium mb-8 px-2 sm:px-0">
              Accelerate growth and achieve digital excellence with scalable, secure technology solutions tailored to your business needs.
            </h2>
            
            <div className="animate-on-scroll max-w-5xl mx-auto mb-12 px-2 sm:px-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10">
                <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-neutral-800 font-medium">Enterprise to Startup Ready</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                  <CheckCircle className="h-5 w-5 text-secondary-600 flex-shrink-0" />
                  <span className="text-neutral-800 font-medium">24/7 Expert Support</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/30 shadow-soft">
                  <CheckCircle className="h-5 w-5 text-accent-600 flex-shrink-0" />
                  <span className="text-neutral-800 font-medium">Proven ROI Results</span>
                </div>
              </div>
              
              {/* Primary and Secondary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact#contact-section"
                  className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg shadow-large hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <span>Get Free Consultation</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>
                
                <a
                  href="/services/paypilot"
                  className="group bg-white/90 backdrop-blur-sm border-2 border-white/30 text-primary-700 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-semibold text-lg shadow-medium hover:shadow-large hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Explore Pay Pilot</span>
                  </div>
                </a>
              </div>
            </div>
            
            <p className="animate-on-scroll text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
              Trusted by 63+ enterprise clients • Based in Frisco, TX • Serving globally
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {services.map((service, index) => (
        <section key={service.id} className={`py-16 sm:py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-gray-50 via-white to-secondary-50/30'} relative overflow-hidden`}>
          {index % 2 !== 0 && <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/30 to-transparent rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${index % 2 === 0 ? '' : 'lg:grid-flow-col-dense'}`}>
              {/* Content */}
              <div className={`animate-on-scroll ${index % 2 === 0 ? '' : 'lg:col-start-2'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                  {service.title}
                </h2>
                
                <h3 className={`text-lg sm:text-xl font-semibold text-${service.color}-600 mb-6`}>
                  {service.subtitle}
                </h3>
                
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Core Offerings */}
                {service.offerings && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Core Offerings:</h4>
                    <div className="space-y-2">
                      {service.offerings.map((offering, offeringIndex) => (
                        <div key={offeringIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{offering}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Services */}
                {service.keyServices && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Key Services:</h4>
                    <div className="space-y-2">
                      {service.keyServices.map((keyService, keyServiceIndex) => (
                        <div key={keyServiceIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{keyService}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Services Include */}
                {service.servicesInclude && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Services Include:</h4>
                    <div className="space-y-2">
                      {service.servicesInclude.map((serviceInclude, serviceIncludeIndex) => (
                        <div key={serviceIncludeIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{serviceInclude}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cloud Solutions */}
                {service.cloudSolutions && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Cloud Solutions:</h4>
                    <div className="space-y-2">
                      {service.cloudSolutions.map((cloudSolution, cloudSolutionIndex) => (
                        <div key={cloudSolutionIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{cloudSolution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Areas */}
                {service.coreAreas && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Core Areas:</h4>
                    <div className="space-y-2">
                      {service.coreAreas.map((coreArea, coreAreaIndex) => (
                        <div key={coreAreaIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{coreArea}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Capabilities */}
                {service.capabilities && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Capabilities:</h4>
                    <div className="space-y-2">
                      {service.capabilities.map((capability, capabilityIndex) => (
                        <div key={capabilityIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Business Benefits */}
                {service.businessBenefits && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Business Benefits:</h4>
                    <div className="space-y-2">
                      {service.businessBenefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* ConsultPro Flagship Product */}
                {service.flagshipProduct && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-neutral-900 mb-3">Flagship Product: {service.flagshipProduct.name}</h4>
                    <p className="text-neutral-600 mb-4">{service.flagshipProduct.description}</p>
                    <div className="space-y-2">
                      {service.flagshipProduct.integrations.map((integration, integrationIndex) => (
                        <div key={integrationIndex} className="flex items-start space-x-3">
                          <CheckCircle className={`h-5 w-5 text-${service.color}-600 mt-0.5 flex-shrink-0`} />
                          <span className="text-neutral-700">{integration}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4">
                      <a
                        href="mailto:info@atekit.com?subject=Pay Pilot Demo Request"
                        className="inline-flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
                      >
                        <span>Pay Pilot Demo</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                {service.technologies && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Technologies:</h4>
                    <p className="text-neutral-700 text-sm">{service.technologies}</p>
                  </div>
                )}

                {service.valueDelivered && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Value Delivered:</h4>
                    <p className="text-neutral-700 text-sm">{service.valueDelivered}</p>
                  </div>
                )}

                {service.industriesSupported && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Industries Supported:</h4>
                    <p className="text-neutral-700 text-sm">{service.industriesSupported}</p>
                  </div>
                )}

                {service.bestFitFor && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Best Fit For:</h4>
                    <p className="text-neutral-700 text-sm">{service.bestFitFor}</p>
                  </div>
                )}

                {service.idealFor && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Ideal For:</h4>
                    <p className="text-neutral-700 text-sm">{service.idealFor}</p>
                  </div>
                )}

                {service.includedTools && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Included Tools:</h4>
                    <p className="text-neutral-700 text-sm">{service.includedTools}</p>
                  </div>
                )}

                {service.compliance && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4 mb-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Compliance:</h4>
                    <p className="text-neutral-700 text-sm">{service.compliance}</p>
                  </div>
                )}

                {service.results && (
                  <div className={`bg-${service.color}-50 rounded-lg p-4`}>
                    <h4 className="font-semibold text-neutral-900 mb-2">Results:</h4>
                    <p className="text-neutral-700 text-sm">{service.results}</p>
                  </div>
                )}
              </div>

              {/* Image */}
              <div className={`animate-on-scroll ${index % 2 === 0 ? '' : 'lg:col-start-1'}`} style={{ animationDelay: `${index * 0.1 + 0.2}s` }}>
                <div className="bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large">
                  <img 
                    src={service.image} 
                    alt={`${service.title} Service`}
                    className="w-full h-80 object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Industry-Specific Services */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Target className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Industry Expertise</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Industry-Specific <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">IT Services</span>
            </h2>
            
            <p className="animate-on-scroll text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              We bring industry-aware implementation to every solution we offer. Our clients include 
              businesses in:
            </p>
          </div>

          <div className="animate-on-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your <span className="font-serif-display font-normal italic">Technology</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Let's discuss your unique challenges and how we can deliver results-driven solutions. From 
            rapid prototyping to full-scale enterprise deployments, ATEK IT brings the experience and 
            execution to make your next project a success.
          </p>
          
          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <h3 className="text-2xl font-bold mb-6">Contact Us Today</h3>
            <div className="space-y-4 text-left">
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
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">
                  7460 Warren Pkwy, Suite 100-148, Frisco, TX 75034
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact#contact-section"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Schedule a Free Consultation</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
            
            <a
              href="/contact"
              className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Request a Proposal</span>
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OtherServicesContent;