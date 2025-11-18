import React, { useRef, useState, useEffect } from "react";
import PlayIcon from "./icons/PlayIcon";
import PauseIcon from "./icons/PauseIcon";
import RewindIcon from "./icons/RewindIcon";
import ForwardIcon from "./icons/ForwardIcon";
import FullscreenIcon from "./icons/FullscreenIcon";

type Props = {
  isPlaying: boolean;
  isBuffering: boolean;
  duration: number;
  current: number;
  onTogglePlay: () => void;
  onSeek: (t: number) => void;
  onToggleFullscreen: () => void;
};

export default function PlayerControls({
  isPlaying,
  isBuffering,
  duration,
  current,
  onTogglePlay,
  onSeek,
  onToggleFullscreen
}: Props) {
  const [seeking, setSeeking] = useState(false);
  const progressRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      // prevent double scroll while interacting with controls on mobile
      if ((e.target as HTMLElement).closest(".progress-bar")) {
        e.stopPropagation();
      }
    };
    document.addEventListener("touchstart", handleTouch, { passive: false });
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  const formatTime = (s: number) => {
    if (!isFinite(s) || s <= 0) return "0:00";
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const onPointerDown = (e: React.PointerEvent) => {
    setSeeking(true);
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromPointer(e);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!seeking) return;
    updateFromPointer(e);
  };

  const onPointerUp = (e: React.PointerEvent) => {
    setSeeking(false);
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  };

  const updateFromPointer = (e: React.PointerEvent) => {
    const rect = progressRef.current!.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const t = Math.max(0, Math.min(1, x)) * duration;
    onSeek(t);
  };

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <button
          aria-label={isPlaying ? "Pause" : "Play"}
          onClick={onTogglePlay}
          className="p-2 rounded-full bg-black/50"
        >
          {isPlaying ? <PauseIcon className="w-6 h-6" /> : <PlayIcon className="w-6 h-6" />}
        </button>
        <button
          onClick={() => onSeek(Math.max(0, current - 10))}
          className="p-2 rounded-full bg-black/30"
          aria-label="Rewind 10s"
        >
          <RewindIcon className="w-5 h-5" />
        </button>
        <button
          onClick={() => onSeek(Math.min(duration, current + 10))}
          className="p-2 rounded-full bg-black/30"
          aria-label="Forward 10s"
        >
          <ForwardIcon className="w-5 h-5" />
        </button>
      </div>

      <div
        className="flex-1"
        style={{ minWidth: 0 }}
      >
        <div
          ref={progressRef}
          className="w-full progress-bar"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        >
          <div
            className="progress-filled bg-white"
            style={{ width: duration ? `${(current / duration) * 100}%` : "0%" }}
          />
        </div>
        <div className="flex justify-between text-xs mt-1 text-gray-300">
          <span>{formatTime(current)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={onToggleFullscreen} aria-label="Fullscreen" className="p-2 rounded-full bg-black/30">
          <FullscreenIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}