"use client";
import Link, { type LinkProps } from "next/link";
import React from "react";
import { useRouter } from "next/router";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  color?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  color,
  ...rest
}) => {
  const router = useRouter();
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const body = document.querySelector("body");

    body?.classList.add("page-transition");
    if (color) {
      body?.classList.add(`${color}`);
    }

    await sleep(450);
    router.push(href);
    await sleep(450);

    body?.classList.remove("page-transition");
    if (color) {
      body?.classList.remove(`${color}`);
    }
  };

  return (
    <p
      className={`text-sm ${
        router.pathname === href ? "font-bold" : "font-medium"
      }`}
    >
      <Link {...rest} href={href} onClick={handleTransition}>
        {children}
      </Link>
    </p>
  );
};

export default TransitionLink;
