import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import productMain from "../../../public/product/product-main.png";
import product1 from "../../../public/product/product-1.png";
import product2 from "../../../public/product/product-2.png";
import product3 from "../../../public/product/product-3.png";
import product4 from "../../../public/product/product-4.png";

export default function ProductImages() {
  const [selectedImage, setSelectedImage] =
    useState<StaticImageData>(productMain);
  return (
    <div className="flex items-start justify-center gap-2.5">
      <div className="flex flex-col items-start justify-start gap-2.5">
        <Image
          onClick={() => setSelectedImage(productMain)}
          width={88}
          height={88}
          src={productMain}
          alt="product-main"
          className="h-[88px] w-[88px] rounded-[10px] active:opacity-95 active:scale-95 active:animate-spin cursor-pointer"
        />
        <Image
          onClick={() => setSelectedImage(product1)}
          width={88}
          height={88}
          src={product1}
          alt="product-1"
          className="h-[88px] w-[88px] rounded-[10px] active:opacity-95 active:scale-95 active:animate-spin cursor-pointer"
        />
        <Image
          onClick={() => setSelectedImage(product2)}
          width={88}
          height={88}
          src={product2}
          alt="product-2"
          className="h-[88px] w-[88px] rounded-[10px] active:opacity-95 active:scale-95 active:animate-spin cursor-pointer"
        />
        <Image
          onClick={() => setSelectedImage(product3)}
          width={88}
          height={88}
          src={product3}
          alt="product-3"
          className="h-[88px] w-[88px] rounded-[10px] active:opacity-95 active:scale-95 active:animate-spin cursor-pointer"
        />
        <Image
          onClick={() => setSelectedImage(product4)}
          width={88}
          height={88}
          src={product4}
          alt="product-4"
          className="h-[88px] w-[88px] rounded-[10px] active:opacity-95 active:scale-95 active:animate-spin cursor-pointer"
        />
      </div>
      <div>
        <Image
          height={480}
          width={480}
          src={selectedImage}
          alt="product-main"
          className="rounded-[10px] object-fit w-[480px] h-[480px]"
        />
      </div>
    </div>
  );
}
