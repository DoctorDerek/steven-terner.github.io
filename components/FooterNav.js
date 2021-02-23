import Link from "./Link"
import headerNavLinks from "@/data/headerNavLinks"

const FooterNav = () => {
  return (
    <div className="flex flex-row-reverse items-end justify-between w-full mt-8 mb-4 text-base leading-5 sm:flex-row">
      <div className="py-1 font-serif font-bold rounded text-centerborder-gray-900 dark:border-gray-500">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="px-3 py-1 text-black no-underline rounded hover:bg-green-light dark:hover:text-green-dark"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterNav
