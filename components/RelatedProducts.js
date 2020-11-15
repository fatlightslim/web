import { products } from "../data/products"
import Link from "next/link"
// import Image from "next/image"
// import ContactForm from "./ContactForm"
// import CallToAction2 from "./Cta2"
import ContactEmail from "./ContactEmail"
import BlogBanner from "./BlogBanner"

const LeftCol = ({ title, desc, button }) => (
  <>
    <p className="text-4xl md:text-6xl font-extrabold leading-none tracking-normal">
      <span className={title.color} style={{ fontSize: "125%" }}>
        {title[1]}
      </span>
      <br />
      {title[2]}
      <br />
      <span className="whitespace-no-wrap">{title[3]}</span>
    </p>

    <p className="max-w-lg mt-8 mb-12 text-6 md:text-xl font-bold leading-tight tracking-normal">
      {desc[1]}
      <span className="whitespace-no-wrap">{desc[2]}</span>
    </p>

      <Link href="/">
        <a className="bg-transparent rounded-full font-semibold  py-2 px-4 border-2">
          {button}
        </a>
      </Link>
  </>
)

export default function RelatedProducts() {
  return (
    <div className="bg-black py-3">
      <div className="grid grid-cols-1 md:grid-cols-2 g-0">
        {products.map((data, index) => {
          return (
            <section className="p-3" key={index} >
              {/* <div className="absolute right-0 mr-8 mt-6 w-1/3">
                <Image
                  src={data.img.src}
                  width={data.img.width}
                  height={data.img.height}
                  alt={data.img.alt}
                />
              </div> */}
              <div
                className={`p-8 text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
              >
                <header className="dosis">
                  <h3 className="text-xl font-bold">{data.header}</h3>
                </header>
                <LeftCol {...data} />
              </div>
            </section>
          )
        })}
        <section className="p-3">
            <ContactEmail />
        </section>
        <section className="p-3">
            <BlogBanner />
        </section>
      </div>
    </div>
  )
}
