import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="flex flex-col items-center justify-between pt-10">
          <div>
            <Link href="/" aria-label="Steven Terner">
              <div className="flex items-center justify-between">
                <div className="w-screen px-3 mb-8">
                  <SectionContainer>
                    <Logo />
                  </SectionContainer>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex flex-col-reverse items-center justify-between w-full text-base leading-5 sm:flex-row">
            <div className="items-center justify-around hidden w-full font-serif font-bold text-center border-2 border-gray-900 border-solid rounded dark:border-gray-100 xl:text-2xl md:text-xl sm:flex sm:text-l">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 text-green-900 sm:p-4 dark:text-gray-100 hover:bg-gray-900 hover:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
