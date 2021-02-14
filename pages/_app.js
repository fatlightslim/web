import "../styles/index.css"
import "slick-carousel/slick/slick.css"
import "../styles/slick-theme.css"
import "video-react/dist/video-react.css"
import "animate.css/animate.min.css"

// import { MDXProvider } from "@mdx-js/react"
import { useRouter } from "next/router"
import * as gtag from "../scripts/gtag"
import { useEffect } from "react"
import Card from "../components/tailwindui/Card"

const components = {
  card: Card,
}

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    // <MDXProvider components={components}>
      <Component {...pageProps} />
    // </MDXProvider>
  )
}

export default App
