"use client";

import { useState, useRef, useEffect, ReactNode } from "react";
import Image from "next/image";

export interface DropDownColumnLinkOption {
  href: string;
  iconSrc: string;
  title: string;
  description: string;
}

export interface DropdownProps {
  title: string;
  titleClassName?: string;
  iconSrc?: string;
  children: ReactNode;
}

export default function Dropdown({
  title,
  titleClassName = "",
  iconSrc = "/images/icons/chevron-down.svg",
  children,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Cerrar al hacer click fuera
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-2 ${titleClassName}`}
      >
        {title}
        <Image
          src={iconSrc}
          alt=""
          width={12}
          height={7}
          // rotamos según estado `open`
          className={`transform transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-[-275%] mt-3 inline-block w-max max-w-[640px] bg-white rounded-xl shadow-md z-10 border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}
