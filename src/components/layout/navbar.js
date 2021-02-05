import React, { useEffect, useState, useContext } from "react";
import { Link } from "gatsby";
import { StoreContext } from "../../context/StoreContext";
import Modal from "../modal";
import Sidebar from "./sidebar";
import Cart from "../Cart/Cart";
import { useTransition } from "react-spring";
import Logo from "../../images/svg/logo.svg";
import Menu from "../../images/svg/menu.svg";
import Search from "../../images/svg/search.svg";
import Shop from "../../images/svg/shop.svg";
import User from "../../images/svg/user.svg";

const menu = [
  {
    name: "vinos",
    categories: ["vino-tinto", "vino-blanco", "espumantes"],
  },
  {
    name: "licores",
    categories: ["tequila", "ron", "grappa", "crema", "gin", "vodka", "whisky"],
  },
  {
    name: "gourmet",
    categories: ["chocolates", "salsas", "galletas", "conservas"],
  },
  {
    name: "bebidas",
    categories: ["agua-natural", "agua-carbonatada"],
  },
];

const Navbar = () => {
  const { isCartOpen, toggleCartOpen, checkout } = useContext(StoreContext);
  const [activeNav, setActiveNav] = useState(false);
  const [submenu, setSubmenu] = useState([]);
  const [activeTab, setActiveTab] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState(null);
  const transitions = useTransition(isCartOpen, null, {
    from: { transform: "translate3d(100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(100%,0,0)" },
  });
  const qty = checkout.lineItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0]);
  }, []);

  useEffect(() => {
    if (body !== null) body.style.overflow = showModal ? "hidden" : "auto";
  }, [body, showModal]);

  const navActions = (categories, index, on = false) => {
    setActiveNav(on);
    setSubmenu(categories);
    setActiveTab(index);
  };

  return (
    <nav
      className="font-gotham-medium text-navbar fixed w-full top-0 z-30"
      aria-hidden="true"
      onMouseLeave={() => navActions([], null)}
    >
      {showModal && (
        <div className="z-20 absolute w-screen h-screen top-0 bg-smoke">
          <Modal onClick={() => setShowModal(false)}>
            <Sidebar data={menu} />
          </Modal>
        </div>
      )}
      <div className="relative bg-yellow">
        <div className="container flex justify-between sm:justify-start items-center h-16">
          <div className="-ml-5 w-1/3 hidden lg:block">
            <ul className="flex">
              {menu.map((item, index) => (
                <Link to={`/${item.name}`}>
                  <li key={index}>
                    <button
                      className={`block py-5 lg:px-3 xl:px-5 hover:bg-smoke 
                    uppercase ${index === activeTab && "bg-smoke"}`}
                      onMouseOver={() =>
                        navActions(item.categories, item.name, true)
                      }
                      onFocus={() =>
                        navActions(item.categories, item.name, true)
                      }
                    >
                      {item.name}
                    </button>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="block w-1/3 lg:hidden">
            <button onClick={() => setShowModal(true)}>
              <Menu className="w-7 h-7" />
            </button>
          </div>
          <Link
            to="/"
            className="hidden ml-12 sm:ml-0 lg:ml-5 sm:flex justify-center sm:w-1/3"
          >
            <Logo />
          </Link>
          <div className="h-full flex justify-end w-1/3">
            <div className="flex items-center my-2 lg:border-r border-white">
              <User />
              <button
                className="flex flex-row-reverse mr-6 relative"
                onClick={toggleCartOpen}
              >
                {qty > 0 && (
                  <div className=" text-white absolute bg-black text-center rounded-full leading-8 h-7 w-7 -top-4 -right-4">
                    {qty}
                  </div>
                )}
                <Shop className="ml-8 lg:mr-2" />
              </button>
              {transitions.map(
                ({ item, key, props }) =>
                  item && <Cart key={key} style={props} />
              )}
            </div>
            <div className="hidden lg:flex items-center">
              <span className="inline-block mx-3">BUSCAR</span>
              <Search className="w-6" />
            </div>
          </div>
        </div>
      </div>
      {activeNav && (
        <div className="absolute right-0 w-full flex items-center bg-beige">
          <div className="container">
            <ul className="-ml-5 flex">
              {submenu.map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item}`}
                    className="block py-6 lg:px-3 xl:px-5 hover:text-yellow focus:text-yellow uppercase"
                  >
                    {item.replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
