import React, { useEffect, useState } from "react";
import { graphql } from "gatsby";
import Anchor from "../../components/anchor";
import Filters from "../../components/filters";
import Layout from "../../components/layout";
import Modal from "../../components/modal";
import ProductCard from "../../components/product-card";

import Chevron from "../../images/svg/chevron.svg";
import Filter from "../../images/svg/filter.svg";

const Bebidas = ({ data }) => {
  const {
    shopifyCollection: { products },
  } = data;
  const [route, setRoute] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [body, setBody] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined")
      setBody(document.getElementsByTagName("body")[0]);
  }, []);

  useEffect(() => {
    if (body !== null) body.style.overflow = showModal ? "hidden" : "auto";
  }, [body, showModal]);

  useEffect(() => {
    let newRoute;
    if (typeof window !== "undefined")
      newRoute = `Inicio${window.location.pathname
        .replace(/\//g, " > ")
        .replace(/\s(.)/g, function ($1) {
          return $1.toUpperCase();
        })}`;
    setRoute(newRoute);
  }, []);

  return (
    <Layout>
      {showModal && (
        <Modal onClick={() => setShowModal(false)} className="shadow-yellow">
          <Filters />
        </Modal>
      )}
      <div className="container">
        <p className="small py-10">{route}</p>
        <p className="title">BEBIDAS</p>
        <div className="sm:flex justify-between items-center mt-8 sm:mt-2 mb-14">
          <p className="price">
            {products.length}
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
        <div className="flex flex-wrap sm:-mr-7">
          {products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.images}
                alt={item.title}
                name={item.title}
                mililiters={item.variants[0].weight}
                price={item.variants[0].price}
                className="product-card sm:mr-7"
              />
            );
          })}
        </div>
        <button className="btn-red block mx-auto">Ver más</button>
        <div className="my-14">
          <p className="title">CATEGORÍAS RELACIONADAS</p>
          {/*   <div className="flex flex-wrap mt-6 -mx-2">
        {categories.map((categorie, index) => (
          <div key={index} className="sm:w-1/2 py-4 sm:p-4">
            <img
              src={categorie.img}
              alt={categorie.name}
              title={categorie.name}
              className="w-full"
            />
            <Anchor text={categorie.name} />
          </div>
        ))}
      </div> */}
        </div>
      </div>
    </Layout>
  );
};

export default Bebidas;

export const productosBebidas = graphql`
  query {
    shopifyCollection(handle: { eq: "bebidas" }) {
      products {
        variants {
          price
          weightUnit
          weight
        }
        title
        shopifyId
        description
        images {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    }
  }
`;
