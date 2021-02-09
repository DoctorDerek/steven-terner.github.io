import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

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
    sliderRef.current.addEventListener('mouseover', () => {
      setPause(true)
    })
    sliderRef.current.addEventListener('mouseout', () => {
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
    <div ref={sliderRef} className="h-80 md:h-96 lg:h-112 xl:h-128 keen-slider">
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/milad-b-fakurian-q539g9f0cYw-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/mostafa-meraji-wH_5YAylHnc-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/pourya-daneshvar-cYmRHwySr3U-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3">
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/roozbeh-eslami-o2E9zgoRFgc-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/sajad-nori-cacpYWjYEt0-unsplash.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
        <div className="relative">
          <Image
            alt="ocean"
            src="/static/images/Imports, Exports, and International Partnerships photo.jpg"
            layout="fill"
            className="object-cover"
            sizes="33vw"
          />
        </div>
      </div>
    </div>
  )
}

export default ImageSlideshow
