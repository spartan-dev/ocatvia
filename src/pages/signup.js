import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Loading from '../components/Loading';
import { navigate } from 'gatsby';
import { useMutation } from '@apollo/client';
import { CREAR_USUARIO } from '../GRAPHQL/mutations';
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const [form, setForm] = useState({});

  const validForm = Object.keys(form).length === 5;
  const [signUser, { data, loading, error }] = useMutation(CREAR_USUARIO);
  useEffect(() => {
    console.log(form);
  }, [form]);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // este id se debe de usar para activar el usuario
    const { data } = await signUser({ variables: { input: form } });
    //extraer el id del customer
    // usarlo para el activate
    //! importante el user ya se activa con la url del correo queda revisar el correo para cambiar la url a nuestro shop
    if (data) {
      if (data?.customerCreate.customerUserErrors.length > 0) {
        return toast.dark(
          `Un error en :${data.customerCreate.customerUserErrors[0].message}`,
          {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
      }
    }
    toast.dark('Recibiras un correo con la informacion 👌', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    // llevar a la refresh de login o refresacr el componente
    setTimeout(() => {
      navigate('/user');
    }, 3000);
  };
  //+503 2525 8222
  if (loading) return <Loading />;
  if (error) {
    toast.dark(`Un error en :${error.message}`, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  //manejar errores con  algun display

  console.log(error, data);

  return (
    <Layout>
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
              <p
                className={`absolute top-1 left-2 small opacity-50 ${
                  form.firstName === '' ? 'hidden' : null
                }`}
              >
                Nombre
              </p>
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
              <p className="absolute top-1 left-2 small opacity-50">
                Contraseña
              </p>
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
        {/*   <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
        /> */}
      </section>
    </Layout>
  );
};

export default Signup;
