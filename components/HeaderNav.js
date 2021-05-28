import ThemeSwitch from "@/components/ThemeSwitch"
import HeaderNavLinks from "@/components/HeaderNavLinks"
import { useState } from "react"

export default function Header() {
  const [showNav, setShowNav] = useState(false)
  return (
    <nav className="flex items-center justify-between w-full mt-8 mb-4 text-base leading-5">
      <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded-3xl dark:border-gray-100 xl:text-2xl md:text-xl dark:bg-green-dark sm:flex">
        <HeaderNavLinks />
      </div>
      <div className="sm:hidden">
        <button
          type="button"
          className="flex w-32 h-8 mx-1 rounded"
          aria-label="Toggle Menu"
          onClick={() => setShowNav((state) => !state)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className="w-8 ml-3 text-gray-900 bg-transparent border-2 border-gray-900 border-solid rounded fill-current dark:hover:text-gray-900 dark:border-gray-400 xl:text-2xl md:text-xl sm:flex sm:text-l hover:text-green-dark dark:text-gray-300 hover:bg-green-light"
          >
            {showNav ? (
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
          <div className="m-auto font-serif text-2xl font-bold text-gray-900 dark:text-gray-200">
            Menu
          </div>
        </button>
      </div>
      <ThemeSwitch />
      {showNav && (
        <nav className="flex flex-col flex-wrap w-full py-1 mt-8 mb-0 font-serif text-2xl font-bold text-center rounded xl:left-[-1.25rem] sm:left-[-0.25rem] relative sm:text-xl sm:mb-8 sm:flex-row sm:hidden">
          <HeaderNavLinks location={"footer"} />
        </nav>
      )}
    </nav>
  )
}
