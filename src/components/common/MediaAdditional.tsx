import React from "react";
import { type StaticImageData } from "next/image";

type MediaAdditionalProps = {
  image: StaticImageData;
  title: string;
  description: string;
};

export default function MediaAdditional({ image, title, description }: MediaAdditionalProps) {
  return (
    <div
      style={{
        backgroundImage: `url('${image.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-[350px] md:w-[580px] h-[150px] md:h-[300px] bg-cover bg-center bg-no-repeat flex flex-col items-start justify-start text-white  rounded-[20px] p-6 md:p-12 gap-4"
    >
      <h3 className="text-[20px] md:text-[24px] font-bold leading-[24.2px] md:leading-[29.05px]" >{title}</h3>
      <p className="w-1/2 text-[8px] md:text-[15px] font-normal leading-[9.68px] md:leading-[18.15px]">{description}</p>
    </div>
  );
}
