import Link from "./Link"
import siteMetadata from "@/data/siteMetadata"
import FooterNav from "./FooterNav"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-16">
      <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{siteMetadata.author}</div>
        <div>{` • `}</div>
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
      </div>
      <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
        <FooterNav />
      </div>
    </footer>
  )
}
