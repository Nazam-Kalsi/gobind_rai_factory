import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section className="relative z-[99] bg-yellow-300 dark:bg-violet-900 overflow-hidden rounded-3xl m-4">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.08),transparent_60%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          {/* Left section - CTA */}
          <div className="flex-1 max-w-lg text-center sm:text-left">
            <div className="space-y-4 sm:space-y-6">
              <Image
                className="mx-auto sm:mx-0 object-cover"
                src="https://placehold.co/60"
                width={100}
                height={100}
                alt="Logo"
              />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight">
                Ready to build something amazing?
              </h3>
              <p className="text-slate-900 dark:text-gray-200 text-base sm:text-lg leading-relaxed">
                Transform your ideas into reality with cutting-edge solutions
                that drive results and exceed expectations.
              </p>
            </div>
          </div>

          {/* Right section - Navigation */}
          <div className="flex flex-row gap-8 sm:gap-16 w-full sm:w-auto justify-between sm:justify-start">
            {/* Products Column */}
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                Products
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
                {[
                  { name: "Tractor", href: "#" },
                  { name: "Harvester", href: "#" },
                  { name: "Plough", href: "#" },
                  { name: "Seeder", href: "#" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group hover:text-red-500 hover:-skew-2 transition-all hover:scale-105 duration-400 flex items-center justify-start sm:justify-start"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-2">
              <h4 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-center sm:text-left">
                <li className="group hover:text-red-500 transition-all hover:scale-105 duration-400 flex items-center justify-start">
                  1234567890
                </li>
                <li className="group hover:text-red-500 transition-all hover:scale-105 duration-400 flex items-center justify-start">
                  email.com
                </li>

                {[
                  { name: "Instagram", href: "#" },
                  { name: "Facebook", href: "#" },
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="group hover:text-red-500 hover:-skew-2 transition-all hover:scale-105 duration-400 flex items-center justify-center sm:justify-start"
                    >
                      <span className="relative">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                      <svg
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-200 opacity-0 group-hover:opacity-100"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              © 2025 Gobind Rai Engg. Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
