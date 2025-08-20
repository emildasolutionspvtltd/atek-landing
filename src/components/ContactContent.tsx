import React, { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { AuroraBackground } from './ui/aurora-background';
import { initSmoothAnimations, cleanupAnimations } from '../utils/smoothAnimations';

const ContactContent = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = initSmoothAnimations(sectionRef.current);
    return () => cleanupAnimations(observer);
  }, []);

  return (
    <div ref={sectionRef}>
      {/* Hero Section */}
      <div className="relative overflow-hidden min-h-screen bg-[url('/business-man-is-using-tablet-with-connection-international-people-by-social-network.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <section className="relative z-10 pt-24 pb-16">
          <div className="relative max-w-8xl mx-auto px-6 lg:px-8 min-h-screen flex items-center">
            <div className="w-full text-center mx-auto">
              {/* Trust Badge */}
              <div className="animate-on-scroll inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-6 py-3 mb-12 shadow-soft">
                <Mail className="h-4 w-4 text-primary-600" />
                <span className="text-sm font-semibold text-primary-700">Let's Start the Conversation</span>
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-br from-accent-400 to-accent-600 rounded-full border-2 border-white"></div>
                </div>
              </div>

              {/* Main Headline - Centered with enhanced gradient */}
              <h1 className="animate-on-scroll text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-16 leading-tight max-w-6xl mx-auto text-center">
                Let's Connect. Let's Create.
                <br />
                Contact <span className="relative">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-serif-display font-normal italic text-shadow-lg">ATEK IT</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent font-serif-display font-normal italic blur-sm opacity-50 -z-10">ATEK IT</span>
                </span> Today
              </h1>
              
              {/* Description text with proper centering */}
              <div className="animate-on-scroll max-w-4xl mx-auto mb-12 text-center">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
                  Ready to transform your business with innovative technology solutions? 
                  Let's discuss how we can help you achieve your goals.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>
      </div>

      {/* Contact Information and Form */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary-100/40 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-secondary-100/40 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="animate-on-scroll inline-flex items-center space-x-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full px-4 py-2 mb-6">
                <Star className="h-4 w-4 text-primary-600" />
                <span className="text-xs sm:text-sm font-semibold text-primary-700">Contact Information</span>
              </div>
              
              <h2 className="animate-on-scroll text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
                Let's <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Connect</span>
              </h2>
              
              <div className="space-y-6">
                <div className="animate-on-scroll group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        7460 Warren Pkwy, Suite 100-148<br />
                        Frisco, TX 75034
                      </p>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="h-6 w-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+14692692345" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                        +1 (469) 269-2345
                      </a>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="h-6 w-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@atekit.com" className="text-gray-600 hover:text-primary-600 transition-colors duration-200">
                        info@atekit.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="animate-on-scroll group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-neutral-200/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="h-6 w-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 shadow-soft border border-neutral-200/50">
                <div className="inline-flex items-center space-x-2 bg-secondary-100/80 backdrop-blur-sm border border-secondary-200/50 rounded-full px-4 py-2 mb-6">
                  <Send className="h-4 w-4 text-secondary-600" />
                  <span className="text-xs sm:text-sm font-semibold text-secondary-700">Send Us a Message</span>
                </div>
                
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                  Start Your <span className="bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Project</span>
                </h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 bg-white/80 backdrop-blur-sm"
                    >
                      <option value="">Select a service</option>
                      <option value="paypilot">Pay Pilot SaaS</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="development">Software Development</option>
                      <option value="managed-it">Managed IT Services</option>
                      <option value="devops">DevOps & Cloud</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      placeholder="Tell us about your project or requirements..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 resize-vertical bg-white/80 backdrop-blur-sm"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-8 py-4 rounded-lg hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 font-semibold flex items-center justify-center space-x-2 shadow-medium hover:shadow-large transform hover:-translate-y-1"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary-100/50 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-100/50 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="animate-on-scroll inline-flex items-center space-x-2 bg-accent-100/80 backdrop-blur-sm border border-accent-200/50 rounded-full px-4 sm:px-6 py-3 mb-6">
              <MapPin className="h-4 w-4 text-accent-600" />
              <span className="text-xs sm:text-sm font-semibold text-accent-700">Visit Our Office</span>
            </div>
            
            <h2 className="animate-on-scroll text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Located in the Heart of <span className="bg-gradient-to-r from-accent-600 to-primary-600 bg-clip-text text-transparent font-serif-display font-normal italic">Frisco, Texas</span>
            </h2>
            <p className="animate-on-scroll text-lg sm:text-xl text-gray-600">
              Easy access from Dallas-Fort Worth metroplex
            </p>
          </div>
          
          <div className="animate-on-scroll bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 shadow-large border border-neutral-200/50">
            <div className="aspect-w-16 aspect-h-9 rounded-xl sm:rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8234567890123!2d-96.8234567!3d33.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2c123456789a%3A0x123456789abcdef0!2s7460%20Warren%20Pkwy%2C%20Frisco%2C%20TX%2075034!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
                title="ATEK IT Office Location"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-600 mb-2">
                <strong>7460 Warren Pkwy, Suite 100-148, Frisco, TX 75034</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://maps.google.com/?q=7460+Warren+Pkwy,+Suite+100-148,+Frisco,+TX+75034"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                
                <a
                  href="/contact"
                  className="group inline-flex items-center space-x-2 border-2 border-primary-300 text-primary-700 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors duration-200 font-semibold"
                >
                  <span>Schedule a Visit</span>
                  <CheckCircle className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-bl from-white/10 to-transparent rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get <span className="font-serif-display font-normal italic">Started</span>?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Choose how you'd like to connect with our team and begin your digital transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14692692345"
              className="group bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 font-semibold text-base sm:text-lg shadow-medium hover:shadow-large transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-2">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Call Now</span>
              </div>
            </a>
            
            <a
              href="mailto:info@atekit.com?subject=Demo Request"
              className="group border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-white/10 transition-all duration-300 font-semibold text-base sm:text-lg backdrop-blur-sm"
            >
              <div className="flex items-center justify-center space-x-2">
                <span>Schedule a Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;