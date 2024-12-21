import { socials } from "@/data/socials";
import React from "react";

export const SocialsList: React.FC = () => {
  return (
    <>
      {socials.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="group rounded-full border p-2 transition-all hover:border-primary hover:bg-primary/5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon className="h-4 w-4 transition-colors group-hover:text-primary" />
        </a>
      ))}
    </>
  );
};
