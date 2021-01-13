import React from "react"

import Hero from "../components/hero"
import Layout from '../components/layout'
import SliderSection from "../components/slider-section"
import CategoriesSection from "../components/categories-section"

import prod1 from "../images/assets/product-1.jpg"
import prod2 from "../images/assets/product-2.jpg"
import prod3 from "../images/assets/product-3.jpg"
import prod4 from "../images/assets/product-4.jpg"

import img1 from "../images/assets/vinos.png"
import img2 from "../images/assets/licores.png"
import img3 from "../images/assets/gourmet.png"
import img4 from "../images/assets/bebidas.png"

const selection = [{
  img: prod1,
  alt: "alt_img",
  name: "Chianti Fiasco Bottega",
  mililiters: "500",
  price: "$17.00"
}, {
  img: prod2,
  alt: "alt_img",
  name: "Beluga Transatlantic",
  mililiters: "700",
  price: "$60.00"
}, {
  img: prod3,
  alt: "alt_img",
  name: "Sandro Bottega Grappa",
  mililiters: "700",
  price: "$24.00"
}, {
  img: prod4,
  alt: "alt_img",
  name: "Peter Brum Vino Noire",
  mililiters: "750",
  price: "$15.68"
}, {
  img: prod1,
  alt: "alt_img",
  name: "Chianti Fiasco Bottega",
  mililiters: "500",
  price: "$17.00"
}, {
  img: prod2,
  alt: "alt_img",
  name: "Beluga Transatlantic",
  mililiters: "700",
  price: "$60.00"
}, {
  img: prod3,
  alt: "alt_img",
  name: "Sandro Bottega Grappa",
  mililiters: "700",
  price: "$24.00"
}, {
  img: prod4,
  alt: "alt_img",
  name: "Peter Brum Vino Noire",
  mililiters: "750",
  price: "$15.68"
}]

const categories = [{
  img: img1,
  name: "VINOS"
}, {
  img: img2,
  name: "LICORES"
}, {
  img: img3,
  name: "GOURMET"
}, {
  img: img4,
  name: "BEBIDAS"
}]

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <SliderSection
          title="SELECCIÓN"
          data={selection}
          className="mt-72 mb-14 sm:my-14" />
        <CategoriesSection
          title="CATEGORÍAS"
          data={categories}
          className="mt-8 mb-12" />
      </Layout>
    </div>
  )
}

export default Index
