import { authApi } from '../../api/auth';
import { AxiosError } from 'axios';
import { GetAuthResType, LoginDataType } from '../../types/authTypes';
import { useMutation } from 'react-query';
import { useEffect } from 'react';
import { Login } from '../../components/Authentication/Login';
import { GradientBox } from '../../components/UI/GradientBox/GradientBox';

export const Authentication = () => {
    const { data, mutate } = useMutation<
        GetAuthResType,
        AxiosError,
        LoginDataType
    >('login', authApi.loginUser);

    useEffect(() => {
        data && localStorage.setItem('auth-token', data.jwtToken);
    }, [data]);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const loginFormData = new FormData(event.currentTarget);
        const email = loginFormData.get('email')?.toString();
        const password = loginFormData.get('password')?.toString();
        mutate({ 
            email, 
            password
        });
    };

    return (
        <GradientBox
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Login login={onSubmit} />
        </GradientBox>
    );
};
