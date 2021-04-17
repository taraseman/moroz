import React from 'react';

export const ContextActiveMesagges = React.createContext({
  numberOfMessages: 0,
  setNumberOfMessages: () => {},
});
