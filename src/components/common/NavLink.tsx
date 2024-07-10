import Link from "next/link";
import { useRouter } from "next/router";

type NavLinkProps = {
  href: string;
  text: string;
};

const NavLink = ({ href, text }: NavLinkProps) => {
  const router = useRouter();

  return (
    <p
      className={`text-sm ${
        router.pathname === href ? "font-bold" : "font-medium"
      }`}
    >
      <Link href={href}>{text}</Link>
    </p>
  );
};

export default NavLink;
