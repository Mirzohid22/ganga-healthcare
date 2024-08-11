import Image from "next/image";
import { useState } from "react";

interface ProductImagesProps {
  images: string[];
}

export default function ProductImages({ images }: ProductImagesProps) {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);

  return (
    <div className="flex items-start justify-center gap-2.5">
      <div className="flex flex-col items-start justify-start gap-2.5">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`cursor-pointer border-4 rounded-[10px] transform transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95 ${
              image === selectedImage ? "border-[var(--primary)]" : "border-gray-300"
            }`}
          >
            <Image
              width={88}
              height={88}
              src={image}
              alt={`product-${index}`}
              className="h-[88px] w-[88px] rounded-[10px]"
            />
          </div>
        ))}
      </div>
      <div className="transition-opacity duration-500 ease-in-out">
        <Image
          key={selectedImage}
          height={480}
          width={480}
          src={selectedImage}
          alt="selected-product"
          className="rounded-[10px] object-cover w-[480px] h-[480px] opacity-0 transition-opacity duration-500 ease-in-out"
          onLoad={(e) => (e.currentTarget.style.opacity = "1")}
        />
      </div>
    </div>
  );
}
