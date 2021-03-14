import React, { useState, useEffect, useContext } from 'react';
import { navigate } from 'gatsby';
import { useMutation } from '@apollo/client';
import { UserContext } from '../../context/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import Edit from '../../images/svg/edit.svg';
import Close from '../../images/svg/close.svg';

import { EDITAR_USUARIO, BORRAR_ACCESS_TOKEN } from '../../GRAPHQL/mutations';
import { QUERY_USER } from '../../GRAPHQL/queries';

const UserInfo = ({ data, token }) => {
  const { email, phone, firstName, lastName } = data.customer;
  const [isEdit, setIsEdit] = useState(false);
  const [borrarToken] = useMutation(BORRAR_ACCESS_TOKEN);

  const closeSession = async (e) => {
    e.preventDefault();
    const { data } = await borrarToken({
      variables: { customerAccessToken: token },
      update: (store, { data }) => {
        store.reset();
      },
    });
    const { customerAccessTokenDelete } = data;
    const {
      deletedAccessToken,
      deletedCustomerAccessTokenId,
      userErrors,
    } = customerAccessTokenDelete;
    toast.dark('Cerrando sesión', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    localStorage.removeItem('customertoken', token);
    localStorage.clear();
    setTimeout(() => {
      window.location.reaload('/', { replace: true });
      //o recargar la ventana
    }, 800);
  };

  return (
    <section className="container min-h-full">
      <div className="flex justify-between pb-4 border-b border-beige">
        <p className="title pt-6 md:pt-24">MI CUENTA</p>
        <div className="flex items-center">
          <p className="text-red mr-2">Cerrar sesión</p>
          <button onClick={closeSession}>
            <Close />
          </button>
        </div>
      </div>
      {isEdit ? (
        <EditUser
          firstName={firstName}
          email={email}
          phone={phone}
          lastName={lastName}
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

export default UserInfo;

const EditUser = ({ setIsEdit, isEdit, firstName, lastName, email, phone }) => {
  const { token } = useContext(UserContext);
  const [form, setForm] = useState({});
  const [editUser, { data, loading, error }] = useMutation(EDITAR_USUARIO);
  useEffect(() => {
    setForm({ firstName, lastName, email, phone });
    return () => {
      setForm({});
      console.log('se limpia el estado');
    };
  }, []);
  const validForm = Object.keys(form).length === 4;

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
    console.log(form);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        data: {
          customerUpdate: { customerUserErrors },
        },
      } = await editUser({
        variables: { customerAccessToken: token, customer: form },
        refetchQueries: [
          { query: QUERY_USER, variables: { customerAccessToken: token } },
        ],
        /* update: (cache, { data }) => {
          const customerUpdated = data?.customerUpdate.customer;
          const actualUser = cache.readQuery({
            query: QUERY_USER,
            variables: { customerAccessToken: token },
          });
        }, */
      });
      if (customerUserErrors.length > 0) {
        toast.error(`${customerUserErrors[0].message}`, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      console.log(
        data.customerUpdate,
        'ha cambiado',
        'error',
        data.customerUpdate.customerUserErrors
      );
      toast.dark('Usuario Actualizado 👌', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      // if(updatedUser.customer)
      setIsEdit(!isEdit);
    } catch (error) {
      console.error(error);
    }
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
              value={form.firstName}
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
              value={form.lastName}
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
              value={form.phone}
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
              value={form.email}
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
      <div
        onClick={() => setIsEdit(!isEdit)}
        className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center"
      >
        <Close />
      </div>
    </div>
  );
};
