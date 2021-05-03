import React, { memo } from "react"
import Image from "@/components/Image"

const isRequired = () => {
  throw new Error("You need to specify an emoji for the Twemoji component")
}

const classNames = (...classes) => classes.filter(Boolean).join(" ")

const Twemoji = ({ emoji = isRequired(), size = "w-16 h-16" }) => {
  if (!emoji) isRequired() // handle falsy

  const img = emoji.codePointAt(0).toString(16)

  return (
    <div className={classNames(size, "grid flex-shrink-0")}>
      <Image
        src={`https://twemoji.maxcdn.com/v/latest/svg/${img}.svg`}
        alt={emoji}
      />
    </div>
  )
}

export default memo(Twemoji)
