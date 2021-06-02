import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"
import Twemoji from "@/components/Twemoji"
import Link from "@/components/Link"

/*
I just updated my LinkedIn with the following paragraphs in the About section. So if you are looking for more content, feel free to draw it from here:

Steven envió 5 de abril a las 17:11
I am a multilingual analyst, scholar, consultant, and cultural liaison. I specialize in the political economics of the Middle East and Central Asia. I provide bespoke reports including geopolitical analysis, economic forecasting, and due diligence assessments for public and private sector institutions. I frequently publish articles with foreign policy think tanks and international news sites, and present original research on socio-political, intelligence, corporate, and leadership analysis to a wide variety of audiences.

Areas of Expertise Include:
-Economics: Sector and Country-Specific Analysis, Data Policy, Banking Regulations, Infrastructure Development, Emerging Market Ecosystems, Resource Allocation
-Politics: Election and Legislative Forecasting, Policy Assessment, Foreign Policy Decision-Making and Leadership Analysis, Inter- and Intra-Party Factionalism
-Foreign Language Research
-Due Diligence: Company and Executive Profiles, Litigation Reports, Press, Risk and Liability Assessment
-Historical Reports on People, Places, Populations, and Political Context
-Religious and Social Customs and Practices
-Resource and Crisis Management
-Cultural Liaising and Translation

Recent Projects Include:
-Due Diligence on Israeli companies
-Iranian Economic and Political Forecasting
-Comparative Assessment of Regional Fintech Ecosystems
-Historical Reports on Religious Communities
-NIMA Banking System
-FATF and GDPR Compliance
-Data Policy Modernization
-Negative Press Investigations
-Litigation Reports
*/

/*
Steven Terner is a multi-lingual American scholar and researcher who has specialized for more than a decade on socio-political and economic analysis...
*/

/*
Do you have anything else you want to put on the top of the about page

and/or

for the quote or bottom biography on the services page?

If I take all them out completely it'll change the design of those pages because I'll be removing those sections.
Steven envió 5 de abril a las 14:00
i gotta work on these
Steven envió 5 de abril a las 14:00
to replace "Your liaison for doing business in the Middle East and Central/West Asia." on the About page
Steven envió 5 de abril a las 14:00
"Your resource for diligence research, politico-economic analysis, and cultural liaising services in the Middle East and Central Asia."
Steven envió 5 de abril a las 14:00
and then on the bottom of the Services page, to replace "My consulting experience includes the Jerusalem Post, the Indian Embassy in Israel, and the Atlantic Council and Hudson Institute think tanks in Washington, DC."
Steven envió 5 de abril a las 14:00
with
Steven envió 5 de abril a las 14:00
"Consulting and business intelligence services include due diligence research, economic analysis, political forecasting, and cultural liaising."
Steven envió 5 de abril a las 14:00
and then the other notes from when we spoke last week
*/

/*
Derek, the site looks great!
Steven envió 29 de marzo a las 12:11
Could we change some of the wording?
Steven envió 29 de marzo a las 12:11
E.g. the heading on the pages from "Steven Terner" to "Steven Terner, LLC"
Steven envió 29 de marzo a las 12:11
and the consulting-related content to the third person, either saying "Steven Terner, LLC provides..." or "We provide..." etc
Steven envió 29 de marzo a las 12:11
"My consulting experience includes the Jerusalem Post, the Indian Embassy in Israel, and the Atlantic Council and Hudson Institute think tanks in Washington, DC." I don't think this stuff is so relevant.

Steven envió 29 de marzo a las 12:11
This makes more sense: "I am a multilingual analyst, scholar, and consultant specializing in the political economics of the Middle East and Central Asia. I provide bespoke reports including geopolitical analysis, economic forecasting, and due diligence assessments for public and private sector institutions. I frequently publish articles with foreign policy think tanks and international news sites, presenting original research on socio-political, intelligence, corporate, and leadership analysis to a wide variety of audiences."

Steven envió 29 de marzo a las 12:13
or rather...
Steven envió 29 de marzo a las 12:13
"Steven Terner is  a multilingual analyst, scholar, and consultant specializing in the political economics of the Middle East and Central Asia."
Steven envió 29 de marzo a las 12:13
"Steven Terner, LLC provides bespoke reports including geopolitical analysis, economic forecasting, and due diligence assessments for public and private sector institutions."
Steven envió 29 de marzo a las 12:13
"Steven Terner frequently publishes articles with foreign policy think tanks and international news sites, and presents original research on socio-political, intelligence, corporate, and leadership analysis to a wide variety of audiences."
Steven envió 29 de marzo a las 12:13
on the About page:

Steven envió 29 de marzo a las 12:20
Steven Terner is a multi-lingual American scholar and researcher who since 2008 has specialized in socio-political and economic analysis of the Middle East and Central/West Asia, with a focus on Iran.

Mr. Terner's research and consulting practice is built on six years living, studying, and working in the Middle East, and includes prior employment at the Jerusalem Post, the Indian Embassy in Israel, and the Atlantic Council and Hudson Institute think tanks in Washington, DC. He holds an MA in Middle East Studies, an MA in Government, and is completing a PhD in Middle East History.

Steven envió 29 de marzo a las 12:26
and then please remove "Your liaison for doing business in the Middle East and Central/West Asia." from the top of that page
Steven envió 29 de marzo a las 12:26
On the Services page: "Multi-linguistic international business consulting for the Middle East and Central/West Asia." should be :
Steven envió 29 de marzo a las 12:26
Multi-lingual politico-economic analysis, due diligence research, and risk assessments aimed at identifying market opportunities and challenges in the Middle East and Central Asia.
Steven envió 29 de marzo a las 12:26
multi-lingual, rather than multi-linguistic

Steven envió 29 de marzo a las 12:27
and then the quotes on the services page: “I can help your business access new markets with culturally-sensitive and effective business strategy.” and "My consulting experience includes the Jerusalem Post, the Indian Embassy in Israel, and the Atlantic Council and Hudson Institute think tanks in Washington, DC." can we just remove those?

Steven envió 29 de marzo a las 12:29
I like the Portfolio and Blog pages a lot. Can you show me how to add to them when I get more publications?
Steven envió 29 de marzo a las 12:29
and there's a contact email that pops up "contact@steventerner.com" can it be directed to or just be "steven@steventerner.com"?
*/

