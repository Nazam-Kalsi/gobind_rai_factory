import Image from 'next/image';
import React from 'react';

type Props = {
  imageUrl?: string[];
  heading: string[];
  desciption: string[];
};

function HoriScrollContent({
  heading,
  desciption,
  imageUrl = ['https://placehold.co/600x400', 'https://placehold.co/600x400']
}: Props) {
  return (
    <div className="flex flex-col items-center justify-around w-screen h-full ">
      <div className="flex  justify-center items-start    ">
        <Image src={imageUrl[0]} width={400} height={400} alt="Feature" />
        <div>
          <h2>{heading[0]}</h2>
          <p className="max-w-3xl">{desciption[0]}</p>
        </div>
      </div>

      <div className="flex flex-row-reverse justify-center items-start">
        <Image src={imageUrl[1]} width={400} height={400} alt="Feature" />
        <div>
          <h2>{heading[1]}</h2>
          <p className="max-w-3xl">{desciption[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default HoriScrollContent;
