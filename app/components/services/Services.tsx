'use client';
import { Check, Globe, FileText, Shield, GraduationCap, Camera, CreditCard, Briefcase } from 'lucide-react';

export default function PhotoServices() {
  const services = [
    { icon: Globe, text: "Any country passport and visa photo" },
    { icon: FileText, text: "Canadian passport" },
    { icon: FileText, text: "Canadian citizenship" },
    { icon: CreditCard, text: "PR application" },
    { icon: CreditCard, text: "PR card" },
    { icon: Briefcase, text: "Study and Work permit" },
    { icon: FileText, text: "Indian OCI" },
    { icon: Shield, text: "Security license" },
    { icon: Shield, text: "Firearms license" },
    { icon: CreditCard, text: "Status card" },
    { icon: GraduationCap, text: "School and college ID card" },
    { icon: Camera, text: "Headshots" },
    { icon: GraduationCap, text: "Graduation photos" },
  ];

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-floatReverse"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            We Do <span className="text-blue-900">Photos For</span>
          </h2>
          <p className="text-white/90 text-lg max-w-3xl mx-auto">
            Professional photography services for all your identification and documentation needs. 
            We ensure compliance with all official requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border-2 border-amber-200 hover:border-blue-900 hover:shadow-xl hover:shadow-blue-900/30 transition-all duration-300 transform hover:scale-105 animate-slideUp"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Icon */}
                <div className="flex items-center gap-4">
                  <div className="bg-blue-900 p-3 rounded-xl shadow-lg group-hover:shadow-blue-900/50 transition-all duration-300 transform group-hover:rotate-6">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Check mark */}
                  <div className="flex-shrink-0">
                    <div className="bg-green-500 rounded-full p-1 shadow-md">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="mt-4 text-gray-900 font-semibold text-lg group-hover:text-blue-900 transition-colors duration-300">
                  {service.text}
                </p>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-900/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-16 bg-white border-4 border-blue-900 rounded-2xl p-8 text-center shadow-2xl animate-fadeIn transform transition-all duration-300 hover:scale-105" style={{ animationDelay: '0.8s' }}>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Don't see what you're looking for?
          </h3>
          <p className="text-gray-700 text-lg mb-6">
            We handle all types of ID photos. Give us a call to discuss your specific requirements.
          </p>
          <a
            href="tel:3658821308"
            className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
          >
            Call (365) 882-1308
          </a>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

        .animate-slideUp {
          animation: slideUp 0.6s ease-out both;
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