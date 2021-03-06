import { gql } from '@apollo/client';
/**
 * @query trae los datos del usuario
 */
export const QUERY_USER = gql`
  query customer($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id
      createdAt
      firstName
      lastName
      email
      phone
      addresses(first: 5) {
        edges {
          node {
            address1
            address2
            city
          }
        }
      }
      defaultAddress {
        address1
        address2
        city
        country
        zip
        province
        countryCodeV2
        provinceCode
        province
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
