import React from 'react';

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
  return (
    <section>
      <div>
        <h1>Usuario direcciones</h1>
      </div>
      <div>
        <ul>
          <li>{address1}</li>
          <li>{address2}</li>
          <li>{city}</li>
          <li>{country}</li>
          <li>{zip}</li>
          <li>{province}</li>
          <li>{countryCodeV2}</li>
          <li>{provinceCode}</li>
        </ul>
      </div>
    </section>
  );
};

export default UserAddress;
