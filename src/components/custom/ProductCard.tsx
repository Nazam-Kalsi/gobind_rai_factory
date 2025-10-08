"use client"
import React, { useState } from 'react';

interface ProductCardProps {
  image: string;
  title: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative w-full max-w-sm mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:rotate-1 border border-white/20">
        
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20  via-pink-300/20 to-blue-400/20 dark:from-purple-300/10 dark:via-pink-300/5 dark:to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        
        {/* Image Section with Advanced Animations */}
        <div className="relative h-72 overflow-hidden rounded-t-3xl bg-gradient-to-br from-gray-50 to-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-125 group-hover:rotate-2 group-hover:brightness-110"
          />
          
          {/* Animated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Floating Category Badge */}
          {/* <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-white/30 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {category}
            </span>
          </div> */}

          {/* Animated Rating */}
          <div className={`absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 transition-all duration-700 ${isHovered ? 'translate-y-0 opacity-100 scale-105' : 'translate-y-2 opacity-70'}`}>
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {/* <span className="text-xs font-semibold text-gray-700">{rating}</span> */}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-6 space-y-4 z-10">
          {/* Animated Title */}
          <h3 className={`text-xl font-bold transition-all duration-500 ${isHovered ? 'translate-x-2 text-purple-700 dark:text-purple-200' : 'text-gray-800 dark:text-white'}`}>
            <span className="bg-gradient-to-r from-gray-800 to-purple-700 dark:from-gray-200 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-pink-600 transition-all duration-500">
              {title}
            </span>
          </h3>

          {/* Animated Description */}
          {description && (
            <p className={`text-gray-600 dark:text-white leading-relaxed transition-all duration-700 delay-100 ${isHovered ? 'translate-x-2 opacity-100 text-gray-700' : 'opacity-80'}`}>
              {description}
            </p>
          )}          
        </div>

        {/* Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-700 -z-10"></div>
      </div>
    </div>
  );
};

export default ProductCard;