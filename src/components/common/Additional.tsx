/* eslint-disable @next/next/no-img-element */
import React from "react";
import { type StaticImageData } from "next/image";

type AdditionalProps = {
  justify: "end" | "between";
  variant: "lime" | "blue" | "yellow";
  title: string;
  description: string;
  image: StaticImageData;
  width?: string;
  height?: string;
};

export default function Additional({
  image,
  variant,
  title,
  description,
  justify = "end",
  width,
  height,
}: AdditionalProps) {
  return (
    <div
      style={{
        background: `var(--common-${variant})`,
      }}
      className="w-[380px] md:w-full h-[200px] flex items-center justify-between rounded-[10px] p-5 gap-4"
    >
      <div className="flex flex-col items-start justify-between gap-4">
        <h3 className="text-[20px] md:text-[28px] lg:text-[20px] font-bold leading-[24.2px] md:leading-[32px] lg:leading-[24.2px]">{title}</h3>
        <p
          className={`${justify === "end" && "text-xs leading-[14.52px] md:text-[16px] md:leading-[22px] lg:text-xs lg:leading-[14.52px]"} ${
            justify === "between" && "font-bold text-2xl  leading-[29.05px]"
          }`}
        >
          {description}
        </p>
      </div>
      <img src={image.src} alt="additional" width={width} height={height} />
    </div>
  );
}
