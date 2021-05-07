import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"
import { useCurrentPath } from "@/components/useCurrentPath"

const classNames = (...classes) => classes.join(" ")

// location can also be "footer"
const HeaderNavLinks = ({ location = "header" }) => {
  const currentPagePath = useCurrentPath()
  const defaultClassName =
    "px-1 xl:px-5 py-1 rounded-3xl dark:text-gray-100 hover:underline"

  return (
    <>
      {headerNavLinks.map((link) => {
        const className = classNames(
          // underline active page in nav menu
          (link.href.length > 1 && currentPagePath.includes(link.href)) ||
            currentPagePath === link.href // handle homepage
            ? "underline"
            : "no-underline",
          location === "footer" ? "text-gray-900" : "text-green-dark",
          defaultClassName
        )
        return (
          <Link key={link.title} href={link.href} className={className}>
            {link.title}
          </Link>
        )
      })}
    </>
  )
}

export default HeaderNavLinks
