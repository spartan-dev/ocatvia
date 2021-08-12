import React from 'react';

import Trash from '../images/svg/trash.svg';

import noImage from '../images/assets/not-available.png';
///static/5df342808b1d5e1d503c0789a39cc00d/14b42/IMG_8624.jpg
const ProductSidebar = ({ item, removeProductFromToCart }) => {
  return (
    <>
      <div className="flex py-6">
        <img
          className="w-20 h-auto"
          src={`${
            item.variant.image === null ? noImage : item.variant.image.src
          }`}
          alt={item.title}
        />
        <div className="mx-4 font-gotham-book w-full">
          <p>${item.variant.price} USD</p>
          <p className="my-3 text-sm">{item.title}</p>
          <div className="flex justify-between">
            <button onClick={() => removeProductFromToCart(item.id)}>
              <Trash />
            </button>
            <p className="text-smoke">
              {item.quantity} {item.quantity > 1 ? 'piezas' : 'pieza'}
            </p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default ProductSidebar;
