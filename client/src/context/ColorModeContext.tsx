import React, { createContext, useContext, useEffect, useState } from 'react';
import { PaletteMode } from '@mui/material';

type ColorModeContextType = { 
    toggleColorMode: () => void,
    mode: PaletteMode
}

const ColorModeContext = createContext<ColorModeContextType>({
  toggleColorMode: () => {},
  mode: 'light'
});

export const ColorModeContextProvider: React.FC = ({ children }: any) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedMode: any = localStorage.getItem('color-mode');
    if (storedMode) {
      setMode(['light', 'dark'].includes(storedMode) ? storedMode : 'light');
    } else {
      setMode('light');
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('color-mode', mode);
  }, [mode])

  const toggleColorMode = React.useCallback(() => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);
    
  return (
    <ColorModeContext.Provider
      value={{
        mode, toggleColorMode
      }}
    >
      {children}
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => useContext(ColorModeContext);
