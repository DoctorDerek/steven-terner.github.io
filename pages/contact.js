import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <>
      <PageSeo
        title={`Contact - ${siteMetadata.author}`}
        description={`Contact - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/contact`}
      />
      <PageTitle>Contact</PageTitle>
      <SectionContainer fullWidth={true} className="text-gray-900 bg-blue-pale">
        <div className="grid grid-cols-1 px-4 py-8 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 md:grid-cols-8">
          <div className="flex flex-col items-center justify-between col-span-5 pb-16 pr-4 space-y-16 leading-relaxed text-center border-gray-400 border-solid md:border-r-2 sm:pr-6 md:pr-8 lg:pr-16 md:pb-0 md:space-y-0">
            <h2 className="font-serif text-3xl font-bold">
              We're looking forward to working with you.
            </h2>
            <h3 className="text-2xl">
              For consulting opportunities, please contact us using the form
              below.
            </h3>
          </div>
          <AboutSidebar />
        </div>
      </SectionContainer>
      <SectionContainer fullWidth={true} className="text-gray-900">
        <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:grid-cols-8">
          <div className="col-span-4 space-y-6 text-2xl leading-relaxed md:text-3xl">
            <ContactForm />
          </div>
          <div className="grid col-span-4 h-96 xl:h-full">
            <Image
              alt="ocean"
              src="/static/images/kyle-glenn-nxt5htlmlge-unsplash.jpg"
              className="rounded-3xl"
            />
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
