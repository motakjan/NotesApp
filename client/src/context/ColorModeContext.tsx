import React, { useContext, useState, createContext } from 'react';
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
