import React from 'react';
import { graphql } from 'gatsby';

import CategoriesSection from '../components/categories-section';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SliderSection from '../components/slider-section';

const Index = ({ data }) => {
  const {
    allShopifyCollection: { edges },
    allShopifyProduct: { nodes },
    shopifyProduct,
  } = data;

  return (
    <Layout>
      <Hero product={shopifyProduct} />
      <SliderSection
        title="SELECCIÓN"
        data={nodes}
        className="mt-72 mb-14 sm:my-14"
      />
      <CategoriesSection
        title="CATEGORÍAS"
        edges={edges}
        className="mt-8 lg:mt-20 mb-4 lg:mb-12"
      />
    </Layout>
  );
};

export default Index;

export const collections = graphql`
  query {
    allShopifyCollection(
      filter: { title: { regex: "/Vinos|Bebidas|Gourmet|Licores/" } }
    ) {
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
    shopifyProduct(title: { regex: "/BELUGA GOLD LINE/" }) {
      variants {
        shopifyId
      }
      handle
    }
    allShopifyProduct(
      limit: 10
      sort: { fields: variants___price, order: DESC }
    ) {
      nodes {
        title
        handle
        description
        productType
        variants {
          shopifyId
          price
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
    }
  }
`;
