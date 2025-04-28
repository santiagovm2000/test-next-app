// src/components/CardCarousel/CardCarousel.tsx
"use client";

import { ReactNode, useRef } from "react";
import Image from "next/image";

interface CardCarouselProps {
  children: ReactNode[];
}

export default function CardCarousel({ children }: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollByWidth = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Scroll container sin scrollbar visible */}
      <div
        ref={scrollRef}
        className="
          flex overflow-x-auto scroll-snap-x scroll-snap-mandatory
          gap-6
          no-scrollbar
        "
      >
        {children.map((child, i) => (
          <div key={i} className="flex-shrink-0 w-80 scroll-snap-start">
            {child}
          </div>
        ))}
      </div>

      {/* Flechas debajo, alineadas a la izquierda */}
      <div className="mt-4 flex items-center space-x-4">
        <button
          onClick={() => scrollByWidth("left")}
          className="p-2 bg-white rounded-full shadow"
        >
          <Image
            src="/images/icons/arrow-carrousel-left.svg"
            alt="Anterior"
            width={24}
            height={24}
          />
        </button>
        <button
          onClick={() => scrollByWidth("right")}
          className="p-2 bg-white rounded-full shadow"
        >
          <Image
            src="/images/icons/arrow-carrousel-right.svg"
            alt="Siguiente"
            width={24}
            height={24}
          />
        </button>
      </div>
    </div>
  );
}
