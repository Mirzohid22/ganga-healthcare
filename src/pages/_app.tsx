import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppWithTranslation, appWithTranslation } from "next-i18next";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }: AppWithTranslation & AppProps) {
  return (
    <>
      <Toaster position="top-right" />
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
