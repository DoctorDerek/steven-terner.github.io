import Image from "next/image"
import Link from "@/components/Link"

const Card = ({ alt, src, link, heading, children }) => {
  return (
    <div className="py-8 md:px-3 sm:px-4 sm:first:pl-0 sm:first:pr-4 sm:last:pl-4 sm:last:pr-0 md:first:pr-3 md:last:pl-3 sm:py-0">
      {src && (
        <div className="relative max-w-xs m-auto h-36">
          <Image
            alt={alt}
            src={src}
            className="object-cover rounded-full"
            layout="fill"
            sizes="33vw"
          />
        </div>
      )}

      <h2 className="py-4 font-serif text-2xl font-bold text-center md:text-3xl">
        <Link href={link} className="no-underline">
          {heading}
        </Link>
      </h2>

      <p className="text-lg xl:text-xl">{children}</p>
    </div>
  )
}

export default Card
