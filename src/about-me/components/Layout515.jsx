"use client";

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { Fragment, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const getStyles = (index) => {
    const startProgress = index / data.length;
    const endProgress = (index + 1) / data.length;
    const opacity = useTransform(
      scrollYProgress,
      [
        Math.max(0, startProgress - 0.07),
        startProgress,
        endProgress - 0.07,
        Math.min(1, endProgress),
      ],
      [0, 1, 1, 0],
    );
    return { opacity };
  };
  return { containerRef, getStyles };
};

const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  return { isMobile };
};

const useTablet = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");
  return { isTablet };
};

export function Layout515() {
  const renderTablet = useTablet();
  const renderMobile = useMobile();
  const useScroll = useRelume({
    data: [
      {
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg",
          alt: "Relume placeholder image 1",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
          alt: "Relume placeholder image 1",
        },
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        tagline: "Tagline",
        heading: "Short heading here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg",
          alt: "Relume placeholder image 2",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
          alt: "Relume placeholder image 2",
        },
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        tagline: "Tagline",
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg",
          alt: "Relume placeholder image 3",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
          alt: "Relume placeholder image 3",
        },
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
      {
        tagline: "Tagline",
        heading: "Short heading here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
        image: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg",
          alt: "Relume placeholder image 4",
        },
        imageMobile: {
          src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
          alt: "Relume placeholder image 4",
        },
        buttons: [
          { title: "Button", variant: "secondary" },
          {
            title: "Button",
            variant: "link",
            size: "link",
            iconRight: <RxChevronRight />,
          },
        ],
      },
    ],
  });
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:px-0 md:py-0"
      ref={useScroll.containerRef}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden md:block">
          <div className="md:h-screen">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1-portrait.svg"
              alt="Relume placeholder image 1"
              className="size-full object-cover"
            />
          </div>
          <div className="md:h-screen">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2-portrait.svg"
              alt="Relume placeholder image 2"
              className="size-full object-cover"
            />
          </div>
          <div className="md:h-screen">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3-portrait.svg"
              alt="Relume placeholder image 3"
              className="size-full object-cover"
            />
          </div>
          <div className="md:h-screen">
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4-portrait.svg"
              alt="Relume placeholder image 4"
              className="size-full object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-12 md:sticky md:top-0 md:gap-y-0">
            <Fragment>
              <ConditionalRender condition={renderMobile.isMobile}>
                <div>
                  <div className="max-w-md">
                    <p className="mb-3 font-semibold">Tagline</p>
                    <h2 className="mb-5 text-5xl font-bold">
                      Medium length section heading goes here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                      alt="Relume placeholder image 1"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </ConditionalRender>
              <ConditionalRender condition={renderTablet.isTablet}>
                <motion.div
                  style={{ opacity: useScroll.getStyles(0).opacity }}
                  className="md:absolute md:flex md:h-screen md:flex-col md:justify-center"
                >
                  <div className="max-w-md md:mr-[5vw] md:ml-20">
                    <p className="font-semibold md:mb-4">Tagline</p>
                    <h2 className="text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ConditionalRender>
            </Fragment>
            <Fragment>
              <ConditionalRender condition={renderMobile.isMobile}>
                <div>
                  <div className="max-w-md">
                    <p className="mb-3 font-semibold">Tagline</p>
                    <h2 className="mb-5 text-5xl font-bold">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                      alt="Relume placeholder image 2"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </ConditionalRender>
              <ConditionalRender condition={renderTablet.isTablet}>
                <motion.div
                  style={{ opacity: useScroll.getStyles(1).opacity }}
                  className="md:absolute md:flex md:h-screen md:flex-col md:justify-center"
                >
                  <div className="max-w-md md:mr-[5vw] md:ml-20">
                    <p className="font-semibold md:mb-4">Tagline</p>
                    <h2 className="text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ConditionalRender>
            </Fragment>
            <Fragment>
              <ConditionalRender condition={renderMobile.isMobile}>
                <div>
                  <div className="max-w-md">
                    <p className="mb-3 font-semibold">Tagline</p>
                    <h2 className="mb-5 text-5xl font-bold">
                      Medium length section heading goes here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                      alt="Relume placeholder image 3"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </ConditionalRender>
              <ConditionalRender condition={renderTablet.isTablet}>
                <motion.div
                  style={{ opacity: useScroll.getStyles(2).opacity }}
                  className="md:absolute md:flex md:h-screen md:flex-col md:justify-center"
                >
                  <div className="max-w-md md:mr-[5vw] md:ml-20">
                    <p className="font-semibold md:mb-4">Tagline</p>
                    <h2 className="text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ConditionalRender>
            </Fragment>
            <Fragment>
              <ConditionalRender condition={renderMobile.isMobile}>
                <div>
                  <div className="max-w-md">
                    <p className="mb-3 font-semibold">Tagline</p>
                    <h2 className="mb-5 text-5xl font-bold">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                      alt="Relume placeholder image 4"
                      className="size-full object-cover"
                    />
                  </div>
                </div>
              </ConditionalRender>
              <ConditionalRender condition={renderTablet.isTablet}>
                <motion.div
                  style={{ opacity: useScroll.getStyles(3).opacity }}
                  className="md:absolute md:flex md:h-screen md:flex-col md:justify-center"
                >
                  <div className="max-w-md md:mr-[5vw] md:ml-20">
                    <p className="font-semibold md:mb-4">Tagline</p>
                    <h2 className="text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                      Short heading here
                    </h2>
                    <p className="md:text-md">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare, eros dolor interdum nulla,
                      ut commodo diam libero vitae erat.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Button" variant="secondary">
                        Button
                      </Button>
                      <Button
                        title="Button"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                      >
                        Button
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </ConditionalRender>
            </Fragment>
          </div>
        </div>
      </div>
    </section>
  );
}
