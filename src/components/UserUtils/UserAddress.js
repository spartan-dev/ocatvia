import React from 'react';
import Trash from '../../images/svg/trash.svg';
import Edit from '../../images/svg/edit.svg';
import Star from '../../images/svg/star.svg';

const Address = ({
  address1,
  address2,
  city,
  country,
  zip,
  province,
  isDefault,
}) => (
  <div className="my-4 flex justify-between w-2/5">
    <div>
      {/* aquí va el nombre registrado en la dirección */}
      <div className="flex items-center">
        <p className="font-gotham-medium mr-3">Salvador Emmanuel</p>
        {isDefault && <Star className="-mt-1" />}
      </div>
      <p>
        {address1}, {address2}
      </p>
      <p>
        {zip},{province}
      </p>
      <p>
        {city}, {country}
      </p>
    </div>
    <div>
      <button>
        <Trash />
      </button>
      <div className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center">
        <button>
          <Edit />
        </button>
      </div>
    </div>
  </div>
);

const UserAddress = ({ address }) => {
  const {
    address1,
    address2,
    city,
    country,
    zip,
    province,
    countryCodeV2,
    provinceCode,
  } = address;
  console.log(address, 'direcciones en addres user');
  //todo este compo debe tener la conexion a la mutacion de actualizar la direccion

  //OJO AQUÍ
  // debemos mandarle la default y también las otras que tenga añadidas

  const defaultAdress = {
    address1: address1,
    address2: address2,
    city: city,
    country: country,
    zip: zip,
    province: province,
  };

  const someAdresses = [
    {
      address1: address1,
      address2: address2,
      city: city,
      country: country,
      zip: zip,
      province: province,
    },
    {
      address1: address1,
      address2: address2,
      city: city,
      country: country,
      zip: zip,
      province: province,
    },
  ];

  return (
    <section className="container min-h-full">
      <p className="title pt-6 md:pt-24 pb-4 border-b border-beige ">
        DIRECCIONES
      </p>
      <div className="flex flex-wrap justify-between">
        <Address isDefault {...defaultAdress} />
        {someAdresses.map((item, index) => (
          <Address key={index} {...item} />
        ))}
      </div>
      <button className="mt-4 btn-red">+ Nueva dirección</button>
    </section>
  );
};

export default UserAddress;
