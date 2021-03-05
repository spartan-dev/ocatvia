import React from 'react';

import Edit from '../../images/svg/edit.svg';
import Close from '../../images/svg/close.svg';

const UserInfo = ({ data }) => {
  const { email, phone, firstName, lastName } = data.customer;

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
        <div className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center">
          <Edit />
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
