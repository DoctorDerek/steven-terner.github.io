import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"

const FooterNav = () => {
  return (
    <nav className="flex justify-between w-64 mt-8 text-center align-center">
      {headerNavLinks.map((link) => (
        <Link
          href={link.href}
          className="font-serif text-2xl font-bold tracking-widest"
          key={link.title}
        >
          <div className="h-auto px-0 py-4 mx-0 my-2 rounded bg-green-lightest text-green-dark dark:bg-gray-200 hover:bg-green-light dark:hover:bg-green-light dark:hover:text-green-dark dark:hover:bg-gradient-to-r dark:hover:from-gray-500 dark:hover:to-green-lightest">
            {link.title}
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default FooterNav
