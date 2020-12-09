
import ScrollTrigger from "react-scroll-trigger";
import { products } from "../../../data/products";
import Layout from "../../../components/Layout";
import Delivery from "../../../components/Delivery";
import Refund from "../../../components/Refund";
import CartButton from "../../../components/CartButton";
import CardBanner from "../../../components/CardBanner";
import BlogBanner from "../../../components/BlogBanner";
import Contact from "../../../components/Contact";
import Video150 from "../../../components/Video150";
import Size150 from "../../../components/Size150";
import Optimal from "../../../components/Optimal";
import Spectrum from "../../../components/Spectrum";
import CompareTable150 from "../../../components/CompareTable150";
import { createCheckout } from "../../../scripts/shopify"

export default function MarsHydroSp3000(props) {
 const [url, setUrl] = React.useState('/')
  
  React.useEffect(() => {
    async function getUrl() {
     const url = await createCheckout(process.env.sp3000)
    // console.log(url);
    setUrl(url)
     }
     getUrl()
  },[])

  const sp150 = products[1];
  sp150.bg.outer = "bg-gray-800";
  const [visible, setVisible] = React.useState(false);
  return (
    <Layout visible={visible} className="pb-24 lg:pb-0">
      <CardBanner {...sp150} button={false} />
      <Video150 />

      <div className="bg-black">
        <div className="max-w-7xl mx-auto bg-black ">
          <Spectrum />
        </div>
      </div>
      <Size150 />

      <Delivery />
      {/* <ReviewBanner /> */}
      <Refund />
      <ScrollTrigger
        onEnter={({progress, velocity}) => {
          setVisible(true);
        }}
        onExit={() => setVisible(false)}
      >
        <CompareTable150 visible={visible} url={url} />
      </ScrollTrigger>
      <div className="grid lg:grid-cols-3 gap-0 md:gap-2 bg-gray-200 md:p-2 md:py-4">
        <BlogBanner />
        <Optimal />
        <Contact />
      </div>
      <CartButton visible={visible} url={url} />
    </Layout>
  );
}

