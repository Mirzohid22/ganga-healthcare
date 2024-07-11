import React from "react";

type BannerProps = {
  variant: "green" | "lime" | "blue" | "yellow";
  title: string;
  description: string;
};

export default function Banner({ variant, title, description }: BannerProps) {
  return (
    <div
      style={{
        background: `var(--common-${variant})`,
      }}
      className="w-full max-w-[var(--max-width)] flex flex-col items-start justify-center h-[var(--banner-height)] rounded-[10px] p-5 gap-4"
    >
      <h1 className="text-[64px] font-bold pr-[500px] leading-[77.45px]" >{title}</h1>
      <p className="text-xs leading-[14.52px] pr-[500px]">{description}</p>
    </div>
  );
}
