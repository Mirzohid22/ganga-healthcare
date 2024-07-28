/* eslint-disable @next/next/no-img-element */
import { useCallback } from "react";
import { type Blog } from "@/types";
import { useRouter } from "next/router";

export default function Blog({
  image,
  title,
  description,
  createdAt,
  _id,
}: Blog) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/news/${_id}`);
  };
  const dateFormatter = useCallback((date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);
  return (
    <div
      className="w-[380px] h-[410px] flex flex-col items-start justify-between cursor-pointer overflow-hidden rounded-[10px] transition-transform duration-500"
      onClick={handleClick}
    >
      <img
        src={image}
        alt={title}
        width={380}
        height={250}
        className="rounded-[10px] hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:opacity-95"
      />
      <span className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
        {dateFormatter(createdAt)}
      </span>
      <h3 className="font-bold text-[24px] leading-[29.05px]">{title}</h3>
      <p className="font-normal text-[15px] leading-[18.15px]">{description}</p>
    </div>
  );
}
