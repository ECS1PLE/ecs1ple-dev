"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemInterface {
  href?: string;
  text?: string;
}

const NavItem: React.FC<NavItemInterface> = ({ href = "/", text }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        font-medium text-[18px] transition duration-300 ease-in-out
        ${
          isActive
            ? "text-[#8783D1] underline underline-offset-8 decoration-[#8783D1]"
            : "text-white hover:text-[#8783D1]"
        }
      `}
    >
      {text}
    </Link>
  );
};

export default NavItem;
