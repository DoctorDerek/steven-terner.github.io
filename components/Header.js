import MobileNav from "@/components/MobileNav"
import ThemeSwitch from "@/components/ThemeSwitch"
import HeaderNavLinks from "@/components/HeaderNavLinks"

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full mt-8 mb-4 text-base leading-5">
      <div className="items-center justify-around hidden w-full py-1 mr-2 font-serif font-bold text-center border-2 border-gray-900 border-solid rounded-3xl dark:border-gray-100 xl:text-2xl md:text-xl sm:flex dark:bg-green-dark">
        <HeaderNavLinks />
      </div>
      <MobileNav />
      <ThemeSwitch />
    </div>
  )
}
