import React, { createContext, useState } from 'react'

//Lets create a context instead of heavy prop drilling
//With the help of context we can use cart and setCart 
//throughout the whole application.
//Context-API is used to pass state from component to component

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  return (
  <Cart.Provider value={{ cart, setCart }}>
      {children}
  </Cart.Provider>);
};

export default Context;