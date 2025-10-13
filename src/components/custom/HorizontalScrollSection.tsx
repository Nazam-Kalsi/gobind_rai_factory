"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoriScrollContent from "./HoriScrollContent";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HorizontalScrollSection() {
  const container = useRef<HTMLDivElement>(null);
  const tractorRef = useRef<HTMLImageElement>(null);
  const logoContainer = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textLinesRef = useRef<HTMLDivElement>(null);
  const featureImage = useRef<HTMLImageElement>(null);
  const newSection = useRef<HTMLDivElement>(null);
  const horizontalContainer = useRef<HTMLDivElement>(null);
  const horizontalContent = useRef<HTMLDivElement>(null);

  useGSAP(() => {
     gsap.ticker.lagSmoothing(500, 33);

    // Basic GPU hinting
    gsap.set("img, .line", { willChange: "transform, opacity" });

    // ✅ Combine simpler triggers

    // Logo pinning
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: "bottom top",
      pin: logoContainer.current,
      pinSpacing: false,
    });

    // Background transition (lighter trigger)
    gsap.to(container.current, {
      backgroundColor: "#00A300",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    }); gsap.to(tractorRef.current, {
      xPercent: 800, // relative move (less layout reflow)
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Logo scaling
    gsap.to(logoRef.current, {
      scale: 4,
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });
 // Text line reveal — use fromTo with intersection guard
    const lines = textLinesRef.current?.querySelectorAll(".line");
    if (lines?.length) {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textLinesRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }

    // Feature image appearance
    gsap.fromTo(
      featureImage.current,
      { opacity: 0, scale: 0.2, zIndex: 50 },
      {
        opacity: 1,
        scale: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: container.current,
          start: "center center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

       gsap.to(newSection.current, {
      scrollTrigger: {
        trigger: newSection.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    });
      const horizontalDistance =
      (horizontalContent.current?.scrollWidth || 0) - window.innerWidth;

    gsap.to(horizontalContent.current, {
      x: -horizontalDistance,
      ease: "none",
      scrollTrigger: {
        trigger: newSection.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });



    // Cleanup
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, { scope: container });

  return (
    <>
      {/* First Scroll Section */}
      <section
        ref={container}
        className="relative flex flex-col items-center h-[400vh] justify-start w-full overflow-hidden rounded-t-[4rem]"
      >
        {/* Tractor */}
        <Image
          ref={tractorRef}
          className="absolute left-2 top-4 z-10 w-[80px] sm:w-[120px] lg:w-[150px]"
          src="/tractor.gif"
          width={150}
          height={150}
          alt="Tractor"
        />

        {/* Logo + Text */}
        <div ref={logoContainer} className="relative flex flex-col w-full h-full items-center px-2 sm:px-6">
          <Image
            ref={logoRef}
            src="/logo.png"
            width={150}
            height={150}
            alt="Logo"
            className="w-[80px] sm:w-[120px] lg:w-[150px]"
            style={{ transformOrigin: "center center" }}
          />

          {/* Text reveal */}
          <div ref={textLinesRef} className="space-y-4 sm:space-y-6 text-center mt-6 text-shadow-sm text-shadow-white dark:text-shadow-black"> 
            <p className="line text-5xl sm:text-5xl lg:text-7xl font-black uppercase text-shadow-sm text-shadow-white dark:text-shadow-black">
              Every <span className="text-green-800 text-shadow-sm text-shadow-amber-100">weld</span>, every{" "}
              <span className="text-green-800 text-shadow-sm text-shadow-amber-100">bolt</span>
            </p>
            <p className="line text-5xl sm:text-5xl lg:text-7xl font-black uppercase ">
              proof that our work
            </p>
            <p className="line text-5xl sm:text-5xl lg:text-7xl font-black uppercase ">
              <span className="text-green-800 text-shadow-sm text-shadow-amber-100">delivers</span> where it truly{" "}
              <span className="text-green-800 text-shadow-sm text-shadow-amber-100">matters</span>.
            </p>
          </div>

          {/* Feature image takeover */}
          <Image
            ref={featureImage}
            className="fixed z-50 left-1/2 top-20 -translate-x-1/2 w-[200px] sm:w-[300px] lg:w-[500px] rounded-2xl overflow-hidden"
            src="/redclose.jpg"
            width={800}
            height={800}
            alt="Feature"
          />
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section
        ref={newSection}
        className="relative h-[360vh] w-full overflow-hidden"
      >
        <div
          ref={horizontalContainer}
          className="h-screen w-full flex items-center overflow-hidden"
        >
          <div
            ref={horizontalContent}
            className="flex h-full items-center"
          >
            {/* Slides */}
            <div className="flex-shrink-0 w-[100vw] sm:w-screen h-full bg-gradient-to-tr from-blue-700 via-blue-400 to-violet-400 rounded-tl-4xlflex items-center justify-center">
              <HoriScrollContent
              headingColor="text-blue-900"
                heading="Front Tractor Weights"
                desciption=
                  "Engineered for strength and reliability, our front tractor weights keep your machine firmly grounded, improving balance, grip, and control. Perfect for handling heavy equipment and ensuring safe, efficient performance across all terrains.Our robust front tractor weights provide stability, prevent lifting, and enhance traction. Designed for tough farming conditions, they ensure safer handling and maximum efficiency when operating heavy implements on the field."
                
                imageUrl={['/img2.jpg', '/weight.jpg','/weights.jpg','/redweights.jpg']}
              />
            </div>
            
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center  bg-gradient-to-l from-green-400 to-green-600">
              <HoriScrollContent 
               headingColor="text-green-900"
               heading="Tractor Mounted hoods"
                desciption="Our factory manufactures high-quality tractor hoods designed to provide maximum protection from sun, rain, and dust. Built with strong metal frames and durable materials, these canopies ensure long-lasting performance. Perfectly suited for all farming conditions, they enhance operator comfort and safety while maintaining a sleek, professional look for tractors."
                
                imageUrl={['/2red.jpg', '/u.jpg','/closeupumbrella.jpg','/greenumbrella.jpg']} />
            </div>

            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-tl from-red-400 via-red-500 to-orange-100">
              <HoriScrollContent
              headingColor="text-red-900"
              heading='Premium Tractor Modification'
                desciption='We specialize in advanced tractor modifications that boost both functionality and style. From performance upgrades to custom attachments and aesthetic enhancements, our expert team ensures every tractor meets modern farming needs. Each modification is engineered for durability, comfort, and efficiency—transforming your tractor into a powerful, reliable, and eye-catching machine.'
                imageUrl={['c_a.jpg', 'modification_b.jpg', 'modification_c.JPG', 'modification_d.JPG']}  />
            </div>

            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-tr from-blue-700 via-blue-400 to-violet-400">
              <HoriScrollContent 
              headingColor="text-blue-900"
              heading='Premium Services'
                desciption='Our premium tractor service ensures your machine performs at its best in every season. With expert technicians, genuine parts, and advanced diagnostic tools, we provide complete maintenance and repair solutions. Experience smooth operation, extended lifespan, and superior efficiency with our trusted, high-quality service tailored to meet every farmer’s needs.'
                imageUrl={['greensf.jpg', '/s_c.JPG','/s_b.JPG','/s_a.JPG']}  />
            </div>

            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center  bg-gradient-to-l from-green-400 to-green-600 px-8">
               <HoriScrollContent 
               headingColor="text-green-900"
               heading='Innovative Farming Solutions'
                desciption='We deliver cutting-edge tractor solutions designed to simplify and modernize farming. Our range includes efficient power systems, ergonomic designs, and advanced attachments that boost productivity in the field. Combining technology with reliability, our tractors help farmers achieve more with less effort, ensuring performance, comfort, and sustainability in every operation.'
                imageUrl={['/lm.jpg', '/l_a.JPG','/l_c.JPG','/l_b.JPG']}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HorizontalScrollSection;
