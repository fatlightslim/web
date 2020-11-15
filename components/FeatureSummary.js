import Image from "next/image"

const benefits = [
  {
    img: "icon-settings.png",
    alt: "",
    txt1: "First main product benefit",
    txt2: "Short text to support claim",
  },
  {
    img: "icon-star.png",
    alt: "",
    txt1: "Second main product benefit",
    txt2: "Short text to support claim",
  },
  {
    img: "icon-idea.png",
    alt: "",
    txt1: "Third main product benefit",
    txt2: "Short text to support claim",
  },
  {
    img: "icon-user.png",
    alt: "",
    txt1: "Foursth main product benefit",
    txt2: "Short text to support claim",
  },
]

export default function FeatureSummary() {
  return (
    <div className="bg-gray-100 text-center md:text-left py-16 px-4">
      <div className="container mx-auto">
        <div className="pb-4 lg:pb-8">
          <div className="lg:w-full text-center">
            <h2 className="text-2xl md:text-4xl font-bold">
              Summarize your products main benefits
            </h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap">
          {benefits.map((v,i) => {
            return (
              <div key={i} className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                <div className="w-10 lazy self-start py-2 mx-auto lg:mx-0 loaded">
                  <Image src={`/img/${v.img}`  } alt="Benefit Icon" width={40} height={50} />
                </div>

                <div>
                  <h4 className="mb-0 font-bold">{v.txt1}</h4>
                  <p className="mb-0">{v.txt2}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex  flex-col md:flex-row md:flex-wrap my-4">
          {[...Array(6)].map((v, i) => {
            return (
              <div key={i} className="w-full lg:w-1/4 md:w-1/2 text-center lg:text-left mt-4 flex flex-col justify-between">
                <div className="w-6 self-start py-2 mx-auto lg:mx-0 ">
                  <Image src="/img/icon-idea.png" alt="Benefit Icon" width={40} height={50} />
                </div>

                <div>
                  <h4 className="mb-0 font-bold">Another claim</h4>
                  <p className="mb-0">Short text to support claim</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
