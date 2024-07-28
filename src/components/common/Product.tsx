/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { type Product as ProductType } from "@/types";

export default function Product({
  _id,
  image,
  name,
  price,
  inStock,
}: ProductType) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${_id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="h-[380px] w-[280px] flex flex-col justify-between items-center gap-2 rounded-[10px] p-6 hover:bg-[#F8F8F8]"
    >
      <div className="w-full h-[280px]">
        <img
          src={image}
          alt="member"
          width={256}
          height={250}
          className="rounded-[10px] object-cover"
        />
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <h3 title={name} className="font-bold text-[24px] leading-[29.05px]">
          {/* if characters are more than 14 show 3 dots at the end */}
          {/* add tooltip for name */}

          {name.length > 14 ? name.slice(0, 11) + "..." : name}
        </h3>
        <p className="font-medium text-[12px] leading-[14.52px] text-[#C1C1C1]">
          {price}
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-start gap-2">
        <button
          className="w-[220px] h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[16px] leading-[19.36px] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
        >
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
    </div>
  );
}
