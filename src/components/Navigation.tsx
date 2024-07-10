import { useState } from "react";
import Image from "next/image";
// import { useTranslation } from "next-i18next";
import NavLink from "./common/NavLink";
import NavButton from "./common/NavButton";
import ganga from "../../public/favicon.png";
import menu from "../../public/menu.svg";
// import SocialMedias from "./common/SocialMedias";

const Navigation = () => {
  //   const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-[85%] flex items-center justify-center">
      <nav className="flex items-center justify-between px-8 max-w-[1196px] w-full min-h-[100px] rounded-[60px] max-lg:hidden">
        <a href="./">
          <Image
            className="ml-5"
            src={ganga}
            alt="Site Logo"
            width={145}
            height={60}
          />
        </a>
        <div className="flex items-center justify-center gap-4">
          {/* <NavLink href="/" text={t("Navigation.home")} />
          <NavLink href="/branding" text={t("Navigation.branding")} />
          <NavLink href="/smm" text={t("Navigation.smm")} />
          <NavLink href="/digital" text={t("Navigation.digitalMarketing")} />
          <NavLink href="/contact" text={t("Navigation.contacts")} /> */}
          <NavLink href="/company" text={"company"} />
          <NavLink href="/products" text={"products"} />
          <NavLink href="/news" text={"news"} />
          <NavLink href="/contact" text={"contacts"} />
          <NavButton />
        </div>
      </nav>
      <nav className="lg:hidden w-[90%] flex items-center justify-between z-50">
        <Image src={ganga} alt="Site Logo" width={98} height={34} />
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            boxShadow: "10px 10px 50px 0px #0000001A",
          }}
          className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center"
        >
          <Image src={menu} alt="Menu" width={30} height={30} />
        </button>
        {showMenu && (
          <div className="fixed top-0 left-0 h-screen w-screen bg-white flex flex-col items-start justify-between p-10">
            <div className="flex items-center justify-between w-full">
              <NavButton />
              <button
                onClick={() => setShowMenu(!showMenu)}
                style={{
                  boxShadow: "10px 10px 50px 0px #0000001A",
                }}
                className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center"
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
            <div className="flex flex-col items-start gap-4">
              <NavLink href="/company" text={"company"} />
              <NavLink href="/products" text={"products"} />
              <NavLink href="/news" text={"news"} />
              <NavLink href="/contact" text={"Navigation.contacts"} />
            </div>
            {/* <SocialMedias variant="dark" /> */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
