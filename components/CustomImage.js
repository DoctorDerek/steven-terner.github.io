import React from "react"
import ImageFixed from "next/image"

const isRequired = () => {
  throw new Error("Both alt and src parameters are required in CustomImage")
}

const CustomImage = ({
  alt = isRequired(),
  src = isRequired(),
  layout = "fill", // Assume dynamic sizing
  className = "object-cover", // Assume dynamic sizing
  sizes = "100vw", // Next.js default
  quality = "75", // Next.js default
  preload = "false", // Next.js default; can toggle for above-the-fold images
  ...rest
}) => {
  const validSizes = {
    "100vw": "100vw",
    // 3-column layout: portrait image -> portrait crop
    portrait: "33vw", // "(max-width: 1280px) 384px, (max-width: 768px) 256px, 128px"
    // 3-column layout: landscape image -> portrait crop (should be 1.5x larger)
    landscape: "50vw", //"(max-width: 1280px) 576px, (max-width: 768px) 384px, 50vw"
  }
  if (!Object.keys(validSizes).includes(sizes)) {
    throw new Error("An invalid custom sizes prop was passed to CustomImage")
  }
  sizes = validSizes[sizes]

  // Add object-cover to className if other classes were added like rounded-full
  if (className !== "object-cover") {
    className += " object-cover"
  }

  const resultingProps = {
    alt,
    src,
    layout,
    className,
    sizes,
    quality,
    preload,
    ...rest,
  }

  // We need a wrapper div with position: relative for dynamic sizing
  return (
    <div className="relative">
      <ImageFixed {...resultingProps} />
    </div>
  )
}

export default CustomImage

// RELEVANT CALCULATIONS FOR WIDTH
//
// SectionContainer max-width:
// xl:max-w-5xl (1024px), max-w-3xl (768px)
//
// Tailwind breakpoints:
// xl: 1280px, lg: 1024px, md: 768px, sm: 640px (min-width media queries)
//
// Cropping occurs based on image width, so landscape vs. portrait matters.
// Portrait images: height is about 1.5x the width
// Landscape images: width is about 1.5x the height
//
// Resulting max image widths in image slideshow (3 columns) for portrait:
// xl: 1024px / 3 = 341px, 768px / 3 = 256px, 550px / 3 = 183px (~33vw)
//
// Resulting max image widths in image slideshow (3 columns) for landscape:
// xl: 1024px / 3 = 341px, 768px / 3 = 256px, 550px / 3 = 183px (~33vw)
//
// This results in the following "sizes" prop for the HTML image element.
//
// "The browser ignores everything after the first matching condition, so be careful how you order the media conditions." --https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
//
