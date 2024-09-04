/* eslint-disable @next/next/no-img-element */
import { type Blog } from "@/types";
import dynamic from "next/dynamic";

const TransitionLink = dynamic(
  () => import("@/components/common/TransitionLink"),
  {
    ssr: false,
  }
);

const dateFormatter = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

export default function Blog({
  image,
  title,
  description,
  createdAt,
  _id,
}: Blog) {
  return (
    <TransitionLink centered isButton href={`/news/${_id}`}>
      <div className="w-[350px] sm:w-[500px] md:w-[380px] h-[355px] sm:h-[450px] md:h-[410px] lg:h-[450px] flex flex-col items-start justify-between cursor-pointer overflow-hidden rounded-[10px] sm:rounded-sm transition-transform duration-500">
        <div className="w-[350px] sm:w-[500px] md:w-[380px] h-[250px] sm:h-[300px] overflow-hidden rounded-[10px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:opacity-95"
          />
        </div>
        <span className="font-normal text-[10px] sm:text-[12px] md:text-[15px] leading-[12px] sm:leading-[14px] md:leading-[18.15px] text-[#C0C0C0]">
          {dateFormatter(createdAt)}
        </span>
        <h3 className="font-bold text-[20px] sm:text-[24px] md:text-[24px] leading-[24.2px] sm:leading-[28.6px] md:leading-[29.05px]">
          {title}
        </h3>
        <p className="font-normal text-[10px] sm:text-[12px] md:text-[15px] leading-[12px] sm:leading-[14px] md:leading-[18.15px]">
          {description}
        </p>
      </div>
    </TransitionLink>
  );
}
