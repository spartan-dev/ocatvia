import React from "react"

import Shop from "../images/svg/shop-btn.svg"

const ProductCard = ({ img, alt, name, mililiters, price }) => {
  return (
    <div className="w-64">
      <div className="p-9 bg-white border border-beige">
        <img src={img} alt={alt} title={alt} className="relative" />
        <button className="btn-shop focus:outline-none">
          <Shop />
        </button>
      </div>
      <p className="name mt-4">{name}</p>
      <p className="mililiters my-1">{mililiters}</p>
      <p className="price">{price}</p>
    </div>
  )
}

export default ProductCard;
