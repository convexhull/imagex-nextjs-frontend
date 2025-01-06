"use client";
// Libs
import Link from "next/link";
import { usePathname } from "next/navigation";
// Styles
import classes from "./NavLink.module.css";

type NavLinkProps = {
  to: string;
  name: string;
};

const NavLink = ({ to, name }: NavLinkProps) => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <Link
      href={to}
      className={
        classes["navbar-links"] +
        " " +
        (pathname.startsWith(to) ? classes["active-link"] : "")
      }
    >
      {name}
    </Link>
  );
};

export default NavLink;
