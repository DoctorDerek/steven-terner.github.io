import siteMetadata from "@/data/siteMetadata"
import Link from "@/components/Link"
import SocialIcon from "@/components/social-icons"
import Image from "@/components/Image"

const AboutSidebarHomePage = () => (
  <div className="flex flex-col items-center max-w-sm px-2 py-12 mx-auto space-y-12 border-2 border-gray-800 border-solid text-md rounded-3xl sm:col-span-3 sm:border-0 sm:py-0 sm:px-0">
    <h2 className="font-serif text-4xl font-bold text-center sm:text-3xl sm:py-4 md:text-4xl">
      Steven Terner, LLC
    </h2>
    <div className="flex w-full space-x-2 justify-evenly">
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
  </div>
)

// photo layout only used on About page
const AboutSidebar = ({ photo = false }) => {
  if (photo) {
    return (
      <>
        <div className="hidden md:block">
          <div className="flex flex-col items-center max-w-sm mx-auto space-y-12 rounded-3xl">
            <div className="grid w-48 h-48 border-2 border-gray-800 border-solid rounded-full lg:w-60 lg:h-60 xl:w-72 xl:h-72">
              <Image
                alt="ocean"
                src="/static/images/StevenTernerPhoto2-cropped.jpg"
                className="rounded-full"
                sizes="portrait"
              />
            </div>
            <AboutSidebarHomePage />
          </div>
        </div>
        <div className="flex flex-col items-center w-full max-w-sm px-2 py-12 mx-auto mt-12 space-y-12 border-2 border-gray-800 border-solid rounded-3xl md:hidden">
          <h2 className="font-serif text-4xl font-bold text-center sm:py-4">
            Steven Terner, LLC
          </h2>
          <div className="flex flex-wrap w-full justify-evenly sm:justify-center md:justify-evenly sm:space-x-6">
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
        </div>
      </>
    )
  }
  return <AboutSidebarHomePage />
}

export default AboutSidebar
