/* eslint-disable jsx-a11y/anchor-has-content */
import Link from "next/link"

const CustomLink = ({ href, className, ...rest }) => {
  const isInternalLink = href && href.startsWith("/")
  const isAnchorLink = href && href.startsWith("#")

  const defaultClass =
    "underline text-green-dark hover:text-gray-900 hover:bg-green-light hover:no-underline"
  if (className && !className.match(/text-/)) {
    // no-underline works as a prop, but not text-white, text-black, etc.
    className = className ? defaultClass + " " + className : defaultClass
  } else {
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
