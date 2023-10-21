import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Videos.css";

interface Video {
  name: string;
  path: string;
  description: string;
}

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const videos: Video[] = [
    {
      name: "Hotel Vernon | Live Set Techno | 10 07 2023",
      path: "https://youtu.be/FR82wqT8RFU?si=V89xTXAHafPnDH7r",
      description: "An electric techno set performed at Hotel Vernon.",
    },
    {
      name: "AS220 | Live Set Techno | 08 10 2023",
      path: "https://youtu.be/GE6b4F04NDI?si=b5WdswfBgjpeYtQ2",
      description: "Captivating techno rhythms at AS220.",
    },
    {
      name: "Fluid Machina | Live Set Ambient | 09 17 2023",
      path: "https://youtu.be/9VyPo4li2B8?si=tSNbndPHjXz7Eu2W",
      description: "A soothing ambient set that sets the mood",
    },
    {
      name: "Mayday Open Mic | Live Set Techno 07 20",
      path: "https://youtu.be/SKvAW1VV16Y?si=0J6JEAk0paFdTir3",
      description: "An energetic open mic techno set that lit up Mayday.",
    },
    {
      name: "Mayday Live Set Techno 10 19 2023",
      path: "https://youtu.be/9ws9YuBmroc?si=QDpbdKM7ntQP57NQ",
      description:
        "A pumping techno set that kept the dance floor alive at Mayday.",
    },
  ];

  useEffect(() => {
    if (videos.length > 0) {
      setSelectedVideo(videos[0].path);
      setIsVideoLoaded(true);
    }
  }, []);

  const handleMouseEnter = () => {
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    setShowControls(false);
  };

  return (
    <div className="video-container">
      {isVideoLoaded && (
        <div
          className="video-player"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ width: "100%" }}>
            <ReactPlayer
              url={selectedVideo}
              controls={showControls}
              width="100%"
            />
          </div>
        </div>
      )}
      <div className="video-list">
        <h2>Video List</h2>
        <ul>
          {videos.map((video, index) => (
            <li key={index} onClick={() => setSelectedVideo(video.path)}>
              <div className="video-title">{video.name}</div>
              <div className="video-description">{video.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Videos;
