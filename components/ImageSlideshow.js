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
    <div ref={sliderRef} className="max-h-screen keen-slider h-3/4">
      <div className="grid grid-cols-3 gap-1 space-x-4 text-center keen-slider__slide md:gap-2 xl:gap-3">
        <Image
          alt="ocean"
          src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
          width={2177}
          height={3265}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
          width={2099}
          height={3084}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
          width={3200}
          height={4000}
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-1 space-x-4 text-center keen-slider__slide md:gap-2">
        <Image
          alt="ocean"
          src="/static/images/milad-b-fakurian-q539g9f0cYw-unsplash.jpg"
          width={3360}
          height={2100}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/mostafa-meraji-wH_5YAylHnc-unsplash.jpg"
          width={4000}
          height={3000}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/pourya-daneshvar-cYmRHwySr3U-unsplash.jpg"
          width={2778}
          height={2778}
          className="object-cover"
        />
      </div>
      <div className="grid grid-cols-3 gap-1 space-x-4 text-center keen-slider__slide md:gap-2">
        <Image
          alt="ocean"
          src="/static/images/roozbeh-eslami-o2E9zgoRFgc-unsplash.jpg"
          width={3024}
          height={4032}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/sajad-nori-cacpYWjYEt0-unsplash.jpg"
          width={6240}
          height={4160}
          className="object-cover"
        />
        <Image
          alt="ocean"
          src="/static/images/Imports, Exports, and International Partnerships photo.jpg"
          width={7952}
          height={4472}
          className="object-cover"
        />
      </div>
    </div>
  )
}

export default ImageSlideshow
