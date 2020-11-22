import { data } from "autoprefixer"
import Image from "next/image"

const benefits = [
  {
    img: "dimmable",
    alt: "",
    txt1: "調光機能付き",
    txt2: "Short text to support claim",
  },
  {
    img: "daisy",
    alt: "",
    txt1: "20台まで接続",
    txt2: "Short text to support claim",
  },
  {
    img: "chip",
    alt: "",
    txt1: "最新版LEDチップ",
    txt2: "Short text to support claim",
  },
  {
    img: "ip65",
    alt: "",
    txt1: "IP65の防水性能",
    txt2: "Short text to support claim",
  },
  {
    img: "yield",
    alt: "",
    txt1: "収穫量が増大",
    txt2: "Short text to support claim",
  },
  {
    img: "noiseless",
    alt: "",
    txt1: "0ノイズ構造",
    txt2: "Short text to support claim",
  },

]
export default function FeatureSummary({
  data = {
    h2: {
      title: "「お値段以上の価値」を提供できる機能を常にアップデートし続けます。"
    }
  }
}) {
  return (
    <div className="bg-white md:text-left py-16 px-4  text-green-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl  font-bold mb-16">
          {data.h2.title}
        </h2>

        <div  className="grid grid-cols-3">

          {benefits.map((v, i) => {
            return (
              <div key={i} className="co">
                <div className="w-full py-2 mx-auto lg:mx-0">
                  <Image src={`/img/${v.img}.png`} alt={v.img} width={60} height={60} className="w-1/2" />
                </div>

                <div className="mb-8">
                  <h4 className="font-bold ">{v.txt1}</h4>
                  {/* <p className="mb-0">{v.txt2}</p> */}
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </div>
  )
}
