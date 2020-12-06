import Image from "next/image"
import { reviews } from "../data/nayami"
import Slider from "react-slick";





export default function ReviewBanner({
 
  settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,

  }
}) {
  return (

    <section className="md:py-4 md:px-2 bg-gray-50 flex justify-center">
      <div
        // className={`text-white rounded-3xl bg-gradient-to-r ${data.bg}`}
        // style={{ background: data.bg }}
        // style={{ background: data.bg, minHeight: 766 }}
        className="bg-gray-50 md:rounded-3xl max-w-screen-xl p-8 mx-auto flex justify-center"
      >
      

        <div className="mx-auto gap-0">
         
          <div className="md:col-span-1 w-full">
            <Slider {...settings}>
              {reviews.map((item) => (
                <Review key={item.img} item={item} />
              ))}
            </Slider>

          </div>
        </div>
      </div>
    </section>
  )
}



function Review({ item }) {
  return (
    <>
    <div className="flex justify-center">
    
      <div className={`col-sm-6 ${item.bg}  align-self-center`}>
        
        <p className="pl-4 pr-4 text-black font-bold">
          {item.lead2}
        </p>
      </div>
      </div>
     </>

  )
}