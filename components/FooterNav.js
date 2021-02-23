import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"

const FooterNav = () => {
  return (
    <div className="flex flex-row-reverse items-center justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row">
      <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded dark:border-gray-500 xl:text-2xl md:text-xl sm:flex sm:text-l">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="px-3 py-1 no-underline rounded xl:px-8 hover:bg-green-light dark:hover:text-green-dark"
          >
            {link.title}
          </Link>
        ))}
      </div>{" "}
    </div>
  )
}

export default FooterNav
