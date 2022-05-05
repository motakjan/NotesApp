import { Box, createTheme, Fade, LinearProgress, Paper } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { getCurrentTheme } from '../../assets/theme';
import { useMemo } from 'react';
import { useColorMode } from '../../context/ColorModeContext';

type LoadingPropsType = {
  status: string;
};

export const Loading: React.FC<LoadingPropsType> = ({ status }) => {
  const { mode } = useColorMode();
  const theme = useMemo(() => createTheme(getCurrentTheme(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Fade in={status === 'loading'}>
        <Paper
          sx={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '0',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              flexDirection: 'column',
            }}
          >
            <img
              src={mode === 'dark' ? '/logoDark.svg' : '/logo.svg'}
              alt="logo"
              style={{
                width: '10rem',
              }}
            />
            <LinearProgress
              color="secondary"
              sx={{
                width: '70vw',
                maxWidth: '25rem',
                borderRadius: '0.5rem',
              }}
            />
          </Box>
        </Paper>
      </Fade>
    </ThemeProvider>
  );
};
