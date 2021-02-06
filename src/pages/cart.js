import React, { useContext } from "react";
import { Link } from "gatsby"

import { StoreContext } from "../context/StoreContext";
import Layout from "../components/layout"

import Minus from "../images/svg/minus.svg"
import Plus from "../images/svg/plus.svg"
import Trash from "../images/svg/trash.svg"

import empty from "../images/assets/empty.png"

const imageUrl = "/static/5df342808b1d5e1d503c0789a39cc00d/14b42/IMG_8624.jpg";

const ShopSidebar = () => {
  const {
    checkout,
    removeProductFromToCart,
  } = useContext(StoreContext);

  return (
    <Layout>
      <section className="container min-h-full font-gotham-medium">
        <p className="title pt-24">BOLSA DE COMPRAS</p>
        {checkout.lineItems.length > 0 ?
          <>
            <div className="mt-6 mb-9">
              <span className="price">{checkout.lineItems.length}</span>
              <span className="currency inline-block ml-1">
                {checkout.lineItems.length > 1 ? "productos" : "producto"}
              </span>
            </div>
            <div className="flex text-smoke mb-4">
              <p className="w-2/5">PRODUCTOS</p>
              <p className="w-1/5">PRECIO</p>
              <p className="w-1/5">CANTIDAD</p>
              <p className="w-1/5">PRECIO TOTAL</p>
            </div>
            <hr />
            {checkout.lineItems.map((item) => (
              <>
                <div key={item.id} className="flex items-center py-8 font-gotham-book">
                  <div className="w-2/5 flex items-center">
                    <img
                      className="w-20 h-28"
                      src={`${item.variant.image === null ? imageUrl : item.variant.image.src}`}
                      alt={item.title} />
                    <p className="my-3 text-sm ml-4">{item.title}</p>
                  </div>
                  <p className="w-1/5">${item.variant.price} USD</p>
                  <div className="w-1/5">
                    <div className="relative">
                      <input
                        value={`${item.quantity} ${item.quantity > 1 ? "productos" : "producto"}`}
                        className="w-48 h-14 border-2 border-beige px-2 pt-2 " />
                      <p className="absolute top-1 left-2 small opacity-50">Cantidad</p>
                      <button className="absolute right-14 top-5">
                        <Plus />
                      </button>
                      <button className="absolute right-20 top-7 mr-2">
                        <Minus />
                      </button>
                    </div>
                  </div>
                  <div className="w-1/5 flex justify-between">
                    <p>${item.variant.price * item.quantity} USD</p>
                    <button
                      className="mr-10"
                      onClick={() => removeProductFromToCart(item.id)}>
                      <Trash />
                    </button>
                  </div>
                </div>
                <hr />
              </>
            ))}
            <div className="flex flex-col items-end py-6">
              <div className="w-2/5 flex justify-between pr-20">
                <p>TOTAL</p>
                <p>${checkout.totalPrice} USD</p>
              </div>
              <Link to="" className="btn-red mt-8 mr-20 flex items-center justify-center">
                Continuar al pago
              </Link>
            </div>
          </> :
          <div className="flex flex-col items-center my-20">
            <img src={empty} alt="" title="" className="w-1/2 mb-12" />
            <p className="text-2xl">Tu bolsa de compras está vacía</p>
            <p className="font-gotham-book">Añade algo para hacerme feliz </p>
          </div>
        }
      </section>
    </Layout>
  );
};

export default ShopSidebar;
