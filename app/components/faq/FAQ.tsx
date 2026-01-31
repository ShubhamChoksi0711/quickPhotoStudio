'use client';
import { ChevronDown, Shirt, Clock, Mail, Calendar, CreditCard, MapPin, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      icon: Shirt,
      question: "What to Wear for Your Photo",
      answer: (
        <div className="space-y-3">
          <p>Choose darker or solid-colored clothing. Avoid white, grey, or very light shades as they can blend into the background.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Do not wear hats or head coverings unless required for religious or medical reasons</li>
            <li>Skip flashy or oversized jewelry, especially anything that may block your face</li>
            <li>Any color besides white or grey works well, with darker tones giving the best results</li>
            <li>Keep your appearance neat and well-groomed. You're welcome to dress professionally, but casual attire is perfectly fine too</li>
          </ul>
        </div>
      )
    },
    {
      icon: Clock,
      question: "How Long Does It Take?",
      answer: (
        <div className="space-y-3">
          <p>Most customers receive their photos within <strong>5–10 minutes</strong> after arrival.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>For group visits, please allow an additional 5 minutes per person</li>
            <li>Photo sessions for children and infants may take slightly longer — up to 10 extra minutes — to ensure proper positioning and quality</li>
            <li>To minimize waiting time, we recommend booking an appointment in advance</li>
          </ul>
        </div>
      )
    },
    {
      icon: Mail,
      question: "How Do We Receive Our Digital Photo?",
      answer: (
        <div className="space-y-3">
          <p>Your digital image will be delivered straight to your email as a <strong>JPEG file</strong>.</p>
          <p>We send it out immediately after your photo session, so you'll receive it right away and you can access it whenever you want from your email or just download it!</p>
        </div>
      )
    },
    {
      icon: Calendar,
      question: "How Long Are These Pictures Valid For?",
      answer: (
        <div className="space-y-3">
          <p>Passport and ID photos taken in Canada are valid for <strong>six months</strong> from the date they are captured.</p>
          <p>During this period, we securely store your photos in our system for easy reprints if needed.</p>
          <p className="text-sm italic">To protect customer privacy, images are not saved under personal details — they are organized only by date taken for security and confidentiality.</p>
        </div>
      )
    },
    {
      icon: CreditCard,
      question: "Mode of Payments?",
      answer: (
        <div className="space-y-3">
          <p>We provide multiple payment methods for your convenience:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Cash</li>
            <li>Debit cards</li>
            <li>Credit cards</li>
            <li>E-transfer</li>
          </ul>
          <p>Choose the option that works best for you!</p>
        </div>
      )
    },
    {
      icon: MapPin,
      question: "Where Are You Located?",
      answer: (
        <div className="space-y-3">
          <p className="font-semibold text-lg">104-22 King St S, Waterloo, ON N2J 1N8</p>
          <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4 space-y-2">
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Conveniently located <strong>opposite to Service Canada - Passport Office Building</strong></span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Bus stop and train station right outside Quick Photo Studio</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Plenty of 2hrs free street parking or 2hrs free parking behind Waterloo Square</span>
            </p>
            <p className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span>Wheelchair access available</span>
            </p>
          </div>
        </div>
      )
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-floatReverse"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Frequently Asked <span className="text-blue-900">Questions</span>
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Everything you need to know about our photo services. Can't find what you're looking for? Give us a call!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const IconComponent = faq.icon;
            const isOpen = openIndex === index;
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-amber-200 hover:border-blue-900 shadow-lg transition-all duration-300 overflow-hidden animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left transition-colors duration-300 hover:bg-amber-50"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-blue-900 p-3 rounded-xl shadow-md flex-shrink-0">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-blue-900 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Answer Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 text-gray-700 leading-relaxed border-t-2 border-amber-100">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center animate-fadeIn" style={{ animationDelay: '0.7s' }}>
          <div className="bg-white border-4 border-blue-900 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 hover:scale-105">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 text-lg mb-6">
              Our friendly team is here to help! Give us a call or visit us during business hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:3658821308"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Call (365) 882-1308
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('directions');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-amber-500 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                Get Directions
              </button>
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