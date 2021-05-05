// import siteMetadata from "@/data/siteMetadata"
import Logo from "@/data/logo.svg"
import Link from "./Link"
import SectionContainer from "./SectionContainer"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ThemeSwitch from "./ThemeSwitch"
import HeaderNavLinks from "./HeaderNavLinks"
import dynamic from "next/dynamic"

const DebugBreakpoints = dynamic(() => import("./DebugBreakpoints"), {
  ssr: false,
})

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer header={true} className="pt-10">
        <Link href="/" aria-label="Steven Terner, LLC" className={null}>
          <div className="text-gray-100 stroke-current stroke-0 dark:stroke-1 fill-green-dark">
            <Logo />
          </div>
        </Link>
        <Header />
        <DebugBreakpoints />
      </SectionContainer>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
function Header() {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row">
      <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded-3xl dark:border-gray-100 xl:text-2xl md:text-xl sm:flex sm:text-l dark:bg-green-dark">
        <HeaderNavLinks />
      </div>
      <ThemeSwitch />
      <MobileNav />
    </div>
  )
}
