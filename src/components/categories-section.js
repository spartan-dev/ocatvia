import React from "react";
import Img from "gatsby-image";
import Anchor from "./anchor";

const Categories = ({ title, data, className, edges }) => {
  return (
    <section className={`container ${className}`}>
      <p className="title mb-4">{title}</p>
      <div className="flex flex-wrap sm:-mx-2">
        {edges.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 py-4 sm:p-4">
            {/* <img
              src={item.img}
              alt={item.name}
              title={item.name}
              className="w-full"
            /> */}
            <Img
              className="w-full"
              title={
                item.node.image.localFile.childImageSharp.fluid.originalName
              }
              fluid={item.node.image.localFile.childImageSharp.fluid}
              alt={item.node.image.localFile.childImageSharp.fluid.originalName}
            />
            <Anchor
              text={item.node.title}
              linkTo={`/${item.node.title.toLowerCase()}/${item.node.title.toLowerCase()}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
