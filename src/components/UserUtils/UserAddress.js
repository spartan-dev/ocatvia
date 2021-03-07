import React, { useState } from 'react';

import { DELETE_ADDRESS, UPDATE_ADDRESS } from '../../GRAPHQL/mutations';
import { QUERY_USER } from '../../GRAPHQL/queries';
import { useMutation } from '@apollo/client';

import Directions from './Directions';
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
  countryCodeV2,
  provinceCode,
  id,
  name,
  token,
}) => {
  const [deleteAddress, { data, loading, error }] = useMutation(DELETE_ADDRESS);
  const handleDeleteAddress = async (idaddress) => {
    try {
      const addressDeleted = await deleteAddress({
        variables: { id: idaddress, customerAccessToken: token },
        update: (cache, { data }) => {
          const actualUser = cache.readQuery({
            query: QUERY_USER,
            variables: { customerAccessToken: token },
          });
          cache.writeQuery({ query: QUERY_USER }, actualUser);
          const deleted = data?.customerAddressDelete.deletedCustomerAddressId;
        },
      });
      console.log(addressDeleted);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-4 flex justify-between w-2/5">
      <div>
        {/* aquí va el nombre registrado en la dirección */}
        <div className="flex items-center">
          <p className="font-gotham-medium mr-3">{name}</p>
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
        <button onClick={() => handleDeleteAddress(id)}>
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
};

const UserAddress = ({ addresses, defaultAddress, token }) => {
  const [isNew, setIsNew] = useState(false);
  return (
    <section className="container min-h-full">
      <p className="title pt-6 md:pt-24 pb-4 border-b border-beige ">
        DIRECCIONES
      </p>
      {isNew ? (
        <Directions
          token={token}
          isNew={isNew}
          setIsNew={(isNew) => setIsNew(isNew)}
        />
      ) : (
        <div>
          <div className="flex flex-wrap justify-between">
            <Address token={token} isDefault {...defaultAddress} />
            {addresses.edges.map((item, index) => (
              <Address token={token} key={index} {...item.node} />
            ))}
          </div>
          <button onClick={() => setIsNew(!isNew)} className="mt-4 btn-red">
            + Nueva dirección
          </button>
        </div>
      )}
    </section>
  );
};

export default UserAddress;
