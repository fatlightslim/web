import { Player, BigPlayButton } from "video-react";

export default function Video({video}) {
  return (
    <div className="bg-black lg:pb-12">
      <div className="max-w-7xl mx-auto lg:py-2 lg:px-8 ">
        <Player
          poster={video.poster}
          src={video.src}
          className="lg:rounded-lg"
        >
          <BigPlayButton position="center" className="z-50" />
        </Player>
      </div>
    </div>
  );
}