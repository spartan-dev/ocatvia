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
            currentTotalPrice{
              amount
              currencyCode
            } 
            customerUrl
            name
            orderNumber
            originalTotalPrice{
              amount
              currencyCode
            }
            processedAt
            statusUrl
            financialStatus
            fulfillmentStatus
            shippingAddress{
              address1
            }
            totalPriceV2{
              amount
              currencyCode
            }
            lineItems(first:3){
              edges{
                node{
                  title
                  quantity
                  variant{
                    image{
                      altText 
                      originalSrc
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;


/* export const QUERY_ORDER_LINE_ITEMS = gql`
  query orderLineItems($orderid: ID!){
    orderLineItems(orderid:$$orderid){
      currentQuantity
    }
  }
` */