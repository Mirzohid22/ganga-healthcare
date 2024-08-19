import React from "react";
import Image from "next/image";
import nurse from "../../../public/media-banner-nurse.png";

type MiniMediaBannerProps = {
  title: string;
  description: string;
};

export default function MiniMediaBanner({ title, description }: MiniMediaBannerProps) {
  return (
    <div
    style={{
        maxWidth: "var(--max-width)",
        backgroundImage: "url('/media-banner-nurse.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "clip",
        
    }}
      className="w-[350px] sm:w-[500px] max-w-[var(--max-width)] bg-[var(--common-blue)] flex md:hidden items-end justify-center h-[200px] sm:h-[300px] rounded-[20px] gap-1 p-3 mx-auto"
    >
      <div className="flex flex-col items-start justify-center pb-8 gap-4">
        <h1 className="text-[20px] sm:tetx-[24px] font-bold leading-[24.2px] sm:leading-[28px]">
          {title}
        </h1>
        <p className="text-[8px] sm:text-[12px] leading-[9.68px] sm:leading-[14px]">{description}</p>
      </div>
    </div>
  );
}
