import tinytime from 'tinytime'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import ImageSlideshow from '@/components/KeenSlider'

const MAX_DISPLAY = 5
const postDateTemplate = tinytime('{MMMM} {DD}, {YYYY}')

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSeo
        title={siteMetadata.title}
        description={siteMetadata.description}
        url={siteMetadata.siteUrl}
      />
      <div className="w-full pt-6 pb-8 space-y-2 md:space-y-5">
        <div className="bg-gray-800"></div>
        <ImageSlideshow />
        <div className="bg-gray-300">3 Columns</div>
        <div className="bg-green-800">About</div>
      </div>
    </>
  )
}
