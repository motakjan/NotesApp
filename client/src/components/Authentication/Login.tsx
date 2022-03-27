import { NappLink } from '../UI/Link/NappLink';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoginWithButton } from '../UI/LoginWithButton/LoginWithButton';
import { Divider } from '@mui/material';
import { NappLogo } from '../UI/NappLogo/NappLogo';
import { AnimatedBox } from '../UI/FramerMotion/AnimatedDiv';
import { LOGIN_FORM_VARIANTS } from '../../utils/framerMotion/variants';
import { Theme } from '@mui/material/styles';

interface ILoginProps {
  login: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Login: React.FC<ILoginProps> = ({ login }) => (
  <AnimatedBox initial="hidden" animate="visible" variants={LOGIN_FORM_VARIANTS}>
    <Container
      component="main"
      maxWidth={false}
      sx={{
        width: 'auto',
        backgroundColor: 'white',
        p: '10px 2rem 2rem 2rem',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;',
        borderRadius: '6px',
        m: '1rem',
        maxWidth: '400px',
      }}
    >
      <CssBaseline />

      <Box
        sx={{
          marginTop: 3,
          fontFamily: 'Quicksand',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <NappLogo width="50px" height="55px" fill="black" />
        <Typography
          component="h1"
          variant="h5"
          sx={{
            mt: '5px',
            fontFamily: 'Quicksand',
          }}
        >
          Sign in
        </Typography>

        <Box
          component="form"
          onSubmit={login}
          noValidate
          sx={{
            mt: 1,
            fontFamily: 'Quicksand',
          }}
        >
          <TextField
            margin="normal"
            color="secondary"
            variant="standard"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            inputProps={{
              style: { fontFamily: 'Quicksand' },
            }}
            InputLabelProps={{ style: { fontFamily: 'Quicksand' } }}
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            color="secondary"
            variant="standard"
            required
            fullWidth
            name="password"
            label="Password"
            inputProps={{
              style: { fontFamily: 'Quicksand' },
            }}
            InputLabelProps={{ style: { fontFamily: 'Quicksand' } }}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={(theme: Theme) => ({
              mt: 3,
              height: '2.8rem',
              backgroundColor: '#020102 ',
              fontFamily: 'Quicksand',
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: 'white',
              },
            })}
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
  </AnimatedBox>
);
