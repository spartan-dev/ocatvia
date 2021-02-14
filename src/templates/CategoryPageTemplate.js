import React, { useEffect, useState } from "react";
import { useTransition } from "react-spring";
import { graphql } from "gatsby";
import Anchor from "../components/anchor";
import Filters from "../components/filters";
import Layout from "../components/layout";
import Modal from "../components/modal";
import ProductCard from "../components/product-card";

import Chevron from "../images/svg/chevron.svg";
import Close from "../images/svg/close.svg";
import Filter from "../images/svg/filter.svg";

const CategoryPageTemplate = ({ data }) => {
  const {
    shopifyCollection: { products, title },
  } = data;
  const [route, setRoute] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState([]);

  const transitions = useTransition(showModal, null, {
    from: { transform: "translate3d(-100%,0,0)" },
    enter: { transform: "translate3d(0,0,0)" },
    leave: { transform: "translate3d(-100%,0,0)" },
  });

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

  const onChange = ({ name, checked }) => {
    if (checked) {
      setFilters((prevstate) => [name, ...prevstate]);
    } else {
      setFilters(filters.filter((item) => item !== name));
    }
  };

  return (
    <Layout>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <Modal
              key={key}
              className="shadow-yellow fixed p-6"
              style={props}
              onClick={() => setShowModal(!showModal)}
            >
              <Filters onChange={onChange} arr={filters} />
            </Modal>
          )
      )}
      <div className="container">
        <p className="small py-10">{route}</p>
        <p className="title">{title}</p>
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
        {filters.length !== 0 && (
          <div className="bg-pink-light lg:mr-8 pt-5 px-6 flex flex-col lg:flex-row justify-end items-center">
            <ul className="flex flex-row-reverse flex-wrap">
              {filters.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-5 filter-badge"
                >
                  <span>{item}</span>
                  <button
                    className="ml-1"
                    onClick={() =>
                      setFilters(filters.filter((element) => item !== element))
                    }
                  >
                    <Close className="w-4 h-4" />
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="font-gotham-book text-red w-auto mb-5"
              onClick={() => setFilters([])}
            >
              Limpiar filtros
            </button>
          </div>
        )}
        <div className="flex flex-wrap sm:-mr-7">
          {products.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.variants[0].image}
                alt={item.title}
                name={item.handle}
                mililiters={item.variants[0].weight}
                price={item.variants[0].price}
                variantId={item.variants[0].shopifyId}
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

export default CategoryPageTemplate;
export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      id
      shopifyId
      title
      handle
      products {
        title
        handle
        variants {
          price
          weightUnit
          weight
          shopifyId
          priceNumber
          id
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
              name
            }
          }
        }
      }
    }
  }
`;
