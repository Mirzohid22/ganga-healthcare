import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import MiniBanner from "@/components/common/MiniBanner";
import Group from "@/components/common/Group";
import Product from "@/components/common/Product";
import SkeletonProduct from "@/components/common/SkeletonProduct";
import Pagination from "@/components/Pagination";
import MediaBanner from "@/components/common/MediaBanner";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { type Product as ProductType, type Group as GroupType } from "@/types";
import bannerImage from "../../../public/banner-products.png";
import useDebouncedState from "@/hooks/useDebouncedState";
import MiniMediaBanner from "@/components/common/MiniMediaBanner";

const inter = Inter({ subsets: ["latin"] });

export default function Products({ locale }: { locale: string }) {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { query } = router;
  const [products, setProducts] = useState<ProductType[]>([]);
  const [groups, setGroups] = useState<GroupType[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [productMeta, setProductMeta] = useState<{
    total: number;
    limit: number;
  }>({ total: 0, limit: 12 });
  const [searchQuery, setSearchQuery] = useDebouncedState("", 500);

  useEffect(() => {
    const fetchGroups = async () => {
      const URL = process.env.NEXT_PUBLIC_URL;
      const response = await fetch(`${URL}/group?limit=12&locale=${locale}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data }: { data: GroupType[] } = await response.json();
      setGroups(data);
    };
    fetchGroups();
  }, [locale]);

  useEffect(() => {
    const types = selectedTypes.join(",");
    const fetchProducts = async () => {
      setLoading(true);
      const URL = process.env.NEXT_PUBLIC_URL;
      const response = await fetch(
        `${URL}/product?limit=12&page=${page}&locale=${locale}&searchQuery=${searchQuery}&types=${types}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const {
        data,
        meta,
      }: {
        data: ProductType[];
        meta: { total: number; page: number; limit: number };
      } = await response.json();
      setProducts(data);
      setProductMeta({ total: meta.total, limit: meta.limit });
      setLoading(false);
    };
    fetchProducts();
  }, [locale, page, query, searchQuery, selectedTypes]);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />
      <Banner
        image={bannerImage}
        color="blue"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <MiniBanner
        image={bannerImage}
        color="blue"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <section className="w-full max-w-[var(--max-width)] flex flex-col md:flex-row items-center md:items-start justify-start md:justify-between gap-0 p-5">
        <div className="w-[231px] h-auto flex flex-col gap-10">
          <h2 className="font-bold text-[24px leading-[29.05px]">Продукция</h2>
          {groups.map((group) => (
            <Group
              key={group._id}
              {...group}
              selectedTypes={selectedTypes}
              setSelectedTypes={setSelectedTypes}
            />
          ))}

          <button
            className="w-[200px] md:w-[220px] h-[35px] md:h-[50px] rounded-[10px] bg-[var(--secondary)] font-bold text-[#A4A4A4] text-[14px] md:text-[16px] leading-[16px] md:leading-[19.36px] active:opacity-95 active:scale-95 my-4
         transition duration-400 ease-in-out"
            onClick={() => {
              setSelectedTypes([]);
            }}
          >
            ОЧИСТИТЬ ФИЛЬТР
          </button>
        </div>

        <div className="w-auto flex flex-col justify-start items-end">
          <div className="w-full flex items-center justify-end gap-0">
            <input
              id="search"
              type="text"
              placeholder="Search..."
              className="w-full sm:w-[310px] md:w-[450px] h-[40px] md:h-[50px] bg-[#F7F7F7] font-normal text-black text-[14px] leading-[16.94px] px-5 border outline-none ring-0 rounded-[10px] sm:rounded-r-none"
              onChange={(e) => {
                setPage(1);
                setSearchQuery(e.target.value);
              }}
            />
            <button
              onClick={() => {
                document?.getElementById("search")?.focus();
              }}
              className="hidden sm:block w-[80px] md:w-[126px] h-[40px] md:h-[50px] bg-[var(--primary)] font-bold text-white text-[16px] leading-[19.36px] active:opacity-95 active:scale-95 transition duration-400 ease-in-out rounded-[10px] rounded-l-none"
            >
              Search
            </button>
          </div>

          <div className="w-full mx-auto grid grid-cols-2 gap-7 lg:gap-y-[90px] md:grid-cols-2 lg:grid-cols-3 pt-5 md:pt-10 md:pl-10">
            {loading
              ? Array.from({ length: 12 }).map((_, i) => (
                  <SkeletonProduct key={i} />
                ))
              : products.map((product) => (
                  <Product key={product._id} {...product} />
                ))}
          </div>

          <div className="mx-auto">
            <Pagination
              total={Math.ceil(
                Number(productMeta.total) / Number(productMeta.limit)
              )}
              page={page}
              setPage={setPage}
            />
          </div>
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

export const getStaticProps = async ({ locale }: { locale: string }) => {
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
