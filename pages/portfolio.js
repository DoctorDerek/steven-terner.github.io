import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Link from "@/components/Link"
import Image from "@/components/Image"

export default function Portfolio() {
  return (
    <>
      <PageTitle>Portfolio</PageTitle>
      <PageSeo
        title="Business Consulting Portfolio for the Middle East & Central Asia"
        description="Steven Terner, LLC offers bespoke reporting on complex geopolitical situations and international business opportunities in the Middle East & Central/West Asia."
        url={`${siteMetadata.siteUrl}/portfolio`}
      />
      <SectionContainer>
        <article className="mx-auto space-y-12">
          <p className="text-lg xl:text-2xl xl:leading-8">
            Our portfolio showcases our writing analyzing complex geopolitical
            situations and international business opportunities in the Middle
            East and Central/West Asia.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            We frequently publish articles with foreign policy think tanks and
            international news sites, and present original research on
            socio-political, intelligence, corporate, and leadership analysis to
            a wide variety of audiences.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            We're available for immediate hire for{" "}
            <Link href="/services">consulting services</Link>. Please{" "}
            <Link href="/contact">get in touch</Link>.
          </p>
          <hr />
          <h2 className="font-serif text-2xl font-bold md:text-3xl xl:text-4xl">
            Publicly Available Work
          </h2>
          <p className="text-lg xl:text-2xl xl:leading-8">
            A selection of our written analysis about the Middle East and
            Central/West Asia.{" "}
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            <Link href="https://www.fairobserver.com/region/middle_east_north_africa/steven-terner-us-interests-syria-russia-turkey-iran-isis-news-13211/">
              “How the US Can Win Back Clout in Syria”
            </Link>
            <br />
            in <em>Fair Observer</em>. October 6, 2020.
          </p>{" "}
          <p className="text-lg xl:text-2xl xl:leading-8">
            <Link href="https://www.atlanticcouncil.org/blogs/iransource/irans-muddled-relationship-with-cryptocurrency-is-self-inflicted/">
              “Iran’s muddled relationship with cryptocurrency is
              self-inflicted”
            </Link>
            <br />
            <em>Atlantic Council</em>. June 18, 2020.
          </p>
          <hr />
          <div className="float-right">
            <Link href="https://iranianeconomicnews.com/">
              <div className="grid w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60">
                <Image
                  src="/static/images/IEN-logo.png"
                  alt="The logo for Iranian Economic News is based on the Iranian flag."
                />
              </div>
            </Link>
          </div>
          <h2
            className="font-serif text-2xl font-bold md:text-3xl xl:text-4xl"
            id="IEN"
          >
            Iranian Economic News
          </h2>
          <p className="text-lg xl:text-2xl xl:leading-8">
            <Link href="https://iranianeconomicnews.com/">
              Iranian Economic News
            </Link>{" "}
            is our free email newsletter.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            Iranian Economic News features analysis of current trends in the
            economy of Iran, including COVID-19.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            {" "}
            <Link href="https://steventerner.files.wordpress.com/2020/11/ien-may-2020.pdf">
              “Corona is the latest battleground between Rouhani and the IRGC”
            </Link>{" "}
            (PDF)
            <br />
            <em>Iranian Economic News</em>. May 1, 2020.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            <Link href="https://steventerner.files.wordpress.com/2020/11/ien-january-2020.pdf">
              “Economists Make Policy Recommendations in Open Letter to
              President”
            </Link>{" "}
            (PDF) <br />
            <em>Iranian Economic News</em>. January 20, 2020.
          </p>
          <p className="text-lg xl:text-2xl xl:leading-8">
            <Link href="https://iranianeconomicnews.com/subscribe-free">
              Subscribe free to Iranian Economic News
            </Link>{" "}
            to receive the latest insights on Iran.
          </p>
        </article>
      </SectionContainer>
      <div className="mt-12 bg-gradient-to-b from-blue-light to-blue-dark">
        <SectionContainer>
          <div className="grid grid-cols-1 py-12 space-y-12 sm:space-y-16 md:grid-cols-7 md:space-y-0 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            <div className="flex flex-col max-w-6xl col-span-4">
              <h2 className="font-serif text-2xl font-bold lg:text-3xl">
                Recent Projects Include:
              </h2>{" "}
              <ul className="ml-6 text-xl list-disc md:text-base lg:text-lg xl:text-xl">
                <li>Due Diligence on Israeli Companies</li>
                <li>Iranian Economic and Political Forecasting</li>
                <li>Comparative Assessment of Regional Fintech Ecosystems</li>
                <li>Historical Reports on Religious Communities</li>
                <li>NIMA Banking System</li>
                <li>FATF and GDPR Compliance</li>
                <li>Data Policy Modernization</li>
                <li>Negative Press Investigations</li>
                <li>Litigation Reports</li>
              </ul>
            </div>
            <AboutSidebar />
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
