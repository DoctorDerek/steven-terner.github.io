import siteMetadata from "@/data/siteMetadata"
import AboutSidebar from "@/components/AboutSidebar"
import { PageSeo } from "@/components/SEO"
import SectionContainer from "@/components/SectionContainer"
import PageTitle from "@/components/PageTitle"
import Image from "@/components/Image"
import { useState } from "react"
import { useForm, ValidationError } from "@formspree/react"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgreylk")
  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  )
}

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
      "w-full border-2 border-black border-solid rounded-xl align-top pl-1"
    const className = defaultClass + " " + height

    return (
      <div>
        <label htmlFor={name}>
          <strong>{nameUpperCase}</strong>{" "}
          <span className="text-xl md:text-2xl">(required)</span>
        </label>

        <input
          type="textarea"
          {...{ placeholder, name, id: name, className }}
        />
      </div>
    )
  }
  const [query, setQuery] = useState({
    name: "",
    email: "",
  })

  // Update inputs value
  const handleParam = () => (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  // Form Submit function
  const formSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value)
    })
    fetch("https://getform.io/f/3391bf8b-9b28-430c-b394-cd69095451ae", {
      method: "POST",
      body: formData,
    }).then(() => setQuery({ name: "", email: "", message: "" }))
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
      <h2>Getform</h2>
      <form
        acceptCharset="UTF-8"
        action="https://formspree.io/f/xrgreylk"
        method="POST"
      >
        {/*https://getform.io/f/3391bf8b-9b28-430c-b394-cd69095451ae*/}
        <input type="email" name="email" placeholder="Your Email" />
        <input type="text" name="name" placeholder="Your Name" />
        <input type="text" name="message" placeholder="Your Message" />
        <button type="submit">Send</button>
      </form>
      <div className="App">
        <h1>NextJS form using Getform.io</h1>
        <form onSubmit={formSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Name"
              className="form-control"
              value={query.name}
              onChange={handleParam()}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Email"
              className="form-control"
              value={query.email}
              onChange={handleParam()}
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input
              type="text"
              name="message"
              id="message"
              required
              placeholder="Message"
              className="form-control"
              value={query.message}
              onChange={handleParam()}
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
      <hr />
      <h2>Formspree</h2>
      <ContactForm />
      <SectionContainer fullWidth={true} className="text-gray-900">
        <div className="grid grid-cols-1 gap-8 px-4 py-8 sm:px-6 sm:py-16 md:px-8 md:py-24 lg:px-16 lg:py-32 xl:grid-cols-8">
          <div className="col-span-4 space-y-6 text-2xl leading-relaxed md:text-3xl">
            <Input field="Name" />
            <Input field="Email" />
            <Input
              field="Message"
              type="textarea"
              placeholder="Let me know how I can help"
            />
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
