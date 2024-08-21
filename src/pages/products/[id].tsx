import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import ProductImages from "@/components/common/ProductImages";
import Product from "@/components/common/Product";
import MediaBanner from "@/components/common/MediaBanner";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/common/TransitionLink";

import { type Product as ProductType, type ProductDetailed } from "@/types";
import { type GetStaticPaths } from "next";
import { useEffect, useState } from "react";
import MiniMediaBanner from "@/components/common/MiniMediaBanner";

const inter = Inter({ subsets: ["latin"] });

const ProductImagesSkeleton = () => (
  <div className="flex items-start justify-center gap-2.5 animate-pulse">
    <div className="flex flex-col items-start justify-start gap-2.5">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="h-[88px] w-[88px] bg-gray-300 rounded-[10px]"
        ></div>
      ))}
    </div>
    <div>
      <div className="h-[480px] w-[480px] bg-gray-300 rounded-[10px]"></div>
    </div>
  </div>
);

const ProductDetailsSkeleton = () => (
  <div className="h-[480px] w-[500px] flex flex-col items-start justify-between text-base font-normal leading-[19.36px] text-justify animate-pulse">
    <div className="flex flex-col items-start justify-start gap-1">
      <div className="h-[38.73px] w-[300px] bg-gray-300 rounded"></div>
      <div className="h-[14.52px] w-[150px] bg-gray-300 rounded mt-2"></div>
    </div>

    <div className="h-[100px] w-full bg-gray-300 rounded mt-4"></div>

    <div className="flex flex-col items-start justify-center gap-5 mt-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="h-[19.36px] w-[250px] bg-gray-300 rounded"
        ></div>
      ))}
    </div>

    <div className="flex gap-4 mt-4">
      <div className="w-[220px] h-[50px] bg-gray-300 rounded"></div>
      <div className="w-[220px] h-[50px] bg-gray-300 rounded"></div>
    </div>
  </div>
);

const DescriptionSkeleton = () => (
  <section className="w-full max-w-[var(--max-width)] flex flex-col gap-8 animate-pulse">
    <div className="h-[38.73px] w-[200px] bg-gray-300 rounded"></div>

    {[...Array(5)].map((_, index) => (
      <div
        key={index}
        className="w-full flex flex-col text-base leading-[19.36px] gap-1"
      >
        <div className="h-[19.36px] w-[150px] bg-gray-300 rounded mb-2"></div>
        {[...Array(4)].map((_, subIndex) => (
          <div
            key={subIndex}
            className="h-[19.36px] w-full bg-gray-300 rounded mb-1"
          ></div>
        ))}
        <div className="h-[19.36px] w-[80px] bg-gray-300 rounded mt-2"></div>
      </div>
    ))}
  </section>
);

export default function Page({
  products,
  locale,
}: {
  locale: string;
  products: ProductType[];
  meta: { total: number; page: number; limit: number };
}) {
  const { t } = useTranslation("common");
  const { query } = useRouter();
  const productId: string = query.id as string;
  const [product, setProduct] = useState<ProductDetailed | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/product/${productId}?locale=${locale}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { data }: { data: ProductDetailed } = await response.json();
      setProduct(data);
      setLoading(false);
    };
    fetchProduct();
  }, [locale, productId]);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />

      <div className="w-full max-w-[var(--max-width)] flex items-center justify-start gap-2 mx-auto">
        <button
          className="ml-5 w-[105px] h-10 bg-[#EBEBEB80] rounded-[10px] font-medium text-sm leading-[16.94px] text-center text-[#858585] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
        >
          Products
        </button>
        <TransitionLink isButton href="/products">
          <button
            className="h-10 px-5 bg-[#EBEBEB] rounded-[10px] flex items-center justify-center active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
          >
            {"<- "}
            {product?.name}
          </button>
        </TransitionLink>
      </div>

      <section className="w-full max-w-[var(--max-width)] flex flex-col md:flex-row items-center justify-center md:items-start md:justify-start gap-5">
        {loading ? (
          <>
            <ProductImagesSkeleton />
            <ProductDetailsSkeleton />
          </>
        ) : (
          <>
            <ProductImages
              images={
                [product?.image, ...(product?.images as string[])] as string[]
              }
            />
            <div className="h-[480px] w-full px-5 md:px-1 md:w-[500px] flex flex-col items-start justify-between text-base font-normal leading-[19.36px] text-justify">
              <div className="flex flex-col w-full items-center md:items-start justify-start gap-1">
                <h2 className="font-bold text-[24px] lg:text-[32px] leading-[28px] lg:leading-[38.73px]">
                  {product?.name}
                </h2>
                <p className="font-medium text-[12px] leading-[14.52px] text-[#27BE5A]">
                  {product?.inStock
                    ? t("Product.inStock")
                    : t("Product.outOfStock")}
                </p>
              </div>

              <p>{product?.description}</p>

              <div className="flex flex-col items-start justify-center gap-5">
                {product?.details?.map((detail) => (
                  <p key={detail.label}>
                    <b>{detail.label}:</b> {detail.value}
                  </p>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  // scrolls to the form
                  onClick={() => {
                    document.getElementsByTagName("form")[0].scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "end",
                    });
                  }}
                  className="w-[160px] md:w-[220px] h-[35px] md:h-[50px] rounded-[10px] bg-[var(--primary)] font-bold text-white text-[16px] leading-[19.36px] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
                >
                  Заказать
                </button>

                <a
                  // link to telegram bot
                  href="https://t.me/osonaptekabot"
                  target="_blank"
                >
                  <button
                    className="w-[160px] md:w-[220px] h-[35px] md:h-[50px] rounded-[10px] bg-[var(--secondary)] font-bold text-black text-[16px] leading-[19.36px] active:opacity-95 active:scale-95
                transition duration-400 ease-in-out"
                  >
                    Найти в аптеках
                  </button>
                </a>
              </div>
            </div>
          </>
        )}
      </section>

      {loading ? (
        <DescriptionSkeleton />
      ) : (
        <section
          className="w-full max-w-[var(--max-width)] flex flex-col gap-8 px-5 md:px-1"
          dangerouslySetInnerHTML={{ __html: product?.content as string }}
        ></section>
      )}
      <section className="w-full max-w-[var(--max-width)] flex flex-col items-start justify-center gap-10 py-20">
        <h2 className="font-bold w-2/3 text-[20px] sm:text-[24px] md:text-[32px] leading-[24.2px] sm:leading-[28px] md:leading-[38.73px] mx-auto max-w-[548px] text-center mt-20 mb-6">
          Популярные препараты
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid grid-cols-2 gap-1 sm:grid-cols-3 gap-y-5 md:gap-y-[90px] md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>
      </section>

      <MediaBanner
        title={t("Media.title")}
        description={t("Media.description")}
      />
      <MiniMediaBanner
        title={t("Media.title")}
        description={t("Media.description")}
      />
      <Form />

      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const responseProducts = await fetch(`${URL}/product?limit=4`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    data: products,
  }: {
    data: ProductType[];
  } = await responseProducts.json();
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      products,
      // Will be passed to the page component as props
    },
    revalidate: 60,
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
