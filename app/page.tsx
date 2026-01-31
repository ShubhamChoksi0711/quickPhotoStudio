import Image from "next/image";
import Hero from "./components/home/Hero";
import Directions from "./components/directions/Directions";
import Pricing from "./components/pricing/Pricing";
import Headshot from "./components/headhsots/Headshot";
import Services from "./components/services/Services";
import Whyus from "./components/WhyUs/Whyus";
import FAQ from "./components/faq/FAQ";
import Infant from "./components/headhsots/Infant";
export default function Home() {
  return (
  <main>
      {/* Home content */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* Directions content */}
      <section id="directions" className="min-h-screen">
        <Directions />
      </section>

      {/* Pricing content */}        
      <section id="pricing" className="min-h-screen">
        <Pricing />
      </section>

      {/* Headshot content */}
      <section id="headshot" className="min-h-screen">
        <Headshot />
      </section>

      <Infant />


      {/* services content */}
      <section id="services" className="min-h-screen">
        <Services />
      </section>
      
      {/* WhyUS content */}
      <section id="whyus" className="min-h-screen">
        <Whyus />
      </section>

      {/* FAQ content */}
      <section id="faq" className="min-h-screen">
        <FAQ />
      </section>


    </main>
  );
}
