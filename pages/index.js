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

export default function Home() {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="py-8 bg-gray-900 md:py-12">
        <SectionContainer>
          <ImageSlideshow />
        </SectionContainer>
      </div>
      <div className="py-8 bg-gray-300 sm:py-12 md:py-32">
        <SectionContainer>
          <CardList>
            <Card
              alt="ocean"
              src="/static/images/Iran Currency.jpg"
              heading="Services"
              link="/services"
            >
              I offer <Link href="/services">expert consulting services</Link>{" "}
              for international businesses, newspapers, NGOs & think tanks.
            </Card>
            <Card
              alt="ocean"
              src="/static/images/Banking, Currency, Policy photo.jpg"
              heading="Portfolio"
              link="/portfolio"
            >
              My <Link href="/portfolio">consulting portfolio</Link> includes
              examples of my analysis of the Middle East & Central/West Asia.
            </Card>
            <Card
              alt="ocean"
              src="/static/images/Iran Tehran traffic.jpg"
              heading="Blog"
              link="/blog"
            >
              I publish my latest socio-political analysis work on{" "}
              <Link href="/blog">my blog</Link> at Medium.
            </Card>
          </CardList>
        </SectionContainer>
      </div>
      <div className="pt-12 pb-20 md:py-32 from-green-lighter to-green-aqua bg-gradient-to-b">
        <SectionContainer>
          <div className="grid grid-cols-1 space-y-6 sm:grid-cols-8 sm:space-y-0">
            <div className="flex flex-col justify-between col-span-1 text-lg sm:col-span-4 xl:text-xl">
              <h2 className="py-4 font-serif text-3xl font-bold sm:text-2xl md:text-4xl">
                About
              </h2>
              <p className="py-4">
                Steven Terner is a multi-lingual American scholar and researcher
                specializing in socio-political and economic analysis of the
                Middle East and Central/West Asia.
              </p>
              <p className="py-4">
                <Link
                  className="text-black underline hover:no-underline"
                  href="/about"
                >
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
