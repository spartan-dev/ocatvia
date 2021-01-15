import React from "react"

import Anchor from "./anchor"

const Categories = ({ title, data, className }) => {
  return (
    <section className={`container ${className}`}>
      <p className="title mb-4">{title}</p>
      <div className="flex flex-wrap sm:-mx-2">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 py-4 sm:p-4">
            <img
              src={item.img}
              alt={item.name}
              title={item.name}
              className="w-full" />
            <Anchor text={item.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories;
