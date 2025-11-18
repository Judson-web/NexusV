// src/components/icons/RewindIcon.tsx
import React from "react";

export default function RewindIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 19V5L2 12l9 7zM22 5v14l-9-7 9-7z" />
    </svg>
  );
}