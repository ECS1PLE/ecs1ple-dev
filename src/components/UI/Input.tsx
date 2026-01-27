"use client";

import { forwardRef } from "react";

interface Input {
  placeholder: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, Input>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        {...props}
        type="text"
        className={`w-[50%] rounded-[16px] border-[1px] border-[#000]
          p-[12px] focus:outline-none focus:ring-0 ${className}`}
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = "Input";

export default Input;
