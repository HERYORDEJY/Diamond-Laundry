import React, { useMemo, useReducer, useState } from 'react';
import TheContext, { initialState, initialContext } from './TheContext';
import reducer from './reducers';

export default function TheProvider({ children, value }) {
  const [state, setState] = useState({
    bio: { name: 'OYEBODE YUSUF', address: 'Ibahim Taiwo Road' },
    currentService: 'Iron Only',
  });
  // const [articleState, dispatch] = useReducer(reducer, initialState);
  // const value_ = useMemo(() => [articleState, dispatch], [articleState]);
  return (
    <TheContext.Provider value={{ ...state, ...value }}>
      {children}
    </TheContext.Provider>
  );
}
