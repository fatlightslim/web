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
      src: "/img/sp150/spectrum-150.png",
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
      src: "/img/sp150/multi2.png",
      alt:
        "軽くてシンプルな本体でどこにでも掛けられる。ひとり暮らしの部屋でも簡単設置。見た目はシンプルだけど、明るさにきっと驚きます。",
      width: 1000,
      height: 1000,
    },
  },
  ppfd = {
    img: {
      src: "/img/sp150/waterproof.png",
      alt:
        "IP65準拠の防水性能。高湿度な栽培環境にも耐えうる設計です。",
      width: 1000,
      height: 900,
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
      src: "/img/sp150/multi.png",
      alt: "全ての植物、全ての成長ステージにぴったりの光。その秘訣は322個のSMD LEDチップ。もう冬や梅雨にも大丈夫です。",
      width: 1000,
      height: 900,
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
      src: "/img/sp150/kantan.png",
      alt: "直観的な設置方法。スタートに必要なものは全て入ってます。",
      width: 1000,
      height: 1000,
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
            className="text-left text-4xl text-white font-extrabold p-4 -mb-4">
            {heatsink.img.alt}
          </p>
          <Img {...heatsink} />
        </div>
      </Card>
      <Card {...props}>
        <div className=" bg-black">
          <p className="dosis text-left text-white text-4xl font-extrabold p-4 mb-4">
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
