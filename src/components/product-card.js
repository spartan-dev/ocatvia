import React from "react"

import Shop from "../images/svg/shop-btn.svg"

const ProductCard = ({ img, alt, name, mililiters, price }) => {
  return (
    <a href="/ron/test"
      className="w-full md:w-40 lg:w-56 xl:w-64 bg-white mx-3 mb-16">
      <div className="p-9 border border-beige">
        <img src={img} alt={alt} title={alt} className="relative" />
        <button className="btn-shop focus:outline-none">
          <Shop />
        </button>
      </div>
      <div className="flex flex-col items-start">
        <p className="name mt-4">{name}</p>
        <p className="mililiters my-1">{mililiters}ml</p>
        <p className="price">
          {price}
          <span className="inline-block ml-1 currency">USD</span>
        </p>
      </div>
    </a>
  )
}

export default ProductCard;
