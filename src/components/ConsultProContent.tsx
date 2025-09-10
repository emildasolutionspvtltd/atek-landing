import React, { useEffect, useRef } from 'react';
import {
  Clock, Users, DollarSign, FileText, Bell, BarChart3, Shield,
  CheckCircle, Star, Target, TrendingUp, Zap, Settings,
  Calendar, CreditCard, Download, Mail, Phone, MapPin,
  ArrowRight, Sparkles, Cloud, Database, Smartphone,
  PieChart, Activity, Globe, Lock, Lightbulb
} from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';
import { cn } from '@/lib/utils';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const ConsultProContent = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(sectionRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  const targetAudience = [
    "IT & Engineering Consulting Firms",
    "Staffing & Recruitment Agencies",
    "Professional Services Companies",
    "Digital & Creative Agencies",
    "HR & Outsourcing Firms"
  ];

  const coreFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Tracking & Timesheet Management",
      description: "Weekly, biweekly, or monthly time entry with consultant self-logging and smart reminders.",
      features: ["Auto-approval for standard thresholds", "Role-based approvals", "Smart reminders"],
      color: "primary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Client & Project Management",
      description: "Add unlimited clients and assign multiple projects with custom billing rates.",
      features: ["Unlimited clients & projects", "Custom billing rates", "Real-time visibility"],
      color: "secondary"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Invoicing & Payment Reconciliation",
      description: "Auto-generate invoices from approved timesheets with payment tracking.",
      features: ["Auto-invoice generation", "Payment tracking", "PDF/CSV export"],
      color: "accent"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Payroll Management",
      description: "Automatic payroll calculation with advances, deductions, and tax factors.",
      features: ["Automatic calculations", "Advance handling", "Export-ready sheets"],
      color: "primary"
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Smart Reminders & Notifications",
      description: "Email and in-app notifications for pending submissions and overdue approvals.",
      features: ["Email & in-app alerts", "Submission tracking", "Activity logs"],
      color: "secondary"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Real-Time Reports & Data Export",
      description: "Comprehensive reporting with consultant productivity and earnings summaries.",
      features: ["Productivity reports", "Invoice aging", "Excel/CSV export"],
      color: "accent"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Role-Based Access Control",
      description: "Secure dashboards for admins, consultants, and clients with appropriate permissions.",
      features: ["Admin dashboard", "Consultant portal", "Client access"],
      color: "primary"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "H1-B Visa Lifecycle Management",
      description: "Comprehensive visa management system with automated reminders, secure document handling, and centralized employee profiles for complete immigration status tracking.",
      features: [
        "Reminders for crucial milestones (e.g., the end of validity periods)",
        "Secure document uploads with built-in compliance checklists",
        "A unique centralized employee profile with immigration status at every step of the process"
      ],
      color: "primary"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Green Card Process Tracking",
      description: "End-to-end green card process management with smart notifications, attorney communication tools, and intuitive stage tracking dashboards.",
      features: [
        "Smart notifications for document collection, attorney communications, and priority date updates",
        "Custom fields for immigration attorney notes and case numbers",
        "Each stage from PERM, I-140, and I-485 can be tracked using our intuitive PERM I-140 dashboard"
      ],
      color: "secondary"
    }
  ];

  const integrations = [
    { name: "Zoho Books", description: "Invoice syncing and accounting", icon: <Database className="h-5 w-5" /> },
    { name: "QuickBooks", description: "Payment matching and reconciliation", icon: <CreditCard className="h-5 w-5" /> },
    { name: "Banking Systems", description: "CSV upload or custom webhook", icon: <Globe className="h-5 w-5" /> },
    { name: "HR/Payroll Tools", description: "Data export or API integration", icon: <Users className="h-5 w-5" /> }
  ];

  const whyChooseReasons = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Purpose-Built",
      description: "Designed specifically for consulting and services businesses"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Highly Configurable",
      description: "Adapts to your workflows, not the other way around"
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Secure & Scalable",
      description: "Cloud-native, encrypted, and ready for growth"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Implementation",
      description: "Go live in less than 2 weeks with onboarding support"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with tiered plans based on team size"
    }
  ];

  const implementationSteps = [
    {
      day: "Day 1-2",
      title: "Initial Discovery",
      description: "Understand your team structure, billing rules, and preferred integration needs."
    },
    {
      day: "Day 3-5",
      title: "Configuration & Access Setup",
      description: "Define roles, assign user permissions, and configure project/client mappings."
    },
    {
      day: "As Needed",
      title: "Custom Integration",
      description: "Connect to your preferred accounting tools or bank systems via API, CSV, or webhook."
    },
    {
      day: "Day 6-7",
      title: "Training & Handover",
      description: "Walkthroughs for Admin, Consultant, and Client roles with detailed documentation."
    }
  ];

  const successStories = [
    {
      title: "Midwest Tech Consulting Firm",
      result: "Reduced payroll cycle from 5 days to 2 hours",
      icon: <Clock className="h-8 w-8" />,
      color: "primary"
    },
    {
      title: "Global Staffing Agency",
      result: "Automated timesheet entry across 100+ consultants",
      icon: <Users className="h-8 w-8" />,
      color: "secondary"
    },
    {
      title: "Creative Services Studio",
      result: "Replaced manual invoicing with client-verified billing",
      icon: <FileText className="h-8 w-8" />,
      color: "accent"
    }
  ];

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-[url('/MacBook-Mockup-Floating.png')] bg-cover bg-center bg-no-repeat">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-gray-800/60 to-primary-900/70"></div>

        <section className="relative z-10 pt-24 pb-16 lg:pt-32 xl:pt-40 min-h-screen flex items-center">
          <div className="relative max-w-8xl mx-auto px-6 lg:px-8 w-full">
            <div className="text-center">
              {/* Trust Badge */}
              <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8 shadow-soft">
                <Sparkles className="h-4 w-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">All-in-One Consulting Operations Platform</span>
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient-shift bg-300% bg-size-300 font-serif-display font-normal italic drop-shadow-lg">
                  Pay Pilot
                </span>
                <br />
                <span className="text-gray-100 text-3xl md:text-4xl lg:text-5xl font-medium drop-shadow-md">
                  Streamline Your Consulting Operations
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="animate-on-scroll text-2xl md:text-3xl lg:text-4xl font-semibold text-cyan-300 mb-8 drop-shadow-md">
                A Smarter Way to Manage Time, Clients, Invoicing & Payroll
              </h2>

              {/* Description */}
              <div className="animate-on-scroll max-w-5xl mx-auto mb-14 space-y-8">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light drop-shadow-sm">
                  Pay Pilot is an all-in-one consultant operations management platform developed by <span className="font-serif-display font-semibold"> ATEK IT </span>
                  to help IT consulting firms, professional services agencies, and staffing companies streamline
                  their back-office processes.
                </p>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-soft">
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    Built to eliminate complexity, reduce overhead, and scale with you Pay Pilot brings clarity and control to your daily operations.
                  </p>
                </div>
              </div>

              {/* Enhanced CTA Buttons */}
              <div className="animate-on-scroll flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
                <a
                  href="mailto: info@atekit.com?subject=Demo Request"
                  className="group relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-10 py-5 rounded-2xl font-semibold text-lg shadow-large hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <Sparkles className="h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Request a Demo</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </a>

                <a
                  href="#features"
                  className="group bg-white/90 backdrop-blur-sm border-2 border-white/30 text-gray-800 px-10 py-5 rounded-2xl font-semibold text-lg shadow-medium hover:shadow-large hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Explore Features</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="w-6 h-10 border-2 border-white/70 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Dashboard Preview Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/30 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Activity className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Platform Preview</span>
            </div>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-6 sm:mb-8 leading-tight px-2 sm:px-0">
              See <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic"> Pay Pilot </span> in Action
            </h2>
          </div>

          {/* Dashboard Images */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Desktop Dashboard */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-primary-50/30 to-secondary-50/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large">
                <img
                  src="/Screenshot-2025-08-08-094954.png"
                  alt="Pay Pilot Admin Dashboard Interface"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Admin Dashboard</h3>
                  <p className="text-neutral-600">Complete overview of all consultants, projects, and financial metrics in one centralized dashboard.</p>
                </div>
              </div>
            </div>

            {/* Mobile App */}
            <div className="animate-on-scroll">
              <div className="bg-gradient-to-br from-secondary-50/30 to-accent-50/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-large">
                <img
                  src="/mobileView.png"
                  alt="PayPilot Mobile Application"
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">Mobile Access</h3>
                  <p className="text-neutral-600">Time tracking and project updates on-the-go with our responsive mobile interface.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built by Consultants Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Lightbulb className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Our Philosophy</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Built by <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Consultants</span>, for Consultants
            </h2>

            <div className="animate-on-scroll max-w-4xl mx-auto space-y-6">
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
                Running a professional services business shouldn't mean juggling spreadsheets, chasing
                timesheets, or manually tracking payments. With PayPilot, you get an intelligent system
                designed to automate and simplify every step—from logging hours to generating payroll.
              </p>
            </div>
          </div>

          {/* Target Audience */}
          <div className="animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-soft border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Is Pay Pilot For?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {targetAudience.map((audience, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{audience}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section id="features" className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Settings className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Core Features</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Everything You Need in <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">One Platform</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {[...coreFeatures, ...additionalFeatures].map((feature, index, arr) => (
              <div
                key={index}
                className={cn(
                  "animate-on-scroll group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100",
                  arr.length % 2 !== 0 && index === arr.length - 1 && "lg:col-span-2 lg:mx-auto lg:w-1/2"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-${feature.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className={`text-${feature.color}-600`}>
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div
                            className={cn(
                              "w-2 h-2 rounded-full flex-shrink-0 mt-1",
                              feature.color === "primary" && "bg-primary-600",
                              feature.color === "secondary" && "bg-secondary-600",
                              feature.color === "accent" && "bg-accent-600"
                            )}
                          ></div>
                          <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-secondary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Cloud className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Seamless Integrations</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Works with Your <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Existing Tools</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary-600">
                    {integration.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{integration.name}</h3>
                <p className="text-gray-600 text-sm">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ConsultPro */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-secondary-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-secondary-200/30 to-accent-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Star className="h-4 w-4 text-secondary-600" />
              <span className="text-xs sm:text-sm font-semibold text-secondary-700">Why Choose PayPilot</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              The Smart Choice for <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Modern Consulting</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {whyChooseReasons.map((reason, index, arr) => {
              const remainder = arr.length % 3;
              const isSecondLast = index === arr.length - 2;
              const isLast = index === arr.length - 1;

              // When 2 items remain, render them together in a centered flex row
              if (remainder === 2 && isSecondLast) {
                const lastTwo = [arr[arr.length - 2], arr[arr.length - 1]];
                return (
                  <div key="last-two-centered" className="lg:col-span-3 hidden lg:block">
                    <div className="flex justify-center gap-6">
                      {lastTwo.map((card, i) => (
                        <div
                          key={`last-two-${i}`}
                          className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center w-full max-w-sm"
                          style={{ animationDelay: `${(arr.length - 2 + i) * 0.1}s` }}
                        >
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <div className="text-primary-600">{card.icon}</div>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">{card.title}</h3>
                          <p className="text-gray-600 text-sm">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // Skip rendering the very last card because it's included in the wrapper above
              if (remainder === 2 && isLast) return null;

              // Normal cards
              return (
                <div
                  key={index}
                  className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary-600">{reason.icon}</div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <Zap className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Fast Implementation</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Deploy in <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Days, Not Weeks</span>
            </h2>

            <p className="animate-on-scroll text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              PayPilot is a fully developed, production-ready SaaS platform. Our implementation process is
              streamlined to ensure your team is up and running with minimal delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {implementationSteps.map((step, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <div className="text-sm font-semibold text-primary-600 mb-2">{step.day}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm text-center">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="animate-on-scroll text-center mt-12">
            <div className="bg-primary-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Most teams go live within 5–7 business days.</h3>
              <p className="text-gray-600 mb-6">Need it sooner? We offer accelerated onboarding for urgent deployments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/30 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <TrendingUp className="h-4 w-4 text-primary-600" />
              <span className="text-xs sm:text-sm font-semibold text-primary-700">Success Stories</span>
            </div>

            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 px-2 sm:px-0">
              Real Results from <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Real Clients</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="animate-on-scroll group relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${story.color}-500 to-${story.color}-600 rounded-xl flex items-center justify-center text-white shadow-medium mb-6`}>
                  {story.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">{story.title}</h3>
                <p className="text-gray-700 font-medium">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo CTA Section */}
      <section id="demo" className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            See <span className="font-serif-display font-normal italic">Pay Pilot</span> in Action
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the platform with a free demo customized for your business needs.
            No commitment. Just clear, powerful solutions.
          </p>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto mb-8">
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white flex-shrink-0" />
                <a href="tel:+14692692345" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  +1 (469) 269-2345
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white flex-shrink-0" />
                <a href="mailto: info@atekit.com" className="text-white hover:text-gray-200 transition-colors duration-200 text-sm sm:text-base">
                  info@atekit.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-white flex-shrink-0" />
                <span className="text-white text-sm sm:text-base">
                  HQ: Frisco, TX | Serving Clients Across the U.S. and India
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto: info@atekit.com?subject=Demo Request"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Request a Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>



            <a
              href="/contact"
              className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Talk to a Consultant</span>
                <Users className="h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultProContent;