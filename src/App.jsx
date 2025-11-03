import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import About from "./Components/About"
import Service from "./Components/Service"
import Choose from "./Components/Choose"
import Testimonial from "./Components/Testimonial"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import ContactSection from "./Components/ContactSection"
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const sections = useRef([]);

  useEffect(() => {
    const lenis = new Lenis({ smooth: true, lerp: 0.08 });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  }, []);


  return (
    <div className="text-primary">
      <Navbar/> 
      <Hero/> 
      <About/> 
      <Service/> 
      <Choose/>
      <Testimonial/> 
      <Contact/> 
      <ContactSection/>
      <Footer/> 
      <Analytics />
    </div>
  );
};

export default App;
