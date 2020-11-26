import '../styles/index.css'
import "slick-carousel/slick/slick.css";
import "../styles/slick-theme.css";
import { useRouter } from 'next/router'
import * as gtag from '../scripts/gtag'
import { useEffect } from 'react'

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return <Component {...pageProps} />
}

export default App
