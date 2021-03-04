import React, { useState, useEffect } from 'react';
import { useMutation, useQuery, useLazyQuery, gql } from '@apollo/client';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
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
    <section>
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
