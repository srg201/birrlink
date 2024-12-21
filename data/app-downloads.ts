import Apple from "@/public/app-store.svg";
import GooglePlay from "@/public/google-play.svg";

export const appDownloads = [
  {
    platform: "App Store",
    icon: Apple,
    href: "https://apps.apple.com/birrlink",
    description: "Download on the"
  },
  {
    platform: "Google Play",
    icon: GooglePlay,
    href: "https://play.google.com/store/apps/birrlink",
    description: "Get it on"
  }
] as const;