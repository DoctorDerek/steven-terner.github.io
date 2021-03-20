import siteMetadata from "@/data/siteMetadata"
import SectionContainer from "./SectionContainer"
import HeaderNavLinks from "./HeaderNavLinks"

export default function Footer() {
  return (
    <SectionContainer>
      <footer className="flex flex-wrap w-full py-1 mt-8 mb-4 font-serif font-bold leading-5 text-center rounded md:text-lg xl:text-xl">
        <div className="flex flex-grow py-1 space-x-2 text-gray-900 dark:text-gray-100">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
        </div>
        <HeaderNavLinks location={"footer"} />
      </footer>
    </SectionContainer>
  )
}
