import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`w-screen h-screen flex items-center justify-center ${inter.className}`}>index page</div>
  );
}
