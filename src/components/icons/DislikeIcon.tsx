// src/components/icons/DislikeIcon.tsx
import React from "react";

export default function DislikeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 3s7 4.35 9 7.05C23.4 14.1 20.7 19 17 19c-2.2 0-3.2-1.2-5-3.1C10.2 17.8 9.2 19 7 19 3.3 19 .6 14.1 4 10.05 6 7.35 12 3 12 3z" />
    </svg>
  );
}