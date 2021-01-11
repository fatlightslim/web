import { products } from "../data/products";
import Link from "next/link";
import Image from "next/image";
import BlogBanner from "./BlogBanner";
import Contact from "./Contact";
import Optimal from "./Optimal";
const productsSorted = [1, 0, 3, 2, 4]

function Product({ title, img, bg, desc, button, header, href }) {
  return (
    <div className="max-w-7xl mx-auto mt-2">
      <div
        className={`rounded-xl shadow-xl overflow-hidden bg-gradient-to-r ${bg.inner}`}
      >
        <div className="pt-10 pb-12 px-6 sm:p-8 lg:p-4">
          <div className="lg:self-center">
            <header>
              <h3 className="dosis text-white text-xl font-bold">{header}</h3>
            </header>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
              <span
                className="block text-5xl: md:text-6xl"
                style={{ fontSize: "130%", color: title.color }}
              >
                {title[1]}
              </span>
              <span className="block">{title[2]}</span>
              <span className="block">{title[3]}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-white font-bold">
              {desc[1]}
              {desc[2]}
            </p>
            <Link href={href}>
            <a
              
              className="mt-8 bg-transparent border border-white rounded-full shadow px-4 py-2 inline-flex items-center text-base font-bold text-white"
            >
              {button}
            </a>
            </Link>
          </div>
        </div>
        <div className="-mt-8 mx-2 lg:m-8">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
          />
        </div>
      </div>
    </div>
  );
}

export default function RelatedProducts2({}) {
  return (
    <section className="bg-gray-200 md:pt-4 md:pb-0 dosis">
         <div className="sm:grid sm:grid-cols-3 gap-2 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 px-2 py-1 ">
          {[1, 0, 3].map((v) => {
            return <Product key={v} {...products[v]}  />
          })}
        </div>
        <div className="sm:grid sm:grid-cols-2 gap-2 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 px-2 py-1">
          {[2, 4].map((v) => {
            return <Product key={v} {...products[v]}  />
          })}
        </div>
      {/* <div className="grid lg:grid-cols-3 gap-2 bg-gray-200 p-2 md:pt-4 md:pb-0 dosis">
        {productsSorted.map((index) => (
          <Product key={index} {...products[index]} />
        ))}
      </div> */}

      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-2">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
    </section>
  );
}
