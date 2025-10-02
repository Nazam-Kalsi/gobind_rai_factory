"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { HyperText } from "@/components/ui/hyper-text";
import { WavyBackground } from "../ui/wavy-background";
import { useTheme } from "next-themes";

function HeroSection() {
  const containerRef = useRef(null);
  const yellowDivRef = useRef(null);
  const coverRef = useRef(null);
  const mainDivRef = useRef(null);
  const secondaryImageRef1 = useRef(null);
  const secondaryImageRef2 = useRef(null);
  const secondaryImageRef3 = useRef(null);
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "#000000" : "#ffffff";


  useGSAP(() => {
    const yellowDiv = yellowDivRef.current;
    const cover = coverRef.current;
    const mainDiv = mainDivRef.current;
    const secondaryImage1 = secondaryImageRef1.current;
    const secondaryImage2 = secondaryImageRef2.current;
    const secondaryImage3 = secondaryImageRef3.current;

    if (!yellowDiv || !cover || !mainDiv) return;

    gsap.set([yellowDiv, cover, mainDiv, secondaryImage1, secondaryImage2], {
      willChange: "transform, opacity",
    });

    gsap.set(yellowDiv, {
      scale: 0,
      y: 0,
      transformOrigin: "center center",
      force3D: true,
    });

    gsap.set(mainDiv, {
      opacity: 0,
      scale: 1.4,
      transformOrigin: "center center",
      force3D: true,
    });

    gsap.set(secondaryImage1, {
      height: "0%",
      transformOrigin: "top center",
      force3D: true,
      overflow: "hidden",
    });

    gsap.set(secondaryImage2, {
      height: "0%",
      transformOrigin: "top center",
      force3D: true,
      overflow: "hidden",
    });
    gsap.set(secondaryImage3, {
      height: "0%",
      transformOrigin: "top center",
      force3D: true,
      overflow: "hidden",
    });

    gsap.set(cover, {
      opacity: 1,
      force3D: true,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set([yellowDiv, cover, mainDiv], { willChange: "auto" });
      },
    });

    tl.to(yellowDiv, {
      scale: 2.5,
      duration: 1.8,
      ease: "expo.inOut",
    })
      .to(
        mainDiv,
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
        },
        "-=0.1"
      )
      .to(
        yellowDiv,
        {
          y: "-200%",
          duration: 1,
          ease: "back.out(1.7)",
        },
        "-=1"
      )
      .to(
        cover,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=1"
      )
      .to({}, { duration: 0.5 })
      .to(secondaryImage1, {
        height: "40%",
        duration: 1,
        ease: "power2.out",
      })
      .to(
        secondaryImage2,
        {
          height: "40%",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .to(
        secondaryImage3,
        {
          height: "40%",
          duration: 1,
          ease: "power2.out",
        }
        
      );
  });

  return (
    
    
    <WavyBackground className="w-[100vw] overflow-x-hidden"    backgroundFill={bgColor} >
    <section
      ref={containerRef}
      className="overflow-hidden w-screen relative h-[100vh] flex items-center justify-center"
      style={{
        contain: "layout style paint",
        willChange: "auto",
      }}
    >
      <div
        ref={coverRef}
        className="absolute inset-0 bg-red-900 dark:bg-black z-[19] pointer-events-none"
      />

      <div
        ref={yellowDivRef}
        className="flex items-center justify-center absolute inset-0 bg-yellow-400 z-30 pointer-events-none bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900"
        style={{
          transform: "skewY(12deg)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* Loader GIF */}
      <Image
        className="absolute top-1/2 left-1/2 z-[99] fade-in-out"
        src="/tractor.gif"
        width={60}
        height={60}
        alt="Wait"
      />

      {/* MAIN CONTENT */}
      <section
        ref={mainDivRef}
        className="relative px-2 sm:px-6 flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center lg:text-left w-full font-bold z-10 "
        style={{
          backfaceVisibility: "hidden",
        }}
      >
        {/* Text */}
        <div className="w-full max-w-2xl space-y-2 sm:space-y-4">
          <span className="tracking-wide inline-block text-4xl sm:text-6xl lg:text-8xl font-black">
            Built for
          </span>
          &nbsp;
          <HyperText
            as="span"
            className="p-0 text-4xl sm:text-6xl lg:text-8xl font-black text-yellow-500"
          >
            Farmers.
          </HyperText>
          <p className="text-3xl sm:text-5xl lg:text-8xl font-black tracking-wide">
            Crafted for
          </p>
          <HyperText
            as="span"
            className="p-0 text-3xl sm:text-5xl lg:text-8xl font-black text-red-500"
          >
            Generations
          </HyperText>
        </div>

        {/* Main image */}
        <div className="relative w-[450px] sm:w-[300px] lg:w-[800px] mt-8 lg:mt-0 lg:absolute lg:right-0 z-[-2]">
          <Image
            className=""
            src="/png1.png"
            width={1000}
            height={1000}
            alt="Main Visual"
          />
        </div>

        {/* Decorative img1 */}
        <Image
          ref={secondaryImageRef1}
          className="absolute top-4 sm:top-[15%] left-4 sm:left-[35%] z-[-12] w-[120px] sm:w-[180px] lg:w-[150px] rounded-lg overflow-hidden"
          src="/img2.jpg"
          width={200}
          height={400}
          alt="Decorative"
        />

        {/* Decorative img2 */}
        <Image
          ref={secondaryImageRef3}
          className="absolute bottom-4 sm:-bottom-12 left-1/2 z-[-12] w-[120px] sm:w-[180px] lg:w-[180px] rounded-lg overflow-hidden"
          src="/green.jpg"
          width={200}
          height={200}
          alt="Decorative"
        />
        <Image
          ref={secondaryImageRef2}
          className="absolute bottom-4 sm:top-0 right-[6%] z-[-12] w-[120px] sm:w-[180px] lg:w-[180px] rounded-lg overflow-hidden"
          src="/redclose.png"
          width={200}
          height={200}
          alt="Decorative"
        />
      </section>
    </section>
    </WavyBackground>
  );
}

export default HeroSection;
