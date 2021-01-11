import React from "react"

import ProductCard from "./product-card"

import img1 from "../images/assets/product-1.jpg"
import img2 from "../images/assets/product-2.jpg"
import img3 from "../images/assets/product-3.jpg"
import img4 from "../images/assets/product-4.jpg"

const products = [{
  img: img1,
  alt: "alt_img",
  name: "Chianti Fiasco Bottega",
  mililiters: "500",
  price: "$17.00"
}, {
  img: img2,
  alt: "alt_img",
  name: "Beluga Transatlantic",
  mililiters: "700",
  price: "$60.00"
}, {
  img: img3,
  alt: "alt_img",
  name: "Sandro Bottega Grappa",
  mililiters: "700",
  price: "$24.00"
}, {
  img: img4,
  alt: "alt_img",
  name: "Peter Brum Vino Noire",
  mililiters: "750",
  price: "$15.68"
}]

const Selection = () => {
  return (
    <section className="container mt-72 mb-14 sm:my-14">
      <p className="title">SELECCIÓN</p>
      <div className="flex justify-between mt-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            img={product.img}
            alt={product.alt}
            name={product.name}
            mililiters={product.mililiters}
            price={product.price}
          />
        ))}
      </div>
    </section>
  )
}

export default Selection;
