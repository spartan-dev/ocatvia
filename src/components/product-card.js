import React from "react"

import Shop from "../images/svg/shop-btn.svg"

const ProductCard = ({ img, alt, name, mililiters, price }) => {
  return (
    <div className="w-full md:w-40 lg:w-56 xl:w-64 bg-white">
      <div className="p-9 border border-beige">
        <img src={img} alt={alt} title={alt} className="relative" />
        <button className="btn-shop focus:outline-none">
          <Shop />
        </button>
      </div>
      <div className="flex flex-col items-start">
        <p className="name mt-4">{name}</p>
        <p className="mililiters my-1">{mililiters}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard;
