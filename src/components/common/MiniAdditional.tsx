/* eslint-disable @next/next/no-img-element */
import React from "react";
import { type StaticImageData } from "next/image";

type MiniAdditionalProps = {
  justify: "end" | "between";
  variant: "lime" | "blue" | "yellow";
  title: string;
  description: string;
  image: StaticImageData;
  width?: string;
  height?: string;
};

export default function MiniAdditional({
  image,
  variant,
  title,
  description,
  justify = "end",
  width,
  height,
}: MiniAdditionalProps) {
  return (
    <div
      style={{
        background: `var(--common-${variant})`,
      }}
      className="w-[350px] md:w-[380px] h-[160px] md:h-[200px] flex items-center justify-between rounded-[10px] p-5 gap-4"
    >
      <div className="flex flex-col items-start justify-between gap-4">
        <h3 className="text-[20px] font-bold leading-[24.2px]">{title}</h3>
        <p
          className={`${justify === "end" && "text-[8px] md:text-xs leading-[9.68px] md:leading-[14.52px]"} ${
            justify === "between" && "font-bold text-2xl  leading-[29.05px]"
          }`}
        >
          {description}
        </p>
      </div>
      <img src={image.src} alt="additional" className={` md:h-[${width}] md:w-[${height}]`} width={width} height={height} />
    </div>
  );
}
