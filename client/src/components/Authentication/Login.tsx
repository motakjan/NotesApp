import { NappLink } from '../UI/Link/NappLink';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoginWithButton } from '../UI/LoginWithButton/LoginWithButton';
import { Avatar, Divider } from '@mui/material';

type LoginPropsType = {
  login: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Login: React.FC<LoginPropsType> = ({ login }) => (
  <Container
    component="main"
    maxWidth="xs"
    sx={{
      backgroundColor: '#eef0ff',
      p: '10px 2rem 2rem 2rem',
      boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
      borderRadius: '6px',
      m: '0.5rem',
    }}
  >
    <CssBaseline />
    <Box
      sx={{
        marginTop: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          m: 1,
          bgcolor: 'orange',
        }}
      >
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>

      <Box
        component="form"
        onSubmit={login}
        noValidate
        sx={{
          mt: 1,
        }}
      >
        <TextField
          margin="normal"
          variant="outlined"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            height: '2.8rem',
          }}
        >
          Sign In
        </Button>
        <Typography
          sx={{
            color: 'gray',
            fontSize: '0.8rem',
            textAlign: 'center',
            p: '1rem 0',
          }}
          component="div"
        >
          OR SIGN IN WITH
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
          }}
        >
          <LoginWithButton icon={<GoogleIcon />} color="black" />
          <LoginWithButton icon={<FacebookIcon />} color="blue" />
        </Box>
        <Divider
          variant="middle"
          sx={{
            m: '1rem 0',
          }}
        />
        <Grid container>
          <Grid item xs>
            <NappLink text="Forgot Password" />
          </Grid>
          <Grid item>
            <NappLink text="Sign Up" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  </Container>
);
