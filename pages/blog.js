// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"
import Image from "next/image"
import SectionContainer from "@/components/SectionContainer"
import Interweave from "interweave"

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@steventerner&api_key=9rkqqkkxexestx4pzjna03qheok1it2ysrmxtbaa"
  )

  const data = await res.json()
  const { url, title, link, author, description, image, items } = data.feed
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
        let desc = /<p>(.*)<\/p>/i.exec(description)[1]
        return (
          <div
            key={title}
            className="overflow-auto border border-gray-400 border-solid"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40">
                  <Image
                    src={thumbnail}
                    alt="ocean"
                    className="object-cover"
                    layout="fill"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-evenly">
                <h2 className="flex-auto">{title}</h2>
                <div className="flex-auto">
                  <p className="truncate">
                    <Interweave content={desc} noHtml={true} />
                  </p>
                </div>
                <div className="flex-auto">
                  <p className="text-gray-500">
                    Medium | {author} | {pubDate}
                  </p>
                </div>
              </div>
              <div className="hidden">
                <h2>{title}</h2>
                <p>{pubDate}</p>
                <p>{link}</p>
                <p>{author}</p>
                <p>{guid}</p>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>
        )
      })}
    </SectionContainer>
  )
}
