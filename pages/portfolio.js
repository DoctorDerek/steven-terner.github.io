import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"

export default function Portfolio() {
  return (
    <>
      <PageSeo
        title={`Portfolio - ${siteMetadata.author}`}
        description={`Portfolio - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/Portfolio`}
      />
      <PageTitle>Portfolio</PageTitle>
      <div className="bg-gradient-to-b from-blue-light to-blue-dark">
        <SectionContainer fullWidth={true}>
          <h2 className="px-16 py-16 font-serif text-5xl font-bold max-w-7xl leading-14">
            Sample Publications
          </h2>
        </SectionContainer>
      </div>
      <SectionContainer fullWidth={true}>
        <div className="grid grid-cols-1 px-16 py-32 text-xl sm:gap-16 sm:grid-cols-3">
          <div>
            <p className="text-4xl">
              My portfolio showcases my writing analyzing complex geopolitical
              situations and international business opportunities in the Middle
              East and Central/West Asia.
            </p>
            <p className="pt-8 text-right">
              I’m available for immediate hire for consulting services. Please
              get in touch.
            </p>
          </div>
        </div>
      </SectionContainer>
      <div className="text-white bg-black">
        <SectionContainer fullWidth={true}>
          <div className="grid grid-cols-2 px-16 py-32">
            <p className="col-span-5 py-16 text-3xl leading-relaxed">
              Publicly Available Work A selection of my written analysis about
              the Middle East and Central/West Asia. “How the US Can Win Back
              Clout in Syria” in Fair Observer, Oct 06, 2020 “Iran’s muddled
              relationship with cryptocurrency is self-inflicted” in Atlantic
              Council, Jun 18, 2020 Iranian Economic News Analysis of current
              trends in the economy of Iran, including COVID-19. “Corona is the
              latest battleground between Rouhani and the IRGC” (PDF) in Iranian
              Economic News, May 1, 2020 “Economists Make Policy Recommendations
              in Open Letter to President” (PDF) in Iranian Economic News, Jan
              20, 2020 Let me help you act on business opportunities in the
              Middle East and Central/West Asia. Steven Terner
              contact@StevenTerner.com Get in touch!
            </p>
            <AboutSidebar />
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
