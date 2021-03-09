import React, { useState } from 'react';

import { DELETE_ADDRESS, UPDATE_ADDRESS } from '../../GRAPHQL/mutations';
import { QUERY_USER } from '../../GRAPHQL/queries';
import { useMutation } from '@apollo/client';
import { ToastContainer, toast } from 'react-toastify';
import EditDirections from './EditDirections';
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
  company,
  name,
  firstName,
  lastName,
  phone,
  token,
  edit,
  setEdit,
  setIdChange,
}) => {
  const [deleteAddress, { data, loading, error }] = useMutation(DELETE_ADDRESS);
  const handleDeleteAddress = async (idaddress) => {
    try {
      const addressDeleted = await deleteAddress({
        variables: { id: idaddress, customerAccessToken: token },
        refetchQueries: [
          { query: QUERY_USER, variables: { customerAccessToken: token } },
        ],
      });
      if (addressDeleted) {
        toast.dark('Direccion Eliminada ❗', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error('Ups hay un error al agregar direccion `${error}`👌', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="my-4 flex justify-between w-2/5">
      <div>
        <div className="flex items-center">
          <p className="font-gotham-medium mr-3">
            {name} {phone}
          </p>
          {isDefault && <Star className="-mt-1" />}
        </div>
        <p>
          {address1}, {address2}
        </p>
        <p>
          {zip},{province}
        </p>
        <p>
          {city}, {country}, {provinceCode}
        </p>
      </div>
      <div>
        <button onClick={() => handleDeleteAddress(id)}>
          <Trash />
        </button>
        <div className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center">
          <button
            onClick={() => {
              setEdit(!edit);
              setIdChange({
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
                firstName,
                lastName,
                phone,
                company,
              });
            }}
          >
            <Edit />
          </button>
        </div>
      </div>
    </div>
  );
};

const UserAddress = ({ addresses, defaultAddress, token }) => {
  const [isNew, setIsNew] = useState(false);
  const [edit, setEdit] = useState(false);
  const [idChange, setIdChange] = useState({});
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
      ) : edit ? (
        <EditDirections
          //setIdChange={(idChange) => setIdChange(idChange)}
          edit={edit}
          idChange={idChange}
          token={token}
          setEdit={(edit) => setEdit(edit)}
        />
      ) : (
        <div>
          <div className="flex flex-wrap justify-between">
            <Address
              edit={edit}
              setEdit={(edit) => setEdit(edit)}
              setIdChange={(idChange) => setIdChange(idChange)}
              token={token}
              isDefault
              {...defaultAddress}
            />
            {addresses.edges.map((item, index) => (
              <Address
                edit={edit}
                setEdit={(edit) => setEdit(edit)}
                setIdChange={(idChange) => setIdChange(idChange)}
                token={token}
                key={index}
                {...item.node}
              />
            ))}
          </div>
          <button onClick={() => setIsNew(!isNew)} className="mt-4 btn-red">
            + Nueva dirección
          </button>
        </div>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </section>
  );
};

export default UserAddress;
