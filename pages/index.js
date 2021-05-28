// import tinytime from "tinytime"
// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import Tag from "@/components/Tag"
import { PageSeo } from "@/components/SEO"
import ImageSlideshow from "@/components/Slideshow"
import SectionContainer from "@/components/SectionContainer"
// import Image from "next/image"

// const MAX_DISPLAY = 5
// const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}")

// alternative title:
// Middle East & Central Asia Business Consulting & Cultural Liasing

export default function Home() {
  return (
    <>
      <PageSeo
        title="Middle East & Central Asia Business Intelligence Consulting"
        description="Steven Terner, LLC offers business intelligence consulting for the Middle East & Central Asia including due diligence, economic analysis & cultural liasing."
        url={siteMetadata.siteUrl}
      />
      <div className="py-8 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-transparent dark:to-black md:py-12">
        <SectionContainer>
          <ImageSlideshow />
        </SectionContainer>
      </div>
    </>
  )
}
