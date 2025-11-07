"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { Button } from "@relume_io/relume-ui";
import { Tabs, TabsList, TabsTrigger } from "@relume_io/relume-ui";

export const Layout350 = (props) => {
  const { sections } = {
    ...Layout350Defaults,
    ...props,
  };

  const { activeSection, currentSection, scrollToSection, handleIntersection } =
    useSectionNavigation(sections);

  return (
    <section id="relume" className="bg-cbl-light px-page pt-24 pb-0">
      <div className="container max-w-container mx-auto">
        <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:gap-x-20">
          <div className="grid items-start gap-12 md:flex md:flex-col md:gap-0">
            <Tabs
              value={activeSection}
              onValueChange={scrollToSection}
              className="sticky top-24 z-10 hidden md:block mb-20"
            >
              <TabsList className="flex w-full gap-x-1 border border-black/15 bg-cbl-light p-1">
                {sections.map((section) => (
                  <TabsTrigger
                    key={section.id}
                    value={section.id}
                    className="whitespace-nowrap px-6 py-3 font-neue-display text-[18px] leading-[1.5] data-[state=active]:border data-[state=active]:border-black/15 data-[state=inactive]:border-transparent data-[state=active]:bg-transparent data-[state=active]:text-cbl-black"
                  >
                    {section.anchorTrigger}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            {sections.map((section, index) => (
              <ObservedSection
                key={section.id}
                section={section}
                index={index}
                onIntersect={handleIntersection}
              >
                <ContentSection section={section} />
              </ObservedSection>
            ))}
          </div>

          <div className="sticky top-0 hidden h-screen flex-col items-center justify-center md:flex">
            <img
              src={currentSection.image.src}
              alt={currentSection.image.alt}
              className="w-[769px] h-[769px] object-cover rounded-[16px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const getInitialActiveSection = (sections) => {
  if (typeof window === "undefined") return sections[0].id;

  const hash = window.location.hash.slice(1);
  const matchingSection = sections.find((section) => section.id === hash);
  return matchingSection?.id ?? sections[0].id;
};

const scrollToElement = (elementId) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
};

const useSectionNavigation = (sections) => {
  const [activeSection, setActiveSection] = useState(() => getInitialActiveSection(sections));

  const scrollToSection = useCallback((sectionId) => {
    scrollToElement(sectionId);
    window.history.pushState(null, "", `#${sectionId}`);
  }, []);

  const handleIntersection = useCallback(
    (index) => {
      setActiveSection(sections[index].id);
    },
    [sections],
  );

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (sections.some((section) => section.id === hash)) {
        scrollToSection(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [sections, scrollToSection]);

  const currentSection = sections.find((section) => section.id === activeSection) ?? sections[0];

  return {
    activeSection,
    currentSection,
    scrollToSection,
    handleIntersection,
  };
};

const ObservedSection = ({ section, index, onIntersect, children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect(index);
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [index, onIntersect]);

  return (
    <div id={section.id} ref={sectionRef}>
      {children}
    </div>
  );
};

const ContentSection = ({ section }) => (
  <div className="flex flex-col items-start justify-center md:h-screen py-section-lg">
    <p className="mb-4 font-neue-display font-medium text-[16px] leading-[1.5] text-cbl-black">
      {section.tagline}
    </p>
    <h2 className="mb-6 font-neue-display text-[60px] leading-[1.2] tracking-[-0.6px] text-cbl-black">
      {section.heading}
    </h2>
    <p className="font-neue-display text-[20px] leading-[1.5] text-cbl-black mb-8">
      {section.description}
    </p>
    {section.buttons && section.buttons.length > 0 && (
      <div className="flex items-center gap-x-6">
        {section.buttons.map((button, index) => (
          <Button key={index} {...button}>
            {button.title}
          </Button>
        ))}
      </div>
    )}
    <div className="mt-10 md:hidden">
      <img
        src={section.image.src}
        alt={section.image.alt}
        className="w-full h-auto rounded-[16px] object-cover"
      />
    </div>
  </div>
);

export const Layout350Defaults = {
  sections: [
    {
      id: "intro",
      anchorTrigger: "Intro",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-1.svg",
        alt: "Cristóbal Bolaños López",
      },
      tagline: "Intro",
      heading: "Hi! I'm Cristóbal Bolaños López",
      description:
        "I'm a colorist and image postproduction specialist based in Barcelona, with a deep passion for the intersection between storytelling, technology, and visual emotion.",
      buttons: [
        { title: "Awarded Works", variant: "secondary" },
        {
          title: "Contact",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      id: "background",
      anchorTrigger: "Background",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-2.svg",
        alt: "Education and early career",
      },
      tagline: "Background",
      heading: "Education and Early Career",
      description:
        "With a background in Journalism and Audiovisual Communication from Universidad Carlos III de Madrid, and a Master's in Postproduction from Escuela Universitaria TAI, I've built a career at the intersection of narrative and technical precision. After joining the technical team at SGO, working on Mistika Boutique and collaborating with international professionals, I continued my path at Antaviana Films, contributing to feature films and documentaries of high creative and technical demand.",
    },
    {
      id: "expertise",
      anchorTrigger: "Expertise",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-3.svg",
        alt: "Sharing insights",
      },
      tagline: "Expertise",
      heading: "Sharing insights",
      description:
        "Each project is a canvas. I approach color grading with surgical precision and artistic intuition, ensuring every scene tells its truest story.",
      buttons: [
        {
          title: "Color Tech Day",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
    },
    {
      id: "currently",
      anchorTrigger: "Currently",
      image: {
        src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-4.svg",
        alt: "Freelance chapter",
      },
      tagline: "Currently",
      heading: "Freelance Chapter",
      description:
        "My work bridges technical mastery and creative expression. I see color as a narrative tool that can amplify the deepest human emotions.",
    },
  ],
};
