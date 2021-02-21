import React from 'react';
import './src/styles/global.css';
import { StoreProvider } from './src/context/StoreContext';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/config/apollo';
export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={apolloClient}>
    <StoreProvider>{element}</StoreProvider>
  </ApolloProvider>
);
