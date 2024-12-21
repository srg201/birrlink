'use client';
import { Container } from "@/components/container/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("sm:pt-28 pt-14 pb-14", className)}>
      <Element name="home">
        <Container className="relative">
          <div className="flex flex-col gap-6 max-w-xl z-2 relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              Send Money to Ethiopia from the
              <span className="text-primary"> Comfort of Your Home</span>
            </h1>
            <p className="text-sm sm:text-base text-gray-400 max-w-[600px] font-regular">
              BirrLink makes it easy for Ethiopians in Canada to send money home
              securely and conveniently, without ever leaving your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size={"lg"}>
                <Link
                  href={process.env.NEXT_PUBLIC_APP_URL || ""}
                  target="'_blank"
                >
                  Launch web app
                </Link>
              </Button>
            </div>
          </div>
          <div className="absolute top-0 right-0 object-contain hidden lg:block">
            <Image
              src={"/hero-bg.png"}
              alt="Background"
              width={500}
              height={250}
            />
          </div>
        </Container>
      </Element>
    </section>
  );
};
