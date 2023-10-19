import React, { createContext, useReducer } from "react";
// DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
  // console.log({ initialState });
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

// This is ho we use it inside a component.....

// export const useStateValue = () => useContext(StateContext);
// console.log(useStateValue);
