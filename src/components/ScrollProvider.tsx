"use client";

import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

interface ScrollProviderProps {
  children: React.ReactNode;
}

const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !scrollRef.current) {
      return;
    }

    let locomotiveScroll: LocomotiveScroll | null = null;

    const initializeScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current!,
        smooth: true,
      });
    };

    initializeScroll();

    return () => {
      locomotiveScroll?.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      {children}
    </div>
  );
};

export default ScrollProvider;
