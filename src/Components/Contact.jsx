import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Contact = () => {

  useEffect(()=>{

        gsap.registerPlugin(ScrollTrigger);

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
     <section id="contact" className="min-h-screen text-center bg-gray-50">
        <h2 className="contact-heading opacity-0 translate-y-[60px] text-4xl md:text-5xl  font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">
          Have questions or ready to get started? Reach out to us today and experience laundry done right</p>
       <div className="flex justify-center items-center gap-6">
       <form className="contact-form flex flex-col gap-6 justify-center items-center w-full max-w-md mx-auto bg-gray-50 p-8 rounded-2xl shadow-md border border-gray-100">
  {/* Name */}
  <div className="flex flex-col w-full">
    <label htmlFor="name" className="text-gray-700 font-medium mb-2 text-left">
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      placeholder="Enter your name"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
  </div>

  {/* Phone */}
  <div className="flex flex-col w-full">
    <label htmlFor="phone" className="text-gray-700 font-medium mb-2 text-left">
      Phone Number
    </label>
    <input
      type="tel"
      name="phone"
      id="phone"
      placeholder="Enter your phone number"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    />
  </div>

  {/* Message */}
  <div className="flex flex-col w-full">
    <label htmlFor="message" className="text-gray-700 font-medium mb-2 text-left">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      placeholder="Write a message..."
      rows="5"
      className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
    ></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    className="mb-4 herobtn mt-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition"
  >
    Send Message
  </button>
</form>
         
       </div>
      </section>
  )
}

export default Contact;