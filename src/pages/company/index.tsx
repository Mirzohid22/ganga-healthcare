import Image from "next/image";
import { useRef } from "react";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import Carousel from "@/components/Carousel";
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

      <section className="w-full max-w-[var(--max-width)] flex items-start justify-between my-10">
        <Image
          src={mediaFuttor}
          alt="media futtor"
          layout="responsive"
          width={539}
          height={632}
          className="rounded-[10px] max-w-[539px] max-h-[632px] object-cover"
        />
        <article className="w-[620px] flex flex-col items-start justify-start gap-6 text-justify">
          <h2 className="font-bold text-[32px] leading-[38.73px]">
            {t("Company.articleTitle")}
          </h2>
          <p className="font-normal text-[16px] leading-[19.36px]">
            {t("Company.articleBodyOne")}
          </p>
          <div className="w-full h-[130px] flex items-center justify-evenly  bg-[#F7F7F7] rounded-[10px]">
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[40px] leading-[48.41px]">
                {t("Company.statisticsOneNumber")}
              </h1>
              <p className="font-normal text-[16px] leading-[19.36px]">
                {t("Company.statisticsOneTitle")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[40px] leading-[48.41px]">
                {t("Company.statisticsTwoNumber")}
              </h1>
              <p className="font-normal text-[16px] leading-[19.36px]">
                {t("Company.statisticsTwoTitle")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-bold text-[40px] leading-[48.41px]">
                {t("Company.statisticsThreeNumber")}
              </h1>
              <p className="font-normal text-[16px] leading-[19.36px]">
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
        width="1196"
        height="420"
        src="https://www.youtube-nocookie.com/embed/qgLkfqPYwkI?si=zBoxMm5CjfUz_Bvo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full rounded-[10px] max-w-[var(--max-width)]"
      ></iframe>

      <h2 className="font-bold text-[32px] leading-[38.73px] mx-auto max-w-[548px] text-center mt-20 mb-6">
        The Skilled Professionals Making A Difference At Mavis Clinic
      </h2>

      <section ref={scroller} className="max-w-[var(--max-width)] text-center">
        <Carousel scroller={scroller} members={members} />
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
  const responseMembers = await fetch(`${URL}/member`, {
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
  };
}
