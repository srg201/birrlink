"use client";
import { Container } from "@/components/container/container";
import { Heading } from "@/components/heading/heading";
import { videoLink } from "@/data/video";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import React from "react";

const ReactPlayer = dynamic(() => import("react-player/youtube"), { ssr: false });

export const Video: React.FC = () => {
  return (
    <section className={cn("pb-14")}>
      <Container className="justify-center gap-7 flex-col">
        <Heading>Explainer Video</Heading>
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <ReactPlayer
            url={videoLink}
            controls
            width="100%"
            height="100%"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
      </Container>
    </section>
  );
};
