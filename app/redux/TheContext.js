import React, { createContext } from 'react';

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore
// export const initialState = {
//   articles: [],
// };
//
// export const initialContext = [{ ...initialState }, () => {}];

const TheContext = createContext();

export default TheContext;
