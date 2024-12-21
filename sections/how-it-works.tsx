"use client";
import { Container } from "@/components/container/container";
import { Heading } from "@/components/heading/heading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { howItworksSteps } from "@/data/how-it-works";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  className?: string;
}

export const HowItWorks: React.FC<Props> = ({ className }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <section className={cn("pb-14", className)}>
      <Element name="how-it-works">
        <Container className="justify-center flex-col gap-7">
          <Heading>How it works</Heading>

          <Tabs
            defaultValue={howItworksSteps[0].title}
            className="w-full flex flex-col items-center"
          >
            <TabsList>
              {howItworksSteps.map(({ step, title }) => (
                  <TabsTrigger key={step} value={title}>
                    {title}
                  </TabsTrigger>
              ))}
            </TabsList>

            {howItworksSteps.map(({ items, title }) => (
              <TabsContent
                key={title}
                value={title}
                className="flex flex-col gap-4 w-full"
              >
                <Carousel setApi={setApi} opts={{ loop: true }}>
                  <CarouselContent>
                    {items.map(({ src, alt }) => (
                      <CarouselItem key={alt} className="flex justify-center">
                        <img
                          src={src}
                          alt={alt}
                          className="max-w-full h-auto object-contain"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-0" />
                  <CarouselNext className="right-0" />
                  <p className="mx-auto text-center text-sm font-bold w-12 h-12 flex justify-center items-center rounded-full bg-primary text-white">{current} / {count}</p>
                </Carousel>
              </TabsContent>
            ))}
          </Tabs>
        </Container>
      </Element>
    </section>
  );
};
