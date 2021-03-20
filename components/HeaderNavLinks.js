import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"

const HeaderNavLinks = ({ location = "header" }) => {
  let className =
    "px-3 py-1 no-underline rounded-3xl xl:px-8 dark:text-gray-100 hover:underline "

  if (location === "footer") {
    className += "text-gray-900"
  } else {
    className += "text-green-dark"
  }

  return (
    <>
      {headerNavLinks.map((link) => (
        <Link key={link.title} href={link.href} className={className}>
          {link.title}
        </Link>
      ))}
    </>
  )
}

export default HeaderNavLinks
