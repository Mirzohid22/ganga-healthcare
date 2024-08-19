import React from "react";
import Image from "next/image";
import nurse from "../../../public/media-banner-nurse.png";

type MediaBannerProps = {
  title: string;
  description: string;
};

export default function MediaBanner({ title, description }: MediaBannerProps) {
  return (
    <div
      className="w-full md:w-9/10 lg:w-full max-w-[var(--max-width)] bg-[var(--common-blue)] hidden md:flex items-end justify-center h-[530px] rounded-[20px] pl-6 lg:pl-20 lg:gap-3"
    >
      <div className="flex flex-col md:self-center items-center justify-start pb-12 md:pb-5 lg:pb-12 gap-10 md:gap-6 lg:gap-10 md:w-1/2 lg:w-auto">
        <h1 className="text-[64px] md:text-[36px] lg:text-[64px] font-bold leading-[77.45px] md:leading-[46px] lg:leading-[77.45px] w-[580px] md:w-full lg:w-[580px]">
          {title}
        </h1>
        <p className="text-xs leading-[14.52px]">{description}</p>
      </div>
      <Image src={nurse} alt="Nurse" width={550} height={507} />
    </div>
  );
}
