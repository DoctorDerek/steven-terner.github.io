import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Twemoji from "@/components/Twemoji"

export default function Services() {
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
          <ul>
            <li>
              <Twemoji emoji="🤝" />
              Identify international business partners
            </li>
            <li>
              <Twemoji emoji="📝" />
              Negotiate contracts
            </li>
            <li>
              <Twemoji emoji="📈" />
              Design and oversee product strategy
            </li>
            <li>
              <Twemoji emoji="📊" />
              Foreign market analysis
            </li>
            <li>
              <Twemoji emoji="🕵️‍♂️" />
              Due diligence support
            </li>
          </ul>
          <ul>
            <li>
              <Twemoji emoji="💱" />
              Assessment of economic opportunities
            </li>
            <li>
              <Twemoji emoji="📰" />
              Foreign media monitoring
            </li>
            <li>
              <Twemoji emoji="📕" />
              Training and lectures
            </li>
            <li>
              <Twemoji emoji="✍" />
              Written geopolitical analysis
            </li>
            <li>
              <Twemoji emoji="💭" />
              Appraisal of geopolitical risks
            </li>
          </ul>
        </div>
      </SectionContainer>
      <div className="text-white bg-black">
        <SectionContainer fullWidth={true}>
          <div className="grid grid-cols-8 px-16 py-32">
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
