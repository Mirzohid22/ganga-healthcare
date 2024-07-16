import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import Additional from "@/components/common/Additional";
import MediaBanner from "@/components/common/MediaBanner";
import MediaAdditional from "@/components/common/MediaAdditional";
import Carousel from "@/components/Carousel";
import Blog from "@/components/common/Blog";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

import { type Member, type Blog as BlogType } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  members,
  blogs,
}: {
  members: Member[];
  blogs: BlogType[];
}) {
  const { t } = useTranslation("common");
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className}`}
    >
      <Navigation />

      <Banner
        variant="green"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <div className="w-full max-w-[var(--max-width)] flex items-center justify-between py-7 gap-7">
        <Additional
          key={1}
          justify="end"
          variant="yellow"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
        <Additional
          key={2}
          justify="end"
          variant="blue"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
        <Additional
          key={3}
          justify="end"    
          variant="lime"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
      </div>
      <div className="w-full max-w-[var(--max-width)] flex flex-col items-start justify-between gap-9">
        <MediaBanner
          title={t("Media.title")}
          description={t("Media.description")}
        />
        <div className="w-full flex items-center justify-between">
          <MediaAdditional
            variant="green"
            title={t("Media.additionalGreenTitle")}
            description={t("Media.additionalGreenDescription")}
          />
          <MediaAdditional
            variant="blue"
            title={t("Media.additionalBlueTitle")}
            description={t("Media.additionalBlueDescription")}
          />
        </div>
      </div>

      <h2 className="font-bold text-[32px] leading-[38.73px] mx-auto max-w-[548px] text-center mt-20 mb-6">
        The Skilled Professionals Making A Difference At Mavis Clinic
      </h2>

      <section className="max-w-[var(--max-width)] text-center">
        <Carousel members={members} />
      </section>

      {/* blogs */}

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-center justify-center gap-[60px] my-44">
        <h2 className="w-1/2 font-bold text-[32px] leading-[38.73px] text-center">
          {t("Blogs.title")}
        </h2>
        <div className="w-full max-w-[var(--max-width)] flex items-center justify-between">
          {blogs.map((blog) => (
            <Blog key={blog.id} {...blog} />
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

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const URL = process.env.NEXT_PUBLIC_URL;
  const responseMembers = await fetch(`${URL}/member`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBlogs = await fetch(`${URL}/blog?short=1`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { members }: { members: Member[] } = await responseMembers.json();

  const { data: blogs }: { data: BlogType[] } = await responseBlogs.json();
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      members,
      blogs,
      // Will be passed to the page component as props
    },
  };
};
