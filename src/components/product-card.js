import React from "react"

import Shop from "../images/svg/shop-btn.svg"

const ProductCard = ({ img, alt, name, mililiters, price }) => {
  return (
    <article className="w-full sm:w-44 md:w-52 lg:w-56 xl:w-64 sm:mx-2">
      <div className="bg-white mb-16">
        <div className="p-9 border border-beige">
          <img src={img} alt={alt} title={alt} className="relative" />
          <button className="btn-shop focus:outline-none">
            <Shop />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <a href="/ron/test"
            className="name mt-4 ">
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
