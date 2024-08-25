import Image from "next/image";
import { useRef } from "react";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import MiniBanner from "@/components/common/MiniBanner";
import Carousel from "@/components/Carousel";
import Members from "@/components/Members";
import Form from "@/components/Form";
import Footer from "@/components/Footer";
import { type Member } from "@/types";

import mediaFuttor from "../../../public/company-futtor.png";
import bannerCompany from "../../../public/banner-company.png";

const inter = Inter({ subsets: ["latin"] });

export default function Company({ members }: { members: Member[] }) {
  const { t } = useTranslation("common");
  const scroller = useRef(null);
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-4`}
    >
      <Navigation />
      <Banner
        image={bannerCompany}
        color="black"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />
      <MiniBanner
        image={bannerCompany}
        color="black"
        title={t("Welcome.title")}
        description={t("Welcome.description")}
      />

      <section className="w-full max-w-[var(--max-width)] flex lg:flex-row flex-col lg:items-start items-center justify-between gap-4 my-10">
        <div className="w-[350px] sm:w-[500px] md:w-1/2 lg:w-[539px]">
          <Image
            className="rounded-[10px] w-full  lg:max-h-[632px]"
            src={mediaFuttor}
            alt="media futtor"
            layout="responsive"
            width={539}
            height={632}
          />
        </div>
        <article className="lg:w-[620px] max-w-[620px] p-3 w-[350px] sm:w-[500px] md:w-1/2 flex flex-col items-start justify-start gap-6 text-justify ">
          <h2 className="font-bold text-[20px] sm:text-[24px] mx-auto md:mx-auto lg:mx-0 md:text-[32px] leading-[24.2px] sm:leading-[28px] md:leading-[38.73px] text-center md:text-justify">
            {t("Company.articleTitle")}
          </h2>
          <p className="font-normal text-[16px] leading-[19.36px]">
            {t("Company.articleBodyOne")}
          </p>
          <div className="w-full h-[130px] flex items-center justify-evenly  bg-[#F7F7F7] rounded-[10px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[20px] lg:text-[40px] leading-[24px] lg:leading-[48.41px]">
                {t("Company.statisticsOneNumber")}
              </h1>
              <p className="text-center font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[19.36px]">
                {t("Company.statisticsOneTitle")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[20px] lg:text-[40px] leading-[24px] lg:leading-[48.41px]">
                {t("Company.statisticsTwoNumber")}
              </h1>
              <p className="text-center font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[19.36px]">
                {t("Company.statisticsTwoTitle")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[20px] lg:text-[40px] leading-[24px] lg:leading-[48.41px]">
                {t("Company.statisticsThreeNumber")}
              </h1>
              <p className="text-center font-normal text-[14px] md:text-[16px] leading-[16px] md:leading-[19.36px]">
                {t("Company.statisticsThreeTitle")}
              </p>
            </div>
          </div>
          <p className="font-normal text-[16px] leading-[19.36px]">
            {t("Company.articleBodyTwo")}
          </p>
        </article>
      </section>

      <iframe
        // width="1196"
        height="420"
        src="https://www.youtube-nocookie.com/embed/qgLkfqPYwkI?si=zBoxMm5CjfUz_Bvo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="lg:w-full w-[350px] sm:w-[500px] md:w-9/10 rounded-[10px] max-w-[var(--max-width)]"
      ></iframe>

      <h2 className="w-9/10 md:w-1/2 font-bold text-[20px] text-center sm:text-[24px] mx-auto md:mx-auto lg:mx-0 md:text-[32px] leading-[24.2px] sm:leading-[28px] md:leading-[38.73px] my-10">
        The Skilled Professionals Making A Difference At Mavis Clinic
      </h2>

      <div className="hidden lg:block">
        <section
          ref={scroller}
          className="max-w-[var(--max-width)] text-center xs:hidden lg:block"
        >
          <Carousel scroller={scroller} members={members} />
        </section>
      </div>

      <div className="block lg:hidden">
        <section className="max-w-[var(--max-width)] text-center block lg:hidden">
          <Members members={members} />
        </section>
      </div>

      <Form />
      <Footer />
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const URL = process.env.NEXT_PUBLIC_URL;
  const responseMembers = await fetch(`${URL}/member?locale=${locale}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const { members }: { members: Member[] } = await responseMembers.json();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      members,
      // Will be passed to the page component as props
    },
    revalidate: 60,
  };
}
