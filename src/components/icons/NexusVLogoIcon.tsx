// src/components/icons/NexusVLogoIcon.tsx
import React from "react";

export default function NexusVLogoIcon({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="10" fill="#0ea5a4" />
      <path d="M14 16v16l10-8-10-8z" fill="#022" opacity="0.9" />
      <text x="26" y="34" fontSize="6" fill="#022" fontFamily="sans-serif">
        V
      </text>
    </svg>
  );
}