import Image from "next/image";
import Link from "next/link";

export default function Optimal({props = {
    header: "返品について",
    title: {
      1: "7日間の",
      2: "返品保証を",
      3: "お約束します。",
      color: "#fc2",
    },
    img: {
      src: "/img/sp3000/optimal.png",
      alt: "Optimal SP3000 performance",
      width: 1200,
      height: 534,
    },
    desc: {
      1: "商品到着後3年未満の場合は、商品検証を行い無償または有償での修理・交換を行います。",
      2: "※お客様ご自身の使用による破損や故障は保証対象外となり",
      3: "ます。",
    },
    button: "返品ポリシーを見る",
    href: "/policies",
    bg: {
      outer: "bg-white lg:rounded-lg",
      inner: "bg-black bg-opacity-80",
    },
    text: "text-white"
  }
}) {
  return (
    <Card {...props}>
      <div className="">
        <Img {...props} />
      </div>
      <div className="lg:-mt-12 pt-4 pb-12 px-4 sm:px-16 lg:pr-0  xl:px-20">
        <div className="lg:self-center">
          {/* <Header {...props} /> */}
          <Title {...props} />
          <Desc {...props} />
          {/* {props.button && <Button {...props} />} */}
        </div>
      </div>
    </Card>
  );
}

function Img({img}) {
  return (
    <div className="mx-auto w-100">
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
      />
    </div>
  );
}

function Card({ children, bg, text }) {
  return (
     <div className={bg.outer}>
      <div className={`max-w-7xl mx-auto   ${text}`}>
        <div
          className={`bg-gradient-to-r ${bg.inner} lg:rounded-lg  overflow-hidden shadow`}
        >
          {children}
        </div>
      </div>
     </div>
  );
}



function Desc({ desc }) {
  return (
    <p className="mt-4 text-lg leading-6 font-bold">
      {desc[1]}
      <small>{desc[2]}<span className="whitespace-nowrap">{desc[3]}</span></small>
      
    </p>
  );
}

function Title({ title }) {
  return (
    <h2 className={`-mt-14 text-4xl md:text-5xl font-extrabold  pt-8 pb-4`}>

      当店は
      <span className="dosis block" style={{ color: title.color }}>
        {/* {title[1]} */}
        MARS HYDRO
      </span>
      公式代理店です。
      {/* <span className="block" style={{ fontSize: "125%", color: title.color }}>
        {title[1]}
      </span>
      <span className="block">{title[2]}</span>
      <span className="block">{title[3]}</span> */}
    </h2>
  );
}

