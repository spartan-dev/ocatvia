import React, { createContext, useState } from "react";
import Client from "shopify-buy";
const client = Client.buildClient({
  domain: "octavia-gourmet.myshopify.com",
  storefrontAccessToken: " 3cebf316cd47b93ca1b5997118380079",
});
const defaultValues = {
  isCartOpen: false,
  cart: [],
  //addProductToCart: () => {},
  client,
};
export const StoreContext = createContext(defaultValues);
export const StoreProvider = ({ children }) => {
  const addProductToCart = async (variantId) => {
    try {
      const newCheckout = await client.checkout.create();
      const lineItems = [
        {
          variantId,
          quantity: 1,
        },
      ];
      const addItems = await client.checkout.addLineItems(
        newCheckout.id,
        lineItems
      );
      //ir a productos individuales y agrear a carro para ir con el video
      console.log(addItems);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <StoreContext.Provider value={{ ...defaultValues, addProductToCart }}>
      {children}
    </StoreContext.Provider>
  );
};
