'use client';
import { Container } from "@/components/container/container";
import { Heading } from "@/components/heading/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const Faq: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("pb-14", className)}>
      <Element name="faq">
      <Container className="justify-center flex-col gap-7">
        <Heading className="uppercase">Faq</Heading>
        <Accordion type="single" collapsible>
          {faqItems.map(({content, id, title}) => (
            <AccordionItem key={id} value={id.toString()}>
              <AccordionTrigger className="font-medium text-primary text-sm md:text-xl hover:no-underline">{title}</AccordionTrigger>
              <AccordionContent className="text-sm md:text-lg">
                {content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
      </Element>
    </section>
  );
};
