import React, { createContext, useContext, useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';

type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: PaletteMode;
};

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: 'light',
});

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const storedMode = localStorage.getItem('color-mode') as PaletteMode;
    if (storedMode) {
      setMode(['light', 'dark'].includes(storedMode) ? storedMode : 'light');
    } else {
      setMode('light');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('color-mode', mode);
  }, [mode]);

  const toggleColorMode = React.useCallback(() => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <ColorModeContext.Provider
      value={{
        mode,
        toggleColorMode,
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};
