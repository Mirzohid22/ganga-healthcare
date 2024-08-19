import React from "react";
import { type StaticImageData } from "next/image";

type MiniBannerProps = {
  image: StaticImageData;
  color: "white" | "black" | "blue";
  title: string;
  description: string;
};

export default function MiniBanner({
  image,
  color,
  title,
  description,
}: MiniBannerProps) {
  return (
    <div

      style={{
        backgroundImage: `url('${image.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="md:hidden w-[350px] sm:w-[500px] h-[200px] sm:h-[300px]  max-w-[var(--max-width)] bg-cover bg-center bg-no-repeat flex flex-col items-start justify-center md:h-[var(--banner-height)] rounded-[10px] p-5 gap-4"
    >
      <h1
        className={`text-[20px] sm:text-[24px] font-bold leading-[24.2px] sm:leading-[32.6px] w-3/4 sm:w-3/5 ${
          color === "white"
            ? "text-white"
            : color === "blue"
            ? "text-[#699CFF]"
            : "text-black"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-[8px] sm:text-[12px] leading-[9.68px] sm:leading-[14px] w-2/3 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
