import { products } from "../data/products"
import Image from "next/image"
import BlogBanner from "./BlogBanner"
import ContactEmail from "./ContactEmail"

function Product({ title, img, bg, desc, button, header }) {
  return (
      <div className="max-w-7xl mx-auto">
        <div style={{ background: bg }} className="rounded-xl shadow-xl overflow-hidden ">
          <div className="pt-10 pb-12 px-6 sm:p-8 lg:p-4">
            <div className="lg:self-center">
              <header>
                <h3 className="dosis text-white text-xl font-bold">{header}</h3>
              </header>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                <span className="block text-5xl: md:text-6xl" style={{ fontSize: '130%', color: title.color }}>{title[1]}</span>
                <span className="block">{title[2]}</span>
                <span className="block">{title[3]}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white font-bold">{desc[1]}{desc[2]}</p>
              <a href="#" className="mt-8 bg-transparent border border-white rounded-full shadow px-4 py-2 inline-flex items-center text-base font-bold text-white">{button}</a>
            </div>
          </div>
          {/* <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1"> */}
          <div className="-mt-8 mx-2 lg:m-8">
            <Image
              // className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20 "
              src={img.src}
              width={img.width}
              height={img.height}
              alt={img.alt}
            />
          </div>
        </div>
      </div>
  )
}

export default function RelatedProducts2({ }) {
  return (
    <section className="grid lg:grid-cols-3 gap-4 bg-gray-100 p-2 md:py-4">
      {products.map((data, index) => <Product key={index} {...data} />)}
      <BlogBanner />
      <ContactEmail />
    </section>

  )
}