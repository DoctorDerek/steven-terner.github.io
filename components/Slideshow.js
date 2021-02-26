import React from "react"
import { useKeenSlider } from "keen-slider/react"
import Image from "@/components/Image"
import SlideshowSlide from "@/components/SlideshowSlide"

const Slideshow = () => {
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

  return (
    <div
      ref={sliderRef}
      className="h-60 sm:h-80 md:h-112 lg:h-112 xl:h-128 keen-slider"
    >
      <SlideshowSlide>
        <Image
          alt="ocean"
          src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
          sizes="portrait"
        />
        <Image
          alt="ocean"
          src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
          sizes="portrait"
        />
        <Image
          alt="ocean"
          src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
          sizes="portrait"
        />
      </SlideshowSlide>
      <SlideshowSlide>
        <Image
          alt="ocean"
          src="/static/images/milad-b-fakurian-q539g9f0cYw-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="ocean"
          src="/static/images/mostafa-meraji-wH_5YAylHnc-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="ocean"
          src="/static/images/pourya-daneshvar-cYmRHwySr3U-unsplash.jpg"
          sizes="landscape"
        />
      </SlideshowSlide>
      <SlideshowSlide>
        <Image
          alt="ocean"
          src="/static/images/roozbeh-eslami-o2E9zgoRFgc-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="ocean"
          src="/static/images/sajad-nori-cacpYWjYEt0-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="ocean"
          src="/static/images/Imports, Exports, and International Partnerships photo.jpg"
          sizes="landscape"
        />
      </SlideshowSlide>
    </div>
  )
}

export default Slideshow
