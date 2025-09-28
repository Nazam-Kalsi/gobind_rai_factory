"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import HoriScrollContent from "./horiScrollContent";

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
        className="relative flex flex-col items-center h-[400vh] justify-start w-full overflow-hidden"
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
            className="fixed z-50 left-1/2 -translate-x-1/2 w-[150px] sm:w-[250px] lg:w-[400px]"
            src="https://placehold.co/600x400"
            width={800}
            height={800}
            alt="Feature"
          />
        </div>
      </section>

      {/* Horizontal Scroll Section */}
      <section
        ref={newSection}
        className="relative h-[200vh] w-full overflow-hidden"
      >
        <div
          ref={horizontalContainer}
          className="h-screen w-full flex items-center overflow-hidden"
        >
          <div
            ref={horizontalContent}
            className="flex h-full items-center gap-4 sm:gap-8"
          >
            {/* Slides */}
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full bg-blue-600 flex items-center justify-center">
              <HoriScrollContent
                heading={["Lorem ipsum dolor", "Lorem ipsum dolor"]}
                desciption={[
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni.",
                ]}
              />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full bg-red-600 flex items-center justify-center">
              <HoriScrollContent heading={["", ""]} desciption={["", ""]} />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full bg-green-600 flex items-center justify-center">
              <HoriScrollContent heading={["", ""]} desciption={["", ""]} />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full bg-purple-600 flex items-center justify-center">
              <HoriScrollContent heading={["", ""]} desciption={["", ""]} />
            </div>
            <div className="flex-shrink-0 w-[90vw] sm:w-screen h-full bg-yellow-600 flex items-center justify-center">
              <HoriScrollContent heading={["", ""]} desciption={["", ""]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HorizontalScrollSection;
