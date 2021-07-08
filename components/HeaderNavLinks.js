import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"
import { useCurrentPath } from "@/components/useCurrentPath"

// location can also be "footer"
const HeaderNavLinks = ({ location = "header" }) => {
  const currentPagePath = useCurrentPath()

  return (
    <>
      {headerNavLinks.map((link) => {
        const isActivePage =
          (link.href.length > 1 && currentPagePath.includes(link.href)) ||
          currentPagePath === link.href // handle homepage
        return (
          <div
            key={link.title}
            className="px-1 py-1 xl:px-5 dark:text-gray-100"
          >
            <Link
              key={link.title}
              href={link.href}
              border={
                // underline active page in nav menu
                isActivePage ? "bottom" : "none"
              }
              color={
                // footer nav menu links are black
                location === "header" ? "green" : "black"
              }
              darkModeBorder={
                // header nav menu underline is white in dark mode
                location === "header" ? "white" : "green"
              }
            >
              {link.title}
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default HeaderNavLinks
