"use client";

import { useState } from "react";
import Image from "next/image";

const videos = ["/assets/media/video-crowd.mp4", "/assets/media/video-dj-crowd-2.mp4", "/assets/media/video-dj-crowd1.mp4"];

const VideoSection = () => {
  const [current, setCurrent] = useState(0);

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <div className="relative w-full max-w-5xl h-105 overflow-hidden rounded-xl">
        <video src={videos[current]} className="w-full h-full object-cover" controls />
      </div>

      <div className="flex items-center gap-3">
        <button onClick={() => setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1))} className="w-8 h-8 border border-white flex items-center justify-center">
          <Image src="/assets/icon/Play.svg" alt="Previous" width={12} height={12} className="rotate-180" />
        </button>

        <button onClick={() => setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1))} className="w-8 h-8 border border-white flex items-center justify-center">
          <Image src="/assets/icon/Play.svg" alt="Next" width={12} height={12} />
        </button>
      </div>
    </section>
  );
};

export default VideoSection;
