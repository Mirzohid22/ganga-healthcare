/* eslint-disable @next/next/no-img-element */
import { type Member as MemberType } from "@/types";

export default function Member({
  name,
  image,
  profession,
  size = "default",
}: MemberType & { size: "short" | "default" }) {
  return (
    <div
      className={`${
        size === "short"
          ? "h-[250px] w-[200px] md:h-[350px] md:w-[280px]"
          : "h-[550px] w-[380px]"
      } 
        flex flex-col justify-between items-start md:items-center gap-1`}
    >
      <img
        src={image}
        alt="member"
        className={`rounded-[10px] ${
          size === "default" ? "w-[380px] h-[450px]" : "w-[200px] h-[450px] md:h-[350px] md:w-[280px]"
        }`}
      />
      <h3 className="font-bold text-[12px] md:text-[18px] lg:text-[24px] ledaing-[14.52px] md:leading-[22px] lg:leading-[29.05px]">
        {name}
      </h3>
      <p className="font-normal text-[8px] md:text-[12px] lg:text-[15px] leading-[9.68px] md:leading-[14px] lg:leading-[18.15px]">
        {profession}
      </p>
    </div>
  );
}
