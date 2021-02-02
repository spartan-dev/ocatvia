import React, { createContext, useState, useEffect } from "react";
import Client from "shopify-buy";
const client = Client.buildClient({
  domain: "octavia-gourmet.myshopify.com",
  storefrontAccessToken: "3cebf316cd47b93ca1b5997118380079",
});
const defaultValues = {
  isCartOpen: false,
  toggleCartOpen: () => {},
  cart: [],
  addProductToCart: () => {},
  removeProductFromToCart: () => {},
  client,
  checkout: {
    lineItems: [],
  },
};
export const StoreContext = createContext(defaultValues);

export const StoreProvider = ({ children }) => {
  const [checkout, setCheckout] = useState(defaultValues.checkout);
  const [isCartOpen, setCartOpen] = useState(false);
  const toggleCartOpen = () => setCartOpen(!isCartOpen);

  useEffect(() => {
    initializeCheckout();
  }, []);

  const initializeCheckout = async () => {
    try {
      // Check if it's a browser
      const isBrowser = typeof window !== "undefined";

      // Check if id exists
      const currentCheckoutId = isBrowser
        ? localStorage.getItem("checkout_id")
        : null;

      let newCheckout = null;

      if (currentCheckoutId) {
        // If id exists, fetch checkout from Shopify
        newCheckout = await client.checkout.fetch(currentCheckoutId);
      } else {
        // If id does not, create new checkout
        newCheckout = await client.checkout.create();
        if (isBrowser) {
          localStorage.setItem("checkout_id", newCheckout.id);
        }
      }

      // Set checkout to state
      setCheckout(newCheckout);
    } catch (error) {
      console.error(error);
    }
  };

  const addProductToCart = async (variantId) => {
    try {
      const lineItems = [
        {
          variantId,
          quantity: 1,
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
  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        checkout,
        addProductToCart,
        removeProductFromToCart,
        toggleCartOpen,
        isCartOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
