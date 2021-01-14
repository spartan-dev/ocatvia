import React, { useEffect, useState } from "react"
import { CarouselProvider, Slider, Slide, ButtonNext }
  from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import ProductCard from "./product-card"
import Arrow from "../images/svg/arrow.svg"

const Selection = ({ title, data, className }) => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (typeof window !== 'undefined')
      setWidth(window.innerWidth)
  }

  useEffect(() => {
    if (typeof window !== 'undefined')
      setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = width >= 1024 ? 4 : width >= 640 ? 3 : 1

  return (
    <section className={`container relative ${className}`}>
      <p className="title mb-8">{title}</p>
      <CarouselProvider
        naturalSlideWidth={256}
        naturalSlideHeight={400}
        totalSlides={data.length}
        touchEnabled={true}
        dragEnabled={true}
        visibleSlides={slides}
        infinite={true}>
        <Slider className="pb-8 md:pb-2">
          {data.map((item, index) => (
            <Slide key={index}>
              <ProductCard
                index={index}
                img={item.img}
                alt={item.alt}
                name={item.name}
                mililiters={item.mililiters}
                price={item.price} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="absolute focus:outline-none
          -right-4 sm:-right-3 md:-right-3 lg:-right-2 xl:right-3 
          top-1/2 sm:top-44 md:top-48 lg:top-52 xl:top-56">
          <Arrow />
        </ButtonNext>
      </CarouselProvider>
    </section>
  )
}

export default Selection;
