// import { getAllFilesFrontMatter } from "@/lib/mdx"
import siteMetadata from "@/data/siteMetadata"
// import ListLayout from "@/layouts/ListLayout"
import { PageSeo } from "@/components/SEO"
import Image from "next/image"
import SectionContainer from "@/components/SectionContainer"

export async function getStaticProps() {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@steventerner"
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
        return (
          <div key={title}>
            <h2>{title}</h2>
            <p>{pubDate}</p>
            <p>{link}</p>
            <p>{author}</p>
            <Image src={thumbnail} width="600" height="300"></Image>
            <p>{guid}</p>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        )
      })}
    </SectionContainer>
  )
}
