"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { reviews } from '@/app/[data]'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Reviews() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const reviewsRef = useRef(null)
  const pinnedRef = useRef(null)

  // Sample reviews data
 

  useGSAP(() => {

    // gsap.to(pinnedRef.current,{
    //   scrollTrigger:{
    //     trigger: pinnedRef.current,
    //     start: "top top",
    //     end: "bottom top",
    //     pin:true,
    //     pinSpacing:false,
    //     scrub:1
    //   }
    // })

    gsap.to(reviewsRef.current,{
      scrollTrigger:{
        trigger: reviewsRef.current,
        start: "bottom bottom-=40%",
        end: "bottom top-=30%",
        pin:true,
        pinSpacing:false,
        scrub:1
    }})
    // Header animation
    gsap.fromTo(headerRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 70%",
          end: "bottom 20%",
        }
      }
    )

    // Reviews stagger animation
    gsap.fromTo(".review-card", 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8,
        rotateX: 45
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: "top 95%",
        }
      }
    )

    // Continuous floating animation
    gsap.to(".review-card", {
      y: "random(-10, 10)",
      rotation: "random(-2, 2)",
      duration: "random(3, 5)",
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      // stagger:3,
    })

    // Hover animations
    const cards = document.querySelectorAll('.review-card')
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          scale: 1.05,
          z: 50,
          duration: 0.3,
          ease: "power2.out"
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          scale: 1,
          z: 0,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

  }, { scope: containerRef })

  const renderStars = (rating:number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section ref={containerRef} className="relative py-20 lg:py-28  overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(168,85,247,0.05),transparent_70%)]"></div>

      <div  className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-blue-800 font-semibold text-sm">Customer Reviews</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r dark:from-slate-900 dark:via-blue-800 dark:to-purple-800 from-yellow-300 via-yellow-700 to-red-800 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r dark:from-slate-900 dark:via-blue-800 dark:to-purple-800 from-red-800 via-yellow-700 to-yellow-300 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our amazing clients have to say about their experience working with us.
          </p>
        </div>
          {/* Reviews Grid */}
          <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-card group relative bg-white/70 dark:bg-black backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${review.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
                
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(review.rating)}
                </div>

                {/* Review Text */}
                <blockquote className=" mb-6 leading-relaxed font-medium">
                  {review.review}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center  font-bold text-sm shadow-lg`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold ">{review.name}</div>
                    <div className="text-slate-300 text-sm">{review.role}</div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 text-slate-600 mb-4">
              <div className="flex -space-x-2">
                {reviews.slice(0, 4).map((review) => (
                  <div
                    key={review.id}
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold text-xs border-2 border-white shadow-lg`}
                  >
                    {review.avatar}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">Join 1000+ satisfied clients</span>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Reviews