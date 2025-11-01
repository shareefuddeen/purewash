import React, { useEffect } from "react";
import checkImage from "../Images/check-mark.png";
import checkGif from "../Images/Laundry and dry cleaning.gif";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Choose = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const checks = gsap.utils.toArray(".checkList");

    checks.forEach((check, i) => {
      gsap.fromTo(
        check,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: check,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
   gsap.to(".choose-heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".choose-heading",
        start: "top 85%",
      },
    });
  }, []);

  const features = [
    "Eco-friendly cleaning solutions",
    "Affordable, transparent pricing",
    "On-time delivery, every time",
    "Trusted by hundreds of happy customers",
  ];

  return (
    <section id="why" className="py-16 text-center bg-white overflow-hidden">
      <h2 className="text-4xl choose-heading md:text-5xl opacity-0 translate-y-[60px] font-bold mb-12 text-gray-800">
        Why Choose <span className="text-blue-600">PureWash?</span>
      </h2>

      <div className="flex flex-col md:flex-row relative items-center justify-center gap-10 max-w-6xl mx-auto px-6">
        {/* Text Section */}
        <div className="flex flex-col gap-6 text-left">
          {features.map((feature, index) => (
            <div key={index} className="checkList flex items-center gap-4">
              <img src={checkImage} alt="check icon" className="w-6 h-6" />
              <p className="text-lg md:text-xl font-medium text-gray-700">
                {feature}
              </p>
            </div>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={checkGif}
            alt="Laundry process"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Choose;
