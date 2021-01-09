import React, { useState } from "react"

import Logo from "../../images/svg/logo.svg"
import Menu from "../../images/svg/menu.svg"
import Search from "../../images/svg/search.svg"
import Shop from "../../images/svg/shop.svg"
import User from "../../images/svg/user.svg"

const menu = [{
  name: "vinos",
  categories: ["tequila1", "ron", "crema", "grappa", "vodka", "gin", "whisky"]
}, {
  name: "licores",
  categories: ["tequila2", "ron", "crema", "grappa", "vodka", "gin", "whisky"]
}, {
  name: "gourmet",
  categories: ["tequila3", "ron", "crema", "grappa", "vodka", "gin", "whisky"]
}, {
  name: "bebidas",
  categories: ["tequila4", "ron", "crema", "grappa", "vodka", "gin", "whisky"]
}]

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const [submenu, setSubmenu] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  return (
    <section onMouseLeave={() => {
      setActiveNav(false)
      setSubmenu([])
      setActiveTab(null)
    }}>
      <div className="relative bg-yellow uppercase font-medium">
        <div className="container flex items-center h-16">
          <ul className="w-1/3 hidden lg:flex">
            {menu.map((item, index) => (
              <li key={index}>
                <a className={`block py-5 lg:px-3 xl:px-5 hover:bg-smoke ${index === activeTab && "bg-smoke"}`}
                  onMouseOver={() => {
                    setActiveNav(true)
                    setSubmenu(item.categories)
                    setActiveTab(index)
                  }}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex w-1/3 lg:hidden">
            <Menu className="w-7" />
          </div>
          <div className="flex justify-center w-1/3">
            <Logo />
          </div>
          <div className="hidden lg:flex justify-end w-1/3">
            <div className="flex items-center my-2 border-r border-white">
              <User />
              <Shop className="ml-8 mr-6" />
            </div>
            <div className="flex items-center">
              <span className="inline-block mx-3">BUSCAR</span>
              <Search className="w-6" />
            </div>
          </div>
        </div>
      </div>
      {
        activeNav &&
        <div className="absolute right-0 w-full flex items-center bg-beige font-medium">
          <ul className="container flex">
            {submenu.map((item, index) => (
              <li key={index}>
                <button onClick={() => {
                  setActiveNav(false)
                  setSubmenu([])
                  setActiveTab(null)
                }} className="focus:outline-none">
                  <a className="block py-6 lg:px-3 xl:px-5 uppercase hover:text-yellow focus:text-yellow">
                    {item}
                  </a>
                </button>
              </li>
            ))}
          </ul>
        </div>
      }
    </section >
  )
}

export default Navbar
