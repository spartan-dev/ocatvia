import React, { useContext } from "react";

import { StoreContext } from "../context/StoreContext";

import Trash from "../images/svg/trash.svg"

const imageUrl = "/static/5df342808b1d5e1d503c0789a39cc00d/14b42/IMG_8624.jpg";

const ShopSidebar = () => {
  const {
    checkout,
    removeProductFromToCart,
  } = useContext(StoreContext);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="px-6 pb-6 overflow-y-scroll">
        <p className="title mb-4">BOLSA</p>
        {checkout.lineItems.map((item) => (
          <>
            <div key={item.id} className="flex py-6">
              <img
                className="w-20 h-28"
                src={`${item.variant.image === null ? imageUrl : item.variant.image.src}`}
                alt={item.title} />
              <div className="ml-4 font-gotham-book">
                <p>${item.variant.price} USD</p>
                <p className="my-3 text-sm">{item.title}</p>
                <div className="flex justify-between">
                  <button onClick={() => removeProductFromToCart(item.id)}>
                    <Trash />
                  </button>
                  <p className="text-smoke">{item.quantity} pieza</p>
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
      <div className="mb-16">
        <div className="font-gotham-medium flex flex-col items-center bg-ivory p-6">
          <div className="w-full flex justify-between">
            <p>TOTAL:</p>
            <p>${checkout.totalPrice} USD</p>
          </div>
          <button className="btn-black mt-10 mb-5">
            Ver bolsa de compras
          </button>
          <button className="btn-red">
            Completar compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopSidebar;
