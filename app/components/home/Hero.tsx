'use client'
import { Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white z-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Professional
              <br />
              & Guranteed
              <br />
              <span className="text-cyan-400 italic">images here</span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="tel:5482552036"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-3 font-semibold text-lg"
              >
                <Phone className="h-5 w-5" />
                Walk-in anytime
              </a>
              
              <button
                onClick={() => {
                  const element = document.getElementById('appointment');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold text-lg"
              >
                Book Appointment |<br /> Skip  the line
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-end">
              <img
                src="/images/WomenPassport.png"
                alt="Professional photographer with camera and passport"
                className="w-full h-auto max-w-lg lg:max-w-none lg:h-full object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent pointer-events-none"></div>
    </section>
  );
}