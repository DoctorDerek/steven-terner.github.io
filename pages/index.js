// import tinytime from "tinytime"
// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import Tag from "@/components/Tag"
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import ImageSlideshow from "@/components/Slideshow"
import SectionContainer from "@/components/SectionContainer"
// import Image from "next/image"
import CardList from "@/components/CardList"
import Card from "@/components/Card"
import AboutSidebar from "@/components/AboutSidebar"

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
      <div className="py-8 bg-gray-300 sm:py-12 md:py-32 dark:bg-transparent">
        <SectionContainer>
          <CardList>
            <Card
              alt="ocean"
              src="/static/images/Iran Currency.jpg"
              heading="Services"
              link="/services"
            >
              We offer <Link href="/services">expert consulting services</Link>{" "}
              for international businesses, newspapers, NGOs & think tanks.
            </Card>
            <Card
              alt="ocean"
              src="/static/images/Banking, Currency, Policy photo.jpg"
              heading="Portfolio"
              link="/portfolio"
            >
              Our <Link href="/portfolio">consulting portfolio</Link> includes
              examples of our analysis of the Middle East & Central/West Asia.
            </Card>
            <Card
              alt="ocean"
              src="/static/images/Iran Tehran traffic.jpg"
              heading="Blog"
              link="/blog"
            >
              We publish our latest socio-political analysis about trends
              affecting international business on{" "}
              <Link href="/blog">our blog</Link>.
            </Card>
          </CardList>
        </SectionContainer>
      </div>
      <div className="pt-12 pb-20 md:py-32 from-green-lighter to-green-dark bg-gradient-to-b dark:from-green-dark dark:to-green-900">
        <SectionContainer>
          <div className="grid grid-cols-1 space-y-6 sm:pr-2 md:pr-0 md:grid-cols-8 md:space-y-0">
            <div className="flex flex-col justify-between col-span-1 text-lg md:col-span-4 xl:text-xl">
              <h2 className="py-4 font-serif text-3xl font-bold md:text-4xl">
                About
              </h2>
              <p className="py-4">
                Steven Terner, LLC offers consulting and business intelligence
                services specializing in socio-political and economic analysis
                of the Middle East and Central Asia.
              </p>
              <p className="py-4">
                <Link color="black" href="/about">
                  Read more
                </Link>
              </p>
            </div>
            <div className="col-span-1 py-1"></div>
            <AboutSidebar />
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
