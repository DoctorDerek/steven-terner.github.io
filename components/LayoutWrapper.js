// import siteMetadata from "@/data/siteMetadata"
import headerNavLinks from "@/data/headerNavLinks"
import Logo from "@/data/logo.svg"
import Link from "./Link"
import SectionContainer from "./SectionContainer"
import Footer from "./Footer"
import MobileNav from "./MobileNav"
import ThemeSwitch from "./ThemeSwitch"

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <SectionContainer header={true} className="pt-10">
        <Link href="/" aria-label="Steven Terner" className={null}>
          <div className="text-gray-200 stroke-current stroke-0 dark:stroke-1 fill-green-dark">
            <Logo />
          </div>
        </Link>
        <div className="flex flex-row-reverse items-center justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row ">
          <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded-3xl dark:border-gray-200 xl:text-2xl md:text-xl sm:flex sm:text-l dark:bg-green-dark">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="px-3 py-1 no-underline rounded-3xl xl:px-8 text-green-dark hover:bg-green-light hover:text-gray-900 dark:text-gray-200"
                //style={{ webkitTextStroke: "1px rgb(2,132,199)" }} // text-blue-600
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <MobileNav />
        </div>
      </SectionContainer>

      <main>{children}</main>
      <Footer />
    </>
  )
}

export default LayoutWrapper
