import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREAR_USUARIO } from '../../GRAPHQL/mutations';
const Signup = () => {
  const [form, setForm] = useState({});

  const validForm = Object.keys(form).length === 5;

  const [signUser, { data, loading, error }] = useMutation(CREAR_USUARIO);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUser({ variables: { input: form } });
  };

  if (loading) return 'Loading....';
  if (error) return <span>{error.message}</span>;
  /*  if (data.customerCreate.customerUserErrors[0])
    return <span>{data.customerCreate.customerUserErrors[0].message}</span>; */

  return (
    <section className="container min-h-full font-gotham-book flex flex-col items-center">
      <p className="title pt-6 md:pt-24">CREAR CUENTA</p>
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
        <div className="relative w-full mb-10">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Contraseña"
            className={`input w-full ${
              Object.keys(form).includes('password') && 'pt-2'
            }`}
          />
          {Object.keys(form).includes('password') && (
            <p className="absolute top-1 left-2 small opacity-50">Contraseña</p>
          )}
        </div>
        <button
          className={`btn-red ${!validForm && 'cursor-not-allowed'}`}
          onClick={handleSubmit}
          disabled={!validForm}
        >
          Registrarse
        </button>
      </form>
    </section>
  );
};

export default Signup;
