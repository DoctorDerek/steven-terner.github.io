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
  size = 5,
}) => {
  const SocialSvg = components[kind]

  // brand colors for social icons
  // arbitrary values enabled by Tailwind CSS JIT (Just-In-Time) Engine
  const socialColors = {
    twitter: "bg-[#1DA1F2]",
    linkedin: "bg-[#2867B2]",
    medium: "bg-[#12100E]",
    email: "bg-[#206a5d]",
  }

  return (
    <a
      className={classNames(
        "text-sm text-gray-100 rounded-full",
        socialColors.kind
      )}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current h-${size} w-${size} m-2`} />
    </a>
  )
}

export default SocialIcon
