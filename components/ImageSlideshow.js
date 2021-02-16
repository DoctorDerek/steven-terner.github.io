import React from "react"
import { useKeenSlider } from "keen-slider/react"
import Image from "next/image"

const ImageSlideshow = (props) => {
  const [pause, setPause] = React.useState(false)
  const timer = React.useRef()
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    duration: 3000, // animation duration in ms
    dragStart: () => {
      setPause(true)
    },
    dragEnd: () => {
      setPause(false)
    },
  })

  React.useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  React.useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next()
      }
    }, 5000) // autoplay interval in ms
    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

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
  // portrait image -> portrait crop
  const portrait = "160px" // "(max-width: 1280px) 384px, (max-width: 768px) 256px, 128px"
  //
  // landscape image -> portrait crop (needs to be 1.5x larger)
  const landscape = portrait //"(max-width: 1280px) 576px, (max-width: 768px) 384px, 50vw"

  const quality = 90

  return (
    <div
      ref={sliderRef}
      className="h-60 sm:h-80 md:h-112 lg:h-112 xl:h-128 keen-slider"
    >
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3 transform-gpu min-w-full max-w-full">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={portrait}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={portrait}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={portrait}
            quality={quality}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3 transform-gpu min-w-full max-w-full">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/milad-b-fakurian-q539g9f0cYw-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/mostafa-meraji-wH_5YAylHnc-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/pourya-daneshvar-cYmRHwySr3U-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3 transform-gpu min-w-full max-w-full">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/roozbeh-eslami-o2E9zgoRFgc-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/sajad-nori-cacpYWjYEt0-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/Imports, Exports, and International Partnerships photo.jpg"
            layout="fill"
            className="object-cover"
            sizes={landscape}
            quality={quality}
          />
        </div>
      </div>
    </div>
  )
}

export default ImageSlideshow
