import siteMetadata from "@/data/siteMetadata"
import SectionContainer from "@/components/SectionContainer"
import HeaderNavLinks from "@/components/HeaderNavLinks"
import Link from "@/components/Link"
import Twemoji from "@/components/Twemoji"

export default function Footer() {
  return (
    <SectionContainer fullWidth={false}>
      <footer className="flex flex-col flex-wrap w-full py-1 mt-8 mb-0 font-serif text-2xl font-bold text-center rounded xl:left-[-1.25rem] sm:left-[-0.25rem] relative sm:text-xl sm:mb-8 sm:flex-row">
        <HeaderNavLinks location={"footer"} />
        <div className="flex justify-center flex-grow py-8 space-x-2 text-gray-900 sm:py-0 sm:justify-end dark:text-gray-100">
          <div className="py-1">{`© ${new Date().getFullYear()}`}</div>
          <div className="py-1 pr-1">
            <Link href="/">{siteMetadata.author}</Link>
          </div>
        </div>
        <div
          key="IEN"
          className="flex items-center justify-between w-full py-1 mx-1 space-x-1 xl:mx-5 xl:justify-start xl:space-x-3"
        >
          <Twemoji emoji="📰" size="w-8 h-8" />
          <Link href="/portfolio#IEN" color="black">
            Subscribe to Iranian Economic News, our free email newsletter
          </Link>
          <Twemoji emoji="📧" size="w-8 h-8" />
        </div>
      </footer>
    </SectionContainer>
  )
}
