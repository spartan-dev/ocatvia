import React, { useState } from "react"

const data = [{
  name: "subcategoría",
  arr: ["tequila", "ron", "vodka", "crema", "grappa", "gin", "whisky",]
}, {
  name: "tamaño",
  arr: ["1.75 L", "1.5 L", "1.25 L", "1 L", "750 ml", "700 ml", "500 ml", "200 ml", "100 ml"]
}]

const Filters = () => {
  return (
    <div className="text-navbar px-5">
      <p className="title">FILTROS</p>
      {data.map((element, index) => (
        <div className="uppercase mt-8" key={index}>
          <p className="font-gotham-medium my-6">{element.name}</p>
          <ul>
            {element.arr.map((item, index) => (
              <li className="font-gotham-book my-3" key={index}>
                <input type="checkbox" className="checkbox mr-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Filters
