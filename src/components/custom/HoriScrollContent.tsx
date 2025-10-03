import Image from "next/image";
import React from "react";

type Props = {
  imageUrl?: string[];
  heading: string[];
  desciption: string[];
  headingColor:string;
};

function HoriScrollContent({
  heading,
  headingColor,
  desciption,
  imageUrl = [
    "https://placehold.co/400",
    "https://placehold.co/400",
  ],
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-full px-4 md:px-8">
      {/* Block 1 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
        <Image
          src={imageUrl[0]}
          width={270}
          height={270}
          alt="Feature"
          className="rounded-xl object-fit"
        />
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <h2 className={`text-2xl md:text-5xl font-black ${headingColor}`}>{heading[0]}</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {desciption[0]}
          </p>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-6 w-full">
        <Image
          src={imageUrl[1]}
          width={270}
          height={270}
          alt="Feature"
          className="rounded-xl object-cover"
        />
        <div className="text-center md:text-left space-y-4 max-w-2xl">
          <h2 className={`  text-2xl md:text-5xl font-black ${headingColor}`}>{heading[1]}</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {desciption[1]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HoriScrollContent;
