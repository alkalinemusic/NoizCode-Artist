import React from "react";
import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div>
      <ReactPlayer url={src} controls width="100%" />
    </div>
  );
};

export default VideoPlayer;
