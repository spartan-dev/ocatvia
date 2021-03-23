import React, { useContext } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { StoreContext } from '../context/StoreContext';

import Shop from '../images/svg/btn-shop.svg';

const ProductCard = ({
  img,
  name,
  handle,
  mililiters,
  price,
  className,
  btnClassName,
  variantId,
}) => {
  const { addProductToCart } = useContext(StoreContext);

  //cambia imagenes a undefined mienmtras carga
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { absolutePath: { regex: "/images/assets/product-3.jpg/" } }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
                originalImg
              }
            }
          }
        }
      }
    }
  `);

  return (
    <article className={className}>
      <div className="bg-white mb-12">
        <div className="p-9 border border-beige relative">
          {img === null || img === undefined ? (
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt={name}
              title={name}
            />
          ) : (
            <Img
              fluid={img.localFile.childImageSharp.fluid}
              alt={name}
              title={name}
            />
          )}
          <button
            className={btnClassName}
            onClick={() => addProductToCart(variantId)}
          >
            <Shop />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <Link
            to={`/${handle}`}
            className="name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 "
          >
            {name}
          </Link>
          <p className="mililiters my-1">{mililiters} oz</p>
          <p className="price">
            {price}
            <span className="inline-block ml-1 currency">USD</span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
