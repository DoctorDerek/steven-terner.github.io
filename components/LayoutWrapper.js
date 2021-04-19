// import siteMetadata from "@/data/siteMetadata"
import Logo from "@/data/logo.svg"
import Link from "./Link"
import SectionContainer from "./SectionContainer"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ThemeSwitch from "./ThemeSwitch"
import HeaderNavLinks from "./HeaderNavLinks"
import { useState, useEffect } from "react"

const DEBUG_BREAKPOINTS = true

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
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

const LayoutWrapper = ({ children }) => {
  const { width } = useWindowDimensions()
  return (
    <>
      <SectionContainer header={true} className="pt-10">
        <Link href="/" aria-label="Steven Terner, LLC" className={null}>
          <div className="text-gray-100 stroke-current stroke-0 dark:stroke-1 fill-green-dark">
            <Logo />
          </div>
        </Link>
        <div className="flex flex-row-reverse items-center justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row ">
          <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded-3xl dark:border-gray-100 xl:text-2xl md:text-xl sm:flex sm:text-l dark:bg-green-dark">
            <HeaderNavLinks />
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
        {DEBUG_BREAKPOINTS && (
          <div className="text-3xl text-center">
            Current breakpoint is{" "}
            <span className="font-bold sm:hidden">mobile</span>
            <span className="hidden font-bold sm:inline md:hidden">small</span>
            <span className="hidden font-bold md:inline lg:hidden">medium</span>
            <span className="hidden font-bold lg:inline xl:hidden">large</span>
            <span className="hidden font-bold xl:inline">x-large</span> ({width}
            px)
          </div>
        )}
      </SectionContainer>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
