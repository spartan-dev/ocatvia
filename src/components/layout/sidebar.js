import React, { useState } from "react"

import Chevron from "../../images/svg/chevron.svg"
import Logo from "../../images/svg/logo.svg"

const Sidebar = ({ data }) => {
  const [toggle, setToggle] = useState(false)
  const [toggleIndex, setToggleIndex] = useState(null)

  return (
    <div>
      <a href="/"><Logo /></a>
      <ul className="mt-8 font-gotham-medium text-navbar">
        {data.map((item, index) => (
          <li key={index}
            className={`pl-2 border-b border-beige text-lg
        ${(toggle && toggleIndex === index) ? "pt-6 pb-2" : "py-6"}`}>
            <div className="flex justify-between items-center">
              <a className="focus:outline-none">{item.name}</a>
              <button className="focus:outline-none"
                onClick={() => {
                  setToggle((toggle && toggleIndex === index) ?
                    false : true)
                  setToggleIndex(index)
                }}>
                <Chevron
                  className={(toggle && toggleIndex === index) && "transform rotate-180"} />
              </button>
            </div>
            {(toggle && toggleIndex === index) &&
              <ul className="mt-4">
                {item.categories.map((item, index) => (
                  <li className="py-4 text-base" key={index}>
                    <a className="focus:text-yellow focus:outline-none">{item}</a>
                  </li>
                ))}
              </ul>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
