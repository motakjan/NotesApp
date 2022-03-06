import { authApi } from '../../api/auth';
import { AxiosError } from 'axios';
import { GetAuthResType, LoginDataType } from '../../types/authTypes';
import { useMutation } from 'react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../components/Authentication/Login';
import { GradientBox } from '../../components/UI/GradientBox/GradientBox';
import { Alert, IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const Authentication = () => {
  const { data, error, mutate } = useMutation<
    GetAuthResType,
    AxiosError,
    LoginDataType
  >('login', authApi.loginUser);
  const navigate = useNavigate();
  const [ open, setOpen ] = useState(false);

  useEffect(() => {
    if (data) {
      localStorage.setItem('auth-token', data.jwtToken);
      navigate('/');
    }
    if (error)
      setOpen(true)
  }, [data, navigate, error]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const loginFormData = new FormData(event.currentTarget);
    const email = loginFormData.get('email')?.toString();
    const password = loginFormData.get('password')?.toString();
    mutate({
      email,
      password,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <GradientBox
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Snackbar
        open={open}
        anchorOrigin={{
          vertical: 'bottom', horizontal: 'center'
        }}
      >
        <Alert
          severity="error"
          sx={{
            width: '100%' 
          }}
          variant="filled"
          action={action}
        >
          Invalid Credentials.
        </Alert>
      </Snackbar>
      <Login login={onSubmit} />
    </GradientBox>
  );
};
