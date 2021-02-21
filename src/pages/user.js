import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import { useMutation, useQuery, gql } from '@apollo/client';
const CREAR_USUARIO = gql`
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customerUserErrors {
        code
        field
        message
      }
      customer {
        id
      }
    }
  }
`;
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
const User = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [addressForm, setAddressForm] = useState({
    lastName: '',
    firstName: '',
    address1: '',
    province: '',
    country: '',
    zip: '',
    city: '',
  });

  const [signUser, { data, loading: signLoading }] = useMutation(CREAR_USUARIO);
  const [loginUser, { data: shopiUser, loading }] = useMutation(LOGIN_USUARIO);
  const [
    updateAddress,
    { data: address, loading: addressLoading },
  ] = useMutation(UPDATE_ADDRESS);
  /*   useEffect(() => {
    localStorage.setItem(
      'customertoken',
      shopiUser.customerAccesTokenCreate.customerAccesToken.accessToken
    );
  }, []); */
  if (loading || signLoading || addressLoading) return 'cargando...';
  console.log(data, 'respuesta de shopify');
  console.log(shopiUser);
  console.log(address);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUser({ variables: { input: form } });
    console.log(form);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser({ variables: { input: form } });
  };
  const handleAddressChange = (e) => {
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
  };

  return (
    <Layout>
      <div>hola user</div>
      <h1>vamos a logear</h1>
      <form action="">
        <label htmlFor="email">email</label>
        <input
          onChange={handleChange}
          name="email"
          type="text"
          className="z-20 input-size secondary-text my-2 xl:my-3 p-4 border  border-purple-600"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={handleChange}
          name="password"
          type="password"
          className="z-20 input-size secondary-text xl:my-3 p-4 border-purple-600 border"
        />
        <button className="border border-purple-600" onClick={handleSubmit}>
          signup
        </button>
      </form>

      <form action="">
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="text"
          name="email"
          placeholder="Email"
          className="border border-purple-600"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          placeholder="Password"
          className="border border-purple-600"
        />
        <button
          onClick={handleLogin}
          type="submit"
          className="border border-purple-600"
        >
          Login
        </button>
      </form>
      <form action="">
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
      </button>
    </Layout>
  );
};

export default User;
