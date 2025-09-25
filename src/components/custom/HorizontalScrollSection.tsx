// "use client";

// import React, { useRef } from "react";
// import Image from "next/image";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// function HorizontalScrollSection() {
//   const container = useRef<HTMLDivElement>(null);
//   const imgRef = useRef<HTMLImageElement>(null);
//   const logoRef = useRef<HTMLImageElement>(null);

//   useGSAP(() => {
//     // Tractor horizontal movement
//     gsap.to(imgRef.current, {
//       x: "2700", // Move across viewport width minus image width
//       ease: "none",
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top bottom",
//         end: "bottom top",
//         scrub: 1, 
//       },
//     });

//     gsap.to(logoRef.current, 
//         {
//       scale: 9,
//       y:450,
//       ease: "none",
//       scrollTrigger: {
//         trigger: container.current,
//         start: "top bottom",
//         end: "bottom center",
//         scrub: 1,
//       },
//     });
//   }, { scope: container });

//   return (
//     <section
//       ref={container}
//       className="relative flex items-start justify-center w-full h-[100vh] overflow-hidden"
//     >
//       <Image
//         className="absolute left-0 top-0 z-10"
//         ref={imgRef}
//         src="/tractor.gif"
//         width={150}
//         height={150}
//         alt="Tractor"
//       />
//       <Image
//         ref={logoRef}
//         className=""
//         src="/logo.svg"
//         width={150}
//         height={150}
//         alt="Logo"
//         style={{ transformOrigin: "center center " }} // Ensure scaling from center
//       />
//     </section>
//   );
// }

// export default HorizontalScrollSection;

"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HorizontalScrollSection() {
  const container = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Tractor horizontal movement (happens during initial scroll)
    gsap.to(imgRef.current, {
      x: "2700", // Move across viewport width minus image width
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });

    // Pin the section and animate logo scaling
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end: "bottom bottom", // Pin for 100vh worth of scroll
        pin: true,
        scrub: 1,
      },
    });

    // Logo scaling animation during pin
    tl.to(logoRef.current, {
      scale: 9,
      y: 450,
      ease: "none",
      duration: 0.5, // First half of pinned scroll
    })
    // Text reveal animation during second half of pin
    .fromTo(textRef.current, 
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        ease: "power2.out",
        duration: 0.5, // Second half of pinned scroll
      }
    );
  }, { scope: container });

  return (
    <section
      ref={container}
      className="relative flex items-start justify-center w-full h-[100vh] overflow-hidden"
    >
      <Image
        className="absolute left-0 top-0 z-10"
        ref={imgRef}
        src="/tractor.gif"
        width={150}
        height={150}
        alt="Tractor"
      />
      <Image
        ref={logoRef}
        className=""
        src="/logo.svg"
        width={150}
        height={150}
        alt="Logo"
        style={{ transformOrigin: "center center" }}
      />
      
      {/* Large Text Reveal - appears over scaled logo */}
      <div
        ref={textRef}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
        style={{ 
          fontSize: '9rem',
          fontWeight: 'bold',
          textAlign: 'center',
          lineHeight: '0.9'
        }}
      >
        <span className="text-white drop-shadow-2xl">
          REVEALED<br />TEXT
        </span>
      </div>
    </section>
  );
}

export default HorizontalScrollSection;