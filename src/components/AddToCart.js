import React, { useContext } from "react";
import Shop from "../images/svg/btn-shop.svg";
import { StoreContext } from "../context/StoreContext";

const AddToCart = ({ className, variantId }) => {
  const { addProductToCart } = useContext(StoreContext);
  return (
    <button className={className} onClick={() => addProductToCart(variantId)}>
      <Shop />
    </button>
  );
};

export default AddToCart;
