import React, { useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AboutImage from "../Images/laundry_2871247.webp";
import AboutImage1 from "../Images/iron-board_7107323.webp";
import AboutImage2 from "../Images/laundry-basket_10725113.webp";

export const About = () => {
  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);

    document.fonts.ready.then(() => {
      const aboutText = new SplitText(".aboutp1", { type: "lines",mask:"lines" });

      gsap.from(aboutText.lines, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".aboutp1",
          start: "top 85%",
        },
      });
    });

    // Floating animation for images
    const floats = gsap.utils.toArray(".floating");
    floats.forEach((img, i) => {
      gsap.to(img, {
        y: 25,
        duration: 3 + i,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
    >
      {/* Decorative blob background */}
      <div className="absolute -z-10 w-[65vw] h-[65vw] right-[-20vw] top-[10vh] rounded-full bg-gradient-to-tr from-blue-200/30 to-white blur-3xl opacity-70" />

      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto px-8 gap-12">
        {/* LEFT: Floating Images */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center min-h-[400px]">
          <img
            src={AboutImage}
            alt="Laundry bag"
            className="floating absolute w-[13vw] min-w-[140px] top-[10%] left-[15%] drop-shadow-xl"
          />
          <img
            src={AboutImage1}
            alt="Iron board"
            className="floating absolute w-[12vw] min-w-[130px] right-[20%] top-[30%] drop-shadow-xl"
          />
          <img
            src={AboutImage2}
            alt="Laundry basket"
            className="floating absolute w-[14vw] min-w-[150px] bottom-[5%] left-[25%] drop-shadow-xl"
          />
        </div>

        {/* RIGHT: Text Content */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            About <span className="text-blue-600">PureWash</span>
          </h2>
          <p className="aboutp1 text-[1.3rem] leading-relaxed text-gray-700 max-w-[40ch]">
            At PureWash, we redefine laundry care with precision and passion.
            From delicate fabrics to daily wear, our eco-friendly cleaning
            process keeps your garments spotless, soft, and fresh — all while
            protecting the environment. Your clothes deserve PureWash care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
