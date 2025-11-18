// src/components/icons/ShareIcon.tsx
import React from "react";

export default function ShareIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 8a3 3 0 10-2.83-4H8a2 2 0 00-2 2v12a2 2 0 002 2h8.17A3 3 0 1018 8z" />
    </svg>
  );
}