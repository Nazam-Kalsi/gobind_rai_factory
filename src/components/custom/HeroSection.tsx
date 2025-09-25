'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { HyperText } from '@/components/ui//hyper-text';

function HeroSection() {
  const containerRef = useRef(null);
  const yellowDivRef = useRef(null);
  const coverRef = useRef(null);
  const mainDivRef = useRef(null);
  const secondaryImageRef1 = useRef(null);
  const secondaryImageRef2 = useRef(null);

  useGSAP(
    () => {
      const yellowDiv = yellowDivRef.current;
      const cover = coverRef.current;
      const mainDiv = mainDivRef.current;
      const secondaryImage1 = secondaryImageRef1.current;
      const secondaryImage2 = secondaryImageRef2.current;

      // Early return if refs aren't ready
      if (!yellowDiv || !cover || !mainDiv) return;

      // Set initial states with will-change for better performance
      gsap.set([yellowDiv, cover, mainDiv,secondaryImage1,secondaryImage2], { willChange: 'transform, opacity' });

      gsap.set(yellowDiv, {
        scale: 0,
        y: 0,
        transformOrigin: 'center center',
        force3D: true
      });

      gsap.set(mainDiv, {
        opacity: 0,
        scale: 1.4,
        transformOrigin: 'center center',
        force3D: true
      });
     gsap.set(secondaryImage1, {
  height: '0%',
  transformOrigin: 'top center',
  force3D: true,
  overflow: 'hidden'
});

gsap.set(secondaryImage2, {
  height: '0%',
  transformOrigin: 'top center',
  force3D: true,
  overflow: 'hidden'
});

      gsap.set(cover, {
        opacity: 1,
        force3D: true
      });

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.set([yellowDiv, cover, mainDiv], { willChange: 'auto' });
        }
      });

      tl.to(yellowDiv, {
        scale: 2.5,
        duration: 1.8,
        ease: 'expo.inOut'
      })

        .to(
          mainDiv,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: 'expo.out'
          },
          '-=0.1'
        )

        .to(
          yellowDiv,
          {
            y: '-200%',
            duration: 1,
            ease: 'back.out(1.7)'
          },
          '-=1'
        )

        .to(
          cover,
          {
            opacity: 0,
            duration: 0.5,
            ease: 'power1.out'
          },
          '-=1'
        )

       .to({}, { duration: 0.5 })

.to(secondaryImage1, {
  height: '40%',
  duration: 1,
  ease: 'power2.out'
})

.to(secondaryImage2, {
  height: '40%',
  duration: 1,
  ease: 'power2.out'
}, '-=0.8');
    },
    {
      scope: containerRef,
      dependencies: []
    }
  );

  return (
    <section
      ref={containerRef}
      className="overflow-hidden relative h-[95vh] flex items-center justify-center"
      style={{
        contain: 'layout style paint',
        willChange: 'auto'
      }}>
      <div ref={coverRef} className="absolute inset-0 bg-red-900 z-[19] pointer-events-none" />

      <div
        ref={yellowDivRef}
        className="flex items-center justify-center absolute inset-0 bg-yellow-400 z-30 pointer-events-none"
        style={{
          transform: 'skewY(12deg)',
          backfaceVisibility: 'hidden'
        }}
      >
      </div>
        <Image
        className="absolute top-1/2 left-1/2 z-[99] fade-in-out"
          src="/tractor.gif"
          width={80}
          height={80}
          alt="Wait"
        />

      <section
        ref={mainDivRef}
        className="relative px-1 flex justify-evenly items-center w-full font-bold  z-10"
        style={{
          backfaceVisibility: 'hidden'
        }}>
            {/* text */}
        <div className="w-full">
          <span className="tracking-wide inline-block text-8xl font-black ">Built for</span>&nbsp; &nbsp; &nbsp;
          <HyperText as="span" className="p-0  text-8xl font-black text-yellow-500 ">
            Farmers.
          </HyperText>
          <p className="text-8xl font-black tracking-wide ">Crafted for </p>
          <HyperText as="span" className=" p-0 text-8xl font-black text-red-500">
            Generations
          </HyperText>
        </div>


        {/* main image */}
        <Image
          className="object-cover absolute right-0 z-[-2]"
          src="/w.jpg"
          width={400}
          height={800}
          alt="Picture of the author"
        />
        {/* img1 */}
        <Image
        ref={secondaryImageRef1}
          className="absolute -top-12 left-12 -z-[2]"
          src="/w.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
        {/* img2 */}
        <Image
        ref={secondaryImageRef2}
          className="absolute -bottom-12 left-1/2 -z-[2]"
          src="/w.jpg"
          width={200}
          height={200}
          alt="Picture of the author"
        />
      </section>
    </section>
  );
}

export default HeroSection;
