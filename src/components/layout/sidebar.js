import React, { useState } from "react"
import { Link } from "gatsby"

import Chevron from "../../images/svg/chevron.svg"
import Logo from "../../images/svg/logo.svg"

const Sidebar = ({ data }) => {
  const [toggle, setToggle] = useState(false)
  const [toggleIndex, setToggleIndex] = useState(null)

  return (
    <div>
      <Link to="/"><Logo /></Link>
      <ul className="mt-8 font-gotham-medium text-navbar">
        {data.map((item, index) => (
          <li key={index}
            className={`pl-2 border-b border-beige text-lg
        ${(toggle && toggleIndex === item.name) ? "pt-6 pb-2" : "py-6"}`}>
            <div className="flex justify-between items-center">
              <Link to={item.name} className="uppercase">
                {item.name.replace(/-/g, " ")}
              </Link>
              <button onClick={() => {
                setToggle((toggle && toggleIndex === item.name) ?
                  false : true)
                setToggleIndex(item.name)
              }}>
                <Chevron
                  className={(toggle && toggleIndex === item.name) && "transform rotate-180"} />
              </button>
            </div>
            {(toggle && toggleIndex === item.name) &&
              <ul className="mt-4">
                {item.categories.map((item, index) => (
                  <li className="py-4 text-base" key={index}>
                    <Link to={`/${toggleIndex}/${item}`}
                      className="focus:text-yellow uppercase">
                      {item.replace(/-/g, " ")}
                    </Link>
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
