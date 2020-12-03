import Image from "next/image";

export default function Spectrum({
  props = {
    title: {
      1: "Daisy",
      2: "返品保証を",
      3: "お約束します。",
      color: "#fc2",
    },
    img: {
      src: "/img/sp3000/spectrum.png",
      alt:
        "これまでの赤色・青色LEDの機能に加えて強力な白色LEDを追加することで太陽光のような理想のライトに近づきました。",
      width: 1000,
      height: 1000,
    },
    desc: {
      1: "ご満足いただけない場合は全額返金させていただき",
      2: "ます。",
    },
    bg: {
      outer: "bg-white",
      inner: "bg-black",
    },
    text: "text-white",
  },
  harvest = {
    img: {
      src: "/img/sp3000/ledchip.png",
      alt:
        "SAMSUNG LM301Bの驚きの性能がこれまでの常識を変えます。なんと、1ワットあたり最大2.5グラム(従来比2倍)の収穫が可能です。",
      width: 1000,
      height: 857,
    },
  },
  ppfd = {
    img: {
      src: "/img/sp3000/ppfd.png",
      alt:
        "PPFD(光合成光量子束密度)の測定におけるパフォーマンスで他社製品を圧倒します。しかも、消費電力は最大30%OFF",
      width: 1000,
      height: 857,
    },
  },
  heatsink = {
    img: {
      src: "/img/sp3000/heatsink.png",
      alt:
        "アルミ製フルボディヒートシンクが熱を抑えます。ファンなし。ノイズなし。かなりクール。",
      width: 1000,
      height: 753,
    },
    bg: {},
  },
  connect = {
    img: {
      src: "/img/sp3000/connect.png",
      alt: "最大20台までの機器をLANケーブルで接続することによって全てのライトをコントロールできます。",
      width: 1000,
      height: 713,
    },
  },
  commercial = {
    img: {
      src: "/img/sp3000/commercial.png",
      alt:
        "個人でのホビー用途から商業施設での本格的な栽培まで多くのお客様に幅広く支持されています。",
      width: 1000,
      height: 1000,
    },
  },
  chip = {
    img: {
      src: "/img/sp3000/chip.png",
      alt: "MARS HYDRO社の製品は本物のSAMSUNG LM301Bチップのみ使用しています。類似品・詐欺商品等にはご注意ください。",
      width: 1000,
      height: 880,
    },
  },
}) {
  return (
    <>
      <Card {...props}>
        <div className="text-left">
          <p className="dosis text-left text-4xl font-extrabold p-4 mb-4">
            {props.img.alt}
          </p>
          <Img {...props} />
        </div>
      </Card>
      <Card {...props}>
        <div className="text-left">
          <p className="dosis text-white text-4xl font-bold p-4 text-left">
            {ppfd.img.alt}
          </p>
          <Img {...ppfd} />
        </div>
      </Card>
      <Card {...props}>
        <div className="text-left">
          <p className="dosis text-white text-4xl font-bold p-4 text-left">
            {harvest.img.alt}
          </p>
          <Img {...harvest} />
        </div>
      </Card>
      <Card {...props}>
        <div className=" bg-black">
          <p
            className="text-left text-4xl font-extrabold p-4 -mb-4"
            style={{ color: "#0DD5A3" }}
          >
            {heatsink.img.alt}
          </p>
          <Img {...heatsink} />
        </div>
      </Card>
      <Card {...props}>
        <div className=" bg-black">
          <p className="dosis text-left text-blue-500 text-4xl font-extrabold p-4 mb-4">
            {connect.img.alt}
          </p>
          <Img {...connect} />
        </div>
      </Card>
      <Card {...props}>
        <div className="text-left">
          <p className="text-white text-4xl font-bold p-4 text-left">
            {commercial.img.alt}
          </p>
          <Img {...commercial} />
        </div>
      </Card>
      <Card {...props}>
        <div className=" bg-black">
          <p className="dosis text-left text-4xl font-extrabold p-4 -mb-4">
            {chip.img.alt}
          </p>
          <Img {...chip} />
        </div>
      </Card>
    </>
  );
}

function Img({ img }) {
  return (
    <div className="mx-auto w-100 text-center">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        className=" rounded-lg"
      />
    </div>
  );
}

function Card({ children, bg, text }) {
  return (
    <div className="bg-black ">
      <div className={`max-w-3xl  mx-auto  py-12 lg:p-4 lg:py-12 ${text}`}>
        <div
          className={`bg-gradient-to-r ${bg.inner} lg:rounded-lg shadow-xl overflow-hidden`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
