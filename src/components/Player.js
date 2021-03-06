// Este player foi retirado de https://dev.to/daveguz97/adding-sound-to-a-react-project-51m3;

import React, { useState } from "react";
import Sound from "react-sound";
import { CardButton } from "../styles";

export default function Player(
  props,
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
  ) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <CardButton onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? "Play" : "Stop"}
      </CardButton>
      <Sound
        url={props.theSong}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
}
