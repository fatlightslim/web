import Link from "next/link"

export default function Logo({ className }) {
  let classes = "dosis text-2xl"
  if (className) classes += ` ${className}`
  return (
    <Link href="/">
      <a className={classes}>FAT Light SLIM</a>
    </Link>
  )
}
