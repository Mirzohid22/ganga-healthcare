/* eslint-disable @next/next/no-img-element */
import { type Product as ProductType } from "@/types";

const URL = process.env.NEXT_PUBLIC_URL;

export default function Product({ image, name, price, inStock }: ProductType) {
  return (
    <div className="h-[380px] w-[280px] flex flex-col justify-start items-center gap-2 rounded-[10px] p-6 hover:bg-[#F8F8F8]">
      <div className="w-full h-[280px]">
        <img
          src={`${URL}/${image}`}
          alt="member"
          width={256}
          height={250}
          className="rounded-[10px] object-cover"
        />
      </div>
      <h3 className="font-bold text-[24px] leading-[29.05px]">{name}</h3>
      <p className="font-medium text-[12px] leading-[14.52px] text-[#C1C1C1]">
        {price}
      </p>
      <button className="w-[220px] h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[16px] leading-[19.36px]">
        Заказать
      </button>
      {inStock ? (
        <p className="font-medium text-[12px] leading-[14.52px] text-[#27BE5A]">
          В наличии
        </p>
      ) : (
        <p className="font-medium text-[12px] leading-[14.52px] text-[#FF4D4F]">
          Нет в наличии
        </p>
      )}
    </div>
  );
}
