"use client";
import { ReactNode, useState, useEffect } from "react";

interface CarouselProps {
  children: ReactNode[];
  interval?: number;
}

export default function Carousel({ children, interval = 0 }: CarouselProps) {
  const [active, setActive] = useState(0);
  const total = children.length;

  // auto-advance
  useEffect(() => {
    if (interval > 0) {
      const id = setInterval(() => setActive((a) => (a + 1) % total), interval);
      return () => clearInterval(id);
    }
  }, [interval, total]);

  return (
    <div className="relative h-full">
      {/* Wrapper ocupa toda la altura */}
      <div className="h-full overflow-hidden rounded-2xl">
        <div
          className="flex h-full transition-transform duration-500"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {children.map((child, i) => (
            <div key={i} className="flex-shrink-0 w-full h-full">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots centrados */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {children.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActive(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${
              idx === active ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
