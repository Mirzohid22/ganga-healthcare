/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { type Blog } from "@/types";

const URL = process.env.NEXT_PUBLIC_URL;

export default function Blog({ image, title, description, createdAt }: Blog) {
  const dateFormatter = useCallback((date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);
  return (
    <div className="w-[380px] h-[410px] flex flex-col items-start justify-between">
      <img
        src={`${URL}/${image}`}
        alt={title}
        width={380}
        height={250}
        className="rounded-[10px]"
      />
      <span className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
        {dateFormatter(createdAt)}
      </span>
      <h3 className="font-bold text-[24px] leading-[29.05px]">{title}</h3>
      <p className="font-normal text-[15px] leading-[18.15px]">{description}</p>
    </div>
  );
}
