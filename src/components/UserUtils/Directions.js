import React, { useState, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ADDRESS } from '../../GRAPHQL/mutations';
import { QUERY_USER } from '../../GRAPHQL/queries';
import { ToastContainer, toast } from 'react-toastify';
//select for countrys
import Select from 'react-select';
import countryList from 'react-select-country-list';
//images svg
import Arrow from '../../images/svg/arrow.svg';
import Close from '../../images/svg/close.svg';
// https://fkhadra.github.io/react-toastify/introduction/
const Directions = ({ isNew, setIsNew, token }) => {
  const [form, setForm] = useState({});
  const [country, setCountry] = useState('');
  const options = useMemo(() => countryList().getData(), []);
  const validForm = Object.keys(form).length === 10;
  const [createAddress, { data, loading, error }] = useMutation(CREATE_ADDRESS);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, country: country.value, [name]: value });
  };
  const changeHandler = (value) => {
    setCountry(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await createAddress({
        variables: { customerAccessToken: token, address: form },
        refetchQueries: [
          { query: QUERY_USER, variables: { customerAccessToken: token } },
        ],
      });
      const { customerAddressCreate } = data;
      const { customerUserErrors } = customerAddressCreate;

      if (customerAddressCreate.customerAddress === null) {
        toast.error('Ups hay un error al agregar dirección', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.dark('Dirección Agregada 👌', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsNew(!isNew);
      }
    } catch (error) {
      console.error(error);
      toast.error('Ups hay un error al agregar direccion ', {
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
    <section className="container min-h-full flex flex-col items-center">
      <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-2/5">
        <div
          onClick={() => setIsNew(!isNew)}
          className="mt-4 h-8 w-8 flex w-full justify-end"
        >
          <Close />
        </div>
        <p className="title text-center pt-6 md:pt-12">NUEVA DIRECCIÓN</p>
      </div>
      <form
        className="mt-12 flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5"
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
            {/*      <input
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
            )} */}
            <Select
              name="country"
              className={`input w-full ${
                Object.keys(form).includes('country') && 'pt-2'
              }`}
              options={options}
              value={country}
              onChange={changeHandler}
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
        {/* <div className="flex items-center w-full">
          <input type="checkbox" name="default" className="checkbox mr-5" />
          <p className="tracking-widest">Fijar como dirección por defecto</p>
        </div> */}
        <button
          type="submit"
          disabled={!validForm}
          className={`mt-8 btn-red ${!validForm && 'cursor-not-allowed'}`}
          onClick={handleSubmit}
        >
          Agregar dirección
        </button>
      </form>
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

export default Directions;
