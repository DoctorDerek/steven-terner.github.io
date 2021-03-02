import React, { memo } from "react"
import Image from "next/image"

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component")
}

const Twemoji = ({ emoji = isRequired() }) => {
  const img = emoji.codePointAt(0).toString(16)

  return (
    <Image
      src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
      height="72"
      width="72"
      alt={emoji}
    />
  )
}

export default memo(Twemoji)
