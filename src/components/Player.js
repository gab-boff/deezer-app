// Este player foi retirado de https://dev.to/daveguz97/adding-sound-to-a-react-project-51m3;

import React, { useState } from "react";
import Sound from "react-sound";

export default function Player(
  props,
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
  ) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Play" : "Stop"}
      </button>
      <Sound
        url={props.theSong}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        // playFromPosition={300}
        onLoading={handleSongLoading}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
}
