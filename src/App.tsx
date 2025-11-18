import React from "react";
import VideoPlayer from "./components/VideoPlayer";
import { SAMPLE_VIDEO } from "./constants";

export default function App() {
  return (
    <div className="nexusv-player min-h-screen">
      <VideoPlayer video={SAMPLE_VIDEO} />
    </div>
  );
}