import React, { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";

const Music: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<string>("");

  const songs = [
    {
      name: "Song 1",
      path: "/assets/music/NoizCode_Distraction (Mastrng 1).mp3",
    },
    {
      name: "Song 2",
      path: "/assets/music/NoizCode_Distraction (Mastrng 1).mp3",
    },
    // ... Add more songs as required
  ];

  return (
    <div>
      <h2>Music List</h2>
      <ul>
        {songs.map((song, index) => (
          <li key={index} onClick={() => setSelectedSong(song.path)}>
            {song.name}
          </li>
        ))}
      </ul>

      {selectedSong && <MusicPlayer src={selectedSong} />}
    </div>
  );
};

export default Music;
