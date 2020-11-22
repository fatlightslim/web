
import Image from "next/image"
import Link from "next/link"


export default function Delivery({
  data = {
    header: "配送について",
    title: {
      1: "送料無料",
      2: "で世界中に",
      3: "お届けします。",
      color: "#999",
    },
    img: {
      src: "/img/delivery.png",
      alt: "",
      width: 1150,
      height: 1171,
    },
    desc: {
      1: "配送コストを抑え低価格で商品を提供するため、ご注文から到着まで7〜10日程度のお時間を頂戴することをあらかじめご了承くださいますようお願いいたします。 ご購入後、追跡番号をメールにてお送りいたします。配送状況については、当該サイトで随時ご確認いただくことが可能",
      2: "です。",
    },
    button: "配送ポリシーを見る",
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    bg: "from-gray-100  to-white",
  },
}) {
  return (
    <section className="md:py-4 md:px-2 bg-gray-200">
      <div
        className={`bg-white md:rounded-3xl max-w-screen-xl p-8 mx-auto bg-gradient-to-r ${data.bg}`}
      >
        <Header {...data} />
        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1">
            <LeftCol {...data} />
          </div>

          <div className="md:col-span-1">
            <div className="mt-8 md:mt-0 max-w-md">
              <Image
                src={data.img.src}
                width={data.img.width}
                height={data.img.height}
                alt={data.img.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Header = ({ header }) => (
  <header className="dosis pb-8">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-5xl md:text-6xl font-extrabold leading-none tracking-normal whitespace-nowrap">
      <span style={{ fontSize: "115%", color: title.color }}>
        {title[1]}
      </span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-nowrap">{title[3]}</span>
    </p>
    <p className="py-8 max-w-lg lg:mb-4  text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-nowrap">{desc[2]}</span>
    </p>

    <Link href="/policies">
      <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
        {button}
      </a>
    </Link>
  </>
)