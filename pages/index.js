import tinytime from 'tinytime'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import ImageSlideshow from '@/components/ImageSlideshow'
import SectionContainer from '@/components/SectionContainer'
import Image from 'next/image'

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
      <div className="py-4 bg-gray-900">
        <SectionContainer>
          <ImageSlideshow />
        </SectionContainer>
      </div>
      <div className="bg-gray-300">
        <SectionContainer>
          <div className="max-h-screen h-3/4">
            <div className="grid grid-cols-3 gap-1 text-center md:gap-2 xl:gap-3">
              <div>
                <Image
                  alt="ocean"
                  src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
                  width={2177}
                  height={3265}
                  className="object-cover"
                />
                <h3 className="fontSerif">Services</h3>
                <p>
                  I offer expert consulting services for international businesses, newspapers, NGOs
                  & think tanks.
                </p>
              </div>
              <div>
                <Image
                  alt="ocean"
                  src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
                  width={2177}
                  height={3265}
                  className="object-cover"
                />
                <h3 className="fontSerif">Portfolio</h3>
                <p>
                  My consulting portfolio includes examples of my analysis of the Middle East &
                  Central/West Asia.
                </p>
              </div>
              <div>
                <Image
                  alt="ocean"
                  src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
                  width={2177}
                  height={3265}
                  className="object-cover"
                />
                <h3 className="fontSerif">Blog</h3>
                <p>
                  I publish my latest socio-political analysis work here on my blog at
                  StevenTerner.com
                </p>
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="bg-green-800">
        <SectionContainer>
          About Skip to content Steven Terner Steven TernerConsultant specializing in the Middle
          East Home About Service Offerings Sample Publications Blog Contact Service Offerings I
          offer expert consulting services for international businesses, newspapers, NGOs & think
          tanks. Sample Publications My consulting portfolio includes examples of my analysis of the
          Middle East & Central/West Asia. Blog I publish my latest socio-political analysis work
          here on my blog at StevenTerner.com About Steven Terner is a multi-lingual American
          scholar and researcher specializing in socio-political and economic analysis of the Middle
          East and Central/West Asia. Read more Steven Terner contact@StevenTerner.com Get in touch!
          EditHome About Service Offerings Sample Publications Blog Contact Steven Terner
        </SectionContainer>
      </div>
    </>
  )
}