export default function About() {
  return (
    <>
      <PageSeo
        title="About Steven Terner, LLC - Middle East Business Consultants"
        description="We are multi-linguistic consultants for the Middle East & Central Asia offering due diligence research, politico-economic analysis, and cultural liaising."
        url={`${siteMetadata.siteUrl}/about`}
      />
      <PageTitle>About</PageTitle>
      <SectionContainer>
        <div className="flex flex-col-reverse justify-between md:flex-row md:space-x-8 lg:space-x-12">
          <div className="hidden md:block">
            <AboutSidebar photo={true} />
          </div>

          <div className="flex flex-col max-w-2xl space-y-6 xl:space-y-12 lg:space-y-9">
            <h2 className="font-serif text-2xl font-bold lg:text-3xl xl:text-4xl">
              <div className="flex items-center md:hidden">
                <div className="grid w-40 h-40 max-w-full mx-auto mb-4 border-2 border-gray-800 border-solid rounded-full sm:w-48 sm:h-48">
                  <Image
                    alt="Portrait of Steven Terner"
                    src="/static/images/StevenTernerPhoto2-cropped.jpg"
                    className="rounded-full"
                    sizes="portrait"
                  />
                </div>
                <div className="w-full text-3xl text-center sm:text-4xl">
                  Steven Terner, LLC
                </div>
              </div>
              Your resource for diligence research, politico-economic analysis,
              and cultural liaising services in the Middle East and Central
              Asia.
            </h2>
            <p className="text-lg xl:text-2xl xl:leading-8">
              Steven Terner is a multi-lingual American scholar and researcher
              who has spent more than a decade specializing in socio-political
              and economic analysis of the Middle East and Central/West Asia,
              with a focus on Iran. His intent is to serve as a cultural
              liaison, guiding international business in expanding global
              markets.
            </p>
            <p className="text-lg xl:text-2xl xl:leading-8">
              Mr. Terner spent six years living, studying, and working in the
              Middle East. His professional experience includes the Jerusalem
              Post, the Indian Embassy in Israel, and the Atlantic Council and
              Hudson Institute think tanks in Washington, DC. He holds an MA in
              Middle East Studies, an MA in Government, and is completing a PhD
              in Middle East History.
            </p>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <ul className="grid grid-cols-1 gap-6 p-6 mx-auto mt-12 text-xl font-bold bg-gray-300 rounded-3xl sm:grid-cols-2 dark:bg-gray-700">
          <h3 className="col-span-1 font-serif text-3xl sm:col-span-2">
            Consulting Services
          </h3>
          <li className="flex items-center mt-6 space-x-2 sm:col-span-1">
            <Twemoji emoji="📝" size="w-8 h-8" />
            <span>Written geopolitical analysis</span>
          </li>
          <li className="flex items-center mt-6 space-x-2">
            <Twemoji emoji="📰" size="w-8 h-8" />
            <span>Foreign media monitoring</span>
          </li>
          <li className="flex items-center mt-6 space-x-2">
            <Twemoji emoji="🔍" size="w-8 h-8" />
            <span>Due diligence support</span>
          </li>
          <li className="flex items-center mt-6 space-x-2">
            <Twemoji emoji="📕" size="w-8 h-8" />
            <span>Training and lectures</span>
          </li>
          <li className="flex items-center mt-6 space-x-2 font-serif">
            <Link href="/services">View all service offerings</Link>
            <Twemoji emoji="➡" size="w-6 h-6" />
          </li>
          <li className="flex items-center mt-6 space-x-2 font-serif">
            <Link href="/portfolio">Read sample publications</Link>
            <Twemoji emoji="➡" size="w-6 h-6" />
          </li>
        </ul>
      </SectionContainer>
      <SectionContainer>
        <div className="mt-16 md:hidden">
          <AboutSidebar />
        </div>
      </SectionContainer>
    </>
  )
}
