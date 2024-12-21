import { CTA } from "@/sections/cta";
import { Faq } from "@/sections/faq";
import { Features } from "@/sections/features";
import { Hero } from "@/sections/hero";
import { HowItWorks } from "@/sections/how-it-works";
import { Video } from "@/sections/video";

export default function Home() {
  return (
    <>
      <Hero />
      <Video />
      <HowItWorks />
      <Features />
      <Faq />
      <CTA />
    </>
  );
}
