import siteMetadata from "@/data/siteMetadata"
import Link from "@/components/Link"
import SocialIcon from "@/components/social-icons"
import Image from "@/components/Image"

const AboutSidebar = ({ photo = false }) => (
  <div className="flex flex-col items-center justify-between col-span-1 py-12 space-y-12 border-2 border-gray-800 border-solid text-md sm:py-0 sm:space-y-0 rounded-3xl sm:col-span-3 sm:border-0">
    {photo && (
      <div className="grid grid-cols-1 w-72 h-72">
        <Image
          alt="ocean"
          src="/static/images/StevenTernerPhoto2-cropped.jpg"
          className="rounded-full"
          sizes="portrait"
        />
      </div>
    )}
    <h2 className="font-serif text-4xl font-bold text-center sm:text-3xl sm:py-4 md:text-4xl">
      Steven Terner
    </h2>
    <div className="flex flex-wrap justify-center space-x-4 sm:py-12">
      <SocialIcon kind="email" href={`mailto:${siteMetadata.email}`} />
      <SocialIcon kind="medium" href={siteMetadata.medium} />
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} />
    </div>
    <div className="sm:py-4">
      <Link href="/about" className="text-white">
        <div className="px-4 py-2.5 mx-auto font-bold text-center rounded text-md bg-green-dark hover:bg-green-light hover:text-black">
          Get in touch!
        </div>
      </Link>
    </div>
  </div>
)

export default AboutSidebar
