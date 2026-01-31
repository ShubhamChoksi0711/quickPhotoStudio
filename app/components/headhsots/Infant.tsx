'use client'
export default function CenteredImageSection() {
  return (
    <section id="headshots" className="bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 relative">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="space-y-6 animate-fadeInRight">
            {/* Second Image - Add your second photo here */}
            <div className="relative animate-fadeIn" style={{ animationDelay: '0.5s' }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-900 transform transition-transform duration-500 hover:scale-105">
                <img
                  src="/images/infant.png"
                  alt="Professional headshot example"
                  className="w-full h-auto object-cover"
                />
                {/* Overlay gradient */}
                
               
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
            </div>

          </div>
          </div>

    </section>
  );
}