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
          <div className="grid grid-cols-3 gap-1 text-center md:gap-2 xl:gap-3">
            <div>
              <div className="relative h-36">
                <Image
                  alt="ocean"
                  src="/static/images/Iran Currency.jpg"
                  className="object-cover rounded-full"
                  layout="fill"
                  sizes="30vw"
                />
              </div>
              <h3 className="fontSerif">Services</h3>
              <p>
                I offer expert consulting services for international businesses, newspapers, NGOs &
                think tanks.
              </p>
            </div>
            <div>
              <div className="relative h-36">
                <Image
                  alt="ocean"
                  src="/static/images/Banking, Currency, Policy photo.jpg"
                  layout="fill"
                  className="object-cover rounded-full"
                  sizes="33vw"
                />
              </div>
              <h3 className="fontSerif">Portfolio</h3>
              <p>
                My consulting portfolio includes examples of my analysis of the Middle East &
                Central/West Asia.
              </p>
            </div>
            <div>
              <div className="relative h-36">
                <Image
                  alt="ocean"
                  src="/static/images/Iran Tehran traffic.jpg"
                  layout="fill"
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="fontSerif">Blog</h3>
              <p>
                I publish my latest socio-political analysis work here on my blog at
                StevenTerner.com
              </p>
            </div>
          </div>
        </SectionContainer>
      </div>
      <div className="max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0">
        <div className="grid grid-cols-3 gap-1 text-center md:gap-2 xl:gap-3">
          <div>
            <div className="relative h-36">
              <Image
                src="/static/images/ocean.jpeg"
                className="object-cover rounded-full"
                layout="fill"
                sizes="(min-width: 768px) 256px, (min-width: 1024px) 384px, 128px" // 128px used if width < 768px

                // Tailwind CSS explanation
                // max-w-3xl
                //   {max-width: 48rem/* 768 px */;}
                // xl:max-w-5xl
                //   @media (min-width: 1280px) {max-width: 64rem/* 1024px */; }
                // h-36
                //   {height: 9rem/* 144px */;}

                // These "sizes" result in almost the same behavior as 33vw.

                // A minimized Chrome window is 500px and will load the 128px
                // version. Later, when using 33vw, the 256px version will load.

                // That's because 33% (33vw) of 500px is 165px, so 256px loads.
                // (The resulting image is 148x144 when scaled with CSS.)

                // Note that this requires the following in next.config.js:
                /*
                module.exports = {
                images: {
                  imageSizes: [16, 32, 48, 64],
                  deviceSizes: [96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                },}
                */
                // You can inspect the image in the HTML code in Chrome in order
                // to find out its "intrinsic" size, as served by next.js.

                // Due to caching, you'll need to load a new private window at
                // the window size you want to test in Chrome.

                // You can also run Lighthouse in Google DevTools to test sizes.
              />
            </div>
          </div>
          <div>
            <div className="relative h-36">
              <Image
                src="/static/images/ocean.jpeg"
                className="object-cover rounded-full"
                layout="fill"
                sizes="33vw"
              />
            </div>
          </div>
          <div>
            <div className="relative h-36">
              <Image
                src="/static/images/ocean.jpeg"
                className="object-cover rounded-full"
                layout="fill"
                sizes="33vw"
              />
            </div>
          </div>
        </div>
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
