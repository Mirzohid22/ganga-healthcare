import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AppWithTranslation, appWithTranslation } from "next-i18next";

function App({ Component, pageProps }: AppWithTranslation & AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App);