import React, { useState } from "react"

import Logo from "../../images/svg/logo.svg"
import Menu from "../../images/svg/menu.svg"
import Search from "../../images/svg/search.svg"
import Shop from "../../images/svg/shop.svg"
import User from "../../images/svg/user.svg"

const menu = [{
  name: "VINOS",
  categories: ["vino tinto", "vino blanco", "espumantes"]
}, {
  name: "LICORES",
  categories: ["tequila", "ron", "grappa", "crema", "gin", "vodka", "whisky"]
}, {
  name: "GOURMET",
  categories: ["chocolates", "salsas", "galletas", "conservas"]
}, {
  name: "BEBIDAS",
  categories: ["agua natural", "agua carbonatada"]
}]

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const [submenu, setSubmenu] = useState([])
  const [activeTab, setActiveTab] = useState(null)

  return (
    <nav className="font-gotham-medium fixed w-full top-0 z-10"
      aria-hidden="true"
      onMouseLeave={() => {
        setActiveNav(false)
        setSubmenu([])
        setActiveTab(null)
      }}>
      <div className="relative bg-yellow uppercase">
        <div className="container flex justify-between sm:justify-start items-center h-16">
          <div className="-ml-5 w-1/3 hidden lg:block">
            <ul className="flex">
              {menu.map((item, index) => (
                <li key={index}>
                  <button className={`block py-5 lg:px-3 xl:px-5 hover:bg-smoke focus:outline-none ${index === activeTab && "bg-smoke"}`}
                    onMouseOver={() => {
                      setActiveNav(true)
                      setSubmenu(item.categories)
                      setActiveTab(index)
                    }}
                    onFocus={() => {
                      setActiveNav(true)
                      setSubmenu(item.categories)
                      setActiveTab(index)
                    }}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="block w-1/3 lg:hidden">
            <Menu className="w-7" />
          </div>
          <a href="/"
            className="ml-12 sm:ml-0 lg:ml-5 flex justify-center sm:w-1/3">
            <Logo />
          </a>
          <div className="h-full hidden lg:flex justify-end w-1/3">
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
        <div className="absolute right-0 w-full flex items-center bg-beige">
          <div className="container">
            <ul className="-ml-5 flex">
              {submenu.map((item, index) => (
                <li key={index}>
                  <button className="focus:outline-none"
                    onClick={() => {
                      setActiveNav(false)
                      setSubmenu([])
                      setActiveTab(null)
                    }}>
                    <a href={`/${item}`}
                      className="block py-6 lg:px-3 xl:px-5 uppercase hover:text-yellow focus:text-yellow">
                      {item}
                    </a>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      }
    </nav >
  )
}

export default Navbar
