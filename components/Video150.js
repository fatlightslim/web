import { Player, BigPlayButton } from "video-react";

export default function Video(params) {
  return (
    <div className="bg-black lg:pb-12">
      <div className="max-w-7xl mx-auto lg:py-2 lg:px-8 ">
        <Player
          poster="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/sp150_e9fa3207-b7f3-44cc-8a3a-ed9fa69739d8.png?v=1607495939"
          src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/default.jobtemplate.mp4.480.mp4?v=1607495412"
          className="lg:rounded-lg"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    </div>
  );
}
