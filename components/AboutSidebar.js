import siteMetadata from "@/data/siteMetadata"
import Link from "@/components/Link"
import SocialIcon from "@/components/social-icons"
import Image from "@/components/Image"
import { useCurrentPath } from "@/components/useCurrentPath"

const AboutSidebarHomePage = () => {
  const currentPagePath = useCurrentPath()
  return (
    <div className="flex flex-col items-center justify-between max-w-sm px-2 py-12 mx-auto space-y-12 border-2 border-gray-800 border-solid sm:px-8 rounded-3xl md:col-span-3 md:border-0 md:py-0 md:px-0">
      <h2 className="font-serif text-4xl font-bold text-center sm:py-4">
        Steven Terner, LLC
      </h2>
      <div className="flex w-full space-x-2 justify-evenly">
        <SocialIcon kind="email" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="medium" href={siteMetadata.medium} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} />
      </div>
      <div>
        <Link
          href={
            currentPagePath.includes("/contact")
              ? "/contact#get-in-touch"
              : "/contact"
          }
          className="text-gray-100"
        >
          <div className="px-4 py-2.5 mx-auto font-bold text-center rounded text-base bg-green-dark border-transparent border-2 border-solid hover:border-gray-100 hover:underline">
            Get in touch
          </div>
        </Link>
      </div>
    </div>
  )
}

const AboutSidebar = ({ photo = false }) => {
  // photo layout only used on About page
  if (photo) {
    return (
      <>
        <div className="hidden md:block">
          <div className="flex flex-col items-center max-w-sm px-2 py-12 mx-auto space-y-12 border-2 border-gray-800 border-solid sm:px-8 rounded-3xl md:col-span-3 md:border-0 md:py-0 md:px-0">
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
        <div className="md:hidden">
          <AboutSidebarHomePage />
        </div>
      </>
    )
  }
  // every other page, including Home
  return <AboutSidebarHomePage />
}

export default AboutSidebar
