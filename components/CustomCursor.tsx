"use client";

import { useEffect, useState, useRef } from "react";

const cursorImages = [
  "/blue flower cursor.svg",
  "/dark pink flower cursor.svg",
  "/orange flower cursor.svg",
  "/pink flower cursor.svg",
];

// Original size was ~116px, reduce by 20% = ~93px, let's use 40px for a nice cursor size
const CURSOR_SIZE = 40;

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorIndex, setCursorIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const lastPosition = useRef({ x: 0, y: 0 });
  const distanceTraveled = useRef(0);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Calculate distance traveled
      const dx = e.clientX - lastPosition.current.x;
      const dy = e.clientY - lastPosition.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      distanceTraveled.current += distance;
      lastPosition.current = { x: e.clientX, y: e.clientY };

      // Change cursor every 100 pixels of movement
      if (distanceTraveled.current >= 100) {
        distanceTraveled.current = 0;
        setCursorIndex((prev) => (prev + 1) % cursorImages.length);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-opacity duration-150"
      style={{
        left: position.x - CURSOR_SIZE / 2,
        top: position.y - CURSOR_SIZE / 2,
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={cursorImages[cursorIndex]}
        alt=""
        width={CURSOR_SIZE}
        height={CURSOR_SIZE}
        className="pointer-events-none"
      />
    </div>
  );
}
