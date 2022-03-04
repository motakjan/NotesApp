import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GradientBox = styled(Box)({ 
  background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
  backgroundSize: '400% 400%',
  animation: 'gradient 15s ease infinite',
  height: '100vh',
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%':{
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
});
