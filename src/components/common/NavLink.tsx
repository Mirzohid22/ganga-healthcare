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
      className={`font-medium text-sm ${
        router.pathname === href && "font-bold"
      }`}
    >
      <Link href={href}>{text}</Link>
    </p>
  );
};

export default NavLink;
