'use client';
import { Clock, DollarSign, Camera, ThumbsUp, Star, CheckCircle, Zap, Award, Users, MapPin, Baby } from 'lucide-react';

export default function WhyUsAndReviews() {
  const whyUsPoints = [
    {
      icon: Zap,
      title: "Quick Photo Service",
      description: "Have your passport or ID photos professionally prepared in as little as five minutes — fast, affordable, reliable, and hassle-free.",
      difference: "Others: 24-48 hour processing time"
    },
    {
      icon: CheckCircle,
      title: "Guaranteed Acceptance Promise",
      description: "Our team follows official photo standards for multiple countries and document types, ensuring your photos meet requirements without delays or rejections.",
      difference: "Others: No guarantee, you pay again"
    },
    {
      icon: Users,
      title: "Covers Everyone's Need",
      description: "From newborn infants to seniors - all types and size specification photos are done here.",
      difference: "Others: Limited age groups, restricted sizes"
    },
    {
      icon: MapPin,
      title: "Prime Location Convenience",
      description: "Conveniently located opposite to Service Canada Passport Office - Waterloo Square, saving you time and extra travel.",
      difference: "Others: Far from passport offices"
    },
    {
      icon: Baby,
      title: "Specialized Infant Photography",
      description: "High-speed camera technology, trained professionals, and custom infant positioning chairs with cushioned support for babies unable to sit independently.",
      difference: "Others: Limited infant experience"
    },
    {
      icon: Clock,
      title: "No Appointment Required",
      description: "Walk in during business hours and get started right away. Appointments are optional for customers who prefer reserved service times.",
      difference: "Others: Appointment required, long waits"
    }
  ];

  const reviews = [
    {
      name: "Sarah Thompson",
      rating: 5,
      text: "Absolutely fantastic service! Got my passport photos done in less than 10 minutes. The staff was professional and made sure everything was perfect. Highly recommend!",
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best place for Indian OCI photos in Waterloo. They knew exactly what was needed and made the process so easy. Great prices too!",
      date: "1 month ago"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "Took my 6-month-old for passport photos. The photographer was so patient and gentle with my baby. Got beautiful photos on the first try!",
      date: "3 weeks ago"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Professional headshots turned out amazing! Used them for my LinkedIn profile and got so many compliments. Worth every penny.",
      date: "1 week ago"
    }
  ];

  return (
    <section id="whyus" className="min-h-screen bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-floatReverse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Why Choose Us Section */}
        <div className="mb-24">
          {/* Header */}
          <div className="text-center mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Why Choose <span className="text-blue-900">Us?</span>
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We're not just another photo studio. Here's what makes us different from the rest.
            </p>
          </div>

          {/* Why Us Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUsPoints.map((point, index) => {
              const IconComponent = point.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl p-8 border-2 border-amber-200 hover:border-blue-900 hover:shadow-2xl hover:shadow-blue-900/30 transition-all duration-300 transform hover:scale-105 animate-slideUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="bg-blue-900 p-4 rounded-2xl inline-block shadow-lg group-hover:shadow-blue-900/50 transition-all duration-300 transform group-hover:rotate-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {point.description}
                  </p>

                  {/* Difference Box */}
                  <div className="bg-red-50 border-2 border-red-300 rounded-lg p-3 mt-4">
                    <p className="text-red-600 text-sm font-medium flex items-start gap-2">
                      <span className="text-red-600 font-bold flex-shrink-0">✗</span>
                      <span>{point.difference}</span>
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-900/5 to-transparent rounded-bl-full"></div>
                </div>
              );
            })}
          </div>

          {/* Special Feature Highlight */}
          <div className="mt-12 bg-white border-4 border-blue-900 rounded-2xl p-8 shadow-2xl animate-fadeIn" style={{ animationDelay: '0.7s' }}>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Our <span className="text-blue-900">Professional Process</span>
              </h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              Our process goes beyond taking a simple photo. We carefully adjust lighting to reduce shadows, 
              ensure proper head positioning, and capture beautiful photos while maintaining a safe and comfortable 
              environment for you. This ensures your photos meet strict biometric standards without compromising your beauty.
            </p>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div>
          {/* Header */}
          <div className="text-center mb-16 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex items-center gap-3 mb-4">
              <Users className="h-10 w-10 text-blue-900" />
              <h2 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-lg">
                Customer <span className="text-blue-900">Reviews</span>
              </h2>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 fill-yellow-500 text-yellow-500 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
              <span className="text-white text-2xl font-bold ml-2 drop-shadow-md">5.0</span>
            </div>
            <p className="text-white/90 text-lg">
              Trusted by hundreds of satisfied customers in Waterloo
            </p>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-amber-200 hover:border-blue-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 animate-slideUp"
                style={{ animationDelay: `${1.0 + index * 0.1}s` }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between border-t-2 border-amber-200 pt-4">
                  <div>
                    <p className="text-gray-900 font-bold text-lg">{review.name}</p>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                  <div className="bg-blue-900 p-2 rounded-full">
                    <ThumbsUp className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Google Reviews CTA */}
          <div className="mt-12 text-center animate-fadeIn" style={{ animationDelay: '1.4s' }}>
            <div className="bg-white border-4 border-blue-900 rounded-2xl p-8 shadow-2xl inline-block transform transition-all duration-300 hover:scale-105">
              <p className="text-gray-900 text-lg mb-4 font-semibold">
                See what our customers are saying on Google
              </p>
              <a
                href="https://www.google.com/search?q=your+business+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1"
              >
                <Star className="h-5 w-5" />
                View All Reviews
              </a>
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