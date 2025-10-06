import Image from "next/image";
import React from "react";

type Props = {
  imageUrl?: string[];
  heading: string;
  desciption: string;
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
    <div className="flex flex-col items-center justify-start w-screen h-full ">
      {/* Block 1 */}
      <div className="flex flex-col md:flex-row justify-start items-center gap-6 w-full h-full px-2">
        <Image
          src={imageUrl[0]}
          width={560}
          height={520}
          alt="Feature"
          className="rounded-xl object-fit"
        />
        <div className="flex flex-col w-full items-start h-full py-4 justify-center text-center md:text-left space-y-4">
          <div className="w-full text-justify">
          <h2 className={`text-2xl md:text-5xl font-black ${headingColor}`}>{heading}</h2>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            {desciption}
          </p>
          </div>
          <div className="hidden relative -left-8 sm:flex w-full justify-center gap-2">

          <Image
          src={imageUrl[1]}
          width={280}
          height={280}
          alt="Feature"
          className="rounded-xl object-cover "
          />
          <Image
          src={imageUrl[2]}
          width={280}
          height={280}
          alt="Feature"
          className="rounded-xl object-cover"
          />
          <Image
          src={imageUrl[3]}
          width={280}
          height={280}
          alt="Feature"
          className="rounded-xl object-cover"
          />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoriScrollContent;
