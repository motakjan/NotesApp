import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { LoginWithButton } from '../UI/LoginWithButton/LoginWithButton';

type LoginPropsType = {
    login: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const Login: React.FC<LoginPropsType> = ({ login }) => (
    <Container
        component="main"
        maxWidth="xs"
        sx={{
            backgroundColor: '#2e2d4abd',
            p: '10px 2rem 2rem 2rem',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px;'
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
            <Typography
                component="h1"
                variant="h5"
            >
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
                    variant="standard"
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
                    variant="standard"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <FormControlLabel
                    control={<Checkbox
                        value="remember"
                        color="primary"
                    />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                        mt: 3, mb: '0.5rem',
                    }}
                >
                        Sign In
                </Button>
                <LoginWithButton 
                    icon={ <GoogleIcon /> } 
                    text="Continue with Google account" 
                    type="google"
                    color="orange"
                />
                <LoginWithButton 
                    icon={ <FacebookIcon /> } 
                    text="Continue with Facebook account" 
                    type="facebook"
                    color="blue"
                />
                <Grid container>
                    <Grid
                        item
                        xs
                    >
                        <Link
                            href="#"
                            variant="body2"
                        >
                                Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            href="#"
                            variant="body2"
                        >
                                Dont have an account? Sign Up
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
);
