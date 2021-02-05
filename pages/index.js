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
        <div className="bg-gray-800">
          <ImageSlideshow />
        </div>
        <div className="grid text-center bg-gray-300 grid-col-1 md:grid-cols-3">
          <div>Service Offerings</div>
          <div>Sample Publications</div>
          <div>Blog</div>
        </div>
        <div className="bg-green-800">
          About Skip to content Steven Terner Steven TernerConsultant specializing in the Middle
          East Home About Service Offerings Sample Publications Blog Contact Service Offerings I
          offer expert consulting services for international businesses, newspapers, NGOs & think
          tanks. Sample Publications My consulting portfolio includes examples of my analysis of the
          Middle East & Central/West Asia. Blog I publish my latest socio-political analysis work
          here on my blog at StevenTerner.com About Steven Terner is a multi-lingual American
          scholar and researcher specializing in socio-political and economic analysis of the Middle
          East and Central/West Asia. Read more Steven Terner contact@StevenTerner.com Get in touch!
          EditHome About Service Offerings Sample Publications Blog Contact Steven Terner, Create
          your website at WordPress.com Get started :)
        </div>
      </div>
    </>
  )
}
