"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { premiumProducts } from "@/app/[data]";
import ProductCard from "@/components/custom/ProductCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function HorizontalScrollSection() {
  const container = useRef<HTMLDivElement>(null);
  const horizontalContainer = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    const sections = horizontalContainer.current?.children;
    if (!sections) return;

    // Create horizontal scrolling effect
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: () => `+=${horizontalContainer.current?.offsetWidth}`,
      },
    });

    // Tractor movement within the first section
    gsap.to(imgRef.current, {
      x: "calc(100vw - 150px)",
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "25%", // Only during first quarter of the horizontal scroll
        scrub: 1,
      },
    });

    // Logo scaling in the second section
    gsap.to(logoRef.current, {
      scale: 9,
      y: 450,
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "25%", // Start after tractor animation
        end: "50%", // End at halfway point
        scrub: 1,
      },
    });
  }, { scope: container });

  return (
    // <div ref={container} className="h-screen overflow-hidden">
    //   <div
    //     ref={horizontalContainer}
    //     className="flex h-full w-[400vw]" // 4 sections = 400vw
    //   >
    //     {/* Section 1: Tractor Movement */}
    //     <section className="w-screen h-full flex items-start justify-center bg-blue-100 relative">
    //       <Image
    //         className="absolute left-0 top-0 z-10"
    //         ref={imgRef}
    //         src="/tractor.gif"
    //         width={150}
    //         height={150}
    //         alt="Tractor"
    //       />
    //       <div className="flex items-center justify-center h-full">
    //         <h2 className="text-4xl font-bold">Tractor Section</h2>
    //       </div>
    //     </section>

    //     {/* Section 2: Logo Scaling */}
    //     <section className="w-screen h-full flex items-start justify-center bg-green-100 relative">
    //       <Image
    //         ref={logoRef}
    //         className="mt-8"
    //         src="/logo.svg"
    //         width={150}
    //         height={150}
    //         alt="Logo"
    //         style={{ transformOrigin: "center center" }}
    //       />
    //       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
    //         <h2 className="text-4xl font-bold">Logo Scaling</h2>
    //       </div>
    //     </section>

    //     {/* Section 3: Text Content */}
    //     <section className="w-screen h-full flex items-center justify-center bg-yellow-100">
    //       <div className="text-center">
    //         <h2 className="text-6xl font-bold mb-4">Amazing Content</h2>
    //         <p className="text-xl max-w-2xl">
    //           This is your horizontal scrolling section with amazing content
    //           that reveals as users scroll through the experience.
    //         </p>
    //       </div>
    //     </section>

    //     {/* Section 4: Final Section */}
    //     <section className="w-screen h-full flex items-center justify-center bg-purple-100">
    //       <div className="text-center">
    //         <h2 className="text-6xl font-bold mb-4">The End</h2>
    //         <p className="text-xl">
    //           Final section of your horizontal scroll experience
    //         </p>
    //       </div>
    //     </section>
    //   </div>
    // </div>
    
    <section className="relative z-[9] w-full rounded-[4rem] py-8 bg-gradient-to-tr from-red-500 to-red-800 dark:bg-[url(/grad1.jpeg)]  bg-fixed bg-cover ">
      <p
        className="text-center mt-6 font-black text-6xl p-8 uppercase bg-clip-text text-transparent bg-gradient-to-bl dark:from-cyan-600 dark:via-lime-50 dark:to-amber-500 from-cyan-600 via-lime-50 to-amber-500">
        Our Products
      </p>
      <div className="flex justify-center items-center gap-3 flex-wrap px-4">
        {premiumProducts.map((product, index) => (
          <div
            key={index}
            className="transform transition-all duration-500"
            style={{
              animationDelay: `${index * 200}ms`
            }}>
            <ProductCard image={product.image} title={product.title} description={product.description} />
          </div>
        ))}
      </div>        
    </section>
    
  );
}

export default HorizontalScrollSection;