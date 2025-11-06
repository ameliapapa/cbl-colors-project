"use client";

import {
  Badge,
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Blog18() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="md:mb-18 mb-12 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h1 className="lg:text-10xl mb-5 text-6xl font-bold md:mb-6 md:text-9xl">
              Understanding Color Grading
            </h1>
            <p className="md:text-md">
              Discover the art and science of color grading.
            </p>
          </div>
        </div>
        <Tabs
          defaultValue="view-all"
          className="grid grid-cols-1 gap-x-12 gap-y-12 text-left md:grid-cols-[0.25fr_1fr] md:gap-x-12 lg:grid-cols-[15rem_1fr] lg:gap-x-16"
        >
          <TabsList className="mb-12 flex w-full flex-col md:mb-16">
            <div className="md:text-md mb-6 text-base font-bold">
              Article Categories
            </div>
            <TabsTrigger
              value="view-all"
              className="data-[state=active]:border-border-primary data-[state=active]:text-neutral-black flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              View all
            </TabsTrigger>
            <TabsTrigger
              value="category-one"
              className="data-[state=active]:border-border-primary data-[state=active]:text-neutral-black flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Color Theory
            </TabsTrigger>
            <TabsTrigger
              value="category-two"
              className="data-[state=active]:border-border-primary data-[state=active]:text-neutral-black flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Techniques Explained
            </TabsTrigger>
            <TabsTrigger
              value="category-three"
              className="data-[state=active]:border-border-primary data-[state=active]:text-neutral-black flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Project Highlights
            </TabsTrigger>
            <TabsTrigger
              value="category-four"
              className="data-[state=active]:border-border-primary data-[state=active]:text-neutral-black flex w-full justify-start px-4 py-3 data-[state=active]:border data-[state=inactive]:border-transparent data-[state=active]:bg-transparent"
            >
              Industry Insights
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="view-all"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              The Importance of Color in Film
            </a>
            <p>Learn how color influences storytelling in visual media.</p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Technique</Badge>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Mastering Color Grading Techniques
                </a>
                <p>
                  Explore advanced techniques for achieving stunning visuals in
                  your projects.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Review</Badge>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Color Grading: A Comprehensive Review
                </a>
                <p>
                  A deep dive into the latest color grading software and tools.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Guide</Badge>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  A Beginner's Guide to Color Grading
                </a>
                <p>Start your journey into the world of color grading today.</p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tip</Badge>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Top 5 Color Grading Tips
                </a>
                <p>
                  Enhance your projects with these essential color grading tips.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-one"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              The Importance of Color in Film
            </a>
            <p>Learn how color influences storytelling in visual media.</p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Technique</Badge>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Mastering Color Grading Techniques
                </a>
                <p>
                  Explore advanced techniques for achieving stunning visuals in
                  your projects.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Review</Badge>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Color Grading: A Comprehensive Review
                </a>
                <p>
                  A deep dive into the latest color grading software and tools.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Guide</Badge>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  A Beginner's Guide to Color Grading
                </a>
                <p>Start your journey into the world of color grading today.</p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tip</Badge>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Top 5 Color Grading Tips
                </a>
                <p>
                  Enhance your projects with these essential color grading tips.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-two"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              The Importance of Color in Film
            </a>
            <p>Learn how color influences storytelling in visual media.</p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Technique</Badge>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Mastering Color Grading Techniques
                </a>
                <p>
                  Explore advanced techniques for achieving stunning visuals in
                  your projects.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Review</Badge>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Color Grading: A Comprehensive Review
                </a>
                <p>
                  A deep dive into the latest color grading software and tools.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Guide</Badge>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  A Beginner's Guide to Color Grading
                </a>
                <p>Start your journey into the world of color grading today.</p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tip</Badge>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Top 5 Color Grading Tips
                </a>
                <p>
                  Enhance your projects with these essential color grading tips.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-three"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              The Importance of Color in Film
            </a>
            <p>Learn how color influences storytelling in visual media.</p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Technique</Badge>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Mastering Color Grading Techniques
                </a>
                <p>
                  Explore advanced techniques for achieving stunning visuals in
                  your projects.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Review</Badge>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Color Grading: A Comprehensive Review
                </a>
                <p>
                  A deep dive into the latest color grading software and tools.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Guide</Badge>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  A Beginner's Guide to Color Grading
                </a>
                <p>Start your journey into the world of color grading today.</p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tip</Badge>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Top 5 Color Grading Tips
                </a>
                <p>
                  Enhance your projects with these essential color grading tips.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="category-four"
            className="data-[state=active]:animate-tabs"
          >
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="rounded-image aspect-video size-full object-cover"
                />
              </div>
            </a>
            <div className="rb-4 mb-4 flex w-full items-center justify-start">
              <Badge className="mr-4">Insight</Badge>
              <p className="inline text-sm font-semibold">5 min read</p>
            </div>
            <a
              href="#"
              className="mb-4 block max-w-full text-2xl font-bold md:text-3xl lg:text-4xl"
            >
              The Importance of Color in Film
            </a>
            <p>Learn how color influences storytelling in visual media.</p>
            <Button
              variant="link"
              size="link"
              className="mt-6 flex items-center justify-center gap-x-2"
              iconRight={<RxChevronRight />}
            >
              Read more
            </Button>
            <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-2">
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Technique</Badge>
                  <p className="inline text-sm font-semibold">6 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Mastering Color Grading Techniques
                </a>
                <p>
                  Explore advanced techniques for achieving stunning visuals in
                  your projects.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Review</Badge>
                  <p className="inline text-sm font-semibold">7 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Color Grading: A Comprehensive Review
                </a>
                <p>
                  A deep dive into the latest color grading software and tools.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Guide</Badge>
                  <p className="inline text-sm font-semibold">4 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  A Beginner's Guide to Color Grading
                </a>
                <p>Start your journey into the world of color grading today.</p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
              <div>
                <a href="#" className="mb-6 inline-block w-full max-w-full">
                  <div className="w-full overflow-hidden">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                      alt="Relume placeholder image"
                      className="rounded-image aspect-video size-full object-cover"
                    />
                  </div>
                </a>
                <div className="rb-4 mb-4 flex w-full items-center justify-start">
                  <Badge className="mr-4">Tip</Badge>
                  <p className="inline text-sm font-semibold">3 min read</p>
                </div>
                <a
                  href="#"
                  className="mb-2 block max-w-full text-xl font-bold md:text-2xl"
                >
                  Top 5 Color Grading Tips
                </a>
                <p>
                  Enhance your projects with these essential color grading tips.
                </p>
                <Button
                  variant="link"
                  size="link"
                  className="mt-6 flex items-center justify-center gap-x-2"
                >
                  Read more <RxChevronRight />
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
