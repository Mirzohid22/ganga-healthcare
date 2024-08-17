/* eslint-disable @next/next/no-img-element */
import TransitionLink from "./TransitionLink";
import { type Product as ProductType } from "@/types";

export default function Product({
  _id,
  image,
  name,
  price,
  inStock,
}: ProductType) {
  return (
    <div
      className="h-[240px] md:h-[420px] w-[160px] md:w-[280px] flex flex-col justify-between items-center gap-2 rounded-[10px] p-6 hover:bg-gray-100 "
    >
      <div className="w-full h-[280px] transition-transform duration-300 ease-in-out hover:scale-105">
        <img
          src={image}
          alt="member"
          className="rounded-[10px] object-cover w-[120px] h-[120px] md:w-[256px] md:h-[250px]"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <h3 title={name} className="font-bold text-[20px] md:text-[24px] leading-[24.2px] md:leading-[29.05px]">
          {name.length > 14 ? name.slice(0, 11) + "..." : name}
        </h3>
        <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#C1C1C1]">
          {price}
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <TransitionLink
          isButton
          href={`/products/${_id}`}
        >
          <button
            className="w-[128px] md:w-[220px] h-[34px] md:h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[14px] md:text-[16px] leading:[16.94px] md:leading-[19.36px] active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
          >
            Заказать
          </button>
        </TransitionLink>
        {inStock ? (
          <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#27BE5A]">
            В наличии
          </p>
        ) : (
          <p className="font-medium text-[8px] md:text-[12px] leading-[9.68px] md:leading-[14.52px] text-[#FF4D4F]">
            Нет в наличии
          </p>
        )}
      </div>
    </div>
  );
}
