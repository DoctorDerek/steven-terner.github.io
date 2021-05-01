import React, { memo } from "react"
import Image from "@/components/Image"

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component")
}

const Twemoji = ({ emoji = isRequired() }) => {
  if (!emoji) isRequired() // handle falsy

  const img = emoji.codePointAt(0).toString(16)

  return (
    <div className="grid flex-shrink-0 w-16 h-16">
      <Image
        src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
        alt={emoji}
      />
    </div>
  )
}

export default memo(Twemoji)
