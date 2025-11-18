// src/components/icons/SpinnerIcon.tsx
import React from "react";

export default function SpinnerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={`${className} animate-spin`}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeDasharray="31.4 31.4"
      />
    </svg>
  );
}