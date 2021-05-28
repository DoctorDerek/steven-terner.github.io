import Image from "@/components/Image"
import SlideshowSlide from "@/components/SlideshowSlide"

export default function SlideshowSlides() {
  return (
    <>
      <SlideshowSlide>
        <Image
          alt="ocean"
          src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
          sizes="portrait"
          preload={true}
        />
        <Image
          alt="ocean"
          src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
          sizes="portrait"
          preload={true}
        />
        <Image
          alt="ocean"
          src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
          sizes="portrait"
          preload={true}
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
    </>
  )
}
