import React from "react";

type AdditionalProps = {
  justify: 'end' | 'between';
  variant: "lime" | "blue" | "yellow";
  title: string;
  description: string;
};

export default function AdditionalContact({ variant, title, description, justify = 'end'}: AdditionalProps) {
  return (
    <div
      style={{
        background: `var(--common-${variant})`,
        justifyContent: justify === 'end' ? 'flex-end' : 'space-between',
      }}
      className="w-[380px] h-[200px] flex flex-col items-start justify-end rounded-[10px] p-5 gap-4"
    >
      <h3 className="text-[20px] font-bold leading-[24.2px]" >{title}</h3>
      <p className={`${justify === 'end' && "text-xs leading-[14.52px]"} ${justify === 'between' && "font-bold text-2xl  leading-[29.05px]"}`}>{description}</p>
    </div>
  );
}
