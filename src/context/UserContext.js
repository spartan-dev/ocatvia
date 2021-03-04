import React, { createContext, useEffect, useState } from 'react';
import Client from 'shopify-buy/index.unoptimized.umd';
export const defaultUserContext = {
  profile: {},
  loading: false,
  error: false,
  isAuth: false,
  token: '',
  handleLogout: () => {},
  updateProfile: () => {},
};
const clientUser = Client.buildClient({
  domain: 'octavia-gourmet.myshopify.com',
  storefrontAccessToken: '3cebf316cd47b93ca1b5997118380079',
});

/* const loginUserQuery = clientUser.graphQLClient.query((root) => {
  root.addConnection(
    'customer',
    {
      variables: { customerAccessToken: '8ea4df0720e378d0c7d56f0752536780' },
      args: { first: 10 },
    },
    (customer) => {
      customer.add('firstName');
      customer.add('lastName');
      customer.add('email');
      customer.add('phone');
    }
  );
}); */
//setProfile({ name: 'kain', action: () => {} });
/*   clientUser.graphQLClient.send(loginUserQuery).then(({ model, data }) => {
        console.log(model);
        console.log(data);
      }); */

export const UserContext = createContext(defaultUserContext);
// Check if it's a browser
const isBrowser = typeof window !== 'undefined';

export const UserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState('');
  /*   const [getUser, { loading, error, data }] = useLazyQuery(QUERY_USER);*/
  useEffect(() => {
    checkforUserToken();
  }, []);

  const checkforUserToken = () => {
    const usertoken = isBrowser ? localStorage.getItem('customertoken') : null;
    if (usertoken) {
      setToken(usertoken);
    } else {
      setToken(''); //todo y como le pregunto a shopify si existe el token?
      setIsAuth();
    }
  };

  return (
    <UserContext.Provider value={{ ...defaultUserContext, isAuth, token }}>
      {children}
    </UserContext.Provider>
  );
};
