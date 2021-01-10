import React from "react"

import Anchor from "./anchor"

import img1 from "../images/assets/vinos.png"
import img2 from "../images/assets/licores.png"
import img3 from "../images/assets/gourmet.png"
import img4 from "../images/assets/bebidas.png"

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

const Categories = () => {
  return (
    <section className="container my-14">
      <p className="title">CATEGORÍAS</p>
      <div className="flex flex-wrap mt-6 -mx-2">
        {categories.map((categorie, index) => (
          <div key={index} className="sm:w-1/2 p-4">
            <img
              src={categorie.img}
              alt={categorie.name}
              title={categorie.name}
              className="w-full" />
            <Anchor text={categorie.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories;
