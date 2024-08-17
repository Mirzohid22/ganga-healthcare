import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import TransitionLink from "./common/TransitionLink";
import NavButton from "./common/NavButton";
import ganga from "../../public/favicon.png";
import menu from "../../public/menu.svg";

const Navigation = () => {
  const { t } = useTranslation("common");
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-[85%] flex items-center justify-center select-none">
      <nav className="hidden lg:flex items-center justify-between max-w-[1196px] w-full min-h-[100px]">
        <TransitionLink href="./">
          <Image src={ganga} alt="Site Logo" width={145} height={60} />
        </TransitionLink>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-4 max-md:hidden">
            <TransitionLink href="/company">
              {t("Navigation.company")}
            </TransitionLink>
            <TransitionLink href="/products">
              {t("Navigation.products")}
            </TransitionLink>
            <TransitionLink href="/news">{t("Navigation.news")}</TransitionLink>
            <TransitionLink href="/contact">
              {t("Navigation.contact")}
            </TransitionLink>
          </div>
          <NavButton />
        </div>
      </nav>
      <nav className="lg:hidden w-[90%] flex items-center justify-between my-10 z-50">
        <TransitionLink href="./">
          <Image src={ganga} alt="Site Logo" width={98} height={34} />
        </TransitionLink>
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            boxShadow: "10px 10px 50px 0px #0000001A",
          }}
          className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center transition-transform duration-300"
        >
          <Image src={menu} alt="Menu" width={30} height={30} />
        </button>
        <div
          className={`fixed top-0 left-0 h-screen w-screen bg-white flex flex-col items-start justify-start gap-32 p-10 transform transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between w-full">
            <NavButton />
            <button
              onClick={() => setShowMenu(!showMenu)}
              style={{
                boxShadow: "10px 10px 50px 0px #0000001A",
              }}
              className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center transition-transform duration-300"
            >
              <Image
                src={menu}
                alt="Menu"
                width={30}
                height={30}
                className="rotate-90"
              />
            </button>
          </div>
          <div className="flex flex-col items-center gap-4 w-full">
            <TransitionLink href="/company">
              <span className="text-xl">{t("Navigation.company")}</span>
            </TransitionLink>
            <TransitionLink href="/products">
              <span className="text-xl">{t("Navigation.products")}</span>
            </TransitionLink>
            <TransitionLink href="/news">
              <span className="text-xl">{t("Navigation.news")}</span>
            </TransitionLink>
            <TransitionLink href="/contact">
              <span className="text-xl">{t("Navigation.contact")}</span>
            </TransitionLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
