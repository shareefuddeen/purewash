import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import testImage from "../Images/Muà Nkàlu Mzita.webp"
import testImage1 from "../Images/Loc knots takedown_ January 2023.webp"
import testImage2 from "../Images/Low fade with beard.webp"


export const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.to(".testimonial-heading", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".testimonial-heading",
        start: "top 85%",
      },
    });

    // Card animation
    gsap.to(".testimonial-card", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".testimonial-grid",
        start: "top 90%",
      },
    });
  }, []);

  const testimonials = [
    {
      name: "Sarah A.",
      role: "Fashion Boutique Owner",
      text: "PureWash is a lifesaver! My clothes are always fresh, neatly folded, and smell amazing. Love the attention to detail!",
      image:testImage1
    },
    {
      name: "Michael K.",
      role: "Business Executive",
      text: "Quick, reliable, and super friendly service. I can always count on PureWash to make my week stress-free.",
      image:testImage
    },
    {
      name: "Sharif A.",
      role: "Teacher",
      text: "Love the pickup and delivery option. it’s always right on time! PureWash has made laundry something I don’t worry about anymore.",
      image:testImage2
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative py-24 overflow-hidden"
    >
      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="testimonial-heading opacity-0 translate-y-[60px] text-4xl md:text-5xl font-bold text-gray-900">
          What Our <span className="text-blue-600">Customers Say</span>
        </h2>
        <p className="text-gray-500 mt-3 text-lg">
          Hear from people who trust us with their laundry
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="testimonial-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 relative z-10">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="testimonial-card opacity-0 translate-y-[60px] group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col items-center text-center"
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-blue-100 mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-600 italic mb-6 leading-relaxed text-base">
              “{t.text}”
            </p>
            <h4 className="font-semibold text-blue-700 text-lg">{t.name}</h4>
            <span className="text-sm text-gray-400">{t.role}</span>
          </div>
        ))}
      </div>
   </section>
  );
};

export default Testimonial;
