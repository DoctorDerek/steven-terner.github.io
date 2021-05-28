import React, { useEffect, useState, useRef } from "react"
import { useKeenSlider } from "keen-slider/react"
import SlideshowSlides from "@/components/SlideshowSlides"
import "keen-slider/keen-slider.min.css"

const Slideshow = () => {
  const [pause, setPause] = useState(false)
  const timer = useRef()
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

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true)
    })
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false)
    })
  }, [sliderRef])

  useEffect(() => {
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
      className="w-full max-w-full min-w-full transform-gpu h-60 sm:h-80 md:h-112 lg:h-112 xl:h-128 keen-slider"
    >
      <SlideshowSlides />
    </div>
  )
}

export default Slideshow
