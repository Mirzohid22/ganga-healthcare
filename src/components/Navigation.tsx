// import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import NavLink from "./common/NavLink";
import NavButton from "./common/NavButton";
import ganga from "../../public/favicon.png";
// import menu from "../../public/menu.svg";

const Navigation = () => {
  const { t } = useTranslation("common");
  // const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="w-[85%] flex items-center justify-center">
      <nav className="flex items-center justify-between max-w-[1196px] w-full min-h-[100px]">
        <a href="./">
          <Image src={ganga} alt="Site Logo" width={145} height={60} />
        </a>
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center justify-center gap-4 max-md:hidden">
            <NavLink href="/company" text={t("Navigation.company")} />
            <NavLink href="/products" text={t("Navigation.products")} />
            <NavLink href="/news" text={t("Navigation.news")} />
            <NavLink href="/contact" text={t("Navigation.contact")} />
          </div>
          <NavButton />
        </div>
      </nav>
      {/* <nav className="lg:hidden w-[90%] flex items-center justify-between z-50">
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
              <NavLink href="/company" text={t("Navigation.company")} />
              <NavLink href="/products" text={t("Navigation.products")} />
              <NavLink href="/news" text={t("Navigation.news")} />
              <NavLink href="/contact" text={t("Navigation.contact")} />
            </div>
          </div>
        )}
      </nav> */}
    </header>
  );
};

export default Navigation;
