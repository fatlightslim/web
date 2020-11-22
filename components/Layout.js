import Nav from "./Nav2"
import Head from "next/head"
import Footer from "./Footer"

export default function Layout({
  children,
  data = {
    title: `植物用LEDライト専門店 ${process.env.site.name}`,
    desc:
      "海外で人気の植物栽培用ライトを安心価格で安全にお届けします。ホビー用途から商用向けまでお取り扱い中！MARS HYDRO公式代理店。中古LEDライトの買取も随時受付中。",
    href: process.env.url,
    color: "#006eff",
    img:
      "http://cdn.shopify.com/s/files/1/0470/9089/2956/files/Screen_Shot_2020-11-14_at_17.52.16_1200x1200.png?v=1605489192",
    og: {
      site_name: process.env.site.name,
      type: "website",
    },
    tw: {
      card: "summary_large_image",
    },
  },
}) {
  return (
    // <div className="mx-auto">
    <>
      <Head>
        <title>{data.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content={data.color} />
        <meta name="description" content={data.desc} />
        <link rel="canonical" href={data.href} />
        <meta property="og:site_name" content={data.og.site_name} />
        <meta property="og:url" content={data.href} />
        <meta property="og:title" content={data.title} />
        <meta property="og:type" content={data.og.type} />
        <meta property="og:description" content={data.desc} />

        <meta property="og:image" content={data.img} />
        <meta property="og:image:secure_url" content={data.img} />

        <meta name="twitter:card" content={data.tw.card} />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.desc} />
      </Head>
      <Nav />

      {children}

      <Footer  />
    </>
  )
}
