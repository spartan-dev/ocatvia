import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import AddToCart from "./AddToCart";

const ProductCard = ({
  img,
  alt,
  name,
  mililiters,
  price,
  className,
  btnClassName,
  variantId,
}) => {
  //cambia imagenes a undefined mienmtras carga
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "/images/assets/hero.jpg/" } }) {
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
      <div className="bg-white mb-16">
        <div className="p-9 border border-beige">
          {img === null || img === undefined ? (
            <Img
              fluid={data.allFile.edges[0].node.childImageSharp.fluid}
              alt={alt}
              title={alt}
              className="relative"
            />
          ) : (
            <Img
              fluid={img.localFile.childImageSharp.fluid}
              alt={alt}
              title={alt}
              className="relative"
            />
          )}

          {/*  <img src={img} alt={alt} title={alt} className="relative" /> */}

          <AddToCart className={btnClassName} variantId={variantId} />
        </div>
        <div className="flex flex-col items-start">
          <Link
            to={`/products/${name}`}
            className="name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 "
          >
            {alt}
          </Link>
          <p className="mililiters my-1">{mililiters}ml</p>
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
