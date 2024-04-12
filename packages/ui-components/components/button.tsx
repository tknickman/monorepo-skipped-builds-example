"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  message: string;
  className?: string;
}

export const Button = ({ children, className, message }: ButtonProps) => {
  return (
    <button className={className} onClick={() => alert(message)}>
      {children}
    </button>
  );
};
