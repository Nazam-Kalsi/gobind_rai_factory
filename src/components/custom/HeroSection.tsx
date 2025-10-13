'use client';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { AnimatedGradientText } from '../ui/animated-gradient-text';


function HeroSection() {
  const containerRef = useRef(null);
  const yellowDivRef = useRef(null);
  const coverRef = useRef(null);
  const mainDivRef = useRef(null);
  const secondaryImageRef1 = useRef(null);
  const secondaryImageRef2 = useRef(null);
  const secondaryImageRef3 = useRef(null);

  useGSAP(() => {
    const yellowDiv = yellowDivRef.current;
    const cover = coverRef.current;
    const mainDiv = mainDivRef.current;
    const secondaryImage1 = secondaryImageRef1.current;
    const secondaryImage2 = secondaryImageRef2.current;
    const secondaryImage3 = secondaryImageRef3.current;

    if (!yellowDiv || !cover || !mainDiv) return;

    gsap.set([yellowDiv, cover, mainDiv, secondaryImage1, secondaryImage2], {
      willChange: 'transform, opacity'
    });

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
    gsap.set(secondaryImage3, {
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
      .to(
        secondaryImage2,
        {
          height: '40%',
          duration: 1,
          ease: 'power2.out'
        },
        '-=0.8'
      )
      .to(secondaryImage3, {
        height: '40%',
        duration: 1,
        ease: 'power2.out'
      });
  });

  return (
    <section
      ref={containerRef}
      className="overflow-hidden relative h-[110vh] flex items-center justify-center rounded-b-lg"
      style={{
        contain: 'layout style paint',
        willChange: 'auto'
      }}>
      <div className="absolute top-0 h-[110vh] w-screen blur-sm bg-[url(/bg2.jpg)] dark:bg-none bg-fixed bg-cover dark:opacity-0" />
  
      <div ref={coverRef} className="absolute inset-0 bg-red-900 dark:bg-black z-[19] pointer-events-none" />
      <div
        ref={yellowDivRef}
        className="flex items-center justify-center absolute inset-0 bg-yellow-400 z-30 pointer-events-none bg-gradient-to-r dark:from-slate-900 dark:via-purple-900 dark:to-slate-900"
        style={{
          transform: 'skewY(12deg)',
          backfaceVisibility: 'hidden'
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
        className="relative px-2 sm:px-6 flex flex-col lg:flex-row justify-center lg:justify-start items-center text-center lg:text-left w-full font-bold z-10"
        style={{
          backfaceVisibility: 'hidden'
        }}>
        {/* Text */}
        <div className={`flex flex-col items-center justify-center w-1/2 max-w-2xl space-y-2 sm:space-y-4`}>
          <span className={`bg-gradient-to-b from-black to-gray-500 bg-clip-text whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 tracking-wide inline-block text-6xl sm:text-6xl lg:text-8xl font-black`}>
            Built for
          </span>
          
          {/* <HyperText
            as="span"
            className={`p-0 text-4xl sm:text-6xl lg:text-8xl font-black text-yellow-500 `}
          > */}
          <AnimatedGradientText className={`p-0 text-6xl sm:text-6xl lg:text-8xl font-black `}>
            Farmers.
          </AnimatedGradientText>
          {/* </HyperText> */}
          <p className="bg-gradient-to-b from-black to-gray-500 bg-clip-text whitespace-pre-wrap text-transparent dark:from-white dark:to-slate-900/10 text-6xl sm:text-5xl lg:text-8xl font-black tracking-wide">Crafted for</p>
          <AnimatedGradientText className={`p-0 text-6xl sm:text-6xl lg:text-8xl font-black `} colorFrom='#3a24ff' colorTo='#1a0b44'>
            Generations.
          </AnimatedGradientText>
        </div>

        {/* Main image */}
        <div className=" relative min-w-1/2 sm:w-[300px] lg:w-[800px] mt-8 lg:mt-0  z-[-2]">
          <Image className="dark:drop-shadow-[0px_0px_10px_#f580804b] " src="/png1.png" width={1000} height={1000} alt="Main Visual" />
        </div>

        {/* Decorative img1 */}
        <div className=' flex gap-2 absolute right-0 w-1/2  bottom-0 items-center justify-around '>
        <Image
          ref={secondaryImageRef1}
          className=" rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_#809ff5] lg:block hidden "
          src="/img2.jpg"
          width={100}
          height={100}
          alt="Decorative"
        />

        {/* Decorative img2 */}
        <Image
          ref={secondaryImageRef3}
          className=" rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_#84f580]  lg:block hidden"
          src="/green.jpg"
          width={100}
          height={100}
          alt="Decorative"
        />
        <Image
          ref={secondaryImageRef2}
          className="rounded-lg overflow-hidden shadow-[0px_0px_10px_0px_#fa7760] hidden lg:block"
          src="/redclose.jpg"
          width={100}
          height={100}
          alt="Decorative"
        />
        </div>
      </section>
    </section>
    // </WavyBackground>
  );
}

export default HeroSection;
