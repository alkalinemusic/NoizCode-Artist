import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import "./Videos.css";

interface Video {
  name: string;
  path: string;
}

const Videos: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string>("");
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(false);

  const videos: Video[] = [
    {
      name: "Hotel Vernon | Live Set Techno | 10 07 2023",
      path: "https://youtu.be/FR82wqT8RFU?si=V89xTXAHafPnDH7r",
    },
    {
      name: "AS220 | Live Set Techno | 08 10 2023",
      path: "https://youtu.be/GE6b4F04NDI?si=b5WdswfBgjpeYtQ2",
    },
    {
      name: "Fluid Machina | Live Set Ambient | 09 17 2023",
      path: "https://youtu.be/9VyPo4li2B8?si=tSNbndPHjXz7Eu2W",
    },
    {
      name: "Mayday Open Mic | Live Set Techno 07 20",
      path: "https://youtu.be/SKvAW1VV16Y?si=0J6JEAk0paFdTir3",
    },
    {
      name: "Mayday Live Set Techno 10 19 2023",
      path: "https://youtu.be/9ws9YuBmroc?si=QDpbdKM7ntQP57NQ",
    },
  ];

  // Load the first video when the component mounts
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
    <div
      style={{
        marginTop: "110px",
        display: "flex",
        justifyContent: "center", // Center the content horizontally
        alignItems: "flex-start", // Align content to the top vertically
      }}
    >
      {isVideoLoaded && (
        <div
          style={{
            textAlign: "center",
            width: "50%",
            overflow: "hidden", // Hide overflowing controls
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div style={{ width: "100%" }}>
            <ReactPlayer
              url={selectedVideo}
              controls={showControls} // Show controls based on showControls state
              width="100%"
            />
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", marginLeft: "20px" }}>
        <h2>Video List</h2>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {videos.map((video, index) => (
            <li
              key={index}
              onClick={() => setSelectedVideo(video.path)}
              style={{ marginBottom: "10px" }}
            >
              {video.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Videos;
