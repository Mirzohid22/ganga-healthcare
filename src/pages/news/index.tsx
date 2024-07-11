import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function News() {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className}`}
    >
      <Navigation />
      <div className="w-screen flex items-center justify-center">news page</div>
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