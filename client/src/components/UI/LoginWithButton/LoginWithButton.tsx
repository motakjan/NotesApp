import { Button, IconButton } from '@mui/material';

interface LoginWithButtonProps {
  icon: JSX.Element;
  text: string;
  type: string;
  color: string;
}

export const LoginWithButton = ({ icon, text, type, color }: LoginWithButtonProps) => {
    console.log(type);
    return (
        <Button 
            variant="contained"
            color="inherit"
            sx={{
                width: '100%',
                mb: '0.5rem',
            }}  
            startIcon={
                <IconButton
                    sx={{ 
                        color,
                        p: 0,
                    }}
                >
                    {icon}
                </IconButton>
            }
        >
            {text}
        </Button>
    )
}
