import React, { useState, useMemo } from 'react';
import { useMutation } from '@apollo/client';
import { QUERY_USER } from '../../GRAPHQL/queries';
import { UPDATE_ADDRESS } from '../../GRAPHQL/mutations';
import { ToastContainer, toast } from 'react-toastify';
//select for countrys
import Select from 'react-select';
import countryList from 'react-select-country-list';
//svg images for icons
import Close from '../../images/svg/close.svg';

/**
 * todo ===  revisar el valor default de el select de los paises para tenerlo en el form de
 * todo ===  revisar el form por lo del estado sin controlar pasar en estado o como usarlo???
 *
 */
const EditDirections = ({
  setEdit,
  edit,
  idChange: {
    city,
    company,
    country,
    firstName,
    lastName,
    phone,
    province,
    zip,
    address1,
    address2,
    id,
    countryCodeV2,
  },
  token,
}) => {
  const [form, setForm] = useState({
    city,
    company,
    country,
    firstName,
    lastName,
    phone,
    province,
    zip,
    address1,
    address2,
  });
  const [countrySelect, setCountry] = useState('');
  const [updateAddress, { data, loading, error }] = useMutation(UPDATE_ADDRESS);
  const options = useMemo(() => countryList().getData(), []);
  const validForm = Object.keys(form).length === 9;
  const preData = countryList().getLabel(countryCodeV2);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, country, [name]: value });
    console.log(form);
  };
  const changeHandler = (value) => {
    setCountry(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updateAddress({
        variables: { customerAccessToken: token, id: id, address: form },
        refetchQueries: [
          { query: QUERY_USER, variables: { customerAccessToken: token } },
        ],
      });
      const { customerAddressUpdate } = data;
      if (customerAddressUpdate.customerAddress === null) {
        toast.error('Ups hay un error al actulizar la  dirección ', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.dark('Dirección Actualizada 👌', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setEdit(!edit);
      }
    } catch (error) {
      console.error(error);
      console.log(error, 'si tenemos error?');
      toast.error('Ups hay un error al actulizar la  dirección ', {
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
      <div className="container min-h-full flex flex-row justify-around align-bottom">
        <p className="title pt-6 md:pt-24">EDITA TU DIRECCIÓN</p>
        <div
          onClick={() => setEdit(!edit)}
          className="mt-4 h-8 w-8 rounded-full border-2 border-yellow flex items-center justify-center"
        >
          <Close />
        </div>
      </div>
      <form
        className="mt-12 mb-10 md:mb-24 flex flex-col items-center w-full sm:w-3/4 lg:w-1/2 xl:w-2/5"
        action=""
      >
        <div className="flex w-full">
          <div className="relative w-full mb-6 mr-4">
            <input
              value={form.firstName}
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
              value={form.lastName}
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
            value={form.company}
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
            value={form.address1}
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
            value={form.address2}
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
              value={form.city}
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
              defaultInputValue={preData}
              defaultValue={preData}
              options={options}
              value={countrySelect}
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
            value={form.province}
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
              value={form.zip}
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
              value={form.phone}
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
          // disabled={!validForm}
          className={`mt-8 btn-red ${!validForm && 'cursor-not-allowed'}`}
          onClick={handleSubmit}
        >
          Actualizar dirección
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

export default EditDirections;
