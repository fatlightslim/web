import Image from "next/image";
import Link from "next/link";

export default function CardBanner(props) {
  return (
    <Card {...props}>
      <div className="pt-8 pb-12 px-6  sm:px-16 lg:pr-0  xl:px-20">
        <div className="lg:self-center">
          <Header {...props} />
          <Title {...props} />
          <Desc {...props} />
          <Button {...props} />
        </div>
      </div>
      <div className="-mt-6 sm:mt-8 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
        <Img {...props} />
      </div>
    </Card>
  );
}

function Card({ children, bg, text }) {
  return (
    <div className={bg.outer}>
      <div className={`max-w-7xl mx-auto lg:py-12 lg:px-6 lg:px-8 ${text}`}>
        <div
          className={`slide bg-gradient-to-r ${bg.inner} lg:rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4`}
        >
          {children}
        </div>
      </div>
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
      className="sm:rounded-lg"
    />

  );
}

function Button({ button, href }) {
  return (
    <Link href={href}>
      <a className="mt-8 bg-transparent border border-white rounded-full shadow px-4 py-2 inline-flex items-center text-base font-bold">
        {button}
      </a>
    </Link>
  );
}

function Desc({ desc }) {
  return (
    <p className="mt-4 text-lg leading-6 font-bold">
      {desc[1]}
      {desc[2]}
    </p>
  );
}

function Title({ title }) {
  return (
    <h2 className={`text-5xl md:text-6xl font-extrabold  pt-8 pb-4`}>
      <span
        className="block"
        style={{ fontSize: "125%", color: title.color }}
      >
        {title[1]}
      </span>
      <span className="block">{title[2]}</span>
      <span className="block">{title[3]}</span>
    </h2>
  );
}

function Header({ header }) {
  return (
    <header>
      <h3 className="dosis text-xl font-bold">{header}</h3>
    </header>
  );
}

