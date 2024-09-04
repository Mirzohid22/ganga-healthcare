"use client";
import Link, { type LinkProps } from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

interface TransitionLinkProps extends LinkProps {
  isButton?: boolean;
  children: React.ReactNode;
  href: string;
  centered?: boolean;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  isButton = false,
  children,
  href,
  centered,
  ...rest
}) => {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsTransitioning(true);

    await sleep(450); // Pre-transition animation duration
    router.push(href);
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleRouteChangeComplete = async () => {
      await sleep(450); // Post-transition animation duration
      setIsTransitioning(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router, isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const body = document.querySelector("body");

    if (isTransitioning) {
      body?.classList.add("transition");
      body?.classList.add("transition-all");
      body?.classList.add("smooth");
      body?.classList.add("duration-700");
      body?.classList.add("pt-10");

      const overlay = document.createElement("div");
      overlay.setAttribute("id", "overlay");
      overlay.classList.add(
        "fixed",
        "top-0",
        "left-0",
        "w-full",
        "h-full",
        "bg-black",
        "opacity-50",
        "z-40"
      );
      body?.appendChild(overlay);

      const spinner = document.createElement("div");
      spinner.setAttribute("id", "spinner");

      spinner.classList.add(
        "fixed",
        "top-[50vh]",
        "left-[50vw]",
        "transform",
        "-translate-x-1/2",
        "-translate-y-1/2",
        "z-50"
      );
      spinner.innerHTML = `<div class="w-20 h-20 border-[10px] border-gray-300 border-t-black rounded-full animate-spin"></div>`;
      body?.appendChild(spinner);
    } else {
      const spinner = document.getElementById("spinner");
      spinner?.remove();
      const overlay = document.getElementById("overlay");
      overlay?.remove();
      body?.classList.remove("pt-10");
    }
  }, [isTransitioning, isMounted]);

  return (
    <>
      {isButton ? (
        <Link
          className={`${centered ? "mx-auto" : ""}`}
          {...rest}
          href={href}
          onClick={handleTransition}
        >
          {children}
        </Link>
      ) : (
        <p
          className={`text-sm ${centered && "mx-auto "} ${
            router.pathname === href ? "font-bold" : "font-medium"
          }`}
        >
          <Link {...rest} href={href} onClick={handleTransition}>
            {children}
          </Link>
        </p>
      )}
    </>
  );
};

export default TransitionLink;
