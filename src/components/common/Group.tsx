import { useRouter } from "next/router";
import { type Group as GroupType } from "@/types";

export default function Group({ name, types }: GroupType) {
  const router = useRouter();
  const { query } = router;
  const currentTypes: string[] = query.types
    ? (query.types as string).split(",")
    : [];

  return (
    <div className="w-[231px] h-auto flex flex-col gap-7">
      <h2 className="text-[14px] font-bold leading-[16.94px]">{name}</h2>
      <div className="flex flex-col items-start gap-4 text-sm font-normal leading-[16.94px] text-[#7D7D7D]">
        {types.map(({ _id, name }) => (
          <button
            key={_id}
            onClick={() => {
              const newTypes = currentTypes.includes(_id)
                ? currentTypes.filter((type) => type !== _id)
                : [...currentTypes, _id];
              router.push({
                pathname: router.pathname,
                query: { ...query, types: newTypes.join(",") },
              });
            }}
            className={`w-full text-left
          ${currentTypes.includes(_id) ? "text-[#699CFF]" : "text-[#7D7D7D]"}
          `}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
