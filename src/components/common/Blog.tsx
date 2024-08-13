/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { type Blog } from "@/types";
import TransitionLink from "./TransitionLink";

export default function Blog({
  image,
  title,
  description,
  createdAt,
  _id,
}: Blog) {
  const dateFormatter = useCallback((date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);
  return (
    <TransitionLink centered isButton href={`/news/${_id}`}>
      <div className="w-[380px] h-[410px] flex flex-col items-start justify-between cursor-pointer overflow-hidden rounded-[10px] transition-transform duration-500">
        <div className="w-[380px] h-[250px] overflow-hidden rounded-[10px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95"
          />
        </div>
        <span className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
          {dateFormatter(createdAt)}
        </span>
        <h3 className="font-bold text-[24px] leading-[29.05px]">{title}</h3>
        <p className="font-normal text-[15px] leading-[18.15px]">
          {description}
        </p>
      </div>
    </TransitionLink>
  );
}
