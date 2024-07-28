import Image from "next/image";
import { Inter } from "next/font/google";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Navigation from "@/components/Navigation";
import AdditionalContact from "@/components/common/AdditionalContact";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const { t } = useTranslation("common");
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className} gap-7`}
    >
      <Navigation />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d750.0377541041092!2d69.21392456853991!3d41.24026825644535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae6104fd9deefb%3A0x28b5d57d6e445992!2sSoftware%20Systems!5e0!3m2!1sen!2s!4v1642659644805!5m2!1sen!2s"
        // src={translations.map.src}
        style={{ border: 0 }}
        className="max-w-[var(--max-width)] max-h-[530px] sm:min-w-[400px] max-sm:min-w-[300px] w-full aspect-[2/1] sm:rounded-[20px] max-sm:w-full outline-none ring-0 border-none focus:ring-0 focus:outline-none focus:border-none"
        allowFullScreen={true}
      ></iframe>
      <div className="w-full max-w-[var(--max-width)] flex items-center justify-between py-7 gap-7">
        <AdditionalContact
          key={1}
          justify="between"
          variant="yellow"
          title={t("Contact.addressTitle")}
          description={t("Contact.address")}
        />
        <AdditionalContact
          key={2}
          justify="between"
          variant="blue"
          title={t("Contact.phoneTitle")}
          description={t("Contact.phone")}
        />
        <AdditionalContact
          key={3}
          justify="between"
          variant="lime"
          title={t("Contact.emailTitle")}
          description={t("Contact.email")}
        />
      </div>
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
