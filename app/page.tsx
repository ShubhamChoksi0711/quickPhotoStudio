import Image from "next/image";
import Hero from "./components/home/Hero";
import Directions from "./components/directions/Directions";

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
        <h1>pricing</h1>
      </section>

      {/* Appointment content */}
      <section id="appointment" className="min-h-screen">
        <h1>appointment</h1>  
      </section>
      
      {/* Contact content */}
      <section id="contact" className="min-h-screen">
        <h1>contact us</h1>
      </section>
    </main>
  );
}
