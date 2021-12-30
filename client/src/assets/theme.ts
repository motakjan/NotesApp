import { PaletteMode } from '@mui/material';

export const getCurrentTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                primary: {
                    main: '#011a2d',
                    dark: '#062843',
                },
                secondary: {
                    main: '#FFB500',
                    dark: '#ffc83e',
                    light: '#f9c049',
                },
            }
            : {
                primary: {
                    main: '#011a2d',
                    dark: '#062843',
                },
                secondary: {
                    main: '#FFB500',
                    dark: '#ffc83e',
                    light: '#f9c049',
                },
                background: {
                    default: '#091c2b',
                    paper: '#00101c',
                },
            }),
    },
});
