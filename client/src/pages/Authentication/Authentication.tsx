import { authApi } from '../../api/auth';
import { AxiosError } from 'axios';
import { GetAuthResType, LoginDataType } from '../../types/authTypes';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../components/Authentication/Login';
import { Box } from '@mui/material';
import { LoginInfo } from '../../components/Authentication/LoginInfo/LoginInfo';
import './Authentication.css';

export const Authentication = () => {
  const { data, mutate } = useMutation<GetAuthResType, AxiosError, LoginDataType>('login', authApi.loginUser);
  const { data: googleLoginData, mutate: googleLoginMutate } = useMutation<GetAuthResType, AxiosError, LoginDataType>(
    'googleLogin',
    authApi.googleLoginUser
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      localStorage.setItem('auth-token', data.jwtToken);
      navigate('/');
    }
  }, [data, navigate]);

  useEffect(() => {
    if (googleLoginData) {
      localStorage.setItem('auth-token', googleLoginData.jwtToken);
      navigate('/');
    }
  }, [googleLoginData, navigate]);

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

  const googleLogin = async (googleData: any) => {
    googleLoginMutate(googleData);
  };

  console.log(googleLoginData);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundImage:
          'url(https://media4.giphy.com/media/GYqIFQvPgVBo4/giphy.gif?cid=ecf05e47a1lezjyiqz8rexre346zmyb1wsu2mzjecxpznj9y&rid=giphy.gif&ct=g)',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box className="loginGradientBox">
        <LoginInfo />
        <Login login={onSubmit} googleLogin={googleLogin} />
      </Box>
    </Box>
  );
};
