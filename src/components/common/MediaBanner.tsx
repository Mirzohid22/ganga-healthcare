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
      className="w-full max-w-[var(--max-width)] bg-[var(--common-blue)] flex items-end justify-center h-[530px] rounded-[20px] pl-12 gap-4"
    >
      <div className="flex flex-col items-start justify-center pb-12 gap-10">
        <h1 className="text-[64px] font-bold leading-[77.45px] w-[580px]">
          {title}
        </h1>
        <p className="text-xs leading-[14.52px">{description}</p>
      </div>
      <Image src={nurse} alt="Nurse" width={550} height={507} />
    </div>
  );
}
