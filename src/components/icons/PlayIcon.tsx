// src/components/icons/PlayIcon.tsx
import React from "react";

export default function PlayIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 3v18l15-9-15-9z" />
    </svg>
  );
}