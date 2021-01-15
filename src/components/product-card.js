import React from "react"

import Shop from "../images/svg/btn-shop.svg"

const ProductCard = ({ img, alt, name, mililiters, price, className, btnClassName }) => {
  return (
    <article className={className}>
      <div className="bg-white mb-16">
        <div className="p-9 border border-beige">
          <img src={img} alt={alt} title={alt} className="relative" />
          <button className={`${btnClassName} focus:outline-none`}>
            <Shop />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <a href="/ron/test"
            className="name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 ">
            {name}
          </a>
          <p className="mililiters my-1">{mililiters}ml</p>
          <p className="price">
            {price}
            <span className="inline-block ml-1 currency">USD</span>
          </p>
        </div>
      </div>
    </article>
  )
}

export default ProductCard;