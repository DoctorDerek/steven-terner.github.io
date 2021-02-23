import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import FooterNav from "./FooterNav"
import SectionContainer from "./SectionContainer"

export default function Footer() {
  return (
    <SectionContainer>
      <footer className="flex flex-row w-full mt-16 xl:text-lg md:text-md sm:flex sm:text-sm">
        <div className="flex flex-grow mb-2 space-x-2 text-gray-900 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <Link href="/">{siteMetadata.author}</Link>
        </div>
        <div className="mb-8 text-sm">
          <FooterNav />
        </div>
      </footer>
    </SectionContainer>
  )
}
