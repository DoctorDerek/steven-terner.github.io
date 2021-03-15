import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"

export default function Portfolio() {
  return (
    <>
      <PageTitle>Portfolio</PageTitle>
      <div className="mx-auto text-xl prose xl:text-3xl">
        <PageSeo
          title={`Portfolio - ${siteMetadata.author}`}
          description={`Portfolio - ${siteMetadata.author}`}
          url={`${siteMetadata.siteUrl}/Portfolio`}
        />
        <SectionContainer>
          <p>
            My portfolio showcases my writing analyzing complex geopolitical
            situations and international business opportunities in the Middle
            East and Central/West Asia.
          </p>
          <p>
            I’m available for immediate hire for consulting services. Please get
            in touch.
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
            “How the US Can Win Back Clout in Syria” in Fair Observer, Oct 06,
            2020
          </p>{" "}
          <p>
            “Iran’s muddled relationship with cryptocurrency is self-inflicted”
            in Atlantic Council, Jun 18, 2020
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
            “Corona is the latest battleground between Rouhani and the IRGC”
            (PDF) in Iranian Economic News, May 1, 2020
          </p>
          <p>
            {" "}
            “Economists Make Policy Recommendations in Open Letter to President”
            (PDF) in Iranian Economic News, Jan 20, 2020
          </p>
        </SectionContainer>
        <SectionContainer>
          <h2>
            Let me help you act on business opportunities in the Middle East and
            Central/West Asia.
          </h2>
        </SectionContainer>

        <AboutSidebar />
      </div>
    </>
  )
}
