import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import Blog from "@/components/common/Blog";
// import Pagination from "@/components/Pagination";
import MediaBanner from "@/components/common/MediaBanner";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

import { type Blog as BlogType } from "@/types";

import bannerImage from "../../../public/banner-news.png";
import MiniBanner from "@/components/common/MiniBanner";
import MiniMediaBanner from "@/components/common/MiniMediaBanner";

const inter = Inter({ subsets: ["latin"] });

export default function News({
  blogs,
  meta,
}: {
  blogs: BlogType[];
  meta: { total: number; page: number; limit: number };
}) {
  const { t } = useTranslation("common");
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />
      <Banner
        image={bannerImage}
        color="black"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <MiniBanner
        image={bannerImage}
        color="black"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <section className="w-full max-w-[var(--max-width)] grid grid-cols-1 gap-7 gap-y-[90px] md:grid-cols-2 lg:grid-cols-3 mt-[60px]">
        {blogs.map((blog) => (
          <Blog key={blog._id} {...blog} />
        ))}
      </section>

      {/* <Pagination total={Math.ceil(meta.total / meta.limit)} /> */}

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

  const responseBlogs = await fetch(`${URL}/blog?locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    data: blogs,
    meta,
  }: {
    data: BlogType[];
    meta: {
      total: number;
      page: number;
      limit: number;
    };
  } = await responseBlogs.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blogs,
      meta,
      // Will be passed to the page component as props
    },
    revalidate: 60,
  };
}
