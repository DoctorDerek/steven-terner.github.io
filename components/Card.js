import Image from 'next/image'
import Link from '@/components/Link'

const Card = ({ alt, src, link, heading, children }) => {
  return (
    <div>
      {src && (
        <div className="relative h-48 max-w-xs m-auto md:h-36">
          <Image
            alt={alt}
            src={src}
            className="object-cover rounded-full"
            layout="fill"
            sizes="33vw"
          />
        </div>
      )}

      <h2 className="py-4 font-serif text-xl font-extrabold">
        <Link href={link} className="no-underline">
          {heading}
        </Link>
      </h2>

      {children}
    </div>
  )
}

export default Card
