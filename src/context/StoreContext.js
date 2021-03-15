import React, { createContext, useState, useEffect, useContext } from 'react';
import Client from 'shopify-buy';
import { useMutation, useLazyQuery } from '@apollo/client';
import { ASSOCIATE_CUSTOMER_TO_CHECKOUT } from '../GRAPHQL/mutations';
import { QUERY_USER } from '../GRAPHQL/mutations';
import { UserContext } from './UserContext';

const client = Client.buildClient({
  domain: 'octavia-gourmet.myshopify.com',
  storefrontAccessToken: '3cebf316cd47b93ca1b5997118380079',
});

const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductFromToCart: () => {},
  updateProductsFromCart: () => {},
  client,
  checkout: {
    lineItems: [],
  },
};

export const StoreContext = createContext(defaultValues);
// Check if it's a browser
const isBrowser = typeof window !== 'undefined';

export const StoreProvider = ({ children }) => {
  const temp = () => localStorage.getItem('customertoken') || '';
  const [checkout, setCheckout] = useState(defaultValues.checkout);
  const [isCartOpen, setCartOpen] = useState(false);
  const [customertoken, setCustomerToken] = useState(temp);
  const [associateCustomer, { data }] = useMutation(
    ASSOCIATE_CUSTOMER_TO_CHECKOUT
  );
  const [getUser] = useLazyQuery(QUERY_USER);

  const toggleCartOpen = () => setCartOpen(!isCartOpen);

  useEffect(() => {
    initializeCheckout();
    //console.log(customertoken, 'en el set');
  }, []);

  const getNewId = async () => {
    try {
      const newCheckout = await client.checkout.create();
      if (isBrowser) {
        localStorage.setItem('checkout_id', newCheckout.id);
      }
      return newCheckout;
    } catch (error) {
      console.error(error);
    }
  };

  const initializeCheckout = async () => {
    try {
      // Check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem('checkout_id')
        : null;
      let newCheckout = null;
      if (currentCheckoutId) {
        // If id exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId);
        //!experiment
        /*   const { data } = getUser({
          variables: { customerAccessToken: customertoken },
        }); */

        const asociado = await associateCustomer({
          variables: {
            checkoutId: currentCheckoutId,
            customerAccessToken: customertoken,
          },
        });
        console.log(asociado, 'maldita suerte!! 💀');
        //!experiment
        if (newCheckout.completedAt) {
          newCheckout = await getNewId();
        }
      } else {
        // If id does not, create new checkout
        newCheckout = await getNewId();
      }
      // Set checkout to state
      setCheckout(newCheckout);
    } catch (error) {
      console.error(error);
    }
  };

  const addProductToCart = async (variantId, qty) => {
    try {
      const lineItems = [
        {
          variantId,
          quantity: !qty ? 1 : qty,
        },
      ];
      const newCheckout = await client.checkout.addLineItems(
        checkout.id,
        lineItems
      );
      setCheckout(newCheckout);
      //ir a productos individuales y agrear a carro para ir con el video
      //buy now button code
      // window.open(addItems.webUrl,"_blank")
    } catch (error) {
      console.error(error);
    }
  };

  const removeProductFromToCart = async (lineItemId) => {
    try {
      const newCheckout = await client.checkout.removeLineItems(checkout.id, [
        lineItemId,
      ]);
      setCheckout(newCheckout);
    } catch (error) {
      console.error(error);
    }
  };

  const updateProductsFromCart = async (lineItemId, qty) => {
    try {
      const lineItemsToUpdate = [{ id: lineItemId, quantity: qty - 1 }];
      const newCheckout = await client.checkout.updateLineItems(
        checkout.id,
        lineItemsToUpdate
      );
      setCheckout(newCheckout);
    } catch (error) {
      console.log(error);
    }
  };

  /*   const getCollection = async () => {
    const collections = await client.collection.fetchAllWithProducts();
    console.log(collections);
  }; */

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
        removeProductFromToCart,
        updateProductsFromCart,
        toggleCartOpen,
        isCartOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
