// import siteMetadata from "@/data/siteMetadata"
import Logo from "@/data/logo.svg"
import Link from "@/components/Link"
import SectionContainer from "@/components/SectionContainer"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import dynamic from "next/dynamic"

const DebugBreakpoints = dynamic(
  () => import("@/components/DebugBreakpoints"),
  {
    ssr: false,
  }
)

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
