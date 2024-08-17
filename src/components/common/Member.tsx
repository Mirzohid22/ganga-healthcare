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
        size === "short" ? "h-[250px] w-[200px]" : "h-[550px] w-[380px]"
      } 
        flex flex-col justify-between items-start md:items-center`}
    >
      <img
        src={image}
        alt="member"
        width={size === "default" ? 380 : 200}
        height={size === "default" ? 550 : 450}
        className="rounded-[10px]"
      />
      <h3 className="font-bold text-[12px] md:text-[24px] ledaing-[14.52px] md:leading-[29.05px]">{name}</h3>
      <p className="font-normal text-[8px] md:text-[15px] leading-[9.68px] md:leading-[18.15px]">{profession}</p>
    </div>
  );
}
