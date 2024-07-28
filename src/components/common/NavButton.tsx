import { useRouter } from "next/router";

const NavButton = () => {
  const router = useRouter();
  const locale = router.locale;
  const changeLanguage = () => {
    router.push(router.pathname, router.asPath, {
      locale: locale === "en" ? "ru" : "en",
    });
  };
  return (
    <button
      onClick={changeLanguage}
      className="w-[80px] h-[40px] rounded-[10px] bg-[var(--nav-button)] text-normal text-white font-normal active:opacity-95 active:scale-95
         transition duration-400 ease-in-out"
    >
      {/* <span className={`${locale === "en" && "text-indigo-400"}`}>EN</span>/
      <span className={`${locale === "ru" && "text-indigo-400"}`}>RU</span> */}
      <span className={`${locale === "en" && "text-indigo-400"}`}>UZ</span>/
      <span className={`${locale === "ru" && "text-indigo-400"}`}>RU</span>
    </button>
  );
};
export default NavButton;
