import React, { useContext } from 'react';

import { StoreContext } from '../context/StoreContext';

import Layout from '../components/layout';

import Minus from '../images/svg/minus.svg';
import Plus from '../images/svg/plus.svg';
import Trash from '../images/svg/trash.svg';

import empty from '../images/assets/empty.png';

const imageUrl = '/static/5df342808b1d5e1d503c0789a39cc00d/14b42/IMG_8624.jpg';

const ShopSidebar = () => {
  const {
    checkout,
    removeProductFromToCart,
    addProductToCart,
    updateProductsFromCart,
  } = useContext(StoreContext);

  const handleChange = (params) => {};

  return (
    <Layout>
      <section className="container min-h-full font-gotham-medium">
        <p className="title pt-6 md:pt-24">BOLSA DE COMPRAS</p>
        {checkout.lineItems.length > 0 ? (
          <>
            <div className="mt-6 md:mb-9">
              <span className="price">{checkout.lineItems.length}</span>
              <span className="currency inline-block ml-1">
                {checkout.lineItems.length > 1 ? 'productos' : 'producto'}
              </span>
            </div>
            <div className="hidden md:flex text-smoke mb-4">
              <p className="w-1/3 lg:w-2/5">PRODUCTOS</p>
              <p className="w-2/12 xl:w-1/5">PRECIO</p>
              <p className="w-1/3 lg:w-3/12 xl:w-1/5">CANTIDAD</p>
              <p className="w-2/12 lg:w-2/12 xl:w-1/5">PRECIO TOTAL</p>
            </div>
            <hr className="hidden md:block" />
            {checkout.lineItems.map((item) => (
              <>
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row items-center py-8 font-gotham-book"
                >
                  <div className="w-full md:w-1/3 lg:w-2/5 flex flex-col lg:flex-row items-center">
                    <img
                      className="w-40 md:w-20 md:h-28"
                      src={`${
                        item.variant.image === null
                          ? imageUrl
                          : item.variant.image.src
                      }`}
                      alt={item.title}
                    />
                    <p className="my-3 text-sm sm:ml-4">{item.title}</p>
                  </div>
                  <p className="w-full md:w-2/12 xl:w-1/5">
                    ${item.variant.price} USD
                  </p>
                  <div className="my-4 md:my-0 w-full md:w-1/3 lg:w-3/12 xl:w-1/5">
                    <div className="relative">
                      <input
                        onChange={handleChange}
                        value={`${item.quantity} ${
                          item.quantity > 1 ? 'productos' : 'producto'
                        }`}
                        className="w-full md:w-48 h-14 border-2 border-beige px-2 pt-2 "
                      />
                      <p className="absolute top-1 left-2 small opacity-50">
                        Cantidad
                      </p>
                      <button
                        onClick={() => addProductToCart(item.variant.id)}
                        className="absolute right-3 md:right-14 top-5"
                      >
                        <Plus />
                      </button>
                      <button
                        onClick={() =>
                          updateProductsFromCart(item.id, item.quantity)
                        }
                        className="absolute right-9 md:right-20 top-7 mr-2"
                      >
                        <Minus />
                      </button>
                    </div>
                  </div>
                  <div className="w-full md:w-2/12 lg:w-2/12 xl:w-1/5 flex md:flex-col lg:flex-row justify-between">
                    <p>${item.variant.price * item.quantity} USD</p>
                    <button
                      className="md:mr-10 md:mt-4 lg:mt-0"
                      onClick={() => removeProductFromToCart(item.id)}
                    >
                      <Trash />
                    </button>
                  </div>
                </div>
                <hr />
              </>
            ))}
            <div className="flex flex-col items-end pt-6 md:py-6">
              <div className="w-full md:w-2/5 flex justify-between md:pr-20">
                <p>TOTAL</p>
                <p>${checkout.totalPrice} USD</p>
              </div>
              <a
                href={checkout.webUrl}
                className="btn-red mt-8 md:mr-20 flex items-center justify-center"
              >
                Continuar al pago
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center my-20">
            <img src={empty} alt="" title="" className="w-1/2 mb-12" />
            <p className="text-2xl">Tu bolsa de compras está vacía</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ShopSidebar;
