// src/components/icons/ForwardIcon.tsx
import React from "react";

export default function ForwardIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M13 5v14l9-7-9-7zM2 5v14l9-7-9-7z" />
    </svg>
  );
}