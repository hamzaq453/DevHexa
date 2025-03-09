"use client";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export function ScrollBasedVelocityDemo() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the velocity scroll component only after scrolling past a certain point
      const scrollPosition = window.scrollY;
      const triggerPoint = window.innerHeight * 0.8; // 80% of viewport height
      
      setIsVisible(scrollPosition > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black w-full relative h-[10%]">
      <div className={cn(
        "fixed inset-0 flex items-center justify-center pointer-events-none",
        "transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0"
      )}>
        <div className="w-full">
          <div
            className={cn(
              "rounded-xl w-full h-[500px]",
              "bg-black-100/50 dark:bg-neutral-900/50 backdrop-blur-sm",
              "flex items-center justify-center"
            )}
          >
            <VelocityScroll
              text="A S D F G H J K L Z X C V B N M"
              default_velocity={5}
              className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-white drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem] pointer-events-auto"
            />
          </div>
        </div>
      </div>

      <div className="h-[200vh]" aria-hidden="true" />
    </div>
  );
}
