import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import Img from "gatsby-image";
import ron5 from "../images/assets/ron5.jpg";

import Minus from "../images/svg/minus.svg";
import Plus from "../images/svg/plus.svg";

const ProductDetail = ({ product }) => {
  //Todo revisar la query para otener el numero disponible en stock
  const { addProductToCart } = useContext(StoreContext);

  const handleChange = (params) => {};

  return (
    <div className="container">
      <p className="small py-10">
        Inicio &gt; Licores &gt; Ron &gt; Ron Barceló Imperial Premium Blend
      </p>
      <div className="flex items-center justify-around">
        {product.variants[0].image === null ||
        product.variants[0].image === undefined ? (
          <img src={ron5} className="w-96" />
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
            {product.productType}: {product.title}
            <br />
            Tamaño: {product.variants[0].weight} oz <br />
            Descripción:{product.description}
          </p>
          <p className="font-gotham-medium text-2xl tracking-widest">
            ${product.variants[0].price}{" "}
            <span className="text-base tracking-widest">USD</span>
          </p>
          <div className="my-9 h-14 border-2 border-beige py-1 px-4 relative">
            <p className="small opacity-50">Cantidad</p>
            <p className="font-gotham-book">1 pieza</p>
          </div>
          <button
            className="btn-red"
            onClick={() => addProductToCart(product.variants[0].shopifyId)}
          >
            Agregar a bolsa
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
