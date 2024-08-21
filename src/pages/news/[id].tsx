import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Blog from "@/components/common/Blog";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import TransitionLink from "@/components/common/TransitionLink";

import { type Blog as BlogType } from "@/types";
import { type GetStaticPaths } from "next";

const inter = Inter({ subsets: ["latin"] });

export default function Page({
  blogs,
  meta,
  locale,
}: {
  locale: string;
  blogs: BlogType[];
  meta: { total: number; page: number; limit: number };
}) {
  const { t } = useTranslation("common");
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<BlogType | null>(null);
  const { query } = useRouter();
  const blogId: string = query.id as string;

  const dateFormatter = useCallback((date: string) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }, []);

  useEffect(() => {
    const fetchBlog = async () => {
      const URL = process.env.NEXT_PUBLIC_URL;
      const response = await fetch(`${URL}/blog/${blogId}?locale=${locale}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { data }: { data: BlogType } = await response.json();
      setBlog(data);
      setLoading(false);
    };

    fetchBlog();
  }, [locale, blogId]);

  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />

      <div className="w-full max-w-[var(--max-width)] flex items-center justify-start gap-2">
        <button
          className="w-[105px] h-10 bg-[#EBEBEB80] rounded-[10px] font-medium text-sm leading-[16.94px] text-center text-[#858585] active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
        >
          Blogs
        </button>
        <TransitionLink isButton href="/news">
          <button
            className="hidden h-10 px-5 bg-[#EBEBEB] rounded-[10px] md:flex items-center justify-center active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
          >
            {"<- "}
            {blog?.title}
          </button>
          <button
            className="md:hidden h-10 px-5 bg-[#EBEBEB] rounded-[10px] flex items-center justify-center active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
          >
            {"<- "}
            {blog?.title && blog.title.length > 25
              ? blog.title.slice(0, 25) + "..."
              : blog?.title}
          </button>
        </TransitionLink>
      </div>

      <section className="w-full max-w-[var(--max-width)] flex flex-col gap-9 items-stretch justify-start px-5 pb-20">
        {loading ? (
          // skeleton
          <div className="w-[539px] h-[383px] bg-[#EBEBEB] rounded-[10px]" />
        ) : (
          <Image
            src={blog?.image as string}
            alt="Blog content"
            width={539}
            height={383}
            className="xs:w-full md:w-9/10 lg:w-4/5 mx-auto object-cover rounded-[10px]"
          />
        )}
        <div className="h-[383px] flex flex-col text-justify justify-start items-start gap-3">
          <h1 className="font-bold text-[24px] lg:text-[32px] leading-[28px] lg:leading-[38.73px]">
            {blog?.title}
          </h1>
          <p className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
            {dateFormatter(blog?.createdAt as string)}
          </p>
          <div
            className="w-full max-w-[var(--max-width)] flex flex-col gap-8 "
            dangerouslySetInnerHTML={{
              __html: blog?.content as string,
            }}
          ></div>
        </div>
      </section>

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-center justify-center gap-[60px] my-4 lg:my-20">
        <h2 className="lg:w-1/2 w-2/3 font-bold text-[20px] sm:text-[24px] md:text-[32px] leading-[24.2px] sm:leading-[28px] md:leading-[38.73px] text-center mx-auto">
          {t("Blogs.title")}
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid gap-[42px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
          {blogs.map((blog) => (
            <Blog key={blog._id} {...blog} />
          ))}
        </div>
      </section>

      <Form />

      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const URL = process.env.NEXT_PUBLIC_URL;

  const responseBlogs = await fetch(`${URL}/blog?short=1&locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const {
    data: blogs,
  }: {
    data: BlogType[];
  } = await responseBlogs.json();
  return {
    props: {
      locale,
      ...(await serverSideTranslations(locale, ["common"])),
      blogs,
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
