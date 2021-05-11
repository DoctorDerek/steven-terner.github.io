import Logo from "@/data/logo.svg"
import Link from "@/components/Link"
import SectionContainer from "@/components/SectionContainer"
import HeaderNav from "@/components/HeaderNav"
import dynamic from "next/dynamic"

const DebugBreakpoints = dynamic(
  () => import("@/components/DebugBreakpoints"),
  {
    ssr: false,
  }
)

export default function Header() {
  return (
    <SectionContainer header={true} className="pt-10">
      <Link href="/" aria-label="Steven Terner, LLC" className={null}>
        <div className="text-gray-100 stroke-current stroke-0 dark:stroke-1 fill-green-dark">
          <Logo />
        </div>
      </Link>
      <HeaderNav />
      <DebugBreakpoints />
    </SectionContainer>
  )
}
