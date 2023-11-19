import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: 'black', subcolor: 'steelblue' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

function ColorProvider({ children }) {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('steelblue');

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
}

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
