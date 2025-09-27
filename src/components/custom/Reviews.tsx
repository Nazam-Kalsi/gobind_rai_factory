"use client"
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function Reviews() {
  const containerRef = useRef(null)
  const headerRef = useRef(null)
  const reviewsRef = useRef(null)
  const pinnedRef = useRef(null)

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "SJ",
      rating: 5,
      review: "Absolutely phenomenal service! The team delivered beyond our expectations and transformed our digital presence completely.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder, InnovateLab",
      avatar: "MC",
      rating: 5,
      review: "Working with this team was a game-changer. Their attention to detail and innovative approach is unmatched.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "CTO, DataFlow",
      avatar: "ER",
      rating: 5,
      review: "The level of professionalism and expertise is outstanding. They turned our vision into reality seamlessly.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Marketing Director",
      avatar: "DT",
      rating: 5,
      review: "Incredible results! Our conversion rates improved by 300% after their optimization. Highly recommended!",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Product Manager",
      avatar: "LP",
      rating: 5,
      review: "The best investment we made this year. Their strategic approach and execution were flawless.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Startup Founder",
      avatar: "JW",
      rating: 5,
      review: "From concept to launch, they guided us every step. The final product exceeded all our expectations.",
      color: "from-teal-500 to-blue-500"
    },
    {
      id: 7,
      name: "Amanda Foster",
      role: "E-commerce Owner",
      avatar: "AF",
      rating: 5,
      review: "My online sales tripled after their redesign. The user experience they created is absolutely brilliant.",
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      name: "Robert Kim",
      role: "Tech Lead",
      avatar: "RK",
      rating: 5,
      review: "Clean code, modern design, and exceptional performance. Everything we hoped for and more.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      name: "Sophie Martinez",
      role: "Brand Manager",
      avatar: "SM",
      rating: 5,
      review: "They perfectly captured our brand essence and translated it into a stunning digital experience.",
      color: "from-violet-500 to-purple-500"
    },
    
  ]

  useGSAP(() => {

    gsap.to(pinnedRef.current,{
      scrollTrigger:{
        trigger: pinnedRef.current,
        start: "top top",
        end: "bottom top",
        pin:true,
        pinSpacing:false,
        scrub:1
      }
    })

    // gsap.to(reviewsRef.current,{
    //   scrollTrigger:{
    //     trigger: reviewsRef.current,
    //     start: "top top",
    //     end: "bottom top",
    //     pin:true,
    //     pinSpacing:false,
    //     scrub:1
    // }})
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
          start: "top 85%",
          end: "bottom 15%",
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
      stagger: "random(0, 2)"
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

  const renderStars = (rating) => {
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
    <section ref={containerRef} className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
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
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              What Our Clients
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Are Saying
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing clients have to say about their experience working with us.
          </p>
        </div>
        <div ref={pinnedRef} className='absolute  top-0 h-[100vh] w-[50vw] z-[999] '></div>

          {/* Reviews Grid */}
          <div ref={reviewsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="review-card group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl border border-white/20 transition-all duration-500"
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
                <blockquote className="text-slate-700 mb-6 leading-relaxed font-medium">
                  {review.review}
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                    {review.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{review.name}</div>
                    <div className="text-slate-500 text-sm">{review.role}</div>
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
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              Start Your Project Today
              <svg className="w-5 h-5 ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
      </div>
    </section>
  )
}

export default Reviews