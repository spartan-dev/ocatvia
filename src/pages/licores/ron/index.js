import React, { useEffect, useState } from "react"

import CategoriesSection from "../../../components/categories-section"
import Filters from "../../../components/filters"
import Layout from "../../../components/layout"
import Modal from "../../../components/modal"
import ProductCard from "../../../components/product-card"

import Chevron from "../../../images/svg/chevron.svg"
import Close from "../../../images/svg/close.svg"
import Filter from "../../../images/svg/filter.svg"

import ron1 from "../../../images/assets/ron1.jpg"
import ron2 from "../../../images/assets/ron2.jpg"
import ron3 from "../../../images/assets/ron3.jpg"
import ron4 from "../../../images/assets/ron4.jpg"
import ron5 from "../../../images/assets/ron5.jpg"
import img1 from "../../../images/assets/licores.png"
import img2 from "../../../images/assets/vodka.png"

const arr = [{
  name: "Ron Barceló Imperial Onyx",
  img: ron1
}, {
  name: "Ron Barceló Dorado Añejado",
  img: ron2
}, {
  name: "Ron Barceló Gran Añejo",
  img: ron3
}, {
  name: "Ron Abuelo Añejo 7 Años",
  img: ron4
}, {
  name: "Barceló Imperial Premium Blend",
  img: ron5
}, {
  name: "Ron Barceló Imperial Onyx",
  img: ron1
}, {
  name: "Ron Barceló Dorado Añejado",
  img: ron2
}, {
  name: "Ron Barceló Gran Añejo",
  img: ron3
}, {
  name: "Ron Abuelo Añejo 7 Años",
  img: ron4
}, {
  name: "Barceló Imperial Premium Blend",
  img: ron5
}]

const categories = [{
  img: img1,
  name: "TEQUILA"
}, {
  img: img2,
  name: "VODKA"
}]

const Ron = () => {
  const [route, setRoute] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [filters, setFilters] = useState([])

  useEffect(() => {
    let newRoute
    if (typeof window !== 'undefined')
      newRoute = `Inicio${window.location.pathname
        .replace(/\//g, ' > ')
        .replace(/\s(.)/g, ($1) => { return $1.toUpperCase(); })}`
    setRoute(newRoute)
  }, []);

  const onChange = ({ name, checked }) => {
    if (checked) {
      setFilters(prevstate => [name, ...prevstate])
    } else {
      setFilters(filters.filter(item => item !== name))
    }
  }

  return (
    <Layout>
      {showModal &&
        <Modal onClick={() => setShowModal(false)} className="shadow-yellow fixed">
          <Filters onChange={onChange} arr={filters} />
        </Modal>}
      <section className="container relative">
        <p className="small py-10">{route}</p>
        <p className="title">RON</p>
        <div className="sm:flex justify-between items-center mb-2 mt-8 sm:mt-2">
          <p className="price">
            {arr.length}
            <span className="inline-block ml-1 currency">productos</span>
          </p>
          <div className="font-gotham-medium flex md:w-96">
            <div className="flex items-center h-12 border-r-2 border-yellow">
              <span>FILTRAR</span>
              <button onClick={() => setShowModal(true)}>
                <Filter className="ml-2 mr-6" />
              </button>
            </div>
            <div className="flex items-center">
              <span className="inline-block ml-4 mr-2">ORDENAR POR</span>
              <Chevron />
            </div>
          </div>
        </div>
        {filters.length !== 0 &&
          <div className="bg-pink-light lg:mr-8 pt-5 px-6 flex flex-col lg:flex-row justify-end items-center">
            <ul className="flex flex-row-reverse flex-wrap">
              {filters.map((item, index) => (
                <li key={index}
                  className="flex items-center justify-between mb-5 filter-badge">
                  <span>{item}</span>
                  <button className="ml-1"
                    onClick={() =>
                      setFilters(filters.filter(element => item !== element))
                    }>
                    <Close className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
            <button className="font-gotham-book text-red w-auto mb-5"
              onClick={() => setFilters([])}>
              Limpiar filtros
            </button>
          </div>}
        <div className="flex flex-wrap mt-10 sm:-mr-7">
          {arr.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              alt={product.name}
              name={product.name}
              mililiters="750"
              price="12.45"
              className="product-card sm:mr-7"
              btnClassName="btn-shop" />
          ))}
        </div>
        <button className="btn-red block mx-auto">Ver más</button>
      </section>
      <CategoriesSection
        title="CATEGORÍAS RELACIONADAS"
        data={categories}
        className="my-14" />
    </Layout>
  )
}

export default Ron
