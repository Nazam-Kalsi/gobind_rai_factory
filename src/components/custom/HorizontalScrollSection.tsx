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
    // Pin logo container
    gsap.to(logoContainer.current, {
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        pinSpacing: false,
      },
    });

   gsap.to(container.current, {
      backgroundColor: "#837de2", // target color
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",   // when section hits middle of screen
        end: "bottom center",  // until bottom hits middle
        scrub: true,           // smooth scrubbing
      },
    });
    // Tractor movement
    gsap.to(tractorRef.current, {
      x: "2700",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
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

    // Text line reveal
    const lines = textLinesRef.current?.querySelectorAll(".line");
    if (lines) {
      gsap.from(lines, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textLinesRef.current,
          start: "top 70%",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    // Feature image animation
    gsap.fromTo(
      featureImage.current,
      { opacity: 0, scale: 0.1, zIndex: 50 },
      {
        opacity: 1,
        scale: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container.current,
          start: "middle top",
          end: "bottom bottom",
          scrub: 1,
          immediateRender: false,
        },
      }
    );

    // Pin horizontal scroll section
    gsap.to(newSection.current, {
      scrollTrigger: {
        trigger: newSection.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      },
    });

    // Horizontal scroll
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
        <div ref={logoContainer} className="relative flex flex-col items-center px-2 sm:px-6">
          <Image
            ref={logoRef}
            src="https://placehold.co/600x400"
            width={150}
            height={150}
            alt="Logo"
            className="w-[80px] sm:w-[120px] lg:w-[150px]"
            style={{ transformOrigin: "center center" }}
          />

          {/* Text reveal */}
          <div ref={textLinesRef} className="space-y-4 sm:space-y-6 text-center mt-6">
            <p className="line text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-snug">
              Every <span className="text-yellow-300">weld</span>, every{" "}
              <span className="text-yellow-300">bolt</span>
            </p>
            <p className="line text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-snug">
              proof that our work
            </p>
            <p className="line text-3xl sm:text-5xl lg:text-7xl font-black uppercase leading-snug">
              <span className="text-yellow-300">delivers</span> where it truly{" "}
              <span className="text-yellow-300">matters</span>.
            </p>
          </div>

          {/* Feature image takeover */}
          <Image
            ref={featureImage}
            className="fixed z-50 left-1/2 -translate-x-1/2 w-[200px] sm:w-[300px] lg:w-[500px] rounded-2xl overflow-hidden"
            src="/redclose.png"
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
            <div className="flex-shrink-0 w-[100vw] sm:w-screen h-full bg-gradient-to-tr from-blue-700 via-blue-400 to-violet-400 rounded-tl-4xl">
              <HoriScrollContent
              headingColor="text-blue-900"
                heading={["Front Tractor Weights", "Heavy Duty Front Weights"]}
                desciption={[
                  "Engineered for strength and reliability, our front tractor weights keep your machine firmly grounded, improving balance, grip, and control. Perfect for handling heavy equipment and ensuring safe, efficient performance across all terrains.",
                  "Our robust front tractor weights provide stability, prevent lifting, and enhance traction. Designed for tough farming conditions, they ensure safer handling and maximum efficiency when operating heavy implements on the field.",
                ]}
                imageUrl={['/img2.jpg', '/weights.png']}
              />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-tl from-red-400 via-red-500 to-orange-100">
              <HoriScrollContent 
               headingColor="text-red-900"
               heading={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
                desciption={[
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                ]}
                imageUrl={['/2red.png', '/redclose.png']} />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-l from-green-400 to-green-600">
              <HoriScrollContent
              headingColor="text-green-900"
              heading={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
                desciption={[
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                ]}
                imageUrl={['/green.jpg', '/u.png']}  />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-br from-purple-500 via-violet-500 to-purple-500">
              <HoriScrollContent 
              headingColor="text-purple-900"
              heading={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
                desciption={[
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                ]}
                imageUrl={['/u.png', '/2green.png']}  />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full flex items-center justify-center bg-gradient-to-tl to-orange-400 from-yellow-400">
               <HoriScrollContent 
               headingColor="text-orange-900"
               heading={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
                desciption={[
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                ]}
                imageUrl={['/u.png', '/2green.png']}  />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HorizontalScrollSection;
