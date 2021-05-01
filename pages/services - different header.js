import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Twemoji from "@/components/Twemoji"
import Link from "@/components/Link"

export default function Services() {
  const UL = ({ children }) => (
    <ul className="flex flex-col space-y-2">{children}</ul>
  )
  const LI = ({ children }) => (
    <li className="flex items-center space-x-2">{children}</li>
  )
  /* Multi-lingual politico-economic analysis, due diligence research, and risk assessments aimed at identifying market opportunities and challenges in the Middle East and Central Asia. */
  /* Consultants specializing in economic analysis, political
    forecasting, due diligence research, and cultural liaising. */

  return (
    <>
      <PageSeo
        title={`Services - ${siteMetadata.author}`}
        description={`Services - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/services`}
      />
      <PageTitle>Services</PageTitle>
      <div className="bg-gradient-to-b from-blue-light to-blue-dark">
        <SectionContainer fullWidth={true}>
          <ul className="flex flex-col px-8 py-8 space-y-6 font-serif text-xl font-bold sm:px-16 sm:py-32 sm:text-2xl md:text-3xl lg:text-3xl xl:text-5xl max-w-7xl xl:leading-14">
            <LI>
              <Twemoji emoji="📝" />
              <h2>Multi-lingual politico-economic analysis</h2>
            </LI>
            <LI>
              <Twemoji emoji="🔍" />
              <h2>Due diligence research and risk assessments</h2>
            </LI>
            <LI>
              <Twemoji emoji="📈" />
              <h2>Identifying market opportunities and challenges</h2>
            </LI>
            <LI>
              <Twemoji emoji="🌍" />
              <h2>Liasing to the Middle East and Central Asia</h2>
              <Twemoji emoji="🌏" />
            </LI>
          </ul>
        </SectionContainer>
      </div>
      <SectionContainer fullWidth={true}>
        <div className="grid grid-cols-2 gap-16 px-16 py-32 text-xl md:text-2xl xl:grid-cols-3">
          <div className="max-w-lg col-span-2 space-y-8 xl:col-span-1">
            <h3 className="font-bold">Steven Terner, LLC</h3>
            <h4 className="leading-8">
              Consulting and business intelligence services for the Middle East
              and Central Asia.
            </h4>
          </div>
          <UL>
            <LI>
              <Twemoji emoji="🤝" />
              <p>Identify international business partners</p>
            </LI>
            <LI>
              <Twemoji emoji="✍" />
              <p>Negotiate contracts</p>
            </LI>
            <LI>
              <Twemoji emoji="📈" />
              <p>Design and oversee product strategy</p>
            </LI>
            <LI>
              <Twemoji emoji="📊" />
              <p>Foreign market analysis</p>
            </LI>
            <LI>
              <Twemoji emoji="🕵️‍♂️" />
              <p>Due diligence support</p>
            </LI>
          </UL>
          <UL>
            <LI>
              <Twemoji emoji="💱" />
              <p>Assessment of economic opportunities</p>
            </LI>
            <LI>
              <Twemoji emoji="📰" />
              <p>Foreign media monitoring</p>
            </LI>
            <LI>
              <Twemoji emoji="📕" />
              <p>Training and lectures</p>
            </LI>
            <LI>
              <Twemoji emoji="📝" />
              <p>Written geopolitical analysis</p>
            </LI>
            <LI>
              <Twemoji emoji="💭" />
              <p>Appraisal of geopolitical risks</p>
            </LI>
          </UL>
        </div>
      </SectionContainer>
      <div className="text-gray-100 bg-black">
        <SectionContainer fullWidth={true}>
          <div className="grid grid-cols-1 px-16 py-32 text-2xl leading-relaxed sm:text-3xl lg:grid-cols-6">
            <p className="col-span-3 px-2 py-16">
              Steven Terner is a multilingual analyst, scholar, and consultant
              specializing in the political economics of the Middle East and
              Central Asia.
              <Link href="/about" className="text-gray-100">
                <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
                  Learn more
                </div>
              </Link>
            </p>
            <p className="col-span-3 px-2 py-16">
              Steven Terner, LLC provides bespoke reports including geopolitical
              analysis, economic forecasting, and due diligence assessments for
              public and private sector institutions.
              <Link href="/about" className="text-gray-100">
                <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
                  View portfolio
                </div>
              </Link>
            </p>
            <p className="col-span-3 px-2 py-16">
              Steven Terner frequently publishes articles with foreign policy
              think tanks and international news sites, and presents original
              research on socio-political, intelligence, corporate, and
              leadership analysis to a wide variety of audiences.
              <Link href="/about" className="text-gray-100">
                <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
                  Read the blog
                </div>
              </Link>
            </p>
            <div className="flex items-center col-span-3">
              <AboutSidebar />
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
