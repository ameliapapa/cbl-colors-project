"use client";

import { Badge } from "@relume_io/relume-ui";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";

const imageVariants = {
  initial: { x: 0, y: 0 },
  top: { y: 50, transition: { type: "spring", duration: 1, bounce: 0 } },
  bottom: { y: -50, transition: { type: "spring", duration: 1, bounce: 0 } },
  left: { x: 50, transition: { type: "spring", duration: 1, bounce: 0 } },
  right: { x: -50, transition: { type: "spring", duration: 1, bounce: 0 } },
};

const useHover = () => {
  const ref = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [direction, setDirection] = useState("initial");
  const handleMouseEnter = (event) => {
    if (!ref.current) return;
    const getDirection = (ev, obj) => {
      const { width: w, height: h, left, top } = obj.getBoundingClientRect();
      const centerX = left + w / 2;
      const centerY = top + h / 2;
      const xOffset = ev.clientX - centerX;
      const yOffset = ev.clientY - centerY;
      const angleDegrees = Math.atan2(yOffset, xOffset) * (180 / Math.PI);
      const adjustedAngle =
        angleDegrees < 0 ? angleDegrees + 360 : angleDegrees;
      if (adjustedAngle >= 315 || adjustedAngle < 45) {
        return "right";
      } else if (adjustedAngle >= 45 && adjustedAngle < 135) {
        return "bottom";
      } else if (adjustedAngle >= 135 && adjustedAngle < 225) {
        return "left";
      } else {
        return "top";
      }
    };
    setDirection(getDirection(event, ref.current));
  };
  const handleMouseMove = (e) => {
    setCursorPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const getLinkHoverHandler = (index) => () => {
    setHoveredIndex(index);
  };
  const translateTopInverse = direction === "top" ? -50 : 0;
  const translateBottomInverse = direction === "bottom" ? 50 : 0;
  const translateLeftInverse = direction === "left" ? -50 : 0;
  const translateRightInverse = direction === "right" ? 50 : 0;
  const style = {
    translateX:
      cursorPosition.x - 300 + translateLeftInverse + translateRightInverse,
    translateY:
      cursorPosition.y - 300 + translateTopInverse + translateBottomInverse,
  };
  const getOrderNumberClassNames = (index) => {
    return clsx(
      "text-xl font-bold transition-colors duration-300 md:text-2xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };
  const getHeadingClassNames = (index) => {
    return clsx(
      "text-6xl font-bold transition-colors duration-300 md:text-9xl lg:text-10xl",
      {
        "lg:text-black/20": hoveredIndex !== index && hoveredIndex !== null,
        "lg:text-black": hoveredIndex === index || hoveredIndex === null,
      },
    );
  };
  const getOverlayClassNames = (index) => {
    return `pointer-events-none fixed inset-0 -z-10 hidden size-[600px] lg:block ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`;
  };
  return {
    ref,
    getOrderNumberClassNames,
    getHeadingClassNames,
    getOverlayClassNames,
    getLinkHoverHandler,
    direction,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
    style,
  };
};

export function Portfolio20() {
  const hoverState = useHover();
  return (
    <section
      id="relume"
      className="px-[5%] py-16 md:py-24 lg:py-28"
      onMouseMove={hoverState.handleMouseMove}
    >
      <div className="container">
        <p className="mb-6 font-semibold md:mb-8">Selected Works</p>
        <motion.div
          initial="initial"
          whileHover={hoverState.direction}
          onMouseEnter={hoverState.handleMouseEnter}
          onMouseLeave={hoverState.handleMouseLeave}
          ref={hoverState.ref}
        >
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(0)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(0)}>01</div>
            <h3 className={hoverState.getHeadingClassNames(0)}>Els Mals </h3>
            <Badge>Feature</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(0)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg"
                alt="Relume placeholder image 1"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(1)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(1)}>02</div>
            <h3 className={hoverState.getHeadingClassNames(1)}>Project name</h3>
            <Badge>Documentary</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(1)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg"
                alt="Relume placeholder image 2"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(2)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(2)}>03</div>
            <h3 className={hoverState.getHeadingClassNames(2)}>Project name</h3>
            <Badge>Short Film</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(2)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg"
                alt="Relume placeholder image 3"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(3)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(3)}>04</div>
            <h3 className={hoverState.getHeadingClassNames(3)}>Project name</h3>
            <Badge>Feature</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(3)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg"
                alt="Relume placeholder image 4"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(4)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(4)}>05</div>
            <h3 className={hoverState.getHeadingClassNames(4)}>Project name</h3>
            <Badge>Documentary</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(4)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-5.svg"
                alt="Relume placeholder image 5"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>06</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Short Film</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>07</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Feature</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>08</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Tag</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>09</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Tag</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>10</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Tag</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>11</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Tag</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
          <a
            href="#"
            onMouseEnter={hoverState.getLinkHoverHandler(5)}
            className="flex flex-col items-start gap-4 border-b border-border-primary py-5 sm:flex-row sm:items-center md:gap-8 md:py-6"
          >
            <div className={hoverState.getOrderNumberClassNames(5)}>12</div>
            <h3 className={hoverState.getHeadingClassNames(5)}>Project name</h3>
            <Badge>Tag</Badge>
            <motion.div
              className={hoverState.getOverlayClassNames(5)}
              style={hoverState.style}
            >
              <motion.img
                className="max-w-md rounded-image"
                variants={imageVariants}
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-6.svg"
                alt="Relume placeholder image 6"
              />
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
