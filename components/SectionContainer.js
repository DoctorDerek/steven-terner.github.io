export default function SectionContainer({ children, fullWidth = false }) {
  // fullWidth === true implies no max-width
  return (
    <>
      {!fullWidth && (
        <section className="w-full max-w-sm px-4 mx-auto sm:max-w-3xl sm:px-6 xl:max-w-5xl xl:px-0">
          {children}
        </section>
      )}
      {fullWidth && (
        <section className="w-full px-4 mx-auto sm:px-6">{children}</section>
      )}
    </>
  )
}
