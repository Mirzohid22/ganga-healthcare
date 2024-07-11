import React from "react";

type AdditionalProps = {
  variant: "lime" | "blue" | "yellow";
  title: string;
  description: string;
};

export default function Additional({ variant, title, description }: AdditionalProps) {
  return (
    <div
      style={{
        background: `var(--common-${variant})`,
      }}
      className="w-[380px] h-[200px] flex flex-col items-start justify-end  rounded-[10px] p-5 gap-4"
    >
      <h3 className="text-[20px] font-bold leading-[24.2px]" >{title}</h3>
      <p className="text-xs leading-[14.52px]">{description}</p>
    </div>
  );
}
