import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgreylk")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <strong>Name</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 align-top border-2 border-black border-solid rounded-xl"
        name="email"
        id="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">
        <strong>Email</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 align-top border-2 border-black border-solid rounded-xl"
        name="name"
        id="name"
      />
      <label htmlFor="message">
        <strong>Name</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        type="textarea"
        className="w-full pb-48 pl-1 align-top border-2 border-black border-solid rounded-xl h-60"
        placeholder="Let me know how I can help"
        name="message"
        id="message"
      />
      {/*padding-bottom for vertical alignment of placeholder to top*/}
    </form>
  )
}

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
          <div className="flex flex-col items-center justify-center col-span-5 py-16 space-y-16 leading-relaxed text-center">
            <h2 className="font-serif text-3xl font-bold">
              I’m looking forward to working with you.
            </h2>
            <h3 className="text-2xl">
              For consulting opportunities, please contact me using the form
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
            />
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
