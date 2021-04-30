import siteMetadata from "@/data/siteMetadata"
import Link from "@/components/Link"
import SocialIcon from "@/components/social-icons"
import Image from "@/components/Image"

const AboutSidebarInner = () => (
  <>
    <h2 className="font-serif text-4xl font-bold text-center sm:text-3xl sm:py-4 md:text-4xl">
      Steven Terner, LLC
    </h2>
    <div className="flex flex-wrap w-full justify-evenly sm:py-12">
      <SocialIcon kind="email" href={`mailto:${siteMetadata.email}`} />
      <SocialIcon kind="medium" href={siteMetadata.medium} />
      <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
      <SocialIcon kind="twitter" href={siteMetadata.twitter} />
    </div>
    <div className="sm:py-4">
      <Link href="/about" className="text-gray-100">
        <div className="px-4 py-2.5 mx-auto font-bold text-center rounded text-md bg-green-dark hover:bg-green-light hover:text-gray-900">
          Get in touch!
        </div>
      </Link>
    </div>
  </>
)

// photo layout only used on About page
const AboutSidebar = ({ photo = false }) => {
  const AboutSidebarNormal = () => (
    <div className="flex flex-col items-center max-w-sm px-2 py-12 mx-auto space-y-12 border-2 border-gray-800 border-solid text-md rounded-3xl sm:col-span-3 sm:border-0 sm:py-0 sm:px-0">
      <AboutSidebarInner />
    </div>
  )
  if (photo) {
    return (
      <>
        <div className="hidden md:block">
          <div className="flex flex-col items-center max-w-sm mx-auto space-y-12 border-2 border-gray-800 border-solid text-md rounded-3xl sm:col-span-3 sm:border-0">
            <div className="grid w-72 h-72">
              <Image
                alt="ocean"
                src="/static/images/StevenTernerPhoto2-cropped.jpg"
                className="rounded-full"
                sizes="portrait"
              />
            </div>
            <AboutSidebarInner />
          </div>
        </div>
        <div className="md:hidden">
          <AboutSidebarNormal />
        </div>
      </>
    )
  }
  return <AboutSidebarNormal />
}

export default AboutSidebar
