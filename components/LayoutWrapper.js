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
    <div className="box-border flex flex-col justify-between w-full h-screen max-w-full">
      <header className="flex flex-col items-center justify-between w-full pt-10">
        <Link href="/" aria-label="Steven Terner" className="w-full">
          <div className="flex items-center justify-between w-full">
            <div className="w-full">
              <SectionContainer className="w-full">
                <Logo className="w-full" />
              </SectionContainer>
            </div>
          </div>
        </Link>
        <div className="w-full overflow-x-hidden">
          <SectionContainer className="w-full">
            <div className="flex flex-row-reverse items-center justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row">
              <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded dark:border-gray-500 xl:text-2xl md:text-xl sm:flex sm:text-l">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="px-3 py-1 no-underline rounded xl:px-8 text-green-dark hover:bg-green-light dark:hover:text-green-dark"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNav />
            </div>
          </SectionContainer>
        </div>
      </header>

      <main className="mb-auto">{children}</main>
      <Footer />
    </div>
  )
}

export default LayoutWrapper
