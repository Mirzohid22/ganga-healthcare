/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { type Member as MemberType } from "@/types";

const URL = process.env.NEXT_PUBLIC_URL;

export default function Member({ name, image, profession }: MemberType ) {
  return (
    <div className="h-[525px] w-[380px] flex flex-col justify-between items-center">
      <img
        src={`${URL}/${image}`}
        alt="member"
        width={380}
        height={450}
        className="rounded-[10px]"
      />
      <h3 className="font-bold text-[24px] leading-[29.05px]">{name}</h3>
      <p className="font-normal text-[15px] leading-[18.15px]">{profession}</p>
    </div>
  );
}