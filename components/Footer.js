import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import SectionContainer from "./SectionContainer"
import headerNavLinks from "@/data/headerNavLinks"

export default function Footer() {
  return (
    <SectionContainer>
      <footer className="flex flex-wrap w-full py-1 mt-8 mb-4 font-serif font-bold leading-5 text-center border-gray-900 rounded md:text-lg xl:text-xl dark:border-gray-500">
        <div className="flex flex-grow py-1 space-x-2 text-gray-900 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{siteMetadata.author}</div>
        </div>
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="px-3 py-1 text-black no-underline rounded hover:bg-green-light dark:hover:text-green-dark"
          >
            {link.title}
          </Link>
        ))}
      </footer>
    </SectionContainer>
  )
}
