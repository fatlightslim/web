import Slider from "react-slick";
import ProductBanner from "../components/ProductBanner"
import CallToAction3 from "../components/CallToAction3"
import { products } from "../data/products"
import { data } from "../data/home"
import Hero from "./Hero";

export default function ProductCarousel({ settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplaySpeed: 5000,
  autoplay: true
} }) {
  const [clicked, setClicked] = React.useState(false)
  const props = { setClicked }
  return !clicked ? (
    <Slider {...settings}>
      <Hero data={data.Hero} {...props} />
      {products.map((data, index) => (
        <ProductBanner key={index} data={data} />
      ))}
    </Slider>
  ) : (
      products.map((data, index) => (
        <ProductBanner key={index} data={data} />
      ))

    )
}