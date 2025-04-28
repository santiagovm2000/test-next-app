"use client";

import React from "react";
import Image from "next/image";

interface AccordionProps {
  /** Text displayed in the summary */
  title: string;
  /** Content displayed when expanded */
  children: React.ReactNode;
}

export default function Accordion({ title, children }: AccordionProps) {
  return (
    <details className="group border-b border-gray-200 pb-4">
      <summary className="flex justify-between items-center cursor-pointer p-3 text-gray-900 font-medium text-lg">
        {title}
        <div className="flex-none">
          {/* Icon “+” when closed */}
          <Image
            src="/images/icons/plus-circle.svg"
            alt="Expand"
            width={20}
            height={20}
            className="block group-open:hidden"
          />
          {/* Icon “–” when open */}
          <Image
            src="/images/icons/minus-circle.svg"
            alt="Collapse"
            width={20}
            height={20}
            className="hidden group-open:block"
          />
        </div>
      </summary>
      <div className="px-3 py-2 text-gray-600">{children}</div>
    </details>
  );
}
