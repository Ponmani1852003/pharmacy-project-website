import { useState } from "react";
import { Play } from "lucide-react";

function VideoThumbnail() {
  const [failed, setFailed] = useState(false);

  return (
    <button className="relative block w-full rounded-2xl overflow-hidden group">
      {failed ? (
        <div className="w-full h-64 bg-gray-200" />
      ) : (
        <img
          src="/article/video-thumb.jpg"
          alt="Video thumbnail"
          onError={() => setFailed(true)}
          className="w-full h-64 object-cover"
        />
      )}
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-105 transition-transform">
          <Play className="w-5 h-5 text-teal-500" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}

export default VideoThumbnail;
