import React, { useEffect, useState } from "react"

import Modal from "../modal"
import Sidebar from "./sidebar"

import Logo from "../../images/svg/logo.svg"
import Menu from "../../images/svg/menu.svg"
import Search from "../../images/svg/search.svg"
import Shop from "../../images/svg/shop.svg"
import User from "../../images/svg/user.svg"

const menu = [{
  name: "VINOS",
  categories: ["VINO TINTO", "VINO BLANCO", "ESPUMANTES"]
}, {
  name: "LICORES",
  categories: ["TEQUILA", "RON", "GRAPPA", "CREMA", "GIN", "VODKA", "WHISKY"]
}, {
  name: "GOURMET",
  categories: ["CHOCOLATES", "SALSAS", "GALLETAS", "CONSERVAS"]
}, {
  name: "BEBIDAS",
  categories: ["AGUA NATURAL", "AGUA CARBONATADA"]
}]

const Navbar = () => {
  const [activeNav, setActiveNav] = useState(false)
  const [submenu, setSubmenu] = useState([])
  const [activeTab, setActiveTab] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0]);
  }, []);

  useEffect(() => {
    if (body !== null)
      body.style.overflow = showModal ? "hidden" : "auto";
  }, [body, showModal]);

  const navActions = (categories, index, on = false) => {
    setActiveNav(on)
    setSubmenu(categories)
    setActiveTab(index)
  }

  return (
    <nav className="font-gotham-medium text-navbar fixed w-full top-0 z-10"
      aria-hidden="true"
      onMouseLeave={() => navActions([], null)}>
      {showModal &&
        <Modal onClick={() => setShowModal(false)} >
          <Sidebar data={menu} />
        </Modal>}
      <div className="relative bg-yellow">
        <div className="container flex justify-between sm:justify-start items-center h-16">
          <div className="-ml-5 w-1/3 hidden lg:block">
            <ul className="flex">
              {menu.map((item, index) => (
                <li key={index}>
                  <button className={`block py-5 lg:px-3 xl:px-5 hover:bg-smoke 
                  focus:outline-none ${index === activeTab && "bg-smoke"}`}
                    onMouseOver={() => navActions(item.categories, index, true)}
                    onFocus={() => navActions(item.categories, index, true)}>
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="block w-1/3 lg:hidden">
            <button className="focus:outline-none"
              onClick={() => setShowModal(true)}>
              <Menu className="w-7 h-7" />
            </button>
          </div>
          <a href="/"
            className="hidden ml-12 sm:ml-0 lg:ml-5 sm:flex justify-center sm:w-1/3">
            <Logo />
          </a>
          <div className="h-full flex justify-end w-1/3">
            <div className="flex items-center my-2 lg:border-r border-white">
              <User />
              <Shop className="ml-8 lg:mr-6" />
            </div>
            <div className="hidden lg:flex items-center">
              <span className="inline-block mx-3">BUSCAR</span>
              <Search className="w-6" />
            </div>
          </div>
        </div>
      </div>
      {activeNav &&
        <div className="absolute right-0 w-full flex items-center bg-beige">
          <div className="container">
            <ul className="-ml-5 flex">
              {submenu.map((item, index) => (
                <li key={index}>
                  <a href={`/${item}`}
                    className="block py-6 lg:px-3 xl:px-5 hover:text-yellow focus:text-yellow">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>}
    </nav >
  )
}

export default Navbar
