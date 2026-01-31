'use client'
import { Check, Calendar } from 'lucide-react';
import { PopupModal } from 'react-calendly';
import { useState, useEffect  } from 'react';
import { SelectionModal } from './SelectionModal ';

export default function Pricing() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('');
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  const baseUsername = 'quickphotostudioltd';

  useEffect(() => {
    setRootElement(document.body);
  }, []);


   const appointmentOptions = [
    {
      title: '1 Person',
      subtitle: '~ 30 minutes',
      eventType: '30min'
    },
    {
      title: '2 - 4 People',
      subtitle: '~ 20 minutes',
      eventType: '2-4-people-20-minutes'
    },
    {
      title: '5 - 8 People',
      subtitle: '~ 35 minutes',
      eventType: '5-8-people-35-minutes'
    },
    {
      title: 'Baby (0-2 Years Old)',
      subtitle: '~ 25 minutes',
      eventType: 'baby-25-minutes'
    },
    {
      title: 'Baby & Parents',
      subtitle: '~ 30 minutes',
      eventType: 'baby-parents-30-minutes'
    }
  ];

  const pricingPlans = [
    {
      title: "Passport Photos",
      price: "$13.97",
      features: [
        "2 Printed copies",
        "With stamp and Date",
        "Any size or type of photo",
        "Ready in under 10 minutes"
      ],
      popular: false
    },
    {
      title: "Digital Photos",
      price: "$13.97",
      features: [
        "1 soft copy on your email",
        "Any size or type of photo",
        "Same-day service"
      ],
      popular: false
    },
    {
      title: "Bundle",
      originalPrice: "$27.94",
      price: "$20",
      features: [
        "2 printed copies",
        "1 soft copy",
        "Any size or type of photo",
      ],
      popular: true
    },
    {
      title: "Infant Photos",
      price: "$24.97",
      description: "We are specialized in this.",
      features: [
        "2 printed photos or 1 soft copy",
        "Any size or type of photo",
        "Age 0-2 years",
      ],
      popular: false
    }
  ];

    const openSelectionModal = () => {
    setIsSelectionOpen(true);
  };

  // When user selects an option from the modal
  const handleOptionSelect = (eventType: string) => {
    setSelectedEventType(eventType);
    setIsCalendlyOpen(true);
  };


  return (
    <section id="pricing" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-900 rounded-full opacity-10 blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-72 h-72 bg-white rounded-full opacity-20 blur-3xl animate-floatReverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Simple & <span className="text-blue-900">Transparent Pricing</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Professional photo services at affordable prices. All packages include high-quality prints and digital copies.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slideUp ${
                plan.popular
                  ? 'border-blue-900 shadow-lg shadow-blue-900/30'
                  : 'border-amber-200 hover:border-blue-900/50'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <span className="bg-blue-900 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    ⭐ POPULAR
                  </span>
                </div>
              )}

              {/* Card Content */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {plan.title}
                </h3>
                <div className="mb-4">
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-2xl text-gray-400 line-through">
                        {plan.originalPrice}
                      </span>
                      <span className="text-blue-900 text-xl">→</span>
                    </div>
                  )}
                  <span className="text-5xl font-bold text-blue-900">
                    {plan.price}
                  </span>
                  {plan.originalPrice && (
                    <div className="mt-2">
                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                        SAVE $7.94
                      </span>
                    </div>
                  )}
                </div>
                {plan.description && (
                  <p className="text-gray-600 text-sm leading-relaxed font-medium">
                    {plan.description}
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <Check className="h-5 w-5 text-blue-900 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button
                onClick={openSelectionModal}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-xl transform hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-blue-900 text-white hover:bg-blue-800'
                    : 'bg-amber-400 text-gray-900 hover:bg-amber-500'
                }`}
              >
                <Calendar className="h-5 w-5" />
                Book Appointment
              </button>
            </div>
          ))}
        </div>

                {/* Selection Modal */}
        <SelectionModal
          isOpen={isSelectionOpen}
          onClose={() => setIsSelectionOpen(false)}
          onSelect={handleOptionSelect}
          options={appointmentOptions}
        />

        {rootElement && (
          <PopupModal
            url={`https://calendly.com/${baseUsername}/${selectedEventType}`}
            onModalClose={() => setIsCalendlyOpen(false)}
            open={isCalendlyOpen}
            rootElement={rootElement}
          />
        )}

        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.5s' }}>
          <p className="text-white/90 text-sm mb-6">
            All prices in CAD. Walk-ins welcome, no appointment necessary. 
            <span className="text-blue-900 font-semibold"> Call us for group or bulk pricing.</span>
          </p>
          
          {/* Highlighted Add-on Box */}
          <div className="max-w-2xl mx-auto bg-white border-4 border-blue-900 rounded-xl p-6 shadow-xl transform transition-all duration-300 hover:scale-105">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-gray-900 text-lg font-semibold">
                Additional 2 printed copies for
              </span>
              <span className="text-3xl font-bold text-blue-900">
                $7
              </span>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
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
          animation: slideUp 0.8s ease-out both;
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