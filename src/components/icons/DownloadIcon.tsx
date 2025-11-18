// src/components/icons/DownloadIcon.tsx
import React from "react";

export default function DownloadIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3v10m0 0l-4-4m4 4l4-4M5 20h14v-2H5v2z" />
    </svg>
  );
}