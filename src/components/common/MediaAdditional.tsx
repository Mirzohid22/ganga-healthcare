import React from "react";

type MediaAdditionalProps = {
  variant: "green" | "blue";
  title: string;
  description: string;
};

export default function MediaAdditional({ variant, title, description }: MediaAdditionalProps) {
  return (
    <div
      style={{
        background: variant === "green" ? "#E3F59C" : "#ADD7F6",
      }}
      className="w-[580px] h-[300px] flex flex-col items-start justify-start  rounded-[20px] p-12 gap-4"
    >
      <h3 className="text-[24px] font-bold leading-[29.05px]" >{title}</h3>
      <p className="text-[15px] font-normal leading-[18.15px]">{description}</p>
    </div>
  );
}
