import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <PageTitle>About</PageTitle>
      <SectionContainer fullWidth={true}>
        <div className="grid grid-cols-1 space-y-6 sm:grid-cols-12 sm:space-y-0">
          <div className="col-span-1 py-1"></div>
          <AboutSidebar photo={true} />
          <div className="col-span-1 py-1"></div>

          <div className="flex flex-col col-span-1 space-y-12 sm:col-span-6">
            <h2 className="font-serif text-4xl font-bold ">
              Your liaison for doing business in the Middle East and
              Central/West Asia.
            </h2>
            <p className="text-xl leading-8">
              Steven Terner, LLC is a multi-lingual American scholar and
              researcher who has spent more than a decade specializing in
              socio-political and economic analysis of the Middle East and
              Central/West Asia, with a focus on Iran. His intent is to serve as
              a cultural liaison, guiding international business in expanding
              global markets.
            </p>
            <p className="text-xl leading-8">
              Mr. Terner spent six years living, studying, and working in the
              Middle East. His professional experience includes the Jerusalem
              Post, the Indian Embassy in Israel, and the Atlantic Council and
              Hudson Institute think tanks in Washington, DC. He holds an MA in
              Middle East Studies, an MA in Government, and is completing a PhD
              in Middle East History.
            </p>
            <ul className="grid grid-cols-2 gap-6 p-6 text-xl font-bold bg-gray-300">
              <h3 className="col-span-2 mb-6 font-serif text-3xl">
                Consulting Services
              </h3>
              <li>• Written geopolitical analysis</li>
              <li>• Foreign media monitoring</li>
              <li>• Due diligence support</li>
              <li>• Training and lectures</li>
              <li className="mt-6 font-serif">View all service offerings ➡</li>
              <li className="mt-6 font-serif">Read sample publications ➡</li>
            </ul>
          </div>
          <div className="col-span-1 py-1"></div>
        </div>
      </SectionContainer>
    </>
  )
}
