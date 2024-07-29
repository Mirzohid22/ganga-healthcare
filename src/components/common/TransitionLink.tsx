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

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsTransitioning(true);

    await sleep(450); // Pre-transition animation duration
    router.push(href);
  };

  useEffect(() => {
    const handleRouteChangeComplete = async () => {
      await sleep(450); // Post-transition animation duration
      setIsTransitioning(false);
    };

    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router]);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isTransitioning) {
      body?.classList.add("page-transition");
    } else {
      body?.classList.remove("page-transition");
    }
  }, [isTransitioning]);

  return (
    <>
      {/* {isTransitioning && <Spinner />} */}
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
          className={`text-sm ${
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
