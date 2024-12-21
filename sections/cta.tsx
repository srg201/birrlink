"use client";

import { Container } from "@/components/container/container";
import { SocialsList } from "@/components/socials-list/socials-list";
import { Button } from "@/components/ui/button";
import { appDownloads } from "@/data/app-downloads";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function CTA() {
  return (
    <section>
      <Container className="block pb-14">
        <div className="relative rounded-2xl bg-secondary/50 px-6 py-12 backdrop-blur-sm md:px-12 lg:px-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-medium tracking-tight sm:text-3xl">
              Ready to Start Sending Money to Ethiopia?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Join thousands of Ethiopians in Canada who trust BirrLink for
              their money transfers. Download our app now and experience
              seamless transfers!
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              {appDownloads.map(({ icon: Icon, href, platform }) => (
                <Link key={platform} href={href}>
                  <Icon className="w-28" />
                </Link>
              ))}
            </div>

            <div className="flex flex-col items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Or access our web app
              </span>
              <Button asChild>
                <Link
                  href={process.env.NEXT_PUBLIC_APP_URL || ""}
                  target="_blank"
                >
                  Launch Web App
                </Link>
              </Button>
            </div>

            <div className={cn("flex items-center gap-4 mt-4")}>
              <span className="text-sm text-muted-foreground">
                Follow us on:
              </span>
              <SocialsList />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
