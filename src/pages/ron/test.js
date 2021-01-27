import React, { useState, useEffect } from "react";

import Anchor from "../../components/anchor";
import Layout from "../../components/layout";
import ProductCard from "../../components/product-card.js";
import SliderSection from "../../components/slider-section.js";
import CategoriesSection from "../../components/categories-section";

import ron1 from "../../images/assets/ron1.jpg";
import ron2 from "../../images/assets/ron2.jpg";
import ron3 from "../../images/assets/ron3.jpg";
import ron4 from "../../images/assets/ron4.jpg";
import ron5 from "../../images/assets/ron5.jpg";
import img1 from "../../images/assets/licores.png";
import img2 from "../../images/assets/vodka.png";

const arr = [
  {
    name: "Ron Barceló Imperial Onyx",
    img: ron1,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Barceló Dorado Añejado",
    img: ron2,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Barceló Gran Añejo",
    img: ron3,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Abuelo Añejo 7 Años",
    img: ron4,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Barceló Imperial Onyx",
    img: ron1,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Barceló Dorado Añejado",
    img: ron2,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Barceló Gran Añejo",
    img: ron3,
    mililiters: "700",
    price: "$60.00",
  },
  {
    name: "Ron Abuelo Añejo 7 Años",
    img: ron4,
    mililiters: "700",
    price: "$60.00",
  },
];

const categories = [
  {
    img: img1,
    name: "TEQUILA",
  },
  {
    img: img2,
    name: "VODKA",
  },
];

const product = {
  name: "Ron Barceló Imperial Premium Blend",
  description: "Ron premium",
  size: "750 ml.",
  origin: "República Dominicana",
  price: "76.49",
};

const Ron = () => {
  const [route, setRoute] = useState("");

  useEffect(() => {
    let newRoute;
    if (typeof window !== "undefined")
      newRoute = `Inicio${window.location.pathname
        .replace(/\//g, " > ")
        .replace(/\s(.)/g, ($1) => {
          return $1.toUpperCase();
        })}`;
    setRoute(newRoute);
  }, []);

  return (
    <Layout>
      <div className="container">
        <p className="small py-10">{`${route} ${product.name}`}</p>
        <section className="flex flex-col lg:flex-row items-center justify-around">
          <img src={ron5} className="w-80 lg:w-96" alt="name" />
          <div className="mt-10 lg:mt-0 lg:w-1/3">
            <p className="detail-title">{product.name}</p>
            <p className="font-gotham-book opacity-50 text-body my-6 leading-9">
              {product.description}
              <br />
              Tamaño: {product.size} <br />
              País de origen: {product.origin}
            </p>
            <p className="font-gotham-medium text-2xl tracking-widest">
              ${product.price}{" "}
              <span className="text-base tracking-widest">USD</span>
            </p>
            <div className="my-9 h-14 border-2 border-beige py-1 px-4 w-full sm:w-80 lg:w-full">
              <p className="small opacity-50">Cantidad</p>
              <p className="font-gotham-book">1 pieza</p>
            </div>
            <button className="btn-red">Agregar a bolsa</button>
          </div>
        </section>
        <SliderSection title="RELACIONADOS" data={arr} className="mt-20" />
        <CategoriesSection
          title="OTROS LICORES"
          data={categories}
          className="my-14"
        />
      </div>
    </Layout>
  );
};

export default Ron;
