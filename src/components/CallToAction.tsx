import React from 'react';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Let's Build Something Powerful Together
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
            Whether you're scaling a startup, digitizing an enterprise, or streamlining your consulting 
            business with PayPilot, ATEK IT is your trusted partner for digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-start space-x-4">
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Visit Our Office</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  7460 Warren Pkwy, Suite 100-148<br />
                  Frisco, TX 75034
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Call Us</h3>
                <a 
                  href="tel:+14692692345" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  +1 (469) 269-2345
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary-400 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-base sm:text-lg mb-1">Email Us</h3>
                <a
                  href="mailto:info@atekit.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                >
                  info@atekit.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Ready to Get Started?</h3>
            <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
              Choose how you'd like to connect with our team and begin your digital transformation journey.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              <a
                href="/contact#contact-section"
                className="w-full bg-primary-600 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>

              <a
                href="/contact#contact-section"
                className="w-full border-2 border-white/30 text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Schedule a Demo</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;