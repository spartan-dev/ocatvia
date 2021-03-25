import React, { useState } from 'react';
import Layout from '../components/layout';
import Loading from '../components/Loading';
import { navigate } from 'gatsby';
import { useMutation } from '@apollo/client';
import { RECOVER_PASSWORD } from '../GRAPHQL/mutations';
import { ToastContainer, toast } from 'react-toastify';

const Recover = () => {
  const [email, setEmail] = useState({});
  const validForm = Object.keys(email).length === 1;
  const [recover_password, { data, loading, error }] = useMutation(
    RECOVER_PASSWORD
  );
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail({ [name]: value });
  };

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    await recover_password({
      variables: { email: email.email },
    });
    // https://octavia-gourmet.myshopify.com/account/reset/5081035899058/26a7e9d4728d43f4f4da88bb4fea4859-1616654823
    navigate('/', { replace: true });
  };
  return (
    <Layout>
      <section className="container min-h-full font-gotham-book flex flex-col items-center">
        <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-5/12 mt-10">
          <p className="price text-center">Restablecer su contraseña</p>
          <p className="mt-4 mb-8 tracking-widest text-center">
            Le enviaremos un correo electrónico para restablecer su contraseña.
          </p>
        </div>
        <div className="mt-12 mb-10 md:mb-24 flex flex-col items-center  justify-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5">
          <div className="justify-center items-center flex-col  sm:flex">
            <div className="relative w-full mb-10">
              <input
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className={`input w-full ${
                  Object.keys(email).includes('email') && 'pt-2'
                }`}
              />
              {Object.keys(email).includes('email') && (
                <p className="absolute top-1 left-2 small opacity-50">Email</p>
              )}
            </div>
            <button
              onClick={handleRecoverPassword}
              type="submit"
              disabled={!validForm}
              className={`btn-red ${!validForm && 'cursor-not-allowed'}`}
            >
              Recuperar Password
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Recover;
