import { gql } from '@apollo/client';

/**
 * @mutation Crear Usuario
 */
export const CREAR_USUARIO = gql`
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

/**
 * @mutation Editar usuario
 */
export const EDITAR_USUARIO = gql`
  mutation customerUpdate(
    $customerAccessToken: String!
    $customer: CustomerUpdateInput!
  ) {
    customerUpdate(
      customerAccessToken: $customerAccessToken
      customer: $customer
    ) {
      customer {
        id
        lastName
        firstName
        phone
        email
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
/**
 * @mutation Crea una nueva direccion
 */
export const CREATE_ADDRESS = gql`
  mutation customerAddressCreate(
    $customerAccessToken: String!
    $address: MailingAddressInput!
  ) {
    customerAddressCreate(
      customerAccessToken: $customerAccessToken
      address: $address
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * @mutation  update de la direccion
 * @params ID de la direcciones
 * @params acces token del Usuario
 * @params los input de la direccion
 */
export const UPDATE_ADDRESS = gql`
  mutation customerAddressUpdate(
    $customerAccessToken: String!
    $id: ID!
    $address: MailingAddressInput!
  ) {
    customerAddressUpdate(
      customerAccessToken: $customerAccessToken
      id: $id
      address: $address
    ) {
      customerAddress {
        id
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;

/**
 * @mutation Borra una direccion del usuario
 * @params ID de la direcciones
 * @params acces token del Usuario
 */

export const DELETE_ADDRESS = gql`
  mutation customerAddressDelete($id: ID!, $customerAccessToken: String!) {
    customerAddressDelete(id: $id, customerAccessToken: $customerAccessToken) {
      customerUserErrors {
        code
        field
        message
      }
      deletedCustomerAddressId
    }
  }
`;
