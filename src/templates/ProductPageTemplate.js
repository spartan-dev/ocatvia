import React, { useContext } from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { StoreContext } from '../context/StoreContext';
import CategoriesSection from '../components/categories-section';
import Layout from '../components/layout';
import { getRandomCategories } from '../utils';
import notavailable from '../images/assets/not-available.png';
import { ToastContainer, toast } from 'react-toastify';

const ProductPageTemplate = ({ data }) => {
  const { addProductToCart } = useContext(StoreContext);

  const {
    shopifyProduct: product,
    allShopifyCollection: { edges },
  } = data;

  return (
    <Layout>
      <div className="container">
        <div className="flex items-center justify-around pt-6 md:pt-24">
          {product.variants[0].image === null ||
          product.variants[0].image === undefined ? (
            <img src={notavailable} className="w-96" alt="name" />
          ) : (
            <Img
              fluid={product.variants[0].image.localFile.childImageSharp.fluid}
              alt={
                product.variants[0].image.localFile.childImageSharp.fluid
                  .originalName
              }
              className="w-96"
            />
          )}

          <div className="w-1/3">
            <p className="detail-title">{product.title}</p>
            <p className="font-gotham-book opacity-50 my-6 leading-9">
              {product.productType}
              <br />
              Tamaño: {product.variants[0].weight} oz
              <br />
              Descripción: {product.description}
            </p>
            <p className="font-gotham-medium text-2xl tracking-widest">
              ${product.variants[0].price}{' '}
              <span className="text-base tracking-widest">USD</span>
            </p>
            <div className="my-9 h-14 border-2 border-beige py-1 px-4 relative">
              <p className="small opacity-50">Cantidad</p>
              <p className="font-gotham-book">1 pieza</p>
            </div>
            <button
              className="btn-red"
              onClick={() => {
                addProductToCart(product.variants[0].shopifyId).then((res) => {
                  //todo agregar un toast para avisar del producto al carro
                  /*  toast.dark('Item agregado', {
                    position: 'top-right',
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  }); */
                });
              }}
            >
              Agregar a bolsa
            </button>
          </div>
        </div>
        <CategoriesSection
          title="PRODUCTOS RELACIONAD0S"
          edges={getRandomCategories(edges)}
          className="mt-8 lg:mt-20 mb-4 lg:mb-12"
        />
      </div>
      {/*   <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      /> */}
    </Layout>
  );
};

export default ProductPageTemplate;

export const query = graphql`
  query ProductQuery($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      title
      handle
      id
      description
      productType
      shopifyId
      tags
      variants {
        shopifyId
        price
        title
        weight
        weightUnit
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
