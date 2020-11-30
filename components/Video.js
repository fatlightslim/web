import { Player, BigPlayButton } from "video-react";

export default function Video(params) {
  return (
    <div className="bg-black lg:pb-12">
      <div className="max-w-7xl mx-auto lg:py-2 lg:px-8 ">
        <Player
          poster="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/SP3000.png?v=1602887948"
          src="https://cdn.shopify.com/s/files/1/0470/9089/2956/files/Best_grow_choice_for_2ftx4ft_Mars_Hydro_SP_3000_Led_Grow_Light_New_2020.mp4?v=1602890067"
          className="lg:rounded-lg"
        >
          <BigPlayButton position="center" />
        </Player>
      </div>
    </div>
  );
}
