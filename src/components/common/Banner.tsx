import React from "react";
import { type StaticImageData } from "next/image";

type BannerProps = {
  image: StaticImageData;
  color: "white" | "black" | "blue";
  title: string;
  description: string;
};

export default function Banner({
  image,
  color,
  title,
  description,
}: BannerProps) {
  return (
    <div
      style={{
        height: "450px",
        backgroundImage: `url('${image.src}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="hidden md:flex w-full md:w-9/10 lg:w-full max-w-[var(--max-width)] bg-cover bg-center bg-no-repeat flex-col items-start justify-center h-[var(--banner-height)] rounded-[10px] p-5 gap-4"
    >
      <h1
        className={`text-[64px] md:text-[48px] font-bold leading-[77.45px] w-1/2 ${
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
        className={`text-xs leading-[14.52px] md:text-[16px] md:leading-[22px] lg:text-xs lg:leading-[14.52px] w-3/5 lg:w-1/2 ${
          color === "white" ? "text-white" : "text-black"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
