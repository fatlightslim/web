import Image from "next/image"
import Link from "next/link"

const Header = ({ header }) => (
  <header className="pt-8 pl-8 dosis">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="pt-4 pl-6 text-5xl md:text-6xl font-extrabold leading-none tracking-normal">
      {/* <span className={title.color} style={{ fontSize: "125%" }}> */}
      <span  style={{ fontSize: "125%", color: title.color }}>
        {title[1]}
      </span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-no-wrap">{title[3]}</span>
    </p>
    <p className="max-w-lg mb-6 lg:mb-12 p-8 my-6 text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-no-wrap">{desc[2]}</span>
    </p>

    <Link href="/">
      <a className="m-6 bg-transparent  rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)

export default function ProductBanner({
  data = {
    header: "CPU",
    title: {
      1: "8コアCPU",
      2: "パワーを誇る",
      3: "チップです。",
      color: "text-purple-400",
    },
    img: {
      src: "/img/m1.png",
      alt: "",
      width: 1566,
      height: 1220,
    },
    desc: {
      1: "M1チップは、MacBook Proをとてつもなく高速でパワフルな一台にします。M1が持つ8コアのCPUは、一世代前のものと比べて処理速度が最大2.8倍。複雑なワークフローや負荷の高い作業もサクサクこなすその速さには、目を見張るでしょう。しかも、何をする時でも、電力効率が信じられないほど優れてい",
      2: "ます。",
    },
    button: "M1が桁違いに速い理由を見る",
    bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    // bg: "from-purple-900 via-pink-700 to-red-700",
  },
}) {
  return (
    <section className="p-3 md:pt-6 md:px-6 bg-black">
      <div
        // className={`text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
        style={{background:  data.bg}}
        className={`text-white rounded-3xl`}
      >
        <Header {...data} />
        <div className="flex flex-col md:flex-row py-12 lg:pb-16 lg:pt-16">
          <div className="md:w-2/3 text-center order-first md:order-last mb-4 lg:mb-0 relative">
            <div className="">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 ">
            <LeftCol {...data} />
          </div>
        </div>
      </div>
    </section>
  )
}
