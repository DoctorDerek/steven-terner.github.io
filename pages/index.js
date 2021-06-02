import siteMetadata from "@/data/siteMetadata"
import Link from "@/components/Link"
import { PageSeo } from "@/components/SEO"
import ImageSlideshow from "@/components/Slideshow"
import SectionContainer from "@/components/SectionContainer"
import CardList from "@/components/CardList"
import Card from "@/components/Card"
import AboutSidebar from "@/components/AboutSidebar"

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
              alt="Iranian currency sitting on a table, showing the money of Iran in both change and large bills. The Ayatollah - the supreme leader of Iran - appears prominently on the 100 rial note. There is also a mobile phone with stock market or forecasting charts."
              src="/static/images/Iran Currency.jpg"
              heading="Services"
              link="/services"
            >
              We offer <Link href="/services">expert consulting services</Link>{" "}
              for international businesses, newspapers, NGOs & think tanks.
            </Card>
            <Card
              alt="The outside of the Bank Melli Iran building features the name of the bank in Farsi letters on one side and in English for international audiences on the other above a soaring arch reminiscent of a Middle Eastern mosque."
              src="/static/images/Banking, Currency, Policy photo.jpg"
              heading="Portfolio"
              link="/portfolio"
            >
              Our <Link href="/portfolio">consulting portfolio</Link> includes
              examples of our analysis of the Middle East & Central/West Asia.
            </Card>
            <Card
              alt="Traffic in Tehran, Iran looks like a dozen lanes each way across a soaring bridge and tunnel system, with motorcyles, international tourists, businessmen, autobuses, and even pedestrians. The image is framed against a mountainous backdrop  found in these areas of the Middle East and Central / West Asia."
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
                  Read our story
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
