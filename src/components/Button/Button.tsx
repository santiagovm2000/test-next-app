"use client";

interface ButtonProps {
  title: string;
  buttonClass?: string;
  hoverClass?: string;
  onClick?: () => void;
}

export default function Button({
  title,
  buttonClass = "bg-primary hover:bg-primary-700",
  onClick,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 text-white rounded transition-colors duration-400 ${buttonClass}`}
    >
      {title}
    </button>
  );
}
