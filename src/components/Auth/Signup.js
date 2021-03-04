import React, { useState } from 'react';
import { useMutation, useQuery, gql } from '@apollo/client';

const Signup = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [signUser, { data, loading, error }] = useMutation(CREAR_USUARIO);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUser({ variables: { input: form } }).then((result) => {
      console.log(result);
    });
  };
  if (loading) return 'Loading....';
  if (error) return <span>{error.message}</span>;
  /*  if (data.customerCreate.customerUserErrors[0])
    return <span>{data.customerCreate.customerUserErrors[0].message}</span>; */
  console.log(data);
  return (
    <section>
      <form action="">
        <label htmlFor="lastName">Apellido</label>
        <input onChange={handleChange} type="text" name="lastName" />
        <label htmlFor="firstName">Nombre</label>
        <input onChange={handleChange} type="text" name="firstName" />
        <label htmlFor="phone">Telefono</label>
        <input type="text" name="phone" onChange={handleChange} />
        <label htmlFor="email">email</label>

        <input onChange={handleChange} name="email" type="text" />
        <label htmlFor="password">password</label>
        <input onChange={handleChange} name="password" type="password" />
        <button className="border border-purple-600" onClick={handleSubmit}>
          signup
        </button>
      </form>
    </section>
  );
};

export default Signup;

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
