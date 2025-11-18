import React, { useRef, useState, useEffect } from "react";
import type { VideoItem } from "../types";
import PlayerControls from "./PlayerControls";
import VideoDetails from "./VideoDetails";
import UpNext from "./UpNext";
import NexusVLogoIcon from "./icons/NexusVLogoIcon";

type Props = { video: VideoItem };

export default function VideoPlayer({ video }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [isBuffering, setBuffering] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    const v = videoRef.current!;
    if (!v) return;
    const onLoaded = () => setDuration(v.duration || 0);
    const onTime = () => {
      setCurrent(v.currentTime);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onWaiting = () => setBuffering(true);
    const onPlaying = () => setBuffering(false);

    v.addEventListener("loadedmetadata", onLoaded);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("waiting", onWaiting);
    v.addEventListener("playing", onPlaying);

    return () => {
      v.removeEventListener("loadedmetadata", onLoaded);
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("waiting", onWaiting);
      v.removeEventListener("playing", onPlaying);
    };
  }, []);

  useEffect(() => {
    // lock orientation to portrait on mobile where supported (best-effort)
    if (navigator && (navigator as any).lockOrientation) {
      try {
        (navigator as any).lockOrientation("portrait-primary");
      } catch {}
    }
  }, []);

  const togglePlay = async () => {
    const v = videoRef.current!;
    if (!v) return;
    try {
      if (v.paused) {
        await v.play();
      } else {
        v.pause();
      }
    } catch (e) {
      console.warn("Playback error", e);
    }
  };

  const seekTo = (time: number) => {
    const v = videoRef.current!;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(time, duration));
    setCurrent(v.currentTime);
  };

  const toggleFullscreen = async () => {
    const el = containerRef.current!;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen().catch(() => {});
      setFullscreen(true);
    } else {
      await document.exitFullscreen().catch(() => {});
      setFullscreen(false);
    }
  };

  return (
    <div ref={containerRef} className="flex-1 flex flex-col justify-start">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {/* video container uses absolute positioning */}
        <div className="absolute inset-0 bg-black rounded-b-2xl overflow-hidden">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.thumbnail}
            playsInline
            webkit-playsinline="true"
            className="w-full h-full object-cover"
            preload="metadata"
            controls={false}
            // mobile touch events allow tap to toggle
            onClick={togglePlay}
          />
          {/* overlay controls */}
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="px-4 pb-3">
              <div className="progress-bar mb-2">
                <div
                  className="progress-filled bg-white"
                  style={{ width: duration ? `${(current / duration) * 100}%` : "0%" }}
                />
              </div>
              <PlayerControls
                isPlaying={isPlaying}
                isBuffering={isBuffering}
                duration={duration}
                current={current}
                onTogglePlay={togglePlay}
                onSeek={seekTo}
                onToggleFullscreen={toggleFullscreen}
              />
            </div>
          </div>
          {/* small logo top-left */}
          <div className="absolute top-3 left-3">
            <NexusVLogoIcon className="w-10 h-10" />
          </div>
        </div>
      </div>

      {/* below player: details / comments / upnext */}
      <div className="flex-1 overflow-auto p-4">
        <VideoDetails video={video} />
        <UpNext currentId={video.id} />
        <div className="mt-4">
          <hr className="opacity-10" />
          <h3 className="text-sm text-gray-300 mt-3">Comments</h3>
          <div className="mt-2">
            <p className="text-xs text-gray-400">Comments section is demo-only.</p>
            {/* placeholder / basic thread */}
            <div className="mt-3">
              <div className="bg-slate-800 p-3 rounded-lg">
                <p className="text-sm text-white">This is a demo comment. Replace with your comments backend.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}