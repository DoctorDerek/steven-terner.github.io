import React from "react"
const SlideshowSlide = ({ children }) => (
  <div className="grid grid-cols-3 space-x-0.5 sm:space-x-1 md:space-x-1.5 xl:space-x-2 transform-gpu keen-slider__slide w-full min-w-full max-w-full">
    {children}
  </div>
)

export default SlideshowSlide
