import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menu } from "@/data/menu";
import { Download, Menu } from "lucide-react";
import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { SocialsList } from "../socials-list/socials-list";

export function MobileMenu() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="ml-4 lg:hidden">
        <Menu className="stroke-primary" size={30} />
      </SheetTrigger>
      <SheetContent className="w-screen h-screen">
        <SheetHeader className="mb-6">
          <nav className="flex flex-col gap-6">
            <div className="space-y-4 flex flex-col gap-2 items-start">
              {menu.map(({ title, href }) => (
                <LinkScroll
                  onClick={() => setIsOpen(false)}
                  spy
                  smooth
                  offset={-100}
                  key={title}
                  to={href}
                  className="text-lg font-medium hover:text-primary transition-colors cursor-pointer"
                >
                  {title}
                </LinkScroll>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center">
                <SocialsList />
              </div>

              <Button className="w-full">
                Download App <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
