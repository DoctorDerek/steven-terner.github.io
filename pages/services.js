import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Twemoji from "@/components/Twemoji"

export default function Services() {
  const UL = ({ children }) => (
    <ul className="flex flex-col space-y-2">{children}</ul>
  )
  const LI = ({ children }) => (
    <li className="flex items-center space-x-2">{children}</li>
  )
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
          <h2 className="px-16 py-16 font-serif text-5xl font-bold max-w-7xl leading-14">
            Multi-linguistic international business consulting for the Middle
            East and Central/West Asia.
          </h2>
        </SectionContainer>
      </div>
      <SectionContainer fullWidth={true}>
        <div className="grid grid-cols-1 px-16 py-32 text-xl sm:gap-16 sm:grid-cols-3">
          <div>
            <p className="text-4xl">
              “I can help your business access new markets with
              culturally-sensitive and effective business strategy.”
            </p>
            <p className="pt-8 text-right">—Steven Terner</p>
          </div>
          <UL>
            <LI>
              <Twemoji emoji="🤝" />
              <p>Identify international business partners</p>
            </LI>
            <LI>
              <Twemoji emoji="📝" />
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
              <Twemoji emoji="✍" />
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
          <div className="grid grid-cols-1 px-16 py-32 sm:grid-cols-8">
            <p className="col-span-5 py-16 text-3xl leading-relaxed">
              My consulting experience includes the <em>Jerusalem Post</em>, the
              Indian Embassy in Israel, and the Atlantic Council and Hudson
              Institute think tanks in Washington, DC.
            </p>
            <AboutSidebar />
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
