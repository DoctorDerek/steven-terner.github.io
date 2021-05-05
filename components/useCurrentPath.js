import { useRouter } from "next/router"

export const useCurrentPath = () => {
  // fetch current page URL
  const router = useRouter() // next/router
  const currentPagePath = router.asPath

  return currentPagePath
}
