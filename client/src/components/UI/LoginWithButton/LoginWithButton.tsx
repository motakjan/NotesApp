import { Button, IconButton } from '@mui/material';

interface LoginWithButtonProps {
  icon: JSX.Element; 
  color: string;
}

export const LoginWithButton = ({ icon,  color }: LoginWithButtonProps) => (
  <Button 
    variant="contained"
    color="inherit"
    sx={{
      width: '100%',
      mb: '1rem',
      height: '2.6rem',
      backgroundColor: 'white',
    }}  
  >
    <IconButton
      sx={{ 
        color,
        p: 0,
      }}
    >
      {icon}
    </IconButton>
  </Button>
)
