import { useRef } from "react";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import MiniBanner from "@/components/common/MiniBanner";
import Additional from "@/components/common/Additional";
import MiniAdditional from "@/components/common/MiniAdditional";
import Product from "@/components/common/Product";
import MediaBanner from "@/components/common/MediaBanner";
import MiniMediaBanner from "@/components/common/MiniMediaBanner";
import MediaAdditional from "@/components/common/MediaAdditional";
import TransitionLink from "@/components/common/TransitionLink";
import Carousel from "@/components/Carousel";
import Members from "@/components/Members";
import Blog from "@/components/common/Blog";
import Footer from "@/components/Footer";
import Form from "@/components/Form";

import blueBanner from "../../public/banner-index.png";
import miniBanner from "../../public/mini-banner.png";
import travrelax from "../../public/travrelax.png";
import vragdiaria from "../../public/vragdiaria.png";
import bolnolDiet from "../../public/bolnol-diet.png";
import mediaOrangeAdditional from "../../public/media-orange-additional.png";
import mediaBlueAdditional from "../../public/media-blue-additional.png";
import {
  type Member,
  type Blog as BlogType,
  type Product as ProductType,
} from "@/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home({
  members,
  blogs,
  products,
}: {
  members: Member[];
  blogs: BlogType[];
  products: ProductType[];
}) {
  const { t } = useTranslation("common");
  const scroller = useRef(null);
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className}`}
    >
      <Navigation />

      <Banner
        image={blueBanner}
        color="white"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />

      <MiniBanner
        image={miniBanner}
        color="white"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <div className="w-full max-w-[var(--max-width)] hidden md:flex items-center justify-between py-7 gap-7">
        <Additional
          image={travrelax}
          key={1}
          justify="end"
          variant="yellow"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="156px"
          height="197px"
        />
        <Additional
          image={vragdiaria}
          key={2}
          justify="end"
          variant="blue"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="148px"
          height="199px"
        />
        <Additional
          image={bolnolDiet}
          key={3}
          justify="end"
          variant="lime"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="129px"
          height="228px"
        />
      </div>
      <div className="w-full max-w-[var(--max-width)] flex flex-col md:hidden items-center justify-between py-7 gap-7">
        <MiniAdditional
          image={travrelax}
          key={1}
          justify="end"
          variant="yellow"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="118px"
          height="149px"
        />
        <MiniAdditional
          image={vragdiaria}
          key={2}
          justify="end"
          variant="blue"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="110px"
          height="110px"
        />
        <MiniAdditional
          image={bolnolDiet}
          key={3}
          justify="end"
          variant="lime"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
          width="88px"
          height="156px"
        />
      </div>

      <section className="mx-auto w-[350px] md:w-full max-w-[var(--max-width)] flex flex-col items-start justify-center gap-[60px] my-8 md:my-44">
        <h2 className="font-bold text-[20px] mx-auto md:mx-0 md:text-[32px] leading-[24.2px] md:leading-[38.73px]">
          Популярные препараты
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid grid-cols-2 gap-1 gap-y-[90px] md:grid-cols-3 lg:grid-cols-4 mt-[60px]">
          {products.map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>

        <TransitionLink isButton href="/products" centered>
          <button
            className="w-[350px] md:w-[390px] h-[50px] rounded-[10px] bg-[#EBEBEB] font-medium text-[16px] leading-[19.36px] text-[#858585] my-10 mx-auto active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
          >
            Смотреть все популярные препараты
          </button>
        </TransitionLink>
        <h2 className="font-bold text-[20px] md:text-[32px] leading-[24.2px] md:leading-[38.73px] mx-auto md:mx-0">
          Сезонные препараты
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid grid-cols-2 gap-1 gap-y-[90px] md:grid-cols-3 lg:grid-cols-4 mt-[60px]">
          {products.slice(4).map((product) => (
            <Product key={product._id} {...product} />
          ))}
        </div>

        <TransitionLink isButton href="/products" centered>
          <button
            className="w-[350px] md:w-[390px] h-[50px] rounded-[10px] bg-[#EBEBEB] font-medium text-[16px] mx-auto leading-[19.36px] text-[#858585] active:opacity-95 active:scale-95
          transition duration-400 ease-in-out"
          >
            Смотреть все сезонные препараты
          </button>
        </TransitionLink>
      </section>

      <div className="w-full max-w-[var(--max-width)] flex flex-col items-start justify-between gap-9">
        <MediaBanner
          title={t("Media.title")}
          description={t("Media.description")}
        />
        <MiniMediaBanner
          title={t("Media.title")}
          description={t("Media.description")}
        />  
        <div className="w-full flex flex-col md:flex-row gap-4 items-center justify-between">
          <MediaAdditional
            image={mediaOrangeAdditional}
            title={t("Media.additionalGreenTitle")}
            description={t("Media.additionalGreenDescription")}
          />
          <MediaAdditional
            image={mediaBlueAdditional}
            title={t("Media.additionalBlueTitle")}
            description={t("Media.additionalBlueDescription")}
          />
        </div>
      </div>

      <h2 className="font-bold w-2/3 text-[20px] md:text-[32px] leading-[24.2px] md:leading-[38.73px] mx-auto max-w-[548px] text-center mt-20 mb-6">
        The Skilled Professionals Making A Difference At Mavis Clinic
      </h2>

      <div className="hidden md:block">
        <section
          ref={scroller}
          className="max-w-[var(--max-width)] text-center xs:hidden md:block"
        >
          <Carousel scroller={scroller} members={members} />
        </section>
      </div>

      <div className="block md:hidden">
        <section className="max-w-[var(--max-width)] text-center block md:hidden">
          <Members members={members} />
        </section>
      </div>
      {/* blogs */}

      <section className="w-full max-w-[var(--max-width)] flex flex-col items-center justify-center gap-[60px] my-4 md:my-44">
        <h2 className="md:w-1/2 w-2/3 font-bold text-[20px] md:text-[32px] leading-[24.2px] md:leading-[38.73px] text-center mx-auto">
          {t("Blogs.title")}
        </h2>
        <div className="w-full max-w-[var(--max-width)] grid gap-[42px] xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto">
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

export const getStaticProps = async ({ locale }: { locale: string }) => {
  const URL = process.env.NEXT_PUBLIC_URL;

  const responseMembers = await fetch(`${URL}/member?locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseBlogs = await fetch(`${URL}/blog?short=1&locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseProducts = await fetch(`${URL}/product?locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { members }: { members: Member[] } = await responseMembers.json();

  const { data: blogs }: { data: BlogType[] } = await responseBlogs.json();

  const { data: products }: { data: ProductType[] } =
    await responseProducts.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      members,
      blogs,
      products,
      // Will be passed to the page component as props
    },
  };
};
