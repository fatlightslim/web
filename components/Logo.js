import Link from "next/link"
import Image from "next/image"

export default function Logo({ className, name = process.env.site.name }) {
  let classes = "dosis text-2xl "
  if (className) classes += ` ${className}`
  return (
    <Link href="/">
      <a className={classes}>
        <div className="w-9 inline-block -ml-3 align-middle -mb-0.5 mr-1">
          <Image
            width={200}
            height={166}
            alt="FATLightSLIM logo"
            src="/img/jd/FatLightSlim.png"
          />
        </div>

        {name}
      </a>
    </Link>
  )
}
