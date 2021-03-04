import fetch from 'isomorphic-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
const httpLink = createHttpLink({
  uri: `https://octavia-gourmet.myshopify.com/api/2021-01/graphql.json`,
  headers: {
    'X-Shopify-Storefront-Access-Token': ' 3cebf316cd47b93ca1b5997118380079',
    Accept: 'application/graphql',
  },
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('customertoken');
  //console.log(token, 'extraido de localstorage');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
    fetch,
  };
});
const apolloClient = new ApolloClient({
  connectToDevTools: true,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
/* const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri: `https://octavia-gourmet.myshopify.com/api/2021-01/graphql.json`,
    // credentials: 'same-origin',
    headers: {
      'X-Shopify-Storefront-Access-Token': ' 3cebf316cd47b93ca1b5997118380079',
      Accept: 'application/graphql',
    },
    fetch,
  }),
}); */
/* const wrapRootElement = ({ element }) => {
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>;
}; */
export { apolloClient };
