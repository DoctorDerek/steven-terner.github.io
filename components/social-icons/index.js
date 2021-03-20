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

const socialColors = {
  twitter: "#1DA1F2",
  linkedin: "#2867B2",
  medium: "#12100E",
  email: "#206a5d",
}

const SocialIcon = ({
  kind = () => {
    "Missing required kind prop in SocialIcon"
  },
  href,
  size = 5,
}) => {
  const SocialSvg = components[kind]

  const defaultClass = "text-sm text-gray-100 rounded-full "

  let className = defaultClass
  switch (kind) {
    // brand colors for social icons
    // arbitrary values enabled by Tailwind CSS JIT (Just-In-Time) Engine
    case "twitter":
      className += "bg-[#1DA1F2]"
      break
    case "linkedin":
      className += "bg-[#2867B2]"
      break
    case "medium":
      className += "bg-[#12100E]"
      break
    case "email":
      className += "bg-[#206a5d]"
      break
  }

  return (
    <a
      className={className}
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
