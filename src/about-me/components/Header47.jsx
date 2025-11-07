"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header47() {
  return (
    <section id="relume" className="bg-cbl-light px-page pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-28">
      <div className="container max-w-container mx-auto">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <h1 className="font-neue-display text-[60px] leading-[1.2] tracking-[-0.6px] text-cbl-black md:text-[80px] lg:text-[100px]">
              About Me
            </h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="font-neue-display text-[20px] leading-[1.5] text-cbl-black">
              With years of experience in film post-production, I transform
              stories through the art of color. My mission is to enhance visual
              narratives, making every frame resonate with emotion and depth.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Learn More">Learn More</Button>
              <Button title="Contact" variant="secondary">
                Contact
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
