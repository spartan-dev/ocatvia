import React, { useState, useEffect, useContext } from 'react';
import Layout from '../components/layout';
import { Login, Signup } from '../components/Auth';
import { useMutation, useQuery, gql, useLazyQuery } from '@apollo/client';
import { UserContext } from '../context/UserContext';
const User = () => {
  const { isAuth, token } = useContext(UserContext);
  const [addressForm, setAddressForm] = useState({
    lastName: '',
    firstName: '',
    address1: '',
    address2: '',
    province: '',
    country: '',
    zip: '',
    city: '',
  });
  const [getUser, { loading, error, data }] = useLazyQuery(QUERY_USER);
  useEffect(() => {
    if (token) {
      getUser({ variables: { customerAccessToken: token } });
    }
    console.log(isAuth, 'si no pasa lo del token');
  }, []);

  /*   const [
    updateAddress,
    { data: address, loading: addressLoading },
  ] = useMutation(UPDATE_ADDRESS); */
  /*   const { client, loading, data } = useQuery(QUERY_USER, {
    fetchPolicy: 'network-only',
  });
  if (loading) return 'Loading...'; */
  //if (addressLoading) return 'cargando...';

  /*   const handleAddressChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAddressForm({ ...addressForm, [name]: value });
  };
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    console.log(addressForm);
    updateAddress({
      variables: {
        address: addressForm,
        customerAccessToken: '8ea4df0720e378d0c7d56f0752536780',
      },
    });
  }; */

  //const { email, firstName, lastName, phone, orders } = data.customer;
  //destructura del customer
  // console.log(email, firstName, lastName, phone, orders);
  //hace set del perfil del usuario
  /*  setProfile({
      email,
      firstName,
      lastName,
      phone,
      orders: orders.edges,
    }); */
  console.log(data);
  return (
    <Layout>
      <div>hola user</div>
      {!token ? <Login /> : null}
      <div>Fierro pariente</div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error{error.message}</div>
      ) : (
        data && (
          <div>
            <span>{data.customer.email}</span> <br />
            <span>{data.customer.phone}</span> <br />
            <span>{data.customer.firstName}</span> <br />
            <span>{data.customer.lastName}</span> <br />
            {data.customer.orders.edges.length > 0 ? (
              data.customer.orders.edges.map((order) => {
                return <div>{order}</div>;
              })
            ) : (
              <div>No hay ordenes aun!!! compra algo</div>
            )}
          </div>
        )
      )}
      {/*  <form action="">
        <label htmlFor="lastName">Apellido</label>
        <input onChange={handleAddressChange} type="text" name="lastName" />
        <label htmlFor="firstName">Nombre</label>
        <input onChange={handleAddressChange} type="text" name="firstName" />
        <label htmlFor="address1">Direccion</label>
        <input onChange={handleAddressChange} type="text" name="address1" />
        <label htmlFor="province">Estado</label>
        <input onChange={handleAddressChange} type="text" name="province" />
        <label htmlFor="country">Pais</label>
        <input onChange={handleAddressChange} type="text" name="country" />
        <label htmlFor="zip">Codigo postal</label>
        <input onChange={handleAddressChange} type="text" name="zip" />
        <label htmlFor="city">City</label>
        <input onChange={handleAddressChange} type="text" name="city" />
        <button onClick={handleAddressSubmit}>agregar direccion</button>
      </form>
      <button>
        <a href="https://octavia-gourmet.myshopify.com/account/login">Login</a>
      </button> */}
    </Layout>
  );
};

export default User;

const UPDATE_ADDRESS = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerUserErrors {
        code
        field
        message
      }
      customerAddress {
        id
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
      defaultAddress {
        address1
        address2
        city
        country
        zip
      }
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