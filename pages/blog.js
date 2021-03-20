// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"
import PageTitle from "@/components/PageTitle"
import Image from "next/image"
import SectionContainer from "@/components/SectionContainer"
import Interweave from "interweave"
import Link from "@/components/Link"

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
  return (
    <SectionContainer>
      <PageSeo
        title={`Blog - ${siteMetadata.author}`}
        description={siteMetadata.description}
        url={`${siteMetadata.siteUrl}/blog`}
      />
      <PageTitle>Blog</PageTitle>
      <div className="space-y-6">
        {posts.map((post) => {
          const {
            title,
            pubDate,
            link,
            guid,
            author,
            thumbnail,
            description,
          } = post
          // The post's description is an HTML string that may contain an image
          // and/or headings.We want the text just from the first paragraph:
          const interweave = <Interweave content={description} noHtml={true} />
          return (
            <div
              key={title}
              className="overflow-auto border border-gray-400 border-solid"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40">
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
                <div className="flex flex-col mx-6 justify-evenly">
                  <Link
                    href={link}
                    className="text-gray-900 dark:text-gray-100"
                  >
                    <h2 className="text-lg font-bold">{title}</h2>
                  </Link>
                  <p className="text-base line-clamp-2">{interweave}</p>
                  <p className="text-gray-500 dark:text-gray-300">
                    <Link
                      href={link}
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Medium
                    </Link>{" "}
                    | {author} | {pubDate}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionContainer>
  )
}
