import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const GradientBox = styled(Box)({
    backgroundColor: '#0F0E13',
    backgroundImage: 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
    height: '100vh'
});
