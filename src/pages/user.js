import React, {
  // useState,
  useEffect,
  useContext,
} from 'react';
import Layout from '../components/layout';
import {
  Login,
  // Signup
} from '../components/Auth';
import Loading from '../components/Loading';
import {
  UserInfo,
  UserAddress,
  UserOrders,
  // Directions,
} from '../components/UserUtils';
import { useLazyQuery } from '@apollo/client';
import { QUERY_USER } from '../GRAPHQL/queries';
import { UserContext } from '../context/UserContext';
const User = () => {
  const { token } = useContext(UserContext);
  // const [addressForm, setAddressForm] = useState({
  //   lastName: '',
  //   firstName: '',
  //   address1: '',
  //   address2: '',
  //   province: '',
  //   country: '',
  //   zip: '',
  //   city: '',
  // });
  const [getUser, { loading, error, data }] = useLazyQuery(QUERY_USER);
  useEffect(() => {
    if (token) {
      getUser({ variables: { customerAccessToken: token } });
    }
  }, [token]);

  /*   const handleAddressChange = (e) => {
    const { target } = e;
    const { name, value } = target;
    setAddressForm({ ...addressForm, [name]: value });
  };
  const handleAddressSubmit = (e) => {
    e.preventDefault();
    updateAddress({
      variables: {
        address: addressForm,
        customerAccessToken: '8ea4df0720e378d0c7d56f0752536780',
      },
    });
  }; */
  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : error ? (
        <div>Error{error.message}</div>
      ) : data === undefined || data.customer === null ? (
        <Login />
      ) : (
        <div>
          <UserInfo data={data} token={token} />
          <UserAddress
            defaultAddress={data.customer.defaultAddress}
            addresses={data.customer.addresses}
            token={token}
          />
          <UserOrders orders={data.customer.orders} />
        </div>
      )}
      {/*  {!token ? <Login /> : null} */}
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
