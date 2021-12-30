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
            variant="outlined" 
            color="inherit"
            startIcon={
                <IconButton
                    sx={{ 
                        color,
                        p: 0
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
