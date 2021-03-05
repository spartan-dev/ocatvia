import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { useMutation, useQuery, useLazyQuery, gql } from '@apollo/client';

import Arrow from '../../images/svg/arrow.svg';

const Login = () => {
  const [form, setForm] = useState({});

  const validForm = Object.keys(form).length === 5;
  //const [loginUser, { data, loading, error }] = useMutation(LOGIN_USUARIO);
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { customerAccessToken: '8ea4df0720e378d0c7d56f0752536780' },
  });
  const [usertoken, setUserToken] = useState('');
  useEffect(() => {
    localStorage.setItem('customertoken', '8ea4df0720e378d0c7d56f0752536780');
  }, []);
  if (loading) return 'Cargando...';
  if (error) return console.log(error);
  /*   if (data) {
    const { customerAccessToken } = data.customerAccessTokenCreate;
    const { accessToken, expiresAt } = customerAccessToken;
    setUserToken(accessToken);
  } */
  console.log(data, 'user data');
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleLogin = (e) => {
    e.preventDefault();
    // loginUser({ variables: { input: form } });
  };
  return (
    <section className="container min-h-full flex flex-col items-center">
      <p className="title pt-6 md:pt-24">INGRESAR</p>
      <form
        className="mt-12 mb-10 md:mb-24 flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5"
        action=""
      >
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
        <div className="w-full mb-8 flex small">
          <p>¿Olvidaste tu contraseña?</p>
          <a href="#" className="text-red ml-2">
            Click aquí
          </a>
        </div>
        <div className="sm:flex">
          <button
            onClick={handleLogin}
            type="submit"
            disabled={!validForm}
            className={`btn-red ${!validForm && 'cursor-not-allowed'}`}
          >
            Iniciar sesión
          </button>
          <div className="sm:ml-10 flex items-center text-red mt-6 sm:mt-0">
            <div> Crear cuenta</div>
            <Link to="/signup" className="ml-4">
              <Arrow />
            </Link>
          </div>
        </div>
      </form>
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-5/12">
        <p className="price text-center">Continuar como invitado</p>
        <p className="mt-4 mb-8 tracking-widest">
          Puedes pasar a caja como invitado. Nos preocupamos por ti y tus
          compras tanto como por cualquier usuario registrado.
        </p>
        <Link
          to="/"
          className="flex justify-center items-center btn-red mx-auto mb-8"
        >
          Continuar
        </Link>
      </div>
    </section>
  );
};

export default Login;
const LOGIN_USUARIO = gql`
  mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
    customerAccessTokenCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
    }
  }
`;
const QUERY_USER = gql`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      createdAt
      firstName
      lastName
      email
      phone
      orders(first: 5) {
        edges {
          node {
            id
          }
        }
      }
    }
  }
`;
