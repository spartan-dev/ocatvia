import React, { useEffect, useState } from 'react';
import {
  ButtonNext,
  CarouselProvider,
  Slider,
  Slide,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import ProductCard from './product-card';

import Arrow from '../images/svg/arrow.svg';

const Selection = ({ title, data, className }) => {
  const [width, setWidth] = useState(0);

  const handleResize = () => {
    if (typeof window !== 'undefined') setWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = width >= 1024 ? 4 : width >= 640 ? 3 : 1;

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
        infinite={true}
      >
        <Slider className="mx-1 sm:mx-0 pb-8 md:pb-2">
          {data.map((item, index) => {
            return (
              <Slide key={index}>
                <ProductCard
                  key={index}
                  img={item.variants[0].image}
                  name={item.title}
                  handle={item.handle}
                  mililiters={item.variants[0].weight}
                  price={item.variants[0].price}
                  variantId={item.variants[0].shopifyId}
                  btnClassName="btn-shop-slider"
                  className="w-full sm:w-44 md:w-52 lg:w-56 xl:w-64 sm:mx-2"
                />
              </Slide>
            );
          })}
        </Slider>
        <ButtonNext
          className="absolute -right-4 sm:-right-3 md:-right-3 lg:-right-2 xl:right-3 
          top-1/2 sm:top-44 md:top-48 lg:top-52 xl:top-56"
        >
          <Arrow />
        </ButtonNext>
      </CarouselProvider>
    </section>
  );
};

export default Selection;
