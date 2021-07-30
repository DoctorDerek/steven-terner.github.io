import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/CustomImage"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <>
      <PageSeo
        title="Contact Steven Terner, LLC - Middle East Business Consultants"
        description="We are multi-linguistic business intelligence consultants serving both public & private sector institutions. We're available for hire for consulting services."
        url={`${siteMetadata.siteUrl}/contact`}
      />
      <PageTitle>Contact</PageTitle>
      <SectionContainer
        fullWidth={true}
        className="text-gray-900 from-blue-pale to-blue-200 bg-gradient-to-b dark:text-gray-100 dark:to-blue-800 dark:from-blue-600"
      >
        <div className="grid grid-cols-1 px-4 py-8 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 md:grid-cols-8">
          <div className="flex flex-col items-center justify-between w-full col-span-5 space-y-16 leading-relaxed text-center border-gray-400 border-solid md:pr-2 lg:pr-4 xl:pr-8 md:border-r-2 md:pb-0 md:space-y-0">
            <h2 className="font-serif text-3xl font-bold">
              We're looking forward to working with you.
            </h2>
            <h3 className="text-2xl">
              For consulting opportunities, please contact us using the form
              below.
            </h3>
          </div>
          <div className="hidden col-span-3 md:pl-2 md:block">
            <AboutSidebar />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer fullWidth={true} className="text-gray-900">
        <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:grid-cols-8">
          <div className="col-span-4 space-y-6 text-2xl leading-relaxed md:text-3xl">
            <ContactForm />
          </div>
          <div className="grid col-span-4 h-96 xl:h-full">
            <Image
              alt="A globe turned to display the Middle East and Central / West Asia sitting on a wood desk in a wood-paneled room."
              src="/static/images/kyle-glenn-nxt5htlmlge-unsplash.jpg"
              className="rounded-3xl"
            />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="md:hidden">
          <AboutSidebar />
        </div>
      </SectionContainer>
    </>
  )
}
