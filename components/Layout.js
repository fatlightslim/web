import Nav from './Nav'
import Head from "next/head"
import Footer from "./Footer"

export default function Layout({
  children,
  title = "This is the default title",
}) {
  return (
    <div className="mx-auto antialiased">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />

      {children}

      <Footer />
    </div>
  )
}
