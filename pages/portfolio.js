import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Link from "@/components/Link"

export default function Portfolio() {
  return (
    <>
      <PageTitle>Portfolio</PageTitle>
      <PageSeo
        title={`Portfolio - ${siteMetadata.author}`}
        description={`Portfolio - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/Portfolio`}
      />
      <article className="mx-auto space-y-6 prose">
        <SectionContainer>
          <p>
            My portfolio showcases my writing analyzing complex geopolitical
            situations and international business opportunities in the Middle
            East and Central/West Asia.
          </p>
          <p>
            I’m available for immediate hire for{" "}
            <Link href="/services">consulting services</Link>. Please{" "}
            <Link href="/contact">get in touch</Link>.
          </p>
        </SectionContainer>
        <hr />
        <SectionContainer>
          <h3>Publicly Available Work</h3>
          <p>
            A selection of my written analysis about the Middle East and
            Central/West Asia.{" "}
          </p>
          <p>
            <Link href="https://www.fairobserver.com/region/middle_east_north_africa/steven-terner-us-interests-syria-russia-turkey-iran-isis-news-13211/">
              “How the US Can Win Back Clout in Syria”
            </Link>{" "}
            in <em>Fair Observer</em>, October 6, 2020
          </p>{" "}
          <p>
            <Link href="https://www.atlanticcouncil.org/blogs/iransource/irans-muddled-relationship-with-cryptocurrency-is-self-inflicted/">
              “Iran’s muddled relationship with cryptocurrency is
              self-inflicted”
            </Link>
            in <em>Atlantic Council</em>, June 18, 2020
          </p>
        </SectionContainer>
        <SectionContainer>
          <h3> Iranian Economic News </h3>
          <p>
            Analysis of current trends in the economy of Iran, including
            COVID-19.
          </p>
          <p>
            {" "}
            <Link href="https://steventerner.files.wordpress.com/2020/11/ien-may-2020.pdf">
              “Corona is the latest battleground between Rouhani and the IRGC”
            </Link>{" "}
            (PDF) in <em>Iranian Economic News</em>, May 1, 2020
          </p>
          <p>
            <Link href="https://steventerner.files.wordpress.com/2020/11/ien-january-2020.pdf">
              “Economists Make Policy Recommendations in Open Letter to
              President”
            </Link>
            (PDF) in <em>Iranian Economic News</em>, January 20, 2020
          </p>
          <p>
            Subscribe to the Iranian Economic News newsletter to receive the
            latest insights from Steven Terner, LLC.
          </p>
        </SectionContainer>
      </article>
      <SectionContainer>
        <h2>
          Let us help you act on business opportunities in the Middle East and
          Central/West Asia.
        </h2>
      </SectionContainer>
      <AboutSidebar />
    </>
  )
}
