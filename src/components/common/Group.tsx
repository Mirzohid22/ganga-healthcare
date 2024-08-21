import { useState } from "react";
import { type Group as GroupType } from "@/types";

export default function Group({
  name,
  types,
  selectedTypes,
  setSelectedTypes,
}: GroupType & {
  selectedTypes: string[];
  setSelectedTypes: (types: string[]) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="w-[231px] h-auto flex flex-col gap-7">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-[14px] font-bold leading-[16.94px]">{name}</h2>
        <span
          className={`transform transition-transform duration-300 ${
            isExpanded ? "rotate-0" : "rotate-180"
          }`}
        >
          ▲
        </span>
      </div>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          isExpanded ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 text-sm font-normal leading-[16.94px] text-[#7D7D7D]">
          {types.map(({ _id, name }) => (
            <button
              key={_id}
              onClick={() => {
                const newTypes = selectedTypes.includes(_id)
                  ? selectedTypes.filter((type) => type !== _id)
                  : [...selectedTypes, _id];
                setSelectedTypes(newTypes);
              }}
              className={`w-full text-left
              active:opacity-95 active:scale-95
              transition duration-400 ease-in-out
              ring-0 outline-none 
              hover:bg-[var(--secondary)] hover:rounded-[10px] hover:shadow-sm
              ${selectedTypes.includes(_id) ? "font-bold" : "text-[#7D7D7D]"}
            `}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
