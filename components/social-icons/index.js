import Email from "./email.svg"
import Medium from "./medium.svg"
import Linkedin from "./linkedin.svg"
import Twitter from "./twitter.svg"

// Icons taken from: https://simpleicons.org/

const components = {
  email: Email,
  medium: Medium,
  linkedin: Linkedin,
  twitter: Twitter,
}

const classNames = (...classes) => classes.join(" ")

const SocialIcon = ({
  kind = () => {
    "Missing required kind prop in SocialIcon"
  },
  href,
}) => {
  const SocialSvg = components[kind]

  // brand colors for social icons
  // arbitrary values enabled by Tailwind CSS JIT (Just-In-Time) Engine
  const socialColors = {
    twitter: "bg-[#1DA1F2]",
    linkedin: "bg-[#2867B2]",
    medium: "bg-[#12100E]",
    email: "bg-[#206A5D]",
  }

  return (
    <a
      className={classNames(
        "text-sm text-gray-100 rounded-full border-2 border-transparent hover:border-gray-100 border-solid transition duration-700",
        socialColors[kind]
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className="w-5 h-5 m-2 fill-current" />
    </a>
  )
}

export default SocialIcon
