import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <section className='relative z-[999] bg-yellow-300 dark:bg-violet-900 overflow-hidden rounded-[3rem] m-4'>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_60%)]"></div>
      
      <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8'>
          
          {/* Left section - CTA */}
          <div className='flex-1 max-w-lg'>
            <div className='space-y-6'>
               <Image
                  className="object-cover"
                  src="https://placehold.co/60"
                  width={100}
                  height={100}
                  alt="Logo"
                />
              <h3 className='text-3xl lg:text-4xl font-black leading-tight'>
                Ready to build something amazing?
              </h3>
              <p className='text-slate-900 dark:text-gray-200 text-lg leading-relaxed'>
                Transform your ideas into reality with cutting-edge solutions that drive results and exceed expectations.
              </p>
              
              
            </div>
          </div>

          {/* Right section - Navigation */}
          <div className='flex flex-col sm:flex-row gap-12 sm:gap-16'>
            
            {/* Products Column */}
            <div className='space-y-6'>
              <h4 className='text-lg font-bold uppercase tracking-wider'>
                Products
              </h4>
              <ul className='space-y-3'>
                {[
                  { name: 'Web Development', href: '#' },
                  { name: 'Mobile Apps', href: '#' },
                  { name: 'UI/UX Design', href: '#' },
                  { name: 'Consulting', href: '#' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className='group hover:text-red-500 hover:-skew-2 transition-all hover:scale-105 duration-400 flex items-center'
                    >
                      <span className='relative'>
                        {item.name}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300'></span>
                      </span>
                      <svg className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className='space-y-6'>
              <h4 className='text-lg font-semibold uppercase tracking-wider'>
                Contact
              </h4>
              <ul className='space-y-3'>
                <li className='group hover:text-red-500 transition-all hover:scale-105 duration-400 flex items-center'>
                  1234567890
                </li>
                <li className='group hover:text-red-500 transition-all hover:scale-105 duration-400 flex items-center'>
                  email.com
                </li>



                {[
                  { name: 'Instagram', href: '#' },
                  { name: 'Facebook', href: '#' },
                ].map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.href}
                      className='group hover:text-red-500 hover:-skew-2 transition-all hover:scale-105 duration-400 flex items-center'
                    >
                      <span className='relative'>
                        {item.name}
                        <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300'></span>
                      </span>
                      <svg className='w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright & Social */}
        <div className='mt-16 pt-8 border-t border-slate-700/50'>
          <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
            <p className='text-slate-400 text-sm'>
              © 2025 Gobind Rai Engg. Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer