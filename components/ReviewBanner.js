import Image from "next/image"
import { reviews } from "../data/reviews"
import Slider from "react-slick";

const Header = ({ header }) => (
  <header className="dosis mb-8">
    <h3 className="text-xl font-bold">{header}</h3>
  </header>
)

const LeftCol = ({ title, img, button }) => (
  <>
    <p className="text-3xl font-bold tracking-normal  md:pr-24">
      <span style={{  color: title.color }}>
        {title[1]}
        {title[2]}
      {/* <br /> */}
      {title[3]}
      </span>
    </p>
    <div className="mt-12 md:mt-0 max-w-xs">
      <Image
        src={img.src}
        width={img.width}
        height={img.height}
        alt={img.alt}
      />
    </div>

  </>
)

export default function ReviewBanner({
  data = {
    header: "お客様の声",
    title: {
      1: "Amazonレビュー",
      3: "9割以上のお客様にご満足の評価をいただいております！",
      2: "2,000件越え！",
      color: "#555",
    },
    img: {
      src: "/img/custome-review.png",
      alt: "Customer Review, カスタマーレビュー",
      width: 1000,
      height: 666,
    },
    // bg: "linear-gradient(to right top, #071931 0%, #33274f 50%, #661e43 100%)",
    // // bg: "from-purple-900 via-pink-700 to-red-700",
  },
  settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,

  }
}) {
  return (

    <section className="md:py-4 md:px-2 bg-white">
      <div
        // className={`text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
        // style={{ background: data.bg }}
        // style={{ background: data.bg, minHeight: 766 }}
        className="bg-white md:rounded-3xl max-w-screen-xl p-8 mx-auto"
      >
        <Header {...data} />

        <div className="grid md:grid-cols-2 mx-auto gap-0">
          <div className="md:col-span-1">
            <LeftCol {...data} />
          </div>

          <div className="md:col-span-1 w-full">
            <Slider {...settings}>
              {reviews.map((item) => (
                <Review key={item.img} item={item} />
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </section>
  )
}


function Review({ item }) {
  return (
    <>
      <div className="mt-8 md:mt-0">
        <Image
          src={item.img}
          width={1340}
          height={365}
          alt={item.lead}
        />
      </div>
      <div className={`col-sm-6 ${item.bg}  align-self-center`}>
        <p className="font-bold">
          {item.lead}
        </p>
        <p className="pl-5 pr-5 text-black">
          {item.lead2}
        </p>
      </div>
     </>

  )
}