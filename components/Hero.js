import Image from "next/image"
import Link from "next/link"

export default function Hero({
  data = {
    h1: {
      title: "Clear headline that explains your products main benefit",
      desc:
        "Explain your unique solution in short and how it solves a problem your customer has.",
      tags: () => (
        <span>Clear headline that explains your products main benefit</span>
      ),
    },
    button: {
      title: "Clear CTA Text",
      desc: "Reduce Risk: Free 14 day trial",
    },
    img: {
      src: "/img/hero-device.png",
      alt: "Hero Device",
      width: 1712,
      height: 1016,
    },
    logo: {
      title: "Join 1,000+ software businesses who use SaasFolio daily",
    },
  },
  setClicked
}) {
  return (
    // <div
    //   className="w-full bg-no-repeat bg-cover bg-center"
    //   style={{
    //     backgroundImage: "url(/img/lights.jpg)",
    //   }}
    // >

    <div className="w-full slide">
      <div className="slide" style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        // minHeight: 768,
        overflow: 'hidden',
        zIndex: -1
      }}>
        <Image
          src="/img/main.jpg"
          alt="main background"
          // width={1280}
          // height={853}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container mx-auto py-8 ">
        <div className="px-2 py-8 text-center md:w-4/5 mx-auto bg-black bg-opacity-90 rounded-2xl">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <data.h1.tags />
          </h1>
          <p className="text-xl py-4 max-w-screen-md mx-auto text-gray-50">{data.h1.desc}</p>
          <div className="flex justify-center items-center flex-col">
            {/* <Link href="/"> */}
              <a onClick={() => setClicked(true)}
              href="#"
              className="bg-yellow-400 hover:bg-yellow-500 rounded border border-yellow-500 shadow font-semibold px-6 py-2 inline-block transition duration-500 ease-in-out cursor-pointer text-xl">
                {data.button.title}
              </a>
            {/* </Link> */}
            <small className="capitalize mt-2 text-gray-200">
              {data.button.desc}
            </small>
          </div>
        </div>

        {/* <div className="text-center ">
          <div className="">
            <div className="w-5/6 sm:col-4/6 w-4/5 lg:w-full mx-auto">
              <div className="md:max-w-xl lg:max-w-4xl mx-auto z-10 relative">
                <Image
                  src={data.img.src}
                  alt={data.img.alt}
                  width={data.img.width}
                  height={data.img.height}
                />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}