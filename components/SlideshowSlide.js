import React from "react"

const SlideshowSlide = ({ children }) => (
  <div className="grid grid-cols-3 gap-1 px-0.5 md:px-1 xl:px-1.5 text-center keen-slider__slide md:gap-2 xl:gap-3 transform-gpu">
    {children}
  </div>
)

export default SlideshowSlide
