import React from "react"

import Facebook from "../../images/svg/facebook.svg"
import Instagram from "../../images/svg/instagram.svg"

const categories = ["vinos", "licor", "gourmet", "bebidas"]
const subcategories = ["vinos", "ron", "tequila", "espumantes", "grappa", "cremas", "gin", "vodka", "whisky", "conservas", "galletas", "salsas", "chocolates", "agua natural", "agua carbonatada"]

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="h-24 w-20 flex justify-between items-center">
          <a target="_blank" rel="noreferrer"
            href="https://www.facebook.com/Octavia-Mundo-Gourmet-101731011808480">
            <Facebook />
          </a>
          <a target="_blank" rel="noreferrer"
            href="https://www.instagram.com/octaviamundogourmet/">
            <Instagram />
          </a>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container md:h-56 mx-auto flex flex-row justify-evenly sm:justify-start items-start lg:items-center py-8 md:py-6 lg:py-0 ">
          <div className="sm:w-1/4 md:w-1/5 lg:w-1/6">
            <p className="tracking-widest text-yellow font-gotham-medium mb-5 text-sm lg:text-base">
              CATEGORÍAS
            </p>
            <ul className="grid grid-cols-1 gap-4 text-xs font-gotham-book">
              {categories.map((item, index) => (
                <li key={index} className="tracking-widest">{item}</li>
              ))}
            </ul>
          </div>
          <div className="sm:w-3/4 md:w-4/5 lg:w-4/6">
            <p className="tracking-widest text-yellow font-gotham-medium mb-5 text-sm lg:text-base">
              SUBCATEGORÍAS
            </p>
            <ul className="grid lg:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-gotham-book">
              {subcategories.map((item, index) => (
                <li key={index} className="tracking-widest">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
