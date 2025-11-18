// src/components/icons/LikeIcon.tsx
import React from "react";

export default function LikeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 21s-7-4.35-9-7.05C0.6 9.9 3.3 5 7 5c2.2 0 3.2 1.2 5 3.1C13.8 6.2 14.8 5 17 5c3.7 0 6.4 4.9 4 8.95C19 16.65 12 21 12 21z" />
    </svg>
  );
}