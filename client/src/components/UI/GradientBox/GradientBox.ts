import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GradientBox = styled(Box)({
  background: 'linear-gradient(-45deg, #fc6435, #d9d0d2, #23a6d5, #ff3d67 )',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  height: '100vh',
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%',
    },
    '50%': {
      backgroundPosition: '100% 50%',
    },
    '100%': {
      backgroundPosition: '0% 50%',
    },
  },
});
