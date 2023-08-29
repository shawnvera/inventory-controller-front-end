'use client'

import { createContext, useReducer, useContext } from 'react';

// Define the initial state
const initialState = {
  user: null,
};

// Create a context object
const GlobalStateContext = createContext();

// Reducer function to handle state changes
function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

// Provider component to wrap the app
export function GlobalStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook to use the global state
export function useGlobalState() {
  return useContext(GlobalStateContext);
}
