import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import ProductDetail from "../components/ProductDetail";
const ProductPageTemplate = ({ data }) => {
  return (
    <Layout>
      <ProductDetail product={data.shopifyProduct} />
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
  }
`;
