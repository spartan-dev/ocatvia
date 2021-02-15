import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { StoreContext } from '../context/StoreContext';

import ProductSidebar from './product-sidebar';

import empty from '../images/assets/empty.png';

const ShopSidebar = () => {
  const { checkout, removeProductFromToCart, toggleCartOpen } = useContext(
    StoreContext
  );

  return (
    <>
      {checkout.lineItems.length > 0 ? (
        <div className="h-full flex flex-col justify-between">
          <p className="title px-6 mb-4">BOLSA</p>
          <div className="h-full px-6 pb-6 overflow-y-scroll">
            {checkout.lineItems.map((item, index) => (
              <ProductSidebar
                key={index}
                item={item}
                removeProductFromToCart={removeProductFromToCart}
              />
            ))}
          </div>
          <div className="mb-16">
            <div className="font-gotham-medium flex flex-col items-center bg-ivory p-6">
              <div className="w-full flex justify-between">
                <p>TOTAL</p>
                <p>${checkout.totalPrice} USD</p>
              </div>
              <Link
                to="/cart"
                className="btn-black mt-10 mb-5 flex items-center justify-center"
                onClick={toggleCartOpen}
              >
                Ver bolsa de compras
              </Link>
              <a
                href={checkout.webUrl}
                className="btn-red flex items-center justify-center"
              >
                Completar compra
              </a>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full flex flex-col items-center justify-center -mt-28">
          <img src={empty} alt="" title="" className="w-1/2 mb-12" />
          <p className="text-xl">Tu bolsa de compras está vacía</p>
        </div>
      )}
    </>
  );
};

export default ShopSidebar;
