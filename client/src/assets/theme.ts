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
          main: '#170b4a',
          light: '#49507f',
          dark: '#0c1135',
        },
        secondary: {
          main: '#e80050',
          light: '#ec3373',
          dark: '#a20038',
        },
        text: {
          primary: '#0c0c0c',
          secondary: '#0c0c0c',
          disabled: '#b9b9b9',
        },
        error: {
          main: '#ff2f1e',
          light: '#ff5447',
          dark: '#ad1d12',
        },
        warning: {
          main: '#ff9800',
          light: '#ffab36',
          dark: '#af6b09',
        },
        info: {
          main: '#2296f3',
          light: '#4fabf3',
          dark: '#196bad',
        },
        success: {
          main: '#48ad4c',
          light: '#71c374',
          dark: '#317734',
        },
        background: {
          default: '#fff',
          paper: '#f8f8f8',
        },
        custom: {
          dashboardDrag: '#170b4a18',
          cardColor: '#fff',
          cardBorderColor: '#d1d1d1',
          addTaskCard: '#fff',
          notificationScroll: '#e0e0e0',
          notificationItemHover: '#ececec',
        },
        nappPersonModal: {
          addTaskUserModalHover: '#efefef',
          addTaskUserModalSelected: '#dddddd',
        }
      }
      : {
        primary: {
          main: '#ffffff',
          light: '#292929',
          dark: '#afafaf',
        },
        secondary: {
          main: '#e80050',
          light: '#ec3373',
          dark: '#a20038',
        },
        text: {
          primary: '#ececec',
          secondary: '#e4e4e4',
          disabled: '#b9b9b9',
        },
        error: {
          main: '#ff2f1e',
          light: '#ff5447',
          dark: '#ad1d12',
        },
        warning: {
          main: '#ff9800',
          light: '#ffab36',
          dark: '#af6b09',
        },
        info: {
          main: '#2296f3',
          light: '#4fabf3',
          dark: '#196bad',
        },
        success: {
          main: '#48ad4c',
          light: '#71c374',
          dark: '#317734',
        },
        background: {
          default: '#1a1a1a',
          paper: '#141414',
        },
        custom: {
          dashboardDrag: '#2b262855',
          cardColor: '#0e0e0e',
          cardBorderColor: '#292929',
          addTaskCard: '#090909',
          notificationScroll: '#1a1a1a',
          notificationItemHover: '#1d1d1d',
        },
        nappPersonModal: {
          addTaskUserModalHover: '#131313',
          addTaskUserModalSelected: '#141414',
        }
      }),
  },
  components: {
    MuiSnackbar: {
      variants: [
        {
          props: { variant: 'light' },
          style: {
            '& .MuiSnackbarContent-root': {
              background: '#160c4a',
              color: '#fff'
            }
          }
        },
        {
          props: { variant: 'dark' },
          style: {
            '& .MuiSnackbarContent-root': {
              background: '#1c1c1c',
              color: '#fff'
            }
          }
        }
      ]
    },
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
