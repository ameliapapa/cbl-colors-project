"use client";

import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState } from "react";

const useTabsTrigger = ({ defaultTabValue }) => {
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  const renderTrigger = (trigger) => (
    <TabsTrigger
      value={trigger.value}
      onClick={() => setActiveTab(trigger.value)}
      className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
    >
      <span>{trigger.text}</span>
      <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: activeTab === trigger.value ? "100%" : "0%" }}
          transition={{
            duration: activeTab === trigger.value ? 1.5 : 0.3,
            ...(activeTab === trigger.value
              ? {
                  type: "spring",
                  stiffness: 25,
                  damping: 30,
                }
              : { ease: "easeInOut" }),
          }}
        />
      </div>
    </TabsTrigger>
  );

  return {
    renderTrigger,
  };
};

export function Header103() {
  const tabsTriggerState = useTabsTrigger({ defaultTabValue: "tab-one" });
  return (
    <section id="relume" className="relative min-h-screen">
      <Tabs defaultValue="tab-one">
        <AnimatePresence initial={false}>
          <TabsContent
            value="tab-one"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                  className="mx-auto max-w-lg text-center"
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                    Transforming Visual Stories Through Color
                  </h1>
                  <p className="text-text-alternative md:text-md">
                    Experience the art of color grading like never before. Our
                    expert colorist brings your vision to life, enhancing every
                    frame with precision and creativity.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Explore">Explore</Button>
                    <Button title="Contact" variant="secondary-alt">
                      Contact
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-black/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 1"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                  className="mx-auto max-w-lg text-center"
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                    Crafting Color for Every Project
                  </h1>
                  <p className="text-text-alternative md:text-md">
                    From feature films to documentaries, our colorist tailors
                    each project to its unique narrative. Discover how color can
                    elevate storytelling in film.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Learn">Learn</Button>
                    <Button title="Join" variant="secondary-alt">
                      Join
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-black/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 2"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                  className="mx-auto max-w-lg text-center"
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                    Your Vision, Our Color Expertise
                  </h1>
                  <p className="text-text-alternative md:text-md">
                    Let us collaborate to bring your creative ideas to fruition.
                    Our commitment to quality and detail ensures your project
                    shines.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Start">Start</Button>
                    <Button title="Connect" variant="secondary-alt">
                      Connect
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-black/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 3"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="px-[5%] py-16 md:py-24 lg:py-28">
                <motion.div
                  className="mx-auto max-w-lg text-center"
                  initial={{ y: "20%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-20%", opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <h1 className="mb-5 text-6xl font-bold text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
                    Elevate Your Film with Stunning Color
                  </h1>
                  <p className="text-text-alternative md:text-md">
                    Unlock the full potential of your visuals with expert color
                    grading. Our passion for film and color will transform your
                    project into a masterpiece.
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                    <Button title="Discover">Discover</Button>
                    <Button title="Inquire" variant="secondary-alt">
                      Inquire
                    </Button>
                  </div>
                </motion.div>
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 z-10 bg-black/50" />
                <img
                  className="size-full object-cover"
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image 4"
                />
              </div>
            </div>
          </TabsContent>
        </AnimatePresence>
        <TabsList className="absolute top-auto right-0 bottom-12 left-0 z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
          <Fragment></Fragment>
          <Fragment></Fragment>
          <Fragment></Fragment>
          <Fragment></Fragment>
        </TabsList>
      </Tabs>
    </section>
  );
}
