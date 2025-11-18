import React from "react";
import type { VideoItem } from "../types";

type Props = { currentId: string };

const MOCK: VideoItem[] = [
  {
    id: "up-1",
    title: "Up next — sample clip 1",
    channel: "NexusV",
    views: 12000,
    uploadedAt: "2025-10-28",
    src: "/videos/sample2.mp4",
    thumbnail: "",
    duration: "2:10"
  },
  {
    id: "up-2",
    title: "Up next — sample clip 2",
    channel: "NexusV",
    views: 5400,
    uploadedAt: "2025-09-12",
    src: "/videos/sample3.mp4",
    thumbnail: "",
    duration: "4:02"
  }
];

export default function UpNext({ currentId }: Props) {
  return (
    <div className="mt-4">
      <h3 className="text-sm text-gray-300 mb-2">Up next</h3>
      <div className="flex flex-col gap-3">
        {MOCK.filter((v) => v.id !== currentId).map((v) => (
          <div key={v.id} className="flex items-center gap-3">
            <div className="w-28 h-16 bg-gray-800 rounded overflow-hidden flex-shrink-0">
              {/* placeholder thumb */}
            </div>
            <div className="flex-1">
              <div className="text-sm text-white">{v.title}</div>
              <div className="text-xs text-gray-400">{v.channel} • {v.views.toLocaleString()} views</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}