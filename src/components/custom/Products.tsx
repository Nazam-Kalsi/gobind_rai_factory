import React from 'react';
import ProductCard from './ProductCard';
import { ProgressiveBlur } from '@/components/ui/progressive-blur';
import { premiumProducts } from '@/app/[data]';
import Link from 'next/link';



function Products() {
  return (
    <section className="relative z-[9] w-full rounded-t-[4rem] dark:bg-[url(/grad1.jpg)]  bg-fixed bg-cover bg-gradient-to-tr from-red-500 to-red-800">
      <p
        className="text-center font-black text-6xl p-8 uppercase bg-clip-text text-transparent bg-gradient-to-bl from-cyan-600 via-lime-50 to-amber-500">
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
      {/* bg-gray-400/10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xs bg-opacity-10 */}
      <ProgressiveBlur height="30%" position="bottom" />
      <div className="absolute z-[999] bottom-0 flex items-center justify-center w-full h-[20vh] ">
        <Link href={'/products'}>
        <button className="rounded-[3rem] items-center justify-center whitespace-nowrap  text-sm font-medium transition-transform duration-200 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 p-8 inline-flex">
          <span>✨ Explore all products ✨</span>
          {/* <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" /> */}
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Products;
