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
            className="h-10 px-5 bg-[#EBEBEB] rounded-[10px] flex items-center justify-center active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
          >
            {"<- "}
            {blog?.title}
          </button>
        </TransitionLink>
      </div>

      <section className="w-full max-w-[var(--max-width)] flex flex-col gap-9 items-stretch justify-start">
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
          <h1 className="font-bold text-[32px] leading-[38.73px]">
            {blog?.title}
          </h1>
          <p className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
            {dateFormatter(blog?.createdAt as string)}
          </p>
          <div
            className="w-full max-w-[var(--max-width)] flex flex-col gap-8"
            dangerouslySetInnerHTML={{
              __html: blog?.content as string,
            }}
          ></div>
        </div>
      </section>

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-center justify-center gap-[60px] my-16">
        <div className="w-full max-w-[var(--max-width)] flex items-center justify-start gap-[42px]">
          {blogs.map((blog) => (
            <Blog key={blog._id} {...blog} />
          ))}
        </div>
      </section>

      <Form />

      <Footer />
      <div className="w-full max-w-[var(--max-width)] flex justify-between font-medium text-[15px] leading-[18.15px] text-[#858585] py-8">
        <p>© Company All Rights Reserved by Romi Agency</p>
        <p>Terms & Conditions Legal Notice</p>
      </div>
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
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
