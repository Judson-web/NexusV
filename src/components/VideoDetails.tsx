import React from "react";
import type { VideoItem } from "../types";
import LikeIcon from "./icons/LikeIcon";
import DislikeIcon from "./icons/DislikeIcon";
import ShareIcon from "./icons/ShareIcon";
import SaveIcon from "./icons/SaveIcon";
import MoreVerticalIcon from "./icons/MoreVerticalIcon";

export default function VideoDetails({ video }: { video: VideoItem }) {
  return (
    <div>
      <h1 className="text-base font-semibold text-white">{video.title}</h1>
      <div className="flex items-center justify-between mt-2">
        <div className="text-xs text-gray-400">
          <div>{video.channel}</div>
          <div className="text-[11px] text-gray-500">{video.views.toLocaleString()} views • {video.uploadedAt}</div>
        </div>

        <div className="flex gap-3 items-center">
          <button className="flex flex-col items-center text-xs">
            <LikeIcon className="w-6 h-6" />
            <span className="text-xs">Like</span>
          </button>
          <button className="flex flex-col items-center text-xs">
            <DislikeIcon className="w-6 h-6" />
            <span className="text-xs">Dislike</span>
          </button>
          <button className="flex flex-col items-center text-xs">
            <ShareIcon className="w-6 h-6" />
            <span className="text-xs">Share</span>
          </button>
          <button className="flex flex-col items-center text-xs">
            <SaveIcon className="w-6 h-6" />
            <span className="text-xs">Save</span>
          </button>
          <button className="p-2">
            <MoreVerticalIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}