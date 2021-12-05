import { PaletteMode } from '@mui/material';

export const getCurrentTheme = (mode: PaletteMode) => ({
    palette: {
        mode,
        ...mode === 'light'
            ? {
                primary: {
                    light: '#393939',
                    main: '#1a1a1a',
                    dark: 'rgba(255,12,61,0.86)',
                    contrastText: '#fff',
                },
                secondary: {
                    light: 'rgba(255,45,88,0.86)',
                    main: 'rgba(255,12,61,0.86)',
                    dark: '#b71a25',
                    contrastText: '#000',
                },
            }
            : {
                primary: {
                    light: '#393939',
                    main: '#1a1a1a',
                    dark: 'rgba(255,12,61,0.86)',
                    contrastText: '#fff',
                },
                secondary: {
                    light: 'rgba(255,45,88,0.86)',
                    main: 'rgba(255,12,61,0.86)',
                    dark: '#b71a25',
                    contrastText: '#000',
                },
            },
    },
});
