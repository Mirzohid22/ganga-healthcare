import Image from "next/image";
import { useRouter } from "next/router";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Blog from "@/components/common/Blog";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

import { type Blog as BlogType } from "@/types";
import { type GetStaticPaths } from "next";

import blogContent from "../../../public/blog-content.png";

const inter = Inter({ subsets: ["latin"] });

export default function Page({
  blogs,
  meta,
}: {
  blogs: BlogType[];
  meta: { total: number; page: number; limit: number };
}) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/news`);
  };
  const { t } = useTranslation("common");
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-5`}
    >
      <Navigation />

      <div className="w-full max-w-[var(--max-width)] flex items-center justify-start gap-2">
        <button
          onClick={handleClick}
          className="w-[105px] h-10 bg-[#EBEBEB80] rounded-[10px] font-medium text-sm leading-[16.94px] text-center text-[#858585] active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
        >
          Blogs
        </button>
        <button className="h-10 px-5 bg-[#EBEBEB] rounded-[10px] flex items-center justify-center active:opacity-95 active:scale-95
         transition duration-400 ease-in-out">
          {"<- "}
          10 Myths About Cosmetic Surgery: Debunked By Experts
        </button>
      </div>

      <section className="w-full max-w-[var(--max-width)] flex flex-col gap-9 items-stretch justify-start">
        <div className="w-full flex items-start justify-between gap-9">
          <Image
            src={blogContent}
            alt="Blog content"
            width={539}
            height={383}
            className="rounded-[10px]"
          />
          <div className="h-[383px] flex flex-col text-justify justify-between items-start">
            <h1 className="font-bold text-[32px] leading-[38.73px]">
              10 Myths About Cosmetic Surgery: Debunked by Experts
            </h1>
            <p className="font-normal text-[15px] leading-[18.15px] text-[#C0C0C0]">
              21 Apr, 2024
            </p>
            <p className="font-normal text-[16px] leading-[19.36px]">
              In the pursuit of well-being, fostering a robust immune system is
              paramount. Our blog, “Lifestyle Habits for a Robust Immune
              System,” serves as a comprehensive guide to cultivating habits
              that support optimal immune function.
            </p>
            <p className="font-normal text-[16px] leading-[19.36px]">
              Delve into the intricacies of immune health as we explore the
              profound impact of lifestyle choices on the body’s defense
              mechanisms. From nutrition and exercise to stress management and
              sleep hygiene, discover the multifaceted approach to fortifying
              your immune system.
            </p>
            <p className="font-normal text-[16px] leading-[19.36px]">
              Learn how dietary patterns rich in vitamins, minerals, and
              antioxidants can bolster immune function and ward off illness.
              Uncover the power of whole foods, herbal remedies, and
              immune-boosting supplements in promoting resilience against
              pathogens.
            </p>
          </div>
        </div>

        <p>
          Explore the symbiotic relationship between physical activity and
          immune health, uncovering the benefits of regular exercise in
          enhancing immune response and reducing the risk of chronic disease.
          From cardio workouts to strength training, find the exercise regimen
          that best suits your lifestyle and goals.
        </p>
        <p>
          Navigate the complexities of stress and its impact on immune function,
          gaining insights into mindfulness techniques, relaxation practices,
          and stress-reduction strategies. Discover how cultivating a resilient
          mindset can mitigate the harmful effects of chronic stress on the
          immune system.
        </p>
        <p>
          Delve into the restorative power of sleep, unraveling the critical
          role of quality rest in immune regulation and cellular repair. Explore
          evidence-based sleep hygiene practices and bedtime rituals that
          promote deep, restorative sleep and support overall well-being.
        </p>
      </section>

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-center justify-center gap-[60px] my-16">
        <div className="w-full max-w-[var(--max-width)] flex items-center justify-between">
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

  const responseBlogs = await fetch(`${URL}/blog?short=1`, {
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
