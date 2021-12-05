import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline } from '@mui/material';
import { getCurrentTheme } from '../../assets/theme';
import { useColorMode } from '../../context/ColorModeContext';
import * as React from 'react';


export const Layout: React.FC<React.ReactNode> = ({ children }) => {
    const { mode } = useColorMode();
    const theme = React.useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    )
}

