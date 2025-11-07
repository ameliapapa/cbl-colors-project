"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useState, useEffect } from "react";
import header103Tab1 from "../../assets/header103-tab1.jpg";
import header103Tab2 from "../../assets/header103-tab2.jpg";
import header103Tab3 from "../../assets/header103-tab3.jpg";
import header103Tab4 from "../../assets/header103-tab4.jpg";

const useTabsTrigger = ({ defaultTabValue, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(defaultTabValue);

  const handleTabClick = (value) => {
    setActiveTab(value);
    if (onTabChange) {
      onTabChange(value);
    }
  };

  const renderTrigger = (trigger) => (
    <TabsTrigger
      value={trigger.value}
      onClick={() => handleTabClick(trigger.value)}
      className="relative flex-1 whitespace-normal border-0 bg-transparent px-4 py-4 text-center text-neutral-light duration-0 data-[state=active]:bg-transparent data-[state=active]:text-neutral-white sm:px-8 md:min-w-32"
    >
      <span>{trigger.text}</span>
      <div className="absolute inset-0 top-auto h-1 w-full bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: "0%" }}
          animate={{ width: activeTab === trigger.value ? "100%" : "0%" }}
          transition={{
            duration: activeTab === trigger.value ? 5 : 0.3,
            ease: activeTab === trigger.value ? "linear" : "easeInOut",
          }}
        />
      </div>
    </TabsTrigger>
  );

  return {
    renderTrigger,
    activeTab,
    setActiveTab,
  };
};

export function Header103() {
  const [currentTab, setCurrentTab] = useState("tab-one");

  const tabTriggers = [
    { value: "tab-one", text: "Feature Films" },
    { value: "tab-two", text: "Documentaries" },
    { value: "tab-three", text: "Short Films" },
    { value: "tab-four", text: "Animations" },
  ];

  const { renderTrigger, setActiveTab } = useTabsTrigger({
    defaultTabValue: currentTab,
    onTabChange: setCurrentTab,
  });

  // Auto-advance tabs every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTab((prev) => {
        const currentIndex = tabTriggers.findIndex((t) => t.value === prev);
        const nextIndex = (currentIndex + 1) % tabTriggers.length;
        const nextTab = tabTriggers[nextIndex].value;
        setActiveTab(nextTab);
        return nextTab;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [setActiveTab, tabTriggers]);

  return (
    <section id="relume" className="relative min-h-screen">
      <Tabs value={currentTab} onValueChange={setCurrentTab}>
        <AnimatePresence initial={false}>
          <TabsContent
            value="tab-one"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="absolute inset-0">
                <img
                  className="size-full object-cover"
                  src={header103Tab1}
                  alt="Film portfolio image"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-two"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="absolute inset-0">
                <img
                  className="size-full object-cover"
                  src={header103Tab2}
                  alt="Documentary portfolio image"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-three"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="absolute inset-0">
                <img
                  className="size-full object-cover"
                  src={header103Tab3}
                  alt="Commercial portfolio image"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="tab-four"
            className="relative max-h-[60rem] min-h-screen overflow-visible"
          >
            <div className="flex h-screen flex-col items-center justify-center">
              <div className="absolute inset-0">
                <img
                  className="size-full object-cover"
                  src={header103Tab4}
                  alt="Music video portfolio image"
                />
              </div>
            </div>
          </TabsContent>
        </AnimatePresence>
        <TabsList className="absolute top-auto right-0 bottom-12 left-0 z-20 mx-auto flex justify-center gap-4 px-[5vw] md:bottom-16 lg:bottom-20 lg:max-w-xl">
          {tabTriggers.map((trigger, index) => (
            <Fragment key={index}>{renderTrigger(trigger)}</Fragment>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
}
