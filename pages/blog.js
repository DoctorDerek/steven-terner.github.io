// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"
import PageTitle from "@/components/PageTitle"
import Image from "next/image"
import SectionContainer from "@/components/SectionContainer"
import Interweave from "interweave"
import { Filter } from "interweave"
import Link from "@/components/Link"
import AboutSidebar from "@/components/AboutSidebar"

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@steventerner&api_key=9rkqqkkxexestx4pzjna03qheok1it2ysrmxtbaa"
  )

  const data = await res.json()
  // const { url, title, link, author, description, image, items } = data.feed
  const posts = data.items

  return { props: { posts } }
}

export default function Blog({ posts }) {
  const VerticalBar = () => (
    <span className="px-1 text-gray-300 dark:text-gray-600">|</span>
  )
  return (
    <>
      <SectionContainer>
        <PageSeo
          title={`Blog - ${siteMetadata.author}`}
          description={siteMetadata.description}
          url={`${siteMetadata.siteUrl}/blog`}
        />
        <PageTitle>Blog</PageTitle>
      </SectionContainer>
      <div className="from-green-lighter to-green-dark bg-gradient-to-b dark:from-green-dark dark:to-green-900">
        <SectionContainer fullWidth={true}>
          <h2 className="flex flex-col max-w-6xl px-8 py-8 space-y-6 font-serif text-xl font-bold sm:space-y-16 sm:px-16 sm:py-32 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            <span>
              We specialize in the political economics of the Middle East and
              Central Asia.
            </span>
            <span>
              Our blog features some of our latest original research and
              analysis.
            </span>
          </h2>
          {/*I am a multilingual analyst, scholar, consultant, and cultural liaison. I specialize in the political economics of the Middle East and Central Asia. I provide bespoke reports including geopolitical analysis, economic forecasting, and due diligence assessments for public and private sector institutions. I frequently publish articles with foreign policy think tanks and international news sites, and present original research on socio-political, intelligence, corporate, and leadership analysis to a wide variety of audiences.

Areas of Expertise Include:
-Economics: Sector and Country-Specific Analysis, Data Policy, Banking Regulations, Infrastructure Development, Emerging Market Ecosystems, Resource Allocation
-Politics: Election and Legislative Forecasting, Policy Assessment, Foreign Policy Decision-Making and Leadership Analysis, Inter- and Intra-Party Factionalism
-Foreign Language Research
-Due Diligence: Company and Executive Profiles, Litigation Reports, Press, Risk and Liability Assessment
-Historical Reports on People, Places, Populations, and Political Context
-Religious and Social Customs and Practices
-Resource and Crisis Management
-Cultural Liaising and Translation*/}
        </SectionContainer>
      </div>
      <SectionContainer>
        <div className="py-6 space-y-6 sm:py-12 sm:space-y-12">
          {posts.map((post) => {
            const {
              title,
              pubDate,
              link,
              //guid,
              author,
              thumbnail,
              description,
            } = post
            // The post's description is an HTML string that may contain an image
            // and/or headings.We want the text just from the first paragraph:
            class ParagraphFilter extends Filter {
              attribute(name, value) {
                return value
              }

              node(name, node) {
                console.log(name)
                if (name === "p") {
                  return node
                }

                return null
              }
            }
            const filter = new ParagraphFilter()

            // interweave will strip all the HTML except <p>
            const interweave = (
              <Interweave
                content={description}
                noWrap={true}
                filters={[filter]}
                noHtml={true}
              />
            )

            return (
              <div
                key={title}
                className="max-w-md pr-2 mx-auto border-2 border-gray-300 border-solid md:pr-0 md:max-w-md lg:max-w-xl xl:max-w-2xl"
              >
                <div className="flex pr-2 mx-auto space-x-2 md:pr-0 md:flex-col md:space-x-0">
                  <div className="flex items-center flex-shrink-0">
                    <div className="relative w-16 h-16 xs:w-24 xs:h-24 sm:w-32 sm:h-32 md:w-full md:h-60 lg:h-80 xl:h-96">
                      <Link href={link}>
                        <Image
                          src={thumbnail}
                          alt="ocean"
                          className="object-cover"
                          layout="fill"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col justify-around md:space-y-1 lg:space-y-2 md:px-3 md:py-2 align-left">
                    <Link
                      href={link}
                      className="text-gray-900 dark:text-gray-100"
                    >
                      <h2 className="font-bold sm:text-xl md:text-base lg:text-xl xl:text-2xl">
                        {title}
                      </h2>
                    </Link>
                    <p className="hidden text-xs sm:text-base xs:line-clamp-2 lg:text-lg">
                      {interweave}
                    </p>
                    <p className="flex flex-wrap text-gray-400 text-2xs sm:text-base lg:text-lg">
                      <Link href={link} className="text-gray-400">
                        Medium
                        <VerticalBar />
                      </Link>
                      <span>
                        {author}
                        <VerticalBar />
                      </span>
                      <span>
                        {new Date(pubDate).toLocaleString("en-us", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}{" "}
                        {/*Feb 19, 2021*/}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </SectionContainer>

      <div className="bg-gradient-to-b from-blue-light to-blue-dark">
        <SectionContainer>
          <div className="grid grid-cols-1 py-12 space-y-12 sm:space-y-16 md:grid-cols-7 md:space-y-0 sm:py-16 md:py-20 lg:py-24 xl:py-32">
            <div className="flex flex-col max-w-6xl col-span-4">
              <h2 className="font-serif text-2xl font-bold lg:text-3xl">
                Areas Of Expertise Include:
              </h2>{" "}
              <ul className="ml-6 text-sm list-disc sm:text-base lg:text-lg xl:text-xl">
                <li>
                  <u>Economics</u>: Sector and Country-Specific Analysis, Data
                  Policy, Banking Regulations, Infrastructure Development,
                  Emerging Market Ecosystems, Resource Allocation
                </li>
                <li>
                  <u>Politics</u>: Election and Legislative Forecasting, Policy
                  Assessment, Foreign Policy Decision Making and Leadership
                  Analysis, Inter- and Intra-Party Factionalism
                </li>
                <li>
                  <u>Due Diligence</u>: Company and Executive Profiles,
                  Litigation Reports, Press, Risk and Liability Assessment
                </li>
                <li>
                  <u>Foreign Language Research</u>: Historical Reports on
                  People, Places, Populations, and Political Context
                </li>
                <li>
                  <u>Cultural Liaising</u>: Translation, Religious and Social
                  Customs and Practices, and Resource and Crisis Management
                </li>
              </ul>
            </div>
            <AboutSidebar />
          </div>
        </SectionContainer>
      </div>
    </>
  )
}
