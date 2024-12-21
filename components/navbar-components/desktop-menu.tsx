
import { Button } from "@/components/ui/button";
import { menu } from "@/data/menu";
import { Download } from "lucide-react";
import { Link as LinkScroll } from "react-scroll";
import { SocialsList } from "../socials-list/socials-list";

export function DesktopNav() {
  return (
    <div className="hidden lg:flex items-center flex-1">
      <nav className="ml-10">
        <ul className="flex gap-6 items-center">
          {menu.map(({ title, href }) => (
            <li key={title}>
              <LinkScroll
                spy
                smooth
                offset={-100}
                className="hover:text-primary transition-colors font-medium cursor-pointer"
                to={href}
              >
                {title}
              </LinkScroll>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4 ml-auto">
        <SocialsList />
        <Button>
          Download App <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
