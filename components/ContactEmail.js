import Image from "next/image"

export default function ContactEmail({
  data = {
    img: {
      src: "/img/features-drawing-moonlanding.png",
      alt: "Drawing Moonlanding",
      width: 570,
      height: 334,
    },
    h2: {
      title: "お問い合わせ",
      desc:
        "Explain how your solution will solve this problem and ask them to start a free trial, or any other low-key CTA they could take.",
    },
    button: {
      left: "Clear CTA Text",
      right: "View pricing",
      desc: "Reduce Risk: Free 14 day trial",
    },
    quote: {
      img: {
        src: "/img/avatar-1.png",
        alt: "Testimonial Avatar",
        width: 32,
        height: 32,
      },
      name: "Customer Name, CEO of Company Name",
      title:
        "“Powerfull and relevant testimonial of Customer X. This content should focus on the result the product had for this customer or answer a doubt your potential customer could have. ",
    },
  },
}) {
  return (
    <div className="bg-yellow-50 border-t border-yellow-100 rounded-3xl">
      <div className="mx-auto text-center">
        <div className="py-4">
          <div className="lg:w-3/12 mx-auto">
            <div className="mx-auto w-100 w-1/2 lg:w-full ">
              <Image
                src={data.img.src}
                alt={data.img.alt}
                width={data.img.width}
                height={data.img.height}
              />
            </div>
          </div>
        </div>

        <div className="">
          <div className="lg:w-3/6 mx-auto text-center">
            <h2 className="text-2xl md:text-4xl lg:text-4xl font-bold">
              {data.h2.title}
            </h2>
            <div className="m-4">
              <a
                className="bg-red-700 text-white p-2 rounded inline-block my-2 w-full"
                // className="block"
                href="mailto:hello@fatlightslim.com"
                tareget="_blank"
              >
                <span className="px-1 bg-white float-left rounded text-red-600 text-xs ">
                  <svg
                    className="inline-block w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                hello@fatlightslim.com
              </a>
              {/* <a
                target="_blank"
                href="https://twitter.com/messages/compose?recipient_id=1317632177861926917&amp;ref_src=twsrc%5Etfw"
                className="bg-blue-600 text-white p-2 rounded inline-block my-2 w-full"
                data-screen-name="fatlightslim"
                data-show-count="false"
              >
                <span  className="px-2 bg-white float-left rounded">
                  <div >
                    <Image
                      src="/img/logos/twitter.svg"
                      alt=""
                      width={16}
                      height={16}
                    />

                  </div>
                </span>
                @fatlightslim
              </a>
              <script
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              ></script> */}
            </div>

            <p className="text-md md:text-xl lg:text-lg p-4 px-20 md:px-2 pb-8 text-gray-800">
              {data.h2.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
