import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Authentication } from './pages/Authentication';
import { useColorMode } from './context/ColorModeContext';

export const App: React.FC = () => {
    const { mode,toggleColorMode } = useColorMode();

    return  (
        <Box
            sx={{
                width: '100%',
            }}
        >
            {mode} mode
            <IconButton
                sx={{
                    ml: 1 
                }}
                onClick={toggleColorMode}
                color="inherit"
            >
                {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
            <Authentication />
        </Box>
    );
}
