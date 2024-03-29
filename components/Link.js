/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link"

const classNames = (...classes) => classes.join(" ")

// color can be "green" (default) or "black" text color
// border can be "bottom" (default) or "none" border width
// darkModeBorder can be "green" (default) or "white" border
const CustomLink = ({
  href,
  className,
  color = "green",
  border = "bottom",
  darkModeBorder = "green",
  ...rest
}) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  const defaultClass = classNames(
    border === "bottom"
      ? "border-green-dark"
      : "border-transparent dark:border-transparent",
    color === "green"
      ? "text-green-dark bg-underline-green-light"
      : "text-gray-900 bg-underline-green-dark",
    darkModeBorder === "green"
      ? "hover:border-green-dark dark:hover:border-green-dark"
      : "hover:border-green-dark dark:border-gray-100 dark:hover:border-gray-100 hover:border-b-2",
    "dark:text-gray-100 border-solid border-b-2 transition-all duration-700 bg-underline-green-light dark:bg-underline-green-dark bg-0% bg-no-repeat hover:bg-100%"
  )
  if (className) {
    if (!className.match(/text-/)) {
      // no-underline works as a prop, but not text-gray-100, text-gray-900, etc.
      className = defaultClass + " " + className
    }
  } else if (className !== null) {
    // null represents intentional absence of any className, like the logo
    className = defaultClass
  }

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} className={className} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} className={className} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={className}
    />
  )
}

export default CustomLink
