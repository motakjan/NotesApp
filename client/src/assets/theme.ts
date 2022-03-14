import { PaletteMode } from '@mui/material';

// prettier-ignore
export const getCurrentTheme = (mode: PaletteMode) => ({
  typography: {
    fontFamily: ['"Quicksand"', '"Segoe UI Emoji"'].join(','),
  },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        primary: {
          main: '#0c427a',
          dark: '#062843',
          light: '#ffffff',
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
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '24px',
          fontSize: '12px',
          height: '24px',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '1px',
          },
        },
      },
    },
  },
});
