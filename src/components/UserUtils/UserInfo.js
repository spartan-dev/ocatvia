import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import Edit from '../../images/svg/edit.svg';
import Close from '../../images/svg/close.svg';

import { EDITAR_USUARIO } from '../../GRAPHQL/mutations';

const UserInfo = ({ data }) => {
  const { email, phone, firstName, lastName } = data.customer;
  const [isEdit, setIsEdit] = useState(false);
  return (
    <section className="container min-h-full">
      <div className="flex justify-between pb-4 border-b border-beige">
        <p className="title pt-6 md:pt-24">MI CUENTA</p>
        <div className="flex items-center">
          <p className="text-red mr-2">Cerrar sesión</p>
          <button>
            <Close />
          </button>
        </div>
      </div>
      {isEdit ? (
        <EditUser
          fistName={firstName}
          isEdit={isEdit}
          setIsEdit={(isEdit) => setIsEdit(isEdit)}
        />
      ) : (
        <div className="flex justify-between">
          <div className="w-2/5">
            <div className="flex mt-4">
              <p className="opacity-50 w-1/2">Nombre</p>
              <p>
                {firstName} {lastName}
              </p>
            </div>
            <div className="flex mt-4">
              <p className="opacity-50 w-1/2">Correo electrónico</p>
              <p>{email}</p>
            </div>
            <div className="flex mt-4">
              <p className="opacity-50 w-1/2">Teléfono</p>
              <p>{phone}</p>
            </div>
          </div>
          <div
            onClick={() => setIsEdit(!isEdit)}
            className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center"
          >
            <Edit />
          </div>
        </div>
      )}
    </section>
  );
};

export default UserInfo;

const EditUser = ({ setIsEdit, isEdit, firstName }) => {
  const [form, setForm] = useState({});
  const validForm = Object.keys(form).length === 5;
  const [editUser, { data, loading, error }] = useMutation(EDITAR_USUARIO);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  editUser({ variables: { input: form } }).then((result) => {
      console.log(result);
    }); */
  };
  return (
    <div className="flex justify-between">
      <div className="w-2/5">
        <form
          className="mt-12 md:mb-9 flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5"
          action=""
        >
          <div className="relative w-full mb-6">
            <input
              onChange={handleChange}
              type="text"
              name="firstName"
              placeholder="Nombre"
              className={`input w-full ${
                Object.keys(form).includes('firstName') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('firstName') && (
              <p className="absolute top-1 left-2 small opacity-50">Nombre</p>
            )}
          </div>
          <div className="relative w-full mb-6">
            <input
              onChange={handleChange}
              type="text"
              name="lastName"
              placeholder="Apellido"
              className={`input w-full ${
                Object.keys(form).includes('lastName') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('lastName') && (
              <p className="absolute top-1 left-2 small opacity-50">Apellido</p>
            )}
          </div>
          <div className="relative w-full mb-6">
            <input
              onChange={handleChange}
              type="text"
              name="phone"
              placeholder="Teléfono"
              className={`input w-full ${
                Object.keys(form).includes('phone') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('phone') && (
              <p className="absolute top-1 left-2 small opacity-50">Teléfono</p>
            )}
          </div>
          <div className="relative w-full mb-6">
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className={`input w-full ${
                Object.keys(form).includes('email') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('email') && (
              <p className="absolute top-1 left-2 small opacity-50">
                Correo electrónico
              </p>
            )}
          </div>
          <button
            className={`btn-red ${!validForm && 'cursor-not-allowed'}`}
            onClick={handleSubmit}
            disabled={!validForm}
          >
            Editar Usuario
          </button>
        </form>
      </div>

      <div
        onClick={() => setIsEdit(!isEdit)}
        className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center"
      >
        <Close />
      </div>
    </div>
  );
};
