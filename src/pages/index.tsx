import Image from "next/image";
import { Inter } from "next/font/google";

import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`min-h-screen flex flex-col items-center justify-start ${inter.className}`}
    >
      <Navigation />
      {/* <div className={`w-screen h-screen flex items-center justify-center ${inter.className}`}>index page</div> */}
    </main>
  );
}
