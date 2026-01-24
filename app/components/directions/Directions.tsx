import { MapPin, Clock, Phone, Navigation } from 'lucide-react';

export default function Directions() {
  const address = "1234 17th Avenue SW, Calgary, AB T2T 0A1";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section id="directions" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Visit Our <span className="text-cyan-400">Studio</span>
            </h2>
            
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-gray-300">
                    1234 17th Avenue SW<br />
                    Calgary, AB T2T 0A1<br />
                    Canada
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Contact</h3>
                  <a 
                    href="tel:5876000338" 
                    className="text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    (548) 255-2036
                  </a>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-cyan-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-cyan-300 transition-colors duration-200 font-semibold text-lg"
                >
                  <Navigation className="h-5 w-5" />
                  Get Directions
                </a>
              </div>

              {/* Additional Info */}
              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-300 italic">
                  Walk-ins welcome! No appointment necessary.<br />
                  Free parking available at the rear of the building.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/PhotoStudio.png"
                alt="Our Calgary store location"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-56 h-56 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Google Maps Embed (Optional) */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.3!2d-114.0719!3d51.0447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDAyJzQwLjkiTiAxMTTCsDA0JzE4LjgiVw!5e0!3m2!1sen!2sca!4v1234567890"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale"
          ></iframe>
        </div>
      </div>
    </section>
  );
}