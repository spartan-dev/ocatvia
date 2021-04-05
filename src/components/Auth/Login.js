import React, { useState, useEffect } from 'react';
import { Link, navigate } from 'gatsby';
import Loading from '../../components/Loading';
import { useMutation, useQuery } from '@apollo/client';
import {
  CREAR_ACCESS_TOKEN,
  RENOVAR_ACCESS_TOKEN,
} from '../../GRAPHQL/mutations';
import { QUERY_USER } from '../../GRAPHQL/queries';
import { ToastContainer, toast } from 'react-toastify';

import Arrow from '../../images/svg/arrow.svg';

const Login = () => {
  const customerToken = () => localStorage.getItem('customertoken') || '';
  const [form, setForm] = useState({});
  const validForm = Object.keys(form).length === 2;
  const [createToken, { data, loading, error }] = useMutation(
    CREAR_ACCESS_TOKEN
  );
  const [renovarToken] = useMutation(RENOVAR_ACCESS_TOKEN);
  //const [getUser] = useQuery(QUERY_USER);
  const [usertoken, setUserToken] = useState('');

  /*   const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { customerAccessToken: usertoken },
  }); */
  useEffect(() => {
    setUserToken(customerToken);
  }, [customerToken]);
  if (loading) return <Loading />;
  if (error) return console.log(error);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    if (usertoken === '') {
      console.log(usertoken);
      //*Si es usuario salio de la sesion o borro sus cookies iniciar una nueva token
      const { data } = await createToken({
        variables: { input: form },
        update: (store, { data: { customerAccessTokenCreate } }) => {
          console.log(customerAccessTokenCreate, 'si pasa los params');
          store.writeQuery({
            query: QUERY_USER,
            variables: {
              customerAccessToken:
                customerAccessTokenCreate.customerAccessToken.accessToken,
            },
          });
        },
        refetchQueries: [
          {
            query: QUERY_USER,
            variables: {
              customerAccessToken: usertoken,
            },
          },
        ],
      });
      //todo revisar el cache para que no tengamos que refrescar pagina
      const { customerAccessTokenCreate } = data;
      const { customerAccessToken } = customerAccessTokenCreate;
      localStorage.setItem('customertoken', customerAccessToken.accessToken);
      /*  const user = await getUser({
        variables: { customerAccessToken: customerAccessToken.accessToken },
      });
      console.log(user); */
      toast.dark('Usuario identificado', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setTimeout(() => {
        navigate('/', { replace: true });
        window.location.reload();
      }, 800);
    } else {
      const { data } = await renovarToken({
        variables: { customerAccessToken: 'a15a7c111701b3562dbf30ffa1568fda' },
      });
      console.log(data, 'token renovado');
      //todo sacar valores de la data de renovacion
      /*   window.localStorage.setItem(
        'customertoken',
        customerAccessToken.accessToken
      ); */
    }
  };
  /**
   * para hacer un fake del login podemos dar con este aproach
   * en el cerrar sesion => usar https://shopify.dev/docs/admin-api/graphql/reference/access/storefrontaccesstokendelete
   * al cerrar la sesion debemos borrar del local storage el customer token y de shopify para crear el nuevo
   * borrar el token del usuario y cuando no este hacer el proceso del login
   * recrear el usar del login con el acces token y crear uno nuevo y guardarlo de nuevo en el localstorage https://shopify.dev/docs/storefront-api/reference/customers/customeraccesstokencreate
   *
   */

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
          <Link to="/recover" className="text-red ml-2">
            Click aquí
          </Link>
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

export default Login;
