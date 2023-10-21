import React from "react";
import ReactAudioPlayer from "react-audio-player";

interface MusicPlayerProps {
  src: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
  return <ReactAudioPlayer src={src} controls style={{ width: "100%" }} />;
};

export default MusicPlayer;
