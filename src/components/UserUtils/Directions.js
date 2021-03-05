import React, { useState } from 'react';
import { Link } from 'gatsby';

import Arrow from '../../images/svg/arrow.svg';

const Directions = () => {
  const [form, setForm] = useState({});
  const validForm = Object.keys(form).length === 10;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section className="container min-h-full flex flex-col items-center">
      <p className="title pt-6 md:pt-24">NUEVA DIRECCIÓN</p>
      <form
        className="mt-12 mb-10 md:mb-24 flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5"
        action=""
      >
        <div className="flex w-full">
          <div className="relative w-full mb-6 mr-4">
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
        </div>
        <div className="relative w-full mb-6">
          <input
            onChange={handleChange}
            type="text"
            name="company"
            placeholder="Empresa"
            className={`input w-full ${
              Object.keys(form).includes('company') && 'pt-2'
            }`}
          />
          {Object.keys(form).includes('company') && (
            <p className="absolute top-1 left-2 small opacity-50">Empresa</p>
          )}
        </div>
        <div className="relative w-full mb-6">
          <input
            onChange={handleChange}
            type="text"
            name="address1"
            placeholder="Dirección"
            className={`input w-full ${
              Object.keys(form).includes('address1') && 'pt-2'
            }`}
          />
          {Object.keys(form).includes('address1') && (
            <p className="absolute top-1 left-2 small opacity-50">Dirección</p>
          )}
        </div>
        <div className="relative w-full mb-6">
          <input
            onChange={handleChange}
            type="text"
            name="address2"
            placeholder="Apartamento, suite, etc."
            className={`input w-full ${
              Object.keys(form).includes('address2') && 'pt-2'
            }`}
          />
          {Object.keys(form).includes('address2') && (
            <p className="absolute top-1 left-2 small opacity-50">
              Apartamento, suite, etc.
            </p>
          )}
        </div>
        <div className="flex w-full">
          <div className="relative w-full mb-6 mr-4">
            <input
              onChange={handleChange}
              type="text"
              name="city"
              placeholder="Ciudad"
              className={`input w-full ${
                Object.keys(form).includes('city') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('city') && (
              <p className="absolute top-1 left-2 small opacity-50">Ciudad</p>
            )}
          </div>
          <div className="relative w-full mb-6">
            <input
              onChange={handleChange}
              type="text"
              name="country"
              placeholder="País o región"
              className={`input w-full ${
                Object.keys(form).includes('country') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('country') && (
              <p className="absolute top-1 left-2 small opacity-50">
                País o región
              </p>
            )}
          </div>
        </div>
        <div className="relative w-full mb-6">
          <input
            onChange={handleChange}
            type="text"
            name="province"
            placeholder="Provincia"
            className={`input w-full ${
              Object.keys(form).includes('province') && 'pt-2'
            }`}
          />
          {Object.keys(form).includes('province') && (
            <p className="absolute top-1 left-2 small opacity-50">Provincia</p>
          )}
        </div>
        <div className="flex w-full">
          <div className="relative w-full mb-6 mr-4">
            <input
              onChange={handleChange}
              type="text"
              name="zip"
              placeholder="Código postal"
              className={`input w-full ${
                Object.keys(form).includes('zip') && 'pt-2'
              }`}
            />
            {Object.keys(form).includes('zip') && (
              <p className="absolute top-1 left-2 small opacity-50">
                Código postal
              </p>
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
        </div>
        <div className="flex items-center w-full">
          <input type="checkbox" name="default" className="checkbox mr-5" />
          <p className="tracking-widest">Fijar como dirección por defecto</p>
        </div>
        <button
          type="submit"
          disabled={!validForm}
          className={`mt-8 btn-red ${!validForm && 'cursor-not-allowed'}`}
        >
          Agregar dirección
        </button>
      </form>
    </section>
  );
};

export default Directions;
