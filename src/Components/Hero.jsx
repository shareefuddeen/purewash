import gsap from "gsap"
import React,{useEffect} from 'react'
import HeroImage from "../Images/3711661.webp"
import flower from "../Images/flower.webp"
import flower1 from "../Images/daisy.webp"
import flower2 from "../Images/morning-glory.webp"



import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export const Hero = () => {

	useEffect(()=>{

		gsap.registerPlugin(SplitText, ScrollTrigger);
		document.fonts.ready.then(()=>{
			const HeroP1 =  new SplitText(".herop1",{
				type:"lines",
				autoSplit:true,
				mask:"lines"
			})

			const tl = gsap.timeline({
				delay:1
			})

			 tl.from(HeroP1.lines, {
        		y: 16,
        		ease: "power1.out",
      });

			 const HeroP2 =  new SplitText(".herop2",{
				type:"lines",
				autoSplit:true,
				mask:"lines"
			})


			 tl.from(HeroP2.lines, {
        		y: -16,
        		ease: "power1.out",
      },"-=0.5");
			 tl.fromTo(".herobtn",{
			 	y:12,
			 	opacity:0,
			 	ease: "power1.out",
			 },{
			 	y:0,
			 	opacity:1,
			 })

		})

		const floats = gsap.utils.toArray(".floating");
    floats.forEach((img, i) => {
      gsap.to(img, {
        y: 25,
        duration: 3 + i,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".rotating", {
        rotation: 360,
        duration: 6,
        transformOrigin:"center center",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

	},[])
  return (
          <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-accent/10 to-white">
        
          	<img src={flower} className="h-8 w-8 top-[22vw] left-[10vw] absolute floating md:w-16 md:w-16 md:h-16 md:h-16 sm:w-12 sm:h-12 sm:top-[16vw] sm:left-[16vw] lg:w-20 lg:h-20 lg:top-[18vw] lg:left-[16vw]" alt="flower" />
          	<img src={flower1} className="h-8 w-8 top-[26vw] right-[20vw] absolute rotating md:w-16 md:w-16 md:h-16 md:h-16 md:top-[34vw] sm:w-12 sm:h-12 sm:top-[40vw] sm:right-[16vw] lg:w-20 lg:h-20 lg:top-[12vw] lg:right-[36vw]" alt="flower" />
          	<img src={flower2} className="h-8 w-8 top-[44vw] right-[16vw] absolute floating md:w-16 md:w-16 md:h-16 md:h-16 sm:w-12 md:top-[16vw] sm:h-12 sm:top-[12vw] sm:right-[36vw] lg:w-20 lg:h-20 lg:top-[29vw] lg:right-[16vw]" alt="flower" />

        <h1 className="text-5xl sm:text-7xl font-bold mt-[15vw] text">
          Laundry Made <span className="text-accent">Simple</span>
        </h1>
        <p className="herop1 mt-4 max-w-xl text-md sm:text-xl text-gray-600">
			Fast pickup, gentle cleaning, and same-day. we handle the dirt </p>
		<p className="herop2 max-w-xl text-md sm:text-xl text-gray-600">so you can focus on what matters.</p>
        <a href="" className="mb-4 herobtn mt-2 bg-accent text-white px-8 py-3 rounded-full font-semibold hover:bg-primary transition">Get in touch</a>
        <img
          src={HeroImage} className="w-[1000px] rounded-3xl shadow-lg"
          alt="Laundry"
        />
      </section>
  )
}

export default Hero;