import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Twemoji from "@/components/Twemoji"

export default function Services() {
  const UL = ({ children }) => (
    <ul className="flex flex-col pt-6 space-y-2 divide-y-2">{children}</ul>
  )
  const LI = ({ children }) => (
    <li className="flex items-center pt-2 space-x-2">{children}</li>
  )
  /* Multi-lingual politico-economic analysis, due diligence research, and risk assessments aimed at identifying market opportunities and challenges in the Middle East and Central Asia.

  "Consulting and business intelligence services include due diligence research, economic analysis, political forecasting, and cultural liaising."
  */

  return (
    <>
      <PageSeo
        title="About Steven Terner, LLC - Middle East Business Consulting"
        description="We are multi-linguistic consultants for the Middle East & Central Asia offering due diligence research, politico-economic analysis, and cultural liaising."
        url={`${siteMetadata.siteUrl}/services`}
      />
      <PageTitle>Services</PageTitle>
      <div className="bg-gradient-to-b from-blue-light to-blue-dark">
        <SectionContainer fullWidth={true}>
          <h2 className="flex flex-col max-w-6xl px-8 py-8 space-y-6 font-serif text-xl font-bold sm:px-16 sm:py-32 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Consulting and business intelligence services for the Middle East
            and Central Asia.
          </h2>
        </SectionContainer>
      </div>
      <SectionContainer fullWidth={true}>
        <div className="grid grid-cols-1 gap-8 px-8 pt-8 text-base lg:divide-y-0 sm:text-xl sm:px-16 xl:pt-32 xl:px-16 lg:gap-4 lg:px-4 xl:gap-16 md:text-2xl lg:text-base xl:text-xl lg:grid-cols-3">
          <hr className="h-1 bg-black rounded lg:col-span-3" />
          <p className="lg:col-span-3">
            <span className="font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              Why choose Steven Terner, LLC?
            </span>
          </p>
          <p className="flex">
            <span className="mr-1 font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              1.
            </span>
            We are consultants specialized in the political economics of the
            Middle East and Central Asia.
          </p>
          <p className="flex space-x-6">
            <span className="font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              2.&nbsp;
            </span>{" "}
            We prepare bespoke reports for institutional clients in both the
            public and private sectors.
          </p>
          <p className="flex space-x-6">
            <span className="font-serif text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              3.&nbsp;
            </span>{" "}
            We can help with geopolitical analysis, economic forecasting, due
            diligence, and more.
          </p>
          <hr className="h-1 bg-black rounded lg:col-span-3" />
        </div>
        <div className="grid grid-cols-1 gap-8 px-8 pt-4 pb-8 text-base divide-y-4 lg:divide-y-0 sm:text-xl sm:py-8 sm:px-16 xl:pt-16 xl:pb-32 xl:px-16 lg:gap-4 lg:px-4 xl:gap-16 md:text-2xl lg:text-base xl:text-xl lg:grid-cols-3">
          <UL>
            <LI>
              <Twemoji emoji="🌏" />
              <p>Multi-lingual politico-economic analysis</p>
            </LI>
            <LI>
              <Twemoji emoji="🔍" />
              <p>Due diligence research</p>
            </LI>
            <LI>
              <Twemoji emoji="🌊" />
              <p>Risk assessments</p>
            </LI>
            <LI>
              <Twemoji emoji="📈" />
              <p>Identifying market opportunities</p>
            </LI>
            <LI>
              <Twemoji emoji="💼" />
              <p>Liasing to the Middle East and Central Asia</p>
            </LI>
          </UL>
          <UL>
            <LI>
              <Twemoji emoji="📰" />
              <p>Foreign media monitoring</p>
            </LI>{" "}
            <LI>
              <Twemoji emoji="📊" />
              <p>Foreign market analysis</p>
            </LI>{" "}
            <LI>
              <Twemoji emoji="🌤" />
              <p>Political forecasting</p>
            </LI>
            <LI>
              <Twemoji emoji="🤝" />
              <p>Finding international business partners</p>
            </LI>{" "}
            <LI>
              <Twemoji emoji="✍" />
              <p>Contract negotation</p>
            </LI>
          </UL>
          <UL>
            <LI>
              <Twemoji emoji="📝" />
              <p>Written geopolitical analysis</p>
            </LI>{" "}
            <LI>
              <Twemoji emoji="💱" />
              <p>Highlighting market challenges</p>
            </LI>
            <LI>
              <Twemoji emoji="🕵️‍♂️" />
              <p>Evaluation of geopolitical risks</p>
            </LI>{" "}
            <LI>
              <Twemoji emoji="🎯" />
              <p>Designing and executing product strategy</p>
            </LI>
            <LI>
              <Twemoji emoji="📕" />
              <p>Training and lectures</p>
            </LI>
          </UL>
        </div>
      </SectionContainer>
      <div className="text-gray-100 from-gray-900 to-gray-800 bg-gradient-to-b">
        <SectionContainer fullWidth={true}>
          <div className="grid grid-cols-1 px-0 py-16 text-xl leading-relaxed lg:px-16 lg:py-32 sm:text-2xl md:text-xl xl:text-2xl md:grid-cols-7">
            {/*Consulting and business intelligence services include due
              diligence research, economic analysis, political forecasting, and
            cultural liaising.*/}
            <div className="flex flex-col justify-between max-w-xl col-span-4 px-2 mb-12 space-y-8 md:mb-0">
              <p>
                Steven Terner, LLC was founded to provide multi-linguistic
                business intelligence consulting to help you meet your goals.
              </p>
              <p>
                Our most popular business intelligence services include due
                diligence assessments, economic analysis, political forecasting,
                and cultural liaising.
              </p>
              <p>We're currently accepting new clients.</p>
            </div>
            <div className="flex col-span-3">
              <AboutSidebar />
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
/*
const unusedCopy = () => (
  <>
    <p className="col-span-3 px-2 py-16">
      Steven Terner is a multilingual analyst, scholar, and consultant
      specializing in the political economics of the Middle East and Central
      Asia.
      <Link href="/about" className="text-gray-100">
        <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
          Learn more
        </div>
      </Link>
    </p>
    <p className="col-span-3 px-2 py-16">
      Steven Terner, LLC provides bespoke reports including geopolitical
      analysis, economic forecasting, and due diligence assessments for public
      and private sector institutions.
      <Link href="/about" className="text-gray-100">
        <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
          View portfolio
        </div>
      </Link>
    </p>
    <p className="col-span-3 px-2 py-16">
      Steven Terner frequently publishes articles with foreign policy think
      tanks and international news sites, and presents original research on
      socio-political, intelligence, corporate, and leadership analysis to a
      wide variety of audiences.
      <Link href="/about" className="text-gray-100">
        <div className="px-4 py-2.5 mx-auto inline-block font-bold text-center rounded text-base bg-green-dark hover:bg-green-light hover:text-gray-900 ml-4">
          Read the blog
        </div>
      </Link>
    </p>
  </>
)
*/
