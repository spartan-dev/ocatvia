import React, { useContext } from 'react';
import { Link } from 'gatsby';

import { StoreContext } from '../context/StoreContext';

import Shop from '../images/svg/btn-shop.svg';
import { toast } from 'react-toastify';
import notavailable from '../images/assets/not-available.png';
const ProductCard = ({
  image,
  name,
  handle,
  mililiters,
  price,
  className,
  variantId,
  style,
}) => {
  const { addProductToCart } = useContext(StoreContext);

  return (
    <article className={className}>
      <div className="bg-white mb-12">
        <div className="p-9 border border-beige relative" style={style}>
          {image === null || image === undefined ? (
            <img
              alt={name}
              className="object-contain h-full m-auto"
              src={notavailable}
              title={name}
            />
          ) : (
            <img
              alt={name}
              className="object-contain h-full m-auto"
              src={image.localFile.publicURL}
              title={name}
            />
          )}
          <button
            className="btn-shop"
            onClick={() => {
              addProductToCart(variantId).then((res) => {
                toast.dark('Item agregado', {
                  position: 'top-right',
                  autoClose: 1000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
            }}
          >
            <Shop />
          </button>
        </div>
        <div className="flex flex-col items-start">
          <Link
            to={`/${handle}`}
            className="name text-lg sm:text-base md:text-sm lg:text-base xl:text-lg mt-4 "
          >
            {name}
          </Link>
          <p className="mililiters my-1">{mililiters} oz</p>
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
