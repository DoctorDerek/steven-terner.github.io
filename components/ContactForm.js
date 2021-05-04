import { useForm, ValidationError } from "@formspree/react"

export default function ContactForm() {
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
        className="w-full h-10 pl-1 text-xl align-top border-2 border-black border-solid rounded-xl md:text-2xl"
        name="email"
        id="email"
        placeholder="Steven Terner, LLC"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <label htmlFor="email">
        <strong>Email</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <input
        type="text"
        className="w-full h-10 pl-1 text-xl align-top border-2 border-black border-solid rounded-xl md:text-2xl"
        name="name"
        id="name"
        placeholder="hello@gmail.com"
      />
      <label htmlFor="message">
        <strong>Message</strong>{" "}
        <span className="text-xl md:text-2xl">(required)</span>
      </label>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <input
        type="textarea"
        className="w-full pb-48 pl-1 align-top border-2 border-black border-solid rounded-3xl h-60"
        placeholder="Let us know how we can help 💼"
        name="message"
        id="message"
      />
      {/*padding-bottom for vertical alignment of placeholder to top*/}
    </form>
  )
}
