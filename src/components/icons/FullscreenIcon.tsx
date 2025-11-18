// src/components/icons/FullscreenIcon.tsx
import React from "react";

export default function FullscreenIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M7 14H5v5h5v-2H7v-3zm10 5h-3v2h5v-5h-2v3zM7 5h3V3H5v5h2V5zm10 0v3h2V3h-5v2h3z" />
    </svg>
  );
}