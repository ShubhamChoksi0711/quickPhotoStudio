'use client'
import { Phone } from 'lucide-react';

export default function Hero() {

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fadeIn drop-shadow-lg">
              Professional
              <br />
              & Guaranteed
              <br />
              <span className="text-blue-900 italic drop-shadow-lg">images here</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:3658821308"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center gap-3 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-slideInLeft"
              >
                <Phone className="h-5 w-5 animate-pulse" />
                Walk-in anytime
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById('pricing');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 animate-slideInRight"
              >
                Book Appointment |<br /> Skip the line
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:w-1/2 flex items-start justify-center lg:justify-end lg:pt-0">
            <div className="relative w-full h-auto max-w-lg lg:max-w-full animate-fadeInRight">
              <img
                src="/images/WomenPassport.png"
                alt="Perfect Headshot"
                className="w-full h-auto object-contain object-top rounded-lg lg:rounded-none shadow-2xl transition-transform duration-500 hover:scale-105"
              />
              {/* Decorative border effect */}
              <div className="absolute inset-0 border-4 border-blue-900 rounded-lg lg:rounded-none opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background circles */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full opacity-20 blur-3xl animate-floatReverse"></div>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
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
          animation: fadeIn 1s ease-out;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.4s both;
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