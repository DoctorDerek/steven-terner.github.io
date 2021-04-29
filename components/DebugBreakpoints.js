import { useState, useEffect } from "react"

const DEBUG_BREAKPOINTS = true
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

export default function DebugBreakpoints() {
  if (!DEBUG_BREAKPOINTS) {
    return null
  }
  const { width } = useWindowDimensions()
  return (
    <div className="text-3xl text-center">
      Current breakpoint is <span className="font-bold sm:hidden">mobile</span>
      <span className="hidden font-bold sm:inline md:hidden">small</span>
      <span className="hidden font-bold md:inline lg:hidden">medium</span>
      <span className="hidden font-bold lg:inline xl:hidden">large</span>
      <span className="hidden font-bold xl:inline">x-large</span> ({width}
      px)
    </div>
  )
}
