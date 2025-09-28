import Image from "next/image";
import React from "react";

type Props = {
  imageUrl?: string[];
  heading: string[];
  desciption: string[];
};

function HoriScrollContent({
  heading,
  desciption,
  imageUrl = [
    "https://placehold.co/600x400",
    "https://placehold.co/600x400",
  ],
}: Props) {
  return (
    <div className="flex flex-col items-center justify-around w-screen h-full px-4 md:px-8 gap-12">
      {/* Block 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
        <Image
          src={imageUrl[0]}
          width={400}
          height={400}
          alt="Feature"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl object-cover"
        />
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold">{heading[0]}</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {desciption[0]}
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 w-full">
        <Image
          src={imageUrl[1]}
          width={400}
          height={400}
          alt="Feature"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl object-cover"
        />
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-bold">{heading[1]}</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {desciption[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HoriScrollContent;
