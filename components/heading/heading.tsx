import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<Props> = ({ className, children }) => {
  return <h2 className={cn('font-medium text-xl md:text-3xl text-center', className)}>{children}</h2>;
};
