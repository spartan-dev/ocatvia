import React from "react"

import Facebook from "../../images/svg/facebook.svg"
import Instagram from "../../images/svg/instagram.svg"
import Twitter from "../../images/svg/twitter.svg"
import Youtube from "../../images/svg/youtube.svg"

const categories = ["vinos", "licor", "gourmet", "bebidas"]
const subcategories = ["vinos", "ron", "tequila", "espumantes", "grappa", "cremas", "gin", "vodka", "whisky", "conservas", "galletas", "salsas", "chocolates", "agua natural", "agua carbonatada"]

const Footer = () => {
  return (
    <section>
      <div className="flex justify-center">
        <div className="h-24 w-44 flex justify-between items-center">
          <Facebook />
          <Instagram />
          <Twitter />
          <Youtube />
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container md:h-56 mx-auto flex flex-row justify-evenly items-start lg:items-center py-8 md:py-6 lg:py-0 ">
          <div className="sm:w-1/4 md:w-1/5 lg:w-1/6">
            <p className="tracking-widest text-yellow font-bold mb-5 text-sm lg:text-base">
              CATEGORÍAS
            </p>
            <ul className="grid grid-cols-1 gap-4 text-xs font-light">
              {categories.map((item, index) => (
                <li key={index} className="tracking-widest">{item}</li>
              ))}
            </ul>
          </div>
          <div className="sm:w-3/4 md:w-4/5 lg:w-4/6">
            <p className="tracking-widest text-yellow font-bold mb-5 text-sm lg:text-base">
              SUBCATEGORÍAS
            </p>
            <ul className="grid lg:grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-light">
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
