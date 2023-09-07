"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  return (
    <div className="embla my-32" ref={emblaRef}>
      <div className="embla__container h-full w-full">
        <div className="embla__slide ">
          <img src="/images/a1.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a2.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a3.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a4.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a5.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a6.png" alt="carousel-image" />
        </div>
        <div className="embla__slide">
          <img src="/images/a7.png" alt="carousel-image" />
        </div>
      </div>
    </div>
  );
};
