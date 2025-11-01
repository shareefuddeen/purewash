import React,{useEffect} from 'react'
import locationIcon from "../Images/location.webp"
import phoneIcon from "../Images/phone-call.webp"
import emailIcon from "../Images/email.webp"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from "gsap"



const ContactSection = () => {

  useEffect(()=>{

      gsap.registerPlugin(ScrollTrigger)
         gsap.to(".contactCard",{
          y:0,
          opacity:1,
          ease:"power1.in",
          stagger:0.3,
          scrollTrigger:{
            trigger:".contactCard",
            start:"top 90%",
            toggleActions: "play none none reverse",
        }
      });
           gsap.to(".contact-heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".contact-heading",
        start: "top 85%",
      },
    });
     
  },[])
  return (
    <section
      id="contact"
      className="py-20 bg-gray-50 text-center relative overflow-hidden"
    >
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl contact-heading opacity-0 translate-y-[60px] font-bold text-gray-900 mb-6">
        Get in <span className="text-blue-600">Touch</span>
      </h2>
      <p className="text-gray-500 text-lg mb-12">
        We’d love to hear from you. Reach out anytime!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        <div className="flex contactCard shadow-lg p-6 bg-white hover:shadow-xl transition opacity-0 translate-y-[30px]  flex-col items-center">
          <img src={locationIcon} alt="location icon" className="w-12 h-12"/>
          <p className="text-gray-700 mt-2 font-medium">Abirem Achiase, behind Darul Salam School</p>
        </div>
        <div className="flex contactCard shadow-lg p-6 bg-white hover:shadow-xl transition opacity-0 translate-y-[30px] flex-col items-center">
          <img src={phoneIcon} alt="location icon" className="w-12 h-12"/>
          <p className="text-gray-700 mt-2 font-medium">+233 55 753 6117, +233 50 815 7355</p>
        </div>
        <div className="flex contactCard shadow-lg p-6 bg-white hover:shadow-xl transition opacity-0 translate-y-[30px] flex-col items-center">
          <img src={emailIcon} alt="location icon" className="w-12 h-12"/>
          <p className="text-gray-700 mt-2 font-medium">
            mujeebmutmaen@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
