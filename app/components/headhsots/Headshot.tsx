'use client';
import { Clock, Shirt, Image, Mail, Sparkles } from 'lucide-react';

export default function Headshots() {
  const packages = [
    { quantity: "1 Digital Photo", price: "$35" },
    { quantity: "Set of 2 Digital Photos", price: "$65" },
    { quantity: "Set of 3 Digital Photos", price: "$75" },
    { quantity: "Set of 4 Digital Photos", price: "$90" },
    { quantity: "Set of 5 Digital Photos", price: "$100" },
  ];

  return (
    <section id="headshots" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-900/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-floatReverse"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Main Card */}
          <div className="relative animate-fadeInLeft">
            {/* Glow effect behind card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-white/30 rounded-3xl blur-2xl transform scale-105"></div>
            
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 border-4 border-blue-900 shadow-2xl">
              
              {/* Heading with icon */}
              <div className="text-center mb-8 animate-fadeIn">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <Sparkles className="h-8 w-8 text-blue-900 animate-pulse" />
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Personal Headshots | Graduation photos
                  </h2>
                  <Sparkles className="h-8 w-8 text-blue-900 animate-pulse" />
                </div>

              </div>

              {/* Pricing Options */}
              <div className="space-y-3 mb-10">
                {packages.map((pkg, index) => (
                  <div 
                    key={index}
                    className="group flex justify-between items-center bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 border-2 border-amber-200 hover:border-blue-900 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 transform hover:scale-[1.02] animate-slideInLeft"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-gray-900 font-medium text-lg group-hover:text-blue-900 transition-colors">
                      {pkg.quantity}
                    </span>
                    <span className="text-blue-900 font-bold text-2xl">
                      {pkg.price}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider with gradient */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t-2 border-amber-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-gray-600 text-sm font-semibold">What's Included</span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {/* Time */}
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:border-blue-900 transition-all duration-300 transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                  <div className="bg-blue-900 p-3 rounded-full mb-3 shadow-lg transform transition-transform duration-300 hover:rotate-12">
                    <Clock className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">15-20 minutes</span>
                </div>

                {/* Outfit */}
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:border-blue-900 transition-all duration-300 transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                  <div className="bg-blue-900 p-3 rounded-full mb-3 shadow-lg transform transition-transform duration-300 hover:rotate-12">
                    <Shirt className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">1 Outfit</span>
                </div>

                {/* Backdrop */}
                <div className="flex flex-col items-center text-center p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl border-2 border-amber-200 hover:border-blue-900 transition-all duration-300 transform hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
                  <div className="bg-blue-900 p-3 rounded-full mb-3 shadow-lg transform transition-transform duration-300 hover:rotate-12">
                    <Image className="h-7 w-7 text-white" />
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">1 Backdrop</span>
                </div>
              </div>

              {/* Delivery Info */}
              <div className="bg-blue-900 border-2 border-blue-800 rounded-xl p-5 text-center shadow-lg animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                <div className="flex items-center justify-center gap-2 text-white">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold text-lg">
                    Sent via email in highest picture quality
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Two Images */}
          <div className="space-y-6 animate-fadeInRight">
            {/* Second Image - Add your second photo here */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-900 transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/Graduation.png"
                  alt="Professional headshot example"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                
                {/* Text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">
                    Professional Headshots
                  </h3>
                  <p className="text-white text-base font-semibold drop-shadow-md">
                    Perfect for LinkedIn & portfolios
                  </p>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

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

        @keyframes fadeInLeft {
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
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
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

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out both;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.3s both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out both;
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