import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import Banner from "@/components/common/Banner";
import Additional from "@/components/common/Additional";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
          variant="yellow"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
        <Additional
          key={2}
          variant="blue"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
        <Additional
          key={3}
          variant="lime"
          title={t("Welcome.additionalTitle")}
          description={t("Welcome.additionalDescription")}
        />
      </div>
      <Footer />
      <div className="w-full max-w-[var(--max-width)] flex justify-between font-medium text-[15px] leading-[18.15px] text-[#858585] py-8">
        <p>© Company All Rights Reserved by Romi Agency</p>
        <p>Terms & Conditions Legal Notice</p>
      </div>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
