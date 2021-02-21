import fetch from 'isomorphic-fetch';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new createHttpLink({
    uri: `https://octavia-gourmet.myshopify.com/api/2021-01/graphql.json`,
    headers: {
      'X-Shopify-Storefront-Access-Token': ' 3cebf316cd47b93ca1b5997118380079',
      Accept: 'application/graphql',
    },
    fetch,
  }),
});
/* const wrapRootElement = ({ element }) => {
  <ApolloProvider client={apolloClient}>{element}</ApolloProvider>;
}; */
export { apolloClient };
