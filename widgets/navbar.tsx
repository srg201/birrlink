'use client';
import { Container } from "@/components/container/container";
import { DesktopNav } from "@/components/navbar-components/desktop-menu";
import { MobileMenu } from "@/components/navbar-components/mobile-menu";
import Image from "next/image";
import React from "react";
import { Link as LinkScroll } from "react-scroll";


export const Navbar: React.FC = () => {
  return (
    <header className="py-2 sm:py-4 fixed bg-white/40 backdrop-blur left-0 top-0 w-full z-50">
      <Container className="items-center justify-between">
        <LinkScroll offset={-100} spy smooth to={"home"}>
          <Image src={"/logo.png"} alt="logo" width={115} height={32} className="w-20 sm:w-28 cursor-pointer" />
        </LinkScroll>

        <DesktopNav />
        <MobileMenu />
      </Container>
    </header>
  );
};
