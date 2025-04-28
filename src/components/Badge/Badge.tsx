// src/components/Badge/Badge.tsx
"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block 
        bg-gray-100 text-primary-600 
        text-sm font-medium tracking-wide 
        rounded-full px-3 py-1 mb-4 
        border border-gray-200
        ${className}
      `}
    >
      {children}
    </span>
  );
}
