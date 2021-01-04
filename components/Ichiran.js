import { urlObjectKeys } from "next/dist/next-server/lib/utils";
import Image from "next/image";
import { ichirandata } from "../data/ichirandata";

function Header(params) {
  return (
    <div className="sm:flex sm:flex-col sm:align-center">
      <h1 className="text-4xl font-extrabold text-black text-center">
        栽培スタイルによって選べる色々な機種！
      </h1>
      <p className="mt-5 text-xl text-gray-400 text-center">
        趣味用の小さいライトからグリーンハウスでも使える高機能ライトまで。
      </p>
    </div>
  );
}

function Img({ img }) {
  return (
    <Image
      src={img.src}
      width={img.width}
      height={img.height}
      alt={img.alt}
      className="sm:rounded"
    />
  );
}

function Card({ short, shortTitle, price, button, img }) {
  return (
    <td className="h-full py-8 px-6 align-top">
      <div className="relative h-full table">
        <Img img={img} />
        <p>
          <span className="text-4xl font-extrabold text-gray-900">
            ￥{price.sale}
          </span>
          <span className="text-base font-medium text-gray-500 line-through">
            ￥{price.regular}
          </span>
        </p>
        <p className="mt-4 mb-16 text-sm text-gray-500">{short}</p>
        <a
          href="#"
          className="absolute bottom-0 flex-grow block w-full bg-gray-800 border border-gray-800 rounded-md 5 py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >
          {button}
        </a>
      </div>
    </td>
  );
}

function Mobile({ short, shortTitle, price, img, button }) {
  return (
    <div className="max-w-2xl mx-auto lg:hidden">
      <div className="px-4">
        <Img img={img} />
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          {shortTitle}
        </h2>
        <p className="mt-4">
          <span className="text-4xl font-extrabold text-gray-900">
            ￥{price.sale}
          </span>
          <span className="text-base font-medium text-gray-500 line-through">
            ￥{price.regular}
          </span>
        </p>
        <p className="mt-4 text-sm text-gray-500">{short}</p>
        <a
          href="#"
          className="mt-6 block border border-gray-800 rounded-md bg-gray-800 w-full py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
        >
          {button}
        </a>
      </div>
    </div>
  );
}

export default function Ichiran({ urls }) {
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto bg-white py-16 sm:py-24 sm:px-6 lg:px-8">
          {/* xs to lg */}
          <Mobile {...ichirandata[0]} />
          <Mobile {...ichirandata[1]} />
          <Mobile {...ichirandata[2]} />
          <Mobile {...ichirandata[3]} />
          <Mobile {...ichirandata[4]} />
          <Mobile {...ichirandata[5]} />
          <Mobile {...ichirandata[6]} />
        </div>
        {/* lg+ */}
        <div className="hidden lg:block">
          <Header />
          <table className="w-full h-px table-fixed">
            <caption className="sr-only">Pricing plan comparison</caption>

            <tbody className="divide-y divide-gray-200">
              <tr>
                <Card {...ichirandata[0]} />
                <Card {...ichirandata[1]} />
                <Card {...ichirandata[2]} />
                <Card {...ichirandata[3]} />
              </tr>

              <tr>
              <Card {...ichirandata[4]} />
              <Card {...ichirandata[5]} />
              <Card {...ichirandata[6]} />
              <Card {...ichirandata[7]} />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
