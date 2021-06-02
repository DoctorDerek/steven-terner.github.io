import Image from "@/components/Image"
import SlideshowSlide from "@/components/SlideshowSlide"

export default function SlideshowSlides() {
  return (
    <>
      <SlideshowSlide>
        <Image
          alt="A man and three fashionable women in hijab sitting inside a cozy cafe."
          src="/static/images/ahmad-barshod-miCPhkJLYs8-unsplash.jpg"
          sizes="portrait"
          preload={true}
        />
        <Image
          alt="Two women in hijab sitting at a fashionable Middle Eastern bar."
          src="/static/images/behzad-ghaffarian-agGyKOiowuk-unsplash.jpg"
          sizes="portrait"
          preload={true}
        />
        <Image
          alt="A towering skyscraper reminiscent of Dubai or other Arab states."
          src="/static/images/mehrshad-rajabi-UI8kIVUu7oI-unsplash.jpg"
          sizes="portrait"
          preload={true}
        />
      </SlideshowSlide>
      <SlideshowSlide>
        <Image
          alt="A mosaic art sculpture as large as a small room consisting of mosaic tiling on walls that partially surround a tiled sphere."
          src="/static/images/milad-b-fakurian-q539g9f0cYw-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="Skyscrapers under construction with a building reminscent of a mosque along a beach in a hot, desert climate."
          src="/static/images/mostafa-meraji-wH_5YAylHnc-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="Skyscrapers towering over a modern-looking city that could be in Iran, Israel, or another metropolis of the Middle East."
          src="/static/images/pourya-daneshvar-cYmRHwySr3U-unsplash.jpg"
          sizes="landscape"
        />
      </SlideshowSlide>
      <SlideshowSlide>
        <Image
          alt="Cars and traffic zoom by along a highway in front of a large city that rises up in front of a mountain range that extends into the clouds, with geography like that of Central Asia and West Asia."
          src="/static/images/roozbeh-eslami-o2E9zgoRFgc-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="A Middle Eastern man is sitting, wearing a face mask, and working at his laptop. It looks like he may be doing financial consulting in Iran, because he is reviewing data in Farsi."
          src="/static/images/sajad-nori-cacpYWjYEt0-unsplash.jpg"
          sizes="landscape"
        />
        <Image
          alt="A busy mall in what could easily be Tehran, Iran gleefully displays a floor-to-ceiling Samsung Galaxy S9+ advertisement while a dozen people hurry about their business into and out of stores selling imported consumer goods labeled in Farsi or Arabic."
          src="/static/images/Imports, Exports, and International Partnerships photo.jpg"
          sizes="landscape"
        />
      </SlideshowSlide>
    </>
  )
}
