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

const SocialIcon = ({ kind, href, size = 5 }) => {
  const SocialSvg = components[kind]

  return (
    <a
      className={`rounded-full bg-social-${kind} text-sm text-gray-100 dark:text-gray-200 hover:text-green-dark dark:hover:text-blue-400`}
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
