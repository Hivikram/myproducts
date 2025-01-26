import React from "react";
import { useState, Children, useContext } from "react";

const Context = React.createContext();

export const Contextobj = ({ children }) => {
  const props = {};
  return <Context.Provider value={props}>{children}</Context.Provider>;
};
export const useCon = () => {
  return useContext(Context);
};
