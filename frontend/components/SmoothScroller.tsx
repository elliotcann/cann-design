"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface Props {
  children: React.ReactNode[];
}

export default function SmoothScroller({ children }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrolling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSection = useCallback((index: number) => {
    if (index < 0 || index >= children.length) return; // Don't go out of bounds
    
    setCurrentIndex(index);
    isScrolling.current = true;

    // Unblock scrolling after animation completes
    setTimeout(() => {
      isScrolling.current = false;
    }, 1000); // Must match transition duration below
  }, [children.length]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault(); // Stop default page scroll

      if (isScrolling.current) return; // Block if already scrolling

      if (e.deltaY > 0) {
        goToSection(currentIndex + 1); // Scroll down
      } else {
        goToSection(currentIndex - 1); // Scroll up
      }
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, [currentIndex, goToSection]);

  return (
    <div ref={containerRef} className="h-screen overflow-hidden">
      <div
        className="transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentIndex * 100}vh)` }}
      >
        {children}
      </div>
    </div>
  );
}