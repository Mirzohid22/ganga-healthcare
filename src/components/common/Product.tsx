import dynamic from "next/dynamic";
import { type Product as ProductType } from "@/types";

const TransitionLink = dynamic(
  () => import("@/components/common/TransitionLink"),
  {
    ssr: false,
  }
);
/* eslint-disable @next/next/no-img-element */
export default function Product({
  _id,
  image,
  name,
  price,
  inStock,
}: ProductType) {
  return (
    <div className="h-[260px] md:h-[360px] lg:h-[420px] w-[180px] md:w-[230px] lg:w-[280px] flex flex-col justify-between items-center gap-2 rounded-[10px] p-6 hover:bg-gray-100 transition-colors duration-300 ease-in-out">
      <div className="w-full h-[280px] transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src={image}
          alt={name}
          className="rounded-[10px] object-cover w-[120px] h-[120px] md:w-[180px] md:h-[200px] lg:w-[256px] lg:h-[250px]"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-1 lg:gap-2">
        <h3
          title={name}
          className="font-bold text-[16px] lg:text-[24px] leading-[24.2px] lg:leading-[29.05px] transition-colors duration-300 ease-in-out"
        >
          {name.length > 13 ? name.slice(0, 11) + "..." : name}
        </h3>
        <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#C1C1C1] transition-colors duration-300 ease-in-out">
          {price}
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <TransitionLink isButton href={`/products/${_id}`}>
          <button className="w-[128px] md:w-[160px] lg:w-[220px] h-[34px] md:h-[40px] lg:h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[14px] lg:text-[16px] leading-[16.94px] md:leading-[19.36px] active:opacity-95 active:scale-95 transition-transform duration-400 ease-in-out">
            Заказать
          </button>
        </TransitionLink>
        {inStock ? (
          <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#27BE5A] transition-colors duration-300 ease-in-out">
            В наличии
          </p>
        ) : (
          <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#FF4D4F] transition-colors duration-300 ease-in-out">
            Нет в наличии
          </p>
        )}
      </div>
    </div>
  );
}
