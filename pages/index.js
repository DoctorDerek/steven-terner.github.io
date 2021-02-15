import tinytime from "tinytime"
import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
import Tag from "@/components/Tag"
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import ImageSlideshow from "@/components/ImageSlideshow"
import SectionContainer from "@/components/SectionContainer"
import Image from "next/image"
import CardList from "@/components/CardList"
import Card from "@/components/Card"

const MAX_DISPLAY = 5
const postDateTemplate = tinytime("{MMMM} {DD}, {YYYY}")

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter("blog")

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="py-4 bg-gray-900">
        <SectionContainer>
          <ImageSlideshow />
        </SectionContainer>
      </div>
      <div className="py-12 bg-gray-300 md:py-32">
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
              I publish my latest socio-political analysis work on my blog at
              Medium. Read more.
            </Card>
          </CardList>
        </SectionContainer>
      </div>
      <div className="bg-green-800">
        <SectionContainer>
          About Skip to content Steven Terner Steven TernerConsultant
          specializing in the Middle East Home About Service Offerings Sample
          Publications Blog Contact Service Offerings I offer expert consulting
          services for international businesses, newspapers, NGOs & think tanks.
          Sample Publications My consulting portfolio includes examples of my
          analysis of the Middle East & Central/West Asia. Blog I publish my
          latest socio-political analysis work here on my blog at
          StevenTerner.com About Steven Terner is a multi-lingual American
          scholar and researcher specializing in socio-political and economic
          analysis of the Middle East and Central/West Asia. Read more Steven
          Terner contact@StevenTerner.com Get in touch! EditHome About Service
          Offerings Sample Publications Blog Contact Steven Terner
        </SectionContainer>
      </div>
    </>
  )
}
