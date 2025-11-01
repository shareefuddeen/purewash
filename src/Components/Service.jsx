import React,{useEffect} from 'react'
import ServiceImage1 from "../Images/edited-image (2).webp"
import ServiceImage2 from "../Images/edited-image (1).webp"
import ServiceImage3 from "../Images/edited-image (3).webp"
import ServiceImage4 from "../Images/edited-image.webp"
import ServiceBlob4 from "../Images/blob (1).webp"
import ServiceBlob3 from "../Images/blob (2).webp"
import ServiceBlob1 from "../Images/blob (3).webp"
import ServiceBlob2 from "../Images/blob.webp"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap"



export const Service = () => {

  useEffect(()=>{

      gsap.registerPlugin(ScrollTrigger)
         gsap.to(".serviceCard",{
          y:0,
          opacity:1,
          ease:"power1.in",
          stagger:0.1,
          scrollTrigger:{
            trigger:".serviceCard",
            start:"top 80%",
            toggleActions: "play none none reverse",
        }
      });
          gsap.to(".service-heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".service-heading",
        start: "top 85%",
      },
    });
     
  },[])
  return (
         <section id="services"  className="bg-gray-50 text-center flex flex-col justify-center items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 service-heading opacity-0 translate-y-[60px]">Our Services</h2>
        <div className="grid md:grid-cols-4 gap-16 items-center justify-center">
          <div className="transition shadow-lg translate-y-1/2 opacity-0 duration-300 hover:scale-[1.03] relative serviceCard hover:shadow-[0_0_26px_8px_rgba(190,230,255,0.7)] h-[20em] w-[14em] bg-white rounded-xl flex flex-col items-center gap-4">
              <img src={ServiceImage1} alt="service image" className="w-[12em] h-[12em] z-20" />  
            <img src={ServiceBlob2} alt="service image" className="w-[12em] absolute z-10 h-[12em]"/>  
              <h2 className="font-bold text-xl">Wash and fold</h2>
              <p>Everyday laundry, perfectly cleaned and folded</p>          
          </div>
          <div className="transition shadow-lg translate-y-1/2 opacity-0 duration-300 hover:scale-[1.03] relative serviceCard hover:shadow-[0_0_26px_8px_rgba(207,248,215,0.7)] h-[20em] w-[14em] bg-white rounded-xl flex flex-col items-center gap-4">
            <img src={ServiceImage2} alt="service image" className="w-[12em] h-[12em] z-20"/>  
            <img src={ServiceBlob4} alt="service image" className="w-[12em] absolute z-10 h-[12em]"/>  
              <h2 className="font-bold text-xl">Dry cleaning</h2>
              <p>Gentle care for delicate fabrics and formal wear</p>
          </div>
          <div className="transition shadow-lg translate-y-1/2 opacity-0 duration-300 hover:scale-[1.03] relative serviceCard hover:shadow-[0_0_26px_8px_rgba(255,228,184,0.7)] h-[20em] w-[14em] bg-white rounded-xl flex flex-col items-center gap-4">
            <img src={ServiceImage4} alt="service image" className="w-[12em] h-[12em] z-20"/>  
            <img src={ServiceBlob3} alt="service image" className="w-[12em] h-[12em] absolute z-10"/>  
              <h2 className="font-bold text-xl">Pickup & delivery</h2>
              <p>Schedule and relax. we will do the rest</p>
          </div>
          <div className="transition shadow-lg translate-y-1/2 opacity-0 duration-300 hover:scale-[1.03] relative serviceCard hover:shadow-[0_0_26px_8px_rgba(230,214,255,0.7)] h-[20em] w-[14em] bg-white rounded-xl flex flex-col items-center gap-4">
            <img src={ServiceImage3} alt="service image" className="w-[12em] h-[12em] z-20"/>  
            <img src={ServiceBlob1} alt="service image" className="w-[12em] h-[12em] absolute z-10"/>  
              <h2 className="font-bold text-xl">Express service</h2>
              <p>Need it fast? Get your laundry back the same day</p>
          </div>

        </div>
      </section>
  )
}

export default Service;