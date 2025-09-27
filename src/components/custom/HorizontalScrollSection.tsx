"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnyARecord } from "dns";
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
    gsap.to(logoContainer.current, {
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        pinSpacing:false
        
      },
    });
    // 1️⃣ Tractor moves horizontally    
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

    // 2️⃣ Logo scaling
    gsap.to(logoRef.current, {
      scale: 6,
      y: 250,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });


    // 3️⃣ Text reveal line by line
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

    // 4️⃣ Feature image takeover (AFTER text reveal finishes)
    gsap.fromTo(
  featureImage.current,
  { opacity: 0, scale: 0.1, zIndex: 50 },
  {
    opacity: 1,
    scale: 0.4,
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

// gsap.fromTo(featureImage.current, 
//   {
//     scale:0.4
//   },{
//   y: "100vh",
//   scale: 1.5,
//   x: 0,
//   left: "50%",
//   transform: "translateX(-50%)",
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: newSection.current,
//     start: "top 90%",
//     end: "middle top",
//     scrub: 1,
//   },
// });


    // 6️⃣ Pin the new section for horizontal scroll
    gsap.to(newSection.current, {
      scrollTrigger: {
        trigger: newSection.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false
      },
    });

    // 7️⃣ Horizontal scroll animation
    const horizontalDistance = horizontalContent.current?.scrollWidth - window.innerWidth;
    
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
     <section
      ref={container}
      className="relative flex flex-col items-center h-[400vh] justify-start w-full overflow-hidden"
    >

      {/* Tractor */}
      <Image
        ref={tractorRef}
        className="absolute left-0 top-0 z-10"
        src="/tractor.gif"
        width={150}
        height={150}
        alt="Tractor"
      />

      {/* Logo */}
      <div ref={logoContainer} className="relative flex flex-col items-center">
        <Image
          ref={logoRef}
          src="https://placehold.co/600x400"
          width={150}
          height={150}
          alt="Logo"
          style={{ transformOrigin: "center center" }}
        />      

      {/* Text reveal */}
      <div ref={textLinesRef} className="space-y-6 text-center">
        <p className="line text-8xl font-black uppercase">
          Every <span className="text-yellow-300">weld</span>, every{" "}
          <span className="text-yellow-300">bolt</span>
        </p>
        <p className="line text-8xl font-black uppercase">proof that our work</p>
        <p className="line text-8xl font-black uppercase">
          <span className="text-yellow-300">delivers</span> where it truly{" "}
          <span className="text-yellow-300">matters</span>.
        </p>
      </div>

      {/* Feature image takeover */}
      <Image
        ref={featureImage}
        className="fixed z-50 left-[10%]"
        src="https://placehold.co/600x400"
        width={800}
        height={800}
        alt="Feature"
      />
      </div>   
    </section>
    <section
        ref={newSection}
        className="relative h-[200vh] w-full overflow-hidden"
      >
        <div ref={horizontalContainer} className="h-screen w-full flex items-center overflow-hidden">
          <div ref={horizontalContent} className="flex h-full items-center gap-8">
            {/* Horizontal scroll content */}
            <div className="flex-shrink-0 w-screen h-full bg-blue-600 flex items-center justify-center">
            <HoriScrollContent heading={['Lorem ipsum dolor','Lorem ipsum dolor']} desciption={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni. Impedit assumenda velit consequatur temporibus explicabo debitis!','Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus consectetur impedit reprehenderit molestias minus magni. Impedit assumenda velit consequatur temporibus explicabo debitis!']}/>
            </div>
            <div className="flex-shrink-0 w-screen h-full bg-red-600 flex items-center justify-center">
            <HoriScrollContent heading={['','']} desciption={['','']}/>
            </div>
            <div className="flex-shrink-0 w-screen h-full bg-green-600 flex items-center justify-center">
              
            <HoriScrollContent heading={['','']} desciption={['','']}/>
            </div>
            <div className="flex-shrink-0 w-screen h-full bg-purple-600 flex items-center justify-center">
              
            <HoriScrollContent heading={['','']} desciption={['','']}/>
            </div>
            <div className="flex-shrink-0 w-screen h-full bg-yellow-600 flex items-center justify-center">
              
            <HoriScrollContent heading={['','']} desciption={['','']}/>
            </div>
          </div>
        </div>
    </section>
</>
  );
}
export default HorizontalScrollSection;