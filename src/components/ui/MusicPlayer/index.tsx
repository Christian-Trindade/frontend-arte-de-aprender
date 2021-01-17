import * as React from "react";
import ReactAudioPlayer from "react-audio-player";

import { PlayerContainer } from "./ui";

interface Keyable {
  [key: string]: any;
}

interface MusicPlayerProps {
  data: Keyable;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ data, ...props }) => {
  return (
    <PlayerContainer image={data.image}>
      <ReactAudioPlayer
        src={`${data.baseBeatUrl}${data.selectedBeat.url}`}
        controls
      />{" "}
    </PlayerContainer>
  );
};
export default MusicPlayer;
