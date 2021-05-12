import { useState, useEffect } from "react"

const DEBUG_BREAKPOINTS = false

function getWindowDimensions() {
  const dimensions = { width: 0, height: 0 }
  if (
    typeof window !== "undefined" &&
    typeof window.innerHeight === "number" &&
    typeof window.innerHeight === "number"
  ) {
    dimensions.width = window.innerWidth
    dimensions.height = window.innerHeight
  }
  return dimensions
}
function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

function classNames(...classes) {
  return classes.filter(Boolean).join(" ")
}

export default function DebugBreakpoints() {
  if (!DEBUG_BREAKPOINTS) {
    return null
  }
  const { width } = useWindowDimensions()
  const [stickyFixedPosition, setStickyFixedPosition] = useState(true)
  return (
    <div
      className={classNames(
        stickyFixedPosition ? "fixed" : "absolute",
        "inset-x-0 top-0 z-10 text-3xl text-center bg-gray-500"
      )}
    >
      <button
        className={"absolute right-1"}
        onClick={() => setStickyFixedPosition((state) => !state)}
      >
        {stickyFixedPosition ? "sticky" : "fixed"}
        🕸
      </button>
      <span className="hidden font-bold sm:inline">Current breakpoint is </span>
      <span className="font-bold sm:hidden">mobile</span>
      <span className="hidden font-bold sm:inline md:hidden">small</span>
      <span className="hidden font-bold md:inline lg:hidden">medium</span>
      <span className="hidden font-bold lg:inline xl:hidden">large</span>
      <span className="hidden font-bold xl:inline">x-large</span> ({width}
      px)
    </div>
  )
}
