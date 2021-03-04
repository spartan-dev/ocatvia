import React from 'react';
import './src/styles/global.css';
import { StoreProvider } from './src/context/StoreContext';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/config/apollo';
import { UserProvider } from './src/context/UserContext';
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <UserProvider>
      <StoreProvider>{element}</StoreProvider>
    </UserProvider>
  </ApolloProvider>
);
