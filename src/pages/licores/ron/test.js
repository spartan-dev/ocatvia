import React from "react"

import Anchor from "../../../components/anchor"
import Layout from "../../../components/layout"
import ProductCard from "../../../components/product-card.js"

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
}]

const categories = [{
  img: img1,
  name: "TEQUILA"
}, {
  img: img2,
  name: "VODKA"
}]

const Ron = () => {
  return (
    <Layout>
      <div className="container">
        <p className="small py-10">
          Inicio &gt; Licores &gt; Ron &gt; Ron Barceló Imperial Premium Blend
        </p>
        <div className="flex items-center justify-around">
          <img src={ron5} className="w-96" alt="name" />
          <div className="w-1/3">
            <p className="detail-title">
              Ron Barceló <br /> Imperial <br /> Premium Blend
            </p>
            <p className="font-gotham-book opacity-50 text-body my-6 leading-9">
              Ron premium<br />Tamaño: 750 ml <br />País de origen: República Dominicana
            </p>
            <p className="font-gotham-medium text-2xl tracking-widest">
              $76.49 <span className="text-base tracking-widest">USD</span>
            </p>
            <div className="my-9 h-14 border-2 border-beige py-1 px-4">
              <p className="small opacity-50">Cantidad</p>
              <p className="font-gotham-book">1 pieza</p>
            </div>
            <button className="btn-red">Agregar a bolsa</button>
          </div>
        </div>
        <p className="title mt-16">RELACIONADOS</p>
        <div className="flex mt-10">
          {arr.map((product, index) => (
            <ProductCard
              key={index}
              img={product.img}
              alt={product.name}
              name={product.name}
              mililiters="750"
              price="12.45"
            />
          ))}
        </div>
        <div className="my-14">
          <p className="title">OTROS LICORES</p>
          <div className="flex flex-wrap mt-6 -mx-2">
            {categories.map((categorie, index) => (
              <div key={index} className="sm:w-1/2 py-4 sm:p-4">
                <img
                  src={categorie.img}
                  alt={categorie.name}
                  title={categorie.name}
                  className="w-full" />
                <Anchor text={categorie.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default Ron
