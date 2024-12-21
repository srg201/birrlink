'use client';
import { Container } from "@/components/container/container";
import { Heading } from "@/components/heading/heading";
import { features } from "@/data/features";
import { cn } from "@/lib/utils";
import React from "react";
import { Element } from "react-scroll";

interface Props {
  className?: string;
}

export const Features: React.FC<Props> = ({ className }) => {
  return (
    <section className={cn("pb-14", className)}>
      <Element name="features">
        <Container className="justify-center flex-col gap-7">
          <Heading>Features</Heading>
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7">
            {features.map(({ description, icon: Icon, title }) => (
              <li
                key={title}
                className="flex flex-col items-center gap-4 px-4 py-8 rounded-lg bg-secondary/50 border border-primary/50 shadow-ring"
              >
                <Icon className="stroke-primary" size={40} />
                <h4 className="font-medium text-xl text-primary">{title}</h4>
                <p className="text-center text-gray-500">{description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Element>
    </section>
  );
};
