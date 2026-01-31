'use client'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Directions() {
  const address = "104-22 King St S, Waterloo, ON N2J 1N8, Canada";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="directions" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-900 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-white rounded-full opacity-20 blur-3xl animate-floatReverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 drop-shadow-lg">
              Visit Our <span className="text-blue-900">Studio</span>
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2 animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0 shadow-lg transition-transform duration-300 hover:scale-110">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Address</h3>
                  <p className="text-white/90">
                    104-22 King St S<br />
                    Waterloo, ON N2J 1N8<br />
                    Canada
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2 animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0 shadow-lg transition-transform duration-300 hover:scale-110">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Business Hours</h3>
                  <p className="text-white/90">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 transform transition-all duration-300 hover:translate-x-2 animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                <div className="bg-blue-900 p-3 rounded-lg flex-shrink-0 shadow-lg transition-transform duration-300 hover:scale-110">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1 text-white">Contact</h3>
                  <a 
                    href="tel:3658821308" 
                    className="text-blue-900 hover:text-blue-800 transition-colors font-semibold"
                  >
                    (365) 882-1308
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-white/30 animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                <p className="text-white/90 italic">
                  Walk-ins welcome! No appointment necessary.<br />
                  Free parking available at the rear of the building.
                </p>
              </div>
            </div>
          </div>

          {/* Right Map */}
          <div className="relative animate-fadeInRight">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105 h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.8!2d-80.5204!3d43.4643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882bf3f7e1e1e1e1%3A0x1234567890!2s104-22%20King%20St%20S%2C%20Waterloo%2C%20ON%20N2J%201N8!5e0!3m2!1sen!2sca!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="sepia-[0.2] brightness-100"
              ></iframe>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-56 h-56 bg-white/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

       
      </div>
      <style jsx>{`
                @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(20px) translateX(-10px);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out both;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.5s both;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-floatReverse {
          animation: floatReverse 8s ease-in-out infinite;
        }

      `}</style>

    </section>
  );
}