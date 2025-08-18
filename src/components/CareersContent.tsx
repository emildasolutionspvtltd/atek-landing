import React, { useEffect, useRef } from 'react';
import { 
  Zap, Users, TrendingUp, DollarSign, Globe, Shield, 
  Code, Cloud, Database, Palette, TestTube, BarChart3,
  MapPin, Phone, Mail, ArrowRight, Star, CheckCircle,
  X, Upload, AlertCircle, Loader2
} from 'lucide-react';

const CareersContent = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedJob, setSelectedJob] = React.useState('');
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = React.useState({
    name: '',
    jobRole: '',
    email: '',
    resume: null as File | null
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});

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

  // Handle modal open
  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData(prev => ({ ...prev, jobRole: jobTitle }));
    setIsModalOpen(true);
    setSubmitStatus('idle');
    setErrors({});
  };

  // Handle modal close
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob('');
    setFormData({ name: '', jobRole: '', email: '', resume: null });
    setErrors({});
    setSubmitStatus('idle');
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setErrors(prev => ({ ...prev, resume: 'Please upload only PDF or DOC/DOCX files' }));
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        setErrors(prev => ({ ...prev, resume: 'File size must be less than 5MB' }));
        return;
      }
      
      setFormData(prev => ({ ...prev, resume: file }));
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.jobRole) {
      newErrors.jobRole = 'Please select a job role';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.resume) {
      newErrors.resume = 'Resume is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Create FormData for file upload
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('jobRole', formData.jobRole);
      submitData.append('email', formData.email);
      if (formData.resume) {
        submitData.append('resume', formData.resume);
      }
      
      // Simulate API call (replace with actual endpoint)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, you would send to your backend:
      // const response = await fetch('/api/applications', {
      //   method: 'POST',
      //   body: submitData
      // });
      
      setSubmitStatus('success');
      setTimeout(() => {
        closeModal();
      }, 2000);
      
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyJoinReasons = [
    {
      icon: <Globe className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Real Projects with Global Impact",
      description: "Work on high-performance applications, enterprise transformations, and cutting-edge SaaS products like ConsultPro.",
      color: "primary"
    },
    {
      icon: <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Strong Learning & Career Trajectory",
      description: "Our proprietary platform Pay Pilot is built to solve real consulting operations pain points—time tracking, payroll, billing, and reporting—under one intelligent roof.",
      color: "secondary"
    },
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Inclusive & Dynamic Culture",
      description: "We embrace diversity, celebrate ideas, and promote a workplace where collaboration thrives.",
      color: "accent"
    },
    {
      icon: <DollarSign className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Competitive Compensation & Growth Paths",
      description: "We offer fair pay, project bonuses, internal mobility, and long-term career planning.",
      color: "primary"
    }
  ];

  const softwareRoles = [
    { title: "Java Developer", description: "Build and debug scalable, server-side applications using Java." },
    { title: "Python Developer", description: "Develop and deploy server-side web applications using Python." },
    { title: ".NET Developer", description: "Design and develop robust enterprise-grade applications in the Microsoft stack." },
    { title: "React Developer", description: "Build high-performance, reusable UI components using React.js frameworks." },
    { title: "Full Stack Developer", description: "Work across front-end and back-end to develop feature-rich applications in Agile teams." },
    { title: "ETL Developer", description: "Design, implement, and maintain data extraction, transformation, and loading processes." },
    { title: "Salesforce Developer", description: "Develop and manage applications on Salesforce CRM and ecosystem." }
  ];

  const engineeringRoles = [
    { title: "DevOps Engineer", description: "Automate and streamline CI/CD pipelines, infrastructure, and monitoring tools." },
    { title: "Cloud Engineer", description: "Design and manage cloud environments including AWS, Azure, and hybrid setups." },
    { title: "Network Administrator", description: "Maintain secure and efficient data communication networks across systems." },
    { title: "DB Administrator", description: "Ensure secure, scalable, and optimized performance of enterprise databases." }
  ];

  // All available job roles for dropdown
  const allJobRoles = [...softwareRoles, ...engineeringRoles].map(role => role.title);
  const otherRoles = [
    { title: "UI/UX Developer", description: "Create intuitive, user-friendly, and elegant interfaces across platforms.", category: "Experience & Design" },
    { title: "QA Analyst", description: "Ensure product quality, performance, and reliability through structured testing.", category: "Quality & Data" },
    { title: "Data Analyst", description: "Transform raw data into actionable insights with data modeling, visualization, and reporting.", category: "Quality & Data" }
  ];

  const seniorRoles = [
    {
      title: "Senior Technical Systems Architect",
      jobCode: "STSA – 2301",
      location: "Frisco, TX + unanticipated sites across the U.S.",
      responsibilities: [
        "Design and integrate complex cross-functional systems",
        "Use AWS, Java, Docker, Jenkins, Kubernetes, Selenium, Salesforce, and more",
        "Mentor teams and lead infrastructure architecture"
      ],
      requirements: "Master's in CS/IT/Engineering or equivalent + 1 year experience, or Bachelor's + 5 years",
      status: "Multiple Openings"
    },
    {
      title: "Senior Software Engineer",
      jobCode: "SSE – 2501",
      location: "Frisco, TX + unanticipated sites across the U.S.",
      responsibilities: [
        "Deliver SDLC-based projects, cloud architecture, DevOps integration",
        "Utilize AWS, C++, Python, Jenkins, Kubernetes, and other technologies"
      ],
      requirements: "Bachelor's in CS/IT/Engineering or equivalent + 5 years experience",
      salary: "$139,500/year (Full-time)"
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Why Join ATEK IT */}
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
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Career Benefits</span>
            </div>
            
            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              Why Join <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">ATEK IT</span>?
            </h2>
          </div>

          {/* Why Join Reasons Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {whyJoinReasons.map((reason, index) => (
              <div 
                key={index} 
                className="animate-on-scroll group relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2 border border-neutral-200/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${reason.color}-500/20 to-${reason.color}-600/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
                
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-${reason.color}-500 to-${reason.color}-600 rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {reason.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 group-hover:text-primary-700 transition-colors duration-300 mb-3 sm:mb-4">
                      {reason.title}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed text-base sm:text-lg">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Currently Hiring */}
      <section id="openings" className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Code className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Open Positions</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Currently <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Hiring</span>
            </h2>
            <p className="animate-on-scroll text-lg text-gray-600 mb-8">
              Below are some of our most in-demand openings. If you don't see your role listed, we still 
              encourage you to apply under "Others" with a relevant job title.
            </p>
          </div>

          {/* Software & Development Roles */}
          <div className="mb-12">
            <h3 className="animate-on-scroll text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="h-6 w-6 text-primary-600 mr-3" />
              Software & Development Roles
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {softwareRoles.map((role, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                    <button
                      onClick={() => openModal(role.title)}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering & Infrastructure */}
          <div className="mb-12">
            <h3 className="animate-on-scroll text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Cloud className="h-6 w-6 text-secondary-600 mr-3" />
              Engineering & Infrastructure
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {engineeringRoles.map((role, index) => (
                <div 
                  key={index} 
                  className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                    <button
                      onClick={() => openModal(role.title)}
                      className="bg-secondary-600 text-white px-4 py-2 rounded-lg hover:bg-secondary-700 transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Roles */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherRoles.map((role, index) => (
                <div key={index} className="mb-6">
                  <h3 className="animate-on-scroll text-lg font-bold text-gray-900 mb-4 flex items-center">
                    {role.category === "Experience & Design" && <Palette className="h-5 w-5 text-accent-600 mr-2" />}
                    {role.category === "Quality & Data" && <BarChart3 className="h-5 w-5 text-primary-600 mr-2" />}
                    {role.category}
                  </h3>
                  <div 
                    className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{role.title}</h4>
                        <p className="text-gray-600 text-sm">{role.description}</p>
                      </div>
                      <button
                        onClick={() => openModal(role.title)}
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-200 whitespace-nowrap ${
                          role.category === "Experience & Design" 
                            ? "bg-accent-600 text-white hover:bg-accent-700" 
                            : "bg-primary-600 text-white hover:bg-primary-700"
                        }`}
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senior-Level Roles */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Shield className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Senior Positions</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Senior-Level Roles <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">(Specialized Hiring)</span>
            </h2>
          </div>

          <div className="space-y-8">
            {seniorRoles.map((role, index) => (
              <div 
                key={index} 
                className="animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft hover:shadow-large transition-all duration-300 border border-gray-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    <span><strong>Job Code:</strong> {role.jobCode}</span>
                    <span><strong>Location:</strong> {role.location}</span>
                    {role.salary && <span><strong>Salary:</strong> {role.salary}</span>}
                    {role.status && <span><strong>Status:</strong> {role.status}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Responsibilities:</h4>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <p className="text-gray-700 text-sm mb-4">{role.requirements}</p>
                    
                    <div className="bg-primary-50 rounded-lg p-4">
                      <p className="text-sm text-primary-700 mb-2">
                        <strong>To Apply:</strong> Email resume to{' '}
                        <a href="mailto:immigrations@atekit.com" className="text-primary-600 hover:text-primary-800 underline">
                          immigrations@atekit.com
                        </a>{' '}
                        with job code in subject line
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <ArrowRight className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Application Process</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              How to <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Apply</span>
            </h2>
          </div>

          <div className="animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-200 mb-12">
            <div className="text-center space-y-4">
              <p className="text-lg text-gray-700">
                Use our <strong>Online Application Form</strong> or email your resume to{' '}
                <a href="mailto:info@atekit.com" className="text-primary-600 hover:text-primary-800 underline font-semibold">
                  info@atekit.com
                </a>
              </p>
              <p className="text-gray-600">
                For senior positions, please include the relevant job code in your application.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-on-scroll bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-6"><span className="font-serif-display font-normal italic">ATEK IT</span> Inc.</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">7460 Warren Pkwy, Suite 100-148, Frisco, TX 75034</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+14692692345" className="text-sm hover:text-gray-200 transition-colors duration-200">
                  +1 (469)-269-2345
                </a>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:info@atekit.com" className="text-sm hover:text-gray-200 transition-colors duration-200">
                  info@atekit.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Join Our Talent Pool</span>
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </a>
              <button
                onClick={() => openModal('')}
                className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
              >
                <div className="flex items-center justify-center space-x-2">
                  <span>Apply Now</span>
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Apply for Position</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600">Thank you for your interest. We'll review your application and get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Applicant Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Applicant Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Job Role */}
                  <div>
                    <label htmlFor="jobRole" className="block text-sm font-medium text-gray-700 mb-1">
                      Job Role *
                    </label>
                    <select
                      id="jobRole"
                      name="jobRole"
                      value={formData.jobRole}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                        errors.jobRole ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a position</option>
                      <optgroup label="Software & Development">
                        {softwareRoles.map((role) => (
                          <option key={role.title} value={role.title}>
                            {role.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Engineering & Infrastructure">
                        {engineeringRoles.map((role) => (
                          <option key={role.title} value={role.title}>
                            {role.title}
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="Experience & Design">
                        <option value="UI/UX Developer">UI/UX Developer</option>
                      </optgroup>
                      <optgroup label="Quality & Data">
                        <option value="QA Analyst">QA Analyst</option>
                        <option value="Data Analyst">Data Analyst</option>
                      </optgroup>
                    </select>
                    {errors.jobRole && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.jobRole}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                      Resume Upload *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className={`w-full px-3 py-2 border-2 border-dashed rounded-lg cursor-pointer hover:border-primary-400 transition-colors duration-200 flex items-center justify-center space-x-2 ${
                          errors.resume ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <Upload className="h-5 w-5 text-gray-400" />
                        <span className="text-gray-600">
                          {formData.resume ? formData.resume.name : 'Choose PDF or DOC file'}
                        </span>
                      </label>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                    {errors.resume && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.resume}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Submit Application</span>
                      )}
                    </button>
                  </div>

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                      <p className="text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Failed to submit application. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersContent;