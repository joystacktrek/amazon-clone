import { createContext, useReducer } from "react";

const defaultValue = {
  cart: [],
  cartSize: 0,
  setCart: () => {},
};

export const CartContext = createContext(defaultValue);

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add_item": {
      return state.concat(action.payload);
    }

    case "clear_cart": {
      return [];
    }

    default:
      throw Error("unknown action: " + action.type);
  }
};

export const CartContextProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const cartSize = cart.length;

  return (
    <CartContext.Provider value={{ cart, cartSize, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
