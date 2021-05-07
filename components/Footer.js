import siteMetadata from "@/data/siteMetadata"
import SectionContainer from "@/components/SectionContainer"
import HeaderNavLinks from "@/components/HeaderNavLinks"
import Link from "@/components/Link"

export default function Footer() {
  return (
    <SectionContainer fullWidth={false}>
      <footer className="flex flex-col flex-wrap w-full py-1 mt-8 mb-0 font-serif text-2xl font-bold text-center rounded sm:text-xl sm:mb-8 sm:flex-row">
        <HeaderNavLinks location={"footer"} />
        <div className="flex justify-center flex-grow py-8 space-x-2 text-gray-900 sm:py-0 sm:justify-end dark:text-gray-100">
          <div className="py-1 text-gray-900 rounded-3xl dark:text-gray-100 hover:underline">{`© ${new Date().getFullYear()}`}</div>
          <div className="py-1 text-gray-900 rounded-3xl dark:text-gray-100 hover:underline">
            <Link href="/">{siteMetadata.author}</Link>
          </div>
        </div>
      </footer>
    </SectionContainer>
  )
}
