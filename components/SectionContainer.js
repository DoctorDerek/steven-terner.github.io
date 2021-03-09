export default function SectionContainer({
  children,
  fullWidth = false,
  header = false,
  className,
}) {
  // fullWidth === true implies no max-width
  // header returns a <header> instead of a <section>
  // className, if present, is appended to the defaults

  const defaultClass = fullWidth
    ? "w-full px-4 mx-auto sm:px-6"
    : "w-full max-w-sm px-4 mx-auto sm:max-w-3xl sm:px-6 xl:max-w-5xl xl:px-0"

  if (className) {
    className = defaultClass + " " + className
  } else if (className !== null) {
    // null represents intentional absence of any className
    className = defaultClass
  }

  return header ? (
    <header className={className}>{children}</header>
  ) : (
    <section className={className}>{children}</section>
  )
}
