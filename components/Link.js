/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link"

const CustomLink = ({ href, className, ...rest }) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  const defaultClass =
    "underline text-green-dark hover:text-gray-900 hover:bg-green-light dark:text-gray-100 dark:hover:text-gray-900 dark:border-b-2 dark:border-solid dark:border-green-dark dark:no-underline"
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
