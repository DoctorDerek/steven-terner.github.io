import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import SectionContainer from "./SectionContainer"
import headerNavLinks from "@/data/headerNavLinks"

export default function Footer() {
  return (
    <div className="w-full">
      <SectionContainer>
        <footer className="flex flex-col justify-start w-full py-1 mt-8 mb-4 font-serif text-base font-bold leading-5 text-center border-gray-900 rounded sm:flex-row dark:border-gray-500">
          <div className="flex flex-grow px-3 py-1 space-x-2 text-gray-900 dark:text-gray-400">
            <div>{`© ${new Date().getFullYear()}`}</div>
            <Link href="/">{siteMetadata.author}</Link>
          </div>
          <div className="flex flex-col justify-start sm:flex-row">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-1 text-black no-underline rounded hover:bg-green-light dark:hover:text-green-dark"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </footer>
      </SectionContainer>
    </div>
  )
}
