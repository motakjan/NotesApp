import { Button, Icon } from '@mui/material';

interface LoginWithButtonProps {
  icon: JSX.Element;
  color: string;
}

export const LoginWithButton = ({ icon, color }: LoginWithButtonProps) => (
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
    <Icon
      sx={{
        color,
        p: 0,
        display: 'flex',
        alignSelf: 'center',
      }}
    >
      {icon}
    </Icon>
  </Button>
);
