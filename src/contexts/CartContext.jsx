import { createContext, useState } from "react";

const defaultValue = {
  cart: [],
  cartSize: 0,
  setCart: () => {},
};

export const CartContext = createContext(defaultValue);

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const cartSize = cart.length;
  return (
    <CartContext.Provider value={{ cart, cartSize, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
