import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"

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
        <div className="flex flex-col-reverse md:flex-row md:space-x-6">
          <AboutSidebar photo={true} />

          <div className="flex flex-col space-y-12">
            <h2 className="font-serif text-4xl font-bold">
              <div className="block pb-12 md:hidden">
                <div className="grid w-40 h-40 max-w-full mx-auto border-2 border-gray-800 border-solid rounded-full sm:w-60 sm:h-60">
                  <Image
                    alt="ocean"
                    src="/static/images/StevenTernerPhoto2-cropped.jpg"
                    className="rounded-full"
                    sizes="portrait"
                  />
                </div>
                <p className="font-serif text-2xl font-bold text-center sm:text-4xl">
                  Steven Terner
                </p>
              </div>
              Your resource for diligence research, politico-economic analysis,
              and cultural liaising services in the Middle East and Central
              Asia.
            </h2>
            <p className="text-xl leading-8">
              Steven Terner is a multi-lingual American scholar and researcher
              who has spent more than a decade specializing in socio-political
              and economic analysis of the Middle East and Central/West Asia,
              with a focus on Iran. His intent is to serve as a cultural
              liaison, guiding international business in expanding global
              markets.
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
