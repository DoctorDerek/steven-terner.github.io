import { useState, useEffect } from "react"

function SlideshowSlide({ children }) {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => setIsLoaded(() => true))

  return (
    <div className="grid grid-cols-3 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2 transform-gpu keen-slider__slide">
      {isLoaded && children}
    </div>
  )
}

export default SlideshowSlide
