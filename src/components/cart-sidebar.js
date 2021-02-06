import React, { useContext } from "react";
import { Link } from "gatsby"

import { StoreContext } from "../context/StoreContext";

import Trash from "../images/svg/trash.svg"

import empty from "../images/assets/empty.png"

const imageUrl = "/static/5df342808b1d5e1d503c0789a39cc00d/14b42/IMG_8624.jpg";

const ShopSidebar = () => {
  const {
    checkout,
    removeProductFromToCart,
  } = useContext(StoreContext);

  return (
    <>
      {checkout.lineItems.length > 0 ?
        <div className="h-full flex flex-col justify-between">
          <p className="title px-6 mb-4">BOLSA</p>
          <div className="h-full px-6 pb-6 overflow-y-scroll">
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
                      <p className="text-smoke">
                        {item.quantity} {item.quantity > 1 ? "piezas" : "pieza"}
                      </p>
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
                <p>TOTAL</p>
                <p>${checkout.totalPrice} USD</p>
              </div>
              <Link to="/cart" className="btn-black mt-10 mb-5 flex items-center justify-center">
                Ver bolsa de compras
              </Link>
              <Link to="" className="btn-red flex items-center justify-center">
                Completar compra
              </Link>
            </div>
          </div>
        </div> :
        <div className="h-full flex flex-col items-center justify-center -mt-28">
          <img src={empty} alt="" title="" className="w-1/2 mb-12" />
          <p className="text-xl">Tu bolsa de compras está vacía</p>
          <p className="font-gotham-book text-sm">Añade algo para hacerme feliz </p>
        </div>
      }
    </>
  );
};

export default ShopSidebar;
