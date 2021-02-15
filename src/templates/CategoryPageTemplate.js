import React, { useEffect, useState } from 'react';
import { useTransition } from 'react-spring';
import { graphql } from 'gatsby';

import CategoriesSection from '../components/categories-section';
import Filters from '../components/filters';
import Layout from '../components/layout';
import Modal from '../components/modal';
import ProductCard from '../components/product-card';

import { transitionsLeft, getRandomCategories } from '../utils';

import Chevron from '../images/svg/chevron.svg';
import Close from '../images/svg/close.svg';
import Filter from '../images/svg/filter.svg';

const CategoryPageTemplate = ({ data }) => {
  const {
    shopifyCollection: { products, title },
    allShopifyCollection: { edges },
  } = data;

  const [route, setRoute] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState([]);
  const [toggle, setToggle] = useState(false);

  const transitions = useTransition(showModal, null, transitionsLeft);

  useEffect(() => {
    if (typeof window !== 'undefined')
      setRoute(
        `Inicio${window.location.pathname
          .replace(/\//g, ' > ')
          .replace(/\s(.)/g, ($1) => {
            return $1.toUpperCase();
          })}`
      );
  }, []);

  const onFilterChange = ({ name, checked }) => {
    if (checked) {
      setFilters((prevstate) => [name, ...prevstate]);
    } else {
      setFilters(filters.filter((item) => item !== name));
    }
  };

  const orderButtons = [
    {
      name: 'Menor a mayor precio',
      click: () => {
        products.sort((a, b) => {
          return a.variants[0].price - b.variants[0].price;
        });
      },
    },
    {
      name: 'Mayor a menor precio',
      click: () => {
        products.sort((a, b) => {
          return b.variants[0].price - a.variants[0].price;
        });
      },
    },
    {
      name: 'Alfabéticamente',
      click: () => {
        products.sort((a, b) => {
          if (a.title < b.title) return -1;
          if (a.title > b.title) return 1;
          return 0;
        });
      },
    },
  ];

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
              <Filters onChange={onFilterChange} arr={filters} />
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
            <div className="flex items-center relative">
              <span className="inline-block ml-4 mr-2">ORDENAR POR</span>
              <button onClick={() => setToggle(!toggle)}>
                <Chevron className={toggle && 'transform rotate-180'} />
              </button>
              {toggle && (
                <div
                  className="absolute top-12 z-20 text-sm bg-white border border-beige w-48"
                  onMouseLeave={() => setToggle(false)}
                >
                  {orderButtons.map((item, index) => (
                    <button
                      key={index}
                      className="py-2 px-4 hover:bg-pink-light w-full text-left border-b border-beige"
                      onClick={() => {
                        setToggle(false);
                        item.click();
                      }}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {filters.length !== 0 && (
          <div className="bg-pink-light lg:mr-8 pt-5 px-6 flex flex-col lg:flex-row justify-end items-center mb-10">
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
                name={item.title}
                handle={item.handle}
                mililiters={item.variants[0].weight}
                price={item.variants[0].price}
                variantId={item.variants[0].shopifyId}
                btnClassName="btn-shop"
                className="product-card sm:mr-7"
              />
            );
          })}
        </div>
        <button className="btn-red block mx-auto">Ver más</button>
        <CategoriesSection
          title="CATEGORÍAS RELACIONADAS"
          edges={getRandomCategories(edges)}
          className="mt-8 lg:mt-20 mb-4 lg:mb-12"
        />
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
    allShopifyCollection {
      edges {
        node {
          title
          handle
          image {
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
  }
`;
