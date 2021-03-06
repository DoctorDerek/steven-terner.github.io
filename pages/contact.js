import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"

export default function Contact() {
  const Input = ({
    field = () => {
      throw new Error("Argument field is required in Input component")
    },
    placeholder = "default",
    type = "text",
  }) => {
    const HEIGHTS = {
      text: "h-10",
      textarea: "h-60 pb-48",
      // padding-bottom for vertical alignment of placeholder to top
    }
    const height = HEIGHTS[type]
    if (!height) {
      throw new Error("Unsupported type in Input component")
    }

    const name = field.toLocaleLowerCase()
    const nameUpperCase = name[0].toLocaleUpperCase() + name.slice(1)
    if (placeholder === "default") {
      placeholder = nameUpperCase
    }
    const defaultClass =
      "w-full border-2 border-black border-solid rounded-xl align-top"
    const className = defaultClass + " " + height

    return (
      <div>
        <label htmlFor={name}>
          <strong>{nameUpperCase}</strong>{" "}
          <span className="text-2xl">(required)</span>
        </label>

        <input
          type="textarea"
          {...{ placeholder, name, id: name, className }}
        />
      </div>
    )
  }
  return (
    <>
      <PageSeo
        title={`Contact - ${siteMetadata.author}`}
        description={`Contact - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/contact`}
      />
      <PageTitle>Contact</PageTitle>
      <SectionContainer fullWidth={true} className="text-gray-900 bg-blue-pale">
        <div className="grid grid-cols-8 px-16 py-32">
          <div className="flex flex-col items-center justify-center flex-shrink col-span-5 py-16 space-y-16 leading-relaxed text-center">
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
        <div className="grid grid-cols-8 gap-8 px-16 py-32">
          <div className="col-span-4 space-y-6 text-3xl leading-relaxed">
            <Input field="Name" />
            <Input field="Email" />
            <Input
              field="Message"
              type="textarea"
              placeholder="Let me know how I can help"
            />
          </div>
          <div className="grid col-span-4">
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
