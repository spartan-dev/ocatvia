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
            id
            address1
            address2
            city
            country
            zip
            province
            countryCodeV2
            provinceCode
            province
            name
            firstName
            lastName
            phone
            company
          }
        }
      }
      defaultAddress {
        id
        address1
        address2
        city
        country
        zip
        province
        countryCodeV2
        provinceCode
        province
        name
        firstName
        lastName
        phone
        company
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
