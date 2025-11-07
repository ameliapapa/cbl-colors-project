import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import gradientCbl from "../../assets/gradient-cbl.png";

const useRelume = () => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
  const handleMouseEnter = (index) => () => {
    setHoveredFeatureIdx(index);
  };
  const handleMouseLeave = () => {
    setHoveredFeatureIdx(null);
  };
  const startAnimation = (index) => {
    return hoveredFeatureIdx === index ? "visible" : "hidden";
  };
  return {
    handleMouseEnter,
    handleMouseLeave,
    startAnimation,
  };
};

export function Layout423() {
  const hoverState = useRelume();
  return (
    <section id="relume" className="bg-cbl-light px-page py-section-lg">
      <div className="container max-w-container mx-auto">
        <div className="mb-20 flex items-center gap-4">
          <div className="h-[2px] w-32 bg-gradient-cbl"></div>
          <h2 className="font-neue-header text-h1">More than color grading</h2>
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden rounded-[50px] lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(0)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <img
                src={gradientCbl}
                alt="CBL Gradient"
                className="size-full object-cover rounded-[50px]"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-neue-display text-tagline text-cbl-light">
                  Consulting
                </p>
                <h3 className="font-neue-header text-h4 text-cbl-light">
                  Professional Workflow Consulting Services
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Streamline your postproduction process with our tailored
                    consulting services for maximum efficiency.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(0)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Streamline your postproduction process with our tailored
                    consulting services for maximum efficiency.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden rounded-[50px] lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(1)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <img
                src={gradientCbl}
                alt="CBL Gradient"
                className="size-full object-cover rounded-[50px]"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-neue-display text-tagline text-cbl-light">
                  Calibration
                </p>
                <h3 className="font-neue-header text-h4 text-cbl-light">
                  Display Calibration Services
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Expert display calibration for optimal viewing experiences
                    and color accuracy across all devices.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(1)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Expert display calibration for optimal viewing experiences
                    and color accuracy across all devices.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden rounded-[50px] lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(2)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <img
                src={gradientCbl}
                alt="CBL Gradient"
                className="size-full object-cover rounded-[50px]"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
              <div className="z-10">
                <p className="mb-2 font-neue-display text-tagline text-cbl-light">
                  Training
                </p>
                <h3 className="font-neue-header text-h4 text-cbl-light">
                  Color Grading Workshops
                </h3>
                <div className="lg:hidden">
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Comprehensive training programs to enhance your color
                    grading skills and workflow efficiency.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(2)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-5 font-neue-display text-body-thin text-cbl-light md:mt-6">
                    Comprehensive training programs to enhance your color
                    grading skills and workflow efficiency.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="font-neue-display text-body-light text-cbl-light"
                    >
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
