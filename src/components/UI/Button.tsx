"use client";

import Link from "next/link";
import React from "react";

interface ButtonInterface {
  href?: string;
  backgroundColor?: string;
  children: React.ReactNode;
  borderRadius?: number;
  className?: string;
  onClick?: () => void;
  type?: "submit" | undefined;
}

const Button: React.FC<ButtonInterface> = ({
  href,
  backgroundColor,
  children,
  borderRadius = 0,
  className,
  onClick,
  type,
}) => {
  if (onClick) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`justify-center flex items-center text-[#1C1C22] rounded-[9999px] px-[14px] py-[6px]
          hover:cursor-pointer hover:text-white duration-300 ease-in-out ${className} `}
        style={{ backgroundColor, borderRadius }}
      >
        {children}
      </button>
    );
  }

  if (type) {
    return (
      <button
        type={type}
        className={`justify-center flex items-center text-[#1C1C22] rounded-[9999px] px-[14px] py-[6px]
          hover:cursor-pointer hover:text-white duration-300 ease-in-out ${className}`}
        style={{ backgroundColor, borderRadius }}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href || "/"}>
      <button
        type={type}
        className={`justify-center flex items-center text-[#1C1C22] rounded-[9999px] px-[14px] py-[6px]
          hover:cursor-pointer hover:text-white duration-300 ease-in-out ${className}`}
        style={{ backgroundColor, borderRadius }}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
